/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.4-development Build: 2013-08-15 04:38 PM EDT
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.chartsGraph={generate:function(af){var H={},r=b(af),ag=r,o,Y;function d(i){var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32","accent-1":"#8d201c","accent-2":"#EE8310","accent-3":"#2a7da6","accent-4":"#5a306b","accent-5":"#285228","accent-6":"#154055","accent-7":"#555555","accent-8":"#f6d200","accent-9":"#d73d38","accent-10":"#418541","accent-11":"#87aec9","accent-12":"#23447e","accent-13":"#999999"};if(typeof i==="number"){i="accent-"+(i+1)}return(j[i.toLowerCase()]!=="undefined"?j[i.toLowerCase()]:(b.isArray(H.colors)?H.colors[0]:H.colors))}function n(j,an,ai){var am="",al="",aj=false,ak,i;if(typeof j!=="object"){return{}}j=jQuery.extend(true,{},j);if(typeof an!=="string"||an.lenght===0){return j}if(typeof ai!=="string"||ai.lenght===0){if(j["default-namespace"]&&(typeof j["default-namespace"]==="string"||b.isArray(j["default-namespace"]))){ai=j["default-namespace"]}else{return j}}if(j["default-namespace-separator"]&&typeof j["default-namespace-separator"]==="string"){am=j["default-namespace-separator"]}else{am="-"}if(j["default-separator"]&&typeof j["default-separator"]==="string"){al=j["default-separator"]}else{al=" "}if(j["default-autocreate"]){aj=true}i=an.split(al);b.each(i,function(){var aA,au=j,aw,av,aB,at,ax,ap,ao,ar=false,ay=false,az,aq;if(b.isArray(ai)){for(av=0,aB=ai.length;av<aB;av+=1){if(ai[av]===(this.length>ai[av].length+am.length?this.slice(0,ai[av].length):"")){ak=ai[av].split(am);aA=this.split(am).slice(ak.length);break}}}else{if(ai===(this.length>ai.length+am.length?this.slice(0,ai.length):"")){ak=ai.split(am);aA=this.split(am).slice(ak.length)}}if(aA&&ak[ak.length-1]){for(av=0,aB=aA.length;av<aB;av+=1){ax=av+2===aB;ap=av+1===aB;if(ap&&aB){if(j[aA[av]+"-autocreate"]||(j[aA[av]]&&j[aA[av]+"-typeof"]&&j[aA[av]+"-typeof"]==="boolean")){aA.push("true");aw=aA[av];av+=1;aB=aA.length}else{if(au.preset&&au.preset[aA[av]]){au=jQuery.extend(true,au,au.preset[aA[av]]);break}else{if(aB===1){aw=j["default-option"]?j["default-option"]:undefined}else{aw=undefined}}}}else{if(!ap){aw=aA[av]}}if(au[aw+"-typeof"]){ao=[];for(at=(av+1);at<aB;at+=1){ao.push(aA[at])}if(av<aB-1){aA[av]=ao.join(am)}ax=false;ap=true;switch(au[aw+"-typeof"]){case"boolean":if(aA[av]==="true"||aA[av]==="1"||aA[av]==="vrai"||aA[av]==="yes"||aA[av]==="oui"){aA[av]=true}else{if(aA[av]==="false"||aA[av]==="0"||aA[av]==="faux"||aA[av]==="no"||aA[av]==="non"){aA[av]=false}else{aA[av]=undefined}}break;case"number":if(!isNaN(parseInt(aA[av],10))){aA[av]=parseInt(aA[av],10)}else{aA[av]=undefined}break;case"string":break;case"undefined":case"function":case"locked":aA[av]=undefined;break;default:break}}if(au[aw+"-overwrite-array-mode"]){ar=true}if(au[aw+"-autocreate"]){ay=true}if(ax&&aA[av]!==undefined){aw=aA[av]}else{if(ap&&aA[av]!==undefined){if(au[aw]&&ar){if(b.isArray(au[aw])){au[aw].push(aA[av])}else{aq=au[aw];au[aw]=[];au[aw].push(aq);au[aw].push(aA[av])}}else{if(au[aw]||aj||ay||au[aw]===0||au[aw]===false){az="";if(typeof aA[av]==="boolean"||typeof aA[av]==="number"){az='{"'+aw+'": '+aA[av]+"}"}else{az='{"'+aw+'": "'+aA[av]+'"}'}au=jQuery.extend(true,au,jQuery.parseJSON(az))}}av=aB}else{if(aA[av]!==undefined&&au[aA[av]]){au=au[aA[av]];aw=aA[av]}else{if((aj||ay)&&aA[av]!==undefined){az='{"'+aA[av]+'": {}}';au=jQuery.extend(true,au,jQuery.parseJSON(az));au=au[aA[av]]}else{av=aB}}}}}}});return j}if(!a.fn.chartsGraph.O){H={"default-namespace":["wb-charts","wb-chart","wb-graph"],"graphclass-autocreate":true,"graphclass-overwrite-array-mode":true,"graphclass-typeof":"string","noencapsulation-autocreate":true,"noencapsulation-typeof":"boolean",uniformtick:true,"uniformtick-typeof":"boolean","uniformtick-autocreate":true,"labelposition-typeof":"number","labelposition-autocreate":true,"legendinline-typeof":"boolean","legendinline-autocreate":true,"nolegend-typeof":"boolean","nolegend-autocreate":true,"percentlegend-typeof":"boolean","percentlegend-autocreate":true,"topvalue-autocreate":true,"topvalue-typeof":"number","topvaluenegative-autocreate":true,"topvaluenegative-typeof":"boolean","bottomvalue-autocreate":true,"bottomvalue-typeof":"number","bottomvaluenegative-autocreate":true,"bottomvaluenegative-typeof":"boolean","ticks-autocreate":true,"ticks-typeof":"number","decimal-autocreate":true,"decimal-typeof":"number",pieradius:100,"pieradius-typeof":"number",pielblradius:100,"pielblradius-typeof":"number","piethreshold-autocreate":true,"piethreshold-typeof":"number","pietilt-autocreate":true,"pietilt-typeof":"number","pieinnerradius-autocreate":true,"pieinnerradius-typeof":"number","piestartangle-autocreate":true,"piestartangle-typeof":"number","piehighlight-autocreate":true,"piehighlight-typeof":"number","piehoverable-autocreate":true,"piehoverable-typeof":"boolean","default-option":"type",type:"bar","type-autocreate":true,width:b(af).width(),"width-typeof":"number",height:b(af).height(),"height-typeof":"number",parsedirection:"x","parsedirection-typeof":"string","parsedirection-autocreate":true,getcellvalue:function(j){var i=b.trim(b(j).text());i=i.replace(/\s/g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]},preset:{donnut:{type:"pie",height:250,percentlegend:true,pieinnerradius:45,pietilt:50,piehoverable:true,decimal:1,piethreshold:8,legendinline:true,piestartangle:100},usnumber:{getcellvalue:function(j){var i=b.trim(b(j).text()).replace(/,/g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]}},germannumber:{getcellvalue:function(j){var i=b.trim(b(j).text()).replace(/\./g,"");return[parseFloat(i.match(/[\+\-0-9]+[0-9,\. ]*/)),i.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/)]}}}};if(typeof wet_boew_charts!=="undefined"){if(wet_boew_charts.preset){a.fn.chartsGraph.O=jQuery.extend(true,{},wet_boew_charts.preset);delete wet_boew_charts.preset}b.extend(true,H,wet_boew_charts);if(a.fn.chartsGraph.O){b.extend(true,H.preset,a.fn.chartsGraph.O)}}a.fn.chartsGraph.O=H}H=a.fn.chartsGraph.O;H=n(H,(r.attr("class")!==undefined?r.attr("class"):""));b.each(r.data(),function(i,j){if(i.slice(0,8)==="wbcharts"){H[i.slice(8)]=j}});function ad(ao){var ap,an,am,al,ay,ai;for(ap=0;ap<ao.theadRowStack.length;ap+=1){ay=ao.theadRowStack[ap];for(an=0;an<ay.cell.length;an+=1){ai=ay.cell[an];if((ai.type===1||ai.type===7)&&(!(an>0&&ai.uid===ay.cell[an-1].uid)&&!(ap>0&&ai.uid===ao.theadRowStack[ap-1].cell[an].uid))){if(!ai.header){ai.header=[]}if(!ai.headers){ai.headers=[]}if(!ai.child){ai.child=[]}if(!ai.childs){ai.childs=[]}if(ap>0){for(am=0;am<ao.theadRowStack[ap-1].cell[an].header.length;am+=1){ai.headers.push(ao.theadRowStack[ap-1].cell[an].header[am]);ao.theadRowStack[ap-1].cell[an].header[am].childs.push(ai)}ai.headers.push(ao.theadRowStack[ap-1].cell[an]);ai.header.push(ao.theadRowStack[ap-1].cell[an]);ao.theadRowStack[ap-1].cell[an].child.push(ai)}if(ai.descCell){ai.descCell.header=ai;ai.descCell.headers=ai}}}}for(ap=0;ap<ao.row.length;ap+=1){ay=ao.row[ap];var ax=[],av=[],aw=[],at=[],aj=[];if(ay.headerset&&!ay.idsheaderset){for(an=0;an<ay.headerset.length;an+=1){ax=ax.concat(ay.headerset[an])}ay.idsheaderset=ax}if(ay.header){for(an=0;an<ay.header.length;an+=1){av=av.concat(ay.header[an])}}av=ay.idsheaderset.concat(av);for(an=0;an<ay.cell.length;an+=1){if((an===0)||(an>0&&ay.cell[an].uid!==ay.cell[(an-1)].uid)){ai=ay.cell[an];aj=[];if(!ai.header){ai.header=[]}if(!ai.headers){ai.headers=[]}if(ai.col&&!ai.col.dataheader){var ak=ai.col;var ar=[],au=[];if(ak.headerLevel){for(al=0;al<ak.headerLevel.length;al+=1){au=au.concat(ak.headerLevel[al])}}if(ak.header){for(al=0;al<ak.header.length;al+=1){ar=ar.concat(ak.header[al])}}if(!ak.dataheader){ak.dataheader=[]}ak.dataheader=ak.dataheader.concat(au);ak.dataheader=ak.dataheader.concat(ar)}if(ai.col&&ai.col.dataheader){aj=ai.col.dataheader}if(ai.type===1){if(!ai.child){ai.child=[]}if(!ai.childs){ai.childs=[]}for(al=0;al<at.length;al+=1){if(ai.colpos===(at[al].colpos+at[al].width)){var aq=at[al].child.length;if(aq===0||(aq>0&&at[al].child[aq-1].uid!==ai.uid)){at[al].child.push(ai)}}at[al].childs.push(ai)}for(al=0;al<ay.idsheaderset.length;al+=1){if(!ay.idsheaderset[al].childs){ay.idsheaderset[al].childs=[]}ay.idsheaderset[al].childs.push(ai)}ai.header=ai.header.concat(at);ai.headers=ai.headers.concat(aj);ai.headers=ai.headers.concat(ay.idsheaderset);ai.headers=ai.headers.concat(at);at=at.concat(ai)}if(ai.type===2||ai.type===3){aw=av;if(ai.addcolheaders){for(al=0;al<ai.addcolheaders.length;al+=1){aj=aj.concat(ai.addcolheaders[al])}}if(ai.addrowheaders){for(al=0;al<ai.addrowheaders.length;al+=1){aw=aw.concat(ai.addrowheaders[al])}}ai.headers=ai.headers.concat(aj);ai.headers=ai.headers.concat(aw);ai.header=ai.headers}}}}}var E=[],J=[],C,A;function t(j,i){var ai;i+=1;E.push([j.child.length,i]);for(ai=0;ai<j.child.length;ai+=1){if(j.child[ai].child.length>0){i=t(j.child[ai],i)}}i-=1;return i}function D(j,i){var ai;i+=1;var ak=0;ak=j.flotValue-j.flotDelta;var aj=(j.flotDelta/j.child.length);if(!Y||aj<Y){Y=aj}for(ai=0;ai<j.child.length;ai+=1){j.child[ai].flotDelta=aj;ak=ak+aj;j.child[ai].flotValue=ak;if(i===C){J.push([(j.child[ai].flotValue-aj),b(j.child[ai].elem).text()])}if(j.child[ai].child.length>0){D(j.child[ai],i)}}i-=1}function I(an){var aj=0;var ai=0;var j;var ak;E=[];if(!an.colgrouphead){return}for(ak=0;ak<an.colgrouphead.col[0].cell.length;ak+=1){j=an.colgrouphead.col[0].cell[ak];if(ak===0||(ak>0&&an.colgrouphead.col[0].cell[ak-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){aj+=1;if(j.child.length>0){ai=t(j,ai)}}}}E.push([aj,ai]);var am=E[0][0];for(ak=1;ak<E.length;ak+=1){am=am*E[ak][0]}C=an.colgrouphead.col.length-1;J=[];var al=0;ai=0;for(ak=0;ak<an.colgrouphead.col[0].cell.length;ak+=1){j=an.colgrouphead.col[0].cell[ak];if(ak===0||(ak>0&&an.colgrouphead.col[0].cell[ak-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){j.flotDelta=(am/aj);if(!Y||j.flotDelta<Y){Y=j.flotDelta}al+=j.flotDelta;j.flotValue=al;if(ai===C||((j.colpos-1)<C&&C<=((j.colpos-1)+(j.width-1)))){J.push([(j.flotValue-j.flotDelta),b(j.elem).text()])}if(j.child.length>0){D(j,ai)}}}}return J}function f(j,i){var ai;if(j.child.length===0){return}i+=1;E.push([j.child.length,i]);for(ai=0;ai<j.child.length;ai+=1){f(j.child[ai],i)}i-=1}function x(ai,j){var aj,i=ai.groupZero.theadRowStack.length-1;if(ai.child.length===0){return}j+=1;var al=0;al=ai.flotValue;var ak=(!H.uniformtick?(ai.flotDelta/ai.child.length):1);if(!o||ak<o){o=ak}for(aj=0;aj<ai.child.length;aj+=1){ai.child[aj].flotDelta=ak;if(j===C){J.push([(!H.uniformtick?al:A),b(ai.child[aj].elem).text()])}if(j===i||((ai.rowpos-1)<i&&i<=((ai.rowpos-1)+(ai.height-1)))||i===((ai.rowpos-1)+(ai.height-1))){A+=ak}ai.child[aj].flotValue=al;al=al+ak;x(ai.child[aj],j)}j-=1}function g(aq){if(!aq.theadRowStack){return}var ak=-1;var ai=-1;var an;for(an=0;an<aq.colgroup.length;an+=1){if(aq.colgroup[an].type===2){ak=aq.colgroup[an].start;ai=aq.colgroup[an].end;break}}var am=0,j,ap=0,aj=0;E=[];for(an=0;an<aq.theadRowStack[0].elem.cells.length;an+=1){j=b(aq.theadRowStack[0].elem.cells[an]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=ak&&(j.type===1||j.type===7)){am+=1;ap+=j.width;f(j,aj)}}E.push([am,aj]);var al=E[0][0];for(an=1;an<E.length;an+=1){al=al*E[an][0]}C=(!H.labelposition||(H.labelposition&&H.labelposition>aq.theadRowStack.length)?aq.theadRowStack.length:H.labelposition)-1;J=[];var ao=0;A=0;aj=0;for(an=0;an<aq.theadRowStack[0].elem.cells.length;an+=1){j=b(aq.theadRowStack[0].elem.cells[an]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=ak&&(j.type===1||j.type===7)){j.flotDelta=(!H.uniformtick?(al/am):1);if(!o||j.flotDelta<o){o=j.flotDelta}j.flotValue=ao;if(aj===C||((j.rowpos-1)<C&&C<=((j.rowpos-1)+(j.height-1)))){J.push([(!H.uniformtick?ao:A),b(j.elem).text()])}if(aj===(aq.theadRowStack.length-1)||((j.rowpos-1)<(aq.theadRowStack.length-1)&&(aq.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(aq.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){A+=j.flotDelta}ao+=j.flotDelta;x(j,aj)}}return J}function M(){var aj=[],al=0,ar,ak=0,aw="Table caption tag is missing",an=10,av=0,at,au=[],ai,ap,ao,am,aq;aw=b("caption",ag).text();b("tr ",ag).each(function(){an+=1;if(av<1){b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}an+=Number(b(this).attr("colspan"))})}av+=1});for(av=0;av<an;av+=1){au[av]=[];for(at=0;at<an;at+=1){au[av][at]=0}}b("tr ",ag).each(function(){ak=0;var j=1,i=1;b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}if(b(this).attr("rowspan")===undefined){b(this).attr("rowspan",1)}j=Number(b(this).attr("colspan"));i=Number(b(this).attr("rowspan"));while(au[al][ak]===3){ak+=1}var ay=al,aB=al+i-1,aA,ax,az;if(i>1&&j>1){aA=ak;ax=ak+j-1;for(aA=ak;aA<=ax;aA+=1){for(ay=al;ay<=aB;ay+=1){au[ay][aA]=3}}}else{if(i>1){for(ay=al;ay<=aB;ay+=1){au[ay][ak]=3}}}az=b(this).clone();az.attr("colspan",i);az.attr("rowspan",j);(aj[ak]=aj[ak]||[])[al]=az;ak=ak+j});al+=1});ai=b("<table>");b.each(aj,function(j){var i=b("<tr>");ai.append(i);b.each(aj[j],function(ax,ay){i.append(ay)})});ap=ai.html();ao='<table id="swappedGraph"><caption>'+aw+" (Horizontal to Vertical)</caption><thead>";ap=ap.replace(/<tbody>/gi,ao);ap=ap.replace(/<\/tbody>/gi,"</tbody></table>");ap=ap.replace(/\n/g,"");ap=ap.replace(/<tr/gi,"\n<tr");am=ap.split("\n");for(al=0,ar=am.length;al<ar;al+=1){aq=am[al];if(aq.match(/<td/i)!==null){am[al]="</thead><tbody>"+aq;break}}ap=am.join("\n");b(ap).insertAfter(ag).hide();return b(ap)}if(H.parsedirection==="y"){r=M(ag)}if(!b(r).data().tblparser){a.fn.parsertable.parse(b(r))}var N={"default-option":"type","default-namespace":["wb-charts","wb-chart","wb-graph"],"type-autocreate":true,"color-typeof":"string","color-autocreate":true},B=b(r).data().tblparser,W,O;ad(B);W=g(B);O=I(B);J=W;var V=[],p,k=[],F=0,m,s,ae,ac,aa,e,G,u,Z,P;if(H.type==="pie"){var X,S=b("<figure />").insertAfter(ag),c;X=function(j,ai){var i;if(!H.decimal){i=Math.round(ai.percent)}else{i=Math.round(ai.percent*Math.pow(10,H.decimal));i=i/Math.pow(10,H.decimal)}if(H.nolegend){i=j+"<br/>"+i}return i+"%"};S.addClass("wb-charts");if(H.graphclass){if(b.isArray(H.graphclass)){for(ae=0,c=H.graphclass.length;ae<c;ae+=1){S.addClass(H.graphclass[ae])}}else{S.addClass(H.graphclass)}}aa=b("<figcaption />");b(S).append(aa);e=b("caption",ag).html();var L=b("caption",ag).text();b(aa).append(e);var U=(B.colgroup[0].type===1?B.colgroup[1]:B.colgroup[0]);for(s=B.lstrowgroup[0].row.length-1;s>=0;s-=1){for(ae=0;ae<U.col.length;ae+=1){k=[];F=0;for(ac=0;ac<U.col[ae].cell.length;ac+=1){if(U.col[ae].cell[ac].rowgroup.type!==2||(ac>0&&U.col[ae].cell[ac-1].rowgroup.uid!==U.col[ae].cell[ac].rowgroup.uid)){break}m=U.col[ae].cell[ac].row.header;P=H.getcellvalue(U.col[ae].cell[s].elem);k.push([F,typeof P==="object"?P[0]:P]);F+=m[m.length-1].flotDelta}var R=n(N,(b(U.col[ae].cell[s].elem).attr("class")!==undefined?b(U.col[ae].cell[s].elem).attr("class"):""));V.push({data:k,label:b(U.col[ae].dataheader[U.col[ae].dataheader.length-1].elem).text(),color:(!R.color?d(ae):d(R.color))})}G=b("<div />");var h="";if(B.lstrowgroup[0].row.length===1&&(b(B.lstrowgroup[0].row[0].header[0].elem).html()===e||B.lstrowgroup[0].row[0].header.length===0)){h=L;b(S).append(G)}else{var w=b("<figure />").appendTo(S),Q=b("<figcaption />");m=B.lstrowgroup[0].row[s].header;h=b(m[m.length-1].elem).text();w.append(Q);Q.append(b(m[m.length-1].elem).html());w.append(G)}G.css("height",H.height).css("width",H.width);G.attr("role","img");G.attr("aria-label",h+" "+a.dic.get("%table-following"));var y={series:{pie:{show:true}}};if(H.nolegend){y.legend={show:false}}if(H.percentlegend){y.series.pie.radius=H.pieradius/100;y.series.pie.label={show:true,radius:H.pielblradius/100,formatter:X};if(H.piethreshold){y.series.pie.label.threshold=H.piethreshold/100}}if(H.pietilt){y.series.pie.tilt=H.pietilt/100}if(H.pieinnerradius){y.series.pie.innerRadius=H.pieinnerradius/100}if(H.piestartangle){y.series.pie.startAngle=H.piestartangle/100}if(H.piehighlight){y.series.pie.highlight=H.piehighlight/100}if(H.piehoverable){y.grid={hoverable:true}}b.plot(G,V,y);if(!H.legendinline){b(".legend > div",G).remove();b(".legend > table",G).removeAttr("style").addClass("font-small");G.css("height","auto")}b(".pieLabel").removeAttr("id");V=[]}if(!H.noencapsulation){u=b("<details />");Z=b("<summary />");b(u).appendTo(S);b(Z).text(e+" "+a.dic.get("%table-mention")).appendTo(u).after(ag);a.polyfills.enhance("detailssummary",u)}else{b(ag).appendTo(S)}if(H.parsedirection==="y"){b(r).remove()}return}var K=0,v,T;for(ae=0;ae<B.lstrowgroup[0].row.length;ae++){T=n(N,(b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).attr("class")!==undefined?b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).attr("class"):""));if((!T.type&&(H.type==="bar"||H.type==="stacked"))||(T.type&&(T.type==="bar"||T.type==="stacked"))){K+=1;T.chartBarOption=K;if(!v&&((T.type&&T.type==="bar")||(!T.type&&H.type==="bar"))){v=true}}B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].chartOption=T}for(ae=0;ae<B.lstrowgroup[0].row.length;ae++){k=[];var ah=0;F=0;T=B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].chartOption;for(ac=0;ac<B.lstrowgroup[0].row[ae].cell.length;ac++){if(ah>1&&B.lstrowgroup[0].row[ae].cell[ac].col.groupstruct.type!==2){break}if(B.lstrowgroup[0].row[ae].cell[ac].col.groupstruct.type===2){m=B.lstrowgroup[0].row[ae].cell[ac].col.header;var l=F;if(v&&T.chartBarOption){l=F-(o/2)+((o/K)*(T.chartBarOption-1));if(K===1){l=F}}P=H.getcellvalue(B.lstrowgroup[0].row[ae].cell[ac].elem);k.push([l,typeof P==="object"?P[0]:P]);F+=m[m.length-1].flotDelta;ah++}}if(!T.type){T.type=H.type}if(T.type==="line"){V.push({data:k,label:b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).text(),color:(!T.color?d(ae):d(T.color))})}else{if(T.type==="area"){V.push({data:k,label:b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).text(),color:(!T.color?d(ae):d(T.color)),lines:{show:true,fill:true}})}else{if(T.type==="bar"||(v&&T.type==="stacked")){V.push({data:k,label:b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).text(),color:(!T.color?d(ae):d(T.color)),bars:{show:true,barWidth:(1/K*0.9),align:"center"}})}else{if(T.type==="stacked"){V.push({data:k,label:b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).text(),color:(!T.color?d(ae):d(T.color)),bars:{show:true,barWidth:0.9,align:"center"}})}else{if(T.type==="pie"){V.push({data:k,label:b(B.lstrowgroup[0].row[ae].header[B.lstrowgroup[0].row[ae].header.length-1].elem).text(),color:(!T.color?d(ae):d(T.color))});p=true}}}}}}var q=b("<figure />").insertAfter(ag),ab;q.addClass("wb-charts");if(H.graphclass){if(b.isArray(H.graphclass)){for(ae=0,ab=H.graphclass.length;ae<ab;ae+=1){q.addClass(H.graphclass[ae])}}else{q.addClass(H.graphclass)}}aa=b("<figcaption />");b(q).append(aa);e=b("caption",ag).html();b(aa).append(e);G=b("<div />");b(q).append(G);G.css("height",H.height).css("width",H.width);G.attr("role","img");G.attr("aria-label",b("caption",ag).text()+" "+a.dic.get("%table-following"));if(!H.noencapsulation){u=b("<details />");Z=b("<summary />");b(u).appendTo(q);b(Z).text(e+" "+a.dic.get("%table-mention")).appendTo(u).after(ag);a.polyfills.enhance("detailssummary",u)}else{b(ag).appendTo(q)}var z={xaxis:(J.length>0?{ticks:J}:{})};if(H.topvalue){if(!z.yaxis){z.yaxis={}}if(H.topvaluenegative){H.topvalue*=-1}z.yaxis.max=H.topvalue}if(H.bottomvalue){if(!z.yaxis){z.yaxis={}}if(H.bottomvaluenegative){H.bottomvalue*=-1}z.yaxis.min=H.bottomvalue}if(H.steps){if(!z.yaxis){z.yaxis={}}z.yaxis.ticks=H.steps}b.plot(G,V,z);if(!H.legendinline){b(".legend > div",G).remove();b(".legend > table",G).removeAttr("style").addClass("font-small");G.css("height","auto")}if(H.nolegend){b(".legend",G).remove()}if(H.parsedirection==="y"){b(r).remove()}}};window.pe=a;return a}(jQuery));