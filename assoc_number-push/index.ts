export {
  objectAssign,
  arrayAssign, arrayPush, arrayFill, arrayAssignRev,
  mapSet, mapRange
}

function objectAssign(count: number, value = 0) {
  const $return: Record<number, any> = {}
  for (let i = 0; i < count; i++)
    $return[i] = value
  return $return
}

function arrayAssign(count: number, value = 0) {
  const $return: Record<number, any> = []
  for (let i = 0; i < count; i++)
    $return[i] = value
  return $return
}

function arrayAssignRev(count: number, value = 0) {
  const $return: Record<number, any> = []
  for (let i = count; i --;)
    $return[i] = value
  return $return
}

function arrayPush(count: number, value = 0) {
  const $return = []
  for (let i = 0; i < count; i++)
    $return.push(value)
  return $return
}

function arrayFill(count: number, value = 0) {
  return new Array(count).fill(value)
}

function mapSet(count: number, value = 0) {
  const $return: Map<number, any> = new Map()
  for (let i = 0; i < count; i++)
    $return.set(i, value)
  return $return
}

function mapRange(count: number, value = 0) {
  //@ts-ignore
  return new Map(rangeEntries(count, value))
}

function* rangeEntries(max: number, value: any) {
  for (let i = 0; i < max; i++)
    yield newArguments(i, value)
}

function newArguments(..._: any) {
  return arguments
}