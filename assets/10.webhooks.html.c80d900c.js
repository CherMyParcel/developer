import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as u,b as s,a as e,w as n,e as a,d as t,r as o}from"./app.bb55278a.js";const h={},_=a('<h2 id="_10-webhooks" tabindex="-1"><a class="header-anchor" href="#_10-webhooks" aria-hidden="true" tabindex="-1">#</a> 10. Webhooks</h2><h3 id="_10-a" tabindex="-1"><a class="header-anchor" href="#_10-a" aria-hidden="true" tabindex="-1">#</a> 10.A Add subscription</h3><h4 id="_10-a-1" tabindex="-1"><a class="header-anchor" href="#_10-a-1" aria-hidden="true" tabindex="-1">#</a> 10.A.1 Overview</h4><p>Use this endpoint to subscribe to an event in our API. Upon success an HTTP/1.1 200 OK with subscription ids is returned. You must use HTTPS for callback because it&#39;s secure and tamper-proof. You can only have one webhook of each type at a time for a shop so adding the same webhook overwrites any existing one. We always send the webhook to a URL with lowercase characters. Therefore, it is necessary to use lowercase characters in the URL of the webhook call.</p><p>We currently have two available hooks: <code>shipment_status_change</code> and <code>shipment_label_created</code>:</p>',5),b=s("li",null,"shipment_status_change: Whenever the [status] of a shipment changes this webhook will send you an update with the new value. We will not send an update with a status 1.",-1),k=t("shipment_label_created: When a label is created asynchronously (for example when "),m=t("creating shipments using accept header application/vnd.shipment_label+json;charset=utf-8"),g=t(" ) this webhook will send you a message with the URL of the label."),y=t("You can test webhooks with "),f=t("Webhook Tester"),x=t(". You can also use the backoffice to update the webhook URL."),w=a(`<h4 id="_10-a-2" tabindex="-1"><a class="header-anchor" href="#_10-a-2" aria-hidden="true" tabindex="-1">#</a> 10.A.2 Reference</h4><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions</td></tr><tr><td>Methods</td><td>POST</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>None.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>array of Subscription objects.</td></tr><tr><td>Response</td><td>HTTP/1.1 200 OK</td></tr><tr><td>Response body</td><td>SubscriptionIds</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h4 id="_10-a-3" tabindex="-1"><a class="header-anchor" href="#_10-a-3" aria-hidden="true" tabindex="-1">#</a> 10.A.3 Example</h4><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>POST https<span class="token operator">:</span><span class="token comment">//api.myparcel.nl/webhook_subscriptions HTTP/1.1</span>
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
</code></pre></div><h3 id="_10-b" tabindex="-1"><a class="header-anchor" href="#_10-b" aria-hidden="true" tabindex="-1">#</a> 10.B Get subscriptions</h3><h4 id="_10-b-1" tabindex="-1"><a class="header-anchor" href="#_10-b-1" aria-hidden="true" tabindex="-1">#</a> 10.B.1 Overview</h4>`,9),E=t("Use this endpoint to fetch your active webhook subscriptions. Upon success an HTTP/1.1 200 OK with an "),A=t("array"),T=t(" of "),q=t("Subscription"),R=t(" objects is returned."),v=a('<h4 id="_10-b-2" tabindex="-1"><a class="header-anchor" href="#_10-b-2" aria-hidden="true" tabindex="-1">#</a> 10.B.2 Reference</h4><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/</td></tr><tr><td>Methods</td><td>GET</td></tr><tr><td rowspan="2">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Response</td><td>HTTP/1.1 201 OK</td></tr><tr><td>Response body</td><td>array of Subscription objects</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h4 id="_10-b-3" tabindex="-1"><a class="header-anchor" href="#_10-b-3" aria-hidden="true" tabindex="-1">#</a> 10.B.3 Parameters</h4>',3),C=s("strong",null,"id",-1),P=s("br",null,null,-1),j=t(" Data type: "),U=t("integer"),S=s("br",null,null,-1),H=t(" This is the subscription id. You can specify multiple subscription ids by semicolon separating them on the URI."),B=a(`<h4 id="_10-b-4" tabindex="-1"><a class="header-anchor" href="#_10-b-4" aria-hidden="true" tabindex="-1">#</a> 10.B.4 Example</h4><p><strong>Request</strong></p><div class="language-text ext-text"><pre class="language-text"><code>GET https://api.myparcel.nl/webhook_subscriptions/12 HTTP/1.1
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
</code></pre></div><h3 id="_10-c" tabindex="-1"><a class="header-anchor" href="#_10-c" aria-hidden="true" tabindex="-1">#</a> 10.C Delete subscription</h3><h4 id="_10-c-1" tabindex="-1"><a class="header-anchor" href="#_10-c-1" aria-hidden="true" tabindex="-1">#</a> 10.C.1 Overview</h4><p>Use this endpoint to delete webhook subscriptions. You can specify multiple subscription ids by semicolon separating them on the URI. Upon delete an <code>&lt;Http code=204 /&gt;</code> is returned.</p><h4 id="_10-c-2" tabindex="-1"><a class="header-anchor" href="#_10-c-2" aria-hidden="true" tabindex="-1">#</a> 10.C.2 Reference</h4><table><tbody><tr><td>URI</td><td>https://api.myparcel.nl/webhook_subscriptions/id[;id]</td></tr><tr><td>Methods</td><td>DELETE</td></tr><tr><td rowspan="3">Required request headers</td><td>Authorization: basic BASE64(API_KEY)</td></tr><tr><td>User-Agent: CustomApiCall/2</td></tr><tr><td>Content-type: application/json; charset=utf-8</td></tr><tr><td>URI parameters</td><td>id = Subscription.id.</td></tr><tr><td>Query parameters</td><td>None.</td></tr><tr><td>Request body</td><td>None.</td></tr><tr><td>Response</td><td>HTTP/1.1 204 No Content</td></tr><tr><td>Response body</td><td>None.</td></tr><tr><td>Error response</td><td>HTTP/1.1 4xx &lt; MESSAGE &gt;</td></tr><tr><td>Error response body</td><td>Error</td></tr></tbody></table><h4 id="_10-c-3" tabindex="-1"><a class="header-anchor" href="#_10-c-3" aria-hidden="true" tabindex="-1">#</a> 10.C.3 Parameters</h4>`,11),I=s("strong",null,"id",-1),N=s("br",null,null,-1),O=t(" Data type: "),Y=t("integer"),K=t(" .id"),L=s("br",null,null,-1),D=t(" The id of the subscription to delete. You can specify multiple subscriptions by semicolon separating them."),M=a(`<h4 id="_10-c-4" tabindex="-1"><a class="header-anchor" href="#_10-c-4" aria-hidden="true" tabindex="-1">#</a> 10.C.4 Example</h4><p><strong>Request</strong></p><div class="language-json ext-json"><pre class="language-json"><code>DELETE https<span class="token operator">:</span><span class="token comment">//api.myparcel.nl/webhook_subscriptions/1 HTTP/1.1</span>
User-Agent<span class="token operator">:</span> CustomApiCall/<span class="token number">2</span>
Authorization<span class="token operator">:</span> bearer BASE64_ENCODED_API_KEY
</code></pre></div><p><strong>Response</strong></p><div class="language-json ext-json"><pre class="language-json"><code>HTTP/<span class="token number">1.1</span> <span class="token number">204</span> No Content
</code></pre></div>`,5);function W(z,G){const p=o("AutoLink"),d=o("Message"),r=o("RouterLink"),i=o("ApiLink");return l(),u("div",null,[_,s("ul",null,[b,s("li",null,[k,e(p,{item:"/api-reference/06.shipments#_6-B_2"},{default:n(()=>[m]),_:1}),g])]),e(d,{title:"",type:"tip"},{default:n(()=>[s("p",null,[y,e(p,{item:"https://webhook.site/"},{default:n(()=>[f]),_:1}),x])]),_:1}),w,s("p",null,[E,e(r,{to:"/api-reference/04.data-types.html#array",tabindex:"-1"},{default:n(()=>[A]),_:1}),T,e(i,{to:"11_A"},{default:n(()=>[q]),_:1}),R]),v,s("p",null,[C,P,j,e(r,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:n(()=>[U]),_:1}),S,H]),B,s("p",null,[I,N,O,e(r,{to:"/api-reference/04.data-types.html#integer",tabindex:"-1"},{default:n(()=>[Y]),_:1}),K,L,D]),M])}var F=c(h,[["render",W],["__file","10.webhooks.html.vue"]]);export{F as default};