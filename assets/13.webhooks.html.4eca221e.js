import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as u,c as l,b as a,w as e,e as p,a as n,d as s,r as o}from"./app.f317d6f2.js";const d={},h=p(`<p>You can use our webhooks to keep track of changes in shipments, labels and your shop settings in the most efficient way.</p><p>Do note that most of our webhooks do not send a lot of data in the payload. They are more like a notification with a few properties to allow you to decide to proceed to send another request or not. This is for increased security and to reduce unnecessary bandwidth usage.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3><ul><li>Your website must use HTTPS.</li></ul><h3 id="registering-a-webhook" tabindex="-1"><a class="header-anchor" href="#registering-a-webhook" aria-hidden="true">#</a> Registering a webhook</h3><p>Register a webhook by instantiating the <code>WebhookWebService</code> you want, passing your API key and executing <code>subscribe</code> with the URL you want to receive the payloads. You can only have one subscription to each webhook.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$service</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>Web<span class="token punctuation">\\</span>Webhook<span class="token punctuation">\\</span>ShipmentStatusChangeWebhookWebService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$webhookId</span> <span class="token operator">=</span> <span class="token variable">$service</span>
    <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;base64-encoded-api-key&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;https://mywebsite.com/path/to/webhook&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Save $webhookId somewhere safe.</span>
</code></pre></div>`,7),k=n("code",null,"ShipmentStatusChangeWebhookWebService",-1),b=s(" can be any of the services described in "),g=s("Available Webhooks"),_=s("."),f=p(`<h3 id="deleting-a-webhook" tabindex="-1"><a class="header-anchor" href="#deleting-a-webhook" aria-hidden="true">#</a> Deleting a webhook</h3><p>To delete a webhook, you need to pass your API key and the numeric id you&#39;ve received when registering the webhook.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$service</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>MyParcelNL<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>src<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>Web<span class="token punctuation">\\</span>Webhook<span class="token punctuation">\\</span>ShipmentStatusChangeWebhookWebService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$service</span>
    <span class="token operator">-&gt;</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;base64-encoded-api-key&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token variable">$webhookId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,3),y=n("p",null,[s("In case you lost the ID, you can do an authenticated call to "),n("code",null,"https://api.myparcel.nl/webhook_subscriptions"),s(" to retrieve it. You can also subscribe to the same endpoint again, which will remove the old subscription.")],-1),m=n("h3",{id:"available-webhooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#available-webhooks","aria-hidden":"true"},"#"),s(" Available webhooks")],-1),v=n("h4",{id:"shipmentstatuschange",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shipmentstatuschange","aria-hidden":"true"},"#"),s(" ShipmentStatusChange")],-1),q=n("p",null,"Triggered when any shipment's status changes. This is the recommended way to keep track of shipment statuses.",-1),w=n("p",null,[n("code",null,"\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentStatusChangeWebhookWebService")],-1),S=s("More information: "),W=n("h4",{id:"shipmentlabelcreated",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shipmentlabelcreated","aria-hidden":"true"},"#"),s(" ShipmentLabelCreated")],-1),x=n("p",null,"Triggered when any label is printed/created.",-1),C=n("p",null,[n("code",null,"\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShipmentLabelCreatedWebhookWebService")],-1),A=s("More information: "),L=p(`<h4 id="shopupdated" tabindex="-1"><a class="header-anchor" href="#shopupdated" aria-hidden="true">#</a> ShopUpdated</h4><p>Triggered when the shop is updated.</p><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopUpdatedWebhookWebService</code></p><h5 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h5><p>Example: After saving the &quot;General Settings&quot; section in the backoffice.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;shop_id&quot;</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token property">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;general_settings&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;modified&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shop_updated&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="shopcarrierconfigurationupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrierconfigurationupdated" aria-hidden="true">#</a> ShopCarrierConfigurationUpdated</h4><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopCarrierConfigurationUpdatedWebhookWebService</code></p><p>Triggered when the carrier configuration in a shop is updated, for example when a different drop-off point is selected.</p><h5 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1" aria-hidden="true">#</a> Response</h5><p>Example: After changing the default drop-off time for PostNL from <code>16:00</code> to <code>16:30</code>.</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;shop_id&quot;</span><span class="token operator">:</span> <span class="token number">58585</span><span class="token punctuation">,</span>
        <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shop_carrier_configuration_updated&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="shopcarrieraccessibilityupdated" tabindex="-1"><a class="header-anchor" href="#shopcarrieraccessibilityupdated" aria-hidden="true">#</a> ShopCarrierAccessibilityUpdated</h4><p><code>\\MyParcelNL\\Sdk\\src\\Services\\Web\\Webhook\\ShopCarrierAccessibilityUpdatedWebhookWebService</code></p><h5 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2" aria-hidden="true">#</a> Response</h5><p>Example: After disabling a carrier in the backoffice.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token punctuation">{</span>
  <span class="token string double-quoted-string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;hooks&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string double-quoted-string">&quot;shop_id&quot;</span><span class="token punctuation">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;event&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;shop_carrier_accessibility_updated&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17);function N(P,M){const i=o("AutoLink"),t=o("Message"),c=o("ApiLink");return u(),l("div",null,[h,a(t,{title:"",type:"note"},{default:e(()=>[n("p",null,[k,b,a(i,{item:"#available-webhooks"},{default:e(()=>[g]),_:1}),_])]),_:1}),f,a(t,{title:"",type:"tip"},{default:e(()=>[y]),_:1}),m,v,q,w,a(t,{title:"",type:"tip"},{default:e(()=>[n("p",null,[S,a(c,{to:"11_B"})])]),_:1}),W,x,C,a(t,{title:"",type:"tip"},{default:e(()=>[n("p",null,[A,a(c,{to:"11_C"})])]),_:1}),L])}var U=r(d,[["render",N],["__file","13.webhooks.html.vue"]]);export{U as default};
