"use strict";

const pug = require("pug");
const path = require("path");
const urlFor = require("hexo-util").url_for.bind(hexo);
const util = require("hexo-util");
hexo.extend.generator.register("fcircle", function (locals) {
  const config = hexo.config.fcircle || hexo.theme.config.fcircle;

  if (!(config && config.enable)) return;

  const data = {
    theme: config.theme,
    apiurl: urlFor(config.apiurl), //api地址
    initnumber: config.initnumber ? config.initnumber : 30, //页面展示文章数量
    stepnumber: config.stepnumber ? config.stepnumber : 30, //每次加载增加的篇数
    error_img: config.error_img
      ? urlFor(config.error_img)
      : "https://npm.elemecdn.com/akilar-candyassets/image/404.gif",
    fcircleCss: config.css
      ? urlFor(config.css)
      : "https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu/assets/css/default.css",
    fcircleJs: config.js
      ? urlFor(config.js)
      : "https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu/assets/js/fcircle.js",
    fetchJs: config.fetchJs
      ? urlFor(config.fetchJs)
      : "https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu/assets/js/fetch.js",
    randomFriendsPostJS: config.randomFriendsPostJS
      ? urlFor(config.randomFriendsPostJS)
      : "https://npm.elemecdn.com/hexo-filter-fcircle-anzhiyu/assets/js/random-friends-post.js",
    topIcon: config.topIcon ? config.topIcon : "fas fa-arrow-right",
    topLink: config.topLink ? urlFor(config.topLink) : "/about/",
    top_background: config.top_background
      ? urlFor(config.top_background)
      : "https://image.anzhiy.cn/adminuploads/1/2022/08/21/630249e2df20f.jpg",
  };
  //渲染页面
  const content = pug.renderFile(path.join(__dirname, "./assets/html.pug"), data);
  //全局脚本资源
  const js_text = `<script>
    // 全局变量声明区域
    var fdata = {
      apiurl: '${data.apiurl}',
      initnumber: ${data.initnumber}, //【可选】页面初始化展示文章数量
      stepnumber: ${data.stepnumber}, //【可选】每次加载增加的篇数
      error_img: '${data.error_img}' //【可选，头像图片加载失败时的默认头像】
    }
    //存入本地存储
    localStorage.setItem("fdatalist",JSON.stringify(fdata))
    </script>
    <script data-pjax src="${data.fetchJs}"></script><script data-pjax src="${data.randomFriendsPostJS}"></script>`;

  // 注入全局脚本资源
  hexo.extend.injector.register("body_end", js_text, "default");

  const pathPre = config.path || "fcircle";

  let pageDate = {
    content: content,
    top_img: false,
  };

  if (config.front_matter) {
    pageDate = Object.assign(pageDate, config.front_matter);
  }

  return {
    path: pathPre + "/index.html",
    data: pageDate,
    layout: ["page", "post"],
  };
});
