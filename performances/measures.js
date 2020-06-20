function measure(ops, fn, arging) {
  let time = 0
  for (let i = ops; i--; ) {
    const args = arging()
    , start = Date.now()
    fn.apply(this, args)
    time += Date.now() - start 
  }
  return time
}

function measures(ops, fns, arging) {
  const {length} = fns
  , $return = Array(length)
  for (let i = length; i--; )
    $return[i] = measure(ops, fns[i], arging)
  return $return
}
module.exports = {measures, measure}