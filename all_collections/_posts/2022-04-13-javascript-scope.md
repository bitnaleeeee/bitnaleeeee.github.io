---
layout: post
title: "[JavaScript] 스코프(Scope)"
date: 2022-04-13 19:10:59
modified: 2022-04-13 19:10:59
tag: [javascript]
---

자바스크립트에서의 스코프란 코드가 실행되는 컨텍스트(유효범위)이며 `전역 스코프`, `지역 스코프`, `eval 스코프`로 나눌 수 있다.

## 전역 스코프
* 함수나 객체의 밖에서 선언되었다면 전역 스코프로 정의된다.
* 모든 곳에서 전역 스코프에 있는 변수를 사용할 수 있다.

```javascript
// 전역 스코프
let foo = 1;
console.log(foo); // 1

function func() {
    // foo가 전역에서 선언되었기 때문에 함수 내부에서도 foo값을 사용할 수 있다.
    console.log(foo); // 1
}
```

## 지역 스코프
* 함수나 객체의 안에서 선언되었다면 지역 스코프로 정의된다.
* 해당 함수나 객체에서만 지역 스코프를 사용할 수 있다.

### 함수 지역 스코프
```javascript
function func() {

    // 지역 스코프
    let foo = 1;
    console.log(foo); // 1
}

// foo가 func 함수 내부에서 선언되었기 때문에 함수 외부에서 사용을 할 수 없다.
console.log(foo); // Uncaught ReferenceError: foo is not defined
```

### 객체 지역 스코프
```javascript
let obj = {
    foo: 1
};
console.log(obj.boo); // 1
console.log(boo); // Uncaught ReferenceError: foo is not defined
```

## eval 스코프
* eval의 경우 eval()을 사용해 매개변수를 사용하면 이를 사용했을 경우에만 해당 스코프에 담긴 값을 불러온다. 각각 선언할때 고유한 스코프를 가지는 것이 특징이다.
