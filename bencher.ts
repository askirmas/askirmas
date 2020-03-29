import {Suite} from "benchmark"

export {
  bencher
}

function bencher<I extends any[], O>(fns: Record<string|number, (...args: I) => O>, args: Record<string, I>) {
  const functions = Object.values(fns);

  for (const argName in args) {
    const runner = new Suite()
    
    for (const fn of functions)
      runner.add(
        `${fn.name}(${argName})`,
        () =>
          fn(...args[argName as keyof typeof args] as Parameters<typeof fn>)
      )

    runner
    .on('cycle', ({target}: any) => console.log(`${target}`))
    .on('complete', function(this: Suite) {
      console.log(`Fastest is ${this.filter('fastest').map(
        //@ts-ignore
        'name'
      )}`)
    })
    .run({name: argName, async: !!process.env.ASYNC})
  }
}