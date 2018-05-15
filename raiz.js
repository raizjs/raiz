/**
 * Raiz v0.1.1 @ 2018/05/15
 * License: MIT
 * Author: Wallace Rio (http://wallrio.com)
 */

var Raiz=function r(e){this.version="0.1.0",this.config={domain:""},this.loop(),this.attachModule=function(e){var t=new e;r.prototype[t.name]=t},r.prototype.monitorUrl()};Raiz.prototype.monitorUrl=function(e){var t=window.location.href;if(null==Raiz.prototype.monitorUrl.callback&&(Raiz.prototype.monitorUrl.callback=Array()),null!=e){var r=Raiz.prototype.monitorUrl.callback.length;(Raiz.prototype.monitorUrl.callback[r]=e)()}if(void 0===Raiz.prototype.monitorUrl.saved||Raiz.prototype.monitorUrl.saved!=t){Raiz.prototype.monitorUrl.saved=t;for(var n=0;n<Raiz.prototype.monitorUrl.callback.length;n++){(0,Raiz.prototype.monitorUrl.callback[n])()}}return null!=e||(setTimeout(function(){Raiz.prototype.monitorUrl()},200),!1)},Raiz.prototype.loop=function(e,t){if(null==Raiz.prototype.loop.list&&(Raiz.prototype.loop.list=[]),null!=e){var r=Raiz.prototype.loop.list.length;Raiz.prototype.loop.list[r]=e}var n=function(e,t,r,n){if(null===r&&(r=0),void 0===t[r])return n&&n(t),!1;var o=t[r];o&&o(),e(e,t,Number(r)+1,n)};n(n,Raiz.prototype.loop.list,0,function(e){window.requestAnimationFrame(function(){setTimeout(function(){raiz.loop()},0)})})},Raiz.prototype.getClassEvent=function(e){return null!=e&&(null===e.getAttribute("data-raiz-controller")&&null===e.getAttribute("raiz-controller")?"HTML"!=e.tagName&&Raiz.prototype.getClassEvent(e.parentNode):null!==e.getAttribute("data-raiz-controller")?e.getAttribute("data-raiz-controller"):null!==e.getAttribute("raiz-controller")?e.getAttribute("raiz-controller"):void 0)},Raiz.prototype.extend=function(e,t){for(key in null==t.length&&(t=[t]),t)Raiz.prototype.extendEffect(e,t[key])},Raiz.prototype.extendEffect=function(e,t){for(var r in t)t.hasOwnProperty(r)&&("object"==typeof e[r]&&e.hasOwnProperty(r)&&null!=e[r]?Raiz.prototype.extend(t[r]):e[r]=t[r]);return e};var raiz=new Raiz,RaizEssentials=function(){function RaizEssentials(){this.name="essentials"}return RaizEssentials.prototype.time=function(e){window.requestAnimationFrame(function(){e&&e(),RaizEssentials.prototype.time(e)})},RaizEssentials.prototype.stringToObject=function(sJson){return null==sJson&&(sJson=""),eval("var obj={"+sJson+"}"),obj},RaizEssentials.prototype.ajax=function(e){var t=e.url||null,r=e.success||null,n=e.error||null,o=e.progress||null,a=e.data||null,i=e.method||"get";if(!1===e.async)var l=!1;else l=!0;var c,s=function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}();"get"==i.toLowerCase()&&null!=a&&(t=t+"?"+(c=a,""+Object.keys(c).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(c[e])}).join("&"))),s.open(i,t,l),s.upload&&(s.upload.onprogress=function(e){e.lengthComputable&&o&&o(e.loaded,e.total)},s.upload.onloadstart=function(e){o&&o(0,e.total)},s.upload.onloadend=function(e){o&&o(e.loaded,e.total)},s.upload.onprogress=function(e){if(e.lengthComputable)Math.floor(e.loaded/e.total*100)}),s.onreadystatechange=function(){if(3<s.readyState){if(404===s.status)return n&&n(s.responseText),!1;r&&r(s.responseText)}};var u=new FormData;for(var p in a)a.hasOwnProperty(p)&&u.append(p,a[p]);"get"==i.toLowerCase()?s.send():s.send(u)},RaizEssentials.prototype.addEvent=function(e,t,i,r,n,o,a){var l=t.split(" "),c=arguments,s=function(e,t,r){null==t&&(t=!0);var n=e;null==n&&(n=window),nArgs_reindex=[];nArgs_reindex[0]=!1;for(var o=0;o<r.length;o++)3<o&&(nArgs_reindex[nArgs_reindex.length]=r[o]);if(n.addEventListener)for(o=0;o<l.length;o++){var a=l[o];!function(t,r,n,e,o){r.addEventListener(o,function(e){if(t[0]=e,n)return n.apply(r,t)},e)}(nArgs_reindex,n,i,t,a)}else if(n.attachEvent)for(o=0;o<l.length;o++){a=l[o];n.attachEvent("on"+a,function(e){if(nArgs_reindex[0]=e,i)return i.call(n,nArgs_reindex)})}};if("string"!=typeof e)s(e,r,c);else for(var u=document.querySelectorAll(e),p=0;p<u.length;p++){var d=u[p];s(d,r,c)}},RaizEssentials}();raiz.attachModule(RaizEssentials);var RaizInterpolation=function e(){this.name="interpolation",this.interpolationRegex=/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim,this.signalConvertInterpolation=">>>",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.prepareVirtualContent()})})};RaizInterpolation.prototype.goDom=function(e,t,r,n){void 0===e&&(e=document.querySelector("html")),"string"==typeof e&&(e=document.querySelector(e)),void 0===n&&(n=0);var o=e.childNodes;for(var a in o)void 0!==o[a].nodeName&&(0<o[a].childNodes.length?(t&&t(o[a]),RaizInterpolation.prototype.goDom(o[a],t,r,n+1)):r&&r(o[a]))},RaizInterpolation.prototype.prepareVirtualContent=function(){var o=function(e){var t=!1;for(var r in e.attributes){var n=e.attributes[r];"object"==typeof n&&/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(n.nodeValue)&&(null==e.raiz&&(e.raiz={}),null==e.raiz.attr&&(e.raiz.attr={}),t=!0,e.raiz.attr[n.nodeName]=n.nodeValue)}if(1==t&&(null===e.raiz&&(e.raiz={}),null!=e.raiz&&1!=e.raiz.attrinit)){e.raiz.attrinit=!0;var o=function(e,t){if(Object.keys(t.raiz.attr).length<1)return setTimeout(function(){e(e,t)},400,e,t),!1;for(var r in t.raiz.attr){var n=r,o=t.raiz.attr[r];if(1!=t.raiz.attrInit2){t.raiz.attrInit2=!0;var a=function(e,t,r,n){setTimeout(function(n,o,a,e){RaizInterpolation.prototype.getInterpolation(a,e,function(e,t,r){"href"==o?t[o+"_fix"]!=e&&(t[o+"_fix"]=e,t[o]=e):(t[o]!=e&&(t[o]=e),t.getAttribute(o)!=e&&t.setAttribute(o,e)),null!==t.parentNode&&!1!==r.loop&&setTimeout(function(e,t,r,n){e(e,t,r,n)},r.t,n,o,a,t)})},0,e,t,r,n)};a(a,n,o,t)}}};o(o,e)}},e=document.querySelectorAll("[data-raiz-controller],[raiz-controller]");if(0<e.length)for(var t=0;t<e.length;t++){var r=e[t];RaizInterpolation.prototype.goDom(r,function(e){if(null!=e.raiz&&1!=e.raiz.init){e.raiz.init=!0;var t=e.raiz.innerHTML,r=function(r,e){RaizInterpolation.prototype.miningVirtualContent(e,function(e,t){null!==e.parentNode&&!1!==t.loop&&setTimeout(function(){r(r,e)},t.t,r,e)})};return r(r,e),!0}if(o(e),t=(t=(t=e.innerHTML).replace(/&lt;/gi,"<")).replace(/&gt;/gi,">"),/(<!--{{[\s\S]*?}}-->)/i.test(t))return!1},function(e){var t="";if("#comment"===e.nodeName){"object"==typeof e&&"#comment"==e.nodeName&&(t=e.nodeValue),t=(t=t.replace(/&lt;/gi,"<")).replace(/&gt;/gi,">");var r=e;/(<!--{{[\s\S]*?}}-->)/i.test(t)}else{t=r=e.textContent}if(o(e),/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(t)&&1!=e.raiz){e.raiz={},e.raiz.innerHTML=r;var n=function(r,e){RaizInterpolation.prototype.miningVirtualContent(e,function(e,t){null!==e.parentNode&&!1!==t.loop&&setTimeout(function(){r(r,e)},t.t,r,e)})};n(n,e)}})}},RaizInterpolation.prototype.miningVirtualContent=function(e,u){var p=e.raiz.innerHTML;if("function"==e.vDomContentType)return!0;RaizInterpolation.prototype.getInterpolation(p,e,function(e,t,r){if(!1!==e)if("#comment"==t.nodeName){var n=t.nodeValue;if(void 0!==o&&n!=o.textContent&&/{{[\s\S]*?}}/i.test(n)){var o=document.createTextNode("");o.textContent=n,setTimeout(function(e,t){e.parentNode.innerHTML=t.innerHTML},0,t,o)}}else if(null==t.innerHTML){if(t.textContent!=e){var a=t.raiz.innerHTML,i=document.createElement("span");i.setAttribute("raiz-node","element"),i.innerHTML=e,i.raiz={},i.raiz.innerHTML=a;for(var l=!1,c=i.childNodes,s=0;s<c.length;s++)"#text"!=c[s].nodeName&&(l=!0);1==l?t.parentNode.innerHTML=i.innerHTML:t.textContent=e}}else if(t.innerHTML!=e){a=t.raiz.innerHTML;t.innerHTML=e,t.raiz.innerHTML=p}u&&u(t,r)})},RaizInterpolation.prototype.getInterpolation=function(string,el,callback){var data,config={t:5},stringTest=string;if("object"==typeof string&&"#comment"==string.nodeName&&(stringTest=string.nodeValue),/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(stringTest)){var data2="";return data=stringTest.replace(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim,function(m){var mOriginal=m;m=m.replace(/\<\!\-\-\{\{/gi,""),m=m.replace(/\}\}\-\-\>/gi,""),m=m.replace(/\{\{/gi,""),m=m.replace(/\}\}/gi,"");var classEvent=raiz.getClassEvent(el.parentNode);!1!==classEvent&&(m=m.replace(/this\./gi,classEvent+"."));var setupCheck=/.*?@@@.*?/gi.test(m);if(1==setupCheck){var setupObj=RaizInterpolation.prototype.setupInterpolation(m);m=setupObj.content}var igualCheck=/.*?=.*?/gi.test(m),reservedFunctionCheck=/__.*?__/gi.test(m),regexConvertSignal=new RegExp(".*?"+raiz.interpolation.signalConvertInterpolation+".*?","ig"),snippetCheck=regexConvertSignal.test(m),result=null,isFunction=!1;1==reservedFunctionCheck&&(result=RaizInterpolation.prototype.reservedMethod(m),m=result);try{var result=eval(m);isFunction=!1}catch(e){try{isFunction=!0;var nFunc=new Function(m);result=nFunc()}catch(e){isFunction=!1,el.vDomContentType=""}}return 1==snippetCheck&&(result=RaizInterpolation.prototype.snippetMethod(el,m)),"object"==typeof result&&(result=JSON.stringify(result)),1==setupCheck&&(config=setupObj.config),null==result&&(result=""),result}),"null"==data&&(data=stringTest),callback&&callback(data,el,config),data}return!1},RaizInterpolation.prototype.setupInterpolation=function(e,t){var r=e.split("@@@"),n=r[0],o=r[1];return o=o.trim(),{content:n,config:raiz.essentials.stringToObject(o)}},RaizInterpolation.prototype.reservedMethod=function(e,t){if(-1!=e.indexOf("__TIME__")){var r=new Date,n=r.getTime(),o=(r.getDate(),r.getMonth(),r.getFullYear(),r.getHours(),r.getMinutes(),r.getSeconds(),n);return e=e.replace("__TIME__",o)}if(-1!=e.indexOf("__helloword__"))return"Congratulations, <strong>Raiz v"+raiz.version+"</strong> was successfully uploaded"},RaizInterpolation.prototype.snippetMethod=function(el,string,callback){var stringArray=string.split(raiz.interpolation.signalConvertInterpolation),content=stringArray[0],snippet=stringArray[1];if(snippet=snippet.replace(/[ |\n|\s]/gim,""),content=content.trim(),"uppercase"==snippet){try{eval(" content = String("+content+").toUpperCase(); ")}catch(e){}callback&&callback(content)}else if("autosequence"==snippet){var array=eval(content);void 0===el.raiz.marqueeIndex&&(el.raiz.marqueeIndex=0),void 0===array[el.raiz.marqueeIndex]&&(el.raiz.marqueeIndex=0),content=array[el.raiz.marqueeIndex],callback&&callback(content),el.raiz.marqueeIndex++}else if("totime"==snippet){eval("var currentdate = new Date(Number("+content+"));");var datetime=currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()+" "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();content=datetime,callback&&callback(content)}else if("remote"==snippet)try{eval(" content = ("+content+"); ")}catch(e){}return content},raiz.attachModule(RaizInterpolation);var RaizIf=function e(){this.name="if",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizIf),RaizIf.prototype.init=function(){for(var raizIfrAll=document.querySelectorAll("[raiz-if],[data-raiz-if]"),i=0;i<raizIfrAll.length;i++){var el=raizIfrAll[i];null==el.raiz&&(el.raiz={}),null==el.raiz.if&&(el.raiz.if={},el.raiz.if.current=null,el.raiz.if.display=el.style.display);var condition=el.getAttribute("raiz-if"),classEvent=raiz.getClassEvent(el);condition=condition.replace("this.",classEvent+".");try{var cond=eval(condition)}catch(e){var cond=!1}if(cond){if(1!=el.raiz.if.current){el.raiz.if.current=!0,el.style.display=el.raiz.if.display;var ifTrue=el.getAttribute("raiz-if-true");eval(ifTrue)}}else if(0!=el.raiz.if.current){el.raiz.if.current=!1,el.style.display="none";var ifFalse=el.getAttribute("raiz-if-false");eval(ifFalse)}}};var RaizFor=function e(){this.name="for",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.for()})})};raiz.attachModule(RaizFor),RaizFor.prototype.for=function(){var forFunc=function(gost){var element=gost.clone,dataFor=element.getAttribute("raiz-for"),dataForArray=dataFor.split(" in "),preKey=dataForArray[0],preValue=dataForArray[1];preKey=preKey.trim();var classEvent=raiz.getClassEvent(gost.parentNode);preValue=preValue.replace("this.",classEvent+"."),eval("try{var value = "+preValue+";}catch(e){var value = false;}");var childRem=function(e,t){for(key in t);},forList=document.querySelectorAll('[raiz-for-key="'+preKey+'"]');if(0<forList.length)for(var i=0;i<forList.length;i++){var el=forList[i],index=el.getAttribute("raiz-for-index"),forValue=el._raizForRef;if(null!=forValue)try{var val=eval("value"+forValue);null==val&&el.parentNode.removeChild(el)}catch(e){el.parentNode.removeChild(el)}}for(var keyPreFor in value){var el=document.querySelector('[raiz-for-key="'+preKey+'"][raiz-for-index="'+keyPreFor+'"]');if(null==el){var cln=element.cloneNode(!0);if(null==element.firstChild&&(element.innerHTML=" "),null!=element.firstChild.raiz)var preContent=element.firstChild.raiz.innerHTML||element.innerHTML;else var preContent=element.innerHTML;var checkNumberTest=Number(keyPreFor);if(isNaN(checkNumberTest))var typeKey="string";else var typeKey="number";var preContentSave=preContent;if(preContent="number"==typeKey?String(preContent).replace(new RegExp(preKey,"gm"),preValue+"["+keyPreFor+"]"):String(preContent).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']"),null!=element.raiz&&null!=element.raiz.attr)for(keyAttr in element.raiz.attr){var attrValue=element.raiz.attr[keyAttr];attrValue=String(attrValue).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']"),cln[keyAttr]=attrValue}if(preContent=preContent.replace(/raiz-for=.*" /gim,""),null!=value[keyPreFor]._child){var childFunc=function(e,t,r,n,o,a,i,l,c,s,u){var p=r;for(keyChild in p+="<ul>",l){var d=n,m=c+"._child["+keyChild+"]",f=s+"._child["+keyChild+"]";d="number"==typeKey?String(d).replace(new RegExp(o,"gm"),a+"["+i+"]"+m):String(d).replace(new RegExp(o,"gm"),"("+a+")['"+i+"']"+m),null!=l[keyChild]._child&&(d+=e(e,t,"",n,o,a,i,l[keyChild]._child,m,f,u));value[keyPreFor]._child[keyChild];var v="";for(keyAttr in t.attributes)if("raiz-for"!=t.attributes[keyAttr].name&&null!=t.attributes[keyAttr].name&&null!=t.attributes[keyAttr].value){var z=t.attributes[keyAttr].value;if(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(z))var y=String(z).replace(new RegExp(o,"gm"),a+"["+i+"]"+m);else y=t.attributes[keyAttr].value;v+=t.attributes[keyAttr].name+'="'+y+'" '}p+='<li raiz-for-key="'+o+'" raiz-for-value="'+f+'" '+v+" >"+d+"</li>"}return p+="</ul>"},html=childFunc(childFunc,cln,preContent,preContentSave,preKey,preValue,keyPreFor,value[keyPreFor]._child,"","["+keyPreFor+"]",0);cln.innerHTML=html}else cln.innerHTML=preContent;for(var key in setTimeout(function(e){var t=document.querySelectorAll('[raiz-for-key="'+e+'"][raiz-for-value]');if(0<t.length)for(var r=0;r<t.length;r++){var n=t[r],o=n.getAttribute("raiz-for-value");n._raizForRef=o,setTimeout(function(e){e.removeAttribute("raiz-for-value")},100,n)}},100,preKey),cln.setAttribute("raiz-for-key",preKey),cln.setAttribute("raiz-for-index",keyPreFor),cln._raizForRef="["+keyPreFor+"]",cln.attributes){var attrValue=cln.attributes[key].value;if(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(attrValue))var attrValueSet=String(attrValue).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']");else var attrValueSet=cln.attributes[key].value;cln.attributes[key].value=attrValueSet}cln.removeAttribute("raiz-for"),gost.parentNode.insertBefore(cln,gost)}}},raizForAll=document.querySelectorAll("[raiz-for],[data-raiz-for]");null==RaizFor.prototype.for.listFor&&(RaizFor.prototype.for.listFor={});for(var i=0;i<raizForAll.length;i++){var element=raizForAll[i],dataFor=element.getAttribute("raiz-for"),dataForArray=dataFor.split(" in "),preKey=dataForArray[0],preValue=dataForArray[1];preKey=preKey.trim();var classEvent=raiz.getClassEvent(element.parentNode);if(preValue=preValue.replace("this.",classEvent+"."),eval("try{var value = "+preValue+";}catch(e){var value = false;}"),void 0===RaizFor.prototype.for.listFor[preKey]){var gost=document.createTextNode("");gost.clone=element,RaizFor.prototype.for.listFor[preKey]=gost,element.parentNode.insertBefore(gost,element.nextSibling)}element.parentNode.removeChild(element)}for(var keyPreFor in RaizFor.prototype.for.listFor)forFunc(RaizFor.prototype.for.listFor[keyPreFor])};var RaizInner=function e(){this.name="attr",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.attr()})})};raiz.attachModule(RaizInner),RaizInner.prototype.attr=function(){for(var RaizInnerAll=document.querySelectorAll("[raiz-inner],[data-raiz-inner]"),i=0;i<RaizInnerAll.length;i++){var element=RaizInnerAll[i];if(1!=element.raizInnerInit){element.raizInnerInit=!0;var dataFor=element.getAttribute("raiz-inner");if(void 0===element.raiz&&(element.raiz={}),element.raiz.innerHTML=dataFor,-1!=dataFor.indexOf("this.")){var classEvent=raiz.getClassEvent(element.parentNode);dataFor=dataFor.replace("this.",classEvent+".")}dataFor=dataFor.replace("{{",""),dataFor=dataFor.replace("}}",""),eval("var content = "+dataFor+";"),element.removeAttribute("raiz-inner"),element.innerHTML=content}}};var RaizEvents=function e(){this.name="events",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.events()})})};RaizEvents.prototype.eventsAttach=function(u,e,p){var t=function(s,e,t){!function(e,t){var r=e,n=t;if("_"==n.substr(0,1)&&(n=n.substr(1)),"attribute"==s)var o=u.querySelectorAll("["+n+"]");else o="type"==s?u.querySelectorAll(""+n):"class"==s?u.querySelectorAll("."+n):u.querySelectorAll("["+s+'="'+n+'"]');if(0<o.length)for(var a=0;a<o.length;a++){var i=o[a];if(1!=i.eventInit){if(i.eventInit=!0,null==r.dom&&(r.dom=[]),r.dom[a]=i,null==r.first&&(r.first=i),r.last=i,"name"!=s||p["_"+n]||(p["_"+n]=r),"object"==typeof r)for(var l in r)i[l]=r[l];if("function"==typeof r)for(var c in r(i))if("attr"==c)for(var l in r(i)[c])i[l]=r(i)[c][l];else raiz.essentials.addEvent(i,c,function(e,t,r){if(!1===t(this,t.dom)[r](e))return e.preventDefault(),!1},null,r,c)}}}(e,t)},r=p[e];if("__construct"==e)return!1;if("__name"==e){if(0<Object.keys(r).length)for(var n in r)t("name",r[n],n);return!1}if("__id"==e){if(0<Object.keys(r).length)for(var n in r)t("id",r[n],n);return!1}if("__class"==e){if(0<Object.keys(r).length)for(var n in r)t("class",r[n],n);return!1}if("__attribute"==e){if(0<Object.keys(r).length)for(var n in r)t("attribute",r[n],n);return!1}if("__type"==e){if(0<Object.keys(r).length)for(var n in r)t("type",r[n],n);return!1}if("_"!=e.substr(0,1))return!1;t("name",r,e=e.substr(1))},RaizEvents.prototype.events=function(){var vdomIdAll=document.querySelectorAll("[data-raiz-controller],[raiz-controller]");if(0<vdomIdAll.length)for(var i=0;i<vdomIdAll.length;i++){var element=vdomIdAll[i],classEvent=element.getAttribute("data-raiz-controller")||element.getAttribute("raiz-controller"),classEventArray=classEvent.split(",");if(0<classEventArray.length)for(var key in classEventArray){var objNew=classEventArray[key];if(""!=objNew.replace(/ /gi,"")&&(eval("try{var ev =  "+objNew+";}catch(e){}"),void 0!==ev))for(var keyEv in ev)ev.html=function(e){element.innerHTML=e},ev.__construct&&null==ev.__construct.init&&(ev.__construct.init=!0,ev.__construct(element)),RaizEvents.prototype.eventsAttach(element,keyEv,ev)}}},raiz.attachModule(RaizEvents);var RaizHmvc=function n(){this.name="hmvc",this.config={dir:null},this.container=null,raiz.essentials.addEvent(window,"load",function(){var e=function(e){var t=document.querySelectorAll("[raiz-hmvc],[data-raiz-hmvc]");if(t.length<1)return setTimeout(function(e){e(e)},100,e),!1;for(var r=0;r<t.length;r++)element=t[r],null==element.raiz&&(element.raiz={}),null==element.raiz.hmvc&&(element.raiz.hmvc={}),!0!==element.raiz.hmvc.Init&&(element.raiz.hmvc.Init=!0,Raiz.prototype.monitorUrl(function(){for(var e=document.querySelectorAll("[raiz-hmvc],[data-raiz-hmvc]"),t=0;t<e.length;t++)element=e[t],n.prototype.init(element)}));setTimeout(function(e){e(e)},100,e)};e(e)})};raiz.attachModule(RaizHmvc),RaizHmvc.prototype.OverwriteLinks=function(){var e=document.querySelectorAll("a");if(0<e.length)for(key in e){var t=e[key];1!=t.hmvcinit&&(t.hmvcinit=!0,raiz.essentials.addEvent(t,"click",function(e){document.querySelector(raiz.hmvc.config.container),(window.location.origin+window.location.pathname).replace(raiz.config.domain,"");var t=this.href.replace(raiz.config.domain,""),r=(raiz.config.domain,raiz.config.domain+t);return window.history.pushState(null,null,r),RaizHmvc.prototype.init(),e.preventDefault(),!1}))}},RaizHmvc.prototype.init=function(e,t){null==t&&(t=(t=window.location.hash).replace("#",""));var r=t,n=r;this.location=r,this.router=n||"home",e.setAttribute("data-route",this.router),document.querySelector("html").setAttribute("raiz-hmvc-route",this.router),RaizHmvc.prototype.loadController(e),RaizHmvc.prototype.loadView(e)},RaizHmvc.prototype.loadController=function(o){var e=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+o.getAttribute("raiz-hmvc")+"/"+this.router+"/Controller.js",t=document.createElement("script");t.src=e,o.appendChild(t);t.onload=function(){try{if(null==Controller)return!1;hmvccontroller=Controller;o.setAttribute("raiz-controller","hmvccontroller");if(null==document.querySelector('head > meta[name="description"]')&&void 0!==hmvccontroller.meta.title){var e=document.createElement("title");document.querySelector("head").appendChild(e)}if(null==document.querySelector('head > meta[name="description"]')&&void 0!==hmvccontroller.meta.description){var t=document.createElement("meta");t.setAttribute("name","description"),document.querySelector("head").appendChild(t)}if(null==document.querySelector('head > meta[name="keywords"]')&&void 0!==hmvccontroller.meta.keywords){var r=document.createElement("meta");r.setAttribute("name","keywords"),document.querySelector("head").appendChild(r)}if(null==document.querySelector('head > meta[name="robots"]')&&void 0!==hmvccontroller.meta.robots){var n=document.createElement("meta");n.setAttribute("name","robots"),document.querySelector("head").appendChild(n)}void 0!==hmvccontroller.meta.title&&(document.querySelector("head > title").innerHTML=hmvccontroller.meta.title),void 0!==hmvccontroller.meta.description&&document.querySelector('head > meta[name="description"]').setAttribute("content",hmvccontroller.meta.description),void 0!==hmvccontroller.meta.keywords&&document.querySelector('head > meta[name="keywords"]').setAttribute("content",hmvccontroller.meta.keywords),void 0!==hmvccontroller.meta.robots&&document.querySelector('head > meta[name="robots"]').setAttribute("content",hmvccontroller.meta.robots)}catch(e){}}},RaizHmvc.prototype.loadAssets=function(e){var t=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+e.getAttribute("raiz-hmvc")+"/"+this.router+"/style.css",r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.type="text/css",r.href=t,e.appendChild(r);r.onload=function(){}},RaizHmvc.prototype.loadView=function(r){var e=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+""+r.getAttribute("raiz-hmvc")+"/"+this.router+"/view.html",n=function(e,t){if("BODY"==t.tagName)return!(t.scrollY="0px");t.scrollTop=0,setTimeout(function(){e(e,t.parentNode)})};raiz.essentials.ajax({url:e,method:"get",success:function(e){if(r.innerHTML=e,null!=document.querySelector("[raiz-core-attr]")){var t=document.querySelector("[raiz-core-attr]").getAttribute("raiz-core-attr");t=raiz.essentials.stringToObject(t)}else t={loadcss:!0};0!=t.loadcss&&RaizHmvc.prototype.loadAssets(r),n(n,r)},error:function(e){r.innerHTML=""}})};var RaizComponents=function e(){this.name="components",this.config={dir:""},this.container=null,raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizComponents),RaizComponents.prototype.init=function(){for(var e=document.querySelectorAll("[raiz-component],[data-raiz-component]"),t=0;t<e.length;t++){var r=e[t];1!=r.raizComponentsInit&&(r.raizComponentsInit=!0,RaizComponents.prototype.loadComponent(r))}},RaizComponents.prototype.loadComponent=function(r){var e=r.getAttribute("raiz-component")||r.getAttribute("data-raiz-component");if(null==e)return!1;if(-1!=(e=e.replace(/\/\//g,"/")).indexOf(":"))var t=e.split(":");else t=["app/components",e];var n=t[0];e=t[1]||null;var o=(window.location.origin+window.location.pathname).replace(raiz.config.domain,""),a=n+"/"+e+"/view.html";a=a.replace("//","/"),a=""!=raiz.config.domain||null!=raiz.config.domain?o+a:raiz.config.domain+a;var i=n+"/"+e+"/style.css";i=i.replace("//","/"),i=""!=raiz.config.domain||null!=raiz.config.domain?o+i:raiz.config.domain+i;var l=n+"/"+e+"/Controller.js";l=l.replace("//","/"),l=""!=raiz.config.domain||null!=raiz.config.domain?o+l:raiz.config.domain+l;var c=e;c=(c=c.replace(/\/\//g,"/")).replace(/\//g,"-");var s=function(){raiz.essentials.ajax({url:a,method:"get",success:function(e){if(r.classList.add("component-"+c),r.innerHTML=e,null!=document.querySelector("[raiz-core-attr]")){var t=document.querySelector("[raiz-core-attr]").getAttribute("raiz-core-attr");t=raiz.essentials.stringToObject(t)}else t={loadcss:!0};0!=t.loadcss&&RaizComponents.prototype.loadCss(i,r)}})};RaizComponents.prototype.loadController(l,r,e,function(){s()},function(){s()})},RaizComponents.prototype.loadCss=function(e,t){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.type="text/css",r.href=e,t.appendChild(r);r.onload=function(){}},RaizComponents.prototype.loadController=function(url,element,componentName,callback){var componentNameClass=componentName;componentNameClass=componentNameClass.replace("-","_"),componentNameClass=componentNameClass.replace("/","_");var script=document.createElement("script");script.src=url,element.appendChild(script);var self=this;script.onload=function(){var timestamp=(new Date).getUTCMilliseconds();try{if(null!=Controller){var raizControllerDefault=element.getAttribute("raiz-controller");if(null!=raizControllerDefault)eval(raizControllerDefault+" =  Controller;");else{eval("component_"+componentNameClass+"_"+timestamp+" =  Controller;");var raizController=element.setAttribute("raiz-controller","component_"+componentNameClass+"_"+timestamp)}}}catch(e){}callback(),Controller=void 0},script.onerror=function(){callback()}};var RaizBind=function e(){this.name="bind",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizBind),RaizBind.prototype.init=function(){for(var raizIfrAll=document.querySelectorAll("[raiz-bind]"),i=0;i<raizIfrAll.length;i++){var el=raizIfrAll[i],attrValue=el.getAttribute("raiz-bind"),classEvent=raiz.getClassEvent(el.parentNode);!1!==classEvent&&(attrValue=attrValue.replace(/this\./gi,classEvent+".")),raiz.essentials.addEvent(el,"keyup change",function(obj,attrValue){var isFocused=document.activeElement===this;if(isFocused){var text=this.value;text=text.replace(/\"/gi,'\\"'),eval(attrValue+'="'+text+'";')}},null,attrValue);var isFocused=document.activeElement===el;if(!isFocused){var val=eval(attrValue);el.value!==val&&(el.value=val)}}};