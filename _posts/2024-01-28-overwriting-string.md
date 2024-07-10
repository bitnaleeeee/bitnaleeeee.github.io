---
layout: post
title: "[Algorithm]프로그래머스 알고리즘 문제풀이"
date: 2024-01-28 12:10:59
modified: 2024-01-28 12:10:59
tag: [JavaScript, Algorithm]
---

문자열 `my_string`, `overwrite_string`과 정수 `s`가 주어집니다. 문자열 `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 문자열 `overwrite_string`으로 바꾼 문자열을 `return` 하는 `solution` 함수를 작성해 주세요.
<br>
<br>

```javascript
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join("");
}
```

## 문제풀이

이 문제는 전개연산자와, splice함수, join함수를 이용하여 풀어보았다.

### 전개 연산자(`Spread Operator`)

전개연산자는 문자열(`string`)이나 배열(`array`)같은 이터러블(iterable) 객체에서 각 요소를 개별적으로 추출하여 새로운 배열에 담아주는 자바스크립트 문법이다.

#### 문자열(`Stirng`)의 경우

```javascript
let str = "hello";
let result = [...str];
// ['h','e','l','l','o']
```

### 배열(`Array`)의 경우 : 배열복사

```javascript
let arr = ["hello", "world"];
let result = [...arr];
// ['hello', 'world']
```

### 배열(`Array`)의 경우 : 배열 합치기

```javascript
let arr = ['hello'
let newArr = ['world']
let result = [...arr, ...newArr]
// ['hello', 'world']
```

### 풀이에 적용된 코드

```javasciprt
let answer = [...my_string]
//  [
  'H', 'e', '1', '1',
  'o', 'W', 'o', 'r',
  '1', 'd'
]
```

### splice 함수 (`Array.prototype.splice()`)

`splice`함수는 배열을 변경하는 매소드 중 하나로, 배열의 내용을 삭제하거나 새로운 요소를 추가할 수 있다.

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

- start : 배열에서 수정을 시작하는 index
- deleteCount : 해당 인덱스부터 삭제할 요소의 개수
- item1, item2 : 해당 인덱스 자리에 추가할 요소

### 풀이에 적용된 코드

```javascript
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join("");
  // [ 'H', 'e', 'lloWorl', 'd' ]
}
```

`answer`배열에서 `s`번째 `index`부터 `overwrite_string.length`의 길이만큼 삭제되고
그 부분에 `overwrite_string`을 넣어준다.

### join 함수 (`Array.prototype.join()`)

`join`함수는 배열의 모든 요소를 하나의 문자열로 결합하는 메소드이다.

```javascript
let fruits = ["apple", "orange", "banana"];

let resultWithComma = fruits.join();
console.log(resultWithComma); // "apple,orange,banana"

let resultWithSpace = fruits.join(" ");
console.log(resultWithSpace); // "apple orange banana"

let resultWithDash = fruits.join("-");
console.log(resultWithDash); // "apple-orange-banana"

let resultWithoutSpace = fruits.join("");
console.log(resultWithoutSpace); //  "appleorangebanana"
```

### 풀이에 적용된 코드

```javascript
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  answer.splice(s, overwrite_string.length, overwrite_string);
  return answer.join("");
  // "HelloWorld"
}
```
