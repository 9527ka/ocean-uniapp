(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabs-home"],{2609:function(t,i,a){t.exports=a.p+"static/index/WELCOME TO SXF.png"},3805:function(t,i,a){t.exports=a.p+"static/index/top.png"},"63f8":function(t,i,a){"use strict";a.r(i);var e=a("73e3"),n=a("da60");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("e4c0");var o=a("828b"),l=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"f831bad2",null,!1,e["a"],void 0);i["default"]=l.exports},"73e3":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop,"scroll-with-animation":!0},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.handleScroll.apply(void 0,arguments)}}},[e("v-uni-view",{class:t.isHeader?"header flex blur":"header flex"},[e("v-uni-image",{staticClass:"header_le",attrs:{src:a("7f5c"),mode:""}}),e("v-uni-view",{staticClass:"header_ri"},[e("v-uni-view",{staticClass:"header_ri_lang",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage("/pages/account/lang")}}},[e("v-uni-image",{attrs:{src:a("70bf")("./"+(t.langUrl||"English")+".png"),mode:""}}),e("v-uni-text",[t._v(t._s(t.lang||"English"))]),e("svg",{staticClass:"icon",attrs:{t:"1722838597937",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5086",width:"200",height:"200"}},[e("path",{attrs:{d:"M246.784 336.457143h530.432a14.628571 14.628571 0 0 1 12.214857 22.674286l-265.289143 397.897142a14.628571 14.628571 0 0 1-24.283428 0L234.569143 359.131429a14.628571 14.628571 0 0 1 12.214857-22.674286z","p-id":"5087",fill:"#ffffff"}})])],1),e("v-uni-view",{staticClass:"header_ri_user",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage("/pages/tabs/account")}}},[t._v(t._s(t.$t("home.text1")))]),e("v-uni-image",{staticClass:"header_ri_list",attrs:{src:a("1a77"),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage("/pages/home/nav","nav=HOME")}}})],1)],1),e("v-uni-view",{staticClass:"top",attrs:{id:"top"}},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-image",{attrs:{src:a("2609"),mode:""}})],1)],1),e("v-uni-view",{staticClass:"idt"},[e("v-uni-view",{staticClass:"idt_text"},[t._v(t._s(t.$t("home.text2")))]),e("v-uni-view",{staticClass:"idt_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage("/pages/home/join")}}},[t._v(t._s(t.$t("home.text3")))]),e("v-uni-view",{staticClass:"idt_about"},[t._v(t._s(t.$t("home.text4"))),e("Webto")],1)],1),e("v-uni-view",{staticClass:"Our"},[e("v-uni-view",{staticClass:"Our_text"},[t._v(t._s(t.$t("home.ourtext1")))]),e("v-uni-view",{staticClass:"Our_list"},t._l(t.Plants.lists,(function(i){return e("v-uni-view",{key:i.id,staticClass:"Our_list_box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toAnimals(i,"animals")}}},[e("v-uni-view",{staticClass:"Our_list_box_img"},[e("v-uni-image",{attrs:{src:i.image,mode:""}})],1),e("v-uni-view",{staticClass:"Our_list_box_text"},[e("v-uni-view",[t._v(t._s(i.title||""))])],1)],1)})),1)],1),e("v-uni-view",{staticClass:"news"},[e("v-uni-view",{staticClass:"news_title"},[t._v(t._s(t.$t("home.news")))]),e("v-uni-view",{staticClass:"news_list"},t._l(t.newsList.lists,(function(i){return e("div",{key:i.id,staticClass:"news_list_box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toAnimals(i,"news")}}},[e("v-uni-image",{staticClass:"news_list_box_le",attrs:{src:i.image,mode:""}}),e("v-uni-view",{staticClass:"news_list_box_ri"},[e("v-uni-view",[t._v(t._s(i.title||""))]),e("v-uni-text",[t._v(t._s(i.date))])],1)],1)})),0)],1),e("v-uni-view",{staticClass:"dload"},[e("v-uni-view",{staticClass:"dload_text"},[e("v-uni-image",{attrs:{src:a("0e17"),mode:""}}),e("v-uni-text",[t._v(t._s(t.$t("home.join")))])],1),e("v-uni-view",{staticClass:"dload_text1"},[t._v(t._s(t.$t("home.sign1")))]),e("v-uni-view",{staticClass:"dload_text2"},[e("v-uni-image",{attrs:{src:a("5646"),mode:""}}),e("v-uni-text",[t._v(t._s(t.$t("home.sign2")))])],1),e("v-uni-view",{staticClass:"dload_text1"},[t._v(t._s(t.$t("home.sign3")))]),e("v-uni-view",{staticClass:"dload_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goSignUp.apply(void 0,arguments)}}},[t._v(t._s(t.$t("home.signup")))]),e("v-uni-view",{staticClass:"dload_text3"},[e("v-uni-image",{attrs:{src:a("6cfe"),mode:""}}),e("v-uni-text",[t._v(t._s(t.$t("home.app")))])],1),e("v-uni-view",{staticClass:"dload_text4"},[t._v(t._s(t.$t("home.app1")))]),e("v-uni-view",{staticClass:"dload_web"},[e("v-uni-image",{attrs:{src:a("2d20"),mode:""}}),e("v-uni-image",{attrs:{src:a("2274"),mode:""}})],1)],1),e("v-uni-view",{staticClass:"ftr"},[e("v-uni-image",{staticClass:"ftr_logo",attrs:{src:a("1ce1"),mode:""}}),e("v-uni-view",{staticClass:"ftr_text"},[t._v(t._s(t.$t("home.apptext")))])],1),t.showBackToTop?e("v-uni-view",{staticClass:"back-to-top",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.scrollToTop.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:a("01f1"),mode:""}})],1):t._e(),e("v-uni-view",{staticClass:"footer blur"},[e("v-uni-image",{staticClass:"home",attrs:{src:a("d08c"),mode:""}}),e("v-uni-image",{staticClass:"action",attrs:{src:a("5154"),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLaunch("/pages/tabs/Inaction")}}}),e("v-uni-image",{staticClass:"inbox",attrs:{src:a("f5a5"),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLaunch("/pages/tabs/Inbox")}}}),e("v-uni-image",{staticClass:"account",attrs:{src:a("4c31"),mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLaunch("/pages/tabs/account")}}})],1)],1)},n=[]},"8af3":function(t,i,a){var e=a("c86c"),n=a("2ec5"),s=a("3805"),o=a("c169");i=e(!1);var l=n(s),c=n(o);i.push([t.i,".top[data-v-f831bad2]{background:url("+l+") no-repeat;background-size:cover;height:%?577.08?%}.top .flex[data-v-f831bad2]{height:79%;align-items:flex-end;justify-content:center}.top .flex uni-image[data-v-f831bad2]{width:%?413.89?%;height:%?38.19?%}.idt[data-v-f831bad2]{background:url("+c+") no-repeat;background-size:cover;min-height:%?720.14?%;background-position:bottom;padding:%?50?% %?40?%;color:#fff;display:flex;flex-direction:column;justify-content:flex-end}.idt .idt_text[data-v-f831bad2]{padding-top:%?200?%;font-size:%?29.17?%}.idt .idt_btn[data-v-f831bad2]{height:%?88.89?%;padding:0 %?38?%;background:#9137c1;box-sizing:border-box;border-radius:%?5.56?%;text-align:center;line-height:%?88.89?%;margin:%?47?% 0 %?35?%}.idt .idt_about[data-v-f831bad2]{color:#c14eff}.idt .idt_about uni-image[data-v-f831bad2]{margin-left:%?30?%}.Our[data-v-f831bad2]{margin:%?60?% %?15?%;box-sizing:border-box}.Our .Our_text[data-v-f831bad2]{margin-bottom:%?50?%;color:#f5ae18}.Our .Our_list[data-v-f831bad2]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:%?25?% %?15?%}.Our .Our_list .Our_list_box[data-v-f831bad2]{flex:1 0 50%;border-radius:%?11?%;overflow:hidden;background:linear-gradient(130deg,#0d408c,#00197e);color:#fff}.Our .Our_list .Our_list_box .Our_list_box_img[data-v-f831bad2]{width:100%;height:%?332.64?%}.Our .Our_list .Our_list_box .Our_list_box_img uni-image[data-v-f831bad2]{width:100%;height:100%}.Our .Our_list .Our_list_box .Our_list_box_text[data-v-f831bad2]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:%?125?%;text-align:center}.news[data-v-f831bad2]{margin:%?20?% 0}.news .news_title[data-v-f831bad2]{color:#16ba5f;font-size:%?40?%;margin-bottom:%?40?%;padding:0 %?40?%}.news .news_list[data-v-f831bad2]{color:#fff}.news .news_list .news_list_box[data-v-f831bad2]{margin-bottom:%?15?%;background:#192158;display:flex;padding:%?31.25?% %?15?%}.news .news_list .news_list_box .news_list_box_le[data-v-f831bad2]{width:%?250.69?%;height:%?250.69?%;margin-right:%?23.61?%}.news .news_list .news_list_box .news_list_box_ri[data-v-f831bad2]{flex:1;display:flex;flex-direction:column;font-size:%?31?%;justify-content:space-between}.news .news_list .news_list_box .news_list_box_ri uni-text[data-v-f831bad2]{text-align:right;font-size:%?20.83?%}",""]),t.exports=i},b9ee:function(t,i,a){"use strict";a("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("c223");var e=a("8eab"),n={data:function(){return{isHeader:!1,showBackToTop:!1,scrollTop:0,lang:"English",langUrl:"English",newsList:[],Plants:[]}},onLoad:function(){this.getPlants(),this.getNews()},onShow:function(){this.lang=uni.getStorageSync("langName"),this.langUrl=uni.getStorageSync("langUrl")},methods:{goSignUp:function(){uni.navigateTo({url:"/pages/login/reg"})},handleScroll:function(t){this.isHeader=t.detail.scrollTop>0,this.showBackToTop=t.detail.scrollTop>300},scrollToTop:function(){var t=this;this.scrollTop=1,this.$nextTick((function(){t.scrollTop=0}))},toPage:function(t,i){uni.navigateTo({url:"".concat(t).concat(i?"?":"").concat(i||"")})},toLaunch:function(t,i){uni.reLaunch({url:"".concat(t).concat(i?"?":"").concat(i||"")})},getPlants:function(){var t=this;(0,e.request)("home/animals","GET",{act:"home"}).then((function(i){t.Plants=i.data.data}))},getNews:function(){var t=this;(0,e.request)("home/news","GET",{act:"home"}).then((function(i){t.newsList=i.data.data}))},toAnimals:function(t,i){this.toPage("/pages/home/endDes","id=".concat(t.id,"&type=").concat(i))}}};i.default=n},c169:function(t,i,a){t.exports=a.p+"static/index/shui.png"},cdab:function(t,i,a){var e=a("8af3");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("967d").default;n("3de3ed24",e,!0,{sourceMap:!1,shadowMode:!1})},da60:function(t,i,a){"use strict";a.r(i);var e=a("b9ee"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},e4c0:function(t,i,a){"use strict";var e=a("cdab"),n=a.n(e);n.a}}]);