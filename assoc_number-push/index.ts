export {
  objectAssign, arrayAssign, arrayPush, mapSet
}

function objectAssign(count: number) {
  const $return: Record<number, any> = {}
  for (let i = 0; i < count; i++)
    $return[i] = 0
  return $return
}

function arrayAssign(count: number) {
  const $return: Record<number, any> = []
  for (let i = 0; i < count; i++)
    $return[i] = 0
  return $return
}

function arrayPush(count: number) {
  const $return = []
  for (let i = 0; i < count; i++)
    $return.push(0)
  return $return
}

function mapSet(count: number) {
  const $return: Map<number, any> = new Map()
  for (let i = 0; i < count; i++)
    $return.set(i, 0)
  return $return
}
