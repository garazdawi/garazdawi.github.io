_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{EM4K:function(e,c,n){"use strict";n.r(c),n.d(c,"__N_SSG",(function(){return j})),n.d(c,"default",(function(){return l}));var s=n("nKUr"),t=n("QLaT"),i=n("YFqc"),a=n.n(i),r=n("Hb1h"),j=!0;function l(e){var c=e.news,n=e.tags;return Object(s.jsx)(t.a,{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-12",children:Object(s.jsx)("div",{className:"divider",children:Object(s.jsx)("p",{})})}),Object(s.jsx)("div",{className:"col-lg-12",children:Object(s.jsxs)("h3",{className:"sub-headlines",children:[Object(s.jsx)("img",{src:"/img/news.png"}),Object(s.jsx)("span",{style:{position:"relative",top:"5px",left:"20px"},children:"NEWS"})]})}),Object(s.jsxs)("div",{className:"col-lg-9",children:[c.map((function(e){return Object(s.jsx)(r.a,{item:e})})),Object(s.jsx)("div",{id:"divider",children:" "})]}),Object(s.jsxs)("div",{className:"col-lg-3",children:["Filter news by:",Object(s.jsx)("ul",{children:Object.keys(n).sort().map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)(a.a,{href:{pathname:"/news/tag/"+e},children:Object(s.jsx)("a",{children:e})})," (",n[e],")"]})}))})]}),Object(s.jsx)("div",{className:"col-lg-12",children:Object(s.jsx)("div",{className:"divider",children:Object(s.jsx)("p",{})})})]})})})}},Hb1h:function(e,c,n){"use strict";n.d(c,"a",(function(){return x}));var s=n("nKUr"),t=n("YFqc"),i=n.n(t),a=n("IujW"),r=n.n(a),j=n("wH4i"),l=n.n(j),d=n("R+nY");function h(e){var c=e.item;return c.attachment?Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("img",{src:"/upload/news/"+c.attachment,className:"img-rounded"})}):null}function b(e){var c=e.item;return c.tags?Object(s.jsx)("div",{className:"panel-footer",children:Object(s.jsx)("p",{children:Object(s.jsxs)("small",{children:["Tags:",Object(s.jsxs)("i",{children:["[",c.tags.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{href:{pathname:"/news/tag/"+e},children:Object(s.jsx)("a",{children:e})}),"\xa0"]})})),"]"]})]})})}):null}function x(e){var c=e.item;return Object(s.jsxs)("div",{className:"panel",children:[Object(s.jsxs)("div",{className:"panel-heading",children:[Object(s.jsx)(i.a,{href:{pathname:"/news/"+c.id},children:Object(s.jsx)("a",{className:"headlines",children:c.title})}),Object(s.jsx)("br",{}),Object(s.jsxs)("em",{children:["Written by ",Object(s.jsx)("a",{href:"/news/user/"+c.author,children:c.author}),", ",Object(d.a)(c)]})]}),Object(s.jsx)(h,{item:c}),Object(s.jsx)("p",{children:Object(s.jsx)("div",{children:Object(s.jsx)(r.a,{children:c.content,plugins:[l.a]})})}),Object(s.jsx)(b,{item:c})]},c.id)}},if8T:function(e,c,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/tag/[tag]",function(){return n("EM4K")}])}},[["if8T",0,2,6,1,3,4,5,7,8]]]);