let word = "abcdefgACIO";

function countVowels(word){
    let count = 0;
    for(let i = 0; i <= word.length; i++){
        let ch = word[i];
        if(ch == 'a' || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
            ch == 'A' || ch == "E" || ch == "I" || ch == "O" || ch == "U"
        ){
            count ++;
        }
    }
    console.log(count);
    
}

countVowels(word)