---
layout: post
title: "[GitHub] REAEME.md 에 기술블로그 최신 글 가져오기"
date: 2023-1-8 15:00:59
modified: 2023-1-8 15:00:59
tag: [git, gitHub]
---

GitHub READEME.md 에 기술블로그 최신 글을 자동으로 가져오고 READEME에 자동 작성되도록 하는 방법에 대해 간단히 정리하였다.

## GitHub Repository에 python 파일 만들기
레포지토리에 python 파일을 생성하여 아래 코드를 참고하여 URL 부분에 본인 기술 블로그 주소를 입력 후 /rss를 붙여주면 된다.

아래는 내 코드의 예시이다.

```javascript
import feedparser, time

URL = "https://bitnaleeeee.github.io/feed.xml"
RSS_FEED = feedparser.parse(URL)
MAX_POST = 5

markdown_text = """
## Enjoys solving problems and controlling flow with JavaScript
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fbitnaleeeee&count_bg=%23555555&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
## Recent Post 
"""  # list of blog posts will be appended here

for idx, feed in enumerate(RSS_FEED['entries']):
    if idx > MAX_POST:
        break
    else:
        feed_date = feed['published_parsed']
        markdown_text += f"[{time.strftime('%Y/%m/%d', feed_date)} - {feed['title']}]({feed['link']}) <br/>\n"
        
f = open("README.md", mode="w", encoding="utf-8")
f.write(markdown_text)
f.close()
```


## GitHub Acriotns 생성하기
Acrionts 클릭 > set up a workflow yourself 클릭 > main.yml 작성화면에서 아래와 같이 코드를 참고하여 수정해 주면 된다.

```javascript
# This workflow will install Python dependencies, run tests and lint with a single version of Python
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-python-with-github-actions

name: Python application

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule:
      - cron: "0 0 */1 * *"

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v3
      with:
        python-version: "3.10"
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install feedparser
    - name: Run Update Python Script
      run: |
        python main.py
    - name: Update README.md file
      run: | 
        git pull
        git add .
        git diff
        git config --local user.email "본인의 깃허브 이메일 입력"
        git config --local user.name "본인의 깃허브 이름 입력"
        git commit -m "Updating Blog Posts"
        git push
```
본인 깃허브 이메일 및 깃허브 이름을 올바르게 입력한 후 commmit 해주면
기술블로그의 최신 글을 README.md 자동 업데이트 할 수 있다. 