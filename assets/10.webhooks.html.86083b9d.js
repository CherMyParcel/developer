import{r,f as i,h as s,z as e,w as n,F as c,K as o,e as t,o as l}from"./app.4e8a7c5f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const h={},_=o('<h1 id="_10-webhooks" tabindex="-1"><a class="header-anchor" href="#_10-webhooks" aria-hidden="true">#</a> 10. Webhooks</h1><h2 id="_10-a" tabindex="-1"><a class="header-anchor" href="#_10-a" aria-hidden="true">#</a> 10.A Add subscription</h2><h3 id="_10-a-1" tabindex="-1"><a class="header-anchor" href="#_10-a-1" aria-hidden="true">#</a> 10.A.1 Overview</h3><p>Use this endpoint to subscribe to an event in our API. Upon success an HTTP/1.1 200 OK with subscription ids is returned. You must use HTTPS for callback because it&#39;s secure and tamper-proof. You can only have one webhook of each type at a time for a shop so adding the same webhook overwrites any existing one. We always send the webhook to a URL with lowercase characters. Therefore, it is necessary to use lowercase characters in the URL of the webhook call.</p><p>We currently have two available hooks: <code>shipment_status_change</code> and <code>shipment_label_created</code>:</p>',5),b=s("li",null,"shipment_status_change: Whenever the [status] of a shipment changes this webhook will send you an update with the new value. We will not send an update with a status 1.",-1),k=t("shipment_label_created: When a label is created asynchronously (for example when "),m=t("creating shipments using accept header application/vnd.shipment_label+json;charset=utf-8"),g=t(" ) this webhook will send you a message with the url of the label."),y=t("You can test webhooks with "),f=t("Webhook Tester"),w=t(". You can also use the backoffice to update the webhook url."),E=o(`<h3 id="_10-a-2" tabindex="-1"><a class="header-anchor" href="#_10-a-2" aria-hidden="true">#</a> 10.A.2 Reference</h3><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions</td></tr><tr><td>Methods</td><td>POST</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>None.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>array of Subscription objects.</td></tr><tr><td>Response</td><td>HTTP/1.1 200 OK</td></tr><tr><td>Response body</td><td>SubscriptionIds</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h3 id="_10-a-3" tabindex="-1"><a class="header-anchor" href="#_10-a-3" aria-hidden="true">#</a> 10.A.3 Example</h3><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>POST https<span class="token operator">:</span><span class="token comment">//api.myparcel.nl/webhook_subscriptions HTTP/1.1</span>
User-Agent<span class="token operator">:</span> CustomApiCall/<span class="token number">2</span>
Authorization<span class="token operator">:</span> bearer BASE64_ENCODED_API_KEY
Content-Type<span class="token operator">:</span>application/json; charset=utf<span class="token number">-8</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webhook_subscriptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;hook&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shipment_status_change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://seoshop.nl/myparcel/notifications&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK Content-Type<span class="token operator">:</span>application/json; charset=utf<span class="token number">-8</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_10-b" tabindex="-1"><a class="header-anchor" href="#_10-b" aria-hidden="true">#</a> 10.B Get subscriptions</h2><h3 id="_10-b-1" tabindex="-1"><a class="header-anchor" href="#_10-b-1" aria-hidden="true">#</a> 10.B.1 Overview</h3>`,9),A=t("Use this endpoint to fetch your active webhook subscriptions. Upon success an HTTP/1.1 200 OK with an "),T=t("array"),q=t(" of "),x=t("Subscription"),v=t(" objects is returned."),C=o('<h3 id="_10-b-2" tabindex="-1"><a class="header-anchor" href="#_10-b-2" aria-hidden="true">#</a> 10.B.2 Reference</h3><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/</td></tr><tr><td>Methods</td><td>GET</td></tr><tr><td rowspan="2">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Response</td><td>HTTP/1.1 201 OK</td></tr><tr><td>Response body</td><td>array of Subscription objects</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h3 id="_10-b-3" tabindex="-1"><a class="header-anchor" href="#_10-b-3" aria-hidden="true">#</a> 10.B.3 Parameters</h3>',3),R=s("strong",null,"id",-1),P=s("br",null,null,-1),j=t(" Data type: "),S=t("integer"),U=s("br",null,null,-1),H=t(" This is the subscription id. You can specify multiple subscription ids by semicolon separating them on the URI."),B=o(`<h3 id="_10-b-4" tabindex="-1"><a class="header-anchor" href="#_10-b-4" aria-hidden="true">#</a> 10.B.4 Example</h3><p><strong>Request</strong></p><div class="language-text ext-text"><pre class="language-text"><code>GET https://api.myparcel.nl/webhook_subscriptions/12 HTTP/1.1
User-Agent: CustomApiCall/2
Authorization: bearer BASE64_ENCODED_API_KEY
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">200</span> OK Content-Type<span class="token operator">:</span>application/json;charset=utf<span class="token number">-8</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webhook_subscriptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hook&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shipment_status_change&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://seoshop.nl/myparcel/notifications&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_10-c" tabindex="-1"><a class="header-anchor" href="#_10-c" aria-hidden="true">#</a> 10.C Delete subscription</h2><h3 id="_10-c-1" tabindex="-1"><a class="header-anchor" href="#_10-c-1" aria-hidden="true">#</a> 10.C.1 Overview</h3><p>Use this endpoint to delete webhook subscriptions. You can specify multiple subscription ids by semicolon separating them on the URI. Upon delete an <code>&lt;Http code=204 /&gt;</code> is returned.</p><h3 id="_10-c-2" tabindex="-1"><a class="header-anchor" href="#_10-c-2" aria-hidden="true">#</a> 10.C.2 Reference</h3><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/id[;id]</td></tr><tr><td>Methods</td><td>DELETE</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>id = Subscription.id.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>None.</td></tr><tr><td>Response</td><td>HTTP/1.1 204 No Content</td></tr><tr><td>Response body</td><td>None.</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h3 id="_10-c-3" tabindex="-1"><a class="header-anchor" href="#_10-c-3" aria-hidden="true">#</a> 10.C.3 Parameters</h3>`,11),I=s("strong",null,"id",-1),N=s("br",null,null,-1),O=t(" Data type: "),K=t("integer"),Y=t(" .id"),D=s("br",null,null,-1),L=t(" The id of the subscription to delete. You can specify multiple subscriptions by semicolon separating them."),M=o(`<h3 id="_10-c-4" tabindex="-1"><a class="header-anchor" href="#_10-c-4" aria-hidden="true">#</a> 10.C.4 Example</h3><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>DELETE https<span class="token operator">:</span><span class="token comment">//api.myparcel.nl/webhook_subscriptions/1 HTTP/1.1</span>
User-Agent<span class="token operator">:</span> CustomApiCall/<span class="token number">2</span>
Authorization<span class="token operator">:</span> bearer BASE64_ENCODED_API_KEY
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">204</span> No Content
</code></pre></div>`,5);function z(W,G){const a=r("AutoLink"),p=r("Message"),d=r("ApiLink");return l(),i(c,null,[_,s("ul",null,[b,s("li",null,[k,e(a,{item:"/api-reference/06.shipments#_6-B_2"},{default:n(()=>[m]),_:1}),g])]),e(p,{title:"",type:"tip"},{default:n(()=>[s("p",null,[y,e(a,{item:"https://webhook.site/"},{default:n(()=>[f]),_:1}),w])]),_:1}),E,s("p",null,[A,e(a,{item:"/api-reference/04.data-types#array"},{default:n(()=>[T]),_:1}),q,e(d,{to:"11_A"},{default:n(()=>[x]),_:1}),v]),C,s("p",null,[R,P,j,e(a,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[S]),_:1}),U,H]),B,s("p",null,[I,N,O,e(a,{item:"/api-reference/04.data-types#integer"},{default:n(()=>[K]),_:1}),Y,D,L]),M],64)}var Q=u(h,[["render",z],["__file","10.webhooks.html.vue"]]);export{Q as default};