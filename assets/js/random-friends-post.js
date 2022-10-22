"use strict";
// const friendDataList = JSON.parse(localStorage.getItem("fdatalist"));
var frdata = { apiurl: fdata.apiurl, defaultFish: 100, hungryFish: 100 };
if ("undefined" != typeof frdataUser) for (var key in frdataUser) frdataUser[key] && (frdata[key] = frdataUser[key]);
var randomPostTimes = 0,
  randomPostWorking = !1,
  randomPostTips = [
    "钓到了绝世好文！",
    "在河边打了个喷嚏，吓跑了",
    "你和小伙伴抢夺着",
    "你击败了巨龙，在巢穴中发现了",
    "挖掘秦始皇坟时找到了",
    "在路边闲逛的时候随手买了一个",
    "从学校班主任那拿来了孩子上课偷偷看的",
    "你的同桌无情的从你的语文书中撕下了那篇你最喜欢的",
    "考古学家近日发现了",
    "外星人降临地球学习地球文化，落地时被你塞了",
    "从图书馆顶层的隐秘角落里发现了闪着金光的",
    "徒弟修炼走火入魔，为师立刻掏出了",
    "在大山中唱山歌，隔壁的阿妹跑来了，带着",
    "隔壁家的孩子数学考了满分，都是因为看了",
    "隔壁家的孩子英语考了满分，都是因为看了",
    "小米研发了全新一代MIX手机，据说灵感",
    "修炼渡劫成功，还好提前看了",
    "库克坐上了苹果CEO的宝座，因为他面试的时候看了",
    "阿里巴巴大喊芝麻开门，映入眼帘的就是",
    "师傅说练武要先炼心，然后让我好生研读",
    "科考队在南极大陆发现了被冰封的",
    "飞机窗户似乎被一张纸糊上了，仔细一看是",
    "历史上满写的仁义道德四个字，透过字缝里却全是",
    "十几年前的录音机似乎还能够使用，插上电发现正在播的是",
    "新版语文书拟增加一篇熟读并背诵的",
    "经调查，99%的受访者都没有背诵过",
    "今年的高考满分作文是",
    "唐僧揭开了佛祖压在五指山上的",
    "科学家发现能够解决衰老的秘密，就是每日研读",
    "英特尔发布了全新的至强处理器，其芯片的制造原理都是",
    "新的iPhone产能很足，新的进货渠道是",
    "今年亩产突破了八千万斤，多亏了",
    "陆隐一统天上宗，在无数祖境高手的目光下宣读了",
    "黑钻风跟白钻风说道，吃了唐僧肉能长生不老，他知道是因为看了",
    "上卫生间没带纸，直接提裤跑路也不愿意玷污手中",
    "种下一篇文章就会产生很多很多文章，我种下了",
    "三十年河东，三十年河西，莫欺我没有看过",
    "踏破铁血无觅处，得来全靠",
    "今日双色球中了两千万，预测全靠",
    "因为卷子上没写名字，老师罚抄",
    "为了抗议世间的不公，割破手指写下了",
    "在艺术大街上被贴满了相同的纸，走近一看是",
    "这区区迷阵岂能难得住我？其实能走出来多亏了",
    "今日被一篇文章顶上了微博热搜，它是",
    "你送给乞丐一个暴富秘籍，它是",
    "UZI一个走A拿下五杀，在事后采访时说他当时回想起了",
    "科学家解刨了第一个感染丧尸病毒的人，发现丧尸抗体存在于",
    "如果你有梦想的话，就要努力去看",
    "决定我们成为什么样人的，不是我们的能力，而是是否看过",
    "有信心不一定会成功，没信心就去看",
    "你真正是谁并不重要，重要的是你看没看过",
    "玄天境重要的是锻体，为师赠你此书，好好修炼去吧，这是",
    "上百祖境高手在天威湖大战三天三夜为了抢夺",
    "这化仙池水乃上古真仙对后人的考校，要求熟读并背诵",
    "庆氏三千年根基差点竟被你小子毁于一旦，能够被我拯救全是因为我看了",
    "我就是神奇宝贝大师！我这只皮卡丘可是",
    "我就是神奇宝贝大师！我这只小火龙可是",
    "我就是神奇宝贝大师！我这只可达鸭可是",
    "我就是神奇宝贝大师！我这只杰尼龟可是",
    "上古遗迹中写道，只要习得此书，便得成功。你定睛一看，原来是",
    "奶奶的，玩阴的是吧，我就是双料特工代号穿山甲，",
    "你的背景太假了，我的就逼真多了，学到这个技术全是因为看了",
    "我是云南的，云南怒江的，怒江芦水市，芦水市六库，六库傈僳族，傈僳族是",
    "我真的栓Q了，我真的会谢如果你看",
    "你已经习得退退退神功，接下来的心法已经被记录在",
    "人生无常大肠包小肠，小肠包住了",
    "你抽到了普通文章，它是",
    "你收到了稀有文章，它是",
    "你抽到了金色普通文章，它是",
    "你抽到了金色稀有文章，它是",
    "你抽到了传说文章！它是",
    "哇！金色传说！你抽到了金色传说文章，它是",
    "报告！侦察兵说在前往300米有一个男子在偷偷看一本书，上面赫然写着",
    "芷莲姑娘大摆擂台，谁若是能读完此书，便可娶了她。然后从背后掏出了",
    "请问你的梦想是什么？我的梦想是能读到",
    "读什么才能增智慧？当然是读",
    "纳兰嫣然掏出了退婚书，可是发现出门带错了，结果拿出了一本",
    "你要尽全力保护你的梦想。那些嘲笑你的人，他们必定会失败，他们想把你变成和他们一样的人。如果你有梦想的话，就要努力去读",
    "走人生的路就像爬山一样，看起来走了许多冤枉的路，崎岖的路，但终究需要读完",
    "游戏的规则就是这么的简单，你听懂了吗？管你听没听懂，快去看",
  ],
  randomPostClick = 0;
