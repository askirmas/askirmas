import { bencher } from "../bencher";

import * as Fns from '.'
import * as constructors from '../assoc_number-push'

bencher(
  Fns,
  {
    "1": [1],
    "10": [10],
    "100": [100],
    "1000": [1000],
    "10000": [10000],
    "100000": [100000],
  },
  {
    "objectChange": (size: number) => [constructors.objectAssign(size), size],
    "arrayChange": (size: number) => [constructors.arrayFill(size), size],
    "mapChange": (size: number) => [constructors.mapSet(size), size]
  }
)