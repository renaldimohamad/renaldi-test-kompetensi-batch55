function sort(list = [], n = list.length) {
  if (n === 1) {
    const ganjil = list.filter(item => item % 2 === 1)

    const genap = list.filter(item => item % 2 === 0)

    return {
      array: list.join(', '),
      ganjil: ganjil.join(', '),
      genap: genap.join(', ')
    }
  }

  for (let i = 0; i < n - 1; i++) {
    if (list[i] > list[i+1]) {
      const leftValue = list[i]
      const rightValue = list[i+1];
      
      list[i] = rightValue;
      list[i+1] = leftValue;
    };
  }

  return sort(list, n - 1);
}

const data = [1,2,3,4,5,6,77,33,22,1]

console.log(sort(data))