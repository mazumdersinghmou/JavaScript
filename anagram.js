// Check if two strings are anagrams
// "listen" and "silent" → Output: true

let str1 = "listen";
let str2 = "silent";

function checkAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let count = {};

  // Count characters from str1
  for (i = 0; i < str1.length; i++) {
    let char = str1.charAt(i);
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
}
