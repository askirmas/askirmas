import { Suite } from "benchmark"

export {
  benchmarkBencher
}

function benchmarkBencher<
  P extends string|number, F extends P, A extends string,
  I extends any[], O
>(
  fns: Record<F, (...args: I) => O>,
  args: Record<A, I>,
  prepare?: Record<P, (...args: any) => I>
) {
  console.log('[{}')
  for (const argName in args) {
    const runner = new Suite()
    
    for (const fnName in fns) {
      const fn = fns[fnName]
      , _fnArgs = args[argName as keyof typeof args]
      , fnArgs = !(prepare && fnName in prepare)
      ? _fnArgs
      : prepare[fnName](..._fnArgs)

      runner.add(
        `${fn.name || fnName}`,
        () => {
          //@ts-ignore
          fn(...fnArgs as Parameters<typeof fn>)
        }
      )
    }
    runner
    //.on('start', () => console.log(`### ${argName}`))
    .on('error', ({target: {error}}: any) => console.error(error))
    .on('cycle', function(this: Suite,{target}: any) {
      console.log(',',JSON.stringify(this))
      //console.log(`${target}\n`)
    })
    .on('complete', function(this: Suite) {
      /*console.log(`#### Fastest: ${this.filter('fastest').map(
        //@ts-ignore
        'name'
      )}`)*/
    })
    .run({name: argName, async: !!process.env.ASYNC, })
  }
  console.log(']')
}
