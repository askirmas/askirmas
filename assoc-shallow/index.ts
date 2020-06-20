export {
  arrayManual, arrayOAssign, arrayReconstruct1, arrayReconstruct2, arraySlice,
  objectAssign, objectManual,
  mapReconstruct
}

function arrayReconstruct1(array: any[]) {
  return new Array(array[Symbol.iterator])
}
function arrayReconstruct2(array: any[]) {
  return new Array(...array)
}

function arraySlice(array: any[]) {
  return array.slice()
}

function arrayOAssign(array: any[]) {
  return Object.assign([], array)
}

function arrayManual(array: any[]) {
  const {length} = array
  , $return = new Array(length)
  for (let i = 0; i < length; i++)
    $return[i] = array[i]
  return $return
}

function objectAssign(source: Record<string, any>) {
  return Object.assign({}, source)
}
function objectManual(source: Record<string, any>) {
  const keys = Object.keys(source)
  , {length} = keys
  , $return: typeof source = {}
  for (let i = 0; i < length; i++) {
    const key = keys[i]
    $return[key] = source[key]
  }
  return $return
}

function mapReconstruct(source: Map<string, any>) {
  return new Map(source)
}
