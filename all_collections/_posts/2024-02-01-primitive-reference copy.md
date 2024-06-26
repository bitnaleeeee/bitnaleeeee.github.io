---
layout: post
title: "[JavaScript]기본형과 참조형"
date: 2024-02-01 12:10:59
modified: 2024-02-01 12:10:59
tag: [JavaScript, Object, primitive-type, reference-type]
---

자바스크립트는 7가지의 데이터 타입이 있다. (`Number`, `Stirng`, `boolean`, `undefined`, `null`, `Symbol`(`ES6`부터 추가) `Object`)
7가지의 데이터 타입은 두 가지로 구분할 수 있는데 원시타입(기본형)과 객체타입(참조형)이다. <br>

원시타입과 객체타입의 다른 점은 크게 두가지로 나뉘어 지는데, 첫번째로 원시타입은 값 자체의 수정이 불가능하고, 객체타입은 값 자체의 수정이 가능하다는 점이다. 두번째로 다른 점은 원시타입 변수를 변수에 할당하였을때 값 자체가 복사되고 객체타입 변수에 변수를 할당했을때는 값의 주소가 복사된다는 것이다.

## 첫번째 구분: 값의 변경 유무

1. 변경 불가능한 값: 원시타입(primitive type) : `Number`, `Stirng`, `boolean`, `undefined`, `null`, `Symbol` <br>
2. 변경 가능한 값: 객체타입(object/reference type) : `Object`

```javascript
let num = 2;
num = 3;

console.log(num); // 3
```

위와 같이 원시값에 새로운 원시값을 재할당한 경우 값이 변경된 것이 아니라 새로운 메모리 주소에 3이라는 값을 할당한다. 즉 2가 할당되어있던 메모리 공간에 3을 재할당하는 것이 아닌, 2가 할당되어있는 메모리는 그대로 존재한 상태로 3이라는 새로운 원시값을 새로운 메모리에 재할당하고 변수가 참조하던 메모리 공간의 주소를 변경하여 보여준다.
위 예시의 숫자뿐 아니라 다른 원시타입도 동일하다. 원시 값은 값을 변경할 수 없고 재할당할 경우 새로운 메모리 공간에 새로운 원시값을 저장하고 변수가 참조하는 주소를 변경한다.

```javascript
let num = [1, 2, 3];
num = [4, 5];

console.log(num); // [4,5]
```

```javascript
let person = {
  name: 'lee'
};

person.name: 'kim';

console.log(person) // {name: 'kim'}
```

위와 같이 배열(객체타입)의 값을 재할당할 경우 실체 객체에 접근하여 값을 변경한다. 조금 더 자세히 얘기하면 객체타입을 할당한 변수는 객체가 담긴 메모리 주소를 참조한다. 원시값을 할당한 변수가 원시 값 자체를 값으로 갖는 것과는 저장하는 방식이 다르다고 할 수 있다. 아무튼 객체타입은 값 자체의 수정이 가능하기 때문에 값을 재할당하면 참조하는 주소는 같고 그 주소를 통해 메모리 공간에 접근하여 참조 값을 변경한다.

정리하자면 원시타입과 객체타입을 각각 변수에 할당할때 원시타입을 담은 변수의 경우 값 자체를 변수의 값으로 갖지만 객체타입을 담은 변수는 객체값을 담은 메모리 주소를 참조한다.
두번쨰로 원시타입은 값 자체를 변경할 수 없기때문에 값을 재할당할 경우 새로운 메모리에 새 원시값을 저장하고 메모리 공간의 주소를 변경시킨다. 객체타입은 값 자체의 수정이 가능하므로 변수가 참조하는 메모리 주소를 통해 참조값에 접근하여 값 자체를 변경시키고 참조하는 주소는 변경시키지 않는다.

## 두번째 구분: 기본형과 참조형

두번째 구분은 변수에 변수를 할당하였을때 어떻게 동작하는가 이다.

```javascript
let x = 2;
let y = x;

x = 3;

console.log(y); // 2
```

원시값을 담은 변수 `x`에 변수 `y`를 할당하면 각각 다른 메모리 공간에 같은 값을 저장하게 된다. 이때 변수 `x`를 변경하면 원시값을 담은 변수 `x`는 값 자체를 2에서 3으로 변경하고 메모리 공간의 주소는 동일한 상태로 남겨둔다. 따라서 `y` 또한 다른 메모리주소의 공간에서 원시값 2를 담고 있기 때문에 변수 `x`의 값을 변경하여도 영향을 받지 않고 기존에 할당하였던 2를 출력한다.

```javascript
let x = [1, 2, 3];

let y = x;

x[3] = 4;

console.log(y); // [1,2,3,4]
```

```javascript
let x = {
  name: 'lee'
}

let y = x

x.name: 'kim'

console.log(y) // {name:'kim'}
```

앞서 말했듯이 객체타입의 변수는 참조값을 통해 객체에 접근한다. 즉 메모리에 저장되어 있는 참조 값을 통해 실제 객체에 접근하는 것이다. 따라서 변수 `y`에 `x`를 할당한 경우 참조하는 메모리 주소를 복사한다. 즉 변수 `x`와 `y`는 같은 메모리 주소를 가르킨다. 이것은 두개의 식별자가 하나의 객체를 공유하는 것이다. 따라서 `x`를 변경하였을때 `x`는 참조값을 통해 실제 객체에 접근하여 값을 변경시키고, 그것을 바라보고 있는 다른 식별자 `y`도 영향을 받게된다. 즉, 객체타입은 값 자체를 변경시킬 수 있고 바라보는 메모리 주소를 변경하지 않기 때문에 같은 메모리 주소를 바라보는 `x`와 `y`는 같은 값을 공유하게 된다.

자바스크립트의 데이터 타입에 따라 변수를 할당했을때, 또 그 변수에 변수를 할당하게 되었을때 자바스크립트의 동작 방식을 인지하고 있어야 코드가 길어졌을때 의도하지 않은 방식으로 코드가 동작하는 오류를 범하지 않을 수 있다.
