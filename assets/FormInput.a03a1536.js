var i=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(e,o,a)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,r=(e,o)=>{for(var a in o||(o={}))u.call(o,a)&&l(e,a,o[a]);if(s)for(var a of s(o))f.call(o,a)&&l(e,a,o[a]);return e},t=(e,o)=>m(e,p(o));import F from"./FormField.e1820742.js";import{d as c,a as v}from"./defaultInputClasses.a793e972.js";import{d as y,l as C,r as V,o as _,a as I,w as $,m as b,v as h,h as q,n as w}from"./app.bfe4c4c1.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const k=y({name:"FormInput",components:{FormField:F},props:t(r({},c),{type:{type:String,default:"text"}}),emits:["update:modelValue"],setup:(e,o)=>({model:C(e,"modelValue",o.emit),classes:v})}),D=["id","name","required","type"];function M(e,o,a,g,z,N){const d=V("FormField");return _(),I(d,{id:e.id,label:e.label},{default:$(()=>[b(q("input",{id:e.id,"onUpdate:modelValue":o[0]||(o[0]=n=>e.model=n),name:e.id,required:e.optional?null:"required",type:e.type,class:w([e.classes,"rounded-full"])},null,10,D),[[h,e.model]])]),_:1},8,["id","label"])}var E=B(k,[["render",M],["__file","FormInput.vue"]]);export{E as default};
