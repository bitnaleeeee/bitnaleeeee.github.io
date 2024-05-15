---
layout: post
title: "[JavaScript]배열은 객체다"
date: 2024-01-31 12:10:59
modified: 2024-01-31 12:10:59
tag: [JavaScript, Array, Object]
---

배열이란 여러 개의 값을 순차적으로 나열한 가장 기본적인 자료구조이다.
사용빈도가 매우 높기에 자바스크립트는 배열을 다루기 위한 다양한 메서드를 제공하고 있다.

정확하게 말하면 자바스크립트에 배열이라는 타입은 존재하지 않으며 배열은 `length` 와 `index`의 프로퍼티를 가진 객체 타입이다.
일반 객체와 다른 점은 배열은 값의 순서, 즉 `index`와 `length` 프로퍼티를 가진다는 점이고 이로 인해 배열은 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조이다.
따라서 배열 빌트인 메소들을 활용할 수 있다면 코딩에 매우 도움이 된다고 할 수 있다.

아래 자주사용하는 배열 메서드를 정리하였다. 주의할 점은 원본배열을 직접 변경하는 경우 변수에는 변경된 프로퍼티 값이 저장되고 원본 배열에는 최종 수정된 값이 저장되며,
원본 배열을 변경하지 않고 새로운 배열을 반환하는 경우 반드시 반환값을 변수에 할당받아야 한다는 점이다.

### 배열 메서드

#### 원본 배열을 직접 변경하는 메서드

원본 배열의 처음이나 마지막에 요소를 추가하거나 제거

1. `Array.prototype.push` `push` 메서드는 인수로 전달받은 모든 값을 원본 배열의 마지막 요소에 추가하고 변경된 프로퍼티 값을 반환한다.

```javascript
let arr = [1, 2, 3];

let result = arr.push(4);

console.log(result); // 4
console.log(arr); // 1,2,3,4
```

2. `Array.prototype.pop` : `pop` 메서드는 원본 배열의 마지막 요소를 제거하고 제거한 요소를 반환한다.

```javascript
let arr = [1, 2, 3];

let result = arr.pop();

console.log(result); // 3
console.log(arr); ///1,2
```

3.`Array.prototype.unshift`: `unshift` 메서드는 원본 배열의 0 인덱스에 인수로 전달받은 값을 추가하고 값을 반환한다

```javascript
let arr = [1, 2, 3];

let result = arr.unshift(0);

console.log(result); // 0
console.log(arr); //0,1,2,3
```

4.`Array.prototype.shift`: `shift` 메서드는 원본 배열 0 인덱스의 프로퍼티 값을 제거하고 제거한 값을 반환한다

```javascript
let arr = [1, 2, 3];

let result = arr.shift();

console.log(result); //1
console.log(arr); //2,3
```

5. `Array.prototype.splice` `splice` 메서드는 배열의 중간에 요소를 추가하거나 제거하는 경우 사용한다. 3개의 매개변수를 받아 원본 배열을 직접 변경한다.

- start: 원본 배열 요소를 제거하기 시작할 인덱스
- deleteCount: 제거할 요소의 개수
- items: 제거한 위치에 추가할 요소

```javascript
let arr = [1, 2, 3];

let result = arr.splice(2, 1, 4, 5);

console.log(result); // [3] 제거한 요소가 배열로 반환된다.
console.log(arr); // [0,1,2,3]
```

6. `Array.prototype.join` `join` 메서드는 원본 배열의 모든 요소를 문자열(`String`)로 반환한다.

```javascript
let arr = [1, 2, 3];

arr.join(); // '1,2,3,4'
arr.join(""); // '1234'
arr.join(":"); // '1:2:3:4'
```

7. `Array.prototype.reverse` `reverse` 메서드는 원본 배열의 순서를 뒤집는다.

```javascript
let arr = [1, 2, 3];

arr.reverse(); // [3,2,1]
```

#### 원본 배열을 변경하지 않고 새로운 배열을 반환하는 메서드

1. `Array.prototype.concat` : `concat` 메서드는 인수로 전달 된 값을 원본 배열 마지막 요소로 추가한 새로운 배열을 반환한다. 만약 전달된 값이 배열일 경우 배열을 해체하여 새로운 배열에 프로퍼티를 담아 반환한다.

```javascript
let arr = [1, 2, 3];

let result = arr.concat(4);

console.log(result); // [1,2,3,4]
console.log(arr); // [1,2,3]

let arr2 = [4];

let answer = arr.concat(arr2);

console.log(answer); // 1,2,3,4

console.log(arr); // 1,2,3
console.log(arr2); //4
```

2.`Array.prototype.slice`:`slice` 메서드는 인수로 전달된 범위의 요소를 복사하여 배열로 반환한다. 원본 배열은 변경되지 않는다.

- start: 복사를 시작할 인덱스이다
- end: 복사를 종료할 인덱스이며, 해당 end 숫자의 인덱스는 복사되지 않는다. 직전 인덱스까지 복사된다는 점에 유의해야 한다.

```javascript
let arr = [1, 2, 3];

arr.slice(0, 1); // 1,2

console.log(arr); // 1,2,3
```

#### 새로 추가된 메서드

1.`Array.prototype.includes`: `includes`메서드는 `ES7`에서 새로 도입된 배열 내에 특정 요소가 포함되어 있는지 확인하여 `boolean`값을 리턴해주는 메서드이다. 첫번째 인수로 검색할 대상을 지정하고 두번째 인수로 검색을 시작할 인덱스를 전달할 수 있다. 두번째 인덱스를 생략할 경우 기본값은 0으로 처음부터 검색한다.

```javascript
let arr = [1, 2, 3];

arr.includes(5); //false
arr.includes(1); //true
```

이외에도 배열의 다양한 빌트인 메서드를 알고 능숙하게 활용하는 것이 코드 작성에 도움이 되므로 지속적으로 추가 업데이트 할 예정이다.
