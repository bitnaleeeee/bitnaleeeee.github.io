---
layout: post
title: "[JavaScript] 함수형 프로그래밍의 순수 함수"
date: 2022-12-10 11:30:35
modified: 2022-12-10 11:30:35
tag: [javascript, pure function, functional programming]
---

## 함수형 프로그래밍
부수 효과를 없애고 순수 함수를 만들어 모듈화 수준을 높이는 프로그래밍 패러다임  

* 부수 효과: 외부 상태를 변경하거나 함수로 들어온 인자 상태를 변경하는 것
* 순수 함수
    * 동일한 입력에 대해 항상 동일한 출력을 반환하는 함수
    * 외부의 상태를 변경하거나 영향을 받지 않는 함수

## 순수한 함수

```javascript
function func(a, b) {
  return a + b;
}

console.log(func(2, 2)); // 4
```

위 `func` 함수는 순수하다. 언제나 이 함수를 수백번 실행시켜도 입력값이 `2`, `2`면 출력값이 `4`로 동일하기 때문이다. 또한 이 함수는 외부의 값에 영향을 주거나 받지 않는다.


## 순수하지 않은 함수

```javascript
let c = 1;

function func(a, b) {
  return a + b + c;
}

console.log(func(2, 2)); // 5

c = 2; // c 값이 변경됨

console.log(func(2, 2)); // 6
```

위 함수는 외부 값인인 `c`에 영향을 받기 때문에 순수함수가 아니다. `c`가 변하면 동일한 입력에 대해 출력이 다르기 때문이다.

```javascript
let c = 1;

function func(a, b) {
  c += 1; // 외부의 값에 변화를 주며, 이를 부수효과라 함
  return a + b;
}

func(2, 2); // 함수 실행

console.log(c); // c 값이 2로 변화됨
```

위 함수도 함수가 실행되면 외부값인 `c`를 변경시키기 때문에 순수 함수가 아니며, 이를 부수 효과라 한다.

```javascript
let obj = {
  a: 1
};

function func(obj) {
  return obj.b = 1; // 인자로 받은 객체에 b 값을 추가하여 리턴
}

func(obj);

console.log(obj); // { a: 1, b: 1 }
```

객체의 경우도 살펴보자. 위 함수도 외부 `obj` 객체에 `b`가 추가되었기 때문에 순수함수가 아니다.

```javascript
let obj = {
  a: 1
};

function func(obj) {
  return obj; // 인자로 받은 객체를 그대로 리턴
}

let obj2 = func(obj);
```

위의 경우는 어떨까? 함수 안에서는 객체를 받고 아무런 변화를 주지 않고 리턴하였으며, 새로운 변수에 리턴된 객체를 할당했다. 위 함수에서는 객체에 아무런 변화를 주지 않았으니 순수 함수라고 할 수 있을까?

```javascript
let obj = {
  a: 1
};

function func(obj) {
  return obj; // 인자로 받은 객체를 그대로 리턴
}

let obj2 = func(obj); // 새로운 변수에 리턴된 객체를 할당

obj2.a = 2; // 새로운 객체 obj2의 a 값을 변경

console.log(obj2); // { a: 2 }
console.log(obj); // { a: 2 }
```

정답은 아니다. `func` 함수를 실행하여 새로운 변수에 리턴받은 객체를 할당했으며, 새로운 객체 `obj2`의 `a` 값을 변경하였다. 그랬더니 기존의 `obj` 객체의 값도 변경이 되었다. 바로 객체의 **참조(주소)** 값도 같이 복사되어 새롭게 만든 `obj2`가 변화함에 따라 기존의 `obj` 객체도 변경되기 때문이다. 이처럼 함수 내에서 직접 값을 변경하지 않았더라도 함수에 들어온 인자값을 그대로 사용하면 순수 함수가 아니다.

```javascript
let obj = {
  a: 1
};

function func(obj) {

  // 객체의 값만 참조하여 새로운 객체를 리턴
  return {
    a: obj.a,
    b: 2
  };
}

let obj2 = func(obj);

obj2.a = 2;

console.log(obj2); // { a: 2, b: 2 }
console.log(obj); // { a: 1 }
```

위에서는 인자로 받은 객체를 직접 사용하지 않고 `obj.a` 값만 참조해서 새로운 객체를 생성하여 리턴하고 있다. 이럴 경우는 참조(주소)값이 복사가 안되기 때문에 `obj2` 객체의 값이 변경되도 `obj`의 값이 변경되지 않는다. 그러므로 위 함수는 순수 함수라 할 수 있다.

## 결론
모든 함수가 순수 할수일 수는 없다. 모든 함수가 순수 함수라면 외부의 어떤 데이터에도 변형을 주지 않기 때문에 프로그램은 구동되지 않을 것이다. 단지, 이런 스타일로 코딩하는것이 함수형 프로그래밍의 패러다임 이며, 이 패러다임의 목적은 외부 상태의 변화를 최소함으로 유지하고, 함수 실행 결과 예측을 용이하게 하여 버그 발생 가능성을 줄이는 것에 목적이 있다.

## References
[[번역] JavaScript 함수형 프로그래밍 3단계로 설명하기](https://blog.ull.im/engineering/2019/04/07/functional-programming-with-javascript-in-3-steps.html)  
[순수 함수란 무엇인가요... 별거 없음...](https://mrgamza.tistory.com/634)  
[JS 함수형 프로그래밍을 위한 사전 지식 : 순수함수, 일급함수](https://darrengwon.tistory.com/595)  
[자바스크립트의 함수형 프로그래밍 1 : 순수 함수란?](https://soldonii.tistory.com/80)  
[순수 함수란? (함수형 프로그래밍의 뿌리, 함수의 부수효과를 없앤다)](https://jeong-pro.tistory.com/23)
