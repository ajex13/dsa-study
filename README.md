# dsa-study
---

## Useful stuff

- Swapping in JS
```js
let a = 2
let b = 3
// swap with array destructuring
[a, b] = [b, a]
// swap with temp
// let temp = a;
// a = b;
// b = temp;

```
---
- Sorting numbers in JS
```js
const arr = [34, 45, 1, 100, 10];

// never do arr.sort()🚫
// it will sort alphabetically (or rather according to the charcode)
// [1,10,100,34,45];🚫

arr.sort((a, b) => (a - b)); // asc
arr.sort((a, b) => (b - a)); // desc

```
---
- Sorting strings in JS
```js

const arr = ["duck", "hen", "peacock", "sparrow"];

arr.sort((a, b) => (a.localeCompare(b)))

```
--- 
- Helpful Math lib functions
```js
Math.min(3, 5); // 3

Math.max(3, 5); // 5

Math.floor(2.5); // 2 : round down

Math.ceil(2.5); // 3 : round up

Math.abs(-5); // 5

Math.pow(7, 2); // 49 

```
---

- Finding mid of l & r
```js
let l = 1;
let r = 7;

parseInt((l+r)/2); // 4

// for large number (for safe side) use this instead
// if l + r give you +Infinity then mid will be +Infinity
// which is incorrect

parseInt(l + (r - l)/2) // 4

```
---
