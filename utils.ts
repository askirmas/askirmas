export {
  shuffle
}

function shuffle<T=any>(a: T[]) {
  for (let i = a.length - 1; i--;) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a
}