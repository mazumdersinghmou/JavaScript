![JavaScript Banner](https://raw.githubusercontent.com/rahulbanerjee26/rahulbanerjee26/master/assets/js_banner.gif)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)


## ⚡️ Fun JavaScript Facts You Probably Didn't Know
> 🧠 Spice up your brain with quirky JS insights!

<!-- 💡 facts go here... --> 


### 🔹 1. `typeof null === "object"`
A bug from 1995 that’s still alive — `null` is **not** an object, but `typeof null` returns `"object"` due to legacy reasons.

---

### 🔹 2. Arrays are Objects
```javascript
typeof [1, 2, 3] === "object"; // true

Arrays are just special objects with numeric keys and a length property.

Did You Know? Functions Can Hold Properties

function greet() {}
greet.language = "JavaScript";
console.log(greet.language); // "JavaScript"
Functions are objects, so you can attach properties to them like a boss.

💡 Did You Know? You Can Write JS Without Semicolons

let a = 5
let b = 10
console.log(a + b)
Thanks to Automatic Semicolon Insertion, but don’t rely on it blindly.

💡 Did You Know? NaN !== NaN

NaN === NaN;         // false
Object.is(NaN, NaN); // true
NaN is literally not equal to itself. Use Object.is() or Number.isNaN() instead.

💡 Did You Know? You Can Destructure Strings

const [a, b, c] = "Hi!";
console.log(a, b, c); // H i !
Because strings are iterable, you can unpack them just like arrays!

💡 Did You Know? The Comma Operator Returns the Last Value

let x = (1, 2, 3);
console.log(x); // 3
All expressions are evaluated, but only the last one is returned.

💡 Did You Know? Double Equals (==) Can Surprise You

false == '0';  // true
'' == 0;       // true
[] == ![];     // true
JavaScript loves to coerce types. Prefer === for your sanity.

💡 Did You Know? Functions Are Hoisted

sayHi();
function sayHi() {
  console.log("Hello from the top!");
}
Function declarations are hoisted to the top of their scope — works before it's written!

💡 Did You Know? Arrays Are Compared by Reference

[1, 2, 3] === [1, 2, 3]; // false 
They may look the same, but they're stored at different memory locations.

🎁 Bonus: typeof Cheat Table
Value	typeof Result
null	'object' 🐛
undefined	'undefined'
NaN	'number'
[]	'object'
{}	'object'
function(){}	'function'
