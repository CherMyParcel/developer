import{r,f as d,z as n,w as i,F as c,h as e,e as o,o as l}from"./app.bfe4c4c1.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const m={},h=e("h2",{id:"api-instellingen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#api-instellingen","aria-hidden":"true"},"#"),o(" API instellingen")],-1),u=e("p",null,[o("Om zendingen in het juiste account terecht te laten komen, zal je de API key uit je MyParcel-account moeten invullen. Als je ingelogd bent in jouw MyParcel account, kun je deze vinden bij jouw "),e("code",null,"Shopinstellingen > Algemeen"),o(". Het kan zijn dat je de API key nog niet ziet, maar deze eerst nog moet genereren. Klik dan op "),e("code",null,"Genereer API-key"),o(" en kopieer de API-key.")],-1),g=e("h2",{id:"modus-orderbeheer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#modus-orderbeheer","aria-hidden":"true"},"#"),o(" Modus (Orderbeheer)")],-1),p=e("p",null,'Bij de instelling "Modus" kan je aangeven of je alleen een label aan wilt maken of dat je de hele bestelling naar MyParcel wilt exporten.',-1),k=e("p",null,'Als je alleen een label aan wilt maken kan je de rest van de handleiding volgen. Wanneer je de hele order wilt exporten moet je "Modus" op "Exporteer volledige order" zetten. In de backoffice van MyParcel is het belangrijk, dat je in jouw account instellingen onder "Orderinformatie en Printopties" "Orderinformatie importeren" op "Ja" zet. Ook kan je hierna onderaan aangeven hoe je de labels/pakbonnen wilt printen in de backoffice.',-1),b=e("h2",{id:"label-weergave",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#label-weergave","aria-hidden":"true"},"#"),o(" Label weergave")],-1),_=e("p",null,"Geef hier aan of je het label wilt downloaden als PDF of wilt openen in een nieuw tabblad.",-1),w=e("h2",{id:"label-formaat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#label-formaat","aria-hidden":"true"},"#"),o(" Label formaat")],-1),j=e("p",null,"Hier geef je aan of je het label op een standaard (A4) of op een labelprinter ( A6) wilt printen.",-1),v=e("h2",{id:"vraag-om-startpositie-bij-printen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vraag-om-startpositie-bij-printen","aria-hidden":"true"},"#"),o(" Vraag om startpositie bij printen")],-1),f=e("p",null,"Met deze optie kan je verder gaan met printen waar je de laatste keer was gebleven. Hierdoor kun je alle stickers op het A4-vel gebruiken.",-1),z=e("h2",{id:"track-trace-in-email",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#track-trace-in-email","aria-hidden":"true"},"#"),o(" Track & Trace in email")],-1),x=e("p",null,'Zet "Track & Trace in e-mail" aan om de barcode en Track & Trace link mee te sturen in de verzendbevestiging naar je klanten. De Track & Trace code wordt dan toegevoegd aan de "Bestelling afgerond en/of verzonden"-mail, die wordt verzonden vanuit WooCommerce op het moment dat een bestelling de status " Afgerond" krijgt. We adviseren de track en trace-optie in je MyParcel-account uit te zetten, als je gebruik maakt van deze optie. Anders krijgen je klanten meerdere mails over hun verzonden pakket.',-1),T=e("p",null,'Let op! Zorg dat "Verwerk zendingen direct" is ingeschakeld, wanneer je deze optie gebruikt in combinatie met de Track & Trace in email optie. Anders wordt de Track & Trace code niet opgenomen in de email naar je klant, omdat er op het moment van verzenden nog geen barcode is gecre\xEBerd.',-1),M=e("h2",{id:"track-trace-in-account",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#track-trace-in-account","aria-hidden":"true"},"#"),o(" Track & Trace in account")],-1),P=e("p",null,"Als je klanten een account kunnen aanmaken in je webshop, kun je met er met deze optie voor zorgen dat de link van de barcode van de bestelling in het account wordt getoond.",-1),y=e("h2",{id:"bezorgdatum-in-klantcomminucatie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bezorgdatum-in-klantcomminucatie","aria-hidden":"true"},"#"),o(" Bezorgdatum in klantcomminucatie")],-1),A=e("p",null,"Deze optie laat je klanten de bezorgdag zien in orderbevestigingen en Mijn Account.",-1),C=e("h2",{id:"verwerk-zendingen-direct",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#verwerk-zendingen-direct","aria-hidden":"true"},"#"),o(" Verwerk zendingen direct")],-1),W=e("p",null,'Wanneer je deze optie inschakelt, zullen zendingen direct worden verwerkt wanneer deze verzonden zijn naar MyParcel. Ze zijn dan direct voorgemeld en de zending is niet meer aan te passen in je MyParcel-backoffice. Als deze optie niet aan staat, wordt de zending als "Concept" ingeschoten. Je kunt de zending dan nog steeds aanpassen in je MyParcel-account na het exporteren.',-1),B=e("h2",{id:"orderstatus-automatisering",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#orderstatus-automatisering","aria-hidden":"true"},"#"),o(" Orderstatus automatisering")],-1),I=e("p",null,"Met deze optie kan je kiezen wanneer je de status wilt veranderen. Je kan kiezen om dit na het exporteren of printen te doen. Hierna kan je kiezen welke status de zendingen moet krijgen na het exporteren of printen.",-1),O=e("h2",{id:"bewaar-barcode-in-een-notitie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bewaar-barcode-in-een-notitie","aria-hidden":"true"},"#"),o(" Bewaar barcode in een notitie")],-1),V=e("p",null,"Plaats de barcode in een notitie van een order, hierdoor is het mogelijk voor andere plugins om de barcode makkelijk te kunnen uitlezen.",-1),D=e("h2",{id:"titel-voor-barcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#titel-voor-barcode","aria-hidden":"true"},"#"),o(" Titel voor barcode")],-1),H=e("p",null,"Je kunt hier de tekst veranderen dat voor de barcode van de zending komt te staan in de notities van de bestelling. Dit is de tekst die voor de barcode komt te staan in de notities.",-1),J=e("p",null,"Let op: maak je gebruik van een koppeling met Effect Connect om Bol.com-orders in jouw WooCommerce-omgeving te krijgen? Laat de standaard waarde Tracking code: staan om de barcode automatisch terug te koppelen naar Bol.com.",-1),L=e("h2",{id:"diagnostische-hulpmiddelen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diagnostische-hulpmiddelen","aria-hidden":"true"},"#"),o(" Diagnostische hulpmiddelen")],-1),E=e("p",null,"Je kunt de diagnostische hulpmiddelen inschakelen op het moment dat er problemen zijn met het exporteren van de zendingen. Hiermee worden er logbestanden aangemaakt waarin de communicatie tussen WooCommerce en MyParcel wordt beschreven.",-1);function F(N,Z){const a=r("MPImg"),t=r("Message");return l(),d(c,null,[n(a,{src:"/documentation/woocommerce/woocommerce_general.jpg",alt:"woocommerce_general"}),h,u,n(a,{src:"/documentation/woocommerce/woocommerce_api.jpg",alt:"woocommerce api key"}),g,p,n(a,{src:"/documentation/woocommerce/woocommerce-orderbeheer.jpg",alt:"woocommerce orderbeheer"}),k,n(a,{src:"/documentation/woocommerce/orderbeheer-backoffice-instelling.jpg",alt:"MyParcel orderbeheer"}),b,_,n(a,{src:"/documentation/woocommerce/woocommerce-labelweergave.jpg",alt:"WooCommerce label weergaven"}),w,j,n(a,{src:"/documentation/woocommerce/woocommerce-labelformaat.jpg",alt:"WooCommerce label formaat"}),v,f,n(a,{src:"/documentation/woocommerce/woocommerce-startposition.jpg",alt:"WooCommerce start position"}),z,x,n(t,{title:"",type:"note"},{default:i(()=>[T]),_:1}),n(a,{src:"/documentation/woocommerce/woocommerce-tracktrace-mail.jpg",alt:"WooCommerce Track & Trace mail"}),M,P,n(a,{src:"/documentation/woocommerce/woocommerce-tracktrace-account.jpg",alt:"WooCommerce Track & Trace account"}),y,A,n(a,{src:"/documentation/woocommerce/woocommerce-bezorgdatum-klantcommunicatie.jpg",alt:"WooCommerce bezorgdatum klantcommunicatie"}),C,W,n(a,{src:"/documentation/woocommerce/woocommerce-verwerk-zendingen-direct.jpg",alt:"WooCommerce verwerk zendingen direct"}),B,I,n(a,{src:"/documentation/woocommerce/woocommerce-automatisering.jpg",alt:"WooCommerce automatisering"}),O,V,n(a,{src:"/documentation/woocommerce/woocommerce-barcode-notitie.jpg",alt:"WooCommerce barcode in notitie"}),D,H,n(t,{title:"",type:"note"},{default:i(()=>[J]),_:1}),L,E,n(a,{src:"/documentation/woocommerce/woocommerce-diagnostische-hulpmiddelen.jpg",alt:"woocommerce diagnostische hulpmiddelen"})],64)}var S=s(m,[["render",F],["__file","01.algemeen.html.vue"]]);export{S as default};
