---
layout: post
title: "[jQuery] Modal Popup UI"
date: 2022-05-17 12:50:38
modified: 2022-05-17 12:50:38
tag: [javascript, jquery]
---

## UI 조건

1. 눌러보세용 클릭 시 모달 창이 나타난다.
2. 닫기를 누르면 모달창이 닫아진다.

## 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBKvmwP" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/qBKvmwP">
  jQuery modal window UI</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 설명
1. retrun false는 함수를 중복 실행되지 않게 방지한다(이벤트 실행방지)
2. focus 와 blur 를 사용하여 버블링 및 캡쳐링 모두 발생되지 않게 한다.
