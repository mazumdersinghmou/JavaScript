// let str = "banana"

function removeDuplicate(str){
    let result = '';

    for(let i = 0; i < str.length; i++){
        let currentChar = str.charAt(i);
        let isDuplicate = false;

        for(let j = 0; j < result.length; j++){
            if(currentChar === result.charAt(j)){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            result += currentChar;
        }
    }
   console.log(result); 
}

removeDuplicate("banana")

