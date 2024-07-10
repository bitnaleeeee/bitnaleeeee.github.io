---
layout: post
title: "[React] FontAwesome"
date: 2023-1-25 18:00:59
modified: 2023-1-25 18:00:59
tag: [React]
---

`React`로 클론코딩을 할때 아이콘의 경우는 `Font Awesome`을 자주 사용하였는데 이번 기회에 간략하게 사용법에 대해 정리해본다.

## `Font Awesome` 설치

`Font Awesome`은 웹에서 아이콘이 필요할 때 가장 많이 사용되는 라이브러리 중 하나로 사용 전 아래와 같이 설치가 필요하다.

1. 기본 패키지 설치

```javascript
$ npm i @fortawesome/fontawesome-svg-core
```

2. 무료로 제공되는 Solid, Regular, Brands 3가지 아이콘 패키지 설치

```javascript
$ npm i @fortawesome/free-solid-svg-icons
$ npm i @fortawesome/free-regular-svg-icons
$ npm i @fortawesome/free-brands-svg-icons
```

3. 리액트로 `import` 해올 수 있도록 설치

```javascript
$ npm i @fortawesome/react-fontawesome
```

설치가 완료되었다면 사용하고자 하는 컴포넌트의 상단에 `import`를 시켜주면 된다.

```javascript
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
```

그리고 Font Awesome 홈페이지에 들어가 무료로 제공하는 아이콘들 중 원하는 아이콘을 선택한 후 `React`부분을 선택하게 되면 자동으로 복사가 된다.

```javascript
<FontAwesomeIcon icon="fa-regular fa-check" /> //예시
```

복사된 위 형식의 fa-check 부분에서 "-"를 제거하고 뒷문자를 대문자로 치환하여 아래와 같이 `import` 시키면 된다.

```javascript
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
```

이렇게 불러온 아이콘을 컴포넌트에 넣을때는

```javascript
//JSX
<FontAwesomeIcon className="iconStye" icon={faCheck} />
```

위와 같이 넣어주면 원하는 아이콘이 구현 화면에서 나타난다.
