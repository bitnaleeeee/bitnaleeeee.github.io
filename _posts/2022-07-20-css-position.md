---
layout: post
title: "[CSS] Layout Display, Position 정리"
date: 2022-07-20 10:00:59
modified: 2022-07-20 10:00:59
tag: [css]
---

## diplay

display는 요소를 block과 inline inlie-block중 어느 쪽으로 처리할지 결정하는 css 속성이다.

### 1. inline

1. 대표적으로 span 태그가 있다.
2. 콘텐츠 내용의 크기만큼 공간을 차지한다.
3. inline 요소의 경우 태그 안에 콘텐츠가 없을 경우 화면에 나타나지 않으며, 컨텐츠 자체만을 꾸며주어 width로 크기를 설정할 수도 없다. 콘텐츠가 없어도 화면에 표시하고 크기를 설정하기 위해서는 display를 block으로 변경해 주어야한다.

### 2. inline-block

1. 콘텐츠 내용의 크기만큼 공간을 차지한다.
2. 콘텐츠가 없어도 표시 가능하며, width 로 크기 조정 또한 가능하다.
3. 즉 inline적 요소와 block요소를 모두 가지고 있다.

### 3. block

1. 대표적으로 div 태그가 있다.
2. 한 줄의 공간 모두를 차지한다.
3. 태그안에 컨텐츠가 없어도 화면에 나타낼 수 있으며, width로 크기를 설정할 수 있다.

## position

position은 기본값으로 static을 가지고 있다. 이는 html에 정의된 순서대로 브라우저상에 자연스럽게 보여지는 것을 의미한다.(제일 왼쪽, 제일 상단에서 시작)
따라서 요소의 위치를 바꾸기 위해서는 position의 default값을 바꾸어 주어야 한다.

### 1. relative

원래 (static)에 있어야 하는 자리에서, 상대적으로 옮겨간다.

### 2. absolute

부모 태그의 위치에서 옮겨간다. 이때 부모 태그는 position 속성은 relative여야 하며, 부모 태그의 position 속성이 relative가 아닌 경우 relative 속성이 있는 가장 가까운 상위 태그를 찾아 그 위치를 기준으로 옮겨간다.

### 3. fixed

window 안에서 옮겨간다. 웹페이지 안에서 브라우저가 기준이 된다.

### 4. sticky

원래 있어야 하는 자리에서 있으면서(static), 스크롤을 하여도 없어지지 않고 그대로 자리에 붙어있는다. position의 속성을 위 태그들로 변경한 후 top, bottom, left, right value를 이용하여 요소의 위치를 변경할 수 있다.

> 참고
> [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/display) > [TCP](http://www.tcpschool.com/css/css_position_display) > [DalsSeo](https://www.daleseo.com/css-position/)
