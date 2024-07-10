---
layout: post
title: "[React] String 문장 안에 변수명 넣고 연결, 출력하기"
date: 2023-11-20 12:00:59
modified: 2023-11-20 12:00:59
tag: [react, html, template]
---

간단한 문법이지만 모든 언어에서 사용하는 방법이 다르기 때문에 항상 헷갈린다.  
React에서 String 안에 변수명을 넣는 방법은 아래와 같다.

```javascript
    title={`메모 : ${user.memo}`}
```

중괄호로 감싸고, 작은 따옴표가 아닌 ` 을 사용해서 텍스트를 묶고 변수명을 ${}로 감싸주면 된다.
