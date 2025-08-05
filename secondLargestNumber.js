// Find the second largest number in an array

function secondLargestNumber(arr) {
  const unique = [...new Set(arr)];
  console.log(unique);

  if (unique.length < 2) return null;

  unique.sort((a, b) => b - a);
  console.log(unique);

  return unique[1];
}

console.log(secondLargestNumber([10, 7, 26, 56, 3, 0, 7]));
