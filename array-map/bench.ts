import * as fns from '.'
import { bencher } from '../bencher'

const idfn = (x: any) => x
, args = [10, 30, 100, 300, 1000, 3000, 10000, 100000, 10000000]
.reduce((args, length) => {
  args[`${length}, ${idfn.name}`] = [new Array(length).fill(0), idfn]
  return args
}, {} as Record<string, [number[], typeof idfn]>)

bencher(fns, args)