---
layout: post
title: "[Network] 포트(Port)"
date: 2022-07-01 16:10:00
modified: 2022-07-01 16:10:00
tag: [network, port]
---

## 포트(Port)

* 컴퓨터의 주변 장치와 연결하기 위한 연결단
* IP 내에서 프로세스 구분을 하기 위해 사용
* 쉽게 말해 각 프로토콜의 데이터가 통하는 논리적 통로
* 각 포트는 번호로 구별되며 이 번호를 포트 번호라고 함
* 포트 번호는 IP 주소와 함께 쓰여 해당하는 프로토콜에 의해 사용됨

## 포트 번호는 크게 세 종류로 구분된다.

* 0번 ~ 1023번: 잘 알려진 포트 (well-known port)
* 1024번 ~ 49151번: 등록된 포트 (registered port)
* 49152번 ~ 65535번: 동적 포트 (dynamic port)

## 잘 알려진 포트 번호의 대표적 예는 다음과 같다.

* 20 : FTP(data)
* 21 : FTP(제어)
* 22 : SSH
* 23 : 텔넷
* 53 : DNS
* 80 : 월드 와이드 웹 HTTP
* 119 : NNTP
* 443 : TLS/SSL 방식의 HTTP

## References
[포트 (컴퓨터 네트워킹)](https://ko.wikipedia.org/wiki/포트_(컴퓨터_네트워킹))  
[포트](https://namu.wiki/w/포트)  
