// Capitalize first letter of each word
// Input: "hello world" → Output: "Hello World"

function capitalizeWords(sentence){
    let words = sentence.split(' ');
    let result = '';

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word.length > 0){
            let capitalizeWord = word[0].toUpperCase() + word.slice(1);
            result += capitalizeWord + ' ';
        }
    }
    console.log(result);
}

capitalizeWords("hello world")