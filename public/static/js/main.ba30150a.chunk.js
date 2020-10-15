(this["webpackJsonpsnkshop-frontend"]=this["webpackJsonpsnkshop-frontend"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),o=a(13),s=a(137),u=a(138),m=a(84),i=function(){return r.a.createElement("footer",null,r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{className:"text-center py-3"},"\xa9 2020 Sneaker City. All right reserved."))))},p=a(25),d=a(147),E=a(139),f=a(143),h=a(6),g=a(32),v=a(21),b=function(e,t){localStorage.setItem("".concat(e),JSON.stringify(t))},y=function(e,t){switch(t.type){case"INCREASE":var a=e.cartItems.findIndex((function(e){return e._id===t.payload._id&&e.size===t.payload.size}));return e.cartItems[a].quantity++,Object(g.a)({},e,{cartItems:Object(v.a)(e.cartItems)},O(e.cartItems));case"DECREASE":var n=e.cartItems.findIndex((function(e){return e._id===t.payload._id&&e.size===t.payload.size}));return 1===e.cartItems[n].quantity?e.cartItems.splice(n,1):e.cartItems[n].quantity--,Object(g.a)({},e,{cartItems:Object(v.a)(e.cartItems)},O(e.cartItems));case"ADD_PRODUCT":if(e.cartItems.find((function(e){return e._id===t.payload.currentProduct._id&&e.size===t.payload.size}))){var r=e.cartItems.findIndex((function(e){return e._id===t.payload.currentProduct._id}));e.cartItems[r].quantity++}else e.cartItems.push({_id:t.payload.currentProduct._id,image:t.payload.currentProduct.image,price:t.payload.currentProduct.price,name:t.payload.currentProduct.name,size:t.payload.size,quantity:t.payload.quantity,product:t.payload.currentProduct});return Object(g.a)({},e,{cartItems:Object(v.a)(e.cartItems)},O(e.cartItems));case"REMOVE_PRODUCT":var l=e.cartItems.findIndex((function(e){return e._id===t.payload._id&&e.size===t.payload.size}));return e.cartItems.splice(l,1),Object(g.a)({},e,{cartItems:Object(v.a)(e.cartItems)},O(e.cartItems));case"ADD_SHIPPING":var c=Object(g.a)({},t.payload);return b("shippingAddress",c),Object(g.a)({},e,{shippingAddress:c});default:return Object(g.a)({},e)}},O=function(e){return b("cart",e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},j=a(11),C=a.n(j),I=a(19),S=a(20),k=a.n(S),x=Object(n.createContext)(),N=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,P=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(N),s=Object(h.a)(o,2),u=s[0],m=s[1],i=function(){var e=Object(I.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("/api/products");case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement(x.Provider,{value:{products:l,fetchProducts:i,fetchProductById:function(e){return l.find((function(t){return t._id===e}))},existUser:u,updateSavedUser:function(e){m(e),b("user",e)},removeSavedUser:function(e){var t;t="user",localStorage.removeItem("".concat(t)),m(null)}}},e.children)},w=Object(n.createContext)(),L=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],A=localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{},_=Object(g.a)({cartItems:L},O(L),{shippingAddress:A,checkout:!1}),U=function(e){var t=Object(n.useReducer)(y,_),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(x).products;return r.a.createElement(w.Provider,{value:{increase:function(e){console.log(e),c({type:"INCREASE",payload:e})},decrease:function(e){c({type:"DECREASE",payload:e})},addProduct:function(e){c({type:"ADD_PRODUCT",payload:e})},removeProduct:function(e){c({type:"REMOVE_PRODUCT",payload:e})},state:l,productInCart:function(e){return o.find((function(t){return t._id===e}))},addShipping:function(e){c({type:"ADD_SHIPPING",payload:e})}}},e.children)},z=function(e){var t=Object(n.useContext)(w).state,a=Object(n.useContext)(x),l=a.existUser,c=a.removeSavedUser;return r.a.createElement("header",null,r.a.createElement(d.a,{bg:"primary",variant:"dark",expand:"lg",collapseOnSelect:!0},r.a.createElement(s.a,null,r.a.createElement(p.LinkContainer,{to:"/"},r.a.createElement(d.a.Brand,null,"Sneaker City")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(p.LinkContainer,{to:"/home"},r.a.createElement(E.a.Link,null,"All")),r.a.createElement(p.LinkContainer,{to:"/home?category=women"},r.a.createElement(E.a.Link,null,"Women")),r.a.createElement(p.LinkContainer,{to:"/home?category=men"},r.a.createElement(E.a.Link,null,"Men"))),r.a.createElement(E.a,{className:"ml-auto"},r.a.createElement(p.LinkContainer,{to:"/cart"},r.a.createElement(E.a.Link,null,r.a.createElement("i",{className:"fas fa-shopping-cart"}),t.itemCount," Cart")),l?r.a.createElement(f.a,{title:l.name,id:"username"},r.a.createElement(p.LinkContainer,{to:"/profile"},r.a.createElement(f.a.Item,null,"Profile")),r.a.createElement(f.a.Item,{onClick:function(){return c(l),void(window.location="/")}},"Logout")):r.a.createElement(p.LinkContainer,{to:"/login"},r.a.createElement(E.a.Link,null,r.a.createElement("i",{className:"fas fa-user"}),"Sign In")))))))},D=a(12),G=a(149),q=function(e){var t=e.value,a=e.text,n=e.color;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star",style:{color:n}})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star",style:{color:n}})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star",style:{color:n}})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star",style:{color:n}})),r.a.createElement("span",null,r.a.createElement("i",{className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star",style:{color:n}})),r.a.createElement("span",{className:"px-1"},a.length>0&&a))};q.defaultProps={color:"#D48B19",value:0};var R=q,M=function(e){var t=e.product;return r.a.createElement(G.a,{className:"my-1 py-3 rounded"},r.a.createElement(o.Link,{to:"/product/".concat(t._id)},r.a.createElement(G.a.Img,{variant:"top product-img",src:"".concat(t.image)})),r.a.createElement(G.a.Body,null,r.a.createElement(G.a.Title,{as:"div"},r.a.createElement(o.Link,{to:"/product/".concat(t._id)},r.a.createElement("p",{className:"font-weight-normal"},t.name))),r.a.createElement(G.a.Text,{as:"div"},r.a.createElement(R,{value:t.rating,text:"".concat(t.numReviews," reviews")})),r.a.createElement(G.a.Text,{as:"h3",className:"py-1"},"$",t.price)))},T=a(140),$=a(93),B=a(144),F=a(92),J=a.n(F),W=function(e){e.itemsCount;var t=e.pagesCount,a=(e.pageSize,e.currentPage),n=e.onPageChange;if(1===t)return null;var l=J.a.range(1,t+1);return console.log(l),r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},l.map((function(e){return r.a.createElement("li",{key:e,className:e===a?"page-item active":"page-item"},r.a.createElement("button",{className:"page-link",onClick:function(t){return n(e,t)}},Number(e)))}))))},H=function(e){var t=e.step1,a=e.step2,n=e.step3;return r.a.createElement(E.a,{className:"justify-content-center mb-4"},r.a.createElement(E.a.Item,null,t?r.a.createElement(p.LinkContainer,{to:"/login"},r.a.createElement(E.a.Link,null,"Sign In")):r.a.createElement(E.a.Link,{disabled:!0},"Sign In")),r.a.createElement(E.a.Item,null,a?r.a.createElement(p.LinkContainer,{to:"/shipping"},r.a.createElement(E.a.Link,null,"Shipping")):r.a.createElement(E.a.Link,{disabled:!0},"Shipping")),r.a.createElement(E.a.Item,null,n?r.a.createElement(p.LinkContainer,{to:"/createorder"},r.a.createElement(E.a.Link,null,"Create Order")):r.a.createElement(E.a.Link,{disabled:!0},"Create Order")))},V=function(e){var t=Object(n.useContext)(x).products,a=Object(n.useState)(""),l=Object(h.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(1),i=Object(h.a)(s,2),p=i[0],d=i[1],E=Object(n.useState)([]),f=Object(h.a)(E,2),g=f[0],b=f[1],y=Object(n.useState)(10),O=Object(h.a)(y,2),j=O[0],C=O[1],I=Object(n.useState)(0),S=Object(h.a)(I,2),k=S[0],N=S[1],P=e.location,w=P.search?P.search.split("=")[1]:"";Object(n.useEffect)((function(){!function(){var e=Object(v.a)(t);N(Math.ceil(t.length/10)),b(e.slice(0,10))}()}),[t]);return Object(n.useEffect)((function(e){var a=e,n=Object(v.a)(t),r=[];r=a?n.filter((function(e){return e.category.toUpperCase()===a.toUpperCase()})):Object(v.a)(t),N(Math.ceil(r.length/j)),r.length!==g.length&&b(r.slice(0,j))}),[w]),r.a.createElement("div",null,r.a.createElement("h3",null,"Latest Products - ",w),r.a.createElement(u.a,{className:"py-2"},r.a.createElement(m.a,{md:4},r.a.createElement(T.a,{className:"mb-2"},r.a.createElement(T.a.Prepend,null,r.a.createElement(T.a.Text,null,r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement($.a,{id:"inlineFormInputGroup",value:c,onChange:function(e){return function(e){var a=e;o(a);var n=Object(v.a)(t);w&&(n=n.filter((function(e){return e.category.toUpperCase()===w.toUpperCase()})));var r=n.filter((function(e){return e.name.toUpperCase().includes(a.toUpperCase())||e.brand.toUpperCase().includes(a.toUpperCase())||e.description.toUpperCase().includes(a.toUpperCase())||e.category.toUpperCase().includes(a.toUpperCase())||e.releaseDate.toUpperCase().includes(a.toUpperCase())}));N(Math.ceil(r.length/j)),b(r.slice(0,0+j))}(e.target.value)},placeholder:"Search"})))),r.a.createElement(u.a,null,g.map((function(e,t){return r.a.createElement(m.a,{key:e._id,sm:12,md:6,lg:4,xl:3},r.a.createElement(M,{product:e}))}))),r.a.createElement(u.a,{className:"my-4"},r.a.createElement(m.a,{md:2},r.a.createElement(B.a.Control,{as:"select",className:"select-pagination",value:j,onChange:function(e){return function(e){var a=Object(v.a)(t),n=(p-1)*e;C(e);var r=a.slice(n,n+e);N(Math.ceil(a.length/e)),b(r),console.log(r)}(Number(e.target.value))}},r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:15},"15"),r.a.createElement("option",{value:20},"20"),r.a.createElement("option",{value:25},"25"))),r.a.createElement(m.a,{md:6},r.a.createElement(W,{itemsCount:t.length,pagesCount:k,pageSize:j,currentPage:p,onPageChange:function(e){var a=Object(v.a)(t),n=(e-1)*j;d(e);var r=a.slice(n,n+j);b(r),console.log(n),console.log(n+j)}}))))},Y=(a(128),a(141)),Q=a(150),K=a(91),X=function(e){var t=e.match.params.id,a=Object(n.useState)({}),l=Object(h.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)(1),p=Object(h.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),b=g[0],y=g[1],O=Object(n.useState)(1),j=Object(h.a)(O,2),S=j[0],x=j[1],N=Object(n.useContext)(w).addProduct;return Object(n.useEffect)((function(){(function(){var e=Object(I.a)(C.a.mark((function e(){var a,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/products/".concat(t));case 2:a=e.sent,s(a.data),n=a.data.variants[0].size,r=a.data.variants[0].quantity,y(n),x(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Link,{className:"btn btn-dark my-3",to:"/home"},"Go Back"),r.a.createElement(u.a,null,r.a.createElement(m.a,{md:6},r.a.createElement(Y.a,{src:c.image,fluid:!0})),r.a.createElement(m.a,{md:3},r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("span",{className:"lead"},c.name)),r.a.createElement(Q.a.Item,null,r.a.createElement("span",{className:"h4"},c.brand)),r.a.createElement(Q.a.Item,null,"Released -",r.a.createElement("span",null,new Date("".concat(c.releaseDate)).toLocaleDateString("sq-AL",{year:"numeric",month:"2-digit",day:"2-digit"}))),r.a.createElement(Q.a.Item,null,r.a.createElement(R,{value:c.rating,text:"".concat(c.numReviews," reviews")})),r.a.createElement(Q.a.Item,{className:"h5"},"Price: $",c.price),r.a.createElement(Q.a.Item,null,r.a.createElement("span",{className:"h5"},"Description:")," ",r.a.createElement("span",{className:"font-weight-lighter"},c.description)))),r.a.createElement(m.a,{md:3},r.a.createElement(G.a,null,r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Price"),r.a.createElement(m.a,null,r.a.createElement("strong",null,"$",c.price)))),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Status"),r.a.createElement(m.a,null,r.a.createElement("strong",null,c.countInStock>0?"In Stock":"Out of Stock")))),c.countInStock>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Size"),r.a.createElement(m.a,null,r.a.createElement(B.a.Control,{as:"select",value:b,onChange:function(e){return function(e){var t=c.variants.find((function(t){return t.size===e}));y(e),t&&x(parseInt(t.quantity))}(e.target.value)}},c.variants.map((function(e,t){return r.a.createElement("option",{key:e._id,value:e.size},e.size)})))))),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Qty"),r.a.createElement(m.a,null,r.a.createElement(B.a.Control,{as:"select",value:d,onChange:function(e){return E(parseInt(e.target.value))}},Object(v.a)(Array(S).keys()).map((function(e,t){return r.a.createElement("option",{key:t+1,value:t+1},t+1)}))))))),r.a.createElement(Q.a.Item,null,r.a.createElement(K.a,{className:"btn-block",type:"button",disabled:0===c.countInStock,onClick:function(){N({currentProduct:c,size:b,quantity:d})}},"Add to Cart")))))))},Z=a(148),ee=function(e){var t=e.variant,a=e.children;return r.a.createElement(Z.a,{variant:t},a)};ee.defaultProps={variant:"info"};var te=ee,ae=function(e){var t=Object(n.useContext)(w),a=t.state,l=t.increase,c=t.decrease,s=t.removeProduct,i=a.cartItems,p=a.itemCount,d=a.total;return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(m.a,{md:8},r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("hr",null),0===i.length?r.a.createElement(te,null,"Your cart is empty ",r.a.createElement(o.Link,{to:"/"},"Go Back")):r.a.createElement(Q.a,{variant:"flush"},i.map((function(e,t){return r.a.createElement(Q.a.Item,{key:t},r.a.createElement(u.a,null,r.a.createElement(m.a,{md:2},r.a.createElement(Y.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(m.a,{md:2},r.a.createElement(o.Link,{to:"/product/".concat(e._id)},e.name)),r.a.createElement(m.a,{md:2},"$",e.price," x ",e.quantity),r.a.createElement(m.a,{md:2},e.size,'"'),r.a.createElement(m.a,{md:4},r.a.createElement(K.a,{type:"button",variant:"light",onClick:function(){return t=e._id,a=e.size,void l({_id:t,size:a});var t,a}},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement(K.a,{type:"button",variant:"light",onClick:function(){return t=e._id,a=e.size,void c({_id:t,size:a});var t,a}},r.a.createElement("i",{className:"fas fa-minus"})),r.a.createElement(K.a,{type:"button",variant:"light",onClick:function(){return t=e._id,a=e.size,void s({_id:t,size:a});var t,a}},r.a.createElement("i",{className:"fas fa-trash"}))),r.a.createElement(m.a,{md:2})))})))),r.a.createElement(m.a,{md:4},r.a.createElement(G.a,null,r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("h5",null,"Subtotal "),r.a.createElement("h6",null,"Items - ",p),r.a.createElement("h6",null,"$",d)),r.a.createElement(Q.a.Item,null,r.a.createElement(K.a,{type:"button",className:"btn-block",disabled:0===i.length,onClick:function(){return console.dir(e),void e.history.push("/login?redirect=shipping")}},"Checkout")))))))};function ne(e){var t=e.children;return r.a.createElement(s.a,null,r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(m.a,{xs:12,md:6},t)))}var re=function(e){var t,a=Object(n.useState)(""),l=Object(h.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)(""),p=Object(h.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),v=g[0],b=g[1],y=Object(n.useContext)(x).updateSavedUser,O=(t="user",JSON.parse(localStorage.getItem("".concat(t)))),j=e.location,S=e.history,N=j.search?j.search.split("=")[1]:"/";Object(n.useEffect)((function(){O&&S.push(N)}),[S,N,O]);var P=function(){var e=Object(I.a)(C.a.mark((function e(t){var a,n,r,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={headers:{"Content-Type":"application/json"}},e.next=5,k.a.post("api/users/login",{email:c,password:d},a);case 5:n=e.sent,r=n.data,y(r),S.push("/".concat(N)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,b(l);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{step1:!0}),r.a.createElement(ne,null,r.a.createElement("h3",{className:"my-5"},"Sign In"),v&&r.a.createElement(te,{variant:"danger"},v),r.a.createElement(B.a,{onSubmit:P},r.a.createElement(B.a.Group,{controlId:"email"},r.a.createElement(B.a.Label,null,"Email Address"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter email",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"password"},r.a.createElement(B.a.Label,null,"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Enter password",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Sign In"),r.a.createElement(u.a,{className:"py-3"},r.a.createElement(m.a,null,"New User ?"," ",r.a.createElement(o.Link,{to:N?"/register?redirect=".concat(N):"/register"},"Register"))))))},le=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(h.a)(o,2),u=s[0],m=s[1],i=Object(n.useState)(""),p=Object(h.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),v=g[0],b=g[1],y=Object(n.useState)(""),O=Object(h.a)(y,2),j=O[0],S=O[1],N=Object(n.useContext)(x).updateSavedUser;console.log(e.location.search);var P=function(){var t=Object(I.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),d&&""!==d){t.next=4;break}return S("Password cannot be empty"),t.abrupt("return");case 4:if(d===v){t.next=7;break}return S("Passwords do not match"),t.abrupt("return");case 7:return t.prev=7,t.next=10,k.a.post("/api/users",{name:l,email:u,password:d});case 10:n=t.sent,r=n.data,N(r),e.history.push("/cart"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(7),console.error(t.t0.message),t.t0.response.data?S(t.t0.response.data.message):S(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[7,16]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(ne,null,r.a.createElement(B.a,{onSubmit:P},r.a.createElement("h3",{className:"my-5"},"Sign In"),j&&r.a.createElement(te,{variant:"danger"},j),r.a.createElement(B.a.Group,{controlId:"name"},r.a.createElement(B.a.Label,null,"Full Name"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"email"},r.a.createElement(B.a.Label,null,"Email Address"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return m(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"password"},r.a.createElement(B.a.Label,null,"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Enter password",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"confirm-password"},r.a.createElement(B.a.Label,null,"Confirm Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Confirm password",value:v,onChange:function(e){return b(e.target.value)}})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Register")))},ce=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(h.a)(o,2),i=s[0],p=s[1],d=Object(n.useState)(""),E=Object(h.a)(d,2),f=E[0],g=E[1],v=Object(n.useState)(""),b=Object(h.a)(v,2),y=b[0],O=b[1],j=Object(n.useState)(""),S=Object(h.a)(j,2),N=S[0],P=S[1],w=Object(n.useContext)(x),L=w.existUser,A=w.updateSavedUser;Object(n.useEffect)((function(){(function(){var e=Object(I.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{Authorization:"Bearer ".concat(L.token),"Content-Type":"application/json"}},e.next=4,k.a.patch("/api/users",{name:l,email:i,password:f},t);case 4:a=e.sent,n=a.data,c(n.name),p(n.email),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data?P(e.t0.response.data.message):P(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}));var _=function(){var e=Object(I.a)(C.a.mark((function e(t){var a,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={headers:{Authorization:"Bearer ".concat(L.token),"Content-Type":"application/json"}},e.next=5,k.a.patch("/api/users",{name:l,email:i,password:f},a);case 5:n=e.sent,r=n.data,A(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data?P(e.t0.response.data.message):P(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(u.a,null,r.a.createElement(m.a,{md:4},r.a.createElement(B.a,{onSubmit:_},r.a.createElement("h3",{className:"my-5"},"Sign In"),N&&r.a.createElement(ne,{variant:"danger"},N),r.a.createElement(B.a.Group,{controlId:"name"},r.a.createElement(B.a.Label,null,"Full Name"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"email"},r.a.createElement(B.a.Label,null,"Email Address"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter email",value:i,onChange:function(e){return p(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"password"},r.a.createElement(B.a.Label,null,"Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"confirm-password"},r.a.createElement(B.a.Label,null,"Confirm Password"),r.a.createElement(B.a.Control,{type:"password",placeholder:"Confirm password",value:y,onChange:function(e){return O(e.target.value)}})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Update"))),r.a.createElement(m.a,{md:8},r.a.createElement("h3",{className:"my-5"},"Orders")))},oe=function(e){return Object(n.useContext)(x).existUser?r.a.createElement(D.d,e):r.a.createElement(D.c,{to:"/login"})},se=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),s=Object(h.a)(o,2),u=s[0],m=s[1],i=Object(n.useState)(""),p=Object(h.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),v=g[0],b=g[1],y=Object(n.useState)(""),O=Object(h.a)(y,2),j=O[0],C=O[1],I=Object(n.useState)(""),S=Object(h.a)(I,2),k=S[0],x=S[1],N=Object(n.useContext)(w),P=N.addShipping,L=N.state.shippingAddress;Object(n.useEffect)((function(){L&&(c(L.country),m(L.city),E(L.phoneNumber),C(L.email),b(L.address))}),[L]);var A=e.history;return r.a.createElement("div",null,r.a.createElement(H,{step1:!0,step2:!0}),r.a.createElement(ne,null,r.a.createElement("h3",{className:"my-5"},"Delivery Address"),k&&r.a.createElement(te,{variant:"danger"},k),r.a.createElement(B.a,{onSubmit:function(e){e.preventDefault(),l&&u&&j&&d&&v?(P({country:l,city:u,email:j,phoneNumber:d,address:v}),A.push("/createorder")):x("One or more empty field(s)")}},r.a.createElement(B.a.Group,{controlId:"countryId"},r.a.createElement(B.a.Label,null,"Country"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter your country",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"cityId"},r.a.createElement(B.a.Label,null,"City"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter your city",value:u,onChange:function(e){return m(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"emailId"},r.a.createElement(B.a.Label,null,"Email"),r.a.createElement(B.a.Control,{type:"email",placeholder:"Enter your email address",value:j,onChange:function(e){return C(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"phoneNumberId"},r.a.createElement(B.a.Label,null,"Phone number"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter your phone number",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(B.a.Group,{controlId:"addressId"},r.a.createElement(B.a.Label,null,"Address"),r.a.createElement(B.a.Control,{type:"text",placeholder:"Enter your address",value:v,onChange:function(e){return b(e.target.value)}})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Next"))))},ue=(a(145),a(146),function(e){var t=Math.round(100*e)/100,a=Math.round(10*t)/10;return Math.round(a)}),me=function(e){var t=Object(n.useContext)(w).state,a=t.cartItems,l=t.shippingAddress,c=t.total,s=t.itemCount,i=Object(n.useState)(""),p=Object(h.a)(i,2),d=p[0],E=p[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),v=g[0],b=g[1],y=Object(n.useContext)(x).existUser,O=e.history;t.itemsPrice=c,t.shippingPrice=c>150?0:85,t.taxPrice=ue(Number(.15*c)),t.totalPrice=ue(Number(t.shippingPrice+t.taxPrice)+Number(c));var j=function(){var e=Object(I.a)(C.a.mark((function e(n){var r,c,o,u,m;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={orderItems:a,shippingAddress:l,paymentMethod:v,quantity:s,itemsPrice:t.itemsPrice,taxtPrice:t.taxPrice,shippingPrice:t.shippingPrice,totalPrice:t.totalPrice},e.prev=2,c={headers:{Authorization:"Bearer ".concat(y.token),"Content-Type":"application/json"}},e.next=6,k.a.post("/api/orders",r,c);case 6:return o=e.sent,e.next=9,o.data;case 9:u=e.sent,console.dir(u),E(""),O.push("/order/".concat(u._id)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),m=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,E(m);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{step1:!0,step2:!0,step3:!0}),r.a.createElement(B.a,{onSubmit:j},r.a.createElement(u.a,null,r.a.createElement(m.a,{md:8},r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Payment Method"),r.a.createElement(B.a.Group,null,r.a.createElement(m.a,{md:5},r.a.createElement(B.a.Check,{inline:!0,label:"Paypal or Credit Card",name:"paymentMethod",type:"radio",id:"paypal",value:"PayPal",onChange:function(e){return b(e.target.value)}}),r.a.createElement(B.a.Check,{inline:!0,label:"Stripe",name:"paymentMethod",type:"radio",id:"stripe",value:"Stripe",disabled:!0})))),r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Shipping Address"),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:"),l.address,",",l.city,r.a.createElement("br",null),l.email,", ",l.country)),r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Order Items"),0===a.length?r.a.createElement(te,null,"Your cart is empty"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{variant:"flush"},a.map((function(e,t){return r.a.createElement(Q.a.Item,{key:t},r.a.createElement(u.a,null,r.a.createElement(m.a,{md:1},r.a.createElement(Y.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(m.a,null,r.a.createElement(o.Link,{to:"/product/".concat(e._id)},e.name)),r.a.createElement(m.a,{md:1},e.size,'"'),r.a.createElement(m.a,{md:4},e.quantity," x $",e.price," = $",e.quantity*e.price)))}))))))),r.a.createElement(m.a,{md:4},r.a.createElement(G.a,null,r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("h2",null,"Order Summary")),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Items(",s,")"),r.a.createElement(m.a,null,"$",t.itemsPrice))),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Shipping"),r.a.createElement(m.a,null,"$",t.shippingPrice))),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Tax"),r.a.createElement(m.a,null,"$",t.taxPrice))),r.a.createElement(Q.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Total"),r.a.createElement(m.a,null,"$",t.totalPrice))),d&&r.a.createElement(Q.a.Item,null,r.a.createElement(te,{variant:"danger"},d)),r.a.createElement(Q.a.Item,null,r.a.createElement(K.a,{type:"submit",className:"btn-block",disabled:0===a},"Create Order"))))))))},ie=a(142),pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{animation:"border",role:"status",style:{width:"160px",height:"160px",margin:"auto",display:"block"}}))},de=function(e){var t=e.match,a=(e.history,t.params.id),l=Object(n.useState)({}),c=Object(h.a)(l,2),s=c[0],i=c[1],p=Object(n.useState)(!0),d=Object(h.a)(p,2),E=d[0],f=d[1],g=Object(n.useState)(""),v=Object(h.a)(g,2),b=(v[0],v[1]),y=Object(n.useContext)(x).existUser;return Object(n.useEffect)((function(){function e(){return(e=Object(I.a)(C.a.mark((function e(){var t,n,r,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{Authorization:"Bearer ".concat(y.token),"Content-Type":"application/json"}},e.next=4,k.a.get("/api/orders/".concat(a),t);case 4:n=e.sent,r=n.data,console.dir(r),i(r),f(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),l=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,b(l);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,!0===E?r.a.createElement(pe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Order # ",a),r.a.createElement(u.a,null,r.a.createElement(m.a,{md:8},r.a.createElement(Q.a,{variant:"flush"},r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Shipping"),r.a.createElement("p",null,r.a.createElement("strong",null,"Names: "),s.user.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: ")," ",s.user&&s.user.email),s.shippingAddress&&r.a.createElement("p",null,r.a.createElement("strong",null,"Address:"),s.shippingAddress.address,", ",s.shippingAddress.city," ",s.shippingAddress.postalCode,", ",s.shippingAddress.country),s.isDelivered?r.a.createElement(te,{variant:"success"},"Delivered on ",s.deliveredAt):r.a.createElement(te,{variant:"danger"},"Not Delivered")),r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Payment Method"),r.a.createElement("p",null,s.paymentMethod),s.isPaid?r.a.createElement(te,{variant:"success"},"Paind on ",s.paidAt):r.a.createElement(te,{variant:"danger"},"Not paid")),r.a.createElement(Q.a.Item,null,r.a.createElement("h4",null,"Order Items"),0===s.orderItems.length?r.a.createElement(te,null,"Order is empty"):r.a.createElement(Q.a,{variant:"flus"},s.orderItems.map((function(e,t){return r.a.createElement(Q.a.Item,{key:t},r.a.createElement(u.a,null,r.a.createElement(m.a,{md:1},r.a.createElement(Y.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(m.a,null,r.a.createElement(o.Link,{to:"/product/".concat(e._id)},e.name)),r.a.createElement(m.a,{md:1},e.size,'"'),r.a.createElement(m.a,{md:4},e.quantity," x $",e.price," = $",e.quantity*e.price)))})))))),r.a.createElement(m.a,{md:4}))))},Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,r.a.createElement(U,null,r.a.createElement(z,null),r.a.createElement(s.a,null,r.a.createElement("main",{className:"py-3"},r.a.createElement(D.g,null,r.a.createElement(D.d,{path:"/",exact:!0,component:V}),r.a.createElement(D.d,{path:"/home",component:V}),r.a.createElement(D.d,{path:"/login",component:re}),r.a.createElement(oe,{path:"/profile",component:ce}),r.a.createElement(oe,{path:"/shipping",component:se}),r.a.createElement(oe,{path:"/createorder",component:me}),r.a.createElement(oe,{path:"/order/:id",component:de}),r.a.createElement(D.d,{path:"/register",component:le}),r.a.createElement(D.d,{path:"/product/:id",component:X}),r.a.createElement(D.d,{path:"/cart",component:ae})))),r.a.createElement(i,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(129),a(130);c.a.render(r.a.createElement(o.BrowserRouter,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(131)}},[[97,1,2]]]);
//# sourceMappingURL=main.ba30150a.chunk.js.map