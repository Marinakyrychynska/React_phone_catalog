(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(32).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(20),i=c.n(n),r=c(5),l=c(4),o=c(7),d=c(3);function j(e,t){var c=Object(s.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(s){return t}})),a=Object(d.a)(c,2),n=a[0],i=a[1];return[n,function(t){var c=t instanceof Function?t(n):t;i(c),localStorage.setItem(e,JSON.stringify(c))}]}var u=c(0),b=a.a.createContext({favProducts:[],setFavProducts:function(){},handleAddFavorites:function(){}}),m=function(e){var t=e.children,c=j("favorites",[]),a=Object(d.a)(c,2),n=a[0],i=a[1],r=function(e){n.some((function(t){return t.id===e.id}))?i((function(t){return t.filter((function(t){return t.id!==e.id}))})):i((function(t){return[].concat(Object(o.a)(t),[e])}))},l=Object(s.useMemo)((function(){return{favProducts:n,setFavProducts:i,handleAddFavorites:r}}),[n]);return Object(u.jsx)(b.Provider,{value:l,children:t})},h=(c(32),c(10)),O=c.n(h),p=(c(33),c.p+"static/media/logo.2d8d3e42.svg"),_=(c(34),c(26)),x=c.n(_);function f(e,t){var c=new URLSearchParams(t.toString());return Object.entries(e).forEach((function(e){var t=Object(d.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}var g=function(){var e=Object(l.o)().pathname,t=Object(r.d)(),c=Object(d.a)(t,2),a=c[0],n=c[1],i=a.get("query"),o=Object(s.useState)(!1),j=Object(d.a)(o,2),b=j[0],m=j[1],h=Object(s.useState)(i||""),p=Object(d.a)(h,2),_=p[0],g=p[1],N=Object(s.useRef)(null),v=Object(s.useRef)(!0);Object(s.useEffect)((function(){N.current&&b&&N.current.focus()}),[b]),Object(s.useEffect)((function(){v.current?v.current=!1:g("")}),[e]);var y=x()((function(e){n(f({query:e||null},a))}),1e3);return Object(u.jsxs)("label",{htmlFor:"search",className:"searchField",children:[Object(u.jsx)("input",{type:"text",id:"search",className:O()("searchField__input",{focus:b}),placeholder:"Search in ".concat(e.slice(1)," ..."),autoComplete:"off",ref:N,value:_,onChange:function(e){g(e.target.value),y(e.target.value)},onBlur:function(){return m(!1)},onFocus:function(){return m(!0)}}),_?Object(u.jsx)("button",{type:"button",className:"searchField__btn","data-cy":"searchDelete","aria-label":"search",onClick:function(){g(""),n(f({query:null},a))},children:Object(u.jsx)("div",{className:"icon icon--delete"})}):Object(u.jsx)("button",{type:"button",className:"searchField__btn","aria-label":"search",onClick:function(){return m(!0)},children:Object(u.jsx)("div",{className:"icon icon--search"})})]})},N=a.a.createContext({cardProducts:[],setCardProducts:function(){},handleAddToCard:function(){},visbleProducts:[],removeProduct:function(){},countProducts:function(){return 0},increment:function(){},decrement:function(){}}),v=function(e){var t=e.children,c=j("card",[]),a=Object(d.a)(c,2),n=a[0],i=a[1],r=[],l=n.filter((function(e){return!r.includes(e.id)&&(r.push(e.id),!0)})),b=function(e){return n.filter((function(t){return t.id===e})).length},m=function(e){n.some((function(t){return t.id===e.id}))?i((function(t){return t.filter((function(t){return t.id!==e.id}))})):i((function(t){return[].concat(Object(o.a)(t),[e])}))},h=function(e){i(n.filter((function(t){return t.id!==e})))},O=function(e){i((function(t){return[].concat(Object(o.a)(t),[e])}))},p=function(e){i((function(t){var c=t.reverse().findIndex((function(t){return t.id===e}));return t.slice(0,c).concat(t.slice(c+1)).reverse()}))},_=Object(s.useMemo)((function(){return{cardProducts:n,setCardProducts:i,handleAddToCard:m,removeProduct:h,countProducts:b,increment:O,decrement:p,visbleProducts:l}}),[n]);return Object(u.jsx)(N.Provider,{value:_,children:t})},y=function(){var e=function(e){var t=e.isActive;return O()("nav__link",{"is-active":t})},t=Object(s.useContext)(b).favProducts,c=Object(s.useContext)(N).cardProducts,a=Object(l.o)().pathname,n="/phones"===a||"/tablets"===a||"/accessories"===a||"/favorites"===a,i="/card"!==a;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:"header",children:[Object(u.jsxs)("div",{className:"header__links",children:[Object(u.jsx)(r.b,{className:"header__logo",to:"/",children:Object(u.jsx)("img",{src:p,alt:"logo"})}),Object(u.jsx)("div",{className:"nav",children:i&&Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(r.c,{to:"/",className:e,children:"Home"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(r.c,{to:"/phones",className:e,children:"Phones"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(r.c,{to:"/tablets",className:e,children:"tablets"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(r.c,{to:"/accessories",className:e,children:"accessories"})})]})})]}),Object(u.jsxs)("div",{className:"header__icons",children:[n&&Object(u.jsx)(g,{}),i&&Object(u.jsx)(r.c,{to:"/favorites",className:"header__icons--link",children:Object(u.jsx)("div",{className:"header__icons--link-img icon icon--fav",children:!!t.length&&Object(u.jsx)("div",{className:"header__icons--link-fav",children:Object(u.jsx)("span",{className:"header__icons--link-fav-amount",children:t.length})})})}),Object(u.jsx)(r.c,{to:"/card",className:"header__icons--link",children:Object(u.jsx)("div",{className:"header__icons--link-img icon icon--shop",children:!!c.length&&Object(u.jsx)("div",{className:"header__icons--link-fav",children:Object(u.jsx)("span",{className:"header__icons--link-fav-amount",children:c.length})})})})]})]})})},C=(c(37),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("div",{className:"footer__container main main__container",children:[Object(u.jsx)(r.b,{to:"/",className:"footer__logo",children:Object(u.jsx)("img",{src:p,alt:"footer-logo",className:"footer__logo--img"})}),Object(u.jsxs)("div",{className:"footer__nav",children:[Object(u.jsx)(r.b,{to:"https://github.com/Marinakyrychynska",className:"footer__nav--link",target:"_blank",children:"Github"}),Object(u.jsx)(r.b,{to:"https://github.com/Marinakyrychynska",className:"footer__nav--link",target:"_blank",children:"Contacts"}),Object(u.jsx)(r.b,{to:"https://github.com/Marinakyrychynska",className:"footer__nav--link",target:"_blank",children:"Rights"})]}),Object(u.jsxs)("button",{className:"footer__backToTop",type:"button",onClick:function(){!function e(){var t=window.scrollY;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()},children:[Object(u.jsx)("p",{className:"footer__backToTop--message",children:"Back to top"}),Object(u.jsx)("div",{className:"footer__backToTop--btn",children:Object(u.jsx)("div",{className:"icon icon--toTop"})})]})]})})}),P=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(y,{}),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("div",{className:"main__container",children:Object(u.jsx)(l.b,{})})}),Object(u.jsx)(C,{})]})},D=(c(38),"https://mate-academy.github.io/react_phone-catalog/_new/");function k(e){return new Promise((function(t){setTimeout(t,e)}))}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),k(300).then((function(){return fetch(D+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var w=function(e){return S(e)},F=function(){return w("products.json")},A=(c(39),function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("div",{className:"loader__content"})})}),E=(c(40),c(41),c(42),function(e){var t=e.product,c=Object(s.useContext)(b),a=c.favProducts,n=c.handleAddFavorites,i=a.some((function(e){return e.id===t.id}));return Object(u.jsx)("button",{className:"buttonFavorites",type:"button","data-cy":"addToFavorite",onClick:function(e){e.preventDefault(),n(t)},children:Object(u.jsx)("div",{className:O()("icon",{"icon--fav":!i,"icon--fav-add":i})})})}),M=(c(43),function(e){var t=e.product,c=Object(s.useContext)(N),a=c.cardProducts,n=c.handleAddToCard,i=a.find((function(e){return e.id===t.id}));return Object(u.jsx)("button",{className:O()("buttonAdd",{"is-added":i}),type:"button",onClick:function(e){e.preventDefault(),n(t)},children:i?"Added to cart":"Add to cart"})}),T=function(e){var t=e.product,c=t.phoneId,s=t.name,a=t.price,n=t.fullPrice,i=t.screen,l=t.capacity,o=t.ram,d=t.image;return Object(u.jsxs)(r.b,{to:"/".concat(t.category,"/").concat(c),className:"productCard","data-cy":"cardsContainer",children:[Object(u.jsx)("div",{className:"productCard__photo",children:Object(u.jsx)("img",{src:"".concat("https://mate-academy.github.io/react_phone-catalog/_new/").concat(d),alt:"product",className:"productCard__img"})}),Object(u.jsx)("div",{className:"productCard__title",children:Object(u.jsx)("h4",{className:"productCard__title--text",children:s})}),Object(u.jsxs)("div",{className:"productCard__price",children:[Object(u.jsx)("span",{className:"productCard__price--current",children:"$".concat(a)}),Object(u.jsx)("span",{className:"productCard__price--full",children:"$".concat(n)})]}),Object(u.jsxs)("div",{className:"productCard__info",children:[Object(u.jsxs)("div",{className:"productCard__info--wrapper",children:[Object(u.jsx)("span",{className:"productCard__info--title",children:"Screen"}),Object(u.jsx)("span",{className:"productCard__info--description",children:i})]}),Object(u.jsxs)("div",{className:"productCard__info--wrapper",children:[Object(u.jsx)("span",{className:"productCard__info--title",children:"Capacity"}),Object(u.jsx)("span",{className:"productCard__info--description",children:l})]}),Object(u.jsxs)("div",{className:"productCard__info--wrapper",children:[Object(u.jsx)("span",{className:"productCard__info--title",children:"RAM"}),Object(u.jsx)("span",{className:"productCard__info--description",children:o})]})]}),Object(u.jsxs)("div",{className:"productCard__buttons",children:[Object(u.jsx)(M,{product:t}),Object(u.jsx)(E,{product:t})]})]})},I=function(e){var t=e.products;return Object(u.jsx)("ul",{className:"productList","data-cy":"productList",children:t.map((function(e){return Object(u.jsx)("li",{className:"productList__item",children:Object(u.jsx)(T,{product:e})},e.id)}))})};c(44);var R=function(e){return"age"===e?"Newest":"name"===e?"Alphabetically":"Cheapest"},L=function(e){var t=e.currentPage,c=e.pageAmount,s=Object(r.d)(),a=Object(d.a)(s,2),n=a[0],i=a[1],l=function(e,t){for(var c=[],s=e;s<=t;s+=1)c.push(s);return c}(1,c);return Object(u.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(u.jsx)("button",{className:O()("pagination__btn pagination__btn--left",{disabled:1===t}),"data-cy":"paginationLeft",type:"button",onClick:function(){i(f({page:"".concat(t-1)},n))},disabled:1===t,children:Object(u.jsx)("div",{className:"icon icon--left"})}),Object(u.jsx)("div",{className:"pagination__pages",children:l.map((function(e){return Object(u.jsx)(r.b,{to:{search:f({page:e.toString()},n)},className:O()("pagination__pages--link",{"active-link":t===e}),children:e},e)}))}),Object(u.jsx)("button",{className:O()("pagination__btn pagination__btn--right",{disabled:t===l.length}),"data-cy":"paginationRight",type:"button",onClick:function(){i(f({page:"".concat(t+1)},n))},disabled:t===l.length,children:Object(u.jsx)("div",{className:"icon icon--right"})})]})},B=c(14),q=(c(45),function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(r.d)(),i=Object(d.a)(n,2),l=i[0],o=i[1],j=l.get("sort")||"price",b=function(e){var t={sort:e};l.toString().includes("page")?o(f(Object(B.a)(Object(B.a)({},t),{},{page:"1"}),l)):o(f(t,l)),a(!1)};return Object(s.useEffect)((function(){l.get("sort")||o(f({sort:"price"},l))}),[l]),Object(u.jsxs)("div",{className:"select",children:[Object(u.jsx)("div",{className:"select__title",children:"Sort by"}),Object(u.jsxs)("div",{className:"select__container",children:[Object(u.jsxs)("button",{type:"button",className:"select__btn",id:"triger",onClick:function(){return a(!c)},onBlur:function(e){var t;e.relatedTarget&&(null===(t=e.relatedTarget)||void 0===t?void 0:t.className.includes("select__dropdown"))||a(!1)},children:[Object(u.jsx)("p",{className:"select__btn--option",children:R(j)}),Object(u.jsx)("div",{className:"select__btn--icon icon icon--down"})]}),c&&Object(u.jsxs)("div",{className:"select__dropdown",children:[Object(u.jsx)("button",{type:"button",className:"select__dropdown--item",onClick:function(){return b("age")},children:"Newest"}),Object(u.jsx)("button",{type:"button",className:"select__dropdown--item",onClick:function(){return b("name")},children:"Alphabetically"}),Object(u.jsx)("button",{type:"button",className:"select__dropdown--item",onClick:function(){return b("price")},children:"Cheapest"})]})]})]})}),U="age",$="name",J="price";function Y(e,t){var c=Object(o.a)(e),s=t.get("query".trim().toLowerCase()),a=t.get("sort");return c=c.sort((function(e,t){switch(a){case $:return e.name.localeCompare(t.name);case U:return t.year-e.year;case J:return e.price-t.price;default:return 0}})),s&&(c=c.filter((function(e){return e.name.trim().toLocaleLowerCase().includes(s)}))),c}c(46);var G=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(r.d)(),i=Object(d.a)(n,2),l=i[0],o=i[1],j=l.get("perPage")||"",b=function(e){var t={perPage:e};l.toString().includes("page")?o(f(Object(B.a)(Object(B.a)({},t),{},{page:"1"}),l)):o(f(t,l)),a(!1)},m=j||"All";return Object(u.jsxs)("div",{className:"selectItems",children:[Object(u.jsx)("div",{className:"selectItems__title",children:"Items on page"}),Object(u.jsxs)("div",{className:"selectItems__container",children:[Object(u.jsxs)("button",{id:"triger",className:"selectItems__btn",type:"button",onClick:function(){return a(!c)},onBlur:function(e){var t,c=null===(t=e.relatedTarget)||void 0===t?void 0:t.className;c&&c.includes("")||a(!1)},children:[Object(u.jsx)("p",{className:"selectItems__btn--option",children:m}),Object(u.jsx)("div",{className:"selectItems__btn--icon icon icon--down"})]}),c&&Object(u.jsxs)("div",{className:"selectItems__dropdown",children:[Object(u.jsx)("button",{className:"selectItems__dropdown--item",type:"button",onClick:function(){return b("All")},children:"All"}),Object(u.jsx)("button",{className:"selectItems__dropdown--item",type:"button",onClick:function(){return b("4")},children:"4"}),Object(u.jsx)("button",{className:"selectItems__dropdown--item",type:"button",onClick:function(){return b("8")},children:"8"}),Object(u.jsx)("button",{className:"selectItems__dropdown--item",type:"button",onClick:function(){return b("16")},children:"16"})]})]})]})};c(47);function H(e){return e[0].toUpperCase()+e.slice(1)}var z=function(e){var t=e.product,c=Object(l.o)().pathname.slice(1).split("/")[0];return Object(u.jsxs)("div",{className:"breadCrambs","data-cy":"breadCrumbs",children:[Object(u.jsx)(r.b,{to:"/",className:"breadCrambs__link--home",children:Object(u.jsx)("div",{className:"icon icon--home"})}),Object(u.jsx)("div",{className:"icon icon--right"}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.b,{to:"/".concat(c),className:"breadCrambs__link",children:H(c)}),Object(u.jsx)("div",{className:"icon icon--right"}),Object(u.jsx)("span",{className:"breadCrambs__current",children:t.name})]}):Object(u.jsx)("span",{className:"breadCrambs__current",children:H(c)})]})};z.defaultProps={product:null};var W=function(){var e=Object(r.d)(),t=Object(d.a)(e,1)[0],c=Object(s.useState)([]),a=Object(d.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],m=j[1],h=Object(s.useState)(!1),O=Object(d.a)(h,2),p=O[0],_=O[1],x=Object(s.useMemo)((function(){return Y(n,t)}),[n,t]),f=x.length,g=+(t.get("page")||"1"),N=+(t.get("perPage")||"")||f,v=Math.ceil(f/N),y=g*+N-N,C=N*g<f?N*g:f,P=Object(s.useMemo)((function(){return x.slice(y,C)}),[x,y,C]);return Object(s.useEffect)((function(){m(!0),F().then((function(e){return Object(o.a)(e).filter((function(e){return"phones"===e.category}))})).then(i).catch((function(){_(!0)})).finally((function(){m(!1)}))}),[]),Object(u.jsxs)("div",{className:"productPage",children:[Object(u.jsx)(z,{}),Object(u.jsx)("h1",{className:"productPage__title",children:"Mobile phones"}),b&&Object(u.jsx)(A,{}),!b&&p&&Object(u.jsx)("p",{children:"Error: Unable to load data from server!"}),!b&&!p&&Object(u.jsx)("div",{className:"productPage__content",children:Object(u.jsx)("p",{className:"productPage__amount",children:"".concat(n.length," models")})}),!!n.length&&Object(u.jsxs)("div",{className:"productPage__select",children:[Object(u.jsx)(q,{}),Object(u.jsx)(G,{})]}),P.length?Object(u.jsx)(I,{products:P}):!!t.toString().length&&Object(u.jsx)("p",{className:"NoSearchResults",children:"No search results..."}),!!x.length&&1!==v&&Object(u.jsx)(L,{currentPage:g,pageAmount:v})]})},X=(c(48),{black:"#4C4C4C",rosegold:"#FED0C6",gold:"#FCDBC1",silver:"#F0F0EE",spacegray:"#8D8D92",green:"#A3EACC",yellow:"#FEE870",white:"#F0F0F0",purple:"#EDE1F9",red:"#C91C38",coral:"#FF7F50",midnightgreen:"#5F7170"}),Z=(c(49),c.p+"static/media/arrow-left.c0d01b22.svg"),K=c.p+"static/media/arrow-right.4756c064.svg",Q=function(e){var t=e.products,c=e.isLoading,a=e.isError,n=e.title,i=Object(s.useState)(0),r=Object(d.a)(i,2),l=r[0],o=r[1];return Object(u.jsxs)("section",{className:"productsSlider",children:[Object(u.jsxs)("div",{className:"productsSlider__header",children:[Object(u.jsx)("h1",{className:"productsSlider__header--title",children:n}),Object(u.jsxs)("div",{className:"productsSlider__header--btn",children:[Object(u.jsx)("button",{className:"productsSlider__button",type:"button",onClick:function(){o((function(e){return Math.max(e-1,0)}))},disabled:0===l,children:Object(u.jsx)("img",{src:Z,alt:"button-left"})}),Object(u.jsx)("button",{className:"productsSlider__button",type:"button",onClick:function(){o((function(e){return Math.min(e+1,Math.ceil(t.length/4)-1)}))},disabled:l===Math.ceil(t.length/4)-1,children:Object(u.jsx)("img",{src:K,alt:"button-left"})})]})]}),Object(u.jsxs)("div",{className:"productsSlider__content",children:[c&&!a&&Object(u.jsx)(A,{}),!c&&a&&Object(u.jsx)("p",{children:"Error: Unable to load data from server!"}),!c&&!a&&Object(u.jsx)("ul",{className:"productsSlider__list",style:{transform:"translateX(-".concat(1152*l,"px)")},children:t.map((function(e){return Object(u.jsx)("li",{className:"productsSlider__item",children:Object(u.jsx)(T,{product:e})},e.id)}))})]})]})},V=(c(50),function(){var e=Object(l.q)();return Object(u.jsxs)("button",{type:"button","data-cy":"backButton",className:"backButton",onClick:function(){return e("..")},children:[Object(u.jsx)("div",{className:"icon icon--left"}),"Back"]})}),ee=(c(51),function(){return Object(u.jsx)("div",{className:"notFoundPage",children:Object(u.jsx)("h1",{className:"notFoundPage__title",children:"Page not found"})})}),te="https://mate-academy.github.io/react_phone-catalog/_new/",ce=function(){var e=Object(l.s)().productId,t=Object(s.useState)([]),c=Object(d.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(null),o=Object(d.a)(i,2),j=o[0],b=o[1],m=Object(s.useState)(!1),h=Object(d.a)(m,2),p=h[0],_=h[1],x=Object(s.useState)(!1),f=Object(d.a)(x,2),g=f[0],N=f[1],v=Object(s.useState)(""),y=Object(d.a)(v,2),C=y[0],P=y[1];Object(s.useEffect)((function(){e&&(_(!0),function(e){return w("products/".concat(e,".json"))}(e).then((function(e){b(e),P(e.images[0])})).catch((function(){N(!0)})).finally((function(){_(!1)})))}),[e]),Object(s.useEffect)((function(){_(!0),F().then(n).catch((function(){_(!0)})).finally((function(){setTimeout((function(){_(!1)}),500)}))}),[]);var D=j?function(e,t){return e.find((function(e){return e.itemId===t}))}(a,j.id):null,k=Object(s.useMemo)((function(){return a.filter((function(e){return e.category===(null===D||void 0===D?void 0:D.category)&&e.capacity===(null===D||void 0===D?void 0:D.capacity)}))}),[a,D]);if(!j)return Object(u.jsxs)(u.Fragment,{children:[p&&Object(u.jsx)(A,{}),!p&&Object(u.jsx)(ee,{})]});var S=j.name,T=j.images,I=j.namespaceId,R=j.colorsAvailable,L=j.color,B=j.capacity,q=j.capacityAvailable,U=j.priceDiscount,$=j.priceRegular,J=j.screen,Y=j.resolution,G=j.processor,H=j.ram,W=j.description,Z=j.camera,K=j.zoom,ce=j.cell;return Object(u.jsx)(u.Fragment,{children:p?Object(u.jsx)(A,{}):Object(u.jsxs)("div",{className:"productDetails",children:[Object(u.jsx)(z,{product:j}),Object(u.jsx)(V,{}),g&&Object(u.jsx)("p",{children:"Error: Unable to load data from server!"}),!g&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"productDetails__title",children:S}),Object(u.jsxs)("section",{className:"productDetails__content",children:[Object(u.jsxs)("div",{className:"productDetails__content--img-container",children:[Object(u.jsx)("div",{className:"productDetails__images",children:T.map((function(e){return Object(u.jsx)("button",{className:O()("productDetails__images--btn",{"img-active":e===C}),type:"button",onClick:function(){return P(e)},children:Object(u.jsx)("img",{src:"".concat(te).concat(e),alt:I,className:"productDetails__images--item"})},e)}))}),Object(u.jsx)("div",{className:"productDetails__current--img",children:Object(u.jsx)("img",{src:"".concat(te).concat(C),alt:I,className:"productDetails__current--img-item"},Math.random())})]}),Object(u.jsxs)("div",{className:"productDetails__actions",children:[Object(u.jsxs)("div",{className:"productDetails__options",children:[Object(u.jsx)("p",{className:"productDetails__options--title",children:"Available colors"}),Object(u.jsx)("ul",{className:"productDetails__options--list",children:R.map((function(e){return Object(u.jsx)("li",{className:O()("productDetails__options--color",{"color-active":L===e}),children:Object(u.jsx)(r.b,{className:"productDetails__options--color-link",to:"/phones/".concat(I,"-").concat(B.toLowerCase(),"-").concat(e),style:{backgroundColor:X[e]}})},e)}))})]}),Object(u.jsxs)("div",{className:"productDetails__options",children:[Object(u.jsx)("p",{className:"productDetails__options--title",children:"Select capacity"}),Object(u.jsx)("ul",{className:"productDetails__options--list",children:q.map((function(e){return Object(u.jsx)("li",{className:O()("productDetails__options--cap",{"cap-active":B===e}),children:Object(u.jsx)(r.b,{className:O()("productDetails__options--cap-link",{"cap-active":B===e}),to:"/phones/".concat(I,"-").concat(e.toLowerCase(),"-").concat(L),children:e})},e)}))})]}),Object(u.jsxs)("div",{className:"productDetails__price",children:[Object(u.jsx)("span",{className:"productDetails__price--discont",children:"$".concat(U)}),Object(u.jsx)("span",{className:"productDetails__price--regular",children:"$".concat($)})]}),D&&Object(u.jsxs)("div",{className:"productDetails__buttons",children:[Object(u.jsx)(M,{product:D}),Object(u.jsx)(E,{product:D})]}),Object(u.jsxs)("div",{className:"productDetails__info",children:[Object(u.jsxs)("div",{className:"productDetails__info--container",children:[Object(u.jsx)("span",{className:"productDetails__info--title",children:"Screen"}),Object(u.jsx)("span",{className:"productDetails__info--description",children:J})]}),Object(u.jsxs)("div",{className:"productDetails__info--container",children:[Object(u.jsx)("span",{className:"productDetails__info--title",children:"Resolution"}),Object(u.jsx)("span",{className:"productDetails__info--description",children:Y})]}),Object(u.jsxs)("div",{className:"productDetails__info--container",children:[Object(u.jsx)("span",{className:"productDetails__info--title",children:"Processor"}),Object(u.jsx)("span",{className:"productDetails__info--description",children:G})]}),Object(u.jsxs)("div",{className:"productDetails__info--container",children:[Object(u.jsx)("span",{className:"productDetails__info--title",children:"RAM"}),Object(u.jsx)("span",{className:"productDetails__info--description",children:H})]})]})]}),Object(u.jsx)("div",{className:"productDetails__id",children:Object(u.jsx)("p",{children:"ID: ".concat(null===D||void 0===D?void 0:D.id)})})]}),Object(u.jsxs)("section",{className:"productDetails__details",children:[Object(u.jsxs)("div",{className:"productDetails__details--about",children:[Object(u.jsx)("div",{className:"productDetails__details--title",children:Object(u.jsx)("h2",{className:"productDetails__details--title-item",children:"About"})}),null===W||void 0===W?void 0:W.map((function(e){return Object(u.jsxs)("article",{className:"productDetails__details--about-info",children:[Object(u.jsx)("h3",{className:"productDetails__details--about-title",children:e.title}),Object(u.jsx)("p",{className:"productDetails__details--about-text","data-cy":"productDescription",children:e.text})]},e.title)}))]}),Object(u.jsxs)("div",{className:"productDetails__details--tech",children:[Object(u.jsx)("div",{className:"productDetails__details--title",children:Object(u.jsx)("h2",{className:"productDetails__details--title-item",children:"Tech specs"})}),Object(u.jsxs)("div",{className:"productDetails__details--tech-content",children:[Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Screen"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:J})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Resolution"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:Y})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Processor"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:G})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"RAM"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:H})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Built in memory"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:B})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Camera"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:Z})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Zoom"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:K})]}),Object(u.jsxs)("div",{className:"productDetails__details--tech-wrap",children:[Object(u.jsx)("p",{className:"productDetails__details--tech-title",children:"Cell"}),Object(u.jsx)("p",{className:"productDetails__details--tech-value",children:null===ce||void 0===ce?void 0:ce.join(", ")})]})]})]})]}),Object(u.jsx)(Q,{products:k,title:"You may also like",isError:g,isLoading:p})]})]})})},se=(c(52),c(53),function(){var e=Object(l.o)().pathname;return Object(u.jsx)("div",{className:"cardEmpty",children:Object(u.jsx)("p",{className:"cardEmpty__text",children:"Your ".concat(e.slice(1)," is empty ...")})})}),ae=function(){var e=Object(s.useContext)(b).favProducts,t=Object(r.d)(),c=Object(d.a)(t,1)[0],a=Object(s.useMemo)((function(){return Y(e,c)}),[e,c]);return Object(u.jsxs)("div",{className:"favoritesPage",children:[Object(u.jsx)(z,{}),Object(u.jsx)("h1",{className:"favoritesPage__title",children:"Favourites"}),Object(u.jsxs)("div",{className:"favoritesPage__content",children:[Object(u.jsx)("p",{className:"favoritesPage__amount",children:1!==e.length?"".concat(e.length," items"):"1 item"}),e.length?0!==a.length&&Object(u.jsx)(I,{products:a}):Object(u.jsx)(se,{})]})]})},ne=(c(54),c(55),function(){return Object(u.jsx)("div",{className:"commingSoon",children:Object(u.jsx)("p",{className:"commingSoon__text",children:"We are sorry, but this feature is not implemented yet..."})})}),ie=function(){var e=Object(s.useContext)(N),t=e.cardProducts,c=e.removeProduct,a=e.increment,n=e.decrement,i=e.countProducts,l=e.visbleProducts,o=Object(s.useState)(!1),j=Object(d.a)(o,2),b=j[0],m=j[1],h=Object(s.useMemo)((function(){return t.reduce((function(e,t){return e+t.price}),0)}),[t]);return Object(u.jsxs)("div",{className:"cardPage",children:[b&&Object(u.jsx)(ne,{}),Object(u.jsx)(V,{}),Object(u.jsx)("h1",{className:"cardPage__title",children:"Cart"}),t.length?Object(u.jsxs)("div",{className:"cardPage__content",children:[Object(u.jsx)("ul",{className:"cardPage__list",children:l.map((function(e){return Object(u.jsxs)("li",{className:"cardPage__item",children:[Object(u.jsxs)("div",{className:"cardPage__item--left",children:[Object(u.jsx)("button",{type:"button",className:"cardPage__item--btn","data-cy":"cartDeleteButton",onClick:function(){return c(e.id)},children:Object(u.jsx)("div",{className:"icon icon--delete"})}),Object(u.jsx)("div",{className:"cardPage__item--photo",children:Object(u.jsx)("img",{src:"".concat("https://mate-academy.github.io/react_phone-catalog/_new/").concat(e.image),alt:"product",className:"cardPage__item--img"})}),Object(u.jsx)(r.b,{to:"/".concat(e.category,"/").concat(e.itemId),className:"cardPage__item--name",children:e.name})]}),Object(u.jsxs)("div",{className:"cardPage__item--right",children:[Object(u.jsxs)("div",{className:"cardPage__item--slider",children:[Object(u.jsx)("button",{className:"cardPage__item--slider-btn",type:"button",onClick:function(){return n(e.id)},disabled:1===i(e.id),children:Object(u.jsx)("div",{className:"icon icon--minus"})}),Object(u.jsx)("p",{className:"cardPage__item--slider-amount",children:i(e.id)}),Object(u.jsx)("button",{className:"cardPage__item--slider-btn",type:"button",onClick:function(){return a(e)},children:Object(u.jsx)("div",{className:"icon icon--plus"})})]}),Object(u.jsx)("p",{className:"cardPage__item--price",children:"$".concat(e.price)})]})]},e.id)}))}),Object(u.jsxs)("div",{className:"cardPage__checkout",children:[Object(u.jsxs)("div",{className:"cardPage__checkout--total",children:[Object(u.jsx)("p",{className:"cardPage__checkout--total-price",children:"$".concat(h)}),Object(u.jsx)("p",{className:"cardPage__checkout--total-item",children:1===t.length?"Total for 1 item":"Total for ".concat(t.length," items")})]}),Object(u.jsx)("button",{className:"cardPage__checkout--btn",type:"button",onClick:function(){m(!0),setTimeout((function(){m(!1)}),3e3)},children:"Checkout"})]})]}):Object(u.jsx)(se,{})]})},re=(c(56),c(57),function(){return Object(u.jsx)("div",{className:"noResult",children:Object(u.jsx)("p",{className:"noResult__text",children:"No products on this section"})})}),le=function(){var e=Object(r.d)(),t=Object(d.a)(e,1)[0],c=Object(s.useState)([]),a=Object(d.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],m=j[1],h=Object(s.useState)(!1),O=Object(d.a)(h,2),p=O[0],_=O[1],x=Object(s.useMemo)((function(){return Y(n,t)}),[n,t]),f=x.length,g=+(t.get("page")||"1"),N=+(t.get("perPage")||"")||f,v=Math.ceil(f/N),y=g*+N-N,C=N*g<f?N*g:f,P=Object(s.useMemo)((function(){return x.slice(y,C)}),[x,y,C]);return Object(s.useEffect)((function(){m(!0),F().then((function(e){return Object(o.a)(e).filter((function(e){return"tablets"===e.category}))})).then(i).catch((function(){_(!0)})).finally((function(){m(!1)}))}),[]),Object(u.jsxs)("div",{className:"tabletsPage",children:[Object(u.jsx)(z,{}),Object(u.jsx)("h1",{className:"tabletsPage__title",children:"Tablets"}),b&&Object(u.jsx)(A,{}),!n.length&&!b&&Object(u.jsx)(re,{}),!b&&!p&&n.length>0&&Object(u.jsx)("div",{className:"tabletsPage__content",children:Object(u.jsx)("p",{className:"tabletsPage__amount",children:"".concat(n.length," models")})}),n.length>0&&Object(u.jsxs)("div",{className:"tabletsPage__select",children:[Object(u.jsx)(q,{}),Object(u.jsx)(G,{})]}),P.length?Object(u.jsx)(I,{products:P}):!!t.toString().length&&Object(u.jsx)("p",{className:"NoSearchResults",children:"No search results..."}),!!x.length&&1!==v&&Object(u.jsx)(L,{currentPage:g,pageAmount:v})]})},oe=(c(58),function(){var e=Object(r.d)(),t=Object(d.a)(e,1)[0],c=Object(s.useState)([]),a=Object(d.a)(c,2),n=a[0],i=a[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],m=j[1],h=Object(s.useState)(!1),O=Object(d.a)(h,2),p=O[0],_=O[1],x=Object(s.useMemo)((function(){return Y(n,t)}),[n,t]),f=x.length,g=+(t.get("page")||"1"),N=+(t.get("perPage")||"")||f,v=Math.ceil(f/N),y=g*+N-N,C=N*g<f?N*g:f,P=Object(s.useMemo)((function(){return x.slice(y,C)}),[x,y,C]);return Object(s.useEffect)((function(){m(!0),F().then((function(e){return Object(o.a)(e).filter((function(e){return"accessories"===e.category}))})).then(i).catch((function(){_(!0)})).finally((function(){m(!1)}))}),[]),Object(u.jsxs)("div",{className:"accessoriesPage",children:[Object(u.jsx)(z,{}),Object(u.jsx)("h1",{className:"accessoriesPage__title",children:"Accessories"}),b&&Object(u.jsx)(A,{}),!n.length&&!b&&Object(u.jsx)(re,{}),!b&&!p&&n.length>0&&Object(u.jsx)("div",{className:"accessoriesPage__content",children:Object(u.jsx)("p",{className:"accessoriesPage__amount",children:"".concat(n.length," models")})}),n.length>0&&Object(u.jsxs)("div",{className:"accessoriesPage__select",children:[Object(u.jsx)(q,{}),Object(u.jsx)(G,{})]}),P.length?Object(u.jsx)(I,{products:P}):!!t.toString().length&&Object(u.jsx)("p",{className:"NoSearchResults",children:"No search results..."}),!!x.length&&1!==v&&Object(u.jsx)(L,{currentPage:g,pageAmount:v})]})}),de=(c(59),c.p+"static/media/banner-accessories.bdd2e0fc.png"),je=c.p+"static/media/banner-phones.b4eeda8b.png",ue=[de,c.p+"static/media/banner-tablets.a962057c.png",je],be=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],n=function(e){var t=e;e<0?t=2:t>=3&&(t=0),a(t)};return Object(u.jsxs)("div",{className:"slider",children:[Object(u.jsxs)("div",{className:"slider__wrapper",children:[Object(u.jsx)("button",{className:"slider__button slider__button--left",type:"button",onClick:function(){return n(c-1)},children:Object(u.jsx)("img",{src:Z,alt:"button-left"})}),Object(u.jsx)("div",{className:"slider__container",children:Object(u.jsx)("ul",{className:"slider__list",style:{transform:"translate(-".concat(1040*c,"px)")},children:ue.map((function(e){return Object(u.jsx)("li",{className:"slider__item",children:Object(u.jsx)("img",{src:e,alt:"slider",className:"slider__img"})},e)}))})}),Object(u.jsx)("button",{className:"slider__button slider__button--right",type:"button",onClick:function(){return n(c+1)},children:Object(u.jsx)("img",{src:K,alt:"button-right"})})]}),Object(u.jsx)("div",{className:"slider__dots",children:ue.map((function(e,t){return Object(u.jsx)("button",{type:"button","aria-label":"position",onClick:function(){return a(t)},className:O()("slider__dots--item",{"dots-active":c===t})},e)}))})]})},me=(c(60),c.p+"static/media/category-phones.9d91280e.png"),he=c.p+"static/media/category-tablets.ab919a9b.png",Oe=c.p+"static/media/category-accessories.c89ddada.png",pe=function(e){var t=e.products,c=function(e){return t.filter((function(t){return t.category===e})).length};return Object(u.jsxs)("section",{className:"categories","data-cy":"categoryLinksContainer",children:[Object(u.jsx)("h1",{className:"categories__title",children:"Shop by category"}),Object(u.jsxs)("div",{className:"categories__content",children:[Object(u.jsxs)(r.b,{className:"categories__item",to:"/phones",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:me,alt:"category-phones",className:"categories__item--img"})}),Object(u.jsx)("p",{className:"categories__item--title",children:"Mobile phones"}),Object(u.jsx)("span",{className:"categories__item--amount",children:"".concat(c("phones")," models")})]}),Object(u.jsxs)(r.b,{className:"categories__item",to:"/tablets",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:he,alt:"category-tablets",className:"categories__item--img categories__item--tablets"})}),Object(u.jsx)("p",{className:"categories__item--title",children:"Tablets"}),Object(u.jsx)("span",{className:"categories__item--amount",children:"".concat(c("tablets")," models")})]}),Object(u.jsxs)(r.b,{className:"categories__item",to:"/accessories",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:Oe,alt:"category-accessories",className:"categories__item--img categories__item--img-accessories"})}),Object(u.jsx)("p",{className:"categories__item--title",children:"Accessories"}),Object(u.jsx)("span",{className:"categories__item--amount",children:"".concat(c("accessories")," models")})]})]})]})},_e=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],j=Object(s.useState)(!1),b=Object(d.a)(j,2),m=b[0],h=b[1];Object(s.useEffect)((function(){l(!0),F().then(a).catch((function(){h(!0)})).finally((function(){l(!1)}))}),[]);var O=Object(o.a)(c).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})),p=Object(o.a)(c).sort((function(e,t){return t.year-e.year}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(be,{}),Object(u.jsx)(Q,{products:O,isLoading:r,isError:m,title:"Hot prices"}),Object(u.jsx)(pe,{products:c}),Object(u.jsx)(Q,{products:p,isLoading:r,isError:m,title:"Brand new models"})]})},xe=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(l.e,{children:[Object(u.jsx)(l.c,{path:"/home",element:Object(u.jsx)(l.a,{to:"/",replace:!0})}),Object(u.jsxs)(l.c,{path:"/",element:Object(u.jsx)(v,{children:Object(u.jsx)(m,{children:Object(u.jsx)(P,{})})}),children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(_e,{})}),Object(u.jsxs)(l.c,{path:"phones",children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(W,{})}),Object(u.jsx)(l.c,{path:":productId",element:Object(u.jsx)(ce,{})}),Object(u.jsx)(l.c,{path:"*",element:Object(u.jsx)(ee,{})})]}),Object(u.jsxs)(l.c,{path:"tablets",children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(le,{})}),Object(u.jsx)(l.c,{path:":productId",element:Object(u.jsx)(le,{})}),Object(u.jsx)(l.c,{path:"*",element:Object(u.jsx)(ee,{})})]}),Object(u.jsxs)(l.c,{path:"accessories",children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(oe,{})}),Object(u.jsx)(l.c,{path:":productId",element:Object(u.jsx)(oe,{})}),Object(u.jsx)(l.c,{path:"*",element:Object(u.jsx)(ee,{})})]}),Object(u.jsxs)(l.c,{path:"favorites",children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(ae,{})}),Object(u.jsx)(l.c,{path:"*",element:Object(u.jsx)(ee,{})})]}),Object(u.jsxs)(l.c,{path:"card",children:[Object(u.jsx)(l.c,{index:!0,element:Object(u.jsx)(ie,{})}),Object(u.jsx)(l.c,{path:"*",element:Object(u.jsx)(ee,{})})]})]})]})})};i.a.render(Object(u.jsx)(xe,{}),document.getElementById("root"))}]),[[61,1,2]]]);
//# sourceMappingURL=main.3eece558.chunk.js.map