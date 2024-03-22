---
layout: post
title: "[JavaScript] 비구조화 할당(Destructuring Assignment)"
date: 2022-08-04 20:51:12
modified: 2022-08-04 20:51:12
tag: [javascript, es6]
---

## 정의
ECMAScript6(2015)에서 새로 추가된 비구조화 할당(Destructuring Assignment)이란 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식(expression)이다.

## 기본 문법(배열)
```javascript
const animalList = ["CAT", "DOG", "TIGER"];
const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

animalList는 "CAT", "DOG", "TIGER" 값을 가지고 있는 배열이다. 이 배열의 값을 각각 변수에 할당 하려면 위처럼 각각 하나씩 지정해 줘야 한다. 번거로운 작업이며, 코드도 복잡해보이는 단점이 있다.

```javascript
const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

비구조화 할당을 이용하면 위처럼 간단하게 작성할 수 있다. 좌항이 호출될 변수명 집합, 우항이 할당할 값이다. 좌항의 각 요소에는 같은 index를 가지는 배열값이 할당된다.

### 나머지 패턴
```javascript
const [cat, ...rest] = ["CAT", "DOG", "TIGER"];
console.log(cat); // CAT
console.log(rest); // ["DOG", "TIGER"]
```

전개연산자(`...`)를 활용하면 좌항에서 명시적으로 할당되지 않는 나머지 배열 값을 사용할 수 있다.

## 기본 문법(객체) 
```javascript
const animals = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
};
const cat = animals.cat;
const dog = animals.dog;
const tiger = animals.tiger;
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```
 
객체도 배열과 마찬가지로 일일히 값을 따로 넣어주려면 번거롭다.

```javascript
const { cat, dog, tiger } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
};
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

위와 같이 작성하면 비구조화 할당을 수행하며, 배열의 경우 좌항의 index값에 값에 할당되었다면, 객체는 같은 key에 있는 값이 담긴다.

### 나머지 패턴
```javascript
const { cat, ...rest } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER"
}
console.log(cat); // CAT
console.log(rest); // {dog: "DOG", tiger: "TIGER"}
```

배열과 마찬가지로 객체도 나머지 패턴이 있다.

### 원래의 key 대신 다른 변수명 사용
```javascript
const { cat: catName, dog: dogName, ...rest } = {
  cat: "CAT",
  dog: "DOG",
  tiger: "TIGER",
  monkey: "MONKEY"
}
console.log(catName); // CAT
console.log(dogName); // DOG
console.log(rest); // {tiger: "TIGER", monkey: "MONKEY"}
```

좌항의 변수에 다른이름으로 사용할 변수명을 대입하면 되며, 나머지 값을 뜻하하는 전개연산자는 우항의 key에 영향을 받지 않으므로 `...rest: restName`이라는 표현식은 무의미 하며, 에러가 난다.


### 우항의 key 값이 변수명으로 사용 불가 경우
```javascript
const { 'cat-name', 'dog name' } = {
  'cat-name': "CAT",
  'dog name': "DOG"
}
// error
```

좌항으로 전달 받는 key 값이 `'cat-name'`같이 사용 불가능한 문자열이 있는 경우 에러를 호출한다. 이럴 경우는 아래와 같은 방식으로 비구조화 할 수 있다.

```javascript
const key = 'dog name';
const { 'cat-name': cat_name, [key]: dog_name } = {
  'cat-name': "CAT",
  'dog name': "DOG"
}
console.log(cat_name); // CAT
console.log(dog_name); // DOG
```

다만 이 경우 `'cat-name'`과 매칭할 변수명 `cat_name`을 작성하지 않으면 에러가 발생한다.

### 객체 비구조화시 변수 선언 키워드가 없는 경우
```javascript
let cat,
    dog;

