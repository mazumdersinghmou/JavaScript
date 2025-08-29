let str = "My name is Mou Mazumder Singh";

let newStr = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})

console.log(newStr.join(" "));