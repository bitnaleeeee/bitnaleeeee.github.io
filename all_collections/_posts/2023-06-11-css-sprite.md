---
layout: post
title: "[CSS] 스프라이트 기법"
date: 2023-6-11 18:00:59
modified: 22023-6-11 18:00:59
tag: [React, Sprite, CSS, HTML]
---

스프라이트(Sprite) 는 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하는 것을 말한다.  
웹에서 사용되는 이미지의 경우 해당 이미지를 사용자에게 보여주기 위해 웹 브라우저는 서버에 이미지를 요청하게 되고 그만큼 로딩시간이 소요된다.  

이를 효율적으로 하기 위해 웹 상에서 사용되는 아이콘 등의 이미지 파일들을 하나의 파일로 합쳐서 관리하여 웹 상에서 브라우저가 다운받아야 할 이미지를 줄여주고 관리하기도 쉽다는 장점이 있다.

# 사용법

아래는 내가 스프라이트 기법을 사용할때 작성한 코드 예시이다.

```javascript
          .todaytemper {
           margin-right: 30px;
           position: relative;
           &::after {
             content: "";
             width: 28px;
             height: 17px;
             background: url(사용할이미지의 주소입력)
               no-repeat;
             top: 0px;
             right: -26px;
             position: absolute;
             display: inline-block;
             background-position: -314px -81px;
             background-size: 396px 185px;
           }

```

사용할 이미지의 url을 `background`로 넣어준 후 `width`와 `height`로 넣을 크기를 지정해 준 후, `background-size`와 `background-position`를 사용하여 노출시킬 이미지를 지정해주면 된다.

이때 `width`와 `height`는 이미지가 들어갈 공간, 크기를 설정해주는 것이고 `background-size`는 url로 넣은 이미지를 어떤 크기로 불러올 것인지에 대한 설정값이다. 마지막으로 여러개의 이미지 중, 어떤 이미지를 웹 상에 노출시킬 것인지 `background-position`를 지정하여 원하는 이미지를 노출시키면 된다.

이로 인해 이미지 로딩 속도가 최적하 되며 파일 관리가 용이할 뿐 아니라 마크업이 간결해진다는 장점이 있다.
