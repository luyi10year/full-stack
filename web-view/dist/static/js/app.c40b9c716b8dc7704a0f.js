webpackJsonp([4],{101:function(n,t){},104:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},39:function(n,t,e){"use strict";var o=e(13),a=e(105);o.a.use(a.a);var c=function(n){return e.e(0).then(function(){var t=[e(110)];n.apply(null,t)}.bind(this)).catch(e.oe)},r=function(n){return e.e(2).then(function(){var t=[e(111)];n.apply(null,t)}.bind(this)).catch(e.oe)},u=function(n){return e.e(1).then(function(){var t=[e(112)];n.apply(null,t)}.bind(this)).catch(e.oe)};t.a=new a.a({routes:[{path:"/",name:"Home",component:c},{path:"/color",name:"Color",component:r},{path:"/love",name:"love",component:u}]})},40:function(n,t,e){"use strict";var o=e(13),a=e(52),c=e(75),r=e(74),u=e(73);o.a.use(a.a);var i=new a.a.Store({state:c.a,mutations:r.a,actions:u.a});t.a=i},41:function(n,t,e){function o(n){e(101)}var a=e(43)(e(71),e(104),o,null,null);n.exports=a.exports},71:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},72:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(13),a=e(41),c=e.n(a),r=e(39),u=e(40);o.a.config.productionTip=!1,new o.a({el:"#app",router:r.a,store:u.a,template:"<App/>",components:{App:c.a}})},73:function(n,t,e){"use strict";var o=e(76),a=e.n(o),c=e(53),r=e.n(c),u=function(n,t,e){return i(n),new a.a(function(o){r()(t).then(function(t){1==t.data.code?(e&&n(e,t.data),o&&o(t.data)):l(n),s(n)}).catch(function(t){console.log(t),l(n)})})},i=function(n,t){console.log("start...")},s=function(n,t){console.log("end...")},l=function(n,t){console.log("提示")},f=function(n){var t=[];for(var e in n)t.push(e+"="+n[e]);return t.join("&")};t.a={fetchTest:function(n,t){var e=n.commit,o={method:"POST",url:"/sellerAdmin/reg",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:f({name:"aaa",password:"bbb"})};return u(e,o,"SET_TEST")},fetchVue:function(n,t){var e=n.commit;return u(e,t)}}},74:function(n,t,e){"use strict";t.a={SET_TEST:function(n,t){n.testkk=t}}},75:function(n,t,e){"use strict";t.a={testkk:"sss"}}},[72]);
//# sourceMappingURL=app.c40b9c716b8dc7704a0f.js.map