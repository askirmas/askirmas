export {
  keyed
}

function keyed(count: number) {
  const $return: Record<string, number> = {}
  for (let i = 0; i < count; i++)
    $return[`${i}`] = i
  return $return
}