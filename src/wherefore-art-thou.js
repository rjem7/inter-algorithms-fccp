function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let skeys = Object.keys(source);
  return collection.filter((obj) => {
    return skeys.every(key => 
      obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  });

  // Only change code above this line
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
