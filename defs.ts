export type Stat = {
  error: string | undefined
  elapsed: number
  average: number
  ops: number
  avgOfSquares: number
  //observationalPerc: number
}
const statTemplate: Stat = {
  error: undefined,
  elapsed: 0,
  ops: 0,
  avgOfSquares: 0,
  //observationalPerc: 0,
  average: 0
}

export {
  statTemplate
}