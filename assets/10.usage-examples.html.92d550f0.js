import{r as l,f as c,h as n,z as a,w as e,F as i,K as o,e as s,o as r}from"./app.4da69aba.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=o(`<p>These examples assume you&#39;ve already loaded the delivery options in your page. See [Installation] if you haven&#39;t. You have to provide a configuration file in the following format as <code>window.MyParcelConfig</code> and initialize the delivery options with an event.</p><h3 id="setting-up-the-configuration" tabindex="-1"><a class="header-anchor" href="#setting-up-the-configuration" aria-hidden="true">#</a> Setting up the configuration</h3><p>This is an example.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>MyParcelConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">&#39;belgie&#39;</span><span class="token punctuation">,</span> <span class="token comment">// REQUIRED!</span>
    <span class="token literal-property property">carrierSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bpost</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dpd</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cc</span><span class="token operator">:</span> <span class="token string">&#39;BE&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;Antwerpen&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">postalCode</span><span class="token operator">:</span> <span class="token string">&#39;2000&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Trigger this event on the document to tell the delivery options to update.</span>
<span class="token comment">// Usually only needed on initializing and when the address changes.</span>
document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel_update_delivery_options&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="getting-the-address-from-your-environment" tabindex="-1"><a class="header-anchor" href="#getting-the-address-from-your-environment" aria-hidden="true">#</a> Getting the address from your environment</h3><ol><li>Set up the link between the address fields and the delivery options:<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Get data from form fields and put it in the global MyParcelConfig.
 */</span>
<span class="token keyword">function</span> <span class="token function">updateAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>MyParcelConfig<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cc</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#country&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">postalCode</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#house_number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">number</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#postcode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#address_1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">/*
   * Send the event that tells the delivery options module to reload data.
   */</span>
  document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel_update_delivery_options&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// IE9\u201311 compatible example</span>
  <span class="token keyword">var</span> event <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;HTMLEvents&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  event<span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel_update_delivery_options&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li>Add event listeners to each address field to execute this function:<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// ES6 example, use var for older environments.</span>
<span class="token keyword">const</span> addressFields <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;&lt;Country field selector&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;Postal code field selector&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;&lt;Address line 1 field selector&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

