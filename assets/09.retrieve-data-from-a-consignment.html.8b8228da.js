import{r as e,f as t,h as a,z as o,w as p,F as c,e as n,K as l,o as r}from"./app.bfe4c4c1.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=a("h1",{id:"retrieve-data-from-a-consignment",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#retrieve-data-from-a-consignment","aria-hidden":"true"},"#"),n(" Retrieve data from a consignment")],-1),k=n("Most attributes that have a "),g=a("code",null,"set<Attribute>()",-1),h=n(" method also have a "),m=a("code",null,"get<Attribute>()",-1),f=n(" method to retrieve the data. View "),_=n("all methods"),v=n(" for consignments here."),b=l(`<div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getFullStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getStreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// etc...</span>
</code></pre></div><h4 id="get-status" tabindex="-1"><a class="header-anchor" href="#get-status" aria-hidden="true">#</a> Get status</h4><p>After <code>setPdfOfLabels()</code>, <code>setLinkOfLabels()</code> and <code>createConcepts()</code> you can get the status.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$status</span> <span class="token operator">=</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="get-barcode" tabindex="-1"><a class="header-anchor" href="#get-barcode" aria-hidden="true">#</a> Get barcode</h4><p>The barcode is available after <code>setPdfOfLabels()</code> and <code>setLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$barcode</span> <span class="token operator">=</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getBarcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="get-track-trace-url" tabindex="-1"><a class="header-anchor" href="#get-track-trace-url" aria-hidden="true">#</a> Get Track &amp; Trace url</h4><p>The Track &amp; Trace url is available after <code>downloadPdfOfLabels()</code> and <code>getLinkOfLabels()</code></p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Consignment<span class="token punctuation">\\</span>PostNLConsignment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$consignment</span><span class="token operator">-&gt;</span><span class="token function">getBarcodeUrl</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;3SMYPA123456789&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2231JE&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;NL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Barcode , Postal code, Country</span>
</code></pre></div>`,10);function L(w,x){const s=e("RouterLink");return r(),t(c,null,[d,a("p",null,[k,g,h,m,f,o(s,{to:"/documentation/50.php-sdk/03.reference/01.models.html#postnlconsignment"},{default:p(()=>[_]),_:1}),v]),b],64)}var P=i(u,[["render",L],["__file","09.retrieve-data-from-a-consignment.html.vue"]]);export{P as default};
