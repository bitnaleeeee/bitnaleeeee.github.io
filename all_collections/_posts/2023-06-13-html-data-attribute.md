---
layout: post
title: "[HTML] 데이터 속성(Data Attribute)"
date: 2023-06-13 10:00:59
modified: 2023-06-13 10:00:59
tag: [html, javascript, data attribute]
---

**Data 속성**  
HTML5 이후부터 데이터 속성이라는 개념이 추가가 되었다. 데이터 속성은 'data-`로 시작하며 특정한 데이터를 DOM에 저장해 둘 수 있다. 또한 브라우저는 이러한 데이터 속성에는 관연하지 않아 개발자가 요소에 특정한 데이터를 저장하고 싶은 경우 자유롭게 사용 가능하다.

```javascript
<input data-testid="email-input" />
<input data-testid="password-input" />
<button data-testid="signup-button">회원가입</button>
```

데이터 속성을 사용함으로써 이전과 같이 태그를 숨겨두고 데이터를 저장할 필요가 없기 때문에 HTML 스크립트가 훨씬 간결해진다는 이점이 있다.
또한 어느 요소에나 data-로 시작하는 속성은 무엇이든 사용 가능하다. 개발자가 필요에 따라 추가 정보를 담아놓을 수도 있다.

## JavaScript로 접근하기

자바스크립트에서 이 속성 값들을 읽는 방법은 getAttribute()를 사용하면된다.

## 주의점

HTMl에 데이터를 넣는 것은 외부 공격에 취약하다는 단점이 있기 때문에 민감하고 중요한 데이터는 넣지 않도록 사용에 주의해야 한다.
