---
layout: post
title: "[React] 리액트 비동기처리로 인한 오류 해결하기(TIL)"
date: 2023-12-6 19:10:59
modified: 2023-12-6 19:10:59
tag: [React, JavaScript, TIL]
---

리액트는 자바스크립트를 기반으로 하고 있으므로 주로 비동기적인 작업을 다루는데에도 자바스크립트의 특성을 따라가고 있다.
예를 들어 `setState` 함수나 `useEffect` 훅에서 비동적으로 동작한다.

이러한 특성으로 발생한 오류는 아래와 같다.

```javascript
import React, { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  const [items, setItems] = useState([]);
  const [memo, setMemo] = useState([]);
  let inputText = JSON.parse(localStorage.getItem("inputText"));

  function addNoteBook() {
    let newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
  }
  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
  }

  function addNewMemo() {
    console.log(inputText)
    setMemo([...memo, inputText]);
  }
  // inputText가 한 박자씩 늦게 받아와 짐
```

위 코드를 살펴보면 `inputText`로 데이터를 저장하고 함수 내에 불러 올때 데이터가 늦게 들어오는 오류가 발생했다. 보통 프론트엔드에서 백엔드를 따로 구현하지 않고 프론트단에서 데이터를 처리하는 방법으로 흔히 `LocalStorage`를 사용하곤 하는데
이때 데이터를 저장하거나 함수를 불러오고자 할때 데이터가 한박자씩 늦게 들어오게 된다.

`console.log`를 찍어보았을때 `localStorage.getItem`으로 받아온 데이터가 함수 밖에서는 실시간으로 보이지만, `addNewMemo` 함수 안에서는 한박자 느린 원인은 리액트의 비동기 동작과 관련이 있다.
`localStorage.getItem`은 브라우저의 로컬 스토리지에서 데이터를 동기적으로 가져오는 것이 아니라 비동기적으로 동작하므로 함수 밖에서는 데이터가 바로 갱신된 것처럼 보이지만 함수 내에서는 데이터가 아직 업데이트되기 전에 `console.log`가 실행되어 이러한 오류가 발생하게 된다.

자바스크립트에서 비동기 동작을 다룰 때는 `localStorage.getItem`의 콜백 함수를 사용하거나, `async/await` 를 활용하여 처리할 수 있다. 예를 들어

```javascript
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localStorageData = await localStorage.getItem("yourKey");
        setData(localStorageData);
        console.log(localStorageData);
        // 이 시점에서는 data가 업데이트된 후에 실행
      } catch (error) {
        console.error("Error fetching data from localStorage:", error);
      }
    };

    fetchData();
  }, []); // 빈 배열을 넣어 최초 한 번만 실행되도록 설정

  return <div>{/* data를 사용하여 렌더링 또는 다른 작업 수행 */}</div>;
};

export default MyComponent;
```

또는 간단하게 함수를 호출하는 시작점을 변경해줘도 해결은 가능하다.

```javascript
import React, { useState } from "react";
import App from "../Lexical/App";
import "./Main.scss";

const Main = () => {
  const [items, setItems] = useState([]);
  const [memo, setMemo] = useState([]);

  function addNoteBook() {
    let newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
  }
  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
  }

  function addNewMemo() {
  let inputText = JSON.parse(localStorage.getItem("inputText"));
    setMemo([...memo, inputText]);
    //inputText 데이터 바로 받아와짐
  }
```

위와 같이 `addNewMemo`함수 내에 `inputText`를 선언해줘도 해결이 가능한 것을 볼 수 있다.

이렇게 리액트 애플리케이션에서 사용되는 여러 `API`들 (예: 데이터 fetching, AJAX 호출 등)은 자바스크립트 비동기 패턴을 따르므로 이로 인한 오류를 해결하기 위해서는
`Promise`나 `async/await` 같은 기능을 사용하여 비동기 코드를 작성하고 관리할 수 있다.
