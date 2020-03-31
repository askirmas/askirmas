import { benchmarkBencher } from "./benchmark"
import { myBencher } from "./my"

const b = process.env.B

, bencher = b === 'bm'
? benchmarkBencher
: myBencher

// , mainPath = process.mainModule?.filename
// .replace(process.cwd(), '')
// .replace(/^[\/\\]/, '')

export {
  bencher
}
