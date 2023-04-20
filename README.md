# study-rxjs
Study RxJS

# 0_0 npm init

```sh
npm init -y
npm --save rxjs
```

package.json に `"type": "module"` を足さないとエラーになるls
TypeScript とかだとどうなるんだろう..

# 0_1 最もシンプルなサンプルシンタックス

`Observable` を `Subscribe` するという関係性を理解しよう

# 0_2 setInterval で 継続的な Observe を実現

発火する中身を subscribe の後に実装したいのであれば、 `Subject` を使う方がやりやすそう(複数の subscribe を登録することもできる)

それ以外にも `asyncScheduler` を使う方法があるみたいだが、実装が若干ややこしい。利点がいまいちわからないので、Subjectでできないことがありそうなら改めて調べてみよう

# 0_3 map とかやってみよう

map ... ってなんだ？

map() function を使うことによって、データの加工などができるようになる。
Operator と呼ぶようだが、概念がかなりややこしい。

UIで複雑なことをさせたいときに使うような気配がする。

# 1_1 インスタンスのメソッドとして Observe できるようにしてみよう
