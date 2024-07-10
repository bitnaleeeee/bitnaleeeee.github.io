---
layout: post
title: "[SASS] 연산(Operations)"
date: 2022-08-10 15:11:16
modified: 2022-08-10 15:11:16
tag: [sass, css]
---

SASS는 기본적인 연산 기능을 지원한다. 레이아웃 작업시 상황에 맞게 크기를 계산하거나 정해진 값을 나눠서 작성할 경우 유용하다. 아래는 SASS에서 사용 가능한 연산자 종류이다.

## 산술 연산자

| 종류 | 설명 | 주의사항 |
|:--------:|:--------:|:--------|
| + | 더하기 |  |
| - | 빼기 |  |
| * | 곱하기 | 하나 이상의 값이 반드시 숫자(Number) |
| / | 나누기 | 오른쪽 값이 반드시 숫자(Number) |
| % | 나머지 |  |

## 비교 연산자

| 종류 | 설명 |
|:--------:|:--------|
| == | 동등 |
| != | 부등 |
| < | 대소 / 보다 작은 |
| > | 대소 / 보다 큰 |
| <= | 대소 및 동등 / 보다 작거나 같은 |
| >= | 대소 및 동등 / 보다 크거나 같은 |

## 논리 연산자

| 종류 | 설명 |
|:--------:|:--------|
| and | 그리고 |
| or | 또는 |
| not | 부정(반대) |

## 숫자

일반적으로 절대값을 나타내는 px단위로 연산을 하지만, 상대적 단위(%, em, vw 등)의 연산의 경우 `calc()`로 연산 해야 한다.

```scss
width: 50% - 20px;  // 단위 모순 에러(Incompatible units error)
width: calc(50% - 20px);  // 연산 가능
```

> **나누기 연산의 주의사항**
> CSS는 속성 값의 숫자를 분리하는 방법으로 `/`를 허용하기 때문에 `/`가 나누기 연산으로 사용되지 않을 수 있다. 아래 예제를 보면 나누기 연산자만 연산 되지 않고 그대로 컴파일된다.

**SCSS**
```scss
div {
    width: 20px + 20px;  // 더하기
    height: 40px - 10px;  // 빼기
    font-size: 10px * 2;  // 곱하기
    margin: 30px / 2;  // 나누기
}
```

**Compiled to**
```scss
div {
  width: 40px;
  height: 30px;
  font-size: 20px;
  margin: 30px/2; // Error
}
```

따라서 `/`를 나누기 연산 기능으로 사용하려면 다음과 같은 조건을 충족해야 한다.

* 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
* 값이 `()`로 묶여있는 경우
* 값이 다른 산술 표현식의 일부로 사용되는 경우

**SCSS**
```scss
div {
    $x: 100px;
    width: $x / 2; // 변수에 저장된 값을 나누기
    height: (100px / 2); // 괄호로 묶여있는 경우
    font-size: 10px + 12px / 3; // 더하기 연산자와 같이 사용
}
```

**Compiled to**
```scss
div {
  width: 50px;
  height: 50px;
  font-size: 14px;
}
```

## 문자

문자 연산에는 `+`가 사용된다. 문자 연산의 결과는 첫번째 피연산자를 기준으로 한다. 첫번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶는다. 반대로 첫번째 피연산자에 따옴표가 붙어있지 않으면 연산 결과도 따옴표를 처리하지 않는다.

**SCSS**
```scss
div::after {
    content: "hello" + world;
}
div::after {
    content: hello + "world";
}
```

**Compiled to**
```scss
div::after {
  content: "helloworld";
}

div::after {
  content: helloworld;
}
```

## 색상

색상도 연산이 가능하다.

## 논리

SASS의 `@if`조건문에서 사용되는 논리 연삭에는 `그리고`, `또는`, `부정`이 있다. 자바스크립트의 `&&`, `||`, `!`와 같은 기능이라 보면 된다.

**SCSS**
```scss
$width: 90px;
div {
  @if not ($width > 100px) {
    height: 300px;
  }
}
```

**Compiled to**
```scss
div {
  height: 300px;
}
```

## References
[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)  
[Sass 기초와 활용](http://hwangsunsoo.org/lecture/src/sass_article_seminar_2017_2nd_half.html)  
[[사스(Sass)] 2. Sass 사용법](https://recoveryman.tistory.com/277)  
[CSS 전처리기](https://developer.mozilla.org/ko/docs/Glossary/CSS_preprocessor)  
[Sass는 SCSS로 쓰세요](https://designmeme.github.io/ko/blog/write-sass-with-scss/)  
[[사스(Sass)] Sass 기본 사용법 (컴파일 및 명령어)](https://i-fiction.tistory.com/9)
