---
layout: post
title: "[JavaScript]return과 console.log의 차이"
date: 2022-04-10 12:10:59
modified: 2022-04-10 12:10:59
tag: [JavaScript]
---

## `retrun` vs `console.log`

아래 코드를 살펴보면

```javascript
function printsquare(x) {
  return x * x;
}

function getsquare(x) {
  console.log(x * x);
}

console.log(printsuare(3)); // 9 출력
getsuqare(3); // 9 출력
```

`printsquare`와 `getsquare` 모두 9를 출력한다는 것을 알 수 있다.

```javascript
console.log(getsuqare(3)); // undefined
```

하지만 위 코드에서는 왜 `undefined`가 나올까?
이유는 함수를 선언할때 `return`문을 따로 작성하지 않으면 `undefined` 값을 `return`하기 때문이다.
즉 `return`은 함수를 실행하고 어떠한 값을 돌려주는 함수이고 `console.log`는 어떠한 값을 출력해주는 함수라는 것을 알 수 있다.
