---
layout: post
title: "[JavaScript] try...catch를 이용한 에러 핸들링"
date: 2022-11-08 14:35:42
modified: 2022-11-08 14:35:42
tag: [javascript]
---

자바스크립트에서 에러가 발생하면 코드는 멈추게 되고, 콘솔에 에러가 출력된다. 하지만 `try...catch` 문법을 사용하면 스크립트가 죽는 것을 방지하고, 에러 상황을 잡아 예외처리를 할 수 있게 한다. 기본적인 형태는 두 블록으로 구성되며 예시 코드는 아래와 같다.

## 기본 형태

```javascript
try {

  // 이 구간에서 에러가 발생하면 catch로 이동

} catch (err) {

  // 에러 핸들링

}
```
* 먼저 `try` 블록의 코드가 실행된다.
* `try` 블록 안에 에러가 없다면 `catch` 블록은 건너 뛴다.
* `try` 블록 안에서 에러 코드를 만나면 `try` 블록의 실행이 중단되고 `catch` 블록의 코드가 실행된다.
* `err` 객체에는 에러에 대한 정보가 있다.

실제 작동 코드 살펴보자.

```javascript
try {
  console.log("아직 에러 없음");

  a; // 에러 시작

  console.log("이곳은 실행 안됨");

} catch (err) {

  console.log(err); // a is not defined

  console.log("에러가 나도 이곳의 코드는 실행됨");

}
```

`try` 블록에서 에러가 나면 아래의 `console.log()`는 실행이 안되며 바로 `catch` 블록으로 넘어간다. `err` 객체가 콘솔창에 어떤 에러인지 표시해 주며, 에러가 발생해도 `catch` 블록의 코드는 계속 실행되는 것을 확인할 수 있다. 이 부분에 에러 예외 처리를 작성해 주면 된다.

## `try...catch`는 런타임 에러에만 작동한다

`try...catch`는 실행이 가능한 코드에만 동작하며, 중괄호가 들어가는 등 자바스크립트 엔진이 해석할 수 없는 문법적 오류(SyntaxError)같은 경우는 작동하지 않는다.

```javascript
try {
    
    {}{ // SyntaxError

  console.log("자바스크립트 엔진은 이 코드를 이해할 수 없어 실행 자체가 안됨");

} catch (err) {

  console.log("여기도 실행 안됨");

}
```

## `try...catch`는 동기적으로 동작한다

`try...catch`는 `setTimeout`와 같이 비동기적으로 실행되는 코드의 에러는 잡아낼 수 없다.

```javascript
try {
    
  setTimeout(() => {

    a; // 에러가 발생하지만 catch가 잡아낼 수 없음

  }, 1000);

} catch (err) {

  console.log("try 블록의 에러를 잡아낼 수 없음");

}
```

1초뒤 `setTimeout`의 익명함수가 실행되고 에러가 발생하지만 이미 자바스크립트 엔진은 `try...catch` 블록을 떠났기 때문에 오류를 잡아낼 수 없다. 비동기로 실행되는 코드의 에러를 잡으려면 반드시 해당 함수 안에서 `try...catch` 구문을 사용해야 한다.

```javascript
setTimeout(() => {

  try {

    a; // 에러가 발생하지만 catch가 잡아낼 수 있음

  } catch (err) {

    console.log("try 블록의 에러를 잡아냄");

  }
  
}, 1000);
```

## 에러 객체

에러가 발생하면 자바스크립트는 에러 내용이 담긴 객체를 생성하고 `catch` 블록의 인수로 전달한다.

```javascript
try {

  a; // 에러 시작

} catch (err) {

  console.log(err); // ReferenceError: a is not defined
  console.log(err.name); // ReferenceError
  console.log(err.message); // a is not defined
  
}
```
`name` 프로퍼티는 에러의 이름을 나타내고 `message`는 에러에 대한 상세 내용을 가지고 있다.

## 직접 에러를 생성해 던지기

### throw 연산자

