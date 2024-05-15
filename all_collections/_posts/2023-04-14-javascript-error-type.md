---
layout: post
title: "[JavaScript] 자바스크립트의 오류 유형"
date: 2023-04-09 10:08:01
modified: 2023-04-09 10:08:01
tag: [javascript, error]
---

자바스크립트의 오류 유형을 알아보자.

# 구문 오류(Syntax Error)
자바스크립트 규칙에 어긋나는 문법으로 작성하여 자바스크립트 엔진이 이해 못 할 문자가 입력되었을 때 발생한다. 요즘에는 에디터 내부에서 오류를 친절하게 찾아주기 때문에(**ESlint** 혹은 **Prettier**) 브라우저에서 구문 오류는 찾아보기가 힘들어 졌다.

##### 예제
문자열을 따옴표로 닫지 않고 변수에 할당함

```javascript
let text = 'hello
```

##### 오류 메세지
`Uncaught SyntaxError` - 유효하지 않거나 예상치 못한 토큰

```javascript
Uncaught SyntaxError: Invalid or unexpected token
```

<br>

# 타입 에러(Type Error)
가장 많이 발생하는 에러중 하나로 구문의 기대하는 값이 아닐 경우 오류가 발생한다. 쉽게 말해 변수의 값이 원하는 값이 아닐 때 나타난다고 볼 수 있다.

##### 예제 1
`obj` 객체에 없는 함수 `myFunc`를 호출할 때 타입 에러가 발생한다.

```javascript
let obj = {};
let result = obj.myFunc();
```

##### 오류 메세지
`Uncaught TypeError` - `obj.myFunc`는 함수가 아닙니다

```javascript
Uncaught TypeError: obj.myFunc is not a function
```

##### 예제 2
`obj` 값이 `null` 혹은 `undefined`일 경우 없는 프로퍼티를 호출하면 에러가 발생한다.

```javascript
let obj = null;
// or
let obj;

let result = obj.myProperty;
```

##### 오류 메세지
`Uncaught TypeError` - 정의되지 않은 속성을 읽을 수 없습니다

```javascript
Uncaught TypeError: Cannot read properties of undefined (reading 'myProperty')
```

### 타입 에러의 방어 코드(단축 평가)
해당 변수의 객체가 있을 경우에만 프로퍼티(혹은 함수)를 사용하고 싶다면 오류가 발생하지 않도록 아래처럼 방어 코드(단축 평가)를 추가할 수 있다. 리액트같은 라이브러리를 사용하는 경우 `state`가 선언되기 전에 렌더링 될때 타입 에러가 발생되는 경우가 많은데 아래처럼 사용이 가능하다.

```javascript
let result = obj && obj.myProperty;
// obj가 존재할 경우에만 myProperty 프로퍼티를 호출
```

<br>

# 참조 에러(Reference Error)
참조 에러는 현재 범위에 존재하지 않거나 선언하지 않은 변수를 참조하였을때 발생하는 에러유형이다.


##### 예제
선언되지 않은 함수 `boo`를 호출하면 참조 에러가 발생한다.

```javascript
function foo() {}
boo();
```

##### 오류 메세지
`Uncaught ReferenceError` - boo가 정의되지 않았습니다
```javascript
Uncaught ReferenceError: boo is not defined
```

<br>

# 범위 에러(Reference Error)
어떤 값이나 데이터가 유효한 자원의 범위를 넘어설 때 발생한다. 대표적으로 콜 스택 초과 에러가 있다.

##### 예제
foo 함수는 boo를 호출하고 boo 함수는 foo를 호출하면 무한 루프가 걸리면서 스택이 오버되었을 때 오류가 난다.

```javascript
function foo() {
    boo();
}
function boo() {
    foo();
}
foo();
```

##### 오류 메세지
`Uncaught RangeError` - 최대 호출 스택 크기 초과
```javascript
Uncaught RangeError: Maximum call stack size exceeded
```

<br>

# 그 외 에러
이 외에도 아래와 같은 에러들이 존재한다.
* **EvalError** : `eval()` 함수와 관련한 오류가 발생했을 때
* **InternalError** : 자바스크립트 엔진 내부에서 오류가 발생했을 때
* **URIError** : `encodeURI()`나 `decodeURI()` 함수에 부적절한 매개변수를 제공했을 때

<br>

# References
[MDN Web Docs - Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)  
[자주 발생하는 자바스크립트 에러](https://blog.shiren.dev/2021-06-29/)  
[자바스크립트 오류 확인하는 방법과 7가지 오류 유형](https://hongong.hanbit.co.kr/크롬으로-자바스크립트-오류-확인하는-방법과-7가지/)
