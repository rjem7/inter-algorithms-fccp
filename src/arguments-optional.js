function addTogether() {
  let f = arguments[0];
  let s = arguments[1];
  if(typeof f !== 'number') {
    return undefined;
  }
  const sum = s => {
    return typeof s === "number" ? f + s : undefined;
  }

  return typeof s === "undefined" ? s => sum(s) : sum(s);
}

addTogether(2,3);
