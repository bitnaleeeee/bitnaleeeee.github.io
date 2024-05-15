---
layout: post
title: "[JavaScript] Fetch API"
date: 2022-07-29 17:10:56
modified: 2022-07-29 17:10:56
tag: [http, javascript]
---

자바스크립트의 fetch 함수는 비동기 통신 API로써 서버에 네트워크 요청을 보내 새로운 정보를 받아올 수 있다. ES6부터 지원하며, 가독성이 매우 뛰어난 장점이 있다. [이곳](https://jsonplaceholder.typicode.com/todos/1)을 클릭하면 JSON 데이터 화면이 나온다. fetch API를 이용해 이 JSON을 가져와 보자.

## 기본 형태
fetch API의 기본 형태는 아래와 같다.

```javascript
fetch(url, [options])
  .then((res) => res.json())
  .then((res) => {
    // data를 응답 받은 후 로직
  });
```

* `url`에는 접근하고자 경로를 넣으면 된다.  
* `options`에는 `method`나 `header`등을 지정하여 요청할 수 있다.  
* `options`에 아무값도 넘기지 않으면 요청은 GET 메서드로 진행된다.  

화살표 함수를 함수 선언식으로 변경하면 아래와 같다.

```javascript
fetch(url, [options])
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    // data를 응답 받은 후 로직
  });
```

[위에서 언급한 주소](https://jsonplaceholder.typicode.com/todos/1)를 입력하여 JSON 데이터를 잘 가져오는지 확인해 본다.

## 요청 하기
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(res) {

    // Response Object
    console.log(res);

    // 응답값 JSON 형태로 얻기
    return res.json();
  })
  .then(function(res) {

    // 리턴 받은 JSON
    console.log(res);
  });
```

* 응답값은 첫번째 `then`에 지정된 함수의 `res`에 담겨지며, 이 값은 http 응답값을 가지고 있는 `Response Object`이다.  
* 첫번째 `then`의 응답값을 JSON 형태로 얻기 위해 `Response Object`의 `json()` 함수를 호출하여 값을 리턴한다.  
* 두번째 `then`에서 응답 받은 JSON을 확인할 수 있다.

## References
[fetch](https://ko.javascript.info/fetch)  
[fetch() 함수 사용법](https://yeri-kim.github.io/posts/fetch/#fetch-함수-기본)  
[Javascript에서의 비동기 통신](https://m.blog.naver.com/dndlab/221783285664)

