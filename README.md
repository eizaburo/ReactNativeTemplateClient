## RNTempClient

### 概要

ReactNativeを利用したクライアント（アプリ）のテンプレート。
アプリに共通な基本機能をダミー実装している。なお、本番利用のためにはサーバ側を実装し連携することを前提としている。

実装している機能は以下の通り。

* 会員登録（サインアップ）
* ログイン（サインイン）
  * セッションの管理（AsyncStore利用）
* パスワード忘れ

## セットアップ

以下で動くはず。

1. clone
1. npm install
1. expo start

### Tag

なお、このリポジトリにはTagが切られています。

1-1: 初期状態
1-2: screenを作成しHomeを表示
1-3: Navigation構造作成
1-4: デザイン適用とリンク設置
1-5: パスワード忘れボタン＋画面を追加
1-6: Formikを導入し最低限のバリデーション
1-7: ダミー認証実装
1-8: Reduxの導入。サインインユーザー情報を更新しProfileに表示

### 比較

各Tag間の比較は下記で見られます。

* [1-1と1-2](https://github.com/eizaburo/ReactNativeTemplateClient/compare/2ec173fe48663b0a80e51ebb7debb572cb21baaa...c1d34177071e978a560df82a832c698c971122ce)
* [1-2と1-3](https://github.com/eizaburo/ReactNativeTemplateClient/compare/c1d34177071e978a560df82a832c698c971122ce...6f63bbf8854a90eeb688c1f531536d3624860ff6)
* [1-3と1-4](https://github.com/eizaburo/ReactNativeTemplateClient/compare/6f63bbf8854a90eeb688c1f531536d3624860ff6...dbe4e36f228f8f0090b43829b52862f052ce8d92)
* [1-4と1-5](https://github.com/eizaburo/ReactNativeTemplateClient/compare/dbe4e36f228f8f0090b43829b52862f052ce8d92...df329bbd9def1738de667ca3b356410990d28565)
* [1-5と1-6](https://github.com/eizaburo/ReactNativeTemplateClient/compare/df329bbd9def1738de667ca3b356410990d28565...b8a0bf8f4d41eccbc96e591b347b8ef5fceccb58)
* [1-6と1-7](https://github.com/eizaburo/ReactNativeTemplateClient/compare/b8a0bf8f4d41eccbc96e591b347b8ef5fceccb58...3ef0cb67bda364f4df16fec3c4f88af21c6cda2b)
* [1-7と1-8](https://github.com/eizaburo/ReactNativeTemplateClient/compare/3ef0cb67bda364f4df16fec3c4f88af21c6cda2b...7fadd95750714dcccec17a2f1e9722f844fe0b3b)


### 改善点

* セッション管理に改善の余地あり

### 備考

いちおうサーバ側はLaravelとの連携を想定。