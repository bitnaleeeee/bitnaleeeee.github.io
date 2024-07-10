---
layout: post
title: "[jQuery] Select Box UI"
date: 2022-04-21 20:37:08
modified: 2022-04-21 20:37:08
tag: [javascript, jquery]
---

## 조건
1. select class 클릭 시, list class 보이게 하라!
2. li 항목 클릭 시, 해당 텍스트가 select text에 담겨야 한다
3. li 항목 클릭 시, 형제 리스트 목록은 숨겨져야 한다. (클래스 제거)
4. list class가 보일때 select box를 제외한 부분을 클릭할 시, 모든 리스트는 숨겨져야 한다.
조건 4-1. select 를 제외한 다른 부분을 클릭할때 = select 클릭이 아닐때  
조건 4-2. list가 다 보였을때

## 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="BaVbRBY" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/BaVbRBY">
  jQuery Select Box UI</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 설명
1. toggleClass('클래스명') 함수는 클릭할때 해당 클래스가 적용되고, 다시 한번 클릭하면 자동 해제된다.
2. $('객체').text()는 해당 객체의 텍스트를 저장한다. text 괄호 ()안에 값을 넣으면, 해당 객체안의 텍스트에 값이 들어간다.
3. event.target();은 클릭한 객체를 나타낸다. event.target.is();는 ()안에 해당 값이 들어가있으면 true, 아닐시 false를 반환한다.
4. hasClass('클래스명')함수는 해당 클래스가 있을시 true, 없을시 false를 반환한다.
