---
layout: post
title: "[JavaScript] ES5 Array.filter"
date: 2022-06-18 18:53:36
modified: 2022-06-18 18:53:36
tag: [javascript, es5]
---

`Array.filter`메서드는 배열의 각 요소를 순회하며 콜백 함수를 실행하며 특정 조건에 맞는 요소만 모아 배열로 리턴한다. 특정 케이스만 필터링해서 추출할 때 유용하다.

## Parameter

1. 현재 배열 요소의 값
2. 현재 배열 요소의 index
3. 현재 돌고 있는 배열 자체

## 예제

```javascript
let arr = [1, 3, 5, 6, 7, 9, 11];

// 배열 요소중에서 모두 7보다 작은 요소만 모아 배열로 리턴
let val = arr.filter(function (item, index, array) {
    return item < 7;
});

console.log(val);
// [1, 3, 5, 6]
```

## References
> [[JavaScript] Array 객체에서 놓치기 쉬운 6개의 메서드](https://programmingsummaries.tistory.com/357)  
> [Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

