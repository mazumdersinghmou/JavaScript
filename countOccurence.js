// Count Occurrences of Each Element in an Array

function countOccurences(arr){
    const counts = {}
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];

        if(counts[value]){
            counts[value] += 1
        } else{
            counts[value] = 1
        }
    }
    return counts;
}

console.log(countOccurences([1,1,1,2,3,4,5,5,6,7,8,8,8,8]));
