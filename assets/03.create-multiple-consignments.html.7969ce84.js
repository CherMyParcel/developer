import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.f317d6f2.js";const p={},e=t(`<p>This example creates multiple consignments by adding them to one <code>MyParcelCollection()</code> and then creates and downloads one PDF with all labels.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token comment">// Create the collection before the loop</span>
<span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyParcelCollection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setUserAgents</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name_of_cms&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;1.0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// Loop through your shipments, adding each to the same MyParcelCollection</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$yourShipments</span> <span class="token keyword">as</span> <span class="token variable">$yourShipment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$consignment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name static-context">ConsignmentFactory</span><span class="token operator">::</span><span class="token function">createByCarrierId</span><span class="token punctuation">(</span><span class="token class-name static-context">PostNLConsignment</span><span class="token operator">::</span><span class="token constant">CARRIER_ID</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api_key_from_backoffice&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setReferenceIdentifier</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;reference_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setPerson</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setPostalCode</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postal_code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">setFullStreet</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;full_street&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
        <span class="token operator">-&gt;</span><span class="token function">setCity</span><span class="token punctuation">(</span><span class="token variable">$yourShipment</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;city&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token comment">// Add each consignment to the collection created before</span>
    <span class="token variable">$consignments</span>
        <span class="token operator">-&gt;</span><span class="token function">addConsignment</span><span class="token punctuation">(</span><span class="token variable">$consignment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","03.create-multiple-consignments.html.vue"]]);export{k as default};
