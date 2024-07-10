---
layout: post
title: "[jQuery] Fixed Navigation UI"
date: 2022-05-28 12:50:38
modified: 2022-05-28 12:50:38
tag: [javascript, jquery]
---

## UI 조건
1. 1.상단 메뉴바는 스크롤을 내려도 계속 상단에 노출된다.
2. 2.각 메뉴바를 누르면 첫 화면으로 올라간다.

## 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="vYrPpbX" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/vYrPpbX">
  jQuery Fixed Navigation UI</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 설명
1. cnt의 hieght가 300이므로, widow.scrolltop이 300이 넘어갈 경우, 해당 메뉴바를 상단(top=0)에 고정시키는 class를 입혀준다.
2. 만약 window.scrolltop이 300 이하인 경우, 메뉴바를 상단에 고정시키게 되면, cnt보다 위에 있게 되므로 removeclass를 하여 적용을 해제시켜준다.
