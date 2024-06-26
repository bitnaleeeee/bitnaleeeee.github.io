---
layout: post
title: "피보나치 수열(Fibonacci Sequence)"
date: 2024-01-25 12:10:59
modified: 2024-01-25 12:10:59
tag: [JavaScript, Algorithm]
---

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
피보나치 수열의 1번 항과 2번 항은 각각 1이다. 3번 항부터는 바로 앞 두 항의 합으로 계산된다.
예를 들어 3번 항은 1번 항(1) 과 2번 항(1) 을 더한 2이며, 4번 항은 2번 항(1)과 3번 항(2)을 더한 3이다.

이를 코드로 작성하여 50개 항을 차례로 출력하는 코드는 어떻게 작성하면 될까?

```javascript
let pre = 0;
let current = 1;

for (i = 1; i <= 50; i++) {
  let temp = pre; // 0할당, 1할당, 1할당, 2할당,3할당,5할당,
  pre = current; //1할당, 1할당, 2할당, 3할당,5할당,8할당

  current = currnet + temp; // 1할당 , 2할당, 3할당,5할당,8할당,13할당
}
```

첫번째 항과 두번째항은 우선 1이 출력되어야 함으로
초기값 `pre`에 0, `currnet`에 1을 할당하고
`current`의 출력부분을 첫 줄에 써준다.

그리고 `temp`에 `pre`값 0 을 먼저 할당한 후
`pre`에는 현재 `current`값 1을 할당해준다
최종 현재값은 `temp`와 `current`값인 1이 출력되게 한다

이로써 1항과 2항은 모두 1이 출력되게 된다.

이후
`temp`에는 전전값, `pre`에는 전값, `current`에는 새로운 값이 할당된다

`current`의 새로운 값이 갱신되면
첫번째 줄에서 그 값을 출력하고
`pre`는 현재 `current`을 담고
또 새로운 `current`값이 갱신된다.
그러므로 `pre`는 이전 `current`값이 되며
`temp`는 현재 `curretn`값이 아닌 직전 `current`값을 담았기 떄문에 전전 값이 된다.

그렇게 3번째 항부터는 전값, 전전값을 더한 새로운 값이 매번 갱신되며 50번째 항까지 출력하게 된다.

즉, 정리하자면
`currnet` 새로 갱신되는 현재값
`pre` current가 갱신되기 전의 현재값 (직전값)
`temp` 현재 i-1 에서의 current값 (전전값) 이 된다.
