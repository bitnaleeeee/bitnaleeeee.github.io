---
layout: post
title: "[React] 쿼리 스트링(Query String)"
date: 2023-11-29 19:10:59
modified: 2023-11-29 19:10:59
tag: [React, JavaScript, QueryString]
---

쿼리스트링은 `URL` 끝에 ?을 시작으로, 키=값 형태로 여러 쌍의 데이터를 전송하는 방법이다. 홈페이지의 상세페이지를 생각하면 쉬운데 이를 통해 웹 페이지에 요청한 데이터를 서버로 전송하거나 서버로부터 받은 데이터를 웹 페이지에 출력하는 등의 작업을 할 수 있다.

- 예시 형태 - https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox
  <br> ? 뒤의 tab이 `key` 값, = 뒤의 rm&ogbl#inbox 이 `value`값, 데이터 쌍 간에는 & 기호로 구분한다.

### 나의 프로젝트 활용 예시

```javascript
let locationUrl = window.location.href;
locationUrl = locationUrl + `?mbti=` + str;
const handleCopyClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);

    alert("링크가 복사되었습니다!");
  } catch (error) {
    alert("복사 실패!");
  }
};
```

1. `window.location.href`는 현재 `URL`을 가져와서 `locationUrl`변수에 담아준다.
2. `locationUrl`에 쿼리스트링 키=값 형태를 심어준다.
3. `navigator.clipboard.writeText(text)`로 URL + 쿼리스트링 을 복사한다.

```javascript
import { useSearchParams } from "react-router-dom";
const [searchParams, setSearchParams] = useSearchParams();
let queryValue = searchParams.get("mbti");

function dataMapArr(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let sameData = data[i].mbti;

    if (str === sameData) {
      valData = data[i];
    } else {
      if (queryValue === sameData) {
        valData = data[i];
      }
    }
  }
}
dataMapArr(data);
```

1. `useSearchParams`는 `React`에서 제공하는 `hook`으로 현재 `URL`주소를 가져온다
2. `searchParams.get()`안에 가져오고 싶은 `value`의 `key`를 넣어주면 해당 값을 가져올 수 있다.
3. `queryValue`과 받아온 데이터의 이름이 일치할때, 해당 데이터를 보여주도록 작성한다.

쿼리스트링을 사용하여 key=value를 넣어주면, 해당 url로 들어갔을때 특정한 데이터를 보이게 작성할 수 있고 링크를 보냈을때 방문자가 데이터를 로컬스토리지에 저장하고 있지 않더라도 쿼리스트링으로 일치하는 데이터를 가져오도록 화면을 구성할 수 있다.
