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


#### ローカル完結

* 1-1: 初期状態
* 1-2: screenを作成しHomeを表示
* 1-3: Navigation構造作成
* 1-4: デザイン適用とリンク設置
* 1-5: パスワード忘れボタン＋画面を追加
* 1-6: Formikを導入し最低限のバリデーション
* 1-7: ダミー認証実装
* 1-8: Reduxの導入。サインインユーザー情報を更新しProfileに表示

#### Laravel連携

* 2-1: サインインの実装
* 2-2: サインアップ機能の実装
* 2-3: サーバアクセス情報のパラメーター化
* 2-4: リセットメール送信
* 2-5: メール存在確認機能をパスワード忘れに実装
* 2-6: リセットメール送信ボタンにspinnerを追加
* 2-7: errorメッセージ領域によりフォームがずれるのを修正

### 比較

各Tag間の比較は下記で見られます。

#### ローカル完結

* [1-1と1-2](https://github.com/eizaburo/ReactNativeTemplateClient/compare/2ec173fe48663b0a80e51ebb7debb572cb21baaa...c1d34177071e978a560df82a832c698c971122ce)
* [1-2と1-3](https://github.com/eizaburo/ReactNativeTemplateClient/compare/c1d34177071e978a560df82a832c698c971122ce...6f63bbf8854a90eeb688c1f531536d3624860ff6)
* [1-3と1-4](https://github.com/eizaburo/ReactNativeTemplateClient/compare/6f63bbf8854a90eeb688c1f531536d3624860ff6...dbe4e36f228f8f0090b43829b52862f052ce8d92)
* [1-4と1-5](https://github.com/eizaburo/ReactNativeTemplateClient/compare/dbe4e36f228f8f0090b43829b52862f052ce8d92...df329bbd9def1738de667ca3b356410990d28565)
* [1-5と1-6](https://github.com/eizaburo/ReactNativeTemplateClient/compare/df329bbd9def1738de667ca3b356410990d28565...b8a0bf8f4d41eccbc96e591b347b8ef5fceccb58)
* [1-6と1-7](https://github.com/eizaburo/ReactNativeTemplateClient/compare/b8a0bf8f4d41eccbc96e591b347b8ef5fceccb58...3ef0cb67bda364f4df16fec3c4f88af21c6cda2b)
* [1-7と1-8](https://github.com/eizaburo/ReactNativeTemplateClient/compare/3ef0cb67bda364f4df16fec3c4f88af21c6cda2b...7fadd95750714dcccec17a2f1e9722f844fe0b3b)

#### Laravel連携

* [1-8と2-1](https://github.com/eizaburo/ReactNativeTemplateClient/compare/7fadd95750714dcccec17a2f1e9722f844fe0b3b...07631526a6d9a977ed5737caaf6a693a7b4470f6)
* [2-1と2-2](https://github.com/eizaburo/ReactNativeTemplateClient/compare/07631526a6d9a977ed5737caaf6a693a7b4470f6...3bbba882dd17cfed87877d2f124f52394c29e670)
* [2-2と2-3](https://github.com/eizaburo/ReactNativeTemplateClient/compare/3bbba882dd17cfed87877d2f124f52394c29e670...dcc23d92ccc1ec68660287483e769d627f352c1a)
* [2-3と2-4](https://github.com/eizaburo/ReactNativeTemplateClient/compare/dcc23d92ccc1ec68660287483e769d627f352c1a...9e8b26253d72a6da1fc01348f323e498732021de)
* [2-4と2-5](https://github.com/eizaburo/ReactNativeTemplateClient/compare/9e8b26253d72a6da1fc01348f323e498732021de...3b17be92f1aa4cb31b2eb846aaefded4d4024bde)
* [2-5と2-6](https://github.com/eizaburo/ReactNativeTemplateClient/compare/3b17be92f1aa4cb31b2eb846aaefded4d4024bde...ffa9fa96c354440a1548fb6d65ec9952985e879e)
* [2-6と2-7](https://github.com/eizaburo/ReactNativeTemplateClient/compare/ffa9fa96c354440a1548fb6d65ec9952985e879e...09bf4b6100169f8f7c9944bd047c3a1b20c60072)


### 改善点

* セッション管理に改善の余地あり

### 備考

いちおうサーバ側はLaravelとの連携を想定。