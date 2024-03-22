---
layout: post
title: "[React] 프론트엔드 Vercel로 손쉽게 배포하기"
date: 2023-11-27 19:10:59
modified: 2023-11-27 19:10:59
tag: [React, JavaScript, Vercel, Deploy]
---

`Vercel`은 `Next.js`개발팀에서 만든 빌드/배포/호스팅 서비스를 제공하는 프론트엔드 배포자동화 호스팅 사이트이다. 이와 유사한 서비스로 `Netlify`라는 서비스가 있다.

### Vercel 회원가입

우선 `Vercel` 홈페이지(https://vercel.com)에 접속 후 회원가입을 해야 한다.
회원가입을 하고 로그인하여 작업한 레포가 있는 `git` 계정과 연결 시켜 준다.

### Configure Project

원하는 Repository import 후 자신의 프로젝트에 맞게 수정해준다

![vercel02](/images/post/vercel02.png)

### Deploy하기

Deploy를 누르고 잠시 기다려주면, 빌드/배포를 자동으로 진행한다.
또한 배포 후 `Github`에 수정 사항을 `push` 할 때마다 `Vercel`이 이를 자동으로 감지하여 빌드/배포를 다시 해준다.

![vercel03](/images/post/vercel03.png)
