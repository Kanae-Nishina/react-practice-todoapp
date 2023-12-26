# React練習Todoアプリ作成
![React TODO App](https://github.com/Kanae-Nishina/react-practice-todoapp/assets/23026318/3d1852cb-fa12-42ea-aef4-4f054c26460a)


## サービスのURL
登録せずお試しいただけます。<br/>
なお、データ保存はすべてCookieを利用しています。<br/>
https://react-todo-app-90cf1.web.app/

## サービスへの想い
モダンJavaScriptの一つで人気の高いReactの勉強として、Udemy講座「【最新ver対応済】モダンJavaScriptの基礎から始める挫折しないためのReact入門」を受講し作成しました。<br/>
理解を深めること、Firebaseも使ってみたかったことから追加機能としてMattermostへの自動投稿を導入しました。<br/>
マークダウンに不慣れな方でも簡単にTODOをtimesに載せられれば活発になるのではないかとも考えております。
現在はMattermostにのみ対応中です。<br/>
なにより、スマホからマークダウンを打つのが思ったより手間がかかるとわかったので、スマホからでも楽にTODOをtimesに流せれば楽だという気持ちが強いです。

## 使用技術
| Category | Technology Stack |
| ---- | ---- |
| Frontend | React |
| Infrastructure | Firebase, Cloud Functions |
| etc. | ESLint, axios, react-modal, react-cookie, use-media, Git, GitHub |

## 今後追加予定の機能
- Discord、Slackへの投稿
- 振り返り向けの形式設定
- 学習時間を記入・保存
- 保存した学習時間を1日・週・合計で表示する

現在Cookieのみでデータを保存しておりますが、データベースと連携するかは検討中です。<br/>
またデータベースを利用する場合は認証システムを組み込みます。