`throw` 연산자는 예외를 던질 수 있으며, `catch` 블록에 전달된다.
> `throw` 연산자는 함수의 실행을 중단한다는 표현과 같다.

```javascript
try {

  throw "예외 처리를 던짐";

  console.log("여긴 실행 안됨");

} catch (err) {

  console.log(err); // 예외 처리를 던짐
  
}
```

위 코드에서 `throw`는 예외를 던지고 있으며, `throw` 아래의 로직은 실행이 안된다. `throw` 연산자자와 에러 객체 생성자를 이용하여 예외 처리를 해보자.

### 에러 객체 생성자

```javascript
const error = new Error("에러 발생");
const syntaxError = new SyntaxError("문법 에러 발생");

console.log(error); // Error: 에러 발생
console.log(syntaxError); // SyntaxError: 문법 에러 발생
```

자바스크립트는 `Error`, `SyntaxError`, `ReferenceError`, `TypeError` 등 표준 애러 객체 생성자를 지원하며, 이 생성자들을 이용해 에러 객체를 만들 수 있다.

### 생성한 에러 던지기

```javascript
const person = {
  name: "foo",
  age: 20,
};

try {

  if (!person.gender) {
    throw new SyntaxError("성별이 없음");
  }

  console.log("이곳은 실행이 안됨"); // person.gender 값이 없기 때문에 실행이 안됨

} catch (err) {

  console.log(err); // Error: 성별이 없음
  
}
```

위 코드의 `try` 블록에서는 성별 값이 있는지 체크하고 있는데, 체크 대상인 `person` 객체에는 이름과 나이만 있고 성별이 없다. 때문에 성별이 없을 때 직접 생성한 에러를 던지고 있고, `catch` 블록에서 에러를 받아 출력하고 있다.

> 참고로 위 에러는 직접 생성한 에러이기 때문에 실제 `SyntaxError` 에러는 아니다.

## 에러 다시 던지기

`try...catch`는 애초에 `try` 블록에서 발생한 모든 에러를 잡는 목적으로 만들어졌다. 에러의 종류와 상관 없이 모든 에러를 잡는것은 디버깅에 어려움을 주기 때문에 예상치 못한 에러를 다시 던져서 에러의 종류에 따라 대응을 해줘야 한다.

```javascript
const person = {
  name: "foo",
  age: 20,
};

const getError = () => {
  try {
    if (!person.gender) {
      throw new SyntaxError("성별이 없음");
      // throw new ReferenceError("성별이 없음");
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log("이 에러는 " + err); // SyntaxError일 경우
    } else {
      throw err; // SyntaxError가 아닐 경우 밖으로 다시 던짐
    }
  }
};

try {
  getError();
} catch (err) {
  if (err instanceof ReferenceError) {
    console.log("이 에러는 " + err); // ReferenceError일 경우
  }
}
```

`getError()`가 실행되면서 `SyntaxError`를 잡아내고 있으며, 만약 `SyntaxError` 에러가 아닐 경우는 다시 에러를 함수 밖으로 던지며, 함수 외부에서 에러를 다시 잡고 있다. 함수 밖에서는 `ReferenceError`일 경우를 잡아내고 있다. `SyntaxError`일 경우는 함수 내부에서 에러를 잡고 `ReferenceError`일 경우는 함수 외부에서 잡는다고 보면 된다.

## finally

`finally`절은 에러의 유무와 상관없이 마지막으로 사용되는 블록이며, 마지막 제어가 필요할 때 사용하면 된다.

```javascript
try {
    
  throw new Error("에러 발생");

} catch (err) {

  console.log(err); // 에러 발생

} finally {

  console.log("항상 실행"); // 항상 실행

}
```

## References
['try..catch'와 에러 핸들링](https://ko.javascript.info/try-catch)  
[에러 처리를 어떻게 하면 좋을까? - 1](https://rinae.dev/posts/how-to-handle-errors-1)  
[예외 ( throw,[try/catch/finally])](https://www.opentutorials.org/module/4302/26560)
