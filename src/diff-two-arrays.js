function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1
        .concat(arr2)
        .filter((a) => (!arr1.includes(a) || !arr2.includes(a)));
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
