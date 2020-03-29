
export {
  // impossible to comapre with Array.prototype.map
  forOf, forI0, forIR, arForEach, arMap
}

function forOf<I,O>(arr: I[], fn: (value: I, index: number) => O) {
  const $return = new Array(arr.length)
  let i = 0

  for (const value of arr)
    $return[i] = fn(value, i++)

  return $return
}

function forI0<I,O>(arr: I[], fn: (value: I, index: number) => O) {
  const {length} = arr
  , $return = new Array(length)
  
  for (let i = 0; i < length; i++)
    $return[i] = fn(arr[i], i)

  return $return
}

function forIR<I,O>(arr: I[], fn: (value: I, index: number) => O) {
  const {length} = arr
  , $return = new Array(length)
  
  for (let i = length; i--;)
    $return[i] = fn(arr[i], i)

  return $return
}

function arMap<I,O>(arr: I[], fn: (value: I, index: number) => O) {   
  return arr.map(fn)
}

function arForEach<I,O>(arr: I[], fn: (value: I, index: number) => O) {   
  const $return = new Array(arr.length)
  arr.forEach((value, index) => $return[index] = fn(value, index))
  return $return
}