// { cat, dog } = { cat: "CAT", dog: "DOG" } // error
({ cat, dog } = { cat: "CAT", dog: "DOG" }) // 괄호로 감싸줘야 함
console.log(cat); // CAT
console.log(dog); // DOG
```

객체 비구조화시 변수 선언 키워드가 없을 경우 소괄호를 사용하여 감싸줘야 한다. 감싸주지 않으면 에러가 난다.

## 기본값 할당

### 배열의 기본값 할당
```javascript
const [cat, dog, tiger] = ["CAT", "DOG"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // undefined
```

비구조화의 범위를 벗어나는 값 할당을 시도하면 `undefined`를 반환한다. 이럴 경우를 방지하기 위해 아래처럼 호출될 변수명에 기본값을 할당할 수 있다.

```javascript
const [cat, dog, tiger = "TIGER"] = ["CAT", "DOG"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

### 객체의 기본값 할당
```javascript
const { cat, dog, tiger = "TIGER" } = {
  cat: "CAT",
  dog: "DOG"
};
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER
```

배열과 마찬가지로 객체도 기본값을 지원한다.

```javascript
const { monkey: monkey_name = 'MONKEY' } = {};
console.log(monkey_name); // MONKEY
```

위 코드처럼 객체의 key에 새로운 변수명을 할당하는 방식에도 기본 기본값 할당을 사용할 수 있다.

## 복사
전개연산자를 사용하여 배열, 객체의 깊은 복사를 할 수 있다.

### 배열의 깊은 복사
```javascript
let arr = [1, 2, 3];
let copy1 = arr;
let [...copy2] = arr;
let copy3 = [...arr];

arr[0] = 'String';
console.log(arr); // [ 'String', 2, 3 ]
console.log(copy1); // [ 'String', 2, 3 ]
console.log(copy2); // [ 1, 2, 3 ]
console.log(copy3); // [ 1, 2, 3 ]
```

얕은 복사인 `copy1`은 `arr`를 참조하기 때문에 0번째 요소가 같이 수정되었지만, 전개연산자를 사용한 `copy2`와 `copy3`은 깊은 복사가 되었기 때문에 0번째 요소가 변경되지 않았다.

### 객체의 깊은 복사
객체 역시 전개연산자로 깊은 복사를 사용할 수 있다. 무엇보다 강력한 점은 복사와 함께 새로운 값을 할당할 수 있다는 점이다.

```javascript
let prevState = {
  name: "foo",
  birth: "1995-01-01",
  age: 25
};
let state = {
  ...prevState,
  age: 26
};

console.log(state); // {name: "foo", birth: "1995-01-01", age: 26}
```

위와 같이 `...prevState`를 사용하여 기존 객체를 복사함과 동시에 `age`에 새로운 값을 할당했다. 리액트의 props나 state처럼 이전 정보를 이용하는 경우 유용하게 사용할 수 있다.

## 함수에서의 비구조화 할당

함수의 파라미터 부분에서도 비구조화 할당을 사용할 수 있다. 이러한 문법은 특히 API 응답값을 처리하는데에 유용하게 사용된다.

```javascript
function renderUser({name, age, addr}){
  console.log(name);
  console.log(age);
  console.log(addr);
}
const users = [
  {name: 'kim', age: 10, addr:'kor'},
  {name: 'joe', age: 20, addr:'usa'},
  {name: 'miko', age: 30, addr:'jp'}
];

users.map((user) => {
  renderUser(user);
});
// kim
// 10
// kor
// joe
// 20
// usa
// miko
// 30
// jp
```

`users` 배열의 `map` 메서드로 인하여 `renderUser` 함수에 `users`의 객체가 각각 전달된다. 각 객체의 key 값이 `renderUser`함수의 파라미터 받는 부분에서 비구조화 할당을 받았기 때문에 함수 내에서 객체의 key 값을 각각 가져올 수 있게 된다.

```javascript
const users = [
  {name: 'kim', age: 10, addr:'kor'},
  {name: 'joe', age: 20, addr:'usa'},
  {name: 'miko', age: 30, addr:'jp'}
];

users.map(({name, age, addr}) => {
  console.log(name);
  console.log(age);
  console.log(addr);
});
```

마찬가지로 위처럼 `map` 메서드의 파라미터에도 바로 사용할 수 있다.

## for of 문을 이용한 비구조화 할당  
배열 내 객체들은 for of 문을 사용하여 비구조화 할 수 있다.

```javascript
const users = [
  {name: 'kim', age: 10, addr:'kor'},
  {name: 'joe', age: 20, addr:'usa'},
  {name: 'miko', age: 30, addr:'jp'}
];

for(let {name : n, age : a} of users){
  console.log(n);
  console.log(a);
}
```

## 중첩된 객체 및 배열의 비구조화
중첩된 객체 및 배열 역시 비구조화가 가능하다.

```javascript
const kim = {
  name: 'kim',
  age: 10,
  addr: 'kor',
  friends: [
    {name: 'joe', age: 20, addr:'usa'},
    {name: 'miko', age: 30, addr:'jp'}
  ]
};

let { name: userName, friends: [ ,{ name: jpFriend }] } = kim;
console.log(userName); // kim
console.log(jpFriend); // miko
```

## References
[자바스크립트 {...} [...] 문법 (비구조화 할당/구조분해 할당)](https://yuddomack.tistory.com/entry/자바스크립트-문법-비구조화-할당)  
[JavaScript ) 비구조화 할당 알아보기](https://velog.io/@public_danuel/destructuring-assignment)  
[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
