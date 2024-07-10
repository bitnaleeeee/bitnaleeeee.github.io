---
layout: post
title: "[Vue3] fontawesome 사용하기"
date: 2023-09-08 12:00:59
modified: 2023-09-08 12:00:59
tag: [Vue3, fontawesome, javascript, library]
---

fontawsome은 웹 아이콘 폰트를 모아놓은 라이브러리이다.  
Vue3에 설치 방법 및 사용법에 대해 알아보려 한다.

## 설치

```javascript
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/vue-fontawesome@3
```

## Vue.js3 적용

```javascript
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass, faChevronLeft, faBars, faDoorOpen, faSquarePlus);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
```

리액트와는 다르게 main.js에서 import 및 export를 해주어야 한다.

## Vue.js3에 사용

```javascript
<template>
  <div class="nav">
    <font-awesome-icon icon="fa-solid fa-chevron-left" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <font-awesome-icon icon="fa-solid fa-bars" />
  </div>
</template>
```

원하는 컴포넌트에서 사용해주면 된다. Pro등 유료 아이콘을 제외하고 무료 아이콘을 선택하여 vue.js의 String Syntax를 붙여넣어 주면 화면에 출력된다.

## References

[Vue 공식 홈페이지](https://fontawesome.com/docs/web/use-with/vue/)
