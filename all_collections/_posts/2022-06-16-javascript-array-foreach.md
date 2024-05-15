---
layout: post
title: "[JavaScript] ES5 Array.forEach"
date: 2022-06-16 18:46:41
modified: 2022-06-16 18:46:41
tag: [javascript, es5]
---

`Array.forEach` 매서드는 배열 전체를 돌때, 요소마다 콜백 함수를 실행한다. 배열의 요소에 직접 어떠한 작업을 수행하고 싶을 때 적합한 메서드이다. `Array.forEach` 메서드는 리턴 값이 없다.

## Parameter

1. 현재 배열 요소의 값
2. 현재 배열 요소의 index
3. 현재 돌고 있는 배열 자체

## 예제

```javascript
let arr = ["a", "b", "c"];

arr.forEach(function (item) {
  console.log(item);
});

// a
// b
// c
```

```javascript
let arr = ["a", "b", "c"];

// 배열의 모든 요소에 EDIT라는 문자열을 더하기
arr.forEach(function (item, index, array) {
  array[index] = item + "EDIT";
});

console.log(arr);
```

## References
[[JavaScript] Array 객체에서 놓치기 쉬운 6개의 메서드](https://programmingsummaries.tistory.com/357)
