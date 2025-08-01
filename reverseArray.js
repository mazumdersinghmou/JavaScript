// Reverse an Array
// Input: [1, 2, 3]
// Output: [3, 2, 1]

function reverseArray(arr){
    let reversed = []
    for(let i = arr.length -1; i >= 0; i--){
         reversed.push(arr[i]);
    }
    console.log(reversed);
}

reverseArray([1,2,3,4,5])