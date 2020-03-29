import { bencher } from "../bencher";

import * as Fns from '.'
import args from './args.json'
//@ts-ignore
bencher(Fns, args as Record<string, [number]>)
