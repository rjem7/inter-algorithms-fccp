function fearNotLetter(str) {
  const full = 'abcdefghijklmnopqrstuvwxyz';
  let first = str.split('')[0];
  let firstArr = str.split('');
  let index = full.indexOf(first);
  let match = full.substr(index,str.length);
  let res = match.split('')
            .filter((a) => !firstArr.includes(a));
  return res[0];
}

fearNotLetter("abce");
