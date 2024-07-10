---
layout: post
title: "[Algorithm]알고리즘 문제풀이"
date: 2024-02-03 12:10:59
modified: 2024-02-03 12:10:59
tag: [JavaScript, Algorithm]
---

"토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 '팰린드롬(palindrome)'이라고 부릅니다.
팰린드롬 여부를 확인하는 함수 isPalindrome을 작성하려고 하는데요. isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고 팰린드롬이 아니면 false를 리턴하도록 작성하세요.

```javascript
function isPalindrome(word) {
  let input = [...word];
  input = input.reverse();

  let str = input.join("");

  if (word === str) {
    return true;
  } else {
    return false;
  }
}
```

문자열 `word`를 스프레드 기법으로 `input` 배열로 하나씩 담아줍니다. `reverse`함수를 사용하여 배열의 인덱스를 반대로 하나씩 넣어줍니다. 그 후 `Stirng`으로 형 변환을 해준 문자열을 `str`에 담아줍니다. 뒤집어진 문자열 `str`과 주어진 문자열 `word`가 같을때 `true` 다를때 `false`를 리턴하도록 조건문으로 작성해 줍니다.
