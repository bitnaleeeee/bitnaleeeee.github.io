---
layout: post
title: "[jQuery] Accodian Menu UI"
date: 2022-05-28 12:50:38
modified: 2022-05-28 12:50:38
tag: [javascript, jquery]
---

## UI 조건
1. que를 클릭했을 때, 바로 다음 요소(anw)가 보이게 하라
2. que를 클릭했을때 on class 적용, 다른 que나 해당 que 클릭시 on class 해제
3. 하나의 anw 만 slide 애니메이트 적용

## 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KKeEqpd" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/KKeEqpd">
  jQuery Accodian Menu UI</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 설명
1. next()함수는 바로 다음 요소를 선택하여 준다.
2. stop함수는 적용된 애니메이트를 멈춰주는 역할을 한다. 여기서 stop을 사용해야 하는 이유는, slideToggle함수가 적용된 후 해당 함수를 멈춘 후 다음 요소의 애니메이트를 적용시키기 위해서다.
3. siblings() 에 요소 이름을 넣어주면, 해당 요소 이름을 가지고 있는 형제요소를 선택하여 준다. 만약 ()안에 anw를 넣어주지 않으면, 모든 anw, que형제요소를 slideup 한다.
