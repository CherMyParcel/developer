import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as l,b as a,a as n,w as s,e as r,d as e,r as i}from"./app.bcb55c99.js";const p={},g=r(`<h3 id="technische-vereisten" tabindex="-1"><a class="header-anchor" href="#technische-vereisten" aria-hidden="true" tabindex="-1">#</a> Technische vereisten</h3><p>Om de MyParcel Magento 2 extensie te gebruiken dient je server aan onderstaande vereisten te voldoen:</p><ul><li>PHP versie 7 of hoger</li></ul><p>De onderstaande Magento versie wordt ondersteund:</p><ul><li>Community 2.x</li></ul><h3 id="installatie" tabindex="-1"><a class="header-anchor" href="#installatie" aria-hidden="true" tabindex="-1">#</a> Installatie</h3><p>De MyParcel Magento 2 extensie is niet te downloaden via de Magento Marketplace.</p><p>Voor het installeren adviseren wij om een backup te maken van jouw Magento 2 omgeving. De extensie is te verkrijgen via de terminal, raadpleeg jouw webbeheerder. Jouw webbeheerder kan het volgende commando in de root van de website (in bv. <code>public_html</code>) uitvoeren om de MyParcel extensie te installeren:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/magento
</code></pre></div><h4 id="installeer-je-voor-het-eerst-een-extensie-in-jouw-magento-omgeving" tabindex="-1"><a class="header-anchor" href="#installeer-je-voor-het-eerst-een-extensie-in-jouw-magento-omgeving" aria-hidden="true" tabindex="-1">#</a> Installeer je voor het eerst een extensie in jouw Magento omgeving?</h4><p>Dan bestaat de kans dat je de volgende melding krijgt:</p>`,11),h=e("Om de Username en Password te verkrijgen ga je naar "),u=e("Magento marketplace"),m=e(". Hier kun je een account aanmaken en inloggen. Ga daarna in "),v=n("code",null,"My Account",-1),_=e(" naar "),k=n("code",null,"Marketplace",-1),b=e(". Klik vervolgens op "),j=n("code",null,"My Access Keys",-1),x=e(" en op "),M=n("code",null,"Magento 2",-1),f=e("."),w=n("p",null,"Hier zie je public key en een private key. De public key kan je in de terminal gebruiken als username en de private key kan je gebruiken als Password. Zie je de keys nog niet? Klik dan op Create A New Access Key.",-1),y=r(`<h4 id="cache-legen" tabindex="-1"><a class="header-anchor" href="#cache-legen" aria-hidden="true" tabindex="-1">#</a> Cache legen</h4><p>Om de cache te legen en andere benodigde acties van Magento 2 uit te voeren gebruik je de volgende reeks commandos:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rm</span> -rf var/di/* pub/static/* var/cache/* var/pagecache/* var/generation/* var/dir/* var/view_preprocessed/*
php bin/magento cache:flush 
php bin/magento setup:upgrade 
php bin/magento setup:static-content:deploy 
php bin/magento setup:static-content:deploy nl_NL 
php bin/magento indexer:reindex
</code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true" tabindex="-1">#</a> Update</h3><p>Om een update uit te voeren kun je het volgende commando gebruiken:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">composer</span> update myparcelnl/magento
</code></pre></div><p>Maak je nog gebruik van een oudere versie van onze plugin, en zou je deze graag willen bijwerken naar bijvoorbeeld versie <code>4.x</code>, dan kun je onderstaand commando gebruiken om de laatste versie te installeren:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/magento:4
</code></pre></div><p>Misschien krijg je tijdens de update een melding dat de sdk bijgewerkt moet worden naar versie <code>x.x</code>. Gebruik dan het commando:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">composer</span> require myparcelnl/sdk:x.x
</code></pre></div>`,10),P=e("Vervolgens moet je "),A=e("de Magento cache legen"),N=e(".");function V(C,D){const t=i("MPImg"),o=i("AutoLink");return c(),l("div",null,[g,a(t,{src:"/documentation/magento/magento-composer-update.jpg",alt:"Magento composer update"}),n("p",null,[h,a(o,{item:"https://marketplace.magento.com"},{default:s(()=>[u]),_:1}),m,v,_,k,b,j,x,M,f]),a(t,{src:"/documentation/magento/magento-marketplace-start.jpg",alt:"Magento marketplace"}),w,a(t,{src:"/documentation/magento/magento-marketplace-key.jpg",alt:"Magento marketplace key"}),y,n("p",null,[P,a(o,{item:"#cache-legen"},{default:s(()=>[A]),_:1}),N])])}var K=d(p,[["render",V],["__file","02.installatie.html.vue"]]);export{K as default};
