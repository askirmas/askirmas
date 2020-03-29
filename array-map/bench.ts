import * as fns from '.'
import { bencher } from '../bencher'

//TODO forEach is not launching

const idfn = (x: any) => x
, args = [10, 1000, 100000, 10000000]
.reduce((args, length) => {
  args[`${length}, ${idfn.name}`] = [new Array(length).fill(0), idfn]
  return args
}, {} as Record<string, [number[], typeof idfn]>)

bencher(fns, args)