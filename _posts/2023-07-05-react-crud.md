---
layout: post
title: "[React] 전개연산자를 활용한 배열에 객체넣기"
date: 2023-07-05 18:00:59
modified: 2023-07-05 18:00:59
tag: [React, array, object, CRUD, useState, map]
---

**TIL(Today I Learned)**  
전개연산자를 활용하여 배열에 객체 데이터를 방법에 대해 정리하고 한다.
다만 조건이 있는데,
배열형태의 전체 데이터에 각 `id`값을 비교하여 일치하는 객체 형태의 갱신 데이터를 덮어줘야 한다.

> 1. 배열 형태의 전체 데이터와 객체 형태의 갱신 데이터의 아이디 값을 비교한다 (`map`함수 활용)
> 2. 일치하는 기존 데이터에 갱신된 데이터를 전개연산자로 덮어 씌운다.
> 3. 전체 데이터에 갱신된 데이터와 다른 기존의 데이터의 형태를 그대로 저장하여 `useState`에 담아준다.

작성한 코드는 아래와 같다.

```javascript
const updateInput = (id, checked, str) => {
  fetch(`${API.TODO}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      todo: str,
      isCompleted: checked,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setGetData(
        getData.map((item) => {
          return item.id === id ? { ...item, ...data } : item;
        })
      );
    });
};
```

기존 데이터를 저장하고 있는 `getData`에 `map`함수로 각 데이터의 `id`값과 통신하여 받아온 데이터의 `id`값을 비교하여 일치하는 데이터를 `return` 하여, 일치하는 객체형태의 데이터와 기존 받아온 데이터를 전개연산자를 활용하여 덮어씌워준다. 그리고 일치하지 않는 다른 `item`데이터 값들은 그대로 둔 후 `useState`로 담아주면 갱신된 데이터를 반영한 전체 데이터를 세팅할 수 있다.
