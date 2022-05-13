import{r,f as s,h as i,z as o,F as n,K as e,e as t,o as d}from"./app.bfe4c4c1.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=e('<h1 id="_1-requests" tabindex="-1"><a class="header-anchor" href="#_1-requests" aria-hidden="true">#</a> 1. Requests</h1><h2 id="_1-a" tabindex="-1"><a class="header-anchor" href="#_1-a" aria-hidden="true">#</a> 1.A Base URL</h2><p>BaseURL: <strong>https://api.myparcel.nl</strong></p><h2 id="_1-b" tabindex="-1"><a class="header-anchor" href="#_1-b" aria-hidden="true">#</a> 1.B User-Agent</h2><p>To give us insight that you use the API documentation, you should always send a User-Agent in your header. If you do not use a known CMS, use the following header: <code>User-Agent: CustomApiCall/2</code></p><p>If you are using a known CMS then you should use the name of the CMS followed by its version number (<code>User-Agent: &lt;product&gt;/&lt;product-version&gt;</code>). Here&#39;s an example if your CMS is WordPress: <code>User-Agent: WordPress/4.8.1</code>.</p><h2 id="_1-c" tabindex="-1"><a class="header-anchor" href="#_1-c" aria-hidden="true">#</a> 1.C HTTP methods</h2><p>The API is REST(ful) and uses JSON as its primary data exchange format. Communication with the API goes through HTTPS thereby insuring data confidentiality and integrity. Here is a list of all supported HTTP methods</p><h3 id="_1-c-1" tabindex="-1"><a class="header-anchor" href="#_1-c-1" aria-hidden="true">#</a> 1.C.1 GET</h3><p>GET method is used for retrieving data and is idempotent. Data can be returned in JSON, PDF, CSV, XML or other formats.</p><h3 id="_1-c-2" tabindex="-1"><a class="header-anchor" href="#_1-c-2" aria-hidden="true">#</a> 1.C.2 POST</h3><p>POST is used to create new objects or send data to MyParcel.</p><h3 id="_1-c-3" tabindex="-1"><a class="header-anchor" href="#_1-c-3" aria-hidden="true">#</a> 1.C.3 DELETE</h3>',13),l=t("DELETE is used to delete an existing object (piece of data). This method always returns "),p=t(" unless otherwise specified."),f=e('<h3 id="_1-c-4" tabindex="-1"><a class="header-anchor" href="#_1-c-4" aria-hidden="true">#</a> 1.C.4 PUT</h3><p>A PUT request creates a resource or updates an existing resource. The client specifies the URI for the resource. The request body contains a complete representation of the resource. If a resource with this URI already exists, it is replaced. Otherwise, a new resource is created, if the server supports doing so.</p><h3 id="_1-c-5" tabindex="-1"><a class="header-anchor" href="#_1-c-5" aria-hidden="true">#</a> 1.C.5 PATCH</h3><p>A PATCH request performs a partial update to an existing resource. The client specifies the URI for the resource. The request body specifies a set of changes to apply to the resource. This can be more efficient than using</p><h2 id="_1-d" tabindex="-1"><a class="header-anchor" href="#_1-d" aria-hidden="true">#</a> 1.D Rate limiting(WIP)</h2><p>Rate limits may apply to many of our endpoints. You cannot receive data after you have exceeded the limit. The rate limiting will be reached when you make more than xxx requests per minute. The limit automatically resets after x minute(s).</p><p>Example: If you make 100 requests within 15 seconds to the same endpoint with an applied rate limit of 100 request per 5 minutes, you will be able to continue 5 minutes later. Hence the applied timeframe of the rate limit (5 minutes) will also be applied for the cooldown period.</p>',7);function m(_,g){const a=r("Http");return d(),s(n,null,[u,i("p",null,[l,o(a,{code:"204"}),p]),f],64)}var x=h(c,[["render",m],["__file","01.requests.html.vue"]]);export{x as default};
