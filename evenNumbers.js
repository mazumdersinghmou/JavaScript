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



// Solution 2: Using Arrow Function + filter()

const findEvenNumber = arr => arr.filter(num => num % 2 == 0);

console.log(findEvenNumber([1, 2, 3, 4, 5]));

