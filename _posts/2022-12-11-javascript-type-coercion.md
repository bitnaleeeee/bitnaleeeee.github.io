---
layout: post
title: "[JavaScript] 타입 변환과 단축평가"
date: 2022-12-10 14:00:08
modified: 2022-12-10 14:00:08
tag: [javascript]
---

## 타입 변환 (명시적, 암묵적)
자바스크립트의 모든 값은 타입이 있다. 타입 변환이란 이러한 타입을 변환시키는 것을 말하는데 개발자가 의도적, 명시적으로 타입을 변환시키는 경우를 '명시적 타입 변환'이라 하고 개발자 의도와는 상관없이 자바스크립트 엔진에서 암묵적으로 타입을 변환시키는 것을 '암묵적 타입 변환' 혹은 '타입 강제 변환'이라고 한다.

아래 예시를 통해 살펴보자
```javascript
let num = 10;

let numToString = num.toStrung(); 
// 명시적 타임 변환

let num2 = 20;

let num3 = 20 + '';
//암묵적, 강제적 타입 변환
```

개발자가 명시적, 의도적으로 값의 타입을 변환시키지 않았을때 자바스크립트 엔진이 타입을 변환 시켰고, 이를 개발자가 인지하지 못해 코드가 의도한 대로 작동되지 않는 경우가 발생할 수 있으므로 개발자에게 있어서 암묵적 타입 변환 공부는 필수적이라 할 수 있다.
간단히 예시로 아래 값이 어떻게 출력될지 생각해보자.

```javascript
//1. 
'10' + 2 

//2.
5 *' 10'
```

첫번째는 102가 나온다. 문자열 + 숫자의 형태는 암묵적 변환으로 인하여 문자열 타입으로 변환되며 102가 출력된다.
두번째는 50이 나온다. 문자열 x 숫자의 형태는 역시 자바스크립트 엔진에서 숫자로 변환되어 50이 나온다.
>이 처럼 stirng 형태와 숫자의 형태의 연산자가 있을때 + 연산자는 string 형태로 변환, 곱하기 빼기 나누기 등은 숫자 연산자로 변환함을 알 수 있다.
또한 아래와 같이 불리언의 형태도 숫자연산자로 변환된다
```javascript
'1' > 0 // true
```


하지만, + 연산자의 단항 연산자의 경우는 string이 아닌 숫자 타입으로 암묵적 변환이 실행된다
아래 예시를 살펴보자.

```javascript
+ '' 
   // 0
+'0' 
   //0
+'1'
   //1 
+'string '
   //Nan 
+true 
   // 1
+false
   //0
'1' > 0 
   //true
```

아래 불리언 불리언 타입으로 암묵적 변환을 살펴보자

```javascript
if('') console.log('1');
if(0) console.log('2');
if(true) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
```

>콘솔창에는 3과 4만 출력된다.
첫번째 1의 경우 빈 문자열이므로 false로 반환시키고, 0은 불리언값으로 들어가면 false로 반환된다.
세번째 true는 값이 true이므로 3, 'str'이라는 문자열이 존재함으로 이도 true로 변환되어 4가 출력된다.
null은 값이 존재하지 않으므로 false로 반환되어 출력 되지 않는다.
자바스크립트 엔진은 `false`, `undefined`, `null`, `0`, `Nan`, `''`(빈 문자열) 의 경우 false 로 불리언 타입으로 암묵적 변환시킨다.

### 단축 평가
논리곱(&&) 연산자와 논리합(||) 연산자의 경우  논리 연산의 결과를 결정하는 피연산자를 "타입 변환하지않고" 그대로 반환하는 것을 말한다. 이떄 논리곱, 논리합 연산자는 좌항에서 우항으로 평가가 진행된다.
논리곱 연산자의 경우 두 개의 피연산자가 모두 `true` 일때 `true`를 반환하고, 논리합 연산자의 경우 둘 중 하나만 `true`면 `true`를 반환한다. 

```javascript
true || anything
false || anything
true && anything
false && anything
```
>첫번째부터 순서대로 true, anything, anything, false가 반환된다.

이러한 단축평가를 활용하여 코드를 작성할때 에러가 나지 않고, 값을 부여할 수 있다

```javascript
let elem = null;
let value = elem.vaule; // tyreError 객체 속성값이 없다.
```

하지만, 단축평가를 사용하면
```javascript
let elem = null;
let value = elme && elem.vaule; // tyreError 객체 속성값이 없다.
```
앞 elme이 `null` 값으로 `false`이므로 타입 변환 없이 그대로 `null`을 출력할 수 있다. 이를 활용하여 예를 들어  `map`함수로 데이터를 넣어 값을 출력하는데 사용할 수 있다.

아래는 ES11 부터 도입된 옵셔널 체이닝과 null 병학 연산자이다

### 옵셔녈 체이닝
```javascript
let elme = null;

let value = elem?.value;
console.log(value); // undefined
```
>옵셔널 체리닝 연산자는 좌항의 피연산자가 `null` 혹은 `undefined`인 경우 `undefined`를 반환하고 그렇지 않으면 우항의 연산자를 이어간다.

### null 병합 연산자
```javascript
let foo = null ?? 'hi';

console.log(foo); // 'hi'
```
반대로 null 병합 연산자는  좌항의 피연산자가 `null` 혹은 `undefined`인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

이렇게 자바스크립트의 암묵적 타입변환, 단축평가, 신문법인 옵서녈체이닝과 null 병합 연산자를 통해 코드에 활용하고 의도대로 코드가 작동하도록 활용할 수 있을 것이다.