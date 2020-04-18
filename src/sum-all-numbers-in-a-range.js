function sumAll(arr) {
  let count = 0;
  arr.sort((a, b) => a - b);
  for(let i=arr[0];i<=arr[arr.length - 1];i++) {
    count = count + i;
  }
  return count;
}

sumAll([10, 5]);
