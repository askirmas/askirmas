export {
  forInEntry,
  keysForEachEntry,
  entriesForEachEntry,
  entriesForIREntry,
  keysForI0Entry,
  mapEntriesEntries,
  keysValuesForI0Entry
}

function forInEntry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  for (const key in source) 
    fn([key, source[key]])
}

function keysForEachEntry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  Object.keys(source)
  .forEach(key => fn([key as K, source[key as K]]))
}

function keysForI0Entry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  const keys = Object.keys(source)
  , {length} = keys
  for (let i = 0; i < length; i++) {
    const key = keys[i] as K
    fn([key, source[key]])
  }
}

function keysValuesForI0Entry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  const keys = Object.keys(source)
  , values = Object.values(source)
  , {length} = keys
  for (let i = 0; i < length; i++) {
    fn([keys[i] as K, values[i] as V])
  }
}

function entriesForEachEntry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  Object.entries(source)
  .forEach(
    //@ts-ignore
    fn
  )
}

function entriesForIREntry<K extends string, V>(source: Record<K, V>, fn: (entry: [K, V]) => any) {
  const entries = Object.entries(source)
  , {length} = entries
  for (let i = length; i--; )
    //@ts-ignore
    fn(entries[i])
}


function mapEntriesEntries<K extends string, V>(source: Map<K,V>, fn: (entry: [K, V]) => any) {
  for (const entry of source)
    fn(entry)
}