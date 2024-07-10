---
layout: post
title: "[JavaScript] ES5 Array.some"
date: 2022-06-19 18:55:20
modified: 2022-06-19 18:55:20
tag: [javascript, es5]
---

`Array.some`메서드는 배열의 각 요소를 순회하며 콜백 함수를 실행하며 하나의 요소라도 조건을 만족할 때 `true`를 반환하며, 만족하지 않을 때 `false`를 반환한다. 특정 조건을 만족하는지 알고 싶을 때 적합한 메서드다.

## Parameter

1. 현재 배열 요소의 값
2. 현재 배열 요소의 index
3. 현재 돌고 있는 배열 자체

## 예제

```javascript
let arr = [1, 3, 5, 6, 7, 9];

// 배열 요소중에서 짝수가 있으면 메서드 수행을 중단하고 true를 리턴
let val = arr.some(function (item, index, array) {
    return item % 2 === 0;
});

console.log(val);
// ture
```

## References
> [[JavaScript] Array 객체에서 놓치기 쉬운 6개의 메서드](https://programmingsummaries.tistory.com/357)  
> [Array.prototype.some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

