_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("pEj2"),i=n("o8Zq"),l=n("sp93"),f=a.a.createElement,u=function(e){var t=e.breakpoint,n=e.as,o=e.children,a="dark"===Object(c.a)().colorMode;return f(l.e,{as:n,fontSize:Object(r.a)({base:"4rem"},t,"6rem"),lineHeight:"3.4rem",fontWeight:"black",color:a?"pink.100":"black"},o)},s=a.a.createElement,d=function(){return s(l.a,{pt:"1rem",pl:"1rem",pos:{base:"relative",md:"fixed"},mb:{base:"2rem",md:"0"},w:"100%",display:"flex",alignItems:"center"},s(l.h,{fontSize:"2rem"},"\ud83d\ude34"),s(l.g,null))},p=a.a.createElement,h=function(e){var t=e.children;return p(i.d,{mb:"1.5rem",fontSize:"lg",fontWeight:"light",lineHeight:"tall"},t)},m=n("YFqc"),v=n.n(m),b=a.a.createElement,w=function(e){var t=e.href,n=e.color,r=e.children;return b(v.a,{href:t,passHref:!0},b(i.c,{color:n,fontWeight:"bold"},r))},g="#D60270",y=(n("94/9"),a.a.createElement);t.default=function(){var e="dark"===Object(c.a)().colorMode;return y(i.a,{bgColor:e?"charcoal":"pink.100"},y(d,null),y(i.b,{minH:"100vh"},y(i.a,{w:Object(r.a)({base:"90%"},"md","58%")},y(u,{as:"h1",breakpoint:"md"},"hi, i'm renzo!"),y(i.a,{w:Object(r.a)({base:"100%"},"md","85%"),mt:"2rem"},y(h,null,"i write code and music :)"),y(h,null,"this website is currently a placeholder. you can view my work on my"," ",y(w,{href:"https://www.renzomledesma.me/",color:g},"portfolio site"),". thanks and have a great day! \ud83d\ude0c")))))}},"94/9":function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),i=n("elyg"),l=n("nOHt"),f=new Map,u=window.IntersectionObserver,s={};var d=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),s[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],f=o[1],h=(0,l.useRouter)(),m=h&&h.pathname||"/",v=c.default.useMemo((function(){var t=(0,i.resolveHref)(m,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(m,e.as):a||o}}),[m,e.href,e.as]),b=v.href,w=v.as;c.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,i.isLocalURL)(b)&&!s[b+"%"+w])return d(a,(function(){p(h,b,w)}))}),[t,a,b,w,h]);var g=e.children,y=e.replace,E=e.shallow,k=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var _=c.Children.only(g),j={ref:function(e){e&&f(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,w,y,E,k)}};return t&&(j.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(h,b,w,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(j.href=(0,i.addBasePath)((0,i.addLocale)(w,h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(_,j)};t.default=h}},[["/EDR",0,1,3,2,4]]]);