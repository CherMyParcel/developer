import de from"./AutoLink.60105737.js";import{_ as Oe}from"./plugin-vue_export-helper.21dcd24c.js";import{f as ue,x as Ce,g as _,o as me,c as Re,b as ve,w as Be,D as Ge,r as fe,d as Ke,t as ye}from"./app.e0bc0234.js";const I=1,r="postnl",a="PostNL",i=2,L="bpost",P="bpost",p=3,H="cheapcargo",T="Cheap Cargo",U=4,l="dpd",S="DPD",d=5,O="instabox",u="Instabox",C=6,m="dhl",R="DHL",v=7,B="bol.com",G="Bol.com",f=8,K="ups",y="UPS",ke={NAME:r,ID:I,HUMAN:a},ge={NAME:L,ID:i,HUMAN:P},k={NAME:H,ID:p,HUMAN:T},g={NAME:l,ID:U,HUMAN:S},b={NAME:O,ID:d,HUMAN:u},Y={NAME:m,ID:C,HUMAN:R},X={NAME:B,ID:v,HUMAN:G},$={NAME:K,ID:f,HUMAN:y},be=[k,g,b,Y,X,$];var Ye=Object.freeze({__proto__:null,POST_NL_ID:I,POST_NL_NAME:r,POST_NL_HUMAN:a,BPOST_ID:i,BPOST_NAME:L,BPOST_HUMAN:P,CHEAP_CARGO_ID:p,CHEAP_CARGO_NAME:H,CHEAP_CARGO_HUMAN:T,DPD_ID:U,DPD_NAME:l,DPD_HUMAN:S,INSTABOX_ID:d,INSTABOX_NAME:O,INSTABOX_HUMAN:u,DHL_ID:C,DHL_NAME:m,DHL_HUMAN:R,BOL_COM_ID:v,BOL_COM_NAME:B,BOL_COM_HUMAN:G,UPS_ID:f,UPS_NAME:K,UPS_HUMAN:y,POSTNL:ke,BPOST:ge,CHEAP_CARGO:k,DPD:g,INSTABOX:b,DHL:Y,BOL_COM:X,UPS:$,ALL:be});const x=1,F="morning",V=2,h="standard",z=3,j="evening",w=4,q="pickup",J={ID:x,NAME:F},Q={ID:V,NAME:h},W={ID:z,NAME:j},Z={ID:w,NAME:q},Xe=[J,Q,W,Z];var $e=Object.freeze({__proto__:null,MORNING_ID:x,MORNING_NAME:F,STANDARD_ID:V,STANDARD_NAME:h,EVENING_ID:z,EVENING_NAME:j,PICKUP_ID:w,PICKUP_NAME:q,MORNING:J,STANDARD:Q,EVENING:W,PICKUP:Z,ALL:Xe});const ee=1,te="package",Ae=2,ne="mailbox",Ne=3,oe="letter",Me=4,_e="digital_stamp",se={ID:ee,NAME:te},ce={ID:Ae,NAME:ne},De={ID:Ne,NAME:oe},Ee={ID:Me,NAME:_e},xe=[se,ce,De,Ee];var Fe=Object.freeze({__proto__:null,PACKAGE_ID:ee,PACKAGE_NAME:te,MAILBOX_ID:Ae,MAILBOX_NAME:ne,LETTER_ID:Ne,LETTER_NAME:oe,DIGITAL_STAMP_ID:Me,DIGITAL_STAMP_NAME:_e,PACKAGE:se,MAILBOX:ce,LETTER:De,DIGITAL_STAMP:Ee,ALL:xe});const Ie=1,re="myparcel",ae="MyParcel",ie=2,Le="belgie",Pe="SendMyParcel",pe=3,He="flespakket",Te="Flespakket",Ue={ID:Ie,NAME:re,HUMAN:ae},le={ID:ie,NAME:Le,HUMAN:Pe},Se={ID:pe,NAME:He,HUMAN:Te},Ve=[Ue,le,Se];var he=Object.freeze({__proto__:null,MYPARCEL_ID:Ie,MYPARCEL_NAME:re,MYPARCEL_HUMAN:ae,SENDMYPARCEL_ID:ie,SENDMYPARCEL_NAME:Le,SENDMYPARCEL_HUMAN:Pe,FLESPAKKET_ID:pe,FLESPAKKET_NAME:He,FLESPAKKET_HUMAN:Te,MYPARCEL:Ue,SENDMYPARCEL:le,FLESPAKKET:Se,ALL:Ve});const ze=()=>[{name:"shipment_status",children:[{ID:1,HUMAN:"pending - concept"},{ID:2,HUMAN:"pending - registered"},{ID:3,HUMAN:"enroute - handed to carrier"},{ID:4,HUMAN:"enroute - sorting"},{ID:5,HUMAN:"enroute - distribution"},{ID:6,HUMAN:"enroute - customs"},{ID:7,HUMAN:"delivered - at recipient"},{ID:8,HUMAN:"delivered - ready for pickup"},{ID:9,HUMAN:"delivered - package picked up"},{ID:10,HUMAN:"delivered - return shipment ready for pickup"},{ID:11,HUMAN:"delivered - return shipment package picked up"},{ID:12,HUMAN:"printed - letter"},{ID:13,HUMAN:"inactive - credited"},{ID:14,HUMAN:"printed - digital stamp"},{ID:30,HUMAN:"inactive - concept"},{ID:31,HUMAN:"inactive - registered"},{ID:32,HUMAN:"inactive - enroute - handed to carrier"},{ID:33,HUMAN:"inactive - enroute - sorting"},{ID:34,HUMAN:"inactive - enroute - distribution"},{ID:35,HUMAN:"inactive - enroute - customs"},{ID:36,HUMAN:"inactive - delivered - at recipient"},{ID:37,HUMAN:"inactive - delivered - ready for pickup"},{ID:38,HUMAN:"inactive - delivered - package picked up"}]},{name:"package_type",children:Fe.ALL},{name:"delivery_type",children:$e.ALL},{name:"carrier",children:Ye.ALL},{name:"platform",children:he.ALL}],je=ue({name:"DataType",components:{AutoLink:de},props:{type:{type:String,required:!0},id:{type:[Number,String],default:null},name:{type:String,default:null}},setup:t=>{var E;const s=ze(),c=Ce([]),N=_(()=>{var e;return(e=s.find(A=>A.name===t.type))!=null?e:null}),D=_(()=>{var e,A;return(A=(e=N.value)==null?void 0:e.children.find(n=>n.ID===Number(t.id)||(n==null?void 0:n.NAME)===t.name))!=null?A:null}),o=_(()=>{var A,n;const e=D.value;return`${(A=N.value)==null?void 0:A.name} ${e==null?void 0:e.ID} (${(n=e==null?void 0:e.HUMAN)!=null?n:e==null?void 0:e.NAME})`.trim()}),M={link:`/api-reference/04.data-types#${(E=N.value)==null?void 0:E.name}`,text:o.value};return{text:o,classes:c,linkItem:M}}});function we(t,s,c,N,D,o){const M=fe("AutoLink");return me(),Re("code",null,[ve(M,{item:t.linkItem,class:Ge(t.classes)},{default:Be(()=>[Ke(ye(t.text),1)]),_:1},8,["item","class"])])}var We=Oe(je,[["render",we],["__file","DataType.vue"]]);export{We as default};
