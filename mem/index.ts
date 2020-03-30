const lengths = [1, 8, 64, 200, 256, 257, 300, 1000, 1024, 1240, 3000, 10000, 30000, 100000] as const
, results: Record<typeof lengths[number], number> = {}
let length, i = 0

do {
  length = lengths[i]
  results[length] = {}

  try {global.gc && global.gc()} catch (e) {}
  const h0 = process.memoryUsage().heapUsed
  const result = main()
  const h1 = process.memoryUsage().heapUsed;
  try {global.gc && global.gc()} catch (e) {}

  (length === result.length) && (results[length]['r'] = h1 - h0)
} while ( ++i < lengths.length) 

console.log(JSON.stringify(results, null, 2))

function main() {
  try {global.gc && global.gc()} catch (e) {}
  const h0 = process.memoryUsage().heapUsed
  const $return = newArray()
  const h1 = process.memoryUsage().heapUsed;
  try {global.gc && global.gc()} catch (e) {}

  (length === $return.length) && (results[length]['m'] = h1 - h0)
  return $return  
}

function newArray() {
  try {global.gc && global.gc()} catch (e) {}
  const h0 = process.memoryUsage().heapUsed
  const $return = new Array(length).fill(0)
  const h1 = process.memoryUsage().heapUsed;
  try {global.gc && global.gc()} catch (e) {}
  
  (length === $return.length) && (results[length]['a'] = h1 - h0)
  return $return  
}
