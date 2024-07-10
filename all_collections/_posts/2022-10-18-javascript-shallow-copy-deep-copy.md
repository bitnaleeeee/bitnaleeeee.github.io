---
layout: post
title: "[JavaScript] 얕은 복사, 깊은 복사"
date: 2022-10-18 12:00:59
modified: 2022-10-18 12:00:59
tag: [javascript]
---

깊은 복사와 얕은 복사에 대해 알아보겠다. 이 글의 초반 내용은 이전 포스팅의 (원시 타입과 참조 타입의 차이)과 맥락이 비슷하며, 위 포스팅은 원시 타입과 참조 타입의 차이점이라면 아래는 참조 타입의 깊은 복사하는 방법에 대해 알아보도록 하겠다.

## 얕은 복사(shallow copy)

얖은 복사는 참조(주소)값의 복사를 나타낸다.

```java script
const obj = { vaule: 1 }
const newObj = obj;

newObj.vaule = 2;

console.log(obj.vaule); // 2
console.log(obj === newObj); // true
```

obj 객체를 새로운 newObj 객체에 할당하였으며 이를 참조 할당이라 부른다. 복사 후 newObj 객체의 value값을 변경하였더니 기존의 obj.value값도 같이 변경된 것을 알 수 있다. 두 객체를 비교해도 true로 나온다. 이렇게 자바스크립트의 참조 타입은 얕은 복사가 된다고 볼 수 있으며, 이는 데이터가 그대로 생성되는 것이 아닌 해당 데이터의 참조 값(메모리 주소)를 전달하여 결국 한 데이터를 공유하는 것이다.

## 깊은 복사(deep copy)

깊은 복사는 값 자체의 복사를 나타낸다.

```javascript
let a = 1;
let b = a;

b = 2;

console.log(a); // 1
console.log(b); // 2
console.log(a === b); // false
```

화살표 함수를 함수 선언식으로 변경하면 아래와 같다.

```java script
fetch(url, [options])
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    // data를 응답 받은 후 로직
  });
```

변수 a를 새로운 b에 할당하였고 b 값을 변경하여도 기존의 a의 값은 변경되지 않는다. 두 값을 비교하면 false가 출력되며 서로의 값은 단독으로 존재하다는 것을 알 수 있다. 이렇게 자바스크립트의 원시 타입은 깊은 복사가 되며, 이는 독립적인 메모리에 값 자체를 할당하여 생성하는 것이라 볼 수 있다.

## 객체의 깊은 복사

객체를 그대로 복사하여 사용할 경우 기존 객체의 원본 데이터가 더럽혀 질 수 있기 때문에 객체의 깊은 복사는 매우 중요하다. 객체를 깊이 복사하는 방법에 대해 몇가지 알아보자.

### Object.assign()

Object.assign() 메서드를 활용하는 방법이다.

```javascript
문법
Object.assign(생성할 객체, 복사할 객체) 메서드의 첫번째 인수로 빈 객체를 넣어주며, 두번째 인수로 할당할 객체를 넣으면 된다.
```

```javascript
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj); // { a: 1 }
console.log(obj === newObj); // false
```

새로운 newObj 객체를 Object.assign() 메서드를 사용하여 생성하였으며, newObj.a 값을 변경하여도 기존의 obj는 변하지 않았다. 서로의 객체를 비교해도 false로 뜨며 서로 참조값이 다르다는 것을 알 수 있다.

Object.assign()는 2차원 객체는 깊은 복사가이루어지지 않는다
하지만 Object.assign()를 활용한 복사는 완벽한 깊은 복사가 아니다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
```

위처럼 obj 객체의 b 프로퍼티의 값으로 { c: 2 } 객체를 가진 2차원 객체일 경우는 경우는 어떨까?

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = Object.assign({}, obj);

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c); // true
```

