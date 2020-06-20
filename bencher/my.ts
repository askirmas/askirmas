import {performance} from "perf_hooks"

import {shuffle, objectFrom, isNative} from "../utils"
import { statTemplate, Stat } from "../defs"

const {now} = performance
, maxSamples = 100
, maxCycles = 5
// maxTime
// notShuffleArgs
// notShuffleFuncs

export {
  myBencher
}

function myBencher<
  P extends string, F extends P, A extends string,
  I extends any[], O
>(
  //TODO TS that can be string for method check
  fns: Record<F, (...args: I) => O>,
  args: Record<A, I>,
  prepare?: Record<P, (...args: any) => I>
) {
  const rc = maxSamples * maxCycles
  //, rcK = rc / (rc - 1)
  , argNames = Object.keys(args) as A[]
  , {length: argsLength} = argNames
  , fnNames = Object.keys(fns) as F[]
  , {length: fnLength} = fnNames
  , results = objectFrom(argNames, fnNames, statTemplate)
  
  for (let cycle = maxCycles; cycle--;) {
    const argsShuffled = shuffle(argNames)
    
    for (let ai = 0; ai < argsLength; ai++) {
      const argName = argsShuffled[ai]
      , result = results[argName]
      , fNSchuffled = shuffle(fnNames)

      for (let fi = 0; fi < fnLength; fi++) {
        const fnName = fNSchuffled[fi] 
        , fn = fns[fnName]
        //TODO: move normalizetion stuff before `cycle` loop
        , _fnArgs = args[argName as keyof typeof args]
        , fnArgs = !(prepare && fnName in prepare)
        ? _fnArgs
        : prepare[fnName](..._fnArgs)
        //</normalized>
        , suite = result[fnName]
        , isMethod = typeof fn === 'string'
        if (suite.error)
          continue
          
        let elapsed = 0
        for (let i = maxSamples; i--;) {
          try {
            let d0: number, start: number, end: number
            
            if (isMethod) {             
              const args4native = fnArgs.slice() 
              , $this = args4native.shift()
              
              d0 = now()
              start = now()
              $this[fn](...args4native)
              end = now()
            } else {
              d0 = now()
              start = now()
              fn(...fnArgs as Parameters<typeof fn>)
              end = now()
            }
            
            const el = (end - start) - (start - d0)
            
            elapsed += el
            suite.avgOfSquares += el * el / rc
          } catch(e) {
            suite.error = typeof e === 'string'
            ? e
            : `@${fnName} #${e.name}: ${e.message} - ${e.stack}`
            
            i = 0
          }
        }
        suite.elapsed += elapsed

        if (cycle !== 0) 
          continue
        elapsed = suite.elapsed
        
        const average = elapsed / rc 
        , stat: Partial<Stat> = {
          average: average | 0,
          ops: (1000 / average) | 0,
          elapsed: elapsed | 0,
          //observationalPerc: ((Math.sqrt(rcK * (suite.avgOfSquares / (average ** 2) - 1)) * 1000) | 0) / 10
        }
        Object.assign(suite, stat)
      }
    }
  }

  console.log(JSON.stringify(results, null, 2))

  return results
}