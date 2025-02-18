// ==UserScript==
// @name        🔥🔥🔥🔥文库文本选中复制🔥🔥🔥🔥
// @description 解除网站不允许复制的限制，文本选中后点击复制按钮即可复制，主要用于 百度文库 道客巴巴 腾讯文档 豆丁网 无忧考网 学习啦 蓬勃范文 思否社区 力扣 知乎 语雀 等
// @namespace         *://kaysar.top/vip/wenkufuzhi/
// @supportURL        *://kaysar.top/vip/wenkufuzhi/
// @homepage          *://kaysar.top/
// @supportURL        *://kaysar.top/vip/wenkufuzhi/
// @updateURL         *://kaysar.top/vip/wenkufuzhi/fuzhi.user.js
// @downloadURL       *://kaysar.top/vip/wenkufuzhi/fuzhi.user.js
// @version     1.0.1
// @author      kaysar
// @match       *://wenku.baidu.com/view/*
// @match       *://wenku.baidu.com/share/*
// @match       *://wenku.baidu.com/link*
// @match       *://wenku.baidu.com/aggs/*
// @match       *://wenku.baidu.com/view/*
// @match       *://wenku.baidu.com/share/*
// @match       *://wenku.baidu.com/link*
// @match       *://wenku.baidu.com/aggs/*
// @match       *://wenku.baidu.com/ndPureView/*
// @match       *://www.51test.net/show/*
// @match       *://www.xuexi.la/*
// @match       *://www.xuexila.com/*
// @match       *://www.cspengbo.com/*
// @match       *://*.doc88.com/*
// @match       *://segmentfault.com/*
// @match       *://wk.baidu.com/view/*
// @match       *://leetcode-cn.com/problems/*
// @match       *://www.zhihu.com/*
// @match       *://z.30edu.com.cn/*
// @match       *://docs.qq.com/doc/*
// @match       *://boke112.com/post/*
// @match       *://www.yuque.com/*
// @match       *://www.commandlinux.com/*
// @match       *://*.diyifanwen.com/*
// @match       *://*.mbalib.com/*
// @match       *://*.cnitpm.com/*
// @match       *://bbs.mihoyo.com/ys/*
// @match       *://*.ruiwen.com/*
// @match       *://www.uemeds.cn/*
// @match       *://www.oh100.com/*
// @match       *://www.aiyuke.com/news/*
// @match       *://www.fwsir.com/*
// @match       *://www.wenxm.cn/*
// @match       *://www.unjs.com/*
// @match       *://www.ahsrst.cn/*
// @match       *://*.yjbys.com/*
// @match       *://*.qidian.com/*
// @match       *://*.zongheng.com/*
// @match       *://*.17k.com/*
// @match       *://*.ciweimao.com/*
// @match       *://book.qq.com/*
// @match       *://*.360doc.com/content/*
// @match       *://*.850500.com/news/*
// @match       *://utaten.com/lyric/*
// @match       *://*.jianbiaoku.com/*
// @match       *://*.kt250.com/*
// @match       *://www.kejudati.com/*
// @match       *://*.xiaohongshu.com/discovery/*
// @match       *://*.baibeike.com/*
// @match       *://*.blog.csdn.net/*
// @match       *://*.bilibili.com/read/*
// @match       *://*.cnki.net/KXReader/*
// @match       *://*.cnrencai.com/*
// @match       *://*.kodiplayer.cn/*
// @match       *://tongxiehui.net/*
// @match       *://*.jianshu.com/p/*
// @match       *://*.linovelib.com/novel/*
// @match       *://*.wjx.cn/*
// @match       *://*.wjx.top/*
// @match       *://*.chazidian.com/*
// @match       *://*.juejin.cn/post/*
// @match       *://*.zgbk.com/ecph/*
// @match       *://*.wenmi.com/article/*
// @match       *://yuedu.baidu.com/*
// @match       *://www.inrrp.com.cn/*
// @match       *://fanyi.baidu.com/mtpe/*
// @match       *://www.shubaoc.com/*
// @match       *://blog.51cto.com/*
// @match       *://www.ximalaya.com/*
// @match       *://*.tianqi.com/*
// @match       *://*.xiexiebang.com/*
// @match       *://*.docin.com/*
// @match       *://*.ddwk8.cn/*
// @match       *://*.php.cn/*
// @match       *://cooco.net.cn/*
// @match       *://fanqienovel.com/*
// @match       *://*.mobiletrain.org/*
// @match       *://*.examcoo.com/*
// @match       *://*.rrdynb.com/*
// @match       *://*.fuwu7.com/*
// @match       *://*.xiangqiqipu.com/*
// @icon        //pic.imgdb.cn/item/66449ed60ea9cb1403009d90.png
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_setClipboard
// ==/UserScript==

let dom = null;
let isReadyToHidden = false;

const instance = {
  id: "__copy",
  className: "__copy-button",
  getInstance: function () {
    if (dom === null) {
      const container = document.createElement("div");
      container.id = this.id;
      container.className = this.className;
      container.innerText = "复制";
      container.style.cssText = `
        padding: 10px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 5px;
        position: absolute;
        cursor: pointer;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      container.addEventListener("mouseup", (e) => e.stopPropagation(), true);
      container.addEventListener("mousedown", (e) => e.stopPropagation(), true);
      dom = container;
      document.body.appendChild(dom);
    }
    return dom;
  },
  show: function (event) {
    if (isReadyToHidden)
      return void 0;
    const dom2 = this.getInstance();
    dom2.style.left = `${event.pageX + 30}px`;
    dom2.style.top = `${event.pageY}px`;
    dom2.style.opacity = "1";
    dom2.onclick = () => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        navigator.clipboard.writeText(selectedText).then(() => {
          alert("复制成功！");
        }).catch(err => {
          console.error('无法复制文本: ', err);
          alert("复制失败，请手动复制。");
        });
      }
    };
  },
  hide: function () {
    const dom2 = this.getInstance();
    dom2.style.opacity = "0";
  }
};

document.addEventListener("mouseup", (event) => {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
    instance.show(event);
  } else {
    instance.hide();
  }
});

document.addEventListener("mousedown", () => {
  instance.hide();
});

document.addEventListener("DOMContentLoaded", () => {
  GM_addStyle(`
    #copy-btn-wk {
      padding: 10px;
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      left: 0;
      top: 40%;
      cursor: pointer;
      color: #fff;
      z-index: 99999;
    }
  `);
  dom$1.append("body", "<div id='copy-btn-wk'>复制</div>");
  const btn = dom$1.query("#copy-btn-wk");
  btn && (btn.onclick = render);
});