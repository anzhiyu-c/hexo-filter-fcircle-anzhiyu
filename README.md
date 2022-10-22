# hexo-filter-fcircle-anzhiyu

文章: [鱼塘朋友圈部署前端方案](https://anzhiy.cn/posts/3753.html)
特别鸣谢

| ID           | 站点                                                 | 备注                                                                       |
| :----------- | :--------------------------------------------------- | :------------------------------------------------------------------------- |
| 【冰】冰卡诺 | [小冰博客](https://zfe.space/)                       | 友链朋友圈理念奠基人，初代友链朋友圈方案作者（前后端），冰老师 YYDS        |
| 【糖】Akilar | [Akilar の糖果屋](https://akilar.top)                | 历代朋友圈前端方案、插件方案编写者。（自己鸣谢自己有点不好意思啊）         |
| 【红】heo    | [HEO](https://blog.zhheo.com/)                       | 友链朋友圈视觉设计，UI 方案多样化                                          |
| 【茶】贰猹   | [贰猹の小窝](https://noionion.top/)                  | 友链朋友圈后端维护，3.0 方案编写者，多主题友链抓取适配，朋友圈售后中流砥柱 |
| RaXianch     | [快乐咸鱼の RaXianch 窝](https://blog.raxianch.moe/) | 友链朋友圈后端维护，多主题友链抓取适配                                     |
| Akilar       | [Akilar](https://akilar.top/posts/8480b91c/)         | 店长 yyds，店长插件方案。                                                  |
| HEO          | [HEO](https://blog.zhheo.com/)                       | 洪哥前端方案样式                                                           |

# 安装

1. 安装插件，在博客根目录`[Blogroot]`下打开终端，运行以下指令（与旧版前端方案不兼容，如有安装旧版请先卸载）：

   ```bash
   npm uninstall hexo-butterfly-fcircle --save
   npm uninstall hexo-filter-fcircle --save
   npm install hexo-filter-fcircle-anzhiyu --save
   ```

2. 添加配置信息
   在站点配置文件`_config.yml`或者主题配置文件例如`_config.butterfly.yml`中添加

```yml
# fcircle
# see https://anzhiy.cn/posts/3753.html
fcircle:
  enable: true #控制开关
  apiurl: https://friends.anzhiy.cn/ #api地址
  initnumber: 30 #【可选】页面初始化展示文章数量
  stepnumber: 30 #【可选】每次加载增加的篇数
  css: https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu@1.1.5/assets/css/default.css #【可选】开发者接口，自定义css链接
  js: https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu@1.1.5/assets/js/fcircle.js #【可选】开发者接口，自定义js链接
  fetchJs: https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu@1.1.5/assets/js/fetch.js
  randomFriendsPostJS: https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu@1.1.5/assets/js/random-friends-post.js
  topIcon: fas fa-arrow-right
  topLink: /about/
  top_background: https://image.anzhiy.cn/adminuploads/1/2022/08/21/630249e2df20f.jpg
  path: /fcircle #【可选】fcircle的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html
  front_matter: #【可选】fcircle页面的 front_matter 配置
    title: 朋友圈
    comments: false
    aside: false
    top_img: false
```

3. 参数释义

| 参数                | 备选值/类型 | 释义                                                                                |
| :------------------ | :---------- | :---------------------------------------------------------------------------------- |
| enable              | true/false  | 控制开关                                                                            |
| apiurl              | URL         | api 链接，配置教程参看[后端部署文档](https://fcircle-doc.js.cool/#/backenddeploy)   |
| initnumber          | number      | 【可选】填写阿拉伯数字，页面展示文章数量，默认 20                                   |
| stepnumber          | number      | 【可选】填写阿拉伯数字，每次加载增加的篇数，默认 10                                 |
| error_img           | URL         | 【可选】头像图片加载失败时的默认头像                                                |
| css                 | URL         | 【可选】开发者接口，自定义 css 链接                                                 |
| js                  | URL         | 【可选】开发者接口，自定义 js 链接                                                  |
| fetchJs             | URL         | 可选】开发者接口，自定义 fetchJs 链接                                               |
| randomFriendsPostJS | URL         | 可选】开发者接口，自定义 randomFriendsPostJS 链接                                   |
| path                | string      | 【可选】字符串，fcircle 的路径名称。默认为 fcircle，生成的页面为 fcircle/index.html |
| topIcon             | string      | 【可选】字符串，顶部按钮的图标类名                                                  |
| topLink             | URL         | 【可选】字符串，顶部按钮点击跳转的链接（仅支持 pjax 跳转）                          |
| front_matter        | object      | 【可选】写法见上文示例，fcircle 页面的 front_matter 配置                            |
| top_background      | URL         | 【可选】字符串，页面顶部模块背景图                                                  |

4. 颜色说明, 该项目中 css 使用了 css 变量, 添加变量 css 如下, 您可自行修改。

```css
/* 颜色 */
:root {
  --anzhiyu-theme-op: #4259ef23;
  --anzhiyu-gray-op: #9999992b;
  --anzhiyu-theme-top: var(--anzhiyu-theme);
  --anzhiyu-white: #fff;
  --anzhiyu-white-op: rgba(255, 255, 255, 0.2);
  --anzhiyu-black: #000;
  --anzhiyu-black-op: rgba(0, 0, 0, 0.2);
  --anzhiyu-none: rgba(0, 0, 0, 0);
  --anzhiyu-gray: #999999;
  --anzhiyu-yellow: #ffc93e;
  --anzhiyu-border-radius: 8px;
  --anzhiyu-main: var(--anzhiyu-theme);
  --anzhiyu-main-op: var(--anzhiyu-theme-op);
  --anzhiyu-shadow-theme: 0 8px 12px -3px var(--anzhiyu-theme-op);
  --anzhiyu-shadow-main: 0 8px 12px -3px var(--anzhiyu-main-op);
  --anzhiyu-shadow-blue: 0 8px 12px -3px rgba(40, 109, 234, 0.2);
  --anzhiyu-shadow-white: 0 8px 12px -3px rgba(255, 255, 255, 0.2);
  --anzhiyu-shadow-black: 0 0 12px 4px rgba(0, 0, 0, 0.05);
  --anzhiyu-shadow-yellow: 0px 38px 77px -26px rgba(255, 201, 62, 0.12);
  --anzhiyu-shadow-red: 0 8px 12px -3px #ee7d7936;
  --anzhiyu-shadow-green: 0 8px 12px -3px #87ee7936;
  --anzhiyu-shadow-border: 0 8px 16px -4px #2c2d300c;
  --anzhiyu-shadow-blackdeep: 0 2px 16px -3px rgba(0, 0, 0, 0.15);
  --anzhiyu-logo-color: linear-gradient(215deg, #4584ff 30%, #ff7676 70%);
  --style-border: 1px solid var(--anzhiyu-card-border);
  --anzhiyu-blue-main: #425aef;
  --style-border-hover: 1px solid var(--anzhiyu-main);
  --style-border-dashed: 1px dashed var(--anzhiyu-theme-op);
  --style-border-avatar: 4px solid var(--anzhiyu-background);
  --style-border-always: 1px solid var(--anzhiyu-card-border);
  --anzhiyu-white-acrylic1: #fefeff !important;
  --anzhiyu-white-acrylic2: #fcfdff !important;
  --anzhiyu-black-acrylic2: #08080a !important;
  --anzhiyu-black-acrylic1: #0b0b0e !important;
  --anzhiyu-main-none: #b8b8b800 !important;
}

[data-theme="light"] {
  --anzhiyu-theme: #425aef;
  --anzhiyu-theme-op: #4259ef23;
  --anzhiyu-blue: #425aef;
  --anzhiyu-red: #d8213c;
  --anzhiyu-pink: #ff7c7c;
  --anzhiyu-green: #57bd6a;
  --anzhiyu-fontcolor: #363636;
  --anzhiyu-background: #f7f9fe;
  --anzhiyu-reverse: #000;
  --anzhiyu-maskbg: rgba(255, 255, 255, 0.6);
  --anzhiyu-maskbgdeep: rgba(255, 255, 255, 0.85);
  --anzhiyu-hovertext: var(--anzhiyu-theme);
  --anzhiyu-ahoverbg: #f7f7fa;
  --anzhiyu-lighttext: var(--anzhiyu-main);
  --anzhiyu-secondtext: rgba(60, 60, 67, 0.6);
  --anzhiyu-scrollbar: rgba(60, 60, 67, 0.4);
  --anzhiyu-card-btn-bg: #edf0f7;
  --anzhiyu-post-blockquote-bg: #fafcff;
  --anzhiyu-post-tabs-bg: #f2f5f8;
  --anzhiyu-secondbg: #edf0f7;
  --anzhiyu-shadow-nav: 0 5px 12px -5px rgba(102, 68, 68, 0.05);
  --anzhiyu-card-bg: #fff;
  --anzhiyu-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-card-border: #c0c6d8;
}

[data-theme="dark"] {
  --global-bg: #191919;
  --anzhiyu-theme: #0084ff;
  --anzhiyu-theme-op: #0084ff23;
  --anzhiyu-blue: #0084ff;
  --anzhiyu-red: #ff3842;
  --anzhiyu-pink: #ff7c7c;
  --anzhiyu-green: #57bd6a;
  --anzhiyu-fontcolor: #f7f7fa;
  --anzhiyu-background: #18171d;
  --anzhiyu-reverse: #fff;
  --anzhiyu-maskbg: rgba(0, 0, 0, 0.6);
  --anzhiyu-maskbgdeep: rgba(0, 0, 0, 0.85);
  --anzhiyu-hovertext: #0a84ff;
  --anzhiyu-ahoverbg: #fff;
  --anzhiyu-lighttext: #f2b94b;
  --anzhiyu-secondtext: #a1a2b8;
  --anzhiyu-scrollbar: rgba(200, 200, 223, 0.4);
  --anzhiyu-card-btn-bg: #30343f;
  --anzhiyu-post-blockquote-bg: #000;
  --anzhiyu-post-tabs-bg: #121212;
  --anzhiyu-secondbg: #30343f;
  --anzhiyu-shadow-nav: 0 5px 20px 0px rgba(28, 28, 28, 0.4);
  --anzhiyu-card-bg: #1d1b26;
  --anzhiyu-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-card-border: #42444a;
}
```