2차원 객체를 newObj에 복사하고, newObj.b.c의 값을 변경하였다. 기존 obj 객체를 출력해보면 newObj.b.c의 값도 3으로 변경되었다. 복사된 하위 객체 { c: 2 }도 결국 객체이기 때문에 얕은 복사가 이루어진 것이다. 이는 Object.assign() 메서드의 한계이며, 전개연산자(Spread Operator) 를 이용한 객체의 복사에도 같은 문제가 있다.

## 전개연산자(Spread Operator)

```javascript
const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj); // { a: 1 }
console.log(obj === newObj); // false
```

전개연산자를 활용해도 객체의 깊은 복사가 가능하다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = { ...obj };

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c); // true
```

하지만 Object.assign()와 마찬가지로 2차원 객체는 얕은 복사가 되는 것을 확인할 수 있다.

### JSON 객체 메서드를 이용

객체의 깊은 복사를 위해 JSON 객체의 stringify(), parse() 메서드를 사용할 수 있다.

```javascript
문법
JSON.stringify() 메서드는 인수로 객체를 받으며 받은 객체는 문자열로 치환되며, JSON.parse() 메서드는 문자열을 인수로 받으며, 받은 문자열을 객체로 치환한다.
```

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = JSON.parse(JSON.stringify(obj));

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 2 } }
console.log(obj.b.c === newObj.b.c); // false
```

obj 객체를 JSON.stringify() 메서드를 이용하여 문자열로 변환한 뒤 다시 JSON.parse() 메서드로 객체로 변환하였다. 문자열로 변환한 뒤 다시 객체로 변환하였기에 2차원 객체에 대한 참조가 사라졌다. 하지만 이 방법도 2가지 문제가 있는데, 다른 방법에 비해 성능이 느린 점과 JSON.stringify() 메서드는 함수를 만났을 때 undefined로 처리한다는 점이다.

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj.func); // undefined
```

복사된 newObj는 func가 없고 undefined로 출력되고 있다.

### 커스텀 재귀 함수

이 문제를 원칙적으로 해결하려면 직접 깊은 복사를 구현하는 커스텀 재귀 함수를 사용하는 것이다.

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```

deepCopy 함수의 인수로 obj 객체를 넣었다. 인수값이 객체가 아닌 경우는 그냥 반환하며, 객체인 경우 객체의 값 만큼 루프를 돌며 재귀를 호출하여 복사된 값을 반환한다. 복사된 newObj 객체를 보면 2차원 객체의 값도 깊은 복사가 이루어 졌으며, 객체의 함수도 제대로 표현되는 것을 확인할 수 있다.

하지만 이미 객체의 깊은 복사를 위한 오픈 소스가 존재하며 lodash 모듈의 cloneDeep()을 이용하면 된다.

### lodash 모듈의 cloneDeep()

lodash 모듈의 cloneDeep() 메서드를 이용하여 객체의 깊은 복사가 가능하다. 해당 모듈을 설치해 준 뒤 아래 코드를 실행시켜 보자.

```javascript
& npm i lodash
```

```javascript
const lodash = require("lodash");

const obj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    return this.a;
  },
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c); // false
```

간단히 객체의 깊은 복사를 구현할 수 있다. 실제로 웹 개발을 하다보면 lodash 모듈은 흔히 사용되며, 가장 손쉽게 객체의 깊은 복사를 해결하는 방법이라 할 수 있다.

## References
[자바스크립트 객체 복사하기](https://junwoo45.github.io/2019-09-23-deep_clone/)  
[Javascript 깊은 복사의 함정](https://velog.io/@ashnamuh/Javascript-깊은-복사의-함정)  
[[Java Script] 얕은 복사와 깊은 복사](https://velog.io/@nomadhash/Java-Script-깊은-복사와-얕은-복사-1dus9z79)  
[JavaScript로 Deep Copy 하는 여러 방법](https://chaewonkong.github.io/posts/js-deep-copy.html)  
[Javascript:Shallow and Deep Copy :: 마이구미](https://mygumi.tistory.com/322)