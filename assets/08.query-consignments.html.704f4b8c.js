import{r as n,f as p,z as s,w as c,h as a,F as r,K as i,e as t,o as l}from"./app.48fbc8c7.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const g={},k=i(`<p>You can search and filter consignments by certain values:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token variable">$consignments</span> <span class="token operator">=</span> <span class="token class-name static-context">MyParcelCollection</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;api_key_from_backoffice&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;q&#39;</span>                    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Niels&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;reference_identifier&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;order-1234&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;status&#39;</span>               <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;from&#39;</span>                 <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;2020-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;to&#39;</span>                   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;2020-02-01 00:00:00&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;page&#39;</span>                 <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;size&#39;</span>                 <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;order&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;DESC&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;package_type&#39;</span>         <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;region&#39;</span>               <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NL;EU&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;dropoff_today&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>For <code>q</code> and <code>reference identifier</code> you can use <code>*</code> (wildcards) to search smarter.</p>`,3),d=a("p",null,"If the 2nd parameter is an object, then public properties will be used. If you query in many ways, creating a separate class can provide a clean solution.",-1),_=t("For more information, see "),m=t(".");function f(q,h){const e=n("Message"),o=n("ApiLink");return l(),p(r,null,[k,s(e,{title:"",type:"tip"},{default:c(()=>[d]),_:1}),a("p",null,[_,s(o,{to:"6_E"}),m])],64)}var v=u(g,[["render",f],["__file","08.query-consignments.html.vue"]]);export{v as default};