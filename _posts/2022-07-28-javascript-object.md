---
layout: post
title: "[JavaScript] 객체(Object)"
date: 2022-07-28 12:00:59
modified: 2022-07-28 12:00:59
tag: [javascript]
---

## 객체에 접근하여 property 추가하기

obejct에 접근하는 방법은 dot(.)과 bracket([])이 있다.

1. dot notation의 경우 키와 값은 항상 정해져 있다.
2. bracket의 경우 변수로 키와 값을 할당할 수 있다. 위의 경우 가지는 값에 따라 해당 변수에 유동적으로 다른 키와 다른 값으로 할당이 가능하다.

위의 1,2번의 방법으로 아래 변수 information 에 담긴 객체에 property를 추가헤보자.

```javascript
const information = {
  name: "apple",
};
```

key값으로는 변수 addName, value값으로는 변수 porject를 담고싶다면

```javascript
const addName = "developer";
const project = "instargram";
```

1. [] 사용

```javascript
information[addName] = project;
```

2. dot(.)사용

위와 같이 bracket을 사용할 경우 변수 선언으로 각 해당 값을 넣을 수 있지만,
dot으로 접근할 경우에는 고정된 값만 직접적으로 할당시킬 수 있다.

그렇다면, 객체의 각 property에 접근하는 방법은 무엇일까?

## 객체 순회하기

객체는 배열과는 달리 순서가 없고 영문일 경우 알파벳 순으로 나열 된다.
그렇다면 각 property에 접근하는 것은 불가능한 것일까?
객체의 내장함수를 활용하면 객체안의 각 property의 key값을 배열로 리턴할 수 있다!

### object.keys()

```javascript
const obj = {
  name: "melon",
  weight: 4350,
  price: 16500,
  isFresh: true,
};

Object.keys(obj); // ['name', 'weight', 'price', 'isFresh']
```

위와 같이 내장 함수를 활용하여 각 객체의 키값을 배열할 수 있다.
이를 활용하여 키값을 리턴하려면

```javascript
const obj = {
  name: "melon",
  weight: 4350,
  price: 16500,
  isFresh: true,
};

Object.keys(obj); // ['name', 'weight', 'price', 'isFresh']
```

그렇다면 키값만 리턴하는 내장함수도 있을까?

### object.values()

```javascript
const obj = {
  name: "melon",
  weight: 4350,
  price: 16500,
  isFresh: true,
};

Object.values(obj); // ['melon', 4350, 16500, true]
```

객체를 순회하는 두번째 방법으로는 for-in을 둘 수 있다.

### for-in

```javascript
const obj = {
  name: "melon",
  weight: 4350,
  price: 16500,
  isFresh: true,
};

for (let key in obj) {
  const value = obj[key];

  console.log(key);
  console.log(value);
}
```

for-in문의 경우 객체 순회 외에도, 배열 순회에도 유용하게 사용 가능하다.
