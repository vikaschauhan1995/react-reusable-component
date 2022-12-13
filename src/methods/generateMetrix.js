

export function generateMetrix(number = 50) {
  const arr = [];
  for (let x = 0; x < number; x++) {
    const ar = [];
    for (let y = 0; y < number; y++) {
      ar.push('');
    }
    const innerArr = ar;
    arr.push(innerArr);
  }
  return arr;
}