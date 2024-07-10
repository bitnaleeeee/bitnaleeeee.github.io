---
layout: post
title: "[React] useNavigate로 페이지 뒤로가기 구현하기"
date: 2023-10-12 12:00:59
modified: 2023-10-12 12:00:59
tag: [react, useNavigate, hook]
---

useNavigate는 `hook`으로 페이지를 이동할 수 있게 해주는 함수를 반환할때 사용한다.  
이때 주의할 점은 `useNavigate`를 직접 호출하지 않고 변수를 선언하여 사용해야한다는 점이다.

```javascript
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <input placeholder="전화번호, 사용자 이름 또는 이메일" />
      <input placeholder="비밀번호" />
      <button
        onClick={() => {
          navigate("/main");
        }}
      >
        로그인
      </button>
    </div>
  );
};
```

`hook`사용 규칙

- 컴포넌트 최상단에서만 호출해야 한다.
- 다른 조건문, 함수선언문, 반복문 등 중첩된 함수 안에서는 호출 할 수 없다.
- 컴포넌트 내부 함수에서 `callback`으로도 호출할 수 없다.

번외로 유사한 기능을 하는 `Link`는 클릭 시 바로 이동하는 로직 구현시 사용하는게 적절하며,
함수 등 조건문이 발생할때 페이지 전환이 되는 경우에는 `useNavigate`로 구현하는 것이 좋다.

## 뒤로가기 기능

```javascript
const Main = () => {
  const navigate = useNavigate();

  function goToUrl() {
    navigate(-1);
  }
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon
          className="backIcon"
          icon={faChevronLeft}
          onClick={goToUrl}
        />
      </div>
    </div>
  );
};
```

바로 이전 페이지로 이동할 수 있도로 -1인덱스 형태로 넣어주면 이전에 클릭한 페이지로 돌아가는 뒤로가기 기능을 구현하였다.
인덱스 형태가 아닌 './main' 등으로 직접 페이지 지정도 물론 가능하다.

## References

[React Slick 공식 홈페이지](https://react-slick.neostack.com/)
