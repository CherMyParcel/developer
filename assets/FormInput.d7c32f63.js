import r from"./FormField.d86ee62d.js";import{d as l,a as t}from"./defaultInputClasses.a793e972.js";import{f as d,o as n,h as i,w as m,r as p,L as u,a5 as f,a as F,D as c}from"./app.e0bc0234.js";import{c as y}from"./index.2c0a8624.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const C=d({name:"FormInput",components:{FormField:r},props:{...l,type:{type:String,default:"text"}},emits:["update:modelValue"],setup:(e,o)=>({model:y(e,"modelValue",o.emit),classes:t})}),V=["id","name","required","type"];function _(e,o,I,$,b,h){const a=p("FormField");return n(),i(a,{id:e.id,label:e.label},{default:m(()=>[u(F("input",{id:e.id,"onUpdate:modelValue":o[0]||(o[0]=s=>e.model=s),name:e.id,required:e.optional?null:"required",type:e.type,class:c([e.classes,"rounded-full"])},null,10,V),[[f,e.model]])]),_:1},8,["id","label"])}var M=v(C,[["render",_],["__file","FormInput.vue"]]);export{M as default};
