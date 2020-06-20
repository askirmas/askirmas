export {
  objectChange, arrayChange, mapChange
}

function objectChange(source: Record<number, number>, sourceLength: number, value = 1) {
  for (let i = 0; i < sourceLength; i++)
    source[i] = value
  return source
}

function arrayChange(source: number[], sourceLength: number, value = 1) {
  for (let i = 0; i < sourceLength; i++)
    source[i] = value
  return source
}

function mapChange(source: Map<number, number>, sourceLength: number, value = 1) {
  for (let i = 0; i < sourceLength; i++)
    source.set(i, value)
  return source
}