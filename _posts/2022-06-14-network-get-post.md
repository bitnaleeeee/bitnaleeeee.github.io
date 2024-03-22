---
layout: post
title: "[JavaScript]자바스크립트 GET과 POST 차이"
date: 2022-06-14 16:10:00
modified: 2022-06-14 16:10:00
tag: [network]
---

## HTTP

- 웹상에서 클라이언트와 서버 간에 데이터를 주고 받을 수 있는 프로토콜
- HTTP 메서드에는 2가지 방식이 있는데, 그것이 GET 방식과 POST 방식

## GET

URL에 파라미터를 포함시켜 요청하는 방식이다. 예를들어 `https://recordboy.github.io/login?id=user&pw=1234` 라는 페이지가 있다고 치자, `?` 마크를 통해 URL의 끝을 알리고, `id`라는 키(key)에 대해선 `user`라는 값(value)를, `pw`라는 키(key)에 대해서는 `1234`라는 값(value)을 전송한 것을 볼 수 있다. 여러개의 키와 값을 보낼 때는 `&`를 사용하여 이어준다. 이처럼 데이터가 노출되기 때문에 보안에 취약하며, 개인정보가 포함되지 않는 상황에서 캐싱을 하여 페이지 로딩 속도를 높일 때 사용된다.

### 특징

- URL에 파라미터를 포함시켜 요청한다.
- 데이터를 Header(헤더)에 포함하여 전송한다.
- URL에 파라미터가 노출되어 보안에 취약하다.
- 캐싱할 수 있다.
- GET 방식은 글자수 제한이 있지만, 256자 라는 말은 사실이 아니다.
  > 익스 9의 경우 2083자/최대 5120자를 지원  
  > 사파리는 40만자를 넘기면 브라우저가 크러쉬  
  > 파이어폭스/오페라는 길이 제한이 없고 50만자를 넘겨도 별다른 이상 없음  
  > 크롬의 경우 4만자를 기준

## POST

POST는 제출하다라는 뜻으로 BODY에 데이터를 넣어 전송하며 길이의 제한이 없다. 따라서 GET과 다르게 대용량 데이터를 전송할 수 있으며, BODY에 전송되어 내용이 눈에 보이지 않아 보안적으로 안전하다고 할 수 있다. 하지만 POST요청도 크롬 개발자 도구같은 툴로 요청내용을 확인할 수 있기 때문에 민감한 데이터는 반드시 암호화 하여 전달해야 한다.
그리고 POST로 요청을 보낼 때는 요청 헤더의 `Content-Type`에 요청 데이터의 타입을 명시해야 한다. 종류는 여러가지가 있지만 몇가지 나열해보면

- `application/x-www-form-urlencoded`
  - GET방식과 마찬가지로 BODY에 `key`와 `value`쌍으로 데이터를 넣는다. 똑같이 구분자 &를 쓴다.
- `text/plain`
  - BODY에 단순 텍스트를 넣는다.
- `multipart/form-data`
  - 파일전송을 할때 많이 쓰는데 BODY의 데이터를 바이너리 데이터로 넣는다는걸 알려준다.

### 특징

- BODY에 데이터를 넣어 전송하며 길이의 제한이 없어 대용량 데이터를 전송할 수 있다.
- BODY에 데이터가 들어가기 때문에 GET보다는 보안상 유리하지만 민감한 데이터는 꼭 암호화를 해줘야 한다.
- 요청 헤더의 `Content-Type`에 요청 데이터의 타입을 명시해야 한다.

## References

[GET과 POST의 차이](https://hongsii.github.io/2017/08/02/what-is-the-difference-get-and-post)  
[[Web] GET과 POST의 비교 및 차이](https://mangkyu.tistory.com/17)  
[get 방식의 글자 256자 제한은 잘못된 상식](https://uiandwe.tistory.com/1133)  
[GET방식 과 POST방식](https://mommoo.tistory.com/60)
