(function(t){function e(e){for(var n,c,a=e[0],o=e[1],l=e[2],p=0,d=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var o=s[a];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0bd6":function(t,e,s){"use strict";var n=s("6bb2"),r=s.n(n);r.a},"0c52":function(t,e,s){},"43f9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Goods"),s("Popup")],1)},i=[],c=(s("c975"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"goods"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"goods__header"},[t._v("CASSA")]),s("div",{staticClass:"goods__container"},t._l(t.allProducts,(function(t,e){return s("Product",{key:e,attrs:{product:t}})})),1)])])}),a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product"},[s("h5",{staticClass:"product__title"},[s("a",{attrs:{href:""}},[t._v(" "+t._s(t.product.title)+" ")])]),s("div",{staticClass:"product__img-link-wrapper"},[s("a",{staticClass:"product__img-link",attrs:{href:"#"}},[s("img",{staticClass:"product__img",attrs:{src:t.product.img,alt:t.product.title}})])]),s("div",{staticClass:"product__descr"},[s("div",{staticClass:"product__disscount"},[t._v("OFFERTA LIMITATA "),s("span",[t._v("-"+t._s(t.product.discount)+"%")])]),s("div",{staticClass:"product__price"},[s("span",{staticClass:"product__price-current"},[s("span",{staticClass:"product__price-currency"},[t._v("$")]),s("span",{staticClass:"product__price-value"},[t._v(t._s(t.product.price))])]),s("span",{staticClass:"product__price-old"},[s("span",{staticClass:"product__price-old-value"},[t._v(t._s(t.product.oldPrice)+" ")]),s("span",{staticClass:"product__price-old-currency"},[t._v("$")])])]),s("div",{staticClass:"product__order"},[s("div",{ref:"customSelect",staticClass:"custom-select",staticStyle:{width:"122px"},on:{click:function(e){return t.pushSelectVal()}}},[s("select",{ref:"select"},t._l(51,(function(e,n){return s("option",{key:n,domProps:{value:e+1,selected:n===t.basketAmount}},[t._v(" "+t._s(n)+" ")])})),0)]),s("button",{staticClass:"product__basket",on:{click:t.openBasketPopup}})])])])},l=[],u=(s("a4d3"),s("4de4"),s("7db0"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("ade3")),p=s("2f62");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){Object(u["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={name:"Product",props:["product"],data:function(){return{amount:1}},computed:f({},Object(p["b"])(["getBasket"]),{basketAmount:function(){var t=this,e=this.getBasket.find((function(e){return e.id===t.product.id}));return void 0!=e?e.amount:3}}),methods:{pushSelectVal:function(){var t=this.$refs.select.value-2;this.$store.commit("updateBasket",{id:this.product.id,amount:t})},openBasketPopup:function(){var t=document.getElementById("basket-overlay");t.classList.add("popup__overlay--open")}},watch:{basketAmount:function(t,e){this.$refs.customSelect.querySelector(".select-selected").innerText=t}},mounted:function(){this.pushSelectVal()}},_=m,v=(s("0bd6"),s("2877")),b=Object(v["a"])(_,o,l,!1,null,"76f30409",null),g=b.exports,h={name:"Goods",components:{Product:g},computed:{allProducts:function(){return this.$store.getters.products}},methods:{}},y=h,k=(s("c3d0"),Object(v["a"])(y,c,a,!1,null,null,null)),O=k.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup__overlay",attrs:{id:"basket-overlay"},on:{click:function(e){return t.outsidePopupHandler(e)}}},[s("div",{staticClass:"popup__inner"},[s("div",{staticClass:"popup__main",attrs:{id:"basket-main"}},[s("div",{staticClass:"popup__header",on:{click:t.closePopup}},[s("div",{staticClass:"popup__close"}),s("h3",[t._v("Carello")])]),s("div",{staticClass:"popup__body"},[t.basket.length?s("ul",{staticClass:"basket__list"},t._l(t.basket,(function(e,n){return s("li",{key:e.id,staticClass:"basket__item"},[s("div",{staticClass:"basket-item__img-wrapper"},[s("img",{staticClass:"basket-item__img",attrs:{src:e.imgSmall,alt:""}})]),s("div",{staticClass:"basket-item__descr"},[s("div",[t._v("offerta")]),s("div",[t._v("fizzyslim con sapore di")]),s("div",{staticClass:"basket-item__type"},[t._v(t._s(e.title))]),s("div",{staticClass:"basket-item__amount"},[t._v("QTÀ: "),s("div",{staticClass:"custom-select amount-popup-select",staticStyle:{width:"50px"},on:{click:function(s){return t.pushSelectValues(e.id,n)}}},[s("select",{ref:"select",refInFor:!0},t._l(51,(function(n,r){return s("option",{key:r,domProps:{value:n+1,selected:r===e.amount}},[t._v(" "+t._s(r)+" ")])})),0)])]),s("div",{staticClass:"basket-item__money"},[s("span",[t._v("€")]),t._v(t._s((e.price*e.amount).toFixed(2)))])])])})),0):s("h2",[t._v("Basket is empty :( Please add some")])]),s("div",{staticClass:"popup__footer"},[s("div",{staticClass:"basket-total"},[s("h4",{staticClass:"basket-total__title"},[t._v("Subtotale")]),s("div",{staticClass:"basket-total__amount"},[s("span",[t._v("€")]),t._v(t._s(t.total))])]),t._m(0)])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"basket__make-order"},[s("button",{staticClass:"basket__order-btn"},[t._v("VISUALIZZA CARRELLO")])])}];s("13d5"),s("b680");function j(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?j(Object(s),!0).forEach((function(e){Object(u["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):j(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={name:"Basket",data:function(){return{}},computed:S({},Object(p["c"])(["basket","products"]),{total:function(){var t=this.basket.reduce((function(t,e){return t+e.amount*e.price}),0);return t.toFixed(2)}}),methods:{closePopup:function(){document.getElementById("basket-overlay").classList.remove("popup__overlay--open")},outsidePopupHandler:function(t){var e=t.target,s=document.getElementById("basket-main"),n=e==s||s.contains(e);n||this.closePopup()},pushSelectValues:function(t,e){var s=this.$refs.select[e].value-2;this.$store.commit("updateBasket",{id:t,amount:s}),this.$emit("updateAmount")}},watch:{basket:function(t,e){document.querySelectorAll(".amount-popup-select").forEach((function(e,s){e.querySelectorAll(".select-selected")[0].innerText=t[s].amount}))}}},E=w,x=(s("df60"),Object(v["a"])(E,C,P,!1,null,"145400f8",null)),L=x.exports,T={name:"app",components:{Goods:O,Popup:L},mounted:function(){setTimeout((function(){var t,e,s,n,r,i,c;for(t=document.getElementsByClassName("custom-select"),e=0;e<t.length;e++){for(n=t[e].getElementsByTagName("select")[0],r=document.createElement("DIV"),r.setAttribute("class","select-selected"),r.innerHTML=n.options[n.selectedIndex].innerHTML,t[e].appendChild(r),i=document.createElement("DIV"),i.setAttribute("class","select-items select-hide"),s=1;s<n.length;s++)c=document.createElement("DIV"),c.innerHTML=n.options[s].innerHTML,c.addEventListener("click",(function(t){var e,s,n,r,i;for(r=this.parentNode.parentNode.getElementsByTagName("select")[0],i=this.parentNode.previousSibling,s=0;s<r.length;s++)if(r.options[s].innerHTML==this.innerHTML){for(r.selectedIndex=s,i.innerHTML=this.innerHTML,e=this.parentNode.getElementsByClassName("same-as-selected"),n=0;n<e.length;n++)e[n].removeAttribute("class");this.setAttribute("class","same-as-selected");break}i.click()})),i.appendChild(c);t[e].appendChild(i),r.addEventListener("click",(function(t){t.stopPropagation(),a(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")}))}function a(t){var e,s,n,r=[];for(e=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),n=0;n<s.length;n++)t==s[n]?r.push(n):s[n].classList.remove("select-arrow-active");for(n=0;n<e.length;n++)r.indexOf(n)&&e[n].classList.add("select-hide")}document.addEventListener("click",a)}),0)}},B=T,A=(s("5c0b"),Object(v["a"])(B,r,i,!1,null,null,null)),I=A.exports;s("c740"),s("a434");n["a"].use(p["a"]);var $=new p["a"].Store({state:{products:[{id:1,title:"pineapple",img:"img/products/pineapple.png",imgSmall:"img/products/small/small_fizzy-slim--apple.png",discount:50,price:9,oldPrice:18},{id:2,title:"berries",img:"img/products/berries.png",imgSmall:"img/products/small/small_fizzy-slim--berries.png",discount:40,price:12,oldPrice:20},{id:3,title:"grapefruit",img:"img/products/grapefruit.png",imgSmall:"img/products/small/small_fizzy-slim--grapefruit.png",discount:30,price:15.4,oldPrice:22},{id:4,title:"apple",img:"img/products/apple.png",imgSmall:"img/products/small/small_fizzy-slim--apple.png",discount:20,price:19.2,oldPrice:24}],basket:[]},actions:{},mutations:{updateBasket:function(t,e){var s=t.basket;if(t.basket=[],e.amount>=1){var n=s.findIndex((function(t,n){return t.id==e.id&&(s[n].amount=e.amount,!0)}));if(-1===n){var r=t.products.find((function(t){return t.id===e.id}));r.amount=e.amount,s.push(r)}}else{var i=s.findIndex((function(t,s){return t.id==e.id}));i>-1&&s.splice(i,1)}t.basket=s,console.log("state",t.basket)},nullProducts:function(t){t.basket=[]}},getters:{products:function(t){return t.products},getBasket:function(t){return t.basket}},modules:{}});s("9f4f"),s("f33e"),s("8d0a");n["a"].config.productionTip=!1,new n["a"]({store:$,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"6bb2":function(t,e,s){},"8d0a":function(t,e,s){},"9c0c":function(t,e,s){},"9f4f":function(t,e,s){},c3d0:function(t,e,s){"use strict";var n=s("0c52"),r=s.n(n);r.a},df60:function(t,e,s){"use strict";var n=s("43f9"),r=s.n(n);r.a},f33e:function(t,e,s){}});
//# sourceMappingURL=app.8db2724d.js.map