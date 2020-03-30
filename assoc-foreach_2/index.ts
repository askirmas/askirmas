export {
  forInKV,
  keysForEachKV,
  keysForI0KV,
  entriesForEachKV,
  mapEntriesKV,
  keysValuesForI0KV,
  entriesForIREntry,
}

function forInKV<K extends string, V>(source: Record<K, V>, fn: (key: K, value: V) => any) {
  for (const key in source) 
    fn(key, source[key])
}

function keysForEachKV<K extends string, V>(source: Record<K, V>, fn: (key: K, value: V) => any) {
  Object.keys(source)
  .forEach(key => fn(key as K, source[key as K]))
}

function keysForI0KV<K extends string, V>(source: Record<K, V>, fn: (key: K, value: V) => any) {
  const keys = Object.keys(source)
  , {length} = keys
  for (let i = 0; i < length; i++) {
    const key = keys[i] as K
    fn(key, source[key])
  }
}

function keysValuesForI0KV<K extends string, V>(source: Record<K, V>, fn: (key: K, value: V) => any) {
  const keys = Object.keys(source)
  , values = Object.values(source)
  , {length} = keys
  for (let i = 0; i < length; i++) {
    fn(keys[i] as K, values[i] as V)
  }
}


function entriesForEachKV<K extends string, V>(source: Record<K, V>, fn: (key: K, value: V) => any) {
  Object.entries(source)
  .forEach(([key, value])=> fn(key as K, value as V))
}


function entriesForIREntry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  const entries = Object.entries(source)
  , {length} = entries
  for (let i = length; i--; ) {
    const entry = entries[i]
    //@ts-ignore
    fn(entry[0], entry[1])
  }
}

function mapEntriesKV<K extends string, V>(source: Map<K,V>, fn: (key: K, value: V) => any) {
  for(const [key, value] of source)
    fn(key, value)
}
