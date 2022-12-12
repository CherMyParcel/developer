import Se from"./AutoLink.148811cf.js";import{f as Ce,y as me,g as s,o as Re,c as fe,a as ve,w as Be,H as Ge,l as c,r as ye,d as Ke,t as ke}from"./app.988a8f80.js";import{_ as ge}from"./plugin-vue_export-helper.21dcd24c.js";const I=1,i="postnl",L="PostNL",P=2,d="bpost",l="bpost",p=3,H="cheapcargo",U="Cheap Cargo",T=4,u="dpd",O="DPD",S=5,C="instabox",m="Instabox",R=6,f="dhl",v="DHL",B=7,G="bol.com",y="Bol.com",K=8,k="ups",g="UPS",be={NAME:i,ID:I,HUMAN:L},Ye={NAME:d,ID:P,HUMAN:l},b={NAME:H,ID:p,HUMAN:U},Y={NAME:u,ID:T,HUMAN:O},$={NAME:C,ID:S,HUMAN:m},h={NAME:f,ID:R,HUMAN:v},X={NAME:G,ID:B,HUMAN:y},F={NAME:k,ID:K,HUMAN:g},$e=[b,Y,$,h,X,F];var he=Object.freeze({__proto__:null,POST_NL_ID:I,POST_NL_NAME:i,POST_NL_HUMAN:L,BPOST_ID:P,BPOST_NAME:d,BPOST_HUMAN:l,CHEAP_CARGO_ID:p,CHEAP_CARGO_NAME:H,CHEAP_CARGO_HUMAN:U,DPD_ID:T,DPD_NAME:u,DPD_HUMAN:O,INSTABOX_ID:S,INSTABOX_NAME:C,INSTABOX_HUMAN:m,DHL_ID:R,DHL_NAME:f,DHL_HUMAN:v,BOL_COM_ID:B,BOL_COM_NAME:G,BOL_COM_HUMAN:y,UPS_ID:K,UPS_NAME:k,UPS_HUMAN:g,POSTNL:be,BPOST:Ye,CHEAP_CARGO:b,DPD:Y,INSTABOX:$,DHL:h,BOL_COM:X,UPS:F,ALL:$e});const x=1,V="morning",z=2,j="standard",w=3,q="evening",J=4,Q="pickup",W={ID:x,NAME:V},Z={ID:z,NAME:j},ee={ID:w,NAME:q},te={ID:J,NAME:Q},Xe=[W,Z,ee,te];var Fe=Object.freeze({__proto__:null,MORNING_ID:x,MORNING_NAME:V,STANDARD_ID:z,STANDARD_NAME:j,EVENING_ID:w,EVENING_NAME:q,PICKUP_ID:J,PICKUP_NAME:Q,MORNING:W,STANDARD:Z,EVENING:ee,PICKUP:te,ALL:Xe});const Ae=1,ne="package",Ne=2,oe="mailbox",Me=3,se="letter",ce=4,_e="digital_stamp",De={ID:Ae,NAME:ne},Ee={ID:Ne,NAME:oe},ae={ID:Me,NAME:se},re={ID:ce,NAME:_e},xe=[De,Ee,ae,re];var Ve=Object.freeze({__proto__:null,PACKAGE_ID:Ae,PACKAGE_NAME:ne,MAILBOX_ID:Ne,MAILBOX_NAME:oe,LETTER_ID:Me,LETTER_NAME:se,DIGITAL_STAMP_ID:ce,DIGITAL_STAMP_NAME:_e,PACKAGE:De,MAILBOX:Ee,LETTER:ae,DIGITAL_STAMP:re,ALL:xe});const Ie=1,ie="myparcel",Le="MyParcel",Pe=2,de="belgie",le="SendMyParcel",pe=3,He="flespakket",Ue="Flespakket",Te={ID:Ie,NAME:ie,HUMAN:Le},ue={ID:Pe,NAME:de,HUMAN:le},Oe={ID:pe,NAME:He,HUMAN:Ue},ze=[Te,ue,Oe];var je=Object.freeze({__proto__:null,MYPARCEL_ID:Ie,MYPARCEL_NAME:ie,MYPARCEL_HUMAN:Le,SENDMYPARCEL_ID:Pe,SENDMYPARCEL_NAME:de,SENDMYPARCEL_HUMAN:le,FLESPAKKET_ID:pe,FLESPAKKET_NAME:He,FLESPAKKET_HUMAN:Ue,MYPARCEL:Te,SENDMYPARCEL:ue,FLESPAKKET:Oe,ALL:ze});const we=()=>[{name:"shipment-status",children:[{ID:1,HUMAN:"pending - concept"},{ID:2,HUMAN:"pending - registered"},{ID:3,HUMAN:"enroute - handed to carrier"},{ID:4,HUMAN:"enroute - sorting"},{ID:5,HUMAN:"enroute - distribution"},{ID:6,HUMAN:"enroute - customs"},{ID:7,HUMAN:"delivered - at recipient"},{ID:8,HUMAN:"delivered - ready for pickup"},{ID:9,HUMAN:"delivered - package picked up"},{ID:10,HUMAN:"delivered - return shipment ready for pickup"},{ID:11,HUMAN:"delivered - return shipment package picked up"},{ID:12,HUMAN:"printed - letter"},{ID:13,HUMAN:"inactive - credited"},{ID:14,HUMAN:"printed - digital stamp"},{ID:30,HUMAN:"inactive - concept"},{ID:31,HUMAN:"inactive - registered"},{ID:32,HUMAN:"inactive - enroute - handed to carrier"},{ID:33,HUMAN:"inactive - enroute - sorting"},{ID:34,HUMAN:"inactive - enroute - distribution"},{ID:35,HUMAN:"inactive - enroute - customs"},{ID:36,HUMAN:"inactive - delivered - at recipient"},{ID:37,HUMAN:"inactive - delivered - ready for pickup"},{ID:38,HUMAN:"inactive - delivered - package picked up"}]},{name:"package-type",children:Ve.ALL},{name:"delivery-type",children:Fe.ALL},{name:"carrier",children:he.ALL},{name:"platform",children:je.ALL},{name:"order-status",children:[{NAME:"open",HUMAN:"Open"},{NAME:"partially_processed",HUMAN:"Partially processed"},{NAME:"processed",HUMAN:"Processed"},{NAME:"canceled",HUMAN:"Canceled"}]}],qe=Ce({name:"DataType",components:{AutoLink:Se},props:{type:{type:String,required:!0},id:{type:[Number,String],default:null},name:{type:String,default:null}},setup:t=>{var a;const _=we(),D=me([]),N=s(()=>{var e;return(e=_.find(A=>A.name===t.type))!=null?e:null}),E=s(()=>{var e,A;return(A=(e=N.value)==null?void 0:e.children.find(n=>t.id&&c(n,"ID")?n.ID===Number(t.id):t.name&&c(n,"NAME")?n.NAME===t.name:(console.warn(`Data type for id: ${t.id} and/or name ${t.name} could not be found.`),!1)))!=null?A:null}),o=s(()=>{var r;const e=E.value,A=c(e,"ID")?e.ID:e==null?void 0:e.NAME,n=e!=null&&e.HUMAN?`(${e.HUMAN})`:"";return`${(r=N.value)==null?void 0:r.name} ${A} ${n}`.trim()}),M={link:`/api-reference/04.data-types.html#${(a=N.value)==null?void 0:a.name}`,text:o.value};return{text:o,classes:D,linkItem:M}}});function Je(t,_,D,N,E,o){const M=ye("AutoLink");return Re(),fe("code",null,[ve(M,{item:t.linkItem,class:Ge(t.classes)},{default:Be(()=>[Ke(ke(t.text),1)]),_:1},8,["item","class"])])}var et=ge(qe,[["render",Je],["__file","DataType.vue"]]);export{et as default};
