// To check if a string is a palindrome

let word = "abcba"
function isAPalindrome(word){
    let reversedWord = '';
    for(let i = word.length - 1; i >=0; i--){
        reversedWord += word[i];
    }
    if(reversedWord == word){
        console.log(reversedWord + " is a palindrome");
    } else {
        console.log(reversedWord + " is not a palindrome");
    }
}

isAPalindrome(word)