import{d as s,p as n,o as a,f as t,j as l,m as d,H as i,h as u,A as f}from"./app.bfe4c4c1.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const m=s({name:"MPImg",props:{src:{type:String,required:!0},alt:{type:String,required:!0}},setup:()=>{const o=n(!1);return{loading:o,onLoadStart(){o.value=!0},onLoad(){o.value=!1},onError(){o.value=!1}}}}),g={class:"flex relative"},v={key:0,class:"animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full"},L=["src","alt","onDragstart"];function S(o,r,c,h,k,w){return a(),t("div",g,[o.loading?(a(),t("div",v)):l("",!0),d(u("img",{loading:"lazy",src:o.src,class:"m-auto max-h-full",alt:o.alt,onDragstart:f(e=>null,["prevent"]),onLoadstart:r[0]||(r[0]=(...e)=>o.onLoadStart&&o.onLoadStart(...e)),onLoad:r[1]||(r[1]=(...e)=>o.onLoad&&o.onLoad(...e)),onError:r[2]||(r[2]=(...e)=>o.onError&&o.onError(...e))},null,40,L),[[i,!o.loading]])])}var $=p(m,[["render",S],["__file","MPImg.vue"]]);export{$ as default};
