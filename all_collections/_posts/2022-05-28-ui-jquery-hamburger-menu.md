---
layout: post
title: "[jQuery] Hamburger Menu UI"
date: 2022-05-28 12:50:38
modified: 2022-05-28 12:50:38
tag: [javascript, jquery]
---

## UI 조건
1. 햄버거 메뉴 버튼 클릭시, 각기 다른 클래스가 입혀진다.
2. 다시 클릭시 기존 햄버거 메뉴로 돌아온다.

## 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ZERPvPw" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/ZERPvPw">
  Untitled</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 설명
1. 각 menu trigger 클래스 안의 12개 요소를 선택해주는 함수를 작성한다.
2. this로 총 12개의 menu-trigger를 받고 하나씩 클릭할때마다 각 index값의 1을 더해준 active-(index+1)명의 클래스를 입혀준다.
3. 재클릭시 원래 모양으로 복귀해야하므로 toggleclass를 사용.
4. preventDefault();는 a태그가 실행되지 않도록 막아준다.
