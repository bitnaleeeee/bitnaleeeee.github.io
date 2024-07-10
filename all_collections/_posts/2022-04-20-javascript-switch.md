---
layout: post
title: "[JavaScript] 자바스크립트 switch 조건문"
date: 2022-04-20 14:30:59
modified: 2022-04-20 14:30:59
tag: [javascript]
---

`switch`키워드 오른쪽 `()`안의 값과 `case`키워드 오른쪽의 값을 비교하여 `true`일시 콜론 오른쪽 구문을 실행하게 된다.

```javascript
let a = 0;
switch (1) {
    case 1: console.log('ok');
    break;
    case 2: console.log('no');
    break;
}
// ok
```

조건을 만족시 구문을 실행하고, `break`키워드를 만나면 로직을 빠져나가게 된다. `break`키워드가 없을 경우 로직을 벗어나지 않고 계속 아래 조건을 읽어내려간다.

```javascript
switch (1) {
    case 1: console.log('ok');
    case 1: console.log('no');
}
// ok
// no
```