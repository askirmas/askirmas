// new Array(size)
// arguments(n iterator of undefined)
// 

const newArray = Array.prototype.constructor

export {
  newArray,
  newArguments,
  newMap
}

function newArguments<A extends any[]>(..._:A) {
  return arguments
}

function newMap(size:number) {

}