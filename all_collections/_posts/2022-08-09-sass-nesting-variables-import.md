---
layout: post
title: "[SASS] 중첩(Nesting), 변수(letiables), 가져오기(Import)"
date: 2022-08-09 15:08:04
modified: 2022-08-09 15:08:04
tag: [sass, css]
---

## 중첩(Nesting)
SASS는 중첩기능을 사용할 수 있다. 상위 선택자의 반복을 피할수 있어 좀 더 편리하게 복잡한 구조를 작성할 수 있다.

**SCSS**
```scss
.wrap {
    width: 100%;
    .list {
        padding: 20px;
        li {
            color: red;
        }
    }
}
```

**Compiled to**
```scss
.wrap {
  width: 100%;
}
.wrap .list {
  padding: 20px;
}
.wrap .list li {
  color: red;
}
```

## 상위 선책자 참조
중첩 안에서 `&`키워드는 상위(부모) 선택자를 참조한다.

**SCSS**
```scss
.wrap {
    width: 100%;
    &.active {
        color: red;
    }
}
```

**Compiled to**
```scss
.wrap {
  width: 100%;
}
.wrap.active {
  color: red;
}
```

`&` 키워드는 상위 선택자를 참조했기 때문에 아래와 같이 응용이 가능하다.

**SCSS**
```scss
.wrap {
    width: 100%;
    &-small { font-size: 12px; }
    &-medium { font-size: 14px; }
    &-large { font-size: 16px; }
}
```

**Compiled to**
```scss
.wrap {
  width: 100%;
}
.wrap-small {
  font-size: 12px;
}
.wrap-medium {
  font-size: 14px;
}
.wrap-large {
  font-size: 16px;
}
```

## 중첩 벗어나기
중첩에서 벗어나고 싶을 때 `@at-root`키워드를 사용한다. 중첩 안에서 생성하되 중첩 밖에서 사용해야 하는 경우에 유용하다.

**SCSS**
```scss
.list {
    width: 100px;
    li {
        width: 50px;
        @at-root .box {
            width: 10px;
        }
    }
}
```

**Compiled to**
```scss
.list {
  width: 100px;
}
.list li {
  width: 50px;
}
.box {
  width: 10px;
}
```

## 중첩된 속성
`font-`, `margin-` 등과 같이 동일한 네임 스페이스를 가지는 속성들은 아래와 같이 사용할 수 있다.

**SCSS**
```scss
.wrap {
    font: {
        weight: bold;
        size: 12px;
        family: sans-serif;
    };
    margin: {
        top: 10px;
        left: 20px;
    };
    padding: {
        bottom: 20px;
        right: 10px;
    }
}
```

**Compiled to**
```scss
.wrap {
  font-weight: bold;
  font-size: 12px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
}
```

## 변수(letiables)
반복적으로 사용되는 값을 변수로 지정할 수 있다. 변수 이름 앞에는 항상 `$`를 붙인다.

```
$변수이름: 속성값;
```

**SCSS**
```scss
$color-code: #000;
$url: "/common/images/";
$w: 200px;

.wrap {
    color: $color-code;
    background-image: $url;
    width: $w;
}
```

**Compiled to**
```scss
.wrap {
  color: #000;
  background-image: "/common/images/";
  width: 200px;
}
```

## 변수의 유효범위
변수는 사용 가능한 유효범위가 있다. 선언된 블록({}) 내에서만 유효범위를 가진다.

**SCSS**
```scss
.wrap {
    $w: 100px;
    .box {
        width: $w;
    }
}

// Error
.box2 {
    width: $w;
}
```

변수 `$w`는 `.wrap`의 블록 안에서 설정되었기 때문에, 블록 밖의 `.box2`에서 사용할 수 없다.

## 변수 재 할당
아래처럼 변수에 변수를 할당할 수 있다.

**SCSS**
```scss
$red: #FF0000;
$color-code: $red;

.box {
    color: $color-code;
}
```

**Compiled to**
```scss
.box {
  color: #FF0000;
}
```

## 전역 설정
`!global` 플래그를 사용하면 변수의 유효범위를 전역(Global)로 설정할 수 있다. 대신 기존에 사용하던 같은 이름의 변수가 있을 경우 값이 덮어져 사용된다.

**SCSS**
```scss
.box {
    $w: 100px !global;
    width: $w;
}
.box2 {
    width: $w;
    $w: 200px !global;
}
.box3 {
    width: $w;
}
```

**Compiled to**
```scss
.box {
  width: 100px;
}

.box2 {
  width: 100px;
}

.box3 {
  width: 200px;
}
```

## 초기값 설정
`!default` 플래그는 할당되지 않은 변수의 초깃값을 설정한다. 즉, 할당되어있는 변수가 있다면 변수가 기존 할당 값을 사용한다.

**SCSS**
```scss
$w: 100px;

.box {
    $w: 200px !default;
    width: $w;
}
```

**Compiled to**
```scss
.box {
  width: 100px;
}
```

변수와 값을 설정하겠지만, 혹시 기존 변수가 있을 경우 현재 설정하는 값은 사용하지 않겠다는 의미로 쓸 수 있다.

## 문자 보간
`#{}`를 이용하여 코드의 어디든지 변수 값을 넣을 수 있다.

**SCSS**
```scss
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```

**Compiled to**
```scss
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

## 가져오기(Import)
CSS에는 현재 파일에 다른 CSS를 불러오는 `@import`라는 속성이 있다. 이 속성을 사용하면 의도에 따라 코드를 잘게 쪼개어 효율적으로 유지 보수할 수 있지만, `@import`로 선언되어 있는 CSS마다 http 요청을 발생하므로 웹페이지 성능 저하의 원인이 된다 하여 사용을 지양하고 있다. SASS에서도 다른 파일을 불러올 수 있는 `@import`가 있다. CSS의 `@import`와 다른 점은 여러개의 SASS파일은 `@import`해도 최종적으로 하나의 CSS로 컴파일해주기 때문에 성능에 영향을 주지 않고 코드를 여러 파일로 나누어 관리할 수 있다. 물론 `@import`된 파일에서 정의된 내용은 부모 SASS 파일에서도 사용할 수 있다.

```scss
// 작성 방법 : @import "파일명.scss" 또는 @import "파일명";
@import "reset";
@import "reset.scss";
```

참고로 `.scss`파일을 `@import`할 경우, `.scss` 확장자를 써주지 않아도 된다.

## Partials
만약 `.scss`파일 앞에 언더바(_)로 시작하면 CSS파일로 따로 컴파일 되지 않는다. html에서 해당 CSS파일을 불러올일이 없고, `@import`만 필요한 경우에는 이 기능을 사용하면 된다.

## References
[Sass(SCSS) 완전 정복!](https://heropy.blog/2018/01/31/sass/)  
[Sass 기초와 활용](http://hwangsunsoo.org/lecture/src/sass_article_seminar_2017_2nd_half.html)  
[[사스(Sass)] 2. Sass 사용법](https://recoveryman.tistory.com/277)  
[CSS 전처리기](https://developer.mozilla.org/ko/docs/Glossary/CSS_preprocessor)  
[Sass는 SCSS로 쓰세요](https://designmeme.github.io/ko/blog/write-sass-with-scss/)  
[[사스(Sass)] Sass 기본 사용법 (컴파일 및 명령어)](https://i-fiction.tistory.com/9)
