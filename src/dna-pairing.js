function pairElement(str) {
  const obj = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return str.split('')
      .map((a) => [a, obj[a]]);
}

pairElement("GCG");
