import{M as n,f as i,o as t,h as d,w as m,r as p,K as u,a7 as c,b as f,c as s,t as l,H as F,G as _,F as y,D as v}from"./app.89e30d60.js";import h from"./FormField.5598b0e7.js";import{d as D,a as S}from"./defaultInputClasses.a793e972.js";import{c as $}from"./index.d6a83998.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const C=()=>n(),V=i({name:"FormSelect",components:{FormField:h},props:{...D,options:{type:Array,default:()=>[]},emptyOption:{type:Boolean}},emits:["update:modelValue"],setup:(e,a)=>({themeLocaleData:C(),model:$(e,"modelValue",a.emit),classes:S})}),k=["id","required"],B={key:0,selected:"",disabled:"",value:""},L=["value"];function q(e,a,w,M,g,N){const r=p("FormField");return t(),d(r,{id:e.id,label:e.label},{default:m(()=>[u(f("select",{id:e.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),required:e.optional?null:"required",class:v([e.classes,"rounded-full"])},[e.emptyOption?(t(),s("option",B,l(e.themeLocaleData.select_empty_option),1)):F("",!0),(t(!0),s(y,null,_(e.options,o=>(t(),s("option",{key:`${e.id}_option_${o.name}`,value:o.name},l(o.label),9,L))),128))],10,k),[[c,e.model]])]),_:1},8,["id","label"])}var H=b(V,[["render",q],["__file","FormSelect.vue"]]);export{H as default};
