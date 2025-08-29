// Duplicate Array Given -> [1,2,3,4,5] --> [1,2,3,4,5,1,2,3,4,5]

let arr = [1,2,3,4,5]
function duplicate(arr){
    console.log(arr.concat(arr))
}

duplicate(arr)