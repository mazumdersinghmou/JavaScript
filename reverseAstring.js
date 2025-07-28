let sentence = "Hello World";

// function reverseString(str) {
//   let str2 = str.split("").reverse().join("");
//     console.log(str2)
// }

// reverseString(str)


// function reverseString(str){
//    let reversed = '';
//    for(let i = str.length - 1; i >=0; i--){
//     reversed += str[i]
//    }
//    console.log(reversed);
// }

// reverseString(str)


// function reverseWordOrder(str) {
//   let str2 = str.split(' ').reverse().join(' ');
//   console.log(str2)
// }

// reverseWordOrder(str)



// We are creating a function that takes a sentence like "Hello World" and returns "World Hello".
function reverseWordOrder(sentence) {
  let result = '';
  let word = '';

  // Go from the end of the sentence to the start
  for (let i = sentence.length - 1; i >= 0; i--) {
    let char = sentence[i];

    // If we find a space, it means one word is completed
    if (char === ' ') {
      if (word !== '') {
        result += word + ' ';
        word = '';
      }
    } else {
      // Keep building the word
      word = char + word;
    }
  }

  // Add the last word (first word from the sentence)
  if (word !== '') {
    result += word;
  }

  // Remove any extra space at the end
  console.log(result.trim());
}


reverseWordOrder(sentence)