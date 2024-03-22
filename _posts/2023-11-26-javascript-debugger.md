---
layout: post
title: "[JavaScript] debugger 사용법"
date: 2023-11-26 18:00:59
modified: 2023-11-26 18:00:59
tag: [JavaScript, debugger, React]
---

자바스크립트 개발에 있어서 불편한 점 하나는 오류를 찾기가 쉽지 않다는 점이다. 어디에서 오류가 발생했는지 찾기 위해 `consoel.log` 를 찍어보고 `alert`을 활용하지만 한계가 있다. 특히 데이터 통신의 경우 오류가 발생했을때 어디서부터 잘못된 것인지 값을 찍어보는 것으로는 알기 어렵다.

이러한 경우 `debugger`를 활용한다면 코드 실행 흐름에 따라 어디서 문제가 발생하였는지 쉽게 확인할 수 있다. 확인하고 싶은 코드 흐름의 중간에 `debugger`문을 찍어주면 코드 실행시 해당 지점에 `breackpoint`가 발생하여 앞, 뒤 분석을 통해 오류를 캐치해낼 수 있다.

```javascript
useEffect(() => {
  fetch("/data/data.json")
    .then((response) => {
      debugger; //debugger 를 활용하여 response 응답값 확인
      return response.json();
    })
    .then((result) => {
      setData(result);
    });
}, []);
```

![debugger01](/images/post/debugger01.png)
위 코드의 흐름에 `debugger`를 찍은 지점에서 실행을 멈추는 것을 확인할 수 있다.

![debugger02](/images/post/debugger02.png)
로컬에서 reponse를 확인해보면 `status` 200 으로 통신이 성공했다는 것을 알 수 있다. 코드가 실행될때마다 각 변수에 할당하는 값이 우측에 표시 되므로 `console.log`로 일일이 찍어서 값을 확인할 필요가 없고 실행 흐름을 쭉 따라가면서 코드를 검증할 수 있다. 또 값이 할당된 변수에 마우스를 올리면 값을 직접 확인할 수도 있다.

이렇듯 자바스크립트 개발에 있어서 `debugger`문을 활용하는 것은 코드의 흐름을 따라 효율적으로 코드를 검증할 수 있어 매우 유용하다.
