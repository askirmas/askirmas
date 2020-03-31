import {cloneDeep} from 'lodash'

export {
  shuffle, objectFrom, isNative
}

function shuffle<T=any>(a: T[]) {
  for (let i = a.length - 1; i--;) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a
}

type rk = string|number|symbol

function objectFrom<T>(values: T) :T
function objectFrom<K0 extends rk,T>(keys0: K0[], values: T) :Record<K0,T>
function objectFrom<K0 extends rk,K1 extends rk,T>(keys0: K0[], keys1: K1[], values: T) :Record<K0,Record<K1,T>>
function objectFrom<K0 extends rk,K1 extends rk,K2 extends rk,T>(keys0: K0[], keys1: K1[], keys2: K2[], values: T) :Record<K0,Record<K1,Record<K2,T>>>
function objectFrom(...keysAndValue: any[]) :any {
  let $return: any = {}
  , pointer = keysAndValue.pop()
  , pointerIsObject = pointer !== null && typeof pointer === 'object'
  
  const {length: depth} = keysAndValue
  if (!depth)
    return pointer

  for (let d = depth; d--;) {
    const keys = keysAndValue[d]
    for (let k = 0; k < keys.length; k++)
      $return[keys[k]] = pointerIsObject ? cloneDeep(pointer) : pointer
    
    pointer = $return
    pointerIsObject = true

    d && ($return = {})
  }
  return $return
}


//https://gist.github.com/jdalton/5e34d890105aca44399f
// Used to resolve the internal `[[Class]]` of values
const {toString} = Object.prototype
// Used to resolve the decompiled source of functions
, {toString: fnToString} = Function.prototype.toString
// Used to detect host constructors (Safari > 4; really typed array specific)
, reHostCtor = /^\[object .+?Constructor\]$/

// Compile a regexp using a common native method as a template.
// We chose `Object#toString` because there's a good chance it is not being mucked with.
, reNative = RegExp('^' +
  // Coerce `Object#toString` to a string
  String(toString)
  // Escape any special regexp characters
  .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
  // Replace mentions of `toString` with `.*?` to keep the template generic.
  // Replace thing like `for ...` to support environments like Rhino which add extra info
  // such as method arity.
  .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

function isNative(value: any) {
  var type = typeof value;
  return type == 'function'
    // Use `Function#toString` to bypass the value's own `toString` method
    // and avoid being faked out.
    ? reNative.test(fnToString.call(value))
    // Fallback to a host object check because some environments will represent
    // things like typed arrays as DOM methods which may not conform to the
    // normal native pattern.
    : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
}

//https://davidwalsh.name/detect-native-function
// function isNative(fn: any) {
// 	return (/\{\s*\[native code\]\s*\}/).test('' + fn);
// }