import{j as U,g as C,k as ce,i as J,l as Fe,m as Z,n as B,p as Q,u as Y,q as ze,s as Te,v as Ie,x as I,y as T,z as ee,A as E,B as ue,C as He,D as Oe,E as te,F as Ae,f as b,o,h as v,w as g,G as P,H as S,I as de,c as p,J as L,K as M,t as y,L as $,M as A,r as u,b as h,N as pe,O as Ve,P as V,Q as D,a as f,T as W,e as De,R as re,d as x,S as xe,U as Ue,V as Ee,W as Ge,X as Re}from"./app.bb55278a.js";import{u as fe,b as me,a as je}from"./index.c117efff.js";import{d as We,u as ge}from"./defineVariant.6257c1c1.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import G from"./AutoLink.8eebd4be.js";import{C as ne,b as qe,T as ve}from"./ToggleChevron.a1fcd54a.js";import{t as _e}from"./toArray.7df412a1.js";import{M as q}from"./MPButton.d8791bc1.js";import{u as F}from"./useTranslate.e9001c65.js";import Ke from"./MPImg.68aa24a8.js";import{I as Xe}from"./Icon.28541f75.js";const Je=e=>e!==void 0,he=e=>ce(e)?J(e):Fe(e,"children")?{...e,children:e.children.map(he)}:e,$e=()=>{const e=U();return C(()=>{var t;return((t=e.value.navbar)!=null?t:[]).map(he)})},Ze=()=>{const e=Z(),t=B(),{languages:r}=t.value;return C(()=>{let a=[];return typeof r=="string"||Array.isArray(r)?a=_e(r).map(c=>{let l=c,n;return typeof c!="string"&&([l,n]=Object.entries(c)[0]),{localeShort:l,path:n}}):r&&(a=Object.entries(r).map(([c,l])=>({path:l!=null?l:void 0,localeShort:c}))),a.map(c=>({...c,language:c.localeShort?e.get(c.localeShort):void 0}))})},ae=(e,t)=>{var i,d;const r=Q(),a=Y(),c=U(),l=(i=c.value.locales[e.path])!=null?i:{},n=`${l.lang}`;let s;return n===c.value.lang?s=r.currentRoute.value.fullPath:t?s=e.path+t:s=r.currentRoute.value.path.replace(a.value,e.path),s.endsWith("/")||(s=`${s}/`.replace(".html","/").replace(/\/+/g,"/")),{link:s,text:(d=l.languageName)!=null?d:l.language,language:e}},be=()=>{const e=Y(),t=U(),r=F(),a=Z();return{dropdown:C(()=>{var i,d,m;const l=Ze();let n;const s=t.value.availableLanguages;if((i=l.value)!=null&&i.length?n=l.value.filter(_=>{var w,R;return((w=a.current)==null?void 0:w.value.locale)!==((R=_.language)==null?void 0:R.locale)}).map(_=>{if(!!_.language)return ae(_.language,_.path)}).filter(Je):n=s.filter(_=>{var w;return((w=a.current)==null?void 0:w.value.locale)!==_.locale}).map(_=>ae(_)),n=n.filter(_=>ze(_.link)),!!n.length)return{text:(d=r("selectLanguageText"))!=null?d:"\u2013",ariaLabel:(m=r("selectLanguageAriaLabel"))!=null?m:"\u2013",locale:e,children:n}})}},ke=()=>{const e=Te(Ie);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};let j,N;const H=()=>{const e=I(),t=ke(),r=$e(),{lg:a}=Qe(),c=C(()=>!t.value.length);N!=null||(N=T(!1)),j!=null||(j=C(()=>{const i=a.value&&!c.value;return n.value&&(i||N.value)}));const l=C(()=>t.value.length?t.value:r.value),n=C(()=>{var i,d;return((d=(i=l.value)==null?void 0:i.length)!=null?d:0)>0}),s=i=>{N.value=i!=null?i:!N.value};return ee(()=>e.path,()=>s(!1)),{items:l,isOpen:j,isNavbar:c,exists:n,toggled:N,toggle:s}},Qe=()=>fe(me),Ce=()=>{const e=E(),t=B();return C(()=>{var a,c,l;return((a=t.value.contributors)!=null?a:!0)&&(l=(c=e.value.git)==null?void 0:c.contributors)!=null?l:null})},se=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ye=(e,t)=>{if(t.hash===e)return!0;const r=se(t.path),a=se(e);return r===a},Le=(e,t)=>e.link&&Ye(e.link,t)?!0:e.children?e.children.some(r=>Le(r,t)):!1,et=e=>!ue(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,tt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},nt=({docsRepo:e,editLinkPattern:t})=>{if(t)return t;const r=et(e);return r!==null?tt[r]:null},ot=({docsRepo:e,docsBranch:t,docsDir:r,filePathRelative:a,editLinkPattern:c})=>{if(!a)return null;const l=nt({docsRepo:e,editLinkPattern:c});return l?l.replace(/:repo/,ue(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,He(`${Oe(r)}/${a}`)):null},ye=()=>{const e=B(),t=E(),r=te();return C(()=>{var m,_,w;if(!((_=(m=e.value.editLink)!=null?m:r.value.editLink)!=null?_:!0))return null;const{repo:c,docsRepo:l=c,docsBranch:n="main",docsDir:s=""}=r.value;if(!l)return null;const i=F(),d=ot({docsRepo:l,docsBranch:n,docsDir:s,filePathRelative:t.value.filePathRelative});return d?{text:(w=i("editLinkText"))!=null?w:"Edit this page",link:d}:null})},we=()=>{const e=B(),t=E(),r=te();return C(()=>{var l,n,s,i;return!((n=(l=e.value.lastUpdated)!=null?l:r.value.lastUpdated)!=null?n:!0)||!((s=t.value.git)!=null&&s.updatedTime)?null:new Date((i=t.value.git)==null?void 0:i.updatedTime).toLocaleString()})},le=e=>e===!1?null:ce(e)?J(e):Ae(e)?e:!1,X=(e,t,r)=>{const a=e.findIndex(c=>c.link===t);if(a!==-1){const c=e[a+r];return c!=null&&c.link?c:null}for(const c of e)if(c.children){const l=X(c.children,t,r);if(l)return l}return null},rt=()=>{const e=B(),t=ke(),r=I();return{prevNavLink:C(()=>{const a=le(e.value.prev);return a!==!1?a:X(t.value,r.path,-1)}),nextNavLink:C(()=>{const a=le(e.value.next);return a!==!1?a:X(t.value,r.path,1)})}};let K=null,O=null;const at={wait:()=>K,pending:()=>{K=new Promise(e=>{O=e})},resolve:()=>{O==null||O(),K=null,O=null}},st=()=>at,lt=We("container",{fluid:"",sm:"max-w-screen-lg",md:"max-w-screen-xl"},{default:"md"}),ie=ge(lt),it=b({name:"ContentContainer",props:{type:ie.createVariantProp(),tag:{type:String,default:"div"}},setup:e=>({classes:ie.getVariantClasses(e.type)})});function ct(e,t,r,a,c,l){return o(),v(de(e.tag),{class:S(["md:px-6 mx-auto px-4 w-full",e.classes])},{default:g(()=>[P(e.$slots,"default")]),_:3},8,["class"])}var z=k(it,[["render",ct],["__file","ContentContainer.vue"]]);const ut=b({name:"HomeContent",components:{ContentContainer:z},setup:()=>({frontmatter:B()})}),dt={class:"home"},pt=["textContent"],ft=["textContent"];function mt(e,t,r,a,c,l){const n=u("ContentContainer");return o(),p("main",dt,[(o(!0),p(L,null,M(e.frontmatter.tree,s=>(o(),v(n,{key:s.title,class:"lg:py-12 md:py-10 py-6"},{default:g(()=>[s.title?(o(),p("h2",{key:0,class:"text-center",textContent:y(s.title)},null,8,pt)):$("",!0),s.subtitle?(o(),p("p",{key:1,class:"font-display text-center text-lg",textContent:y(s.subtitle)},null,8,ft)):$("",!0),s.render?(o(),p("div",A({key:2},s.render.attributes,{class:["auto-cols-fr gap-4 grid lg:gap-7 pt-5",{"grid-flow-col":!s.render.attributes}]}),[(o(!0),p(L,null,M(s.render.children,(i,d)=>(o(),v(de(i.component),A({key:d+JSON.stringify(i)},i.attributes),null,16))),128))],16)):$("",!0)]),_:2},1024))),128))])}var gt=k(ut,[["render",mt],["__file","HomeContent.vue"]]);const vt=ge(qe),_t=b({name:"FooterSection",components:{ContentBlock:ne},props:{variant:vt.createVariantProp()},setup:e=>({mergedVariant:C(()=>[..._e(e.variant),"border-top"])})});function ht(e,t,r,a,c,l){const n=u("ContentBlock");return o(),v(n,{variant:e.mergedVariant,class:"dark:text-zinc-400 text-sm text-zinc-600"},{default:g(()=>[P(e.$slots,"default")]),_:3},8,["variant"])}var oe=k(_t,[["render",ht],["__file","FooterSection.vue"]]);const $t=b({name:"LinkTree",components:{AutoLink:G},props:{items:{type:Array,required:!0}}}),bt={class:"leading-6"},kt=["textContent"];function Ct(e,t,r,a,c,l){const n=u("AutoLink"),s=u("LinkTree",!0);return o(!0),p(L,null,M(e.items,i=>(o(),p(L,{key:i.link},[h("div",bt,[i.text&&i.link?(o(),v(n,A({key:0},e.$attrs,{key:i.link,class:{"text-lg pb-2 pt-3 font-bold":i.children},item:i}),null,16,["class","item"])):i.text?(o(),p("p",{key:1,class:"font-bold text-lg",textContent:y(i.text)},null,8,kt)):$("",!0)]),i.children?(o(),v(s,A({key:0},e.$attrs,{items:i.children}),null,16,["items"])):$("",!0)],64))),128)}var Lt=k($t,[["render",Ct],["__file","LinkTree.vue"]]);const yt="0 0 135.7 203.6",wt="0 0 931.2 203.6",Pt=b({name:"MPLogo",components:{ClientOnly:pe},props:{showFrom:{type:String,default:null},fullFrom:{type:String,default:null}},setup:e=>{const t=Ve(fe(me)),r=C(()=>!e.showFrom||t[e.showFrom]),a=C(()=>!e.fullFrom||t[e.fullFrom]);return{viewBox:C(()=>a.value?wt:yt),show:r,showFull:a}}}),Mt={class:"h-full overflow-visible relative w-full"},St=["viewBox"],Bt=h("path",{class:"dark:fill-white fill-monstera-500",d:"M16.6,148c-5.7,0-11.2-2.9-14.2-8.2c-4.6-7.9-1.9-17.9,6-22.5L111,57.7c7.9-4.6,17.9-1.9,22.5,6 s1.9,17.9-6,22.5L24.9,145.8C22.3,147.3,19.5,148,16.6,148z M68.1,177.6c-5.7,0-11.2-2.9-14.2-8.2c-4.6-7.9-1.9-17.9,6-22.5 l51.3-29.8c7.9-4.6,17.9-1.9,22.5,6s1.9,17.9-6,22.5l-51.3,29.8C73.8,176.8,70.9,177.6,68.1,177.6z M16.5,88.7 c-5.7,0-11.2-2.9-14.2-8.2c-4.6-7.9-1.9-17.9,6-22.5l51.2-29.8c7.9-4.6,17.9-1.9,22.5,6s1.9,17.9-6,22.5L24.7,86.5 C22.1,88,19.3,88.7,16.5,88.7z"},null,-1),Nt=h("path",{class:"dark:fill-white fill-monstera-500",d:"M904.9,26.1h25.3v117.2h-25.3V26.1z M318.8,67.8c5.6,6,8.4,14.1,8.4,24.4v51h-25.3V96.3c0-4.9-1.1-8.7-3.2-11.4 c-2.2-2.7-5.4-4-9.8-4c-4.9,0-8.9,1.7-11.8,5.1c-2.9,3.4-4.4,7.7-4.4,13v44.3h-24.4v-47c0-4.9-1.1-8.7-3.2-11.4 c-2.2-2.7-5.4-4-9.8-4c-4.8,0-8.7,1.7-11.7,5.1c-3,3.4-4.5,7.7-4.5,13v44.3h-25.3V60.8h25.1v9.1c2.6-3.2,5.9-5.8,9.8-7.9 c4-2.1,8.7-3.2,14.1-3.2c3.3,0,6.2,0.3,8.8,1s4.8,1.6,6.8,2.7c1.9,1.1,3.6,2.3,5.1,3.7c1.5,1.3,2.7,2.7,3.6,3.9 c3.4-3.6,7.5-6.4,12.4-8.4s9.9-3,15.2-3C305.1,58.9,313.2,61.8,318.8,67.8L318.8,67.8z M710.4,59.7c1.6,0.2,3.1,0.6,4.7,1.2l-4,22.3 c-2.6-0.8-5.6-1.2-9.1-1.2c-6,0-10.8,1.8-14.5,5.4c-3.7,3.6-5.5,8.6-5.5,15.2v40.8h-25.3V60.7h25.1v10.6c2.1-2.8,5-5.5,8.7-8.1 s8.5-3.9,14.3-3.9C706.9,59.3,708.8,59.4,710.4,59.7z M748.6,93.6c-0.9,2.6-1.3,5.3-1.3,8.2c0,2.7,0.4,5.2,1.3,7.8 c0.9,2.6,2.1,4.9,3.8,6.9s3.7,3.6,6,4.9s5,1.9,8,1.9c4.2,0,7.8-0.8,10.7-2.5s5.2-3.5,6.9-5.4l14.5,16.2c-3.3,3.7-7.7,6.8-13.2,9.5 c-5.5,2.6-11.9,4-19.4,4c-6.5,0-12.5-1.1-17.8-3.2c-5.4-2.1-9.9-5.1-13.7-8.9c-3.8-3.8-6.8-8.4-8.9-13.7c-2.1-5.3-3.2-11.1-3.2-17.4 c0-6,1.1-11.6,3.3-16.8c2.2-5.2,5.2-9.8,9-13.7s8.4-7,13.8-9.2c5.3-2.2,11.2-3.4,17.5-3.4c7.3,0,13.7,1.2,19.1,3.6 c5.4,2.4,10,5.6,13.6,9.6l-15,16.2c-1.8-2.1-4.1-3.9-6.7-5.5c-2.7-1.6-6.2-2.4-10.5-2.4c-3,0-5.7,0.6-8,1.8s-4.4,2.8-6,4.7 C750.8,88.8,749.5,91,748.6,93.6L748.6,93.6z M611,60.7v5c-3.8-3.8-13.7-6.8-20.1-6.8c-6.5,0-11,1.1-16.3,3.2 c-5.4,2.1-9.9,5.1-13.7,9c-3.8,3.8-6.8,8.4-8.9,13.7c-2.1,5.3-3.2,11.1-3.2,17.4c0,6,1.1,11.6,3.3,16.8c2.2,5.2,5.2,9.8,9,13.7 c3.8,3.9,7.4,7,12.8,9.2c5.3,2.2,9.3,3.4,17.5,3.4c11.3,0,19.7-7.2,19.7-7.2v5.3h25V60.7H611z M611.3,102.3 c0,12.8-8.5,21.2-18.6,21.2s-18.8-8.4-18.8-21.2V102c0-12.9,8.6-21.2,18.8-21.2s18.6,8.5,18.6,21.2V102.3z M408.3,60.8H434 l-51,116.7h-27l14.7-34.3l-35.1-82.4h27.2l22,55.1L408.3,60.8z M891.4,102.9c0-25.5-16.6-44.2-40-44.2c-24.6,0-43,18.2-43,42.3v0.3 c0,25.9,18.8,43.7,44.2,43.7c15.3,0,26.6-6,34.5-15.8L872.2,116c-5.1,6.5-11.3,9.7-19.3,9.7c-10.7,0-18.3-5.7-20.7-16.6H891 C891.2,107,891.4,104.8,891.4,102.9z M831.9,94.2c1.5-9.7,8.4-16.8,18.3-16.8c10.1,0,16.4,6.8,17.8,16.8H831.9z M904.9,26.1h25.3 v117.2h-25.3V26.1z M318.8,67.8c5.6,6,8.4,14.1,8.4,24.4v51h-25.3V96.3c0-4.9-1.1-8.7-3.2-11.4c-2.2-2.7-5.4-4-9.8-4 c-4.9,0-8.9,1.7-11.8,5.1c-2.9,3.4-4.4,7.7-4.4,13v44.3h-24.4v-47c0-4.9-1.1-8.7-3.2-11.4c-2.2-2.7-5.4-4-9.8-4 c-4.8,0-8.7,1.7-11.7,5.1c-3,3.4-4.5,7.7-4.5,13v44.3h-25.3V60.8h25.1v9.1c2.6-3.2,5.9-5.8,9.8-7.9c4-2.1,8.7-3.2,14.1-3.2 c3.3,0,6.2,0.3,8.8,1s4.8,1.6,6.8,2.7c1.9,1.1,3.6,2.3,5.1,3.7c1.5,1.3,2.7,2.7,3.6,3.9c3.4-3.6,7.5-6.4,12.4-8.4s9.9-3,15.2-3 C305.1,58.9,313.2,61.8,318.8,67.8L318.8,67.8z M710.4,59.7c1.6,0.2,3.1,0.6,4.7,1.2l-4,22.3c-2.6-0.8-5.6-1.2-9.1-1.2 c-6,0-10.8,1.8-14.5,5.4c-3.7,3.6-5.5,8.6-5.5,15.2v40.8h-25.3V60.7h25.1v10.6c2.1-2.8,5-5.5,8.7-8.1s8.5-3.9,14.3-3.9 C706.9,59.3,708.8,59.4,710.4,59.7z M748.6,93.6c-0.9,2.6-1.3,5.3-1.3,8.2c0,2.7,0.4,5.2,1.3,7.8c0.9,2.6,2.1,4.9,3.8,6.9 s3.7,3.6,6,4.9s5,1.9,8,1.9c4.2,0,7.8-0.8,10.7-2.5s5.2-3.5,6.9-5.4l14.5,16.2c-3.3,3.7-7.7,6.8-13.2,9.5c-5.5,2.6-11.9,4-19.4,4 c-6.5,0-12.5-1.1-17.8-3.2c-5.4-2.1-9.9-5.1-13.7-8.9c-3.8-3.8-6.8-8.4-8.9-13.7c-2.1-5.3-3.2-11.1-3.2-17.4c0-6,1.1-11.6,3.3-16.8 c2.2-5.2,5.2-9.8,9-13.7s8.4-7,13.8-9.2c5.3-2.2,11.2-3.4,17.5-3.4c7.3,0,13.7,1.2,19.1,3.6c5.4,2.4,10,5.6,13.6,9.6l-15,16.2 c-1.8-2.1-4.1-3.9-6.7-5.5c-2.7-1.6-6.2-2.4-10.5-2.4c-3,0-5.7,0.6-8,1.8s-4.4,2.8-6,4.7C750.8,88.8,749.5,91,748.6,93.6L748.6,93.6 z M531.1,85.1c-2.2-5.2-5.2-9.8-9-13.7s-7.4-7-12.8-9.2c-5.3-2.2-9.3-3.4-17.5-3.4c-11.3,0-19.7,7.2-19.7,7.2v-5.3h-25v116.8h25 v-39.2c3.8,3.8,13.7,6.8,20.1,6.8c6.5,0,11-1.1,16.3-3.2c5.4-2.1,9.9-5.1,13.7-8.9c3.8-3.8,6.8-8.4,8.9-13.7 c2.1-5.3,3.2-11.1,3.2-17.4C534.4,95.9,533.3,90.3,531.1,85.1z M509.2,101.9c0,12.9-8.6,21.2-18.8,21.2c-10.2,0-18.6-8.5-18.6-21.2 v-0.3c0-12.8,8.5-21.2,18.6-21.2c10.1,0,18.8,8.5,18.8,21.2V101.9z M408.3,60.8H434l-51,116.7h-27l14.7-34.3l-35.1-82.4h27.2 l22,55.1L408.3,60.8z"},null,-1),Ft=h("path",{class:"dark:fill-white fill-black",d:"M546.9,170.3h-4.8v-6.6h4.8v-1.6c0-6.3,4.1-10,9.7-10c2.2,0,4.1,0.5,5.5,1.2l-1.6,5.4c-0.7-0.4-1.6-0.6-2.5-0.6 c-2.2,0-3.6,1.4-3.6,4.2v1.4h5.9v6.6h-5.9v22.2h-7.6V170.3z M562.9,178.1c0-8.2,5.7-15.1,15.2-15.1c9.6,0,15.3,6.9,15.3,15.1 c0,8.2-5.7,15.2-15.3,15.2C568.6,193.3,562.9,186.3,562.9,178.1z M585.6,178.1c0-4.5-2.7-8.4-7.4-8.4c-4.7,0-7.4,3.9-7.4,8.4 c0,4.5,2.6,8.4,7.4,8.4C582.9,186.5,585.6,182.6,585.6,178.1z M599.1,163.7h7.6v3.9c2-2.6,5.6-4.6,9.2-4.6v7.4 c-0.5-0.1-1.3-0.2-2.1-0.2c-2.5,0-5.9,1.4-7.1,3.3v19.1h-7.6V163.7z M655.7,188.8c-2.3,2.9-5.4,4.4-8.9,4.4 c-7.3,0-12.8-5.5-12.8-15.1c0-9.4,5.4-15.2,12.8-15.2c3.4,0,6.6,1.5,8.9,4.4v-14.7h7.6v39.9h-7.6V188.8z M655.7,173 c-1.3-1.9-4-3.3-6.6-3.3c-4.3,0-7.3,3.4-7.3,8.4c0,5,3,8.4,7.3,8.4c2.6,0,5.3-1.4,6.6-3.3V173z M684,163c8.6,0,14.5,6.5,14.5,15.9 v1.7H677c0.5,3.6,3.4,6.7,8.3,6.7c2.7,0,5.9-1.1,7.7-2.9l3.3,4.9c-2.9,2.6-7.4,4-11.9,4c-8.8,0-15.4-5.9-15.4-15.2 C669.1,169.7,675.2,163,684,163z M676.9,175.4h14.2c-0.2-2.7-2.1-6.4-7.1-6.4C679.3,169,677.2,172.5,676.9,175.4z M699.8,163.7h8.1 l7.5,20.1l7.5-20.1h8.2l-11.6,28.9h-8.2L699.8,163.7z M747.7,163c8.6,0,14.5,6.5,14.5,15.9v1.7h-21.5c0.5,3.6,3.4,6.7,8.3,6.7 c2.7,0,5.9-1.1,7.7-2.9l3.3,4.9c-2.9,2.6-7.4,4-11.9,4c-8.8,0-15.4-5.9-15.4-15.2C732.8,169.7,738.9,163,747.7,163z M740.6,175.4 h14.2c-0.2-2.7-2.1-6.4-7.1-6.4C743,169,741,172.5,740.6,175.4z M767.7,152.7h7.6v39.9h-7.6V152.7z M780.9,178.1 c0-8.2,5.7-15.1,15.2-15.1c9.6,0,15.3,6.9,15.3,15.1c0,8.2-5.7,15.2-15.3,15.2C786.7,193.3,780.9,186.3,780.9,178.1z M803.6,178.1 c0-4.5-2.7-8.4-7.4-8.4c-4.7,0-7.4,3.9-7.4,8.4c0,4.5,2.6,8.4,7.4,8.4C800.9,186.5,803.6,182.6,803.6,178.1z M817.1,203.5v-39.9h7.6 v3.6c2.2-2.8,5.4-4.4,8.9-4.4c7.4,0,12.8,5.5,12.8,15.1c0,9.6-5.4,15.2-12.8,15.2c-3.4,0-6.6-1.4-8.9-4.4v14.7H817.1z M831.2,169.7 c-2.5,0-5.3,1.4-6.5,3.3v10.2c1.3,1.8,4.1,3.3,6.5,3.3c4.4,0,7.3-3.4,7.3-8.4C838.5,173.1,835.6,169.7,831.2,169.7z M865.2,163 c8.6,0,14.5,6.5,14.5,15.9v1.7h-21.5c0.5,3.6,3.4,6.7,8.3,6.7c2.7,0,5.9-1.1,7.7-2.9l3.3,4.9c-2.9,2.6-7.4,4-11.9,4 c-8.8,0-15.4-5.9-15.4-15.2C850.2,169.7,856.4,163,865.2,163z M858,175.4h14.2c-0.2-2.7-2.1-6.4-7.1-6.4 C860.4,169,858.4,172.5,858,175.4z M885.1,163.7h7.6v3.9c2-2.6,5.6-4.6,9.2-4.6v7.4c-0.5-0.1-1.3-0.2-2.1-0.2 c-2.5,0-5.9,1.4-7.1,3.3v19.1h-7.6V163.7z M907.4,183.5c2.1,2,6.4,3.9,10,3.9c3.3,0,4.8-1.1,4.8-2.9c0-2-2.5-2.7-5.8-3.4 c-5-1-11.4-2.2-11.4-9c0-4.8,4.2-9.1,11.8-9.1c4.9,0,8.8,1.7,11.7,3.9l-3,5.2c-1.7-1.9-5-3.3-8.5-3.3c-2.7,0-4.5,1-4.5,2.7 c0,1.8,2.3,2.5,5.5,3.1c5,1,11.6,2.3,11.6,9.4c0,5.3-4.5,9.3-12.5,9.3c-5,0-9.9-1.7-12.9-4.5L907.4,183.5z"},null,-1),zt=[Nt,Ft];function Tt(e,t,r,a,c,l){const n=u("ClientOnly");return o(),v(n,null,{default:g(()=>[V(h("div",Mt,[(o(),p("svg",{class:"h-full max-h-full max-w-full",viewBox:e.viewBox},[Bt,f(W,{name:"fade",appear:""},{default:g(()=>[V(h("g",null,zt,512),[[D,e.showFull]])]),_:1})],8,St))],512),[[D,e.show]])]),_:1})}var It=k(Pt,[["render",Tt],["__file","MPLogo.vue"]]);const Ht=b({name:"NavbarBrand",components:{MPLogo:It},props:{logoShowFrom:{type:String,default:null},logoFullFrom:{type:String,default:null}},setup:()=>{const e=Y(),t=U(),r=te(),a=C(()=>{var l;return(l=r.value.home)!=null?l:e.value}),c=C(()=>t.value.title);return{navbarBrandLink:a,navbarBrandTitle:c}}}),Ot={class:"flex flex-grow h-12"},At=h("span",{class:"sr-only"}," To homepage ",-1);function Vt(e,t,r,a,c,l){const n=u("MPLogo"),s=u("RouterLink");return o(),p("div",Ot,[f(s,{to:e.navbarBrandLink},{default:g(()=>[At,f(n,{"show-from":e.logoShowFrom,"full-from":e.logoFullFrom},null,8,["show-from","full-from"])]),_:1},8,["to"])])}var Pe=k(Ht,[["render",Vt],["__file","NavbarBrand.vue"]]);const Dt=b({name:"HomeFooter",components:{AutoLink:G,ContentContainer:z,FooterSection:oe,LinkTree:Lt,NavbarBrand:Pe},props:{container:{type:String,default:"md"}},setup:()=>({siteLocale:U()})}),xt={class:"gap-3 grid grid-flow-col ml-auto my-auto"};function Ut(e,t,r,a,c,l){const n=u("LinkTree"),s=u("ContentContainer"),i=u("FooterSection"),d=u("NavbarBrand"),m=u("AutoLink");return o(),p(L,null,[f(i,null,{default:g(()=>[f(s,{class:"grid grid-cols-1 grid-gap-3 lg:grid-cols-none lg:grid-flow-col py-12 sm:grid-cols-2",type:e.container},{default:g(()=>[(o(!0),p(L,null,M(e.siteLocale.footer,_=>(o(),p("div",{key:_.link},[f(n,{items:[_]},null,8,["items"])]))),128))]),_:1},8,["type"])]),_:1}),f(i,null,{default:g(()=>[f(s,{class:"flex py-3"},{default:g(()=>[f(d,{"logo-full-from":"sm"}),h("div",xt,[(o(!0),p(L,null,M(e.siteLocale.footer2,_=>(o(),v(m,{key:_.link,item:_},null,8,["item"]))),128))])]),_:1})]),_:1})],64)}var Me=k(Dt,[["render",Ut],["__file","HomeFooter.vue"]]);const Et={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 483.42 452.1"},Gt=De('<defs><linearGradient id="a" x1="-165.3" y1="-231.48" x2="613.09" y2="-231.48" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0f5c47"></stop><stop offset="1" stop-color="#0c4e3c"></stop></linearGradient><linearGradient id="c" x1="100.2" y1="60.9" x2="-54.75" y2="-69.11" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#137959"></stop><stop offset=".32" stop-color="#136f53"></stop><stop offset="1" stop-color="#105d48"></stop></linearGradient><clipPath id="b"><path style="fill:none;" d="M-56 202h157.55v136.24H-56z"></path></clipPath></defs><path d="M1006 994.95c-6.87-20.24-9.13-42.28-34.17-67.33-44.41-44.42-64.98-23.85-109.39-68.27s-23.84-64.99-68.26-109.41c-44.41-44.42-64.98-23.85-109.39-68.26-44.41-44.42-23.84-64.99-68.25-109.4s-64.98-23.85-109.39-68.26c-44.41-44.42-23.84-64.99-68.25-109.4-44.41-44.41-64.98-23.85-109.39-68.26-44.41-44.42-23.84-64.99-68.25-109.4-44.41-44.42-64.98-23.85-109.39-68.26-44.41-44.42-23.84-64.99-68.25-109.4C55.4 11.08-156.82 9.07-178 0v994.95h1184Z" style="fill:url(#a);"></path><g style="clip-path:url(#b);"><path d="M96.92 223.45-36.14 335.06c-5.03 4.24-12.58 3.57-16.81-1.46-4.24-5.03-3.57-12.58 1.46-16.81L81.56 205.18c5.03-4.24 12.58-3.57 16.81 1.46 4.24 5.03 3.57 12.58-1.46 16.81Z" style="fill:url(#c);"></path></g>',3),Rt=[Gt];function jt(e,t){return o(),p("svg",Et,Rt)}var Wt={render:jt};const qt=b({name:"MPButtonGroup"}),Kt={class:"gap-2 grid-flow-col inline-grid"};function Xt(e,t,r,a,c,l){return o(),p("div",Kt,[P(e.$slots,"default")])}var Jt=k(qt,[["render",Xt],["__file","MPButtonGroup.vue"]]);const Zt=b({name:"HomeHero",components:{MPButtonGroup:Jt,MPButton:q,ContentContainer:z,FloepjeBgLeft:Wt},setup:()=>{const e=B();return{useNavLink:J,frontmatter:e}}}),Qt=["textContent"],Yt=["textContent"];function en(e,t,r,a,c,l){const n=u("FloepjeBgLeft"),s=u("MPButton"),i=u("MPButtonGroup"),d=u("ContentContainer");return o(),v(d,{type:"fluid",class:"bg-monstera-500 dark:bg-monstera-700 overflow-hidden py-32 relative text-center"},{default:g(()=>[f(n,{role:"none","aria-hidden":"true",class:"absolute bottom-0 left-0 select-none w-1/3",onDragstart:re(m=>null,["prevent"])},null,8,["onDragstart"]),f(n,{role:"none","aria-hidden":"true",class:"absolute right-0 rotate-180 select-none top-0 w-1/3",onDragstart:re(m=>null,["prevent"])},null,8,["onDragstart"]),f(d,{class:"relative"},{default:g(()=>[h("h1",{class:"text-6xl text-white",textContent:y(e.frontmatter.title)},null,8,Qt),h("p",{class:"font-display pb-4 text-xl text-zinc-300",textContent:y(e.frontmatter.subtitle)},null,8,Yt),f(i,null,{default:g(()=>[(o(!0),p(L,null,M(e.frontmatter.actions,m=>(o(),v(s,{key:m.link,variant:m.variant,link:e.useNavLink(m.link)},{default:g(()=>[x(y(m.title),1)]),_:2},1032,["variant","link"]))),128))]),_:1})]),_:1})]),_:1})}var tn=k(Zt,[["render",en],["__file","HomeHero.vue"]]);const nn=b({name:"PageContainer",setup:()=>{const{isOpen:e}=H();return{isOpen:e}}});function on(e,t,r,a,c,l){return o(),p("div",{class:S(["min-h-full",{"lg:pl-80":e.isOpen}])},[P(e.$slots,"default")],2)}var Se=k(nn,[["render",on],["__file","PageContainer.vue"]]);const rn=b({name:"Home",components:{HomeContent:gt,HomeFooter:Me,HomeHero:tn,PageContainer:Se}});function an(e,t,r,a,c,l){const n=u("HomeHero"),s=u("HomeContent"),i=u("HomeFooter"),d=u("PageContainer");return o(),v(d,null,{default:g(()=>[f(n),f(s),f(i)]),_:1})}var sn=k(rn,[["render",an],["__file","Home.vue"]]);const ln="https://assets.myparcel.nl/skin/general-images/flags/:locale.png",cn=b({name:"LanguageOption",components:{MPImg:Ke},props:{language:{type:Object,required:!0}},setup:e=>({flag:C(()=>ln.replace(":locale",e.language.alpha2))})}),un={class:"flex"};function dn(e,t,r,a,c,l){const n=u("MPImg");return o(),p("span",un,[f(n,{role:"none",class:"my-auto pr-2 w-6",alt:`Switch to ${e.language.human}`,src:e.flag},null,8,["alt","src"]),x(" "+y(e.language.human),1)])}var Be=k(cn,[["render",dn],["__file","LanguageOption.vue"]]);const pn=b({name:"NavbarDropdown",components:{MPButton:q,ToggleChevron:ve},props:{item:{type:Object,required:!0},buttonAttributes:{type:Object,default:null}},setup:e=>{const t=T(!1),r=I(),a=C(()=>{var n;return(n=e.item.ariaLabel)!=null?n:e.item.text});return ee(()=>r.path,()=>{t.value=!1}),{dropdownAriaLabel:a,handleDropdown:n=>{n.detail===0?t.value=!t.value:t.value=!0},isLastItemOfArray:(n,s)=>s[s.length-1]===n,open:t}}}),fn=["textContent"],mn={class:"absolute bg-white border dark:bg-zinc-900 p-3 right-0 rounded-lg top-full"},gn={key:1};function vn(e,t,r,a,c,l){const n=u("ToggleChevron"),s=u("MPButton"),i=u("AutoLink");return o(),p("div",{class:"inline-flex relative",onMouseleave:t[1]||(t[1]=d=>e.open=!1)},[f(s,A({"aria-label":e.dropdownAriaLabel,variant:"outlineGray"},e.buttonAttributes,{onClick:e.handleDropdown,onMouseenter:t[0]||(t[0]=d=>e.open=!0)}),{default:g(()=>[e.buttonAttributes.icon?$("",!0):P(e.$slots,"current",{key:0,item:e.item,open:e.open},()=>[h("span",{textContent:y(e.item.text)},null,8,fn),f(n,{toggle:e.open},null,8,["toggle"])])]),_:3},16,["aria-label","onClick"]),V(h("div",mn,[h("ul",null,[(o(!0),p(L,null,M(e.item.children,d=>(o(),p("li",{key:d.text},[d.children?(o(),p(L,{key:0},[h("h4",null,[d.link?(o(),v(i,{key:0,item:d,onFocusout:m=>e.isLastItemOfArray(d,e.item.children)&&d.children.length===0&&(e.open=!1)},{default:g(()=>[P(e.$slots,"child",{item:d})]),_:2},1032,["item","onFocusout"])):(o(),p("span",gn,y(d.text),1))]),h("ul",null,[(o(!0),p(L,null,M(d.children,m=>(o(),p("li",{key:m.link},[f(i,{item:m,onFocusout:_=>e.isLastItemOfArray(m,d.children)&&e.isLastItemOfArray(d,e.item.children)&&(e.open=!1)},{default:g(()=>[P(e.$slots,"child",{item:m})]),_:2},1032,["item","onFocusout"])]))),128))])],64)):(o(),v(i,{key:1,item:d,onFocusout:m=>e.isLastItemOfArray(d,e.item.children)&&(e.open=!1)},{default:g(()=>[P(e.$slots,"child",{item:d})]),_:2},1032,["item","onFocusout"]))]))),128))])],512),[[D,e.open]])],32)}var Ne=k(pn,[["render",vn],["__file","NavbarDropdown.vue"]]);const _n=b({name:"LanguageDropdown",components:{LanguageOption:Be,NavbarDropdown:Ne},setup:()=>{const e=Z(),{dropdown:t}=be();return{currentLanguage:e.current,dropdown:t}}});function hn(e,t,r,a,c,l){const n=u("LanguageOption"),s=u("NavbarDropdown");return e.dropdown&&e.dropdown.children.length?(o(),v(s,{key:0,item:e.dropdown,"button-attributes":{variant:["iconSm","outlineGray"],icon:"globe"}},{child:g(({item:i})=>[f(n,{language:i.language},null,8,["language"])]),_:1},8,["item"])):$("",!0)}var $n=k(_n,[["render",hn],["__file","LanguageDropdown.vue"]]);const bn=b({name:"NavbarItems",components:{AutoLink:G,NavbarDropdown:Ne},setup:()=>{const e=I(),t=C(()=>{const[,a]=e.path.split("/");return`/${a}`}),r=$e();return{isActive:a=>t.value===a.link,navbarLinks:r}}}),kn={key:0,class:"gap-3 grid grid-flow-col"};function Cn(e,t,r,a,c,l){const n=u("NavbarDropdown"),s=u("AutoLink");return e.navbarLinks.length?(o(),p("nav",kn,[(o(!0),p(L,null,M(e.navbarLinks,i=>(o(),p("div",{key:i.text,class:S(["flex grow",{"border-b-2 border-b-goldfish-500 text-goldfish-500":e.isActive(i)}])},[i.children?(o(),v(n,{key:0,item:i},null,8,["item"])):(o(),v(s,{key:1,class:S(["block m-auto",{"opacity-60":i.sub,"text-bold":e.isActive(i)}]),item:i},null,8,["class","item"]))],2))),128))])):$("",!0)}var Ln=k(bn,[["render",Cn],["__file","NavbarItems.vue"]]);const yn=b({name:"ToggleColorModeButton",components:{MPButton:q},setup:()=>{const e=je(),t=F();return{dark:e,toggleColorMode:()=>{e.value=!e.value},translate:t}}});function wn(e,t,r,a,c,l){const n=u("MPButton");return o(),v(n,{variant:["iconSm","outlineGray"],title:e.translate("toggleColorMode"),"aria-label":e.translate("toggleColorMode"),icon:e.dark?"moon":"sun",onClick:e.toggleColorMode},null,8,["title","aria-label","icon","onClick"])}var Pn=k(yn,[["render",wn],["__file","ToggleColorModeButton.vue"]]);const Mn=b({name:"ToggleSidebarButton",emits:["toggle"],setup:(e,t)=>{const r=H();return{translate:F(),toggled:r.isOpen,hasSidebar:r.exists,toggle(){r.toggle(),t.emit("toggle")},burgerClasses:["bg-black","dark:bg-white","duration-100","h-0.5","inline-block","rounded-lg","transition-transform","w-full"]}}}),Sn=["title","aria-label"],Bn={class:"flex flex-col h-6 items-center justify-around w-6","aria-hidden":"true",tabindex:"-1"};function Nn(e,t,r,a,c,l){return e.hasSidebar?(o(),p("div",{key:0,class:"cursor-pointer flex lg:hidden p-3",title:e.translate("toggleSidebar"),"aria-label":e.translate("toggleSidebar"),"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=(...n)=>e.toggle&&e.toggle(...n))},[h("div",Bn,[h("span",{class:S([e.burgerClasses,{"-rotate-45 translate-y-2":e.toggled}])},null,2),h("span",{class:S([e.burgerClasses,{"scale-x-0":e.toggled}])},null,2),h("span",{class:S([e.burgerClasses,{"rotate-45 -translate-y-2":e.toggled}])},null,2)])],8,Sn)):$("",!0)}var Fn=k(Mn,[["render",Nn],["__file","ToggleSidebarButton.vue"]]);const zn=b({name:"MPHeader",components:{ContentBlock:ne,ContentContainer:z,LanguageDropdown:$n,NavbarBrand:Pe,NavbarItems:Ln,ToggleColorModeButton:Pn,ToggleSidebarButton:Fn},setup:()=>{const e=T(0);return{linksWrapperStyle:C(()=>e.value?{maxWidth:e.value+"px"}:{})}}});function Tn(e,t,r,a,c,l){const n=u("ToggleSidebarButton"),s=u("NavbarBrand"),i=u("NavbarItems"),d=u("ToggleColorModeButton"),m=u("LanguageDropdown"),_=u("NavbarSearch"),w=u("ContentContainer"),R=u("ContentBlock");return o(),v(R,{tag:"header",variant:"border-bottom",class:"flex h-16 left-0 right-0 sticky top-0 z-40"},{default:g(()=>[f(w,{type:"fluid",class:"fixed flex flex-grow items-center px-2 relative z-20"},{default:g(()=>[f(n),f(s,{"logo-full-from":"sm"}),h("div",{class:"gap-2 grid grid-flow-col items-center ml-auto whitespace-nowrap",style:xe(e.linksWrapperStyle)},[f(i,{class:"hidden lg:flex"}),f(d),f(m),f(_)],4)]),_:1})]),_:1})}var In=k(zn,[["render",Tn],["__file","MPHeader.vue"]]);const Hn=b({name:"SidebarItem",components:{ToggleChevron:ve},props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup:e=>{const{item:t,depth:r}=Ue(e),a=I(),c=Q(),l=C(()=>Le(t.value,a)),n=T(),s=B(),i=C(()=>{var w;return Number((w=s.value.sidebarDepth)!=null?w:1/0)}),{toggle:d,toggled:m}=H(),_=T(!0);return t.value.collapsible&&(_.value=l.value,n.value=()=>{_.value=!_.value},c.afterEach(()=>{_.value=l.value})),{isActive:l,isOpen:_,onClick:n,sidebarDepth:i,sidebarToggled:m,toggleSidebar:d,classes:C(()=>{var w;return["py-1 flex transition-all duration-100 sidebar-item",{"sidebar-item--has-children":(w=t.value.children)==null?void 0:w.length,"text-goldfish-500 sidebar-item--active":r.value>0&&l.value,"border-transparent":r.value===0||!l.value}]})}}}),On={key:0},An=["textContent"];function Vn(e,t,r,a,c,l){var d;const n=u("ToggleChevron"),s=u("AutoLink"),i=u("SidebarItem",!0);return e.sidebarDepth>=e.depth?(o(),p("li",On,[e.depth===0?(o(),p("h1",{key:0,class:"text-3xl",textContent:y(e.item.text)},null,8,An)):e.item.link?(o(),v(s,{key:1,class:S(e.classes),item:e.item,onClick:t[0]||(t[0]=m=>e.sidebarToggled?e.toggleSidebar:null)},{default:g(()=>[x(y(e.item.text)+" ",1),e.item.collapsible?(o(),v(n,{key:0,class:"ml-auto",toggle:e.isOpen},null,8,["toggle"])):$("",!0)]),_:1},8,["class","item"])):(o(),p("p",{key:2,class:S(e.classes),tabindex:"0",onClick:t[1]||(t[1]=(...m)=>e.onClick&&e.onClick(...m)),onKeydown:t[2]||(t[2]=Ee((...m)=>e.onClick&&e.onClick(...m),["enter"]))},[x(y(e.item.text)+" ",1),e.item.collapsible?(o(),v(n,{key:0,class:"ml-auto",toggle:e.isOpen},null,8,["toggle"])):$("",!0)],34)),(d=e.item.children)!=null&&d.length?(o(),v(W,{key:3},{default:g(()=>{var m;return[(m=e.item.children)!=null&&m.length?V((o(),p("ul",{key:0,class:S({"pl-3 ml-0.5 border-l":e.depth>0,"text-sm":e.depth>1})},[(o(!0),p(L,null,M(e.item.children,_=>(o(),v(i,{key:`${e.depth}${_.text}${_.link}`,item:_,depth:e.depth+1},null,8,["item","depth"]))),128))],2)),[[D,e.isOpen]]):$("",!0)]}),_:1})):$("",!0)])):$("",!0)}var Dn=k(Hn,[["render",Vn],["__file","SidebarItem.vue"]]);const xn=b({name:"SidebarItems",components:{SidebarItem:Dn},setup:()=>{const{items:e}=H();return{items:e}}}),Un={key:0};function En(e,t,r,a,c,l){const n=u("SidebarItem");return e.items.length?(o(),p("ul",Un,[(o(!0),p(L,null,M(e.items,s=>(o(),v(n,{key:s.link||s.text,item:s},null,8,["item"]))),128))])):$("",!0)}var Gn=k(xn,[["render",En],["__file","SidebarItems.vue"]]);const Rn=b({name:"MPSidebar",components:{SidebarItems:Gn,ContentBlock:ne},setup:()=>{const e=T(null),t=I();return ee(()=>t.hash,()=>{if(!e.value)return;const r=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${t.hash}"]`);if(!r)return;const a=e.value.getBoundingClientRect().top,c=e.value.getBoundingClientRect().height,l=r.getBoundingClientRect().top,n=r.getBoundingClientRect().height;l<a?r.scrollIntoView(!0):l+n>a+c&&r.scrollIntoView(!1)}),{...H(),sidebar:e}}});function jn(e,t,r,a,c,l){const n=u("SidebarItems"),s=u("ContentBlock");return o(),p(L,null,[e.exists?(o(),p("aside",{key:0,ref:"sidebar",class:S(["fixed h-full sidebar transition-all w-80 z-30",{ds__ignore:e.isNavbar,"-translate-x-full":!e.isOpen,"xl:translate-x-0":!e.isOpen&&!e.isNavbar,"translate-x-0":e.isOpen}])},[f(s,{variant:["border-right","dark"],class:"gutter-stable h-full inset-0 overflow-y-auto pb-24 pt-5 px-3 w-full"},{default:g(()=>[f(n)]),_:1})],2)):$("",!0),f(W,{name:"fade"},{default:g(()=>[e.exists?V((o(),p("div",{key:0,class:"bg-black bg-opacity-50 fixed inset-0 z-20",onClick:t[0]||(t[0]=()=>e.toggle(!1))},null,512)),[[D,e.toggled]]):$("",!0)]),_:1})],64)}var Wn=k(Rn,[["render",jn],["__file","MPSidebar.vue"]]);const qn=b({name:"PageContributors",setup:()=>({contributors:Ce(),translate:F()})}),Kn={key:0},Xn=["title","textContent"],Jn=x(", ");function Zn(e,t,r,a,c,l){return e.contributors&&e.contributors.length?(o(),p("div",Kn,[h("span",null,y(e.translate("contributorsText"))+"\xA0",1),h("span",null,[(o(!0),p(L,null,M(e.contributors,(n,s)=>{var i;return o(),p(L,{key:s},[h("span",{title:n.email,textContent:y(n.name)},null,8,Xn),s!==((i=e.contributors)==null?void 0:i.length)-1?(o(),p(L,{key:0},[Jn],64)):$("",!0)],64)}),128))])])):$("",!0)}var Qn=k(qn,[["render",Zn],["__file","PageContributors.vue"]]);const Yn=b({name:"PageEditLink",components:{MPButton:q},setup:()=>({editNavLink:ye()})});function eo(e,t,r,a,c,l){const n=u("MPButton");return o(),v(n,{link:e.editNavLink,variant:["light","sm"],icon:"github"},null,8,["link"])}var to=k(Yn,[["render",eo],["__file","PageEditLink.vue"]]);const no=b({name:"PageFooterNav",components:{AutoLink:G,ContentContainer:z,FooterSection:oe,Icon:Xe},setup:()=>{const{prevNavLink:e,nextNavLink:t}=rt();return{prevNavLink:e,nextNavLink:t}}}),oo={class:"flex-1 grid grid-cols-2"},ro={class:"flex"},ao=["textContent"],so={class:"flex"},lo=["textContent"];function io(e,t,r,a,c,l){const n=u("Icon"),s=u("AutoLink"),i=u("ContentContainer"),d=u("FooterSection");return e.prevNavLink||e.nextNavLink?(o(),v(d,{key:0,variant:"dark"},{default:g(()=>[f(i,{type:"sm",class:"flex h-16 place-items-center"},{default:g(()=>[h("nav",oo,[h("div",ro,[e.prevNavLink?(o(),p(L,{key:0},[f(n,{icon:"chevron-left",class:"text-xl"}),f(s,{item:e.prevNavLink,class:"flex items-center"},{default:g(()=>[h("span",{textContent:y(e.prevNavLink.text)},null,8,ao)]),_:1},8,["item"])],64)):$("",!0)]),h("div",so,[e.nextNavLink?(o(),p(L,{key:0},[f(s,{item:e.nextNavLink,class:"flex items-center ml-auto"},{default:g(()=>[h("span",{textContent:y(e.nextNavLink.text)},null,8,lo)]),_:1},8,["item"]),f(n,{icon:"chevron-right",class:"text-xl"})],64)):$("",!0)])])]),_:1})]),_:1})):$("",!0)}var co=k(no,[["render",io],["__file","PageFooterNav.vue"]]);const uo=b({name:"PageLastUpdated",components:{ClientOnly:pe},setup:()=>({lastUpdated:we(),translate:F()})}),po=["textContent"];function fo(e,t,r,a,c,l){const n=u("ClientOnly");return o(),p("div",null,[h("span",null,y(e.translate("lastUpdatedText"))+"\xA0",1),f(n,null,{default:g(()=>[h("span",{textContent:y(e.lastUpdated)},null,8,po)]),_:1})])}var mo=k(uo,[["render",fo],["__file","PageLastUpdated.vue"]]);const go=b({name:"PageFooterParts",components:{ContentContainer:z,PageFooterNav:co,FooterSection:oe,PageContributors:Qn,PageEditLink:to,PageLastUpdated:mo},setup:()=>({contributors:Ce(),editNavLink:ye(),lastUpdated:we()})});function vo(e,t,r,a,c,l){const n=u("PageFooterNav"),s=u("PageEditLink"),i=u("PageLastUpdated"),d=u("PageContributors"),m=u("ContentContainer"),_=u("FooterSection");return o(),p(L,null,[f(n),e.editNavLink||e.lastUpdated||e.contributors?(o(),v(_,{key:0},{default:g(()=>[f(m,{type:"sm",class:"flex h-16 justify-between place-items-center"},{default:g(()=>[e.editNavLink?(o(),v(s,{key:0})):$("",!0),e.lastUpdated?(o(),v(i,{key:1})):$("",!0),e.contributors?(o(),v(d,{key:2})):$("",!0)]),_:1})]),_:1})):$("",!0)],64)}var _o=k(go,[["render",vo],["__file","PageFooterParts.vue"]]);const ho=b({name:"PageFooter",components:{PageFooterParts:_o,HomeFooter:Me}});function $o(e,t,r,a,c,l){const n=u("PageFooterParts"),s=u("HomeFooter");return o(),p("div",null,[f(n),f(s,{container:"sm"})])}var bo=k(ho,[["render",$o],["__file","PageFooter.vue"]]);const ko=b({name:"RedirectContent",components:{LanguageOption:Be,AutoLink:G},setup:()=>{const e=F(),{dropdown:t}=be();return{dropdown:t,translate:e}}}),Co=["textContent"];function Lo(e,t,r,a,c,l){var i;const n=u("LanguageOption"),s=u("AutoLink");return e.dropdown?(o(),p(L,{key:0},[h("p",{role:"alert",textContent:y(e.translate("pageAvailableInOtherLanguages"))},null,8,Co),h("ul",null,[(o(!0),p(L,null,M((i=e.dropdown)==null?void 0:i.children,(d,m)=>(o(),p("li",{key:`redirect-${m}`},[f(s,{item:{text:d.language.human,link:d.link}},{default:g(()=>[f(n,{language:d.language},null,8,["language"])]),_:2},1032,["item"])]))),128))])],64)):$("",!0)}var yo=k(ko,[["render",Lo],["__file","RedirectContent.vue"]]);const wo=b({name:"Page",components:{RedirectContent:yo,ContentContainer:z,PageContainer:Se,PageFooter:bo},setup:()=>({pageData:E(),frontmatter:B()})}),Po=["textContent"];function Mo(e,t,r,a,c,l){const n=u("RedirectContent"),s=u("Content"),i=u("ContentContainer"),d=u("PageFooter"),m=u("PageContainer");return o(),v(m,{class:"flex flex-col justify-between"},{default:g(()=>[P(e.$slots,"top"),f(i,{tag:"main",type:"sm",class:"page pb-12 pt-8"},{default:g(()=>[P(e.$slots,"content",{},()=>[e.frontmatter.title?(o(),p("h2",{key:0,textContent:y(e.frontmatter.title)},null,8,Po)):$("",!0),!e.pageData.hasContent&&(e.frontmatter.languages||e.frontmatter.redirect)?(o(),v(n,{key:1})):$("",!0),f(s)])]),_:3}),P(e.$slots,"bottom"),f(d)]),_:3})}var So=k(wo,[["render",Mo],["__file","Page.vue"]]);const Bo=b({name:"Layout",components:{MPHeader:In,Home:sn,Page:So,MPSidebar:Wn},setup:()=>{const e=E(),t=B(),r=H();let a;const c=C(()=>t.value.navbar!==!1);Ge(()=>{a=Q().afterEach(()=>{r.toggle(!1)})}),Re(()=>{a()});const l=st(),n=l.resolve,s=l.pending;return{frontmatter:t,onBeforeEnter:n,onBeforeLeave:s,page:e,shouldShowNavbar:c,sidebar:r}}});function No(e,t,r,a,c,l){const n=u("MPHeader"),s=u("MPSidebar"),i=u("Home"),d=u("Page");return o(),p("div",null,[e.shouldShowNavbar?(o(),v(n,{key:0})):$("",!0),h("div",{onClick:t[0]||(t[0]=m=>e.sidebar.toggle(!1))}),f(s),e.frontmatter.home?(o(),v(i,{key:1})):(o(),v(W,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:g(()=>[e.frontmatter.bare?P(e.$slots,"default",{key:0}):(o(),v(d,{key:e.page.path},{content:g(()=>[P(e.$slots,"default")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])}var Eo=k(Bo,[["render",No],["__file","Layout.vue"]]);export{Eo as default};