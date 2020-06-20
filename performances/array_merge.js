const {measures} = require('./measures')
, {opt0: array_fill} = require('./array_fill')

function opt0(ar1, ar2) {
  const l1 = ar1.length
  , l2 = ar2.length
  let i = l1 + l2
  const $return = Array(i)
  for (let k = l2; k--;)
    $return[--i] = ar2[k] 
  for (let k = l1; k--;)
    $return[--i] = ar1[k] 
  return $return
}

function opt01(ar1, ar2) {
  let i = ar1.length + ar2.length
  const $return = Array(i)
  for (let k = ar2.length; k--;)
    $return[--i] = ar2[k] 
  for (let k = ar1.length; k--;)
    $return[--i] = ar1[k] 
  return $return
}


function opt1(ar1, ar2) {  
  return ar1.push(...ar2)
}
function opt2(ar1, ar2) {
  return [...ar1, ...ar2]
}
function opt3(ar1, ar2) {
  return ar1.concat(ar2)
}
function opt4(ar1, ar2) {
  return ar1.splice(ar1.length, 0, ...ar2)
}
console.log(measures(10000, [opt0, opt1, opt01, opt2, opt3, opt4], () => [array_fill(10000), array_fill(10000)]))