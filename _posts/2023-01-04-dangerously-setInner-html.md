---
layout: post
title: "[React] dangerouslySetInnerHTML"
date: 2023-1-3 15:00:59
modified: 2022-1-3 15:00:59
tag: [React, HTML, XSS]
---

`dangerouslySetInnerHTML`은 브라우저에 DOM에서 `innterHTML`을 사용하기 위한 React의 대체 방법이다. 일반적으로 코드에서 HTML을 설정하는 것은 XSS 공격에 쉽게 노출될 수 있기 때문에 위험하다는 것을 상기시키기 위해 `dangerouslySetInnerHTML`을 작성하고 `__html`키로 객체를 전달해주어야 한다.

### XSS 공격이란?
CRoss Site Scripting의 약자로 함께 웹 상에서 가장 기초적인 취약점 공격 방법중 하나이다. 권한이 없는 사용자가 악의적인 용도로 웹 사이트에 스크립트를 삽입하는 공격 기법으로, 공격에 성공하게 될 경우 사이트에 접속한 사용자는 삽입된 코드를 실행하게 되어 의도치 않은 행동을 수행시키거나 쿠키나 세션 토큰 등의 민감한 정보를 탈취당할 수 있다. 

아래는 내 코드의 예시이다. 

```javascript
const highLight = (str) => {
    if (!inputTxt) return str;
    let regex = new RegExp(inputTxt, "gi");
    return str.replace(
      regex,
      '<span class="highlight">' + inputTxt + "</span>"
    );
  };
```


```javascript
//JSX 부분
<span className="bundle_badge">
  {jobItem.keywords.map((items, idx) => {
    return (
      <a
        href="#none"
        key={idx}
        dangerouslySetInnerHTML={{ __html: highLight(items) }}
      />
    );
  })}
</span>
```
`__html` 키로 객체를 전달해 주면 UI상에서 `HTML`요소를 보여줄 수 있다. 그때 반드시 위처럼 `dangerouslySetInnerHTML`를 표기해서 위험한 코드인 것을 알리도록 작성할 것을 리액트 메뉴얼에선 권장하고 있다.

추가로 이렇게 불가피하게 사용해야할 상황이 생긴다면 `dompurify` 같은 악성 `HTML`을 모두 제거하고 깨끗한 `HTML`데이터를 반환해주는 sanitization library와 함께 사용해주는 것이 좋다. 

### dompurify 사용법

1.설치
```javascript
$ npm install dompurify
```

2.코드 예시
```javascript
const sanitizer = dompurify.sanitize;
```
```javascript
//JSX 부분
<span className="bundle_badge">
  {jobItem.keywords.map((items, idx) => {
    return (
      <a
        href="#none"
        key={idx}
        dangerouslySetInnerHTML={{ __html: sanitizer(highLight(items)) }}
      />
    );
  })}
</span>
```
위와 같이 선언해준 변수명으로  `__html` 전체 부분을 감싸주면 된다.
