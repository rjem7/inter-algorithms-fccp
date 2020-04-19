function smallestCommons(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let [a, b] = arr.sort((a, b) => a - b);

  let current = a;

  while (a < b) {
    current = lcm(current, ++a);
  }

  return current;
}


smallestCommons([1,5]);
