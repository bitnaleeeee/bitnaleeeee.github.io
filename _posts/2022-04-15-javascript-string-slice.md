---
layout: post
title: "[JavaScript] 문자열 자르기"
date: 2022-04-15 12:30:59
modified: 2022-04-15 12:30:59
tag: [javascript]
---

문자열 자르는 자바스크립트 메소드 정의

## split()

특정 문자열을 기준으로 잘라 배열로 반환한다.

```javascript
let str = '가, 나, 다, 라, 마';
console.log(str.split(','));
// (5) ["가", " 나", " 다", " 라", " 마"]
```

## substring(시작인덱스, 종료인덱스)

시작인덱스를 기준으로 종료인덱스 까지 자른다.

```javascript
let str = '가나다라마';
console.log(str.substring(1, 4));
// 나다라
```

## substr(시작인덱스, 길이)

시작인덱스를 기준으로 문자열 길이로 자른다.

```javascript
let str = '가나다라마';
console.log(str.substr(2, 2));
// 다라
```

