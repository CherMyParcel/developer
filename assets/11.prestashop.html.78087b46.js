import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as u,a,w as n,b as e,d as t,e as o,r as d}from"./app.8d3d4fe5.js";var g="/documentation/prestashop/prestashop-create-label-bulk.mp4",m="/documentation/prestashop/prestashop-create-label-get-label.mp4",b="/documentation/prestashop/prestashop-create-label-orderdetails.mp4";const k={},v=e("h2",{id:"prestashop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prestashop","aria-hidden":"true",tabindex:"-1"},"#"),t(" PrestaShop")],-1),f=e("h3",{id:"introductie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introductie","aria-hidden":"true",tabindex:"-1"},"#"),t(" Introductie")],-1),_=e("p",null,"Deze plugin werkt met PrestaShop 1.7+.",-1),j=e("h5",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true",tabindex:"-1"},"#"),t(" Features")],-1),w=t("Delivery options"),x=t(" integrated in your checkout"),y=e("li",null,"Export your PrestaShop orders to MyParcel with a simple click, single orders or in batch",-1),z=e("li",null,"Print shipping labels directly (PDF)",-1),P=e("li",null,"Create multiple shipments for the same order",-1),M=e("li",null,"Choose your package type (Parcel, digital stamp, mailbox package)",-1),S=e("li",null,"Define default MyParcel shipping options (signature, only recipient, insurance, etc.)",-1),D=e("li",null,"Modify the MyParcel shipping options per order before exporting",-1),A=e("li",null,"View the status of the shipment in the order details page",-1),C=e("h3",{id:"installatie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installatie","aria-hidden":"true",tabindex:"-1"},"#"),t(" Installatie")],-1),H=e("p",null,"You can download the .zip file of the latest release below:",-1),N=t("Om gebruik te maken van de module heb je een MyParcel-account nodig. Je kunt je registreren op "),I=t("MyParcel.nl"),L=t(" voor een Nederlands account en op "),G=t("sendmyparcel.be"),O=t(" voor een Belgisch account."),V=e("li",null,"Verwijder de oude module als je hiervan gebruik hebt gemaakt",-1),B=t("Download het .zip-bestand van de "),J=t("laatste versie"),K=t(" van de plugin. (Let op dat je de juiste versie downloadt)"),q=e("li",null,[t("Open je Prestashop admin en ga naar "),e("code",null,"Modules > Manager")],-1),E=e("li",null,[t("Klik op "),e("code",null,"Upload"),t(" en upload het .zip-bestand")],-1),W=e("li",null,[t("Klik op "),e("code",null,"Configure"),t(" om de plugin te configureren")],-1),F=e("p",null,[t("Je kunt de module vinden onder "),e("code",null,"Verzending > MyParcel"),t(".")],-1),T=e("h3",{id:"configuratie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuratie","aria-hidden":"true",tabindex:"-1"},"#"),t(" Configuratie")],-1),Q=e("h4",{id:"algemene-instellingen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#algemene-instellingen","aria-hidden":"true",tabindex:"-1"},"#"),t(" Algemene instellingen")],-1),R=o('<h5 id="deel-mailadres-klant" tabindex="-1"><a class="header-anchor" href="#deel-mailadres-klant" aria-hidden="true" tabindex="-1">#</a> Deel mailadres klant</h5><p>Deel het mailadres van je klant met MyParcel om Track en trace te kunnen versturen vanuit MyParcel.</p><h5 id="deel-telefoonnummer-klant" tabindex="-1"><a class="header-anchor" href="#deel-telefoonnummer-klant" aria-hidden="true" tabindex="-1">#</a> Deel telefoonnummer klant</h5><p>Deel het telefoonnummer van je klant met MyParcel.</p><h5 id="gebruik-tweede-adresveld-als-huisnummer" tabindex="-1"><a class="header-anchor" href="#gebruik-tweede-adresveld-als-huisnummer" aria-hidden="true" tabindex="-1">#</a> Gebruik tweede adresveld als huisnummer</h5><p>Deze instelling zal er voor zorgen dat adresveld 2 als huisnummer wordt genomen bij het aanmaken van een zending.</p><h4 id="order-opties" tabindex="-1"><a class="header-anchor" href="#order-opties" aria-hidden="true" tabindex="-1">#</a> Order opties</h4>',7),U=o('<h5 id="automatische-orderstatus" tabindex="-1"><a class="header-anchor" href="#automatische-orderstatus" aria-hidden="true" tabindex="-1">#</a> Automatische orderstatus</h5><p>Stel in welke status je orders krijgen na exporteren, scannen bij PostNL en wanneer de zending is afgeleverd.</p><h5 id="negeer-orderstatussen" tabindex="-1"><a class="header-anchor" href="#negeer-orderstatussen" aria-hidden="true" tabindex="-1">#</a> Negeer orderstatussen</h5><p>Hier kun je orderstatussen selecteren die genegeerd moeten worden bij <code>Automatische orderstatus</code>.</p><h5 id="order-status-mail" tabindex="-1"><a class="header-anchor" href="#order-status-mail" aria-hidden="true" tabindex="-1">#</a> Order status mail</h5><p>Wanneer er een notificatie moet worden verstuurd op het moment van veranderen van de orderstatus.</p><h5 id="moment-van-notificatie-versturen" tabindex="-1"><a class="header-anchor" href="#moment-van-notificatie-versturen" aria-hidden="true" tabindex="-1">#</a> Moment van notificatie versturen</h5><p>Kies er voor om de notificatie te versturen na het scannen van het label bij PostNL of na het downloaden van het label.</p><h5 id="moment-van-notificatie-versturen-1" tabindex="-1"><a class="header-anchor" href="#moment-van-notificatie-versturen-1" aria-hidden="true" tabindex="-1">#</a> Moment van notificatie versturen</h5><p>Kies er voor om de notificatie te versturen na het scannen van het label bij PostNL of na het downloaden van het label.</p><h5 id="notificatie-versturen-bij-digitale-postzegels" tabindex="-1"><a class="header-anchor" href="#notificatie-versturen-bij-digitale-postzegels" aria-hidden="true" tabindex="-1">#</a> Notificatie versturen bij digitale postzegels</h5><p>Als je een notificatie wilt verzenden op het moment van downloaden van een digitale postzegel, kies je hier voor &#39;Ja&#39;.</p><h4 id="customs-instellingen" tabindex="-1"><a class="header-anchor" href="#customs-instellingen" aria-hidden="true" tabindex="-1">#</a> Customs instellingen</h4><p>Ga naar <code>Catalogus &gt; Producten &gt; -product-</code> om de gegevens die nodig zijn voor de customs declaration in te stellen. Om een zending te kunnen zult een gewicht en een HS-code moeten instellen. Ook is een land van herkomst nodig.</p>',14),Y=o('<p>Kies voor &#39;Verzending&#39; om een gewicht in te stellen. Klik daarna op &#39;Modules&#39; en kies voor <code>MyParcel &gt; Customs</code> om in te stellen welke HS code voor dit product moet worden gebruikt en geef aan wat het land van herkomst is. Wanneer hier niets is ingevuld, kun je bij de instellingen van de module <code>Modules &gt; Module Manager &gt; MyParcelNL/MyParcelBE &gt; Configureren &gt; Customs Options</code>standaard waarden instellen.</p><h5 id="default-customs-form" tabindex="-1"><a class="header-anchor" href="#default-customs-form" aria-hidden="true" tabindex="-1">#</a> Default customs form</h5><p>Je kunt bij het product zelf kiezen om dit product op het customs formulier te tonen of juist over te slaan. Ga naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Customs</code> om dit in te stellen per product.</p><h5 id="default-customs-code" tabindex="-1"><a class="header-anchor" href="#default-customs-code" aria-hidden="true" tabindex="-1">#</a> Default customs code</h5><p>Hier vul je een HS-code in die wordt gebruikt wanneer er geen HS-code is ingevuld bij het product. Ga naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Customs</code> om dit in te stellen per product.</p><h5 id="default-customs-origin" tabindex="-1"><a class="header-anchor" href="#default-customs-origin" aria-hidden="true" tabindex="-1">#</a> Default customs origin</h5><p>Geef hier aan welk land van herkomst er moet worden gebruikt als er geen land is ingevuld bij het product. Ga naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Customs</code> om dit in te stellen per product.</p><h5 id="default-customs-age-check" tabindex="-1"><a class="header-anchor" href="#default-customs-age-check" aria-hidden="true" tabindex="-1">#</a> Default customs age check</h5><p>Wanneer er standaard op leeftijd moet worden gecontroleerd, kies je hier voor &quot;Ja&quot;. Ga naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Customs</code> om dit in te stellen per product.</p><h4 id="vervoerders-opties" tabindex="-1"><a class="header-anchor" href="#vervoerders-opties" aria-hidden="true" tabindex="-1">#</a> Vervoerders opties</h4><p>Bij installatie van de plugin wordt automatisch de vervoerder PostNL (in Belgi\xEB bpost, dpd en PostNL) aangemaakt. Het is ok mogelijk om andere en reeds aangemaakte vervoerders te koppelen, waardoor de MyParcel bezorgopties en acties beschikbaar worden voor orders met deze vervoerder. Dit doe je vanuit de Carrier options tab in de plugin. Klik hier op het plusteken (+) om een vervoerder te koppelen aan MyParcel. In het scherm wat hierop volgt, kun je via &quot;Select PS carrier&quot; een bestaande vervoerder kiezen of via carrier name een nieuwe vervoerder aanmaken. In de plugin staat de &#39;Carrier option&#39; standaard op PostNL. Nadat de vervoerder gekoppeld is, kun je voor deze vervoerder bezorgopties configureren en kun je voor orders gedaan met deze vervoerder (met terugwerkende kracht) labels printen in het orderoverzicht.</p>',11),Z=o('<h5 id="checkout-delivery-form" tabindex="-1"><a class="header-anchor" href="#checkout-delivery-form" aria-hidden="true" tabindex="-1">#</a> Checkout delivery form</h5><p>Stel hier de titel van de bezorgopties in. Dit zal boven de bezorgopties worden getoond in de checkout. Geef hier ook aan op welke dagen je de pakketten bij PostNL inlevert en welke cut-off tijd je hiervoor aanhoudt. De bezorgopties zullen aan de hand van deze gegevens worden getoond.</p><p>Geef ook aan welke dagen afwijken van de standaard drop off days, bijvoorbeeld bij feestdagen of vakanties.</p><p>Met <em><strong>Delivery days window</strong></em> optie kun je aangeven tot hoever in de toekomst jouw klanten een leverdag kunnen kiezen. Wanneer je kiest voor &quot;Hide days&quot; worden er geen dagen getoond in de checkout.</p><p>Bij <em><strong>Drop off delay</strong></em> geef je aan hoeveel dagen er nodig zijn tot een pakket kan worden verstuurd. Bijvoorbeeld wanneer je het product nog moet maken op het moment van bestellen.</p><p>Bij de verschillende bezorgopties is het mogelijk een toeslag in te stellen. Deze zal worden getoond in de checkout en worden doorberekend aan jouw klant.</p><h5 id="delivery" tabindex="-1"><a class="header-anchor" href="#delivery" aria-hidden="true" tabindex="-1">#</a> Delivery</h5><p>Stel hier in welk pakkettype er standaard moet worden gebruikt, wanneer er geen pakkettype is ingevuld bij het product. Om dit bij het product in te stellen, ga je naar <code>Catalogus &gt; Producten &gt; -product- &gt; Modules &gt; MyParcel &gt; Delivery</code> en stel je de juiste waarden voor dat product in. Je kunt er hier ook voor kiezen om alle zendingen een bezorgoptie mee te geven.</p>',8),X=e("p",null,"Let op: Dit kan alleen voor pakketten binnen Nederland!",-1),$=e("h5",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true",tabindex:"-1"},"#"),t(" Returns")],-1),ee=e("p",null,"Stel hier in welk pakkettype er standaard moet worden gebruikt voor retourzendingen.",-1),te=e("h4",{id:"api-instellingen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api-instellingen","aria-hidden":"true",tabindex:"-1"},"#"),t(" API instellingen")],-1),ae=o('<h5 id="jouw-api-key" tabindex="-1"><a class="header-anchor" href="#jouw-api-key" aria-hidden="true" tabindex="-1">#</a> Jouw API key</h5><p>Om de module te gebruiken moet je een API key uit je MyParcel-account invullen. Als je ingelogd bent in jouw MyParcel account, kun je deze vinden bij het <code>Shopinstellingen &gt; Algemeen</code>. Het kan zijn dat je de API key nog niet ziet en deze eerst nog moet genereren. Klik dan op <code>Genereer API-key</code> en kopieer de API-key.</p><h5 id="api-logging" tabindex="-1"><a class="header-anchor" href="#api-logging" aria-hidden="true" tabindex="-1">#</a> API logging</h5><p>Zet dit aan als je problemen ervaart met de module. Support kan hiermee de communicatie tussen de API bekijken.</p><h4 id="label-instellingen" tabindex="-1"><a class="header-anchor" href="#label-instellingen" aria-hidden="true" tabindex="-1">#</a> Label instellingen</h4>',5),ne=o('<h5 id="eigen-kenmerk-label" tabindex="-1"><a class="header-anchor" href="#eigen-kenmerk-label" aria-hidden="true" tabindex="-1">#</a> Eigen kenmerk label</h5><p>Geef hier aan wat je als eigen kenmerk wilt tonen op je label. Je kunt hier ook kiezen voor een ordernummer of referentie door hier een variabele in te vullen. De beschikbare variabelen zijn:</p><ul><li><code>{order.id}</code></li><li><code>{order.reference}</code></li></ul><h5 id="label-formaat" tabindex="-1"><a class="header-anchor" href="#label-formaat" aria-hidden="true" tabindex="-1">#</a> Label formaat</h5><p>Hier geef je aan of je het label op een standaard (A4) of op een labelprinter (A6) wilt printen.</p><h5 id="standaard-label-positie" tabindex="-1"><a class="header-anchor" href="#standaard-label-positie" aria-hidden="true" tabindex="-1">#</a> Standaard label positie</h5><p>Hier geef je aan op welke plek je het label standaard wilt hebben, wanneer je kiest voor het A4-labelformaat.</p><h5 id="label-openen-of-alleen-downloaden" tabindex="-1"><a class="header-anchor" href="#label-openen-of-alleen-downloaden" aria-hidden="true" tabindex="-1">#</a> Label openen of alleen downloaden</h5><p>Kies hier of het label gelijk moet worden geopend na downloaden.</p><h5 id="vraag-om-startpositie-bij-printen" tabindex="-1"><a class="header-anchor" href="#vraag-om-startpositie-bij-printen" aria-hidden="true" tabindex="-1">#</a> Vraag om startpositie bij printen</h5><p>Met deze optie kan je verder gaan met printen waar je de laatste keer was gebleven. Hierdoor kun je alle stickers op het A4-vel gebruiken.</p><h3 id="gebruik-van-de-plugin" tabindex="-1"><a class="header-anchor" href="#gebruik-van-de-plugin" aria-hidden="true" tabindex="-1">#</a> Gebruik van de plugin</h3><h4 id="aanmaken-van-labels" tabindex="-1"><a class="header-anchor" href="#aanmaken-van-labels" aria-hidden="true" tabindex="-1">#</a> Aanmaken van labels</h4><p>Het aanmaken van labels kan op verschillende manieren. Je kunt dit doen vanuit het bestellingenoverzicht zoals te zien is op onderstaand filmpje. Op deze manier maak je gemakkelijk meerdere labels tegelijk aan.</p>',14),re=e("figure",{class:"video_container"},[e("video",{controls:"true",allowfullscreen:"true"},[e("source",{src:g,type:"video/mp4"})])],-1),oe=e("p",null,"Ook kun je het pakkettype per zending vanuit het bestellingoverzicht wijzigen. Dit doe je door op 'Aanmaken' te klikken bij de bestelling en een ander pakkettype te kiezen en op te slaan. In het filmpje wordt getoond hoe je dit doet.",-1),ie=e("figure",{class:"video_container"},[e("video",{controls:"true",allowfullscreen:"true"},[e("source",{src:m,type:"video/mp4"})])],-1),de=e("p",null,"Ook wanneer je een bestelling opent, kun je labels aanmaken. Hoe je dit doet, zie je in onderstaand filmpje.",-1),se=e("figure",{class:"video_container"},[e("video",{controls:"true",allowfullscreen:"true"},[e("source",{src:b,type:"video/mp4"})])],-1),le=e("h3",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true",tabindex:"-1"},"#"),t(" FAQ")],-1),he=e("h4",{id:"er-zijn-geen-myparcel-acties-beschikbaar-in-het-orderoverzicht-wat-moet-ik-doen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#er-zijn-geen-myparcel-acties-beschikbaar-in-het-orderoverzicht-wat-moet-ik-doen","aria-hidden":"true",tabindex:"-1"},"#"),t(" Er zijn geen MyParcel acties beschikbaar in het orderoverzicht. Wat moet ik doen?")],-1),ce=t("Het kan zijn dat je geen gebruik wil maken van de vervoerder die standaard door de plugin wordt aangemaakt, of dat je oude orders hebt die je wil verwerken met een andere vervoerder. Voor deze vervoerders zijn de MyParcel acties in het order overzicht niet standaard zichtbaar, daarvoor moet de vervoerder eerst gekoppeld worden. Volg hiervoor de stappen die beschreven staan onder vervoerders koppelen. Mocht je vervoerder al gekoppeld zijn, maar je ziet nog steeds geen bezorgopties, probeer dan een nieuwe vervoerder aan te maken en die te koppelen. Als je dan nog steeds geen MyParcel acties ziet, kun je contact opnemen met "),pe=t("support@myparcel.nl");function ue(ge,me){const s=d("GitHubShield"),l=d("Stack"),i=d("AutoLink"),r=d("MPImg"),h=d("Message");return p(),u("div",null,[v,a(l,{class:"grid-flow-col auto-cols-max gap-1"},{default:n(()=>[a(s,{repo:"myparcelnl/prestashop"}),a(s,{repo:"myparcelnl/prestashop",link:"issues"}),a(s,{repo:"myparcelnl/prestashop",link:"pulls"})]),_:1}),f,_,j,e("ul",null,[e("li",null,[a(i,{item:"https://github.com/myparcelnl/delivery-options"},{default:n(()=>[w]),_:1}),x]),y,z,P,M,S,D,A]),C,H,a(s,{repo:"myparcelnl/prestashop"}),e("p",null,[N,a(i,{item:"https://myparcel.nl"},{default:n(()=>[I]),_:1}),L,a(i,{item:"https://sendmyparcel.be"},{default:n(()=>[G]),_:1}),O]),e("ol",null,[V,e("li",null,[B,a(i,{item:"https://github.com/myparcelnl/prestashop/releases/latest"},{default:n(()=>[J]),_:1}),K]),q,E,W]),F,T,Q,a(r,{src:"/documentation/prestashop/prestashop-general-settings.jpg",alt:"PrestaShop general settings"}),R,a(r,{src:"/documentation/prestashop/prestashop-order-options.jpg",alt:"PrestaShop order options"}),U,a(r,{src:"/documentation/prestashop/prestashop-customs-settings.jpg",alt:"PrestaShop custom settings"}),Y,a(r,{src:"/documentation/prestashop/prestashop-carrier-settings.jpg",alt:"PrestaShop carrier settings"}),Z,a(h,{title:"",type:"note"},{default:n(()=>[X]),_:1}),$,ee,te,a(r,{src:"/documentation/prestashop/prestashop-api-settings.jpg",alt:"PrestaShop api settings"}),ae,a(r,{src:"/documentation/prestashop/prestashop-label-settings.jpg",alt:"PrestaShop label settings"}),ne,re,oe,ie,de,se,le,he,e("p",null,[ce,a(i,{item:"mailto:support@myparcel.nl"},{default:n(()=>[pe]),_:1})])])}var ve=c(k,[["render",ue],["__file","11.prestashop.html.vue"]]);export{ve as default};
