---
layout: post
title: "[jQuery] Todolist UI"
date: 2022-06-28 10:34:50
modified: 2022-06-28 10:34:50
tag: [javascript, jquery]
---

# TO DO LIST 만들기
# 조건
1. 버튼을 클릭했을 때 작성한 내용이 할일로 추가 된다.
2. 엔터키를 눌렀을 때 버튼을 클릭한 것과 동일한 효과 적용
3. 작성된 리스트를 더블 클릭하면 밑줄이 그어진 후 서서히 삭제된다.
4. 입력창에 마우스 클릭 시 공란이 되게 한다.

# 구현
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBKvwOg" data-user="bitnaleeeee" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/bitnaleeeee/pen/qBKvwOg">
  Untitled</a> by day.binna (<a href="https://codepen.io/bitnaleeeee">@bitnaleeeee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

# 설명
1. ul 안에 li 요소가 추가된 경우 li를 선택하여 이벤트 코드를 작성할 경우 코드 이후에 작성된 li는 이벤트를 실행시키지 못하는 경우가 있으므로, 이런 경우 document를 선택하고 발생할 이벤트, 선택자를 작성해주면 해당 이벤트를 실행시킬 수 있다.
2. li에 (더블)클릭 이벤트를 작성해 줄 경우, 부모 태그 요소에도 이벤트가 적용되어 중복 실행될 수 있으므로 버블링을 방지하기 위해 return false를 작성해준다.
