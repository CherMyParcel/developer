import{N as n,f as i,o as t,h as d,w as m,r as p,L as u,a7 as c,a as f,c as s,t as l,H as F,G as _,F as y,D as v}from"./app.e0bc0234.js";import h from"./FormField.d86ee62d.js";import{d as D,a as S}from"./defaultInputClasses.a793e972.js";import{c as $}from"./index.2c0a8624.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const L=()=>n(),V=i({name:"FormSelect",components:{FormField:h},props:{...D,options:{type:Array,default:()=>[]},emptyOption:{type:Boolean}},emits:["update:modelValue"],setup:(e,a)=>({themeLocaleData:L(),model:$(e,"modelValue",a.emit),classes:S})}),b=["id","required"],k={key:0,selected:"",disabled:"",value:""},B=["value"];function q(e,a,w,N,g,M){const r=p("FormField");return t(),d(r,{id:e.id,label:e.label},{default:m(()=>[u(f("select",{id:e.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),required:e.optional?null:"required",class:v([e.classes,"rounded-full"])},[e.emptyOption?(t(),s("option",k,l(e.themeLocaleData.select_empty_option),1)):F("",!0),(t(!0),s(y,null,_(e.options,o=>(t(),s("option",{key:`${e.id}_option_${o.name}`,value:o.name},l(o.label),9,B))),128))],10,b),[[c,e.model]])]),_:1},8,["id","label"])}var H=C(V,[["render",q],["__file","FormSelect.vue"]]);export{H as default};
