// find even numbers from an array

function findEvenNum(arr){
    let result = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i]);
        } 
    }
    return result;
}

console.log(findEvenNum([1,2,4,5,8,14]));
