---
layout: post
title: "[React] React Navbar fixed"
date: 2023-02-20 18:00:59
modified: 2023-02-20 18:00:59
tag: [React, JavaScript, SCSS]
---

React 의 `useState` 와 `useEffect`를 이용하여 화면 스크롤이 일정 부분 아래로 내려갔을때 상단의 네비게이션을 고정시키는 함수를 아래와 같이 작성해보았다.  

## scrollY 값에 따라 Boolean 값 부여하기
```javascript
const [scrollY, setScrollY] = useState(0);
const [scrollActive, setScrollActive] = useState(false);

function scrollFixed = () => {
  if(scrollY > 150) {
    setScrollY(window.pageYOffset);
    setScrollActive(true);
  } else { 
    setScrollY(window.pageYOffset);
    setScrollActive(false);
  }
}
```
`scorllY` 의 높이가 150 이상일때 해당 높이값을 저장하고 그에 따라 `scrollActive`의 `Boolean`값을 변경해주는 함수를 작성하였다.

## 스크롤 이벤트 감지 및 함수 호출하기

```javascript
const [scrollY, setScrollY] = useState(0);
const [scrollActive, setScrollActive] = useState(false);

useEffect(() => {
  function scrollListner = () => {
    window.addEventListener('scroll', scrollFixed);
  };
  scrollListener();
  return () => {
    window.removeEventListenr('scroll', scrollFixed);
  };
});
```
화면이 초기 렌더링 되었을때 화면 스크롤 이벤트를 감지하고 `scrollFixed`함수를 실행시키는 함수가 실행되고, `useEffect`는 화면이 동작할때마다 연속해서 실행되기 때문에 해당 동작을 무한 반복하지 않도록 끝내는 함수를 `return`에 작성해 주었다.

```javaScript
<div className={scrollActive ? "fixed" : "fixed off"}>
```
JSX 부분에 `scrollActive`의 값이 `true`일때 `fixed` 클래스를 적용하고 `false`일때 `fixed off`클래스를 주는 구문을 작성하여 특정 스크롤 높이에서 네비게이션 바가 고정되도록 작성하였다.
