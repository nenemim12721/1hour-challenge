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
