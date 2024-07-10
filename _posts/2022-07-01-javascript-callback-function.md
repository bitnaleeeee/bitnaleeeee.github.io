---
layout: post
title: "[JavaScript] 비동기처리와 콜백함수의 개념"
date: 2022-07-01 19:10:59
modified: 2022-07-01 19:10:59
tag: [javascript]
---

# 비동기처리와 콜백함수
### 1. 자바스크립트는 동기적인가 비동기적인가?
1)자바스크립트는 동기적이다.
호이스팅이 된 이후부터 코드가 작성된 순서대로 하나씩 동기적으로 실행한다. \*호이스팅(Hoisting)이란? 자바스크립트에서 코드를 처리할 때 먼저 let 변수 등의 선언이나 function declaration을 최상단으로 띄운 후 코드를 읽는다. 이로 인해 let 변수의 경우 중복 선언 가능 등의 문제점이 야기 되자 ES6에서 let 이 추가되었다.

```javascript
console.log("1");
console.log("2");
console.log("3"); //차례대로 1,2,3 출력
```

2)자바스크립트는 비동기적이다. 언제 코드가 처리될지 알 수 없다.
대표적 예시 - setTimeout (웹 API)
브라우저에서 제공되어지는 API 로 지정한 시간이 지나면 전달 받은 함수를 호출한다.
브라우저에서 호출(callback)하면 자바스크립트는 전달했던 함수를 화면에 출력(실행)한다.
setTimeout은 자바스크립트 비동기 처리의 대표적 예시이다.

### setTimeout을 사용한 자바스크립트의 비동기 처리 예시

```javascript
setTimeout(function () {
  cossole.log("2");
}, 1000);
```

위 코드는 아래와 같이 간단히 작성 가능하다.(arrow function)

```javascript
setTimeout(() => console.log("2"), 1000);
```

위 코드를 보면, setTimeout은 웹 API이므로 자바스크립트 엔진은 브라우저에게 파라미터로 해당 함수를 전달한다. 브라우저는 주어진 1초의 시간동안 함수를 처리한 후 해당 함수를 호출한다(callback). 브라우저로부터 호출 받은 자바스크립트는 해당 결과값을 처리(출력)한다.

### jquery의 Ajax을 사용한 자바스크립트의 비동기 처리 예시

```javascript
function getData() {
  let tableData;
  $.get("https://domain.com/products/1", function (response) {
    tableData = response;
  });
  return tableData;
}
console.log(getData()); // undefined
```

*Ajax란? 서버(Server)와 비동기적으로 데이터 주고 받는 자바스크립트의 기술을 의미한다. get 코드로 서버에게 요청 하며 새로고침 없이 데이터를 요청해 부드럽게 동작이 가능하다는 장점이 있다.
*서버(server)란? client가 데이터 요구하면 데이터를 보내주는 프로그램이다.

코드를 살펴보자. 왜 undefined가 나왔을까? 자바스크립트 엔진은 함수 호이스팅 후 다음 코드를 읽어간다. 바로 다음 코드에서 getData함수를 호출 했으므로 해당 함수를 처리하는데 Ajax는 서버에 데이터를 요청하는 기능이므로, 자바스크립트 엔진은 서버에서 해당 데이터 응답이 올때까지 마냥 기다리지 않고 바로 다음 코드를 읽는다.(비동기 처리) 따라서 undefined가 출력된다.

그렇다면, 위와 같은 문제를 해결하고 원하는 때에 원하는 값을 출력할 수 있는 방법은 없을까? 콜백함수를 이용하여 이를 해결할 수 있다.

### callback 함수

함수에 파라미터로 들어가는 함수로, 순차적으로 실행하고 싶을때 사용한다.
파라미터로 들어가 있는 함수를 전달 후 처리가 완료되면 호출(callback)한다.

### callback 함수 사용 예시

```javascript
function getData(callbackFunc) {
  $.get("https://domain.com/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

자바스크립트 엔진은 함수 선언부분을 호이스팅한 후에 다음 코드를 읽어나간다. 다음 코드에서 getData 함수를 호출했는데 파라미터로 함수가 들어가 있다.(콜백함수)
뜻을 해석하면 getData함수를 파라미터에 function(tableData)를 넣어 실행하라는 의미이다. 자바스크립트는 getData함수에 콜백 함수를 파라미터로 넣어서 코드를 읽어 나가고,
해당 서버에 요청한 데이터 response의 값이 출력된다. 이렇게 콜백함수를 이용하면 자바스크립트의 비동기 처리의 특성에도 원하는 때에 원하는 값을 얻어올 수 있다.

> 참고
[캡틴판교](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/#%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EC%9D%98-%EB%91%90-%EB%B2%88%EC%A7%B8-%EC%82%AC%EB%A1%80)
