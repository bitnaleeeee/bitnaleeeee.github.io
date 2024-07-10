---
layout: post
title: "[JavaScript] 문자열이 공백인지 체크"
date: 2022-11-29 18:21:25
modified: 2022-11-29 18:21:25
tag: [javascript]
---

**문자열이 공백인지 체크하는 함수**  
검색창 구현에 필요한 로직

```javascript
/**
 * 정규표현식을 활용하여 문자열이 공백일경우 'true' 반환
 * @param {string} str 
 * @returns {boolean} 공백일경우 'true' 아닐경우 'false'
 */
function checkSpaceStr(str) {

    let bln = false;
    let blankPattern = /^\s+|\s+$/g;
    if (str.replace(blankPattern, '') === '') {
        bln = true;
    }
    return bln;
}
```

## References
[회원가입에서 공백, 특수문자 검사하기](https://escapefromcoding.tistory.com/289)
