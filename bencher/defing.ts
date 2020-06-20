/**
 * +1. f: i => o, arg: i
 * +2. f: string, arg: (this, i) 
 * 3. f: i => o, arg: a, prep: a => i
 * 4...
 */

type iFunction<O = any> = ((...args: any) => O) //& Function

function unifiedCall<
  M extends string,
  Obj extends Record<M, () => any>
>(f: M, args: [Obj]) :ReturnType<Obj[M]>
function unifiedCall<
  M extends string,
  Obj extends Record<M, (...arg1: [any]) => any>
>(f: M, args: [Obj, Parameters<Obj[M]>[0]]) :ReturnType<Obj[M]>
function unifiedCall<
  M extends string,
  Obj extends Record<M, (...args2: [any, any]) => any>
>(f: M, args: [Obj, Parameters<Obj[M]>[0], Parameters<Obj[M]>[1]]) :ReturnType<Obj[M]>
function unifiedCall<
  M extends string,
  Obj extends Record<M, (...args3: [any, any, any]) => any>
>(f: M, args: [Obj, Parameters<Obj[M]>[0], Parameters<Obj[M]>[1], Parameters<Obj[M]>[2]]) :ReturnType<Obj[M]>
function unifiedCall<
  M extends string,
  Obj extends Record<M, iFunction>
>(f: M, args: [Obj, Parameters<Obj[M]>[0], ...any[]]) :ReturnType<Obj[M]>

function unifiedCall<I extends any[],O>(f: (...args: I) => O, args: I) :O

function unifiedCall(f: any, args: any) {
  return (
    typeof f === 'function'
    ? f
    : args[0][f]
  ).call(...args)
}

unifiedCall('map', [[1], (v, i) => v + i]);

function withPreparation<F extends iFunction>(f: F, args: Parameters<F>) :ReturnType<F>
function withPreparation<F extends iFunction, P extends iFunction<Parameters<F>>>(f: F, args: Parameters<P>, prepare: P) :ReturnType<F>
function withPreparation(f: any, args: any, prepare?: any) {
  return prepare
  ? f(...prepare(args))
  : f(...args)
}