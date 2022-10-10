# 1hour-challenge
1時間でコーディングする専用のリポジトリ

## 開発環境
### 使用言語
 - React
 - sass
 - Typescript

### 実行環境
 - Docker

## タスク
- [ ] 環境構築
- [ ] アコーディオン作成
- [ ] スライダー作成
- [ ] モーダル作成
- [ ] その他面白いアニメーション
- [ ] Herokuに公開

### 参考記事
1. https://qiita.com/kashimuuuuu/items/b5f35057dfe1980d053a
2. https://knowledge.sakura.ad.jp/2210/#Docker_Hub-2

### 実行コマンド
```bash
docker-compose up -d
```

### エラーと解消方法
 1 `Error response from daemon: dial unix docker.raw.sock: connect: connection refused`

```
    ~/nameko_git/1hour-challenge main* 9s
    ❯ docker version
    Error response from daemon: dial unix docker.raw.sock: connect: connection refused
    Client:
    Cloud integration: v1.0.28
    Version:           20.10.17
    API version:       1.41
    Go version:        go1.17.11
    Git commit:        100c701
    Built:             Mon Jun  6 23:04:45 2022
    OS/Arch:           darwin/amd64
    Context:           default
    Experimental:      true
```
解決方法
Dockerにサインインできてなかったことが原因のため、サインインする

2 `denied: requested access to the resource is denied`
```
    ~/nameko_git/1hour-challenge main
    ❯ docker push 1hour-challenge_frontend:latest
    The push refers to repository [docker.io/library/1hour-challenge_frontend]
    3475b668e2e7: Preparing 
    8f2b79d5328d: Preparing 
    693214157724: Preparing 
    f2f715b72340: Preparing 
    9e8a8e4e0b92: Preparing 
    2fbabeba902e: Waiting 
    ee509ed6e976: Waiting 
    9177197c67d0: Waiting 
    7dbadf2b9bd8: Waiting 
    e7597c345c2e: Waiting 
    denied: requested access to the resource is denied
```
解決方法
