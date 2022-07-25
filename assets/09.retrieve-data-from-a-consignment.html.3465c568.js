import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as s,a as t,b as c,w as r,d as e,e as d,r as i}from"./app.e0bc0234.js";const h={},l=t("h3",{id:"retrieve-data-from-a-consignment",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#retrieve-data-from-a-consignment","aria-hidden":"true"},"#"),e(" Retrieve data from a consignment")],-1),g=e("Most attributes that have a "),p=t("code",null,"set<Attribute>()",-1),m=e(" method also have a "),u=t("code",null,"get<Attribute>()",-1),_=e(" method to retrieve the data. View "),f=e("all methods"),v=e(" for consignments here."),b=d(`<div class="language-php ext-php"><pre class="language-php"><code>$consignment = new PostNLConsignment();

echo $consignment-&gt;getFullStreet();
echo $consignment-&gt;getPerson();
echo $consignment-&gt;getPhone();
echo $consignment-&gt;getStreet();
// etc...
</code></pre></div><h6 id="get-status" tabindex="-1"><a class="header-anchor" href="#get-status" aria-hidden="true">#</a> Get status</h6><p>After <code>setPdfOfLabels()</code>, <code>setLinkOfLabels()</code> and <code>createConcepts()</code> you can get the status.</p><div class="language-php ext-php"><pre class="language-php"><code>$status = $consignment-&gt;getStatus();
</code></pre></div><h6 id="get-barcode" tabindex="-1"><a class="header-anchor" href="#get-barcode" aria-hidden="true">#</a> Get barcode</h6><p>The barcode is available after <code>setPdfOfLabels()</code> and <code>setLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code>$barcode = $consignment-&gt;getBarcode();
</code></pre></div><h6 id="get-track-trace-url" tabindex="-1"><a class="header-anchor" href="#get-track-trace-url" aria-hidden="true">#</a> Get Track &amp; Trace url</h6><p>The Track &amp; Trace url is available after <code>downloadPdfOfLabels()</code> and <code>getLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code>$consignment = (new \\MyParcelNL\\Sdk\\src\\Model\\Consignment\\PostNLConsignment());
echo $consignment-&gt;getBarcodeUrl(&#39;3SMYPA123456789&#39;, &#39;2231JE&#39;, &#39;NL&#39;); // Barcode , Postal code, Country
</code></pre></div>`,10);function L(k,x){const a=i("RouterLink");return o(),s("div",null,[l,t("p",null,[g,p,m,u,_,c(a,{to:"/documentation/50.php-sdk/03.reference/01.models.html#postnlconsignment"},{default:r(()=>[f]),_:1}),v]),b])}var C=n(h,[["render",L],["__file","09.retrieve-data-from-a-consignment.html.vue"]]);export{C as default};
