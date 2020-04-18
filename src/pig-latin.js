function translatePigLatin(str) {
  let cr = /^[^aeiou]+/;
  let cons = str.match(cr);
  if (cons != null) {
    return str.replace(cr, '')
      .concat(cons)
      .concat('ay');
  }
  else {
    return str.concat('way');
  }
}

translatePigLatin("consonant");
