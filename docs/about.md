# 我做了一个姬野星奏的专属网站

很高兴你能看到这里来，该文章本是应发布在我的 [个人博客](https://hotaru.icu) 上的，但奈何博客 [正在重构中](https://github.com/biyuehu/romi-blog)，还不能完全正常使用，所以暂时放到 GitHub 上了。

## 关于域名 `himeno-sena.com`

首先无论如何想给这域名的前一位所有者道个歉，还请原谅我在该域名被删除后第一时间进行了抢注。我震惊于星奏厨厨力之高，截止 2024 年末，当我检索其它几位我所熟知的角色时，其域名都没有注册，唯独星奏的域名 `himenosena.com`、`himenosena.net`、`himeno-sena.com` 均已注册，而域名 `himeno-sena.com` 特别之处就在于它的前身，它是这三域名中唯一有网站在正常运行的，另外两者虽未过期但都没有进行解析（鉴定为恶意抢注），第一次发现这网站大概是 2024 年 6 月份左右，在 Google 中闲来无事输入了「himeno sena」于是就自然而然地点进了这个网站。看到的时候不禁会心一笑，原来从不缺少如此深爱这一角色的人，以至于愿意单独买个专属域名做一个专属网站，依稀记得当时那个网站布局是一固定的背景图片 + 标题 + 一小段文字（`星奏一定会回来的`） + 一堆 CG 图片循环轮番，我的个人站 [m.hotaru.icu](https://m.hotaru.icu) 那时就引用了该网站的 CG 图片作为背景，因此这一域名背后的网站历史在我看来也是其意义非凡的原因之一。然而在今年（2025 年）年初时，我发现我个人站上引用的背景图片失效，起初以为是对方开启了图片防盗，结果一点发现无法访问，估摸着应该是域名到期了，之后我也没有过多在意。

![whois](./imgs/1.png)

但直到二月七号仍然无法访问该网站，于是就顺手查了下域名 whois 信息，发现已经过期三个月并进入了 pending delete 状态，并且用 DropCatch 搜了下发现十分碰巧，删除日期是三天后的 `2025-02-11 02:45:00`，于是就准备一举拿下，但抱着小心行事的态度，决定 11 号当晚连夜进行注册。

![删除倒计时](./imgs/2.png)

不过中间发生了点小插曲，在 DropCatch 眼睁睁看着域名进入删除倒计时后，明明已经被删除但国内各大云服务商仍然显示已被注册，心想是 DNS 缓存数据没有更新，当时花了二十分钟左右的时间把 whois 查询按钮按爆了都没有更新信息，无济于事后决定每隔一小时订个闹钟起来看看是否有更新（生怕没得手）。不过很幸运，在四点的时候 whois 信息就已更新，成功拿下了该域名，当时兴奋得半小时都没睡着，心想怎么设计网站（对于 Coder 来说写代码都是再简单不过的小事，唯独设计和美术这俩要咱命）。虽然到现在，`himeno-sena.top` 等后缀域名都没有注册，似乎我大可以选择其他后缀的域名，但事实上两者完全不一样，以角色名字作为域名最重要的就是其代表意义，我想拿下该域名也是出于想做星奏的专属网站，既然是专属的那就更需要有代表意义，显然 `.com` 是最具代表性的（想想某个像素游戏的官网域名因为是 `.net`，导致每天都有大量不知情的玩家误入 `.com`）。同时也如上面所提到的，这个域名背后的网站一直都在持续运行，现在既然到期了（加上前所有者似乎并不打算续费？），那么我自然可以争取一下接过这把火炬，以免落入他手。

## 关于现网站

![前网站标题](./imgs/3.png)

即便是现在，当我在自己浏览器输入该域名发现还有缓存信息显示出了前身网站的标题，所以如你所见，为以表敬意现在我仍采用了与前身一模一样的网站标题 `Hello from himenosena's lover`。至于页面设计上，可能一定程度上借鉴了前身网站，但在我看来前身网站的功能有点简洁到简陋的地步（尽管这并非坏事）。开发本项目时我自始至终秉持着不过于简陋但又万不可花里胡哨的原则，最终加了点交互效果和内容显示，以及背景图片、语录定时切换、自动播放背景音乐、随机留言、设置等功能，但仍然不失简洁性和清爽感（不过最重要的、最有意义的我觉得是留言功能）。

## 关于项目技术栈

一开始是纯原生的 HTML + CSS +JavaScript 写的，尽管当时效果已大差不差，但对我来说还是太过屈辱，然后就开始折磨自己了。首先摒弃 Node.Js（因为这项目需求远没有复杂到需要依赖 Node.Js 生态里的工具链），转而用了 Deno，也算是一次实际开发应用，效果不差，开发服务器脚本和项目构建脚本都是自己写的。网站实现上用的是基于 Web Component 的 Lit 框架，优点在于可以尽可能地不用深入感受原生的 DOM 操作这种糟糕体验，同时又有接近原生实现的那种轻量感，毕竟要知道在 Lit 面前，其它那些前端明星框架可太重了。样式这块本打算用 UnoCSS，可惜这玩意对 Deno 几乎没有良好支持并且觉得不必引入太多 polyfill，于是就放弃转而手写 CSS 了（也就两百行上下，确实少）。至于后端？并不存在的（或者我不想称其为后端，那简直是侮辱），虽然写到后面确实有需求要靠服务器进行记录网站访问次数和同步留言数据，虽然肯定可以靠现成提供的服务实现，但对于一名 Coder 来讲这也是一种耻辱，可又确实没必要单独写个 HTTP 服务器还要占用一端口进行实现，于是迫不得已捡起令我嗤之以鼻的 PHP。一边用着较为新颖的 Deno、Web Component 这些 Web 技术，一边又用着 Web 旧时代遗老，想想也是够魔幻的。然后是关于留言的收集策略，一开始想直接把提交功能写在网站上，可觉得多此一举打算换成发邮件形式提交，但又一想发邮件既不好统计又没有什么纪念意义，加上毕竟都搁 GitHub 开源了，于是直接采用朴素的 Pull Request 形式。这意味着什么？意味着只要你成功提交了留言，你就可以在本仓库的贡献者名单看到你的名字，以至于可以直接视作为星厨名单。

## 关于星奏

说了这么多，最后回到本文章乃至本项目的主角——姬野星奏。时至今日（2025），距离第一次推完星奏 End 已过去两年之久（2023-7-5），明明不管是当时还是现在，推过的游戏都不算少，却仍然忘不掉，或者说一直都在爱着、一直都没有忘，究其原因自然还是新岛夕先生的文字和故事以及角色塑造的魅力，虽然有时因为见到太多无理的星黑让我在对待此事时可能有失偏颇，但不重要。至于结局？无论是现在还是在两年前结束 True End 时，我的观点都未曾改变，或者说那本来就是事实，就如我在网站的留言所说的那样，磨难遍尽、两情相悦后，有什么理由不相信等待着的是回忆过后的美好续篇呢？虽然这点我很想强调，可又跟之前我在 [魔恋日杂谈视频](https://www.bilibili.com/video/BV1T2fGYTEQK) 里说的一样，新岛夕先生在作品中真正想表达的重点永远是「所爱之人不在后要学会成长，而非止步不前，同时要珍惜眼前人」，新岛夕先生所描绘的缺憾美和理想主义者的浪漫确实并非所有人都能体会，因未能理解而口出暴论的愚民也不少，这不怪他们，就当是个人品味高低的一种自然选择，这丝毫不妨碍我喜欢着这位角色，同时也是我做这项目的初衷，希望能够让所有喜欢星奏的人能以这种方式齐聚一堂。再次欢迎各位 [前来留言](https://github.com/biyuehu/HimenoSena/blob/main/docs/messages.md)。
