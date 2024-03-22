---
layout: post
title: "[JavaScript] 전개연산자(Spread Operator)"
date: 2022-09-28 12:00:59
modified: 2022-09-28 12:00:59
tag: [javascript]
---

## 정의
ECMAScript6(2015)에서 새로 추가된 전개연산자(Spread Operator)란 객체나 배열의 값을 하나 하나 넘기는 용도로 사용할 수 있다. 전개연산자를 사용하는 방법은 점 세개(...)를 붙이면 된다.

## 직관적이고, 배열의 아무 곳에 추가 가능하다.

### ES5 배열 내용 조합

ES5 에서는 배열의 내용을 합쳐 새로운 배열을 만들기 위해서 concat 메서드를 활용한다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = arr1.concat(arr2, arr3);

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

arr1 배열에 concat 메서드를 사용하여, 배열 arr2와 arr3를 배열에 이어붙였다.

### ES6 배열 내용 조합

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = [...arr1, ...arr2, ...arr3];

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

전개연산자를 활용하여 새로운 배열을 만들었다. concat 메서드를 사용한 코드보다 간결하고, 가독성도 개선되었다.

```javaascript
const arr = [4, 5, 6];
const arrWrap = [1, 2, 3, ...arr, 7, 8, 9]

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

concat 메서드는 인자로 전달받은 값 순으로 기존 배열 끝에서부터 값을 추가하지만, 전개연산자는 위처럼 배열의 아무 곳에나 추가 할 수 있다.

## 전개연산자로 할당하면 2차원 형태가 되지 않는다.

배열의 경우
concat 메서드로 새로운 배열을 만들어내는 것이 아닌, 기존 배열 요소에 값을 추가한다면 push 메서드를 사용할 것이다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(arr2);

console.log(arr1); // [1, 2, 3, [4, 5]]
arr1 배열에 arr2 배열을 할당했지만 arr2 배열 전체가 들어가 2차원 배열이 되었다. 이 경우 기존 자바스크립트에서는 배열 객체의 프로토타입 매서드인 push.apply를 사용해야 한다.
```

```javacript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

원하는 결과를 얻었지만 코드가 복잡하다. 하지만 전개연산자를 활용하면 쉽게 구현이 가능하다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
arr1.push(...arr2);

console.log(arr1); // [1, 2, 3, 4, 5]
```

### 객체의 경우

객체의 경우도 같다.

```javascript
const obj1 = {
  a: 'A',
  b: 'B'
};
const obj2 = {
  c: 'C',
  d: 'D'
};
const objWrap = {obj1, obj2};
console.log(objWrap);
1
2
3
4
5
6
7
8
9
10
{
  obj1: {
    a: 'A',
    b: 'B'
  },
  obj2: {
    c: 'C',
    d: 'D'
  }
}
```

obj1 객체와 obj2 객체를 하나의 objWrap 객체로 묶으면 객체 각각의 값이 아닌, 객체 자체가 들어가 2차원 객체가 되었다.

```javascript
const obj1 = {
  a: 'A',
  b: 'B'
};
const obj2 = {
  c: 'C',
  d: 'D'
};
const objWrap = {...obj1, ...obj2};
console.log(objWrap);
1
2
3
4
5
6
{
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D'
}
```

전개연산자를 사용하면 객체 자체가 할당되는 것이 아닌, 각각의 값이 할당 된다.

## 전개연산자를 이용한 복사에는 1차원에서만 유효하다.

위에서 전개연산자로 할당하면 2차원 배열이 되지 않는다고 했다. 하지만 2차원 이상의 배열을 할당할 땐 1차원 요소만 같은 1차원 레벨로 할당이 되고 2차원 이상의 배열은 그대로 들어간다.

```javascript
const arr1 = [4, 5, [6, 7]];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2); // [1, 2, 3, 4, 5, [6, 7]]
```

기존 배열을 보존해야 할 때 유용하다.
ES5 배열 요소를 역순으로 변경
전개연산자는 원본 배열을 그대로 유지하면서 새로운 배열을 만든다. 예를 들어 reverse 메서드는 배열의 각 요소를 역순으로 바꾸는 메서드인데, 기존 배열도 바꿔버리는 단점이 있다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();

console.log(arr1); // [3, 2, 1]
console.log(arr2); // [3, 2, 1]
```

원본 배열을 수정할 의도가 있었으면 문제가 되지 않지만, 원본 배열은 그대로 두고 배열 요소의 순서를 뒤집은 새로운 배열이 필요하다면 상황이 복잡해진다. 이 상황에서 전개연산자를 사용하면 편리해진다.

### ES6 배열 요소를 역순으로 변경

```javacript
const arr1 = [1, 2, 3];
const arr2 = [...arr1].reverse();

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [3, 2, 1]
```

원본 배열은 그대로 유지하면서 새로운 배열을 만들었다.

## 배열의 나머지 요소를 할당할 수 있다.

비구조화 할당과 전개연산자를 사용하여 배열의 나머지 요소를 할당 받을 수 있다.

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

변수 first과 second의 각각의 인덱스 값에 맞는 값이 차례로 들어가고(1, 2), rest에는 할당 받지 못한 나머지 값들이 대입된다.

## References

[[JavaScript] 전개연산자 ( Spread Operator )](https://blog.naver.com/zoz0312/221622159150)  
[전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
