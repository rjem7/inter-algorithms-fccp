function uniteUnique(arr) {
  let res = [];

  for(let i=0;i<arguments.length;i++) {
    let aarr = arguments[i];
    for(let j=0;j<aarr.length;j++) {
      if(res.indexOf(aarr[j]) < 0) {
        res.push(aarr[j]);
      }
    }

  }
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
