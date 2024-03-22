---
layout: post
title: "[JavaScript] 특정 값의 수를 구하는 함수"
date: 2022-04-13 20:03:59
modified: 2022-04-13 20:03:59
tag: [javascript]
---

**JS 특정 값 개수 구하기**  
자바스크립트에서 특정 값의 개수를 구하는 함수를 아래와 같이 작성하였다.
예를 들어 함수 counterCharacter('Abcea', 'a')는 'Abcea' 에서 a가 몇 번 들어갔는지 세는 함수로 대소문자 구분이 없다.
즉, 위 예시의 경우 실행값은 2가 나와야 한다.

```javascript
fucntion counterCharacter(word, ch){
  let count = 0;

  for (let i = 0; i < word.length; i++>){
    if (word[i].toUppercase() === ch.toUpperCase()) {
      count ++;
    }
  }
return count;
}
console.log(countCharacter('AbaCedEA', 'E'));
```

1. 함수 안에 let = count 로 변수를 선언 : 전역변수로 for 문에서 반복할때마다 해당 값이 카운트 되어 저장되게 한다.
2. word.length는 해당 단어의 글자 수로, 인덱스 값은 0부터 시작하므로 i < word.length 는 해당 단어의 인덱스 값을 모두 추출한다.
3. toUppercase 로 매개변수를 모두 대문자로 바꾼 후 둘을 비교하여 일치할 경우 count 값을 리턴한다.(대소문자 구분 없이 카운트)
4. return count 는 for에서 반복하여 쌓인 최종 count 값을 저장하고 해당 함수를 종료시킨다. 이때 for 문 안에서 count 값을 작성 하게 되면, 실행값이 달라지므로
   for 문 밖, 함수 안에서 return 을 작성하여야 한다.

4-(1). return count 을 for 문 안에 써준 경우

```javascript
function countCharacter(AbaCedEA, E) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === ch.toUpperCase()) {
      count++;
      return count;
    }
  }
}
console.log(countCharacter("AbaCedEA", "E"));
```

4-(2). return count 을 for문 안에 써준 경우

```javascript
function countCharacter(AbaCedEA, E) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === ch.toUpperCase()) {
      count++;
    }
    return count;
  }
}
console.log(countCharacter("AbaCedEA", "E"));
```

결과는 모두 0이 나오게 되는데 if 의 조건이 충족한 경우, count++로 내려온 후 바로 return 으로 해당 함수를 종료시키기 때문이다.
