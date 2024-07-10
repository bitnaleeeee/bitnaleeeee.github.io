---
layout: post
title: "[JavaScript] ES5 Array.reduce"
date: 2022-06-21 18:57:42
modified: 2022-06-21 18:57:42
tag: [javascript, es5]
---

`Array.reduce`메서드는 배열의 각 요소를 순회하며 콜백 함수를 실행하며 이전 리턴값을 넘겨 받는다. 이전 값을 넘겨 받아 현재 값과 어떠한 작업을 수행하고 싶을 때 적합한 메서드이다. 인자 값이 다른 메서드와 약간 다르며, 콜백 함수 뒤에 인자를 하나 더 줄 수 있다. 이 인자는 첫 콜백함수의 이전 값으로 주입된다.

## Parameter

1. 이전 콜백 함수에서 리턴한 값
2. 현배 배열 요소의 값
3. 현재 배열 요소의 index
4. 현재 돌고 있는 배열 자체

## 예제

```javascript
let arr = [1, 2, 3, 4, 5];

// 각 콜백 마다 리턴값을 previousItem로 넘겨받아 어떤 작업을 수행
let val = arr.reduce(function(previousItem, currentItem, index, array) {

    // 콜백의 리턴 값을 받아 현재의 값과 더하려 다시 리턴
    return previousItem + currentItem;

// 첫번째 콜백의 previousItem값
}, 0);

console.log(val);
// 15
// 위 결과를 수식으로 나타내면 0 + 1 + 2 + 3 + 4 + 5 이다.(0부터 5까지의 합)
```

## References
[[JavaScript] Array 객체에서 놓치기 쉬운 6개의 메서드](https://programmingsummaries.tistory.com/357)  
[Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
