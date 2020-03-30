import * as fns from '.'
import { bencher } from '../bencher'
import { keyed } from '../generators'

const typer = (k: any, v: any) => `${typeof k}${typeof v}`
, args = {
  0: [keyed(0), typer],
  1: [keyed(1), typer],
  10: [keyed(1), typer],
  100: [keyed(100), typer],
  1000: [keyed(1000), typer],
  100000: [keyed(100000), typer],
}

bencher(fns, args, {
  mapEntriesKV: (source, fn) => {
    const map = new Map()
    for (const key in source)
      map.set(key, source[key])
    return [map, fn]
  }
})
