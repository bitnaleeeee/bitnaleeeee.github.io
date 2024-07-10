---
layout: post
title: "[JavaScript] ES5 Array.map"
date: 2022-06-17 18:49:45
modified: 2022-06-17 18:49:45
tag: [javascript, es5]
---

`Array.map` 메서드는 `Array.forEach`와 마찬가지로 배열의 각 요소를 순회하며 콜백 함수를 실행한다. 다만, 콜백에서 리턴되는 값을 배열로 만들어낸다. 원본 배열은 건들지 않고 그 요소들을 사용해서 혹은 약간 변형해서 새로운 배열을 만들어야 할 때 유용하다.

## Parameter

1. 현재 배열 요소의 값
2. 현재 배열 요소의 index
3. 현재 돌고 있는 배열 자체

## 예제

```javascript
let arr = ['a', 'b', 'c'];

//배열의 모든 요소에 NEW라는 문자열을 더하기
//메서드 수행 후 리턴값은 새로운 배열
let newArr = arr.map(function (item, index, array) {
    return item + 'NEW';
});

//메서드 수행 후 원본 배열
console.log(arr);
// ["a", "b", "c"]

//메서드 수행 후 생성된 배열
console.log(newArr);
// ["aNEW", "bNEW", "cNEW"]
```

<!-- ## 실용적인 예제

`Array.map` 메서드는 아래와 같이 쓰일 수 있다.

```html
<button type="button" id="click" onclick="render()">데이터 얻기</button>
<table id="tbl">
    <thead>
        <th>이름</th>
        <th>전화번호</th>
    </thead>
    <tbody></tbody>
</table>
```

```javascript
// ajax를 통해 가져온 데이터라고 가정
let data = [
    {
        name: 'a',
        phone: '010-1000-2000'
    },
    {
        name: 'b',
        phone: '010-3000-4000'
    },
    {
        name: 'c',
        phone: '010-5000-6000'
    }
];

// Array.map 메서드를 사용하여 배열 요소의 데이터를 html로 변경
function makeDom() {
    let dom = data.map(function (item, index) {
        return '<tr><td>' + item.name + '</td><td>' + item.phone + '</td></tr>';
    });
    return dom;
}

// 배열을 하나의 값으로 만든 후 테이블에 html 추가
function addTbl(dom) {
    let tblList = dom.join('');
    document.getElementById('tbl').getElementsByTagName('tbody')[0].innerHTML = tblList;
}

// 위 로직을 실행
function render() {
    let list = makeDom();
    addTbl(list);
}
```

## 결과

<button type="button" id="click" onclick="render()">데이터 얻기</button>
<table id="tbl">
    <thead>
        <th>이름</th>
        <th>전화번호</th>
    </thead>
    <tbody></tbody>
</table>

<script>
// ajax를 통해 가져온 데이터라고 가정
let data = [
    {
        name: 'a',
        phone: '010-1000-2000'
    },
    {
        name: 'b',
        phone: '010-3000-4000'
    },
    {
        name: 'c',
        phone: '010-5000-6000'
    }
];

// Array.map 메서드를 사용하여 배열 요소의 데이터를 html로 변경
function makeDom() {
    let dom = data.map(function (item, index) {
        return '<tr><td>' + item.name + '</td><td>' + item.phone + '</td></tr>';
    });
    return dom;
}

// 배열을 하나의 값으로 만든 후 테이블에 html 추가
function addTbl(dom) {
    let tblList = dom.join('');
    document.getElementById('tbl').getElementsByTagName('tbody')[0].innerHTML = tblList;
}

// 위 로직을 실행
function render() {
    let list = makeDom();
    addTbl(list);
}
</script> -->

## References
[[JavaScript] Array 객체에서 놓치기 쉬운 6개의 메서드](https://programmingsummaries.tistory.com/357)  
[자바스크립트 Array map](https://yuddomack.tistory.com/entry/자바스크립트-Array-map)
