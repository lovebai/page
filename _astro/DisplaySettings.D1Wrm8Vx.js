import{S as L,i as y,s as I,c as K,e as g,x as F,a as U,b as p,d as _,y as G,f as $,g as b,h as s,C as V,D as ee,j as te,k as l,l as J,m as q,u as oe,n as se,o as ae,A as ne,t as re,q as ie,v as ue,E as le}from"./index.BYyvZe9O.js";import{g as ce,a as Q,s as de}from"./setting-utils.B5sRXqnj.js";var j=(e=>(e[e.Home=0]="Home",e[e.Archive=1]="Archive",e[e.About=2]="About",e))(j||{});const me={title:"This is Test Page",subtitle:"Test Site",lang:"en",themeHue:250,banner:{enable:!1,src:"assets/images/demo-banner.png"}};j.Home,j.Archive,j.About;var e=(e=>(e.home="home",e.about="about",e.archive="archive",e.tags="tags",e.categories="categories",e.recentPosts="recentPosts",e.comments="comments",e.untitled="untitled",e.uncategorized="uncategorized",e.noTags="noTags",e.wordCount="wordCount",e.wordsCount="wordsCount",e.minuteCount="minuteCount",e.minutesCount="minutesCount",e.postCount="postCount",e.postsCount="postsCount",e.themeColor="themeColor",e.more="more",e.author="author",e.publishedAt="publishedAt",e.license="license",e))(e||{});const z={[e.home]:"Home",[e.about]:"About",[e.archive]:"Archive",[e.tags]:"Tags",[e.categories]:"Categories",[e.recentPosts]:"Recent Posts",[e.comments]:"Comments",[e.untitled]:"Untitled",[e.uncategorized]:"Uncategorized",[e.noTags]:"No Tags",[e.wordCount]:"word",[e.wordsCount]:"words",[e.minuteCount]:"minute",[e.minutesCount]:"minutes",[e.postCount]:"post",[e.postsCount]:"posts",[e.themeColor]:"Theme Color",[e.more]:"More",[e.author]:"Author",[e.publishedAt]:"Published at",[e.license]:"License"},X={[e.home]:"Home",[e.about]:"About",[e.archive]:"Archive",[e.tags]:"タグ",[e.categories]:"カテゴリ",[e.recentPosts]:"最近の投稿",[e.comments]:"コメント",[e.untitled]:"タイトルなし",[e.uncategorized]:"カテゴリなし",[e.noTags]:"タグなし",[e.wordCount]:"文字",[e.wordsCount]:"文字",[e.minuteCount]:"分",[e.minutesCount]:"分",[e.postCount]:"件の投稿",[e.postsCount]:"件の投稿",[e.themeColor]:"テーマカラー",[e.more]:"もっと",[e.author]:"作者",[e.publishedAt]:"公開日",[e.license]:"ライセンス"},he={[e.home]:"主页",[e.about]:"关于",[e.archive]:"归档",[e.tags]:"标签",[e.categories]:"分类",[e.recentPosts]:"最新文章",[e.comments]:"评论",[e.untitled]:"无标题",[e.uncategorized]:"未分类",[e.noTags]:"无标签",[e.wordCount]:"字",[e.wordsCount]:"字",[e.minuteCount]:"分钟",[e.minutesCount]:"分钟",[e.postCount]:"篇文章",[e.postsCount]:"篇文章",[e.themeColor]:"主题色",[e.more]:"更多",[e.author]:"作者",[e.publishedAt]:"发布于",[e.license]:"许可协议"},ge={[e.home]:"首頁",[e.about]:"關於",[e.archive]:"彙整",[e.tags]:"標籤",[e.categories]:"分類",[e.recentPosts]:"最新文章",[e.comments]:"評論",[e.untitled]:"無標題",[e.uncategorized]:"未分類",[e.noTags]:"無標籤",[e.wordCount]:"字",[e.wordsCount]:"字",[e.minuteCount]:"分鐘",[e.minutesCount]:"分鐘",[e.postCount]:"篇文章",[e.postsCount]:"篇文章",[e.themeColor]:"主題色",[e.more]:"更多",[e.author]:"作者",[e.publishedAt]:"發佈於",[e.license]:"許可協議"},pe=z,be={en:z,en_us:z,en_gb:z,en_au:z,zh_cn:he,zh_tw:ge,ja:X,ja_jp:X};function fe(e){return be[e.toLowerCase()]||pe}function Y(e){return fe(me.lang)[e]}const _e=e=>({}),Z=e=>({});function ve(t){let o,a,n,r,i,u,c,d,m,h,C,v,f,w,x,A,k,y=Y(e.themeColor)+"";const z=t[4]["restore-icon"],T=K(z,t,t[3],Z);return{c(){o=g("div"),a=g("div"),n=g("div"),r=F(y),i=U(),u=g("button"),c=g("div"),T&&T.c(),d=U(),m=g("div"),h=g("div"),C=F(t[0]),v=U(),f=g("div"),w=g("input"),this.h()},l(e){o=p(e,"DIV",{id:!0,class:!0});var s=_(o);a=p(s,"DIV",{class:!0});var l=_(a);n=p(l,"DIV",{class:!0});var g=_(n);r=G(g,y),i=$(g),u=p(g,"BUTTON",{"aria-label":!0,class:!0});var x=_(u);c=p(x,"DIV",{class:!0});var A=_(c);T&&T.l(A),A.forEach(b),x.forEach(b),g.forEach(b),d=$(l),m=p(l,"DIV",{class:!0});var k=_(m);h=p(k,"DIV",{id:!0,class:!0});var z=_(h);C=G(z,t[0]),z.forEach(b),k.forEach(b),l.forEach(b),v=$(s),f=p(s,"DIV",{class:!0});var j=_(f);w=p(j,"INPUT",{"aria-label":!0,type:!0,min:!0,max:!0,class:!0,id:!0,step:!0,style:!0}),j.forEach(b),s.forEach(b),this.h()},h(){s(c,"class","text-[var(--btn-content)] svelte-3akcb9"),s(u,"aria-label","Reset to Default"),s(u,"class","btn-regular w-7 h-7 rounded-md active:scale-90 svelte-3akcb9"),V(u,"opacity-0",t[0]===t[1]),V(u,"pointer-events-none",t[0]===t[1]),s(n,"class","flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3 before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)] before:absolute before:-left-3 before:top-[0.33rem] svelte-3akcb9"),s(h,"id","hueValue"),s(h,"class","transition bg-[var(--btn-regular-bg)] w-10 h-7 rounded-md flex justify-center font-bold text-sm items-center text-[var(--btn-content)] svelte-3akcb9"),s(m,"class","flex gap-1 svelte-3akcb9"),s(a,"class","flex flex-row gap-2 mb-3 items-center justify-between svelte-3akcb9"),s(w,"aria-label",Y(e.themeColor)),s(w,"type","range"),s(w,"min","0"),s(w,"max","360"),s(w,"class","slider svelte-3akcb9"),s(w,"id","colorSlider"),s(w,"step","5"),ee(w,"width","100%"),s(f,"class","w-full h-6 px-1 bg-[oklch(0.80_0.10_0)] dark:bg-[oklch(0.70_0.10_0)] rounded select-none svelte-3akcb9"),s(o,"id","display-setting"),s(o,"class","float-panel closed absolute transition-all w-80 fixed right-4 px-4 py-4 svelte-3akcb9")},m(e,s){te(e,o,s),l(o,a),l(a,n),l(n,r),l(n,i),l(n,u),l(u,c),T&&T.m(c,null),l(a,d),l(a,m),l(m,h),l(h,C),l(o,v),l(o,f),l(f,w),J(w,t[0]),x=!0,A||(k=[q(u,"click",t[2]),q(w,"change",t[5]),q(w,"input",t[5])],A=!0)},p(e,[t]){T&&T.p&&(!x||8&t)&&oe(T,z,e,e[3],x?ae(z,e[3],t,_e):se(e[3]),Z),(!x||3&t)&&V(u,"opacity-0",e[0]===e[1]),(!x||3&t)&&V(u,"pointer-events-none",e[0]===e[1]),(!x||1&t)&&ne(C,e[0]),1&t&&J(w,e[0])},i(e){x||(re(T,e),x=!0)},o(e){ie(T,e),x=!1},d(e){e&&b(o),T&&T.d(e),A=!1,ue(k)}}}function Ce(e,t,s){let{$$slots:o={},$$scope:a}=t,n=ce();const r=Q();return e.$$set=e=>{"$$scope"in e&&s(3,a=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&(n||0===n)&&de(n)},[n,r,function(){s(0,n=Q())},a,o,function(){n=le(this.value),s(0,n)}]}class ke extends L{constructor(e){super(),y(this,e,Ce,ve,I,{})}}export{ke as default};