function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments);
  const first = args[0];
  const remaining = args.slice(1);
  return first.filter((a) => !remaining.includes(a));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
