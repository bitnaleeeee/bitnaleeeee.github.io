---
layout: post
title: "[React] React-Query 상태관리"
date: 2023-02-08 18:00:59
modified: 2023-02-08 18:00:59
tag: [React, CRUD, React-query]
---

웹 개발에 있어서 상태란 주어진 시간에 대해 시스템을 나타내는 것으로 언제든지 변경될 수 있는 것. 즉 문자열, 배열, 객체 등의 형태로 응용 프로그램에 저장된 데이터를 의미한다.

## 상태 관리
상태 관리라는 것은 프로덕트 규모가 커짐에 따라 많은 양의 데이터를 어떻게 효율적으로 관리할 것인가에 대한 다양한 방법론을 의미한다. 

### `React-query` 의 등장
데이터의 주체(Ownership)가 Client인지 Server인지에 따라 관심사를 분리하여 각 특성에 맞게 효율적으로 상태를 관리 하자는 방법론에 맞춰 상태 관리 라이브러리인 `React-query`가 등장 하였다. `React-query`는 기존 상태 관리 라이브러리와 다르게 (`Redux`, `MobX`, `Recoil`..) Server State를 관리하기에 용이하다.

## `React-query`
`React-query`는 상태관리 영역 중, 서버의 상태 관리에 초점을 맞추고 있는 라이브러리이다. Server State는 말 그대로 CRUD를 통해 서버와 데이터 싱크를 맞추는 부분이라고 할 수 있다. `React-query`는 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 보다 쉽게 다룰 수 있도록 해준다.
### `CRUD`
Create(생성), Read(읽기 또는 인출), Update(갱신), Delete(삭제)의 약자로 사용자 인터페이스가 갖추어야 할 기본적인 기능이라고 할 수 있으며 주로 클라이언트와 서버가 데이터를 통신할때에 활용되는 개념이다. 
> 데이터 생성(Create), 데이터 읽기(Read), 데이터 갱신(Update), 데이터 삭제(Delete) > C.R.U.D

### `React-query` 시작하기
```javascript
$ npm install @tanstack/react-queryㄱ
$ npm install @tanstack/react-query-devtools
```
아래와 같이 `import` 시켜준 후 사용하면 된다.
```javascript
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <App />
    </QueryClientProvider>
);
```

