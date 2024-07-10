---
layout: post
title: "[JavaScript] 배열 메서드"
date: 2022-06-29 11:40:59
modified: 2022-06-29 11:40:59
tag: [javascript]
---

자바스크립트에서 자주 쓰이는 배열 메서드 정리

## concat()
배열을 하나로 합칠 때 사용한다. 인자로 들어온 배열의 순서대로 합쳐진다.

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let wrap = arr1.concat(arr2, arr2, arr3);

console.log(wrap);
// (12) [1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9]

console.log(arr1);
// (3) [1, 2, 3]
```

## forEach()
주어진 함수를 배열 요소 각각에 대해 실행한다.

```javascript
let arr = ['a', 'b', 'c'];

arr.forEach(function (element) {
    console.log(element);
    // a
    // b
    // c
});
```

## map()
배열을 반복하고, 콜백함수가 리턴한 값으로 새 배열을 반환한다.

```javascript
let users = [
    { name: '철수', age: 20 },
    { name: '영희', age: 25 },
    { name: '민수', age: 23 },
    { name: '주연', age: 27 }
];

let usersName = users.map(function (element) {
    return element.name;
    // 각 요소의 nama 값만 반환
});

console.log(usersName);
// (4) ["철수", "영희", "민수", "주연"]
```

## filter()
배열을 반복하고, 콜백함수의 리턴값이 true인 요소로만 구성된 새 배열을 반환한다. 아래 예제는 age가 23 초과인 요소만 반환하였다.

```javascript
let users = [
    { name: '철수', age: 20 },
    { name: '영희', age: 25 },
    { name: '민수', age: 23 },
    { name: '주연', age: 27 }
];

let usersOld = users.filter(function (element) {
    return element.age > 23;
});

console.log(usersOld);
// (2) [{…}, {…}]
// 0: {name: "영희", age: 25}
// 1: {name: "주연", age: 27}
// length: 2
// __proto__: Array(0)
```

## sort()
배열을 반복하고, 콜백함수의 리턴값이 true인 요소로만 구성된 새 배열을 반환한다. 아래 예제는 age가 23 초과인 요소만 반환하였다.

```javascript
let arr = [5, 2, 1, 3, 10, 4];

arr.sort(function(a, b) {
    return a - b;
    // 오름차순
});
console.log(arr);
// (6) [1, 2, 3, 4, 5, 10]

arr.sort(function(a, b) {
    return b - a;
    // 내림차순
});
console.log(arr);
// (6) [10, 5, 4, 3, 2, 1]
```

## indexOf()
인자로 전달된 요소와 매치되는 첫번째 요소의 인덱스를 반환한다. 일치하는 요소가 없으면 -1을 반환한다.

```javascript
let arr = ['a', 'b', 'c', 'd'];

console.log(arr.indexOf('c')); // 2
console.log(arr.indexOf('e')); // -1
```

## every()
함수의 리턴값이 false가 될 때 까지 배열 요소 각각에 대해 함수를 실행한다.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.every(function(element) {
    console.log(element);
    // 1
    // 2
    // 3
    return element < 3;
});
```

## References
[JavaScript 배열 메서드 ( Array method )](https://takeuu.tistory.com/102)  
[Array.prototype.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  
[알아두면 좋은 자바스크립트 배열 메서드](https://medium.com/@ryuhangyeong00/알아두면-좋은-자바스크립트-배열-메서드-7cd469de880c)
