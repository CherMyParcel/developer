import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as r,a as e,b as i,w as d,d as t,e as s,r as n}from"./app.e0bc0234.js";const h={},u=t("Set package type with "),g=e("code",null,"setPackageType($type)",-1),m=t(". Retrieve it after with "),_=e("code",null,"getPackageType()",-1),f=t(". For more details on the different types of packages: "),y=s('<h3 id="package-types" tabindex="-1"><a class="header-anchor" href="#package-types" aria-hidden="true">#</a> Package types</h3><h4 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h4><p><code>id: 1</code></p><p>This is the default package type. It must be explicitly set to allow enabling of further shipment options. It&#39;s available for NL, EU and global shipments.</p><h4 id="mailbox-package" tabindex="-1"><a class="header-anchor" href="#mailbox-package" aria-hidden="true">#</a> Mailbox package</h4><p><code>id: 2</code></p><p>This package type is only available for NL shipments that fit into a mailbox. It does not support additional options.</p>',7),k=e("p",null,"If you still make the request with additional options, bear in mind that you may pay more than the actual shipment costs!",-1),b=s('<h4 id="letter" tabindex="-1"><a class="header-anchor" href="#letter" aria-hidden="true">#</a> Letter</h4><p><code>id: 3</code></p><p>This package type is available for NL, EU and global shipments. The label for this shipment is unpaid meaning that you will need to pay the postal office/courier to send this letter/package. Therefore, it does not support additional options.</p><h4 id="digital-stamp" tabindex="-1"><a class="header-anchor" href="#digital-stamp" aria-hidden="true">#</a> Digital stamp</h4><p><code>id: 4</code></p><p>This package type is only available for NL shipments and does not support any additional options. Its price is calculated using the package weight, which is set using <code>setPhysicalProperties()</code>.</p>',6),x=t("This type of shipment will be billed the moment it is printed. Read more: "),w=e("h3",{id:"package-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package-options","aria-hidden":"true"},"#"),t(" Package options")],-1),T=t("These options are only available for "),v=t("."),L=s('<p>Available options:</p><ul><li><code>only_recipient</code>: Deliver the package only at address of the intended recipient. This option is required for Morning and Evening delivery types. <ul><li>Set: <code>setOnlyRecipient(true)</code></li><li>Get: <code>isOnlyRecipient()</code></li></ul></li><li><code>signature</code>: Recipient must sign for the package. This option is required for Pickup delivery type. <ul><li>Set: <code>setSignature(true)</code></li><li>Get: <code>isSignature()</code></li></ul></li><li><code>return</code>: Return the package to the sender when the recipient is not home. <ul><li>Set: <code>setReturn(true)</code></li><li>Get: <code>isReturn()</code></li></ul></li><li><code>large_format</code>: This option must be specified if the dimensions of the package are between 100 x 70 x 50 and 175 x 78 x 58 cm. If the scanned dimensions from the carrier indicate that this package is large format, and it has not been specified then it will be added to the shipment in the billing process. This option is also available for EU shipments. <ul><li>Set: <code>setLargeFormat(true)</code></li><li>Get: <code>isLargeFormat()</code></li></ul></li><li><code>age_check</code>: The Customer/Consumer must sign for the package and only receive it when he is at least 18 years. <ul><li>Set: <code>setAgeCheck(true)</code></li><li>Get: <code>hasAgeCheck()</code></li></ul></li><li><code>insurance</code>: This option allows a shipment to be insured up to certain amount. NL shipments can be insured for \u20AC 5000,\u2013. EU shipments must be insured for \u20AC 500,\u2013. Global shipments must be insured for \u20AC 200,\u2013. The following shipment options are mandatory when insuring an NL shipment: <code>only_recipient</code> and <code>signature</code>. <ul><li>Set: <code>setInsurance(250)</code> (amount in EUR)</li><li>Get: <code>getInsurance()</code></li></ul></li></ul><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>',3),P=t(" with all shipment options: "),N=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`(new PostNLConsignment())
    ->setPackageType(1)
    // Other options...
    ->setOnlyRecipient(true)
    ->setSignature(true)
    ->setReturn(true)
    ->setLargeFormat(true)
    ->setAgeCheck(true)
    ->setInsurance(250);
`)])],-1),R=t(", with mandatory weight: "),S=e("div",{class:"language-php ext-php"},[e("pre",{class:"language-php"},[e("code",null,`(new PostNLConsignment())
    ->setPackageType(4)
    // weight in grams (required)
    ->setPhysicalProperties(['weight' => 300]);
`)])],-1),A=t("More information: ");function C(I,E){const a=n("ApiLink"),c=n("Message"),o=n("DataType");return p(),r("div",null,[e("p",null,[u,g,m,_,f,i(a,{to:"6_A_1"})]),y,i(c,{title:"",type:"note"},{default:d(()=>[k]),_:1}),b,i(c,{title:"",type:"note"},{default:d(()=>[e("p",null,[x,i(a,{to:"6_A_1"})])]),_:1}),w,e("p",null,[T,i(o,{type:"package_type",id:"1"}),v]),L,i(o,{type:"package_type",name:"package"}),P,N,i(o,{type:"package_type",name:"digital_stamp"}),R,S,e("p",null,[A,i(a,{to:"6_A_3"})])])}var O=l(h,[["render",C],["__file","06.package-type-and-options.html.vue"]]);export{O as default};
