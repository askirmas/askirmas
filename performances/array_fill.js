const {measures} = require('./measures')
module.exports = {opt0}

function opt1(count) {
  const $return = Array(count)
  for (let i = 0; i < count; i++)
    $return[i] = i
  return $return
}

function opt0(count) {
  const $return = Array(count)
  for (let i = count; i--;)
    $return[i] = i
  return $return
}

function opt01(count) {
  const $return = Array(count)
  for (let i = count; i;)
    $return[--i] = i
  return $return
}

function opt3(count) {
  const $return = []
  for (let i = count; i;)
    $return[--i] = i
  return $return
}

function opt2(count) {
  const $return = []
  for (let i = 0; i < count; i++)
    $return[i] = i
  return $return
}

function opt4(count) {
  const $return = []
  for (let i = 0; i < count; i++)
    $return.push(i)
  return $return
}

//for of, for in

if (!module.parent) {
  const ops = 10000, cnt = 10000
  console.log(measures(ops, [opt3, opt0, opt1, opt01, opt2, opt4], () => [cnt]))  
}
