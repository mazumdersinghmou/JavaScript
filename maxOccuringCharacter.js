// Find the most frequent character
// Input: "javascript" → Output: "a"


function findMaxOccuringCharacter(str){
    let freq = {};
    let maxCount = 0;
    let maxChar = ''

    for(let i = 0 ; i < str.length; i++){
        let char = str[i];
        if(freq[char]){
            freq[char] ++;
        } else {
            freq[char] = 1;
        }

        if (freq[char] > maxCount){
            maxCount = freq[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
    
}

findMaxOccuringCharacter("javascript")