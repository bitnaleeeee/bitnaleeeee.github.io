---
layout: post
title: "[JavaScript] Callback 과 Promise"
date: 2023-1-28 18:00:59
modified: 2023-1-28 18:00:59
tag: [JavaScript, CallBack, Promise]
---

콜백함수를 이용하면 자바스크립트의 비동기 처리의 특성에도 원하는 시간에 원하는 값을 얻어올 수 있다. 하지만 콜백 패턴은 콜백 지옥으로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며 한계가 있다는 단점이 있다. 이를 해결하기 위해 ES6에서는 비동기 처리를 위한 패턴으로 프로미스(`Promise`)를 도입하였다.

## `Promise`
`Promise` 생성자 함수를 `new` 연산자와 함께 호출하면 프로미스(객체)를 생성한다. `promise`생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달 받는데 이 콜백 함수는 `resoleve`와 `reject`함수를 인수로 전달받는다. 
```javascript
const promise  = new Promise((resolve, reject) => {
  if(/*통신을 성공했을때*/) {
    resolve('result');
  } else {
    rejuct('fail')
  }
});
```
위와 같이 `new`연산자로 `Promise` 객체를 생성하여 비동기 처리를 할 수 있다. 비동기 처리는 `Promise` 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 수행하며, 성공하면 `resolve` 함수에 인수로 전달하여 호출, 실패시 `reject` 함수에 인수로 전달하며 호출하도록 작성한다. 