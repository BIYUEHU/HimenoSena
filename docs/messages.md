# Leave Messages

- This Project adopts the GitHub Pull Request format for committing messages.
- 本プロジェクトは GitHub Pull Request 形式でメッセージを提出します。
- 本项目采用 GitHub Pull Request 形式提交留言。

## Rules

- Please leave messages in English, Japanese, or Chinese.
- メッセージは英語、日本語、または中国語で投稿してください。
- 留言内容请使用英文、日文或中文。

---

- Although the server is not located in China, domain names are still regulated by Chinese authorities, so please don't post any sensitive or unfavorable content about China.
- サーバーは中国に位置していませんが、ドメイン名は中国当局によって規制されているため、中国に関する敏感または不利なコンテンツは投稿しないでください。
<!-- - 尽管服务器不在中国，但域名仍然受到中国当局的监管，因此请不要发布任何关于中国的敏感或不利内容。 -->

---

- The messages should be related to **Himeno Sena**, and only welcome and allow people who like **Himeno Sena** to leave a message. Spammers, please get out.
- メッセージは**姬野星奏**に関連するものでなければならず、**姬野星奏**が好きな人のみがメッセージを残すことができます。スパマーは出て行ってください。
- 留言内容应与**姬野星奏**相关，只欢迎星奏厨进行留言，你可以在这留下你对星奏想说的任何话，或者发表感想，或者直接倾诉你的爱意！但星黑请自行滚出去。

---

- Generally, don't limit the number of messages, but please don't post too many messages in a short time. One message at a time is best.
- 基本的に、メッセージの数に制限はありませんが、短時間に大量のメッセージを投稿しないでください。一度に1つのメッセージが最適です。
- 一般不限制留言数量和字数，但请不要在短时间内发布过多留言，字数也不要多得太过分了（20 ~ 80 字最宜），一次一条最好。

## Steps

- Login to your GitHub account or register if you don’t have one.
- GitHubアカウントにログインするか、まだ登録していない場合は登録してください。
- 登录你的GitHub帐户或注册（如果尚未注册）。

---

- [Fork this repository](https://github.com/BIYUEHU/HimenoSena/fork) to your own account.
- [このリポジトリをFork](https://github.com/BIYUEHU/HimenoSena/fork) して自分のアカウントにコピーします。
- [Fork 本仓库](https://github.com/biyuehu/HimenoSena/fork) 到你自己的帐户。

---

- Open the repository which you forked on GitHub, then find the `/public/messages.json` file and edit it.
- GitHub上でフォークしたリポジトリを開き、`/public/messages.json` ファイルを見つけて編集してください。
- 打开你 Fork 的仓库，在 GitHub 上找到 `/public/messages.json` 文件并编辑它。

---

- Follow the previous format and append data at the end of the document before `]` finishes. Please make sure the new content format is correct.
- 前のフォーマットに従い、ドキュメントの末尾で `]` が閉じる前にデータを追加してください。新しい内容の形式が正しいことを確認してください。
- 按照前面的格式，在文档末尾和 `]` 结束之前追加数据。请确保新内容格式正确。

```json
[
 // ...
 {
  // ...
  // This is previous message
 }, // Previous message needs a "," after "}"
 {
  "msg": "Here write messages which you want to leave",
  "user": "Your GitHub account username (not display name)",
  "name": "Your name or alias. (It'll display at the Website)" // Do not add "," at the end of the last field
 } // Do not add "," here
]
```

For Chinese people：

- 除双引号内的内容外，双引号外的所有符号应使用英文符号，避免使用中文符号或全角符号。
- 无效符号：`，` `【` `“`
- 正确符号：`,` `[` `"`
- 你的留言内容不应包含换行符。
- 如果你输入的内容格式无效，你的 pull request 会自动关闭。

---

- Save the file and create a new pull request to this repository.
- ファイルを保存し、このリポジトリに新しいプルリクエストを作成します。
- 保存文件并创建一个新的 pull request 到本仓库。

---

- Wait for your pull request to be merged (You will receive a notification from GitHub). It usually takes a few hours to a day. Most after 30 minutes of your pull request being merged (this is time of server cache updating), you will probably see your messages on the website.
- プルリクエストがマージされるのを待ちます（GitHubから通知が届きます）。通常、数時間から1日程度かかります。プルリクエストがマージされた後、通常30分以内（サーバーキャッシュの更新時間）で、ウェブサイトでメッセージが表示されるでしょう。
- 等待你的 pull request 被合并（你将收到 GitHub 的通知邮件）。通常需要几个小时到一天的时间。最多在 pull request 被合并后的 30 分钟后（服务器缓存更新间隔），你将可能在网站上看到你的留言。
