let str = "Hello World";

// function reverseString(str) {
//   let str2 = str.split("").reverse().join("");
//     console.log(str2)
// }

// reverseString(str)

function reverseString(str){
   let reversed = '';
   for(let i = str.length - 1; i >=0; i--){
    reversed += str[i]
   }
   console.log(reversed);
}

reverseString(str)