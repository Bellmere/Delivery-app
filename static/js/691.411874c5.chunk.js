"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[691],{784:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i=t(413),s=t(439),c=t(791),r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},a=t(140),d=t(434),u=t(662),o=t(85),l=t.p+"static/media/sad-cat.c68db899c8208d3935bb.png",m=t(999),f=function(n){return n.menu.menuList},h=function(n){return n.menu.items},_=t(184),p=function(){var n=(0,c.useState)(null),e=(0,s.Z)(n,2),t=e[0],p=e[1],v=(0,d.I0)(),j=(0,d.v9)(h),x=(0,d.v9)(f);(0,c.useEffect)((function(){v((0,m.Z)())}),[v]);var b=function(n){var e=j.find((function(e){return e.name===n.name}));if(e)v((0,u.Qd)({id:e.id})),o.Am.success("The item quantity has been increased.");else{var t=(0,i.Z)((0,i.Z)({},n),{},{src:l,quantity:1,id:r()});v((0,u.IH)(t)),o.Am.success("The item has been added successfully.")}};return(0,_.jsx)("section",{className:"menu",children:(0,_.jsx)(a.W,{children:(0,_.jsxs)("div",{className:"menu--wrapper",children:[(0,_.jsxs)("div",{className:"menu__list",children:[(0,_.jsx)("h2",{children:"Menu"}),x.map((function(n,e){return(0,_.jsx)("button",{className:"menu__btn ".concat(t===n.id?"active":""),type:"button",onClick:function(){return e=n._id,void p(e);var e},children:n.title},n._id)}))]}),(0,_.jsx)("div",{className:"menu__content--wrap",children:t&&(0,_.jsx)("div",{className:"menu__content",children:function(){var n=x.find((function(n){return n._id===t}));return n?n.food.map((function(n){return(0,_.jsxs)("div",{className:"food__item",children:[(0,_.jsx)("div",{className:"food__photo",children:(0,_.jsx)("img",{src:l,alt:"sad cat"})}),(0,_.jsxs)("div",{className:"food__details",children:[(0,_.jsx)("h3",{children:n.name}),(0,_.jsxs)("p",{children:["Price: $",n.price]})]}),(0,_.jsx)("div",{className:"food__add--wrap",children:(0,_.jsx)("button",{className:"menu__btn food__add",type:"button",onClick:function(){return b(n)},children:"Add to Cart"})})]},n._id)})):null}()})})]})})})};function v(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(p,{})})}}}]);
//# sourceMappingURL=691.411874c5.chunk.js.map