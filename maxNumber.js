// Find the Maximum Number in an Array
// Input: [5, 1, 22, 3]
// Output: 22

function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

maxNumber([5, 100, 3, 89, 7, 26]);