function fetchRandomPost() {
  var s, o, r, t;
  console.log(frdata.apiurl),
    0 == randomPostWorking &&
      document.getElementById("random-post") &&
      ((randomPostWorking = !0),
      (s = randomPostTips[Math.floor(Math.random() * randomPostTips.length)]),
      (o = ""),
      (o =
        1e4 < randomPostTimes
          ? "愿者上钩"
          : 1e3 < randomPostTimes
          ? "俯览天下"
          : 1e3 < randomPostTimes
          ? "超越神了"
          : 100 < randomPostTimes
          ? "绝世渔夫"
          : 75 < randomPostTimes
          ? "钓鱼王者"
          : 50 < randomPostTimes
          ? "钓鱼宗师"
          : 20 < randomPostTimes
          ? "钓鱼专家"
          : 5 < randomPostTimes
          ? "钓鱼高手"
          : "钓鱼新手"),
      (document.getElementById("random-post").innerHTML =
        5 <= randomPostTimes ? "钓鱼中... （Lv." + randomPostTimes + " 当前称号：" + o + "）" : "钓鱼中..."),
      (r = randomNum(1e3, 3e3)),
      0 == randomPostTimes && (r = 0),
      (document.querySelector(".random-post-start").style.opacity = "0.2"),
      (randomPostWorking =
        (randomPostClick * frdata.hungryFish + frdata.defaultFish < randomPostTimes && 0 == Math.round(Math.random())
          ? (document.getElementById("random-post").innerHTML =
              "因为只钓鱼不吃鱼，过分饥饿导致本次钓鱼失败...(点击任意一篇钓鱼获得的文章即可恢复）")
          : ((t = frdata.apiurl + "randompost"),
            fetch(t)
              .then(function (o) {
                return o.json();
              })
              .then(function (o) {
                var t = o.title,
                  a = o.link,
                  n = o.author;
                document.querySelector("#random-post") &&
                  window.setTimeout(function () {
                    (document.getElementById("random-post").innerHTML =
                      s +
                      "来自友链 <b>" +
                      n +
                      '</b> 的文章：<a class="random-friends-post" onclick="randomClickLink()" target="_blank" href="' +
                      a +
                      '" rel="external nofollow">' +
                      t +
                      "</a>"),
                      (randomPostTimes += 1),
                      localStorage.setItem("randomPostTimes", randomPostTimes),
                      (document.querySelector(".random-post-start").style.opacity = "1");
                  }, r);
              })),
        !1)));
}
function initRandomPost() {
  document.querySelector(".random-post-start") &&
    localStorage.randomPostTimes &&
    ((randomPostTimes = parseInt(localStorage.randomPostTimes)),
    (randomPostClick = parseInt(localStorage.randomPostClick)),
    (document.querySelector(".random-post-start").style.transitionDuration = "0.3s"),
    (document.querySelector(".random-post-start").style.transform = "rotate(" + 360 * randomPostTimes + "deg)")),
    fetchRandomPost();
}
function randomClickLink() {
  (randomPostClick += 1), localStorage.setItem("randomPostClick", randomPostClick);
}
function randomNum(o, t) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * o + 1, 10);
    case 2:
      return parseInt(Math.random() * (t - o + 1) + o, 10);
    default:
      return 0;
  }
}
initRandomPost();