addressFields<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">field</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> updateAddress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li><li>Now, when a user changes the value in any of the fields set in <code>addressFields</code> the <code>window.MyParcelConfig</code> will be updated and the delivery options module will receive the event that tells it to update. The delivery options will reload and fetch the available options for the new address.</li></ol><h3 id="usage-in-forms" tabindex="-1"><a class="header-anchor" href="#usage-in-forms" aria-hidden="true">#</a> Usage in forms</h3><p>You&#39;ll often want to use the delivery options module in a checkout form in your webshop software. Below are some things to keep in mind, but if you&#39;re interested in doing this you should check out our Magento2 and WooCommerce plugins locally and read through these implementations. You can find the best files to get started with in [Integration examples]. We also recommend you join our [Slack] support channel to get (fast!) answers to any questions you might have.</p><ol><li>Follow the steps in [Installation] and copy <code>myparcel.js</code> (Vue included) or <code>myparcel.lib.js</code> (Vue not included) from <code>node_modules/@myparcel/delivery-options/dist</code> to your js folder.</li><li>The things you&#39;ll need to do :</li></ol><ul><li>Have either a <code>window.MyParcelConfig</code> or dispatch a <code>CustomEvent</code> with the settings you want in the page where you&#39;re loading the delivery options.</li><li>Send events to the delivery options telling it when to update or rerender.</li><li>Listen to the delivery options&#39; events to update your application according to the changes.</li><li>Attach the output data to the order that is being created.</li></ul><h3 id="allowing-or-disallowing-settings-for-specific-countries" tabindex="-1"><a class="header-anchor" href="#allowing-or-disallowing-settings-for-specific-countries" aria-hidden="true">#</a> Allowing or disallowing settings for specific countries</h3><p>Let&#39;s say you want to disallow delivery to the Netherlands, only allow pickup in Belgium, for bpost. For DPD you want pickup only, wherever it&#39;s possible.</p><p>The configuration would look like this:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>MyParcelConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">&#39;belgie&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">carrierSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bpost</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Allow delivery options in all countries it&#39;s possible in except the Netherlands.</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;NL&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// Only allow pickup locations in Belgium.</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;BE&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dpd</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowPickupLocations</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>This is currently only possible for <code>allowDeliveryOptions</code> and <code>allowPickupLocations</code>. If you want this feature to be available for more settings, please create a feature request. Or, if you want to do it yourself you can send us a pull request!</p><h3 id="using-instabox-for-same-day-delivery-only" tabindex="-1"><a class="header-anchor" href="#using-instabox-for-same-day-delivery-only" aria-hidden="true">#</a> Using Instabox for same day delivery only</h3><p>Use case: You always want to use PostNL for regular shipments, but if a same day delivery is possible, you want to allow your customer to choose Instabox.</p><p>Example configuration:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>MyParcelConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">&#39;myparcel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowSameDayDelivery</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cutoffTimeSameDay</span><span class="token operator">:</span> <span class="token string">&#39;8:30&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deliveryDaysWindow</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dropOffDelay</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceSameDayDelivery</span><span class="token operator">:</span> <span class="token number">6.65</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priceStandardDelivery</span><span class="token operator">:</span> <span class="token number">4.95</span><span class="token punctuation">,</span>
    <span class="token literal-property property">carrierSettings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Carriers are shown in order of the carrierSettings object, so RJP will be above PostNL.</span>
      <span class="token literal-property property">instabox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deliveryDaysWindow</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dropOffDelay</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">postnl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">allowDeliveryOptions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>The fields <code>deliveryDaysWindow</code> and <code>dropOffDelay</code> inside <code>carrierSettings.instabox</code> are very important here. This setup would give you the following logic:</p><blockquote><p><strong>Current day and time: Tuesday, 6:45</strong></p><ul><li>Instabox <ul><li>The only option is today, which costs \u20AC 6.65.</li></ul></li><li>PostNL <ul><li>First option: Tomorrow, standard delivery, \u20AC 4.95.</li></ul></li></ul></blockquote><ul><li>The next 6 valid days are also available.</li></ul><blockquote><p><strong>Current day and time: Tuesday, 14:30</strong></p><ul><li>PostNL <ul><li>First option: Tomorrow, standard delivery, \u20AC 4.95.</li></ul></li></ul></blockquote><ul><li>The next 6 valid days are also available.</li></ul><h4 id="integration-examples" tabindex="-1"><a class="header-anchor" href="#integration-examples" aria-hidden="true">#</a> Integration examples</h4><h5 id="our-woocommerce-implementation" tabindex="-1"><a class="header-anchor" href="#our-woocommerce-implementation" aria-hidden="true">#</a> Our WooCommerce implementation</h5><p>Files that can help you get started:</p><ul><li></li></ul>`,28),h={id:"backend-includes-frontend-class-wcmp-checkout-php",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#backend-includes-frontend-class-wcmp-checkout-php","aria-hidden":"true"},"#",-1),m=s(" Backend: "),g=s("/includes/frontend/class-wcmp-checkout.php"),v=s("Frontend: "),f=s("/assets/js/wcmp-frontend.js"),w=n("h5",{id:"our-magento-2-implementation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#our-magento-2-implementation","aria-hidden":"true"},"#"),s(" Our Magento 2 implementation")],-1),b=n("p",null,"Files that can help you get started:",-1),_=n("p",null,"Note: It's more complex in Magento 2 because of the way shipping methods work.",-1),x=n("ul",null,[n("li")],-1),j={id:"backend-model-checkout-deliveryoptionstoshippingmethods-php",tabindex:"-1"},D=n("a",{class:"header-anchor",href:"#backend-model-checkout-deliveryoptionstoshippingmethods-php","aria-hidden":"true"},"#",-1),E=s(" Backend: "),S=s("/Model/Checkout/DeliveryOptionsToShippingMethods.php"),C=s("Frontend: "),T=s("/view/frontend/web/js/view/delivery-options.js"),P=o(`<h4 id="attach-data-to-an-order-using-a-hidden-input" tabindex="-1"><a class="header-anchor" href="#attach-data-to-an-order-using-a-hidden-input" aria-hidden="true">#</a> Attach data to an order using a hidden input</h4><p>In WooCommerce and Magento 2 we injected a hidden text input inside the checkout <code>&lt;form&gt;</code> elements to hold this data and automatically pass it to the <code>$_POST</code> variable.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Listen to the CustomEvent the delivery option sends back out once its data has been updated</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel_updated_delivery_options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  myHiddenInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// And now trigger updating the checkout of whatever platform you&#39;re using.</span>
  <span class="token comment">// WooCommerce example:</span>
  document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;update_checkout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// In Magento 2 we would update quote.shippingMethod here to trigger the changes.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="deselect-options" tabindex="-1"><a class="header-anchor" href="#deselect-options" aria-hidden="true">#</a> Deselect options</h4>`,4),M=s("You might want to integrate the delivery options into a list of existing shipping methods, like we've done in "),I=s("Magento 2"),L=s(" . So when the user selects a different shipping method you'll want the delivery options to appear unselected."),q=o(`<p>Note: If you only have one option, so either &quot;delivery&quot; or &quot;pickup&quot;, the option will appear disabled. Until there&#39;s a built in solution, there&#39;s the following workaround.</p><p>If you only use delivery:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel-delivery-options__delivery--deliver&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span>
  <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><p>If you only use pickup:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel-delivery-options__delivery--pickup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span>
  <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div>`,5),O=o(`<p>To deselect all options, dispatch the <code>myparcel_disable_delivery_options</code> event. You could do this as when your users select a different shipping method, for example.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;myparcel_disable_delivery_options&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The delivery options will look like this:</p>`,3);function N(F,A){const t=l("AutoLink"),p=l("MPImg");return r(),c(i,null,[k,n("h2",h,[y,m,a(t,{item:"https://github.com/myparcelnl/woocommerce/blob/main/includes/frontend/class-wcmp-checkout.php"},{default:e(()=>[g]),_:1})]),n("p",null,[v,a(t,{item:"https://github.com/myparcelnl/woocommerce/blob/main/src/js/wcmp-frontend.js"},{default:e(()=>[f]),_:1})]),w,b,_,x,n("h2",j,[D,E,a(t,{item:"https://github.com/myparcelnl/magento/blob/develop/Model/Checkout/DeliveryOptionsToShippingMethods.php"},{default:e(()=>[S]),_:1})]),n("p",null,[C,a(t,{item:"https://github.com/myparcelnl/magento/blob/develop/view/frontend/web/js/view/delivery-options.js"},{default:e(()=>[T]),_:1})]),P,n("p",null,[M,a(t,{item:"https://github.com/myparcelnl/magento/blob/504ea103f6b3042e1dfa7debc022251eeaba381e/view/frontend/web/js/view/delivery-options.js#L231"},{default:e(()=>[I]),_:1}),L]),a(p,{src:"/documentation/delivery-options/deselect-1.png",alt:"Deselect 1"}),q,a(p,{src:"/documentation/delivery-options/deselect-2.png",alt:"Deselect 2"}),O,a(p,{src:"/documentation/delivery-options/deselect-3.png",alt:"Deselect 3"})],64)}var U=u(d,[["render",N],["__file","10.usage-examples.html.vue"]]);export{U as default};
