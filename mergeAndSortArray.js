// Merge and Sort Arrays

function mergeAndSort(arr1, arr2){
    const merged = [...arr1, ...arr2];
    // console.log(merged);
    const unique = [...new Set(merged)]
    // console.log(unique);
    return unique.sort((a, b) => a-b)
}

console.log(mergeAndSort([1,2,3,4,5], [1,2,7,6,9]));
