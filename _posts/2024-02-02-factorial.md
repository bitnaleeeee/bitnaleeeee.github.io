---
layout: post
title: "[Algorithm]알고리즘 문제풀이"
date: 2024-02-02 12:10:59
modified: 2024-02-02 12:10:59
tag: [JavaScript, Algorithm]
---

파라미터로 양의 정수 n을 받고 n!을 계산해서 리턴해 주는 함수를 작성해 주세요.

```javascript
function factorial(n) {
  let result = 1;
  let num = 0;

  for (let i = 0; i < n; i++) {
    num = n - i;
    result = result * num;
  }
  return result;
}
```

#### n! 동작예시

0! = 1 <br>
1! = 1<br>
2! = 1 x 2 = 2<br>
3! = 1 x 2 x 3 = 6<br>
4! = 1 x 2 x 3 x 4 = 24<br>
5! = 1 x 2 x 3 x 4 x 5 = 120<br>
6! = 1 x 2 x 3 x 4 x 5 x 6 = 720

파라미터로 주어지는 양의 정수 n의 n부터 n - (n-1) 까지 곱을 구하기 위해서 반복문을 사용하였다.
`i`에 0을 할당하여 `n`부터 `i`에 `n-1` 까지 곱해준 후 반복문 밖에 변수를 선언하여 최종값을 불러온다. 따라서 `i`를 `n`부터 시작해서 1이 될 때까지 i를 하나씩 줄여 나가는 방법으로 원하는 결과를 얻어낼 수 있다.
