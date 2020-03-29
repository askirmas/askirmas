import Benchmark, {Suite} from "benchmark"

export {
  bencher
}

function bencher<I extends any[], O>(fns: Record<string|number, (...args: I) => O>, args: Record<string, I>) {
  console.log(`## ${
    process.mainModule?.filename
    .replace(process.cwd(), '')
    .replace(/^[\/\\]/, '')
  }`)

  for (const argName in args) {
    const runner = new Suite()
    
    for (const fnName in fns) {
      const fn = fns[fnName]
      runner.add(
        `${fn.name || fnName}`,
        () => {
          //@ts-ignore
          fn(...args[argName as keyof typeof args] as Parameters<typeof fn>)
        }
      )
    }
    runner
    .on('start', () => console.log(`### ${argName}`))
    .on('error', ({target: {error}}: any) => console.error(error))
    .on('cycle', ({target}: any) => console.log(`${target}\n`))
    .on('complete', function(this: Suite) {
      console.log(`#### Fastest: ${this.filter('fastest').map(
        //@ts-ignore
        'name'
      )}`)
    })
    .run({name: argName, async: !!process.env.ASYNC})
  }
}