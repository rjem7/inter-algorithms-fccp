function sumFibs(num) {
  let pn = 0;
  let cn = 1;
  let res = 0;

  while(cn <= num) {
    if(cn % 2 !== 0) {
      res += cn;
    }

    cn += pn;
    pn = cn - pn;
  }
  return res;
}

sumFibs(4);
