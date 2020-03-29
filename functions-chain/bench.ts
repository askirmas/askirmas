import { bencher } from "../bencher"

bencher(
  {
    "idfn^1 v1": nesting1(1000, 1), "idfn^1 v2": nesting2(1000, 1), 
    "idfn^10 v1": nesting1(1000, 10), "idfn^10 v2": nesting2(1000, 10), 
    "idfn^100 v1": nesting1(1000, 100), "idfn^100 v2": nesting2(1000, 100), 
    "idfn^1000 v1": nesting1(1000, 1000), "idfn^1000 v2": nesting2(1000, 1000),
  },
  {
    "0": [0]
  }
)


function nesting1(calls: number, depth: number) {
  const fns = new Array(depth)
  fns[0] = (x: any) => x

  for (let i = 1; i < depth; i++)
    fns[i] = (x: any) => fns[i - 1](x)

  return (x: any) => {
    for(let i = calls / depth; i--; )
      fns[depth - 1](x)
  }
}

function nesting2(calls: number, depth: number) {
  const fns = new Array(depth)
  fns[0] = function(x: any) {return x}
  for (let i = 1; i < depth; i++)
    fns[i] = function(x: any) {return fns[i - 1](x)}
  return function(x: any) {
    for(let i = calls / depth; i--; )
      fns[depth - 1](x)
  }
}