---
layout: post
title: "[JavaScript] 클로저"
date: 2022-09-01 12:00:59
modified: 2022-09-01 12:00:59
tag: [javascript]
---

중첩함수에서 내부함수가 외부함수의 환경을 기억하는것을 클로저라고 한다.

```javascript
function func() {
  let foo = "data";
  return function () {
    return foo;
  };
}
```

func라는 함수를 선언하고 foo변수에 'data'문자열을 추가한 뒤 foo변수를 리턴하는 익명함수를 선언하였다.

```javascript
let closure = func();
console.log(closure());
// 'data'
```

func함수의 리턴값을 closure변수에 할당한 뒤 closure를 실행한 값을 콘솔로 찍어보았다. 결과는 'data'라는 문자열이 출력되었다. func의 지역변수로 있는 foo는 func함수가 끝나면서 소멸되어야하지만 값을 잃지 않고 'data'값을 가지고 있다. 이 현상을 클로저라 한다. 다른 구문도 살펴보겠다.

```javascript
function count() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}

let closure = count();
console.log(closure());
console.log(closure());
console.log(closure());
// 1
// 2
// 3
```

count함수의 지역변수인 num값이 소멸되지 않고 계속 카운트되는 것을 확인해 볼 수 있다.

## 특징

### 변수의 은닉화

자바스크립트에서는 인스턴스를 생성할때 Private letiables에 대한 접근 권한 문제가 있다.

```javascript
function Create(name) {
  this._name = name;
}

let obj = new Create("민수");
console.log(obj._name);
// 민수
```

위에서 생성된 obj객체의 *name프로퍼티는 변수명 앞에 *를 포함하였기 때문에 Private letiables로 쓰고싶다는 의도를 알 수 있다. 하지만 \_name프로퍼티는 동적으로 변경될 수 있다.

```javascript
obj._name = "인성";
console.log(obj._name);
// 인성
```

이 경우 클로저를 사용하여 외부에서 내부변수에 접근하는것을 제한할 수 있다.

```javascript
function create(name) {
  let _name = name;
  return function () {
    console.log(_name);
  };
}

let hello = create("민수");
hello();
// 민수
```

여기서는 외부에서 \_name에 접근할 방법이 전혀 없다. 이렇게 클로저를 활용하여 은닉화를 해결할 수 있다.

### 고유한 환경

클로저는 고유한 환경을 가지고 있다.

```javascript
function func(name) {
  let txt = name;
  return function () {
    return txt;
  };
}

let closure01 = func("민수");
let closure02 = func("인성");
let closure03 = func("한나");

console.log(closure01()); // 민수
console.log(closure02()); // 인성
console.log(closure03()); // 한나
```

위의 구문을 보면 txt변수가 동적으로 변화하는 것처럼 보이지만, 실제로는 txt변수 자체가 여러번 생성된 것이다. 즉, closure01(), closure02(), closure03()은 서로 다른 환경을 가지고 있다. 서로 다른 환경을 가지고 있다는것은 그만큼 메모리면에서 큰 비효율을 낳는다.

```javascript
function Func(input) {
  this.name = input;
  this.get = function () {
    return this.name;
  };
  this.set = function (rename) {
    this.name = rename;
  };
}

let obj = new Func("민수");
console.log(obj.get());
```

위 코드는 생성자함수를 사용하여 인스턴스를 생성하는 구문인데, 클로저가 두번(get, set)이나 생성되었다. 이 상태에서 인스턴스를 계속 만들면 같은일을 하는 클로저가 중복으로 생성되고 메모리낭비가 심해질 것이다.  
따라서 클로저는 객체의 prototype안에 저장함으로써 같은 기능을 모든 인스턴스가 공유하는 형태로 코드를 만들어야한다.

```javascript
function Func(input) {
  this.name = input;
}
Func.prototype.get = function () {
  return this.name;
};
Func.prototype.set = function (rename) {
  this.name = rename;
};

let obj = new Func("민수");
console.log(obj.get());
```

이렇게 prototype안에 클로저를 넣으면, 인스턴스가 생성되더라도 중복으로 메모리를 낭비하지 않고, 생성자 내부의 prototype안의 클로저를 참조하기 때문에 메모리낭비를 방지할 수 있다.

## 정리

- 클로저는 독립적인(자유) 변수를 가리키는 함수 또는 클로저 안에 정의된 내부함수는 만들어진 환경을 기억한다.
- 클로저는 외부함수의 스코프 영역에 접근할 수 있고, 그것을 기억하고 있어야 한다.
- 외부함수가 종료된 후에도 내부함수는 외부함수를 계속 참조하고 있어야 한다.
- 데이터의 캡슐화 및 정보은닉에도 사용 가능하다.

## References
[JavaScript 클로저(Closure)](https://hyunseob.github.io/2016/08/30/javascript-closure/)
