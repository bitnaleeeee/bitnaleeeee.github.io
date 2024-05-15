---
layout: post
title: "[JavaScript] 변수 선언과 호이스팅(Hoisting)"
date: 2022-05-13 19:10:59
modified: 2022-05-13 19:10:59
tag: [javascript]
---

# 변수 선언과 Hoisting

## 변수 선언의 세가지 키워드와 차이

### 1. 재선언, 재할당

변수를 선언할 때는 `var`, `let`, `const` 키워드를 사용한다.
`var` 는 자바스크립트의 초창기 문법이고 ES6에서 `let`과 `const`가 추가 되었다. `var`의 경우 재선언, 재할당을 할 수 있으며 `let`은 재할당은 가능하나, 재선언은 불가능하다. `const`는 재선언, 재할당이 모두 불가능하다. 상수의 경우는 `const`로 선언한다.

> let : 재선언 O 재할당 O
> <br>
> let : 재선언 X 재할당 O
> <br>
> const : 재선언 X 재할당 X

### 2. block level scope vs funciotn level scope

`let`과 `const`는 `var`의 취약점을 보완하기 위해 등장했다. `var`의 경우 함수의 코드 `block`만을 `local scope`로 인정한다. 따라서 함수 외부의 `var`키워드로 선언한 변수는 어떠한 `block`내에서 선언해도 모두 전역번수가 된다.
이로인해 의도치 않게 전역 변수가 중복 선언되는 경우가 발생한다. 하지만 `let`의 경우 재선언이 불가능하므로 같은 변수를 중복 선언하면 문법 에러가 뜬다. 또한 `let` 키워드로 선언한 변수는 모든 코드의 `block`을 `local scope`로 인정한다. 즉 `block` 밖에서 접근이 불가능하다. `const`는 `let`과 대부분 동일하나 재할당이 불가하여 상수를 선언하기에 적합하다.
`var`는 이렇듯 함수 외부의 `block` 에서 선언된 모든 변수를 전역 변수로 인정하고 재언선이 가능하여 변수명 중복 등 개발자 입장에서 error prone해 질 수 있다는 단점이 있다.

## Hoisitng

hoisitng은 함수 선언식과 변수선언이 최상단에 끌어올려지는 것을 말한다. hoisitng는 JS 동작 그 자체이며 런타임이 실행되기 전, 자바스크립트 엔진은 변수 선언을 최상단으로 끌어올려 먼저 읽는데 이를 호이스팅 이라고 한다.

### 1. var의 호이스팅

`var` 키워드로 변수 선언시 초기화가 암묵적으로 한번에 진행되고, 선언만 최상단으로 끌어올려진다. 즉 초기화된 값 `undefined`가 출력되며 값의 할당은 순차적으로 런타임에 실행된다.

### 2. let, const 의 호이스팅

`let`의 경우 초기화 단계가 변수 선언문에 도달했을때 진행된다. 따라서, 초기화 단계가 실행되기 전에 값에 접근하면 ReferenceError(참조 에러)가 출력된다. 이렇게 초기화 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대(TDZ)라고 한다

## TDZ (Temporal Death Zone)

임시적으로 죽어있는 공간. 선언 전에 변수를 사용하는 것을 비허용하는 이 개념상의 공간에 `const`와 `let`이 들어간다. 여기서 변수 선언과 할당 초기화 개념의 차이점에 대해 알 필요가 있는데, hoisitng이 되는 것은 변수의 선언만이다. var를 포함한 let, const 모든 선언은 hoisting이 일어난다. 즉 할당전에 console로 출력을 하게 되면 `let`과 `const`는 ReferenceError가 나온다. 이는 const와 let 선언이 hoisitng 되어 TDZ에 들어갔음을 의미한다.

- `var`, `let`, `const` 의 선언은 모두 hoisitng 된다. `var`의 경우 선언과 동시에 초기화가 진행되기 때문에 TDZ에 들어가지 않고 선언 부분만 끌어올려져 때문에(hoisting) 할당되기 전까지 `undefiend`가 출력된다. 하지만, `let`, `const`의 경우 초기화는 변수에 값을 할당할때에 발생하기 때문에 `hoisting` 되었을때 값을 참조하면 ReferenceError가 출력된다. 즉, 일시적으로 죽어있는 공간(TDZ)에 들어가있기에 할당 전에 접근하려고 할 경우 ReferenceError 로 해당 변수에 참조할 수 없다는 에러가 출력된다.
