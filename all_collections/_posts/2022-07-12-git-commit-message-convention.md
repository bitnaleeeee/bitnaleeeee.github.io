---
layout: post
title: "[Git] 깃 커밋 메시지 컨벤션(Git Commit Message Convention)"
date: 2022-07-12 11:00:29
modified: 2022-07-12 11:00:29
tag: [git]
---

커밋 메시지는 타입, 제목, 본문(선택), 꼬리말(선택) 세 부분으로 작성한다.

* [타입(Type)] 제목(Title)
* 본문(Body)
* 꼬리말(Footer)

## 제목

* 커밋 메세지 제목의 맨 앞에 타입(Type)을 붙여준다. 각 타입의 종류는 아래와 같다.
    * 기능(feat): 새로운 기능을 추가
    * 버그(fix): 버그 수정
    * 리팩토링(refactor): 코드 리팩토링
    * 형식(style): 코드 형식, 정렬, 주석 등의 변경(동작에 영향을 주는 코드 변경 없음)
    * 테스트(test): 테스트 추가, 테스트 리팩토링(제품 코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
    * 문서(docs): 문서 수정(제품 코드 수정 없음)
    * 기타(chore): 빌드 업무 수정, 패키지 매니저 설정 등 위에 해당되지 않는 모든 변경(제품 코드 수정 없음)

* 총 글자 수는 50자 이내며 마지막에 마침표(.)를 붙이지 않는다.
* 커밋 유형들이 복합적인 경우 최대한 분리하여 커밋한다.

## 본문

* 본문은 한 줄당 72자 이하로 작성한다.
* 깃은 자동 줄바꿈을 지원하지 않으므로, 직접 줄바꿈을 해야 한다.
* 내용은 어떻게 변경하였는지 보다 무엇을, 왜 변경하였는지 설명한다.

## 꼬리말

* 바닥 글은 선택 사항이며 이슈 트래커 ID를 참조하는데 사용된다.

## References
[Git 사용 규칙 - Git commit 메시지](https://tttsss77.tistory.com/58)  
[Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide)  
[깃허브(GitHub)로 취업하기](https://sujinlee.me/professional-github)  
[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit)  
[좋은 git 커밋 메시지를 작성하기 위한 7가지 약속](https://meetup.toast.com/posts/106)

