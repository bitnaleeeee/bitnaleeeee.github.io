---
layout: post
title: "[JavaScript] while 반복문"
date: 2022-04-21 12:34:59
modified: 2022-04-21 12:34:59
tag: [javascript]
---

`while`문은 조건을 검사하여 `true`일경우 계속 구문을 실행시키는 반복문이다.

```javascript
while (조건) {
    구문
}
```

```javascript
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
// 0
// 1
// 2
```

`do-while`은 `whild`문과 비슷하지만 처음은 조건과 상관없이 구문을 실행하고 이후에 조건을 검사하여 `true`일때 구문을 실행한다.

```javascript
do {
    구문
} while (조건);
```

처음 구문을 실행하여 `0`이 출력되고, `i`는 3이 아니므로 로직이 실행이 안된다.
```javascript
let i = 0;
do {
    console.log(i);
} while (i == 3);
// 0
```
