// Remove Duplicates from an Array
// Input : [1, 2, 3, 4, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  return [...new Set(arr)];      // Set automatically removes duplicates.
}                                // The spread operator ... converts the Set back to an array.

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5]));

// Solution 2: Using a for loop + includes() – Without using Set

function removeDuplicates2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 5]));
