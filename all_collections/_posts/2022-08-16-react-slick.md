---
layout: post
title: "[React] Slick arrow custom"
date: 2023-08-16 12:00:59
modified: 2023-08-16 12:00:59
tag: [react, slick, react-slick]
---

Slick Arrow Custom 설치방법은 아래와 같다.

```javascript
npm i react-slick
yarn add react-slick
```

`react-slick`에서 스타일을 수정하고 싶다면 아래도 추가로 설치해준다

```javascript
npm i slick-carousel
```

## 사용방법

위와 같이 사용하고자 하는 컴포넌트에 불러와준다

```javascript
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

### 기본 구조

```javascript
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, // 슬라이드 밑에 있는 동그라미 버튼
      infinite: true, // 무한 스크롤 여부
      speed: 500, // 넘어가는 속도
      slidesToShow: 1, // 슬라이드 갯수
      slidesToScroll: 1, // 스크롤 갯수
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
```

위에 있는 기본 샘플을 가져다 사용하거나
[여기](https://react-slick.neostack.com/docs/example/custom-arrows/)에 다른 샘플들도 있으므로 참고하면 좋다.
추가로 `arrows`를 넣어줄 수도 있고 원하는대로 스타일링 할 수 있다.

## References

[React Slick 공식 홈페이지](https://react-slick.neostack.com/)
