/**
 * Raiz v0.1.2 @ 2018/05/20
 * License: MIT
 * Author: Wallace Rio (http://wallrio.com)
 */

var Raiz=function r(e){this.version="0.1.2",this.config={domain:""},this.loop(),this.attachModule=function(e){var t=new e;r.prototype[t.name]=t},r.prototype.monitorUrl()};Raiz.prototype.monitorUrl=function(e){var t=window.location.href;if(null==Raiz.prototype.monitorUrl.callback&&(Raiz.prototype.monitorUrl.callback=Array()),null!=e){var r=Raiz.prototype.monitorUrl.callback.length;(Raiz.prototype.monitorUrl.callback[r]=e)()}if(void 0===Raiz.prototype.monitorUrl.saved||Raiz.prototype.monitorUrl.saved!=t){Raiz.prototype.monitorUrl.saved=t;for(var n=0;n<Raiz.prototype.monitorUrl.callback.length;n++){(0,Raiz.prototype.monitorUrl.callback[n])()}}return null!=e||(setTimeout(function(){Raiz.prototype.monitorUrl()},200),!1)},Raiz.prototype.loop=function(e,t){if(null==Raiz.prototype.loop.list&&(Raiz.prototype.loop.list=[]),null!=e){var r=Raiz.prototype.loop.list.length;Raiz.prototype.loop.list[r]=e}var n=function(e,t,r,n){if(null===r&&(r=0),void 0===t[r])return n&&n(t),!1;var a=t[r];a&&a(),e(e,t,Number(r)+1,n)};n(n,Raiz.prototype.loop.list,0,function(e){window.requestAnimationFrame(function(){setTimeout(function(){raiz.loop()})})})},Raiz.prototype.getClassEvent=function(e){return null!=e&&(null===e.getAttribute("data-raiz-controller")&&null===e.getAttribute("raiz-controller")?"HTML"!=e.tagName&&Raiz.prototype.getClassEvent(e.parentNode):null!==e.getAttribute("data-raiz-controller")?e.getAttribute("data-raiz-controller"):null!==e.getAttribute("raiz-controller")?e.getAttribute("raiz-controller"):void 0)},Raiz.prototype.extend=function(e,t){null==t.length&&(t=[t]);var r=function(e,t,r,n){if(null==r[n])return!1;if("function"==typeof r[n])t=Raiz.prototype.extendEffect(t,r[n]());else t=Raiz.prototype.extendEffect(t,r[n]);e(e,t,r,n+1)};r(r,e,t,0)},Raiz.prototype.extendEffect=function(objectMain,listObjects){var typeMain=null;for(var i in"function"==typeof objectMain&&(eval(objectMain.name+" = "+objectMain.name+"();"),typeMain="function"),listObjects)listObjects.hasOwnProperty(i)&&("object"==typeof objectMain[i]&&objectMain.hasOwnProperty(i)&&null!=objectMain[i]?Raiz.prototype.extend(listObjects[i]):"function"==typeMain?eval(objectMain.name+'["'+i+'"] = listObjects["'+i+'"]'):objectMain[i]=listObjects[i]);return eval("objectMain = "+objectMain.name),objectMain},Raiz.prototype.require=function(o,e){var t=function(e,t,r,n){if(null==t[r])return n&&n(),!1;var a=t[r],i=document.createElement("script");i.src=a,i.onload=function(){e(e,o,r+1,n)},i.onerror=function(){e(e,o,r+1,n)},document.querySelector("head").appendChild(i)};t(t,o,0,e)},Raiz.prototype.ifExist=function(variable,callback){var variableNew=eval(variable);if(null!=variableNew){var newArg=[],index=0;for(key in arguments)1<key&&(newArg[index]=arguments[key],index++);return callback&&callback.apply(variableNew,newArg),!1}setTimeout(function(e,t){Raiz.prototype.ifExist(e,t)},1e3,variable,callback)};var raiz=new Raiz,RaizEssentials=function(){function RaizEssentials(){this.name="essentials"}return RaizEssentials.prototype.time=function(e){window.requestAnimationFrame(function(){e&&e(),RaizEssentials.prototype.time(e)})},RaizEssentials.prototype.stringToObject=function(sJson){return null==sJson&&(sJson=""),eval("var obj={"+sJson+"}"),obj},RaizEssentials.prototype.ajax=function(e){var t=e.url||null,r=e.success||null,n=e.error||null,a=e.progress||null,i=e.data||null,o=e.method||"get";if(!1===e.async)var l=!1;else l=!0;var c,s=function(){try{return new XMLHttpRequest}catch(e){}try{return new ActiveXObject("Msxml3.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}return null}();"get"==o.toLowerCase()&&null!=i&&(t=t+"?"+(c=i,""+Object.keys(c).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(c[e])}).join("&"))),s.open(o,t,l),s.upload&&(s.upload.onprogress=function(e){e.lengthComputable&&a&&a(e.loaded,e.total)},s.upload.onloadstart=function(e){a&&a(0,e.total)},s.upload.onloadend=function(e){a&&a(e.loaded,e.total)},s.upload.onprogress=function(e){if(e.lengthComputable)Math.floor(e.loaded/e.total*100)}),s.onreadystatechange=function(){if(3<s.readyState){if(404===s.status)return n&&n(s.responseText),!1;r&&r(s.responseText)}};var u=new FormData;for(var p in i)i.hasOwnProperty(p)&&u.append(p,i[p]);"get"==o.toLowerCase()?s.send():s.send(u)},RaizEssentials.prototype.addEvent=function(e,t,o,r,n,a,i){var l=t.split(" "),c=arguments,s=function(e,t,r){null==t&&(t=!0);var n=e;null==n&&(n=window),nArgs_reindex=[];nArgs_reindex[0]=!1;for(var a=0;a<r.length;a++)3<a&&(nArgs_reindex[nArgs_reindex.length]=r[a]);if(n.addEventListener)for(a=0;a<l.length;a++){var i=l[a];!function(t,r,n,e,a){r.addEventListener(a,function(e){if(t[0]=e,n)return n.apply(r,t)},e)}(nArgs_reindex,n,o,t,i)}else if(n.attachEvent)for(a=0;a<l.length;a++){i=l[a];n.attachEvent("on"+i,function(e){if(nArgs_reindex[0]=e,o)return o.call(n,nArgs_reindex)})}};if("string"!=typeof e)s(e,r,c);else for(var u=document.querySelectorAll(e),p=0;p<u.length;p++){var d=u[p];s(d,r,c)}},RaizEssentials}();raiz.attachModule(RaizEssentials);var RaizInterpolation=function e(){this.name="interpolation",this.interpolationRegex=/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim,this.signalConvertInterpolation=">>>",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.prepareVirtualContent()})})};RaizInterpolation.prototype.goDom=function(e,t,r,n){void 0===e&&(e=document.querySelector("html")),"string"==typeof e&&(e=document.querySelector(e)),void 0===n&&(n=0);var a=e.childNodes;for(var i in a)void 0!==a[i].nodeName&&(0<a[i].childNodes.length?(t&&t(a[i]),RaizInterpolation.prototype.goDom(a[i],t,r,n+1)):r&&r(a[i]))},RaizInterpolation.prototype.prepareVirtualContent=function(){var a=function(e){var t=!1;for(var r in e.attributes){var n=e.attributes[r];"object"==typeof n&&/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(n.nodeValue)&&(null==e.raiz&&(e.raiz={}),null==e.raiz.attr&&(e.raiz.attr={}),t=!0,e.raiz.attr[n.nodeName]=n.nodeValue)}if(1==t&&(null===e.raiz&&(e.raiz={}),null!=e.raiz&&1!=e.raiz.attrinit)){e.raiz.attrinit=!0;var a=function(e,t){if(Object.keys(t.raiz.attr).length<1)return setTimeout(function(){e(e,t)},400,e,t),!1;for(var r in t.raiz.attr){var n=r,a=t.raiz.attr[r];if(1!=t.raiz.attrInit2){t.raiz.attrInit2=!0;var i=function(e,t,r,n){setTimeout(function(n,a,i,e){RaizInterpolation.prototype.getInterpolation(i,e,function(e,t,r){"href"==a?t[a+"_fix"]!=e&&(t[a+"_fix"]=e,t[a]=e):(t[a]!=e&&(t[a]=e),t.getAttribute(a)!=e&&t.setAttribute(a,e)),null!==t.parentNode&&!1!==r.loop&&setTimeout(function(e,t,r,n){e(e,t,r,n)},r.t,n,a,i,t)})},0,e,t,r,n)};i(i,n,a,t)}}};a(a,e)}},e=document.querySelectorAll("[data-raiz-controller],[raiz-controller]");if(0<e.length)for(var t=0;t<e.length;t++){var r=e[t];RaizInterpolation.prototype.goDom(r,function(e){if(null!=e.raiz&&1!=e.raiz.init){e.raiz.init=!0;var t=e.raiz.innerHTML,r=function(r,e){RaizInterpolation.prototype.miningVirtualContent(e,function(e,t){null!==e.parentNode&&!1!==t.loop&&setTimeout(function(){r(r,e)},t.t,r,e)})};return r(r,e),!0}if(a(e),t=(t=(t=e.innerHTML).replace(/&lt;/gi,"<")).replace(/&gt;/gi,">"),/(<!--{{[\s\S]*?}}-->)/i.test(t))return!1},function(e){var t="";if("#comment"===e.nodeName){"object"==typeof e&&"#comment"==e.nodeName&&(t=e.nodeValue),t=(t=t.replace(/&lt;/gi,"<")).replace(/&gt;/gi,">");var r=e;/(<!--{{[\s\S]*?}}-->)/i.test(t)}else{t=r=e.textContent}if(a(e),/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(t)&&1!=e.raiz){e.raiz={},e.raiz.innerHTML=r;var n=function(r,e){RaizInterpolation.prototype.miningVirtualContent(e,function(e,t){null!==e.parentNode&&!1!==t.loop&&setTimeout(function(){r(r,e)},t.t,r,e)})};n(n,e)}})}},RaizInterpolation.prototype.miningVirtualContent=function(e,u){var p=e.raiz.innerHTML;if("function"==e.vDomContentType)return!0;RaizInterpolation.prototype.getInterpolation(p,e,function(e,t,r){if(!1!==e)if("#comment"==t.nodeName){var n=t.nodeValue;if(void 0!==a&&n!=a.textContent&&/{{[\s\S]*?}}/i.test(n)){var a=document.createTextNode("");a.textContent=n,setTimeout(function(e,t){e.parentNode.innerHTML=t.innerHTML},0,t,a)}}else if(null==t.innerHTML){if(t.textContent!=e){var i=t.raiz.innerHTML,o=document.createElement("span");o.setAttribute("raiz-node","element"),o.innerHTML=e,o.raiz={},o.raiz.innerHTML=i;for(var l=!1,c=o.childNodes,s=0;s<c.length;s++)"#text"!=c[s].nodeName&&(l=!0);1==l?t.parentNode.innerHTML=o.innerHTML:t.textContent=e}}else if(t.innerHTML!=e){i=t.raiz.innerHTML;t.innerHTML=e,t.raiz.innerHTML=p}u&&u(t,r)})},RaizInterpolation.prototype.getInterpolation=function(string,el,callback){var data,config={t:5},stringTest=string;if("object"==typeof string&&"#comment"==string.nodeName&&(stringTest=string.nodeValue),/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(stringTest)){var data2="";return data=stringTest.replace(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim,function(m){var mOriginal=m;m=m.replace(/\<\!\-\-\{\{/gi,""),m=m.replace(/\}\}\-\-\>/gi,""),m=m.replace(/\{\{/gi,""),m=m.replace(/\}\}/gi,"");var classEvent=raiz.getClassEvent(el.parentNode);!1!==classEvent&&(m=m.replace(/this\./gi,classEvent+"."));var setupCheck=/.*?@@@.*?/gi.test(m);if(1==setupCheck){var setupObj=RaizInterpolation.prototype.setupInterpolation(m);m=setupObj.content}var igualCheck=/.*?=.*?/gi.test(m),reservedFunctionCheck=/__.*?__/gi.test(m),regexConvertSignal=new RegExp(".*?"+raiz.interpolation.signalConvertInterpolation+".*?","ig"),snippetCheck=regexConvertSignal.test(m),result=null,isFunction=!1;1==reservedFunctionCheck&&(result=RaizInterpolation.prototype.reservedMethod(m),m=result);try{var result=eval(m);isFunction=!1}catch(e){try{isFunction=!0;var nFunc=new Function(m);result=nFunc()}catch(e){isFunction=!1,el.vDomContentType=""}}return 1==snippetCheck&&(result=RaizInterpolation.prototype.snippetMethod(el,m)),"object"==typeof result&&(result=JSON.stringify(result)),1==setupCheck&&(config=setupObj.config),null==result&&(result=""),result}),"null"==data&&(data=stringTest),callback&&callback(data,el,config),data}return!1},RaizInterpolation.prototype.setupInterpolation=function(e,t){var r=e.split("@@@"),n=r[0],a=r[1];return a=a.trim(),{content:n,config:raiz.essentials.stringToObject(a)}},RaizInterpolation.prototype.reservedMethod=function(e,t){if(-1!=e.indexOf("__TIME__")){var r=new Date,n=r.getTime(),a=(r.getDate(),r.getMonth(),r.getFullYear(),r.getHours(),r.getMinutes(),r.getSeconds(),n);return e=e.replace("__TIME__",a)}if(-1!=e.indexOf("__helloword__"))return"Congratulations, <strong>Raiz v"+raiz.version+"</strong> was successfully uploaded"},RaizInterpolation.prototype.snippetMethod=function(el,string,callback){var stringArray=string.split(raiz.interpolation.signalConvertInterpolation),content=stringArray[0],snippet=stringArray[1];if(snippet=snippet.replace(/[ |\n|\s]/gim,""),content=content.trim(),"uppercase"==snippet){try{eval(" content = String("+content+").toUpperCase(); ")}catch(e){}callback&&callback(content)}else if("autosequence"==snippet){var array=eval(content);void 0===el.raiz.marqueeIndex&&(el.raiz.marqueeIndex=0),void 0===array[el.raiz.marqueeIndex]&&(el.raiz.marqueeIndex=0),content=array[el.raiz.marqueeIndex],callback&&callback(content),el.raiz.marqueeIndex++}else if("totime"==snippet){eval("var currentdate = new Date(Number("+content+"));");var datetime=currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()+" "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();content=datetime,callback&&callback(content)}else if("remote"==snippet)try{eval(" content = ("+content+"); ")}catch(e){}return content},raiz.attachModule(RaizInterpolation);var RaizIf=function e(){this.name="if",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizIf),RaizIf.prototype.init=function(){for(var raizIfrAll=document.querySelectorAll("[raiz-if],[data-raiz-if]"),i=0;i<raizIfrAll.length;i++){var el=raizIfrAll[i];null==el.raiz&&(el.raiz={}),null==el.raiz.if&&(el.raiz.if={},el.raiz.if.current=null,el.raiz.if.display=el.style.display);var condition=el.getAttribute("raiz-if"),classEvent=raiz.getClassEvent(el);condition=condition.replace("this.",classEvent+".");try{var cond=eval(condition)}catch(e){var cond=!1}if(cond){if(1!=el.raiz.if.current){el.raiz.if.current=!0,el.style.display=el.raiz.if.display;var ifTrue=el.getAttribute("raiz-if-true");eval(ifTrue)}}else if(0!=el.raiz.if.current){el.raiz.if.current=!1,el.style.display="none";var ifFalse=el.getAttribute("raiz-if-false");eval(ifFalse)}}};var RaizFor=function e(){this.name="for",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.for()})})};raiz.attachModule(RaizFor),RaizFor.prototype.for=function(){var forFunc=function(gost){var element=gost.clone,dataFor=element.getAttribute("raiz-for"),dataForArray=dataFor.split(" in "),preKey=dataForArray[0],preValue=dataForArray[1];preKey=preKey.trim();var classEvent=raiz.getClassEvent(gost.parentNode);preValue=preValue.replace("this.",classEvent+"."),eval("try{var value = "+preValue+";}catch(e){var value = false;}");var childRem=function(e,t){for(key in t);},forList=document.querySelectorAll('[raiz-for-key="'+preKey+'"]');if(0<forList.length)for(var i=0;i<forList.length;i++){var el=forList[i],index=el.getAttribute("raiz-for-index"),forValue=el._raizForRef;if(null!=forValue)try{var val=eval("value"+forValue);null==val&&el.parentNode.removeChild(el)}catch(e){el.parentNode.removeChild(el)}}for(var keyPreFor in value){var el=document.querySelector('[raiz-for-key="'+preKey+'"][raiz-for-index="'+keyPreFor+'"]');if(null==el){var cln=element.cloneNode(!0);if(null==element.firstChild&&(element.innerHTML=" "),null!=element.firstChild.raiz)var preContent=element.firstChild.raiz.innerHTML||element.innerHTML;else var preContent=element.innerHTML;var checkNumberTest=Number(keyPreFor);if(isNaN(checkNumberTest))var typeKey="string";else var typeKey="number";var preContentSave=preContent;if(preContent="number"==typeKey?String(preContent).replace(new RegExp(preKey,"gm"),preValue+"["+keyPreFor+"]"):String(preContent).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']"),null!=element.raiz&&null!=element.raiz.attr)for(keyAttr in element.raiz.attr){var attrValue=element.raiz.attr[keyAttr];attrValue=String(attrValue).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']"),cln[keyAttr]=attrValue}if(preContent=preContent.replace(/raiz-for=.*" /gim,""),null!=value[keyPreFor]._child){var childFunc=function(e,t,r,n,a,i,o,l,c,s,u){var p=r;for(keyChild in p+="<ul>",l){var d=n,m=c+"._child["+keyChild+"]",v=s+"._child["+keyChild+"]";d="number"==typeKey?String(d).replace(new RegExp(a,"gm"),i+"["+o+"]"+m):String(d).replace(new RegExp(a,"gm"),"("+i+")['"+o+"']"+m),null!=l[keyChild]._child&&(d+=e(e,t,"",n,a,i,o,l[keyChild]._child,m,v,u));value[keyPreFor]._child[keyChild];var f="";for(keyAttr in t.attributes)if("raiz-for"!=t.attributes[keyAttr].name&&null!=t.attributes[keyAttr].name&&null!=t.attributes[keyAttr].value){var z=t.attributes[keyAttr].value;if(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(z))var y=String(z).replace(new RegExp(a,"gm"),i+"["+o+"]"+m);else y=t.attributes[keyAttr].value;f+=t.attributes[keyAttr].name+'="'+y+'" '}p+='<li raiz-for-key="'+a+'" raiz-for-value="'+v+'" '+f+" >"+d+"</li>"}return p+="</ul>"},html=childFunc(childFunc,cln,preContent,preContentSave,preKey,preValue,keyPreFor,value[keyPreFor]._child,"","["+keyPreFor+"]",0);cln.innerHTML=html}else cln.innerHTML=preContent;for(var key in setTimeout(function(e){var t=document.querySelectorAll('[raiz-for-key="'+e+'"][raiz-for-value]');if(0<t.length)for(var r=0;r<t.length;r++){var n=t[r],a=n.getAttribute("raiz-for-value");n._raizForRef=a,setTimeout(function(e){e.removeAttribute("raiz-for-value")},100,n)}},100,preKey),cln.setAttribute("raiz-for-key",preKey),cln.setAttribute("raiz-for-index",keyPreFor),cln._raizForRef="["+keyPreFor+"]",cln.attributes){var attrValue=cln.attributes[key].value;if(/(<!--{{[\s\S]*?}}-->|{{[\s\S]*?}})/gim.test(attrValue))var attrValueSet=String(attrValue).replace(new RegExp(preKey,"gm"),"("+preValue+")['"+keyPreFor+"']");else var attrValueSet=cln.attributes[key].value;cln.attributes[key].value=attrValueSet}cln.removeAttribute("raiz-for"),gost.parentNode.insertBefore(cln,gost)}}},raizForAll=document.querySelectorAll("[raiz-for],[data-raiz-for]");null==RaizFor.prototype.for.listFor&&(RaizFor.prototype.for.listFor={});for(var i=0;i<raizForAll.length;i++){var element=raizForAll[i],dataFor=element.getAttribute("raiz-for"),dataForArray=dataFor.split(" in "),preKey=dataForArray[0],preValue=dataForArray[1];preKey=preKey.trim();var classEvent=raiz.getClassEvent(element.parentNode);if(preValue=preValue.replace("this.",classEvent+"."),eval("try{var value = "+preValue+";}catch(e){var value = false;}"),void 0===RaizFor.prototype.for.listFor[preKey]){var gost=document.createTextNode("");gost.clone=element,RaizFor.prototype.for.listFor[preKey]=gost,element.parentNode.insertBefore(gost,element.nextSibling)}element.parentNode.removeChild(element)}for(var keyPreFor in RaizFor.prototype.for.listFor)forFunc(RaizFor.prototype.for.listFor[keyPreFor])};var RaizInner=function e(){this.name="attr",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.attr()})})};raiz.attachModule(RaizInner),RaizInner.prototype.attr=function(){for(var RaizInnerAll=document.querySelectorAll("[raiz-inner],[data-raiz-inner]"),i=0;i<RaizInnerAll.length;i++){var element=RaizInnerAll[i];if(1!=element.raizInnerInit){element.raizInnerInit=!0;var dataFor=element.getAttribute("raiz-inner");if(void 0===element.raiz&&(element.raiz={}),element.raiz.innerHTML=dataFor,-1!=dataFor.indexOf("this.")){var classEvent=raiz.getClassEvent(element.parentNode);dataFor=dataFor.replace("this.",classEvent+".")}dataFor=dataFor.replace("{{",""),dataFor=dataFor.replace("}}",""),eval("var content = "+dataFor+";"),element.removeAttribute("raiz-inner"),element.innerHTML=content}}};var RaizEvents=function e(){this.name="events",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.events(),e.prototype.tagEvent()})})};RaizEvents.prototype.eventsAttach=function(u,e,p){var t=function(s,e,t){!function(e,t){var r=e,n=t;if("_"==n.substr(0,1)&&(n=n.substr(1)),"attribute"==s)var a=u.querySelectorAll("["+n+"]");else a="type"==s?u.querySelectorAll(""+n):"class"==s?u.querySelectorAll("."+n):u.querySelectorAll("["+s+'="'+n+'"]');if(0<a.length)for(var i=0;i<a.length;i++){var o=a[i];if(1!=o.eventInit){if(o.eventInit=!0,null==r.dom&&(r.dom=[]),r.dom[i]=o,null==r.first&&(r.first=o),r.last=o,"name"!=s||p["_"+n]||(p["_"+n]=r),"object"==typeof r)for(var l in r)o[l]=r[l];if("function"==typeof r)for(var c in r(o))if("attr"==c)for(var l in r(o)[c])o[l]=r(o)[c][l];else raiz.essentials.addEvent(o,c,function(e,t,r){if(!1===t(this,t.dom)[r](e))return e.preventDefault(),!1},null,r,c)}}}(e,t)},r=p[e];if("__construct"==e)return!1;if("__name"==e){if(0<Object.keys(r).length)for(var n in r)t("name",r[n],n);return!1}if("__id"==e){if(0<Object.keys(r).length)for(var n in r)t("id",r[n],n);return!1}if("__class"==e){if(0<Object.keys(r).length)for(var n in r)t("class",r[n],n);return!1}if("__attribute"==e){if(0<Object.keys(r).length)for(var n in r)t("attribute",r[n],n);return!1}if("__type"==e){if(0<Object.keys(r).length)for(var n in r)t("type",r[n],n);return!1}if("_"!=e.substr(0,1))return!1;t("name",r,e=e.substr(1))},RaizEvents.prototype.events=function(){var vdomIdAll=document.querySelectorAll("[data-raiz-controller],[raiz-controller]");if(0<vdomIdAll.length)for(var i=0;i<vdomIdAll.length;i++){var element=vdomIdAll[i],classEvent=element.getAttribute("data-raiz-controller")||element.getAttribute("raiz-controller"),classEventArray=classEvent.split(",");if(0<classEventArray.length)for(var key in classEventArray){var objNew=classEventArray[key];if(""!=objNew.replace(/ /gi,"")&&(eval("try{var ev =  "+objNew+";}catch(e){}"),void 0!==ev))for(var keyEv in ev)ev.html=function(e){element.innerHTML=e},ev.__construct&&null==ev.__construct.init&&(ev.__construct.init=!0,ev.__construct(element)),RaizEvents.prototype.eventsAttach(element,keyEv,ev)}}},RaizEvents.prototype.tagEvent=function(){for(var raizIfrAll=document.querySelectorAll("[raiz-event]"),i=0;i<raizIfrAll.length;i++){var el=raizIfrAll[i],attrValue=el.getAttribute("raiz-event"),classEvent=raiz.getClassEvent(el.parentNode);!1!==classEvent&&(attrValue=attrValue.replace(/this\./gi,classEvent+"."));var val=eval(attrValue);if(1!=el.raizInitEvent)for(key in el.raizInitEvent=!0,val()){var ev=val(el)[key];raiz.essentials.addEvent(el,key,function(e,t){return t(e)},null,ev)}}},raiz.attachModule(RaizEvents);var RaizHmvc=function n(){this.name="hmvc",this.config={dir:null},this.container=null,raiz.essentials.addEvent(window,"load",function(){var e=function(e){var t=document.querySelectorAll("[raiz-hmvc],[data-raiz-hmvc]");if(t.length<1)return setTimeout(function(e){e(e)},100,e),!1;for(var r=0;r<t.length;r++)element=t[r],null==element.raiz&&(element.raiz={}),null==element.raiz.hmvc&&(element.raiz.hmvc={}),!0!==element.raiz.hmvc.Init&&(element.raiz.hmvc.Init=!0,Raiz.prototype.monitorUrl(function(){for(var e=document.querySelectorAll("[raiz-hmvc],[data-raiz-hmvc]"),t=0;t<e.length;t++)element=e[t],n.prototype.init(element)}));setTimeout(function(e){e(e)},100,e)};e(e)})};raiz.attachModule(RaizHmvc),RaizHmvc.prototype.OverwriteLinks=function(){var e=document.querySelectorAll("a");if(0<e.length)for(key in e){var t=e[key];1!=t.hmvcinit&&(t.hmvcinit=!0,raiz.essentials.addEvent(t,"click",function(e){document.querySelector(raiz.hmvc.config.container),(window.location.origin+window.location.pathname).replace(raiz.config.domain,"");var t=this.href.replace(raiz.config.domain,""),r=(raiz.config.domain,raiz.config.domain+t);return window.history.pushState(null,null,r),RaizHmvc.prototype.init(),e.preventDefault(),!1}))}},RaizHmvc.prototype.init=function(e,t){null==t&&(t=(t=window.location.hash).replace("#",""));var r=t,n=r;this.location=r,this.router=n||"home",e.setAttribute("data-route",this.router),document.querySelector("html").setAttribute("raiz-hmvc-route",this.router),RaizHmvc.prototype.loadController(e),RaizHmvc.prototype.loadView(e)},RaizHmvc.prototype.loadController=function(a){var e=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+a.getAttribute("raiz-hmvc")+"/"+this.router+"/Controller.js",t=document.createElement("script");t.src=e,a.appendChild(t);t.onload=function(){try{if(null==Controller)return!1;hmvccontroller=Controller;a.setAttribute("raiz-controller","hmvccontroller");if(null==document.querySelector('head > meta[name="description"]')&&void 0!==hmvccontroller.meta.title){var e=document.createElement("title");document.querySelector("head").appendChild(e)}if(null==document.querySelector('head > meta[name="description"]')&&void 0!==hmvccontroller.meta.description){var t=document.createElement("meta");t.setAttribute("name","description"),document.querySelector("head").appendChild(t)}if(null==document.querySelector('head > meta[name="keywords"]')&&void 0!==hmvccontroller.meta.keywords){var r=document.createElement("meta");r.setAttribute("name","keywords"),document.querySelector("head").appendChild(r)}if(null==document.querySelector('head > meta[name="robots"]')&&void 0!==hmvccontroller.meta.robots){var n=document.createElement("meta");n.setAttribute("name","robots"),document.querySelector("head").appendChild(n)}void 0!==hmvccontroller.meta.title&&(document.querySelector("head > title").innerHTML=hmvccontroller.meta.title),void 0!==hmvccontroller.meta.description&&document.querySelector('head > meta[name="description"]').setAttribute("content",hmvccontroller.meta.description),void 0!==hmvccontroller.meta.keywords&&document.querySelector('head > meta[name="keywords"]').setAttribute("content",hmvccontroller.meta.keywords),void 0!==hmvccontroller.meta.robots&&document.querySelector('head > meta[name="robots"]').setAttribute("content",hmvccontroller.meta.robots)}catch(e){}}},RaizHmvc.prototype.loadAssets=function(e){var t=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+e.getAttribute("raiz-hmvc")+"/"+this.router+"/style.css",r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.type="text/css",r.href=t,e.appendChild(r);r.onload=function(){}},RaizHmvc.prototype.loadView=function(r){var e=(window.location.origin+window.location.pathname).replace(raiz.config.domain,"")+""+r.getAttribute("raiz-hmvc")+"/"+this.router+"/view.html",n=function(e,t){if("BODY"==t.tagName)return!(t.scrollY="0px");t.scrollTop=0,setTimeout(function(){e(e,t.parentNode)})};raiz.essentials.ajax({url:e,method:"get",success:function(e){if(r.innerHTML=e,null!=document.querySelector("[raiz-core-attr]")){var t=document.querySelector("[raiz-core-attr]").getAttribute("raiz-core-attr");t=raiz.essentials.stringToObject(t)}else t={loadcss:!0};0!=t.loadcss&&RaizHmvc.prototype.loadAssets(r),n(n,r)},error:function(e){r.innerHTML=""}})};var RaizComponents=function e(){this.name="components",this.config={dir:""},this.container=null,raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizComponents),RaizComponents.prototype.init=function(){for(var e=document.querySelectorAll("[raiz-component],[data-raiz-component]"),t=0;t<e.length;t++){var r=e[t];1!=r.raizComponentsInit&&(r.raizComponentsInit=!0,RaizComponents.prototype.loadComponent(r))}},RaizComponents.prototype.loadComponent=function(r){var e=r.getAttribute("raiz-component")||r.getAttribute("data-raiz-component");if(null==e)return!1;if(-1!=e.indexOf("::"))var t=e.split("::");else t=["app/components",e];var n=t[0];e=t[1]||null;var a=(window.location.origin+window.location.pathname).replace(raiz.config.domain,""),i="/"+e+"/view.html";i=n+String("/"+i).replace("//","/"),""!=raiz.config.domain||null!=raiz.config.domain?-1===n.indexOf("://")&&(i=a+i):-1===n.indexOf("://")&&(i=raiz.config.domain+i);var o="/"+e+"/style.css";o=n+String("/"+o).replace("//","/"),""!=raiz.config.domain||null!=raiz.config.domain?-1===n.indexOf("://")&&(o=a+o):-1===n.indexOf("://")&&(o=raiz.config.domain+o);var l="/"+e+"/Controller.js";l=n+String("/"+l).replace("//","/"),""!=raiz.config.domain||null!=raiz.config.domain?-1===n.indexOf("://")&&(l=a+l):-1===n.indexOf("://")&&(l=raiz.config.domain+l);var c=e;c=(c=c.replace(/\/\//g,"/")).replace(/\//g,"-"),console.log("raiz-component: "+i+" (view)");var s=function(){raiz.essentials.ajax({url:i,method:"get",success:function(e){if(r.classList.add("component-"+c),r.innerHTML=e,null!=document.querySelector("[raiz-core-attr]")){var t=document.querySelector("[raiz-core-attr]").getAttribute("raiz-core-attr");t=raiz.essentials.stringToObject(t)}else t={loadcss:!0};0!=t.loadcss&&RaizComponents.prototype.loadCss(o,r)}})};RaizComponents.prototype.loadController(l,r,e,function(){s()},function(){s()})},RaizComponents.prototype.loadCss=function(e,t){console.log("raiz-component: "+e+" (style)");var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.type="text/css",r.href=e,t.appendChild(r);r.onload=function(){}},RaizComponents.prototype.loadController=function(url,element,componentName,callback){console.log("raiz-component: "+url+" (Controller)");var componentNameClass=componentName;componentNameClass=componentNameClass.replace("-","_"),componentNameClass=componentNameClass.replace("/","_");var script=document.createElement("script");script.src=url,element.appendChild(script);var self=this;script.onload=function(){var timestamp=(new Date).getUTCMilliseconds();try{if(null!=Controller){var raizControllerDefault=element.getAttribute("raiz-controller");if(null!=raizControllerDefault)eval(raizControllerDefault+" =  Controller;");else{eval("component_"+componentNameClass+"_"+timestamp+" =  Controller;");var raizController=element.setAttribute("raiz-controller","component_"+componentNameClass+"_"+timestamp)}}}catch(e){}callback(),Controller=void 0},script.onerror=function(){callback()}};var RaizBind=function e(){this.name="bind",raiz.essentials.addEvent(window,"load",function(){raiz.loop(function(){e.prototype.init()})})};raiz.attachModule(RaizBind),RaizBind.prototype.init=function(){for(var raizIfrAll=document.querySelectorAll("[raiz-bind]"),i=0;i<raizIfrAll.length;i++){var el=raizIfrAll[i],attrValue=el.getAttribute("raiz-bind"),classEvent=raiz.getClassEvent(el.parentNode);!1!==classEvent&&(attrValue=attrValue.replace(/this\./gi,classEvent+"."));var isFocused=document.activeElement===el;if(!isFocused){var val=eval(attrValue);el.value!==val&&(el.value=val)}1!=el.raizInitBind&&(el.raizInitBind=!0,raiz.essentials.addEvent(el,"keyup change",function(obj,attrValue){var isFocused=document.activeElement===this;if(isFocused){var text=this.value;text=text.replace(/\"/gi,'\\"'),eval(attrValue+'="'+text+'";')}},null,attrValue))}};