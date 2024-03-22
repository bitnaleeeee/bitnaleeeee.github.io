---
layout: post
title: "[React] 조건부 렌더링과 && 연산자 사용시 주의사항"
date: 2023-07-29 18:00:59
modified: 2023-07-29 18:00:59
tag: [React, JavaScript]
---

리액트의 조건부 렌더링은 자바스크립트와 동일한 방식으로 작동하다
if문, 삼항 연산자 또는 논리 && 연산자를 사용하여 조건부 렌더링 코드를 작성해 줄 수 있는데
&& 연산자는 조건부 렌더링 사용시 더 짧은 코드로 작성하고 싶을 때 사용한다.

아래 예시를 살펴보면
&& 연산자를 사용하여 `data.shortData` 가 있을때 렌더링 하여 `map`함수로 뿌려주도록 코드를 작성하였다.

```javascript
return (
  <>
    <div className="grid-box short-form-box">
      <div className="title-wrap">
        <h3 className="title">
          <span className="title-sub">짧은 즐거움</span>
          <span className="title-sub short-form">숏폼</span>
          <span className="title-sub-img short-form"></span>
        </h3>
      </div>
      <div className="short-form-list">
        <ul className="short-form-list-inner">
          {data.shortData &&
            data.shortData.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#!">
                    <img src={item.img} alt="" className="img" />
                    <p className="info">{item.info}</p>
                    <p className="brand"> {item.name}</p>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  </>
);
```

만약 위 코드를 if 문으로 작성한다면

```javascript
          <ul className="short-form-list-inner">
            {if (data.shortData) {
                data.shortData.map((item, idx) => { ...
            } }
            else {
              null
            }
                );
              })}
          </ul>
```

으로 작성할 수 있고, 삼항연산자로 작성한다면

```javascript
          <ul className="short-form-list-inner">
         {data.shortData ?   data.shortData.map((item, idx) => { ... : null }
                );
              })}
          </ul>
```

로 작성할 수 있다
이처럼 && 연산자를 사용하면 보다 간결하게 코드를 작성할 수 있는 장점이 있다.

하지만 주의사항으로는 && 연산자의 경우 `true`일때 렌더링 하도록 작성하고 있는데
이때 만약 값이 `boolean`이 아닌 숫자 0이나 `undefined`일 경우 문제점이 발생한다.

1. undefined일때 아래와 같은 에러가 발생한다

```javascript
"Uncaught Error: Error(...): Nothing was returned from render.
This usually means a return statement is missing.
Or, to render nothing, return null."
```

2. 값이 0 일때
   `JavaScript`에서 true && expression 은 항상 expression 평가되고
   false && expression 은 항상 `false`로 평가 되기 된다.
   따라서 && 뒤의 엘리먼트는 조건이 `true`일때 출력이 되고, 조건이 `false`라면 `React`는 무시한다.

이때 `false`로 평가될 수 있는 표현식을 반환하면 && 뒤에 있는 표현식은 건너뛰지만
`false`로 평가될 수 있는 표현식이 반환되기 때문에 condition이 0일 경우 UI에 0 이 표시된다.

따라서 && 연산자 작성 시 > 0 로 조건을 주거나, 삼항연산자를 사용하여 이러한 에러를 방지할 수 있다.
