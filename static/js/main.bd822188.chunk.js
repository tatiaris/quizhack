(this.webpackJsonpquizhack=this.webpackJsonpquizhack||[]).push([[0],{109:function(e,t){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),l=a(10),o=a(64),i=a.n(o);var u=function(){return r.a.createElement("div",{className:"header"},"Quizhack")},m=a(154),p=a(148),d=a(66),f=a.n(d);var h=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return r.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.fetch_topic_cards(c)}(t)},className:"topic_form"},r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(m.a,{required:!0,onChange:function(e){return s(e.target.value)},id:"input-with-icon-grid",label:"Topic"})))))};function E(e){var t=e.prompt,a=e.answer,n=e.search_phrase;try{if(e.display&&(t.toUpperCase().includes(n.toUpperCase())||a.toUpperCase().includes(n.toUpperCase()))){if(""!==n){var c=new RegExp(n,"gi");t=t.replace(c,(function(e){return'<span class="search_match">'+e+"</span>"})),a=a.replace(c,(function(e){return'<span class="search_match">'+e+"</span>"}))}return r.a.createElement("div",{className:"cards_container"},r.a.createElement("div",{className:"card p_card",dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:"card a_card",dangerouslySetInnerHTML:{__html:a}}))}return r.a.createElement("div",null)}catch(s){return console.log("p:",t,"a:",a,"s:",n),console.log(s),r.a.createElement("div",null)}}var _=function(e){return r.a.createElement("div",{className:"flex_container"},e.cards.map((function(t){return r.a.createElement(E,{key:t.id.toString(),prompt:t.prompt,answer:t.answer,display:t.display,search_phrase:e.search_phrase})})))},b=a(152);var v=function(e){return 0===e.state?r.a.createElement("div",null):r.a.createElement("div",{className:"progress_container"},r.a.createElement(b.a,null))};var g=function(e){return 0===e.state?r.a.createElement("div",null):r.a.createElement("div",{className:"term_count_container"},r.a.createElement("span",{className:"term_count"},e.card_count)," total terms found from the top ",r.a.createElement("span",{className:"term_count"},e.set_count)," sets")},j=a(153),O=a(156),y=a(155);var S=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",{className:"options_container"},r.a.createElement(j.a,{row:!0},r.a.createElement(O.a,{control:r.a.createElement(y.a,{checked:u,onChange:function(t){m(t.target.checked),e.apply_sort(!u)},name:"sorted"}),label:"Sort"}),r.a.createElement(O.a,{control:r.a.createElement(y.a,{checked:c,onChange:function(t){s(t.target.checked),e.apply_uniqueness(!c)},name:"uniquify"}),label:"Unique"})))},k=a(67),N=a.n(k);var w=function(e){return e.state?r.a.createElement(p.a,{className:"flex_center",container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(p.a,{item:!0},r.a.createElement(N.a,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(m.a,{onChange:function(t){return e.apply_search(t.target.value)},id:"input-search",label:""}))):r.a.createElement("div",null)};var q,C=function(e){return"full"===e.status?r.a.createElement("footer",{className:"footer_full"},"Made by ",r.a.createElement("a",{className:"my_link",target:"_blank",href:"https://tatia.me",rel:"noopener noreferrer"},"Rishabh Tatia"),"."):r.a.createElement("footer",{className:"footer_short"},"Made by ",r.a.createElement("a",{className:"my_link",target:"_blank",href:"https://tatia.me",rel:"noopener noreferrer"},"Rishabh Tatia"),".")};a(116);var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),m=o[0],p=o[1],d=Object(n.useState)([]),f=Object(l.a)(d,2),E=f[0],b=f[1],j=Object(n.useState)(0),O=Object(l.a)(j,2),y=O[0],k=O[1],N=Object(n.useState)(0),x=Object(l.a)(N,2),I=x[0],M=x[1],T=Object(n.useState)(0),U=Object(l.a)(T,2),z=U[0],R=U[1],B=Object(n.useState)(!1),H=Object(l.a)(B,2),J=H[0],L=H[1],W=Object(n.useState)(0),A=Object(l.a)(W,2),D=A[0],Q=A[1],$=Object(n.useState)(!1),F=Object(l.a)($,2),G=F[0],K=F[1],P=Object(n.useState)(!1),V=Object(l.a)(P,2),X=V[0],Y=V[1],Z=Object(n.useState)("empty"),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(l.a)(ne,2),ce=re[0],se=re[1];return Object(n.useEffect)((function(){(q=i()("https://quizhack.glitch.me/")).on("cards_update",(function(e){c(e.cards),b(e.sorted_cards),p(e.unsorted_cards),k(e.card_count),M(e.set_count),Q(0),R(1),ae("full"),L(!0)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(h,{fetch_topic_cards:function(e){q.emit("requesting_cards",{topic:e,sorted:X,unique:G}),c([]),k(0),M(0),Q(1),R(0),ae("empty"),L(!1),se("")}}),r.a.createElement(g,{state:z,card_count:y,set_count:I}),r.a.createElement(S,{apply_sort:function(e){Y(e),c(e?E:m)},apply_uniqueness:function(e){var t=[];if(e)for(var n=0;n<a.length;n++)t.push(a[n]),t[n].display=t[n].unique,E[n].display=E[n].unique,m[n].display=m[n].unique;else for(var r=0;r<a.length;r++)t.push(a[r]),t[r].display=!0,E[r].display=!0,m[r].display=!0;K(e),c(t)}}),r.a.createElement(w,{state:J,apply_search:se}),r.a.createElement(v,{state:D}),r.a.createElement(_,{cards:a,search_phrase:ce}),r.a.createElement(C,{status:te}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(117)}},[[75,1,2]]]);
//# sourceMappingURL=main.bd822188.chunk.js.map