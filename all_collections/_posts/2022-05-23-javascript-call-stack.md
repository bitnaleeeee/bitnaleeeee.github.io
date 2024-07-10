---
layout: post
title: "[JavaScript] 호출 스택(Call Stack)"
date: 2022-05-23 12:44:59
modified: 2022-05-23 12:44:59
tag: [javascript]
---

## 호출 스택

호출 스택이란 **함수의 호출을 기록하는 자료구조**이다. 기본적으로 우리가 프로그램 안에서 위치한 곳이며, 만약 우리가 어떤 함수를 실행시킨다면, 우리는 스택 위에 무언가를 올리는(push) 행위를 하는 것이다. 그리고 우리가 함수로부터 반환을 받을 때, 우리는 스택의 맨 위를 가져오는(pop) 것이다.

> 자료구조란 사전적인 의미는 자료(Data)의 집합의 의미하며, 각 원소들이 논리적으로 정의된 규칙에 의해 나열되며 자료에 대한 처리를 효율적으로 수행할 수 있도록 자료를 구분하여 표현한 것

```javascript
function func01() {
  throw new Error("Oops!");
}
function func02() {
  func01();
}
function func03() {
  func02();
}
func03();
// Uncaught Error: Oops!
// at func01 (index.html:27)
// at func02 (index.html:30)
// at func03 (index.html:33)
// at window.onload (index.html:35)
```

위 코드를 실행해보면 콘솔창에 빨간 애러 스택들이 나온다. 보통 그것들은 호출 스택의 현재 상태를 나타내며, 실패함 함수를 스택처럼 위에서 아래로 나타낸다.

크롬 개발자 도구의 디버깅 기능을 활용하여 호출스택을 확인해 볼 수 있다.

```javascript
function func01() {
  console.log("hello");
}
function func02() {
  func01();
}
function func03() {
  func02();
}
debugger;
func03();
```

위 코드를 실행하면 디버깅 모드가 시작될 것이다. 개발자 도구에서 `Sources` 패널의 `Call Stack`을 확인해 보면 처음에는 `(anonymous)`이 출력되며, `Step` 버튼을 클릭하여 다음 함수를 들어갈 때 마다 스택이 점점 쌓이는 것을 볼 수 있다.

```
func01
func02
func03
(anonymous)
```

그리고 함수를 빠져 나갈 때 마다 스택이 위에서 부터 빠져 나가는 것을 확인할 수 있다. 이러한 각 단계를 **스택 프레임(Stack Frame)** 이라고 한다.

## 스택 오버플로우
스택의 사이즈를 초과했을 때 발생하는 오류인데 보통 재귀를 호출했을 때 나타난다.

```javascript
function func() {
  func();
}
func();
// Uncaught RangeError: Maximum call stack size exceeded
// at foo (index.html:25)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
// at foo (index.html:26)
```
엔진에서 이 코드를 실행할 때, `func()`에 의해서 `func`함수가 호출된다. 여기서 다시 `func`함수를 호출하고 반복적으로 함수를 호출하게 된다. 그러면 매번 실행할 때마다 호출스택에 `func()`가 쌓이며 최대 허용치를 넘으면 위처럼 에러를 발생시킨다.

## References
[Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)  
[자바스크립트 개발자라면 알아야 할 33가지 개념 #1 콜스택 (번역)](https://velog.io/@jakeseo_me/2019-03-15-2303-작성됨-rmjta5a3xh)  
[자료구조 : 자료구조란? (Data Structure)](https://andrew0409.tistory.com/148)  
[자바스크립트의 동작원리: 엔진, 런타임, 호출 스택](https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/)

