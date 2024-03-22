---
layout: post
title: "[JavaScript] JSON의 등장과 XML"
date: 2023-06-13 12:00:59
modified: 2023-06-13 12:00:59
tag: [javascript, XML, json, html, data]
---

**데이터 전달 방식 XML, JSON**  
XML과 JSON 모두 데이터를 저장하고 전달한다는 공통점이 있다.

# XML(EXtensible Markup Language)

HTML 한계를 극복하기 위해 만들어 졌다. HTML처럼 트리구조로 이루어져 있는데 HTMl 처럼 데이터를 보여주는 목적이 아닌, 데이터를 저장하고 전달할 목적으로만 만들어졌다. 복잡한 문서구조 처리에 어려운 HTML에 비해 보다 용이하게 구조화된 데이터를 저장하고 전달할 수 있다. 기본 문법은 HTMl 태그처럼 미리 약속된 태그들이 아닌, 사용자가 직접 지정하여 사용할 수 있고 이로 인해 데이터에 의미를 부여할 수 있다.

```javascript
<?xml version="1.0" encoding="UTF-8"?>

<shop city="서울" type="마트">

    <food>

        <name>귤</name>

        <sort>과일</sort>

        <cost>3000</cost>

    </food>

    <food>

        <name>상추</name>

        <sort>야채</sort>

        <cost>2000</cost>

    </food>

</shop>

```

위처럼 `name` `sort` 등 태그명을 작성자가 임의로 지정하여 데이터를 저장할 수 있다. 이 때문에 확장(EXtensible Markup Language) 언어라고 한다.

# JSON( JavaScript Object Notation)

JSON 은 서버와 서버 또는 서버와 클라이언트 사이에 데이터를 주고 받을 수 있는 데이터 형식이다. 자바스크립트의 객체 형식으로 데이터를 주고 받는 형식이다.
아래와 같이 `key`와 `value` 형태이다.

```javascript
let apple = {
  fruit: "Apple",
  color: "Red",
  num: 1,
};
```

다만, 자바스크립트와 달리 `key` 값에 따옴표가 있는 이유는 자바스크립트의 약속된 변수를 고려하지 않고 개발자가 자유롭게 `key`값을 정의하기 위하여 따옴표를 붙임으로써 해결하였다.

JSON의 간단한 스펙과 안정성과 가독성, 파싱도 XML보다 매우 빠르기 때문에 데이터를 주로 받을때는 주로 JSON을 사용하지만 트리구조와 유사한 웹 사이트에서는 XML을 사용하는 경우도 있다.

- 파싱(parse) : 데이터의 의미를 해석하는 과정으로 브라우저가 HTML을 읽는 과정, 압축을 해제하는 과정, 코드를 컴파일링 하는 과정 모두 파싱이다.

## References

[XML구조](http://www.tcpschool.com/xml/xml_basic_structure)
[JSON구조](http://www.tcpschool.com/json/json_basic_structure)
