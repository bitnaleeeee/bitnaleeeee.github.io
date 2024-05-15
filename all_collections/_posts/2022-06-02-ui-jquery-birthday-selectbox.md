---
layout: post
title: "[jQuery] 생년월일 Select Box UI"
date: 2022-06-02 16:00:08
modified: 2022-06-02 16:00:08
tag: [javascript, jquery]
---

## 조건

1. 1970년도부터 오늘년도까지 년도selectbox 생성
2. 월, 일 selextbox 생성

<!-- ## 구현

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script>
    $(document).ready(function () {
      let today = new Date();
      let year = today.getFullYear();
      for (i = 1970; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '</option>');
      }for (i = 1; i <= 12; i++) {
        $('#month').append('<option value="' + i + '">' + i + '</option>');
      }for (i = 1; i <= 31; i++) {
        $('#day').append('<option value="' + i + '">' + i + '</option>');
      }

});
</script>

<style>

</style>

<select name="yy" id="year"></select>년
<select name="mm" id="month"></select>월
<select name="dd" id="day"></select>일 -->

```html
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<select name="yy" id="year"></select>년
<select name="mm" id="month"></select>월
<select name="dd" id="day"></select>일
```

```javascript
$(document).ready(function () {
  let today = new Date();
  let year = today.getFullYear();
  console.log(year);

  //년도 selectbox 만들기
  for (i = 1970; i <= year; i++) {
    $('#year').append('<option value="' + i + '">' + i + '</option>');
  }

  //월 selectbox 만들기
  for (i = 1; i <= 12; i++) {
    $('#month').append('<option value="' + i + '">' + i + '</option>');
  }


  //일 selectbox 만들기
  for (i = 1; i <= 31; i++) {
    $('#day').append('<option value="' + i + '">' + i + '</option>');
  }

});
```

## 해설
1. new Date 내장 함수를 사용하여 현재 날짜를 구한다.
2. new Date 를 담은 변수에 getfullyear을 사용하여, 현재 년도를 가져온다.
3. 1970년도부터 현재년도까지 선택할 수 있는 년도 selctbox를 만든다.
4. i는 변수이므로, 앞 뒤로 + i + 를 사용하여 묶어준다.
5. 같은 방식으로 월, 일 selectbox를 만든다.
