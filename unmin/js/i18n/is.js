/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-08
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Icelandic dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "is",
	"%lang-en": "Icelandic",
	"%lang-fr": "islandais",
	"%lang-nat": "Íslenska",
	"%all": "Allt",
	"%home": "Heima",
	"%main-page": "Aðalsíða",
	"%tphp": "Efst á síðu",
	"%you-are-in": "Þú ert á:",
	"%welcome-to": "Velkomin á:",
	"%load": "hleðsla ...",
	"%process": "vinnslu ...",
	"%srch": "Leita",
	"%srch-terms": "Leita að orðum:",
	"%no-match": "Engin samsvörun fannst",
	"%matches": {
		"mixin": "[MIXIN] niðurstöður fundust"
	},
	"%menu": "Valmynd",
	"%settings": "Stillingar",
	"%langs": "Tungumál",
	"%about": "Um",
	"%curr": "(núverandi)",
	"%hide": "Fela",
	"%err": "Villa",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Byrja",
	"%stop": "Stöðva",
	"%back": "Til baka",
	"%cancel": "Hætta við",
	"%new-win": " (Opnast í nýjum glugga)",
	"%min-ago": "mínútu síðan",
	"%coup-mins": "nokkrar mínútur síðan",
	"%mins-ago": {
		"mixin": "[MIXIN] mínútur síðan"
	},
	"%hour-ago": "klukkutíma síðan",
	"%hours-ago": {
		"mixin": "[MIXIN] klst síðan"
	},
	"%days-ago": {
		"mixin": "[MIXIN] dögum síðan"
	},
	"%yesterday": "í gær",

	"%nxt": "Næsta",
	"%nxt-r": "Næsta (hægri ör lykill)",
	"%prv": "Fyrri",
	"%prv-l": "Fyrri (vinstri ör lykill)",
	"%first": "First",
	"%last": "Síðasta",
	"%close-esc": "Loka (flýja lykill)",
	"%show": "Sýna",

	/* Archived Web page template */
	"%arch-pg": "Þessi vefsíða hefur verið sett í geymslu á vefnum.",
	/* Menu bar */
	"%sm-hlp": "(opna undirvalmynd með enter og loka með flýja lykill)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Stöðva flipann snúningur",
		"on": "Byrja flipann snúningur"
	},
	"%tab-list": "Flipann lista",
	"%tab-pnl-end1": "Lok þessa flipann spjaldið.",
	"%tab-pnl-end2": "Fara aftur á flipann lista",
	"%tab-pnl-end3": "eða halda áfram til the hvíla af síðunni.",
	/* Multimedia player */
	"%play": "Spila",
	"%pause": "Brot",
	"%open": "Opinn",
	"%close": "Loka",
	"%rew": "Baka",
	"%ffwd": "Fljótur áfram",
	"%mute": {
		"on": "Hljóðnemi",
		"off": "Slökkva"
	},
	"%cc": {
		"off": "Fela lokuðum skýringartextum",
		"on": "Sýna lokuðum skýringartextum"
	},
	"%cc-err": "Villa við að hlaða Skjátextar",
	"%adesc": {
		"on": "Virkja hljóð lýsingu",
		"off": "Gera hljóð lýsingu"
	},
	"%prog-bar": "nota vinstri ör og hægri örvatakkana til að fara fram og til baka framfarir fjölmiðla",
	"%no-video": "Vafrinn þinn virðist ekki hafa getu til að spila þetta vídeó skaltu sækja vídeó hér að neðan",
	"%pos": "Núverandi staða:",
	"%perc": "Spilun hlutfall:",
	"%dur": "Samtals tími:",
	"%buff": "Biðminni:",
	/* Share widget */
	"%fav": "Uppáhalds",
	"%email": "Email",
	"%shr-txt": "Deila þessari síðu",
	"%shr-hnt": " með {s} ",
	"%shr-email-sub": "Áhugavert síða",
	"%shr-email-bd": "Ég hélt að þú gætir fundið þessa síðu áhugavert:\n{t} ({u})",
	"%shr-fav-ttl": "(bókamerki þessa síðu)",
	"%shr-man": "Lokaðu þessum glugga og ýta á Ctrl-D til bókamerki þessa síðu.",
	"%shr-all": "Sýna allt ({n})",
	"%shr-all-ttl": "Allar bókamerki staður",
	"%shr-disc": "Engin áritun allar vörur eða þjónustu er gefið eða gefið í skyn.",
	/* Form validation */
	"%frm-nosubmit": "Eyðublaðið var ekki hægt að skila því ",
	"%errs-fnd": " villur fundust.",
	"%err-fnd": " villa fannst.",
	/* Date picker */
	"%date-hide": "Fela dagatal",
	"%date-show": "Veldu dagsetningu af dagatali fyrir akur:",
	"%date-sel": "Valin",
	/* Calendar */
	"%days": ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
	"%mnths": ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
	"%cal": "Dagbók",
	"%currDay": "(Núverandi dag)",
	"%cal-goToLnk": "Fara í<span class=\"wb-inv\"> mánuð á ári</span>",
	"%cal-goToTtl": "Fara í mánuð á ári",
	"%cal-goToMnth": "Mánuður:",
	"%cal-goToYr": "Ár:",
	"%cal-goToBtn": "Farðu",
	"%prvMnth": "Fyrri mánuður: ",
	"%nxtMnth": "Næsti mánuður: ",
	/* Slideout */
	"%show-toc": "Sýna efnisyfirlit",
	"%hide-toc": "Fela efnisyfirlit",
	"%toc": "efnisyfirlit",
	/* Lightbox */
	"%lb-curr": "Item %curr% af %total%",
	"%lb-xhr-err": "Þetta efni tókst að hlaða.",
	"%lb-img-err": "Þessi mynd tókst að hlaða.",
	/* Charts widget */
	"%table-mention": "Tafla",
	"%table-following": "Töfluna. Upplýsingar í eftirfarandi töflu.",
	/* Session timeout */
	"%st-to-msg-bgn": "Fundur mun renna sjálfkrafa í #min# mín #sec# sek.",
	"%st-to-msg-end": "Sækja Veldu \"Áfram fundur\" til að lengja setu.",
	"%st-msgbx-ttl": "Fundur tími viðvörun",
	"%st-alrdy-to-msg": "Því miður fundur hefur þegar útrunninn. Vinsamlegast skráðu þig inn aftur.",
	"%st-btn-cont": "Halda áfram setu",
	"%st-btn-end": "Endir setu nú",
	/* Toggle details */
	"%td-toggle": "Gera alla",
	"%td-open": "Stækka allt",
	"%td-close": "Draga allt",
	"%td-ttl-open": "Stækka alla hluta af efni",
	"%td-ttl-close": "Fella alla hluta af efni",
	/* Table enhancement */
	"%sortAsc": ": virkja til hækkandi raða",
	"%sortDesc": ": virkja til lækkandi konar",
	"%emptyTbl": "Engar upplýsingar liggja á borðinu",
	"%infoEntr": "Sýni _START_ til _END_ af _TOTAL_ færslum",
	"%infoEmpty": "Sýni 0 til 0 af 0 færslum",
	"%infoFilt": "(síað frá _MAX_ öllum færslum)",
	"%info1000": ",",
	"%lenMenu": "Sýna _MENU_ færslur",
	/* Geomap */
	"%geo-mapcontrol": "Kort stjórn",
	"%geo-zoomin": "Auka aðdrátt",
	"%geo-zoomout": "Minnka aðdrátt",
	"%geo-zoomworld": "Aðdráttur til að kortleggja umfang",
	"%geo-zoomfeature": "Aðdráttur á frumefni",
	"%geo-scaleline": "kort mælikvarða",
	"%geo-mouseposition": "Breiddar-og lengdargráðu á mús bendill",
	"%geo-ariamap": "Kort mótmæla. Lýsingum á kort lögun eru í töflunni hér að neðan.",
	"%geo-accessibilize": "<strong>Lyklaborð Notendur:</strong> Þegar kort er í fókus, nota arrow takkana til að færa kortið og plús og mínus takkana til að súmma. Örvatakkana mun ekki hliðra kortinu þegar aðdregna inn á kortið marki.",
	"%geo-accessibilizetitle": "Leiðbeiningar: Kort flakk",
	"%geo-togglelayer": "Víxla birtingu lag",
	"%geo-hiddenlayer": "Þetta lag er nú falin.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Kanada stöð kort (enska eða franska aðeins)",
	"%geo-select": "Veldu",
	"%geo-labelselect": "Athugaðu að velja atriði á kortinu",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Undirstöðu HTML útgáfa",
	"%wb-enable": "Standard útgáfa",
	/* Template */
	"%tmpl-signin": "Skrá inn"
};

window.i18nObj = ind;

})( window );