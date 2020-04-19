function steamrollArray(arr) {
  let res = [];
  const fa = (item) => {
    if(!Array.isArray(item)) {
      res.push(item);
    }
    else {
      for(let a in item) {
        fa(item[a]);
      }
    }
  }
  arr.forEach(fa);
  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);
