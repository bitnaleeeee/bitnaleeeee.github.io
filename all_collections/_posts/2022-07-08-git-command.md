---
layout: post
title: "[Git] 깃 명령어"
date: 2022-07-08 12:00:23
modified: 2022-07-08 12:00:23
tag: [git]
---

자주 쓴 명령어 위주로 작성, 추후 계속 추가 예정

## 초기화

깃 초기화 : 기존 디렉토리를 git 저장소로 만든다.
```
$ git init
```

깃 상태 확인 : 현재 작업중인 브랜치와 파일 상태를 알려준다.
```
$ git status
```

## 설정

전역 사용자 이름 생성
```
$ git config --global user.name "your name"
```

전역 사용자 이메일 생성
```
$ git config --global user.email "your_email@youremail.com"
```

저장소별 사용자 이름 생성
```
$ git config user.name "your name"
```

저장소별 사용자 이메일 생성
```
$ git config user.email "your_email@youremail.com"
```

> 사용자 설정이 되어 있지 않으면 깃허브의 저장소에 커밋 이력 및 작성자의 아이콘도 ? 로 표시된다. 웬만하면 사용자 설정을 해주도록 하자

저장소 복제하기
```
$ git clone "url"
```

저장소 추가하기
```
$ git remote add origin "url"
```

로컬저장소가 바라보고 있는 저장소의 정보 확인
```
$ git remote -v
```

전역 설정 정보 조회
```
$ git config --global --list
```

저장소 정보 조회
```
$ git config --list
```

## 파일 추가 및 업로드

스테이지에 수정된 파일 업로드
```
$ git add 'file name'
```

스테이지에 수정된 모든 파일 업로드
```
$ git add .
```

커밋하기
```
$ git commit -m 'message'
```

원격 저장소에 업로드
```
$ git push origin master
```

원격 저장소에서 다운로드
```
$ git pull origin master
```

## 되돌리기

스테이지에 올라간 파일 전부 내리기
```
$ git reset
```

## 이력

모든 이력 보기
```
$ git log
```

이력 나가기
```
$ q
```

이력과 변경사항을 함께 보기
```
$ git log -p
```

## 브랜치

지역 브랜치 목록 보기
```
$ git branch
```

원격 저장소 브랜치 목록 보기
```
$ git branch -r
```

지역 브랜치 및 원격 저장소 모든 브랜치 목록 보기
```
$ git branch -a
```

브랜치 생성하기
```
$ git branch "branch name"
```

해당 브랜치로 체크아웃 하기
```
$ git checkout "branch name"
```

브랜치를 생성하고 생성된 체크아웃 하기
```
$ git checkout -b "branch name"
```

해당 브랜치 삭제하기
```
$ git branch -d "branch name"
```

해당 브랜치 강제 삭제하기
```
$ git branch -D "branch name"
```
