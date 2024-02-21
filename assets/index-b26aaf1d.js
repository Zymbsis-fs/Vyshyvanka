(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();function x(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var v={},C={get exports(){return v},set exports(o){v=o}};(function(o,i){(function(a){o.exports=a()})(function(){return function a(d,t,n){function u(r,l){if(!t[r]){if(!d[r]){var b=typeof x=="function"&&x;if(!l&&b)return b(r,!0);if(h)return h(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var e=t[r]={exports:{}};d[r][0].call(e.exports,function(c){return u(d[r][1][c]||c)},e,e.exports,a,d,t,n)}return t[r].exports}for(var h=typeof x=="function"&&x,s=0;s<n.length;s++)u(n[s]);return u}({1:[function(a,d,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var n=function(s){var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l=document.createElement("div");return l.innerHTML=s.trim(),r===!0?l.children:l.firstChild},u=function(s,r){var l=s.children;return l.length===1&&l[0].tagName===r},h=function(s){return(s=s||document.querySelector(".basicLightbox"))!=null&&s.ownerDocument.body.contains(s)===!0};t.visible=h,t.create=function(s,r){var l=function(e,c){var g=n(`
		<div class="basicLightbox `.concat(c.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),m=g.querySelector(".basicLightbox__placeholder");e.forEach(function(O){return m.appendChild(O)});var L=u(m,"IMG"),w=u(m,"VIDEO"),E=u(m,"IFRAME");return L===!0&&g.classList.add("basicLightbox--img"),w===!0&&g.classList.add("basicLightbox--video"),E===!0&&g.classList.add("basicLightbox--iframe"),g}(s=function(e){var c=typeof e=="string",g=e instanceof HTMLElement==1;if(c===!1&&g===!1)throw new Error("Content must be a DOM element/node or string");return c===!0?Array.from(n(e,!0)):e.tagName==="TEMPLATE"?[e.content.cloneNode(!0)]:Array.from(e.children)}(s),r=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable==null&&(e.closable=!0),e.className==null&&(e.className=""),e.onShow==null&&(e.onShow=function(){}),e.onClose==null&&(e.onClose=function(){}),typeof e.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof e.className!="string")throw new Error("Property `className` must be a string");if(typeof e.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof e.onClose!="function")throw new Error("Property `onClose` must be a function");return e}(r)),b=function(e){return r.onClose(f)!==!1&&function(c,g){return c.classList.remove("basicLightbox--visible"),setTimeout(function(){return h(c)===!1||c.parentElement.removeChild(c),g()},410),!0}(l,function(){if(typeof e=="function")return e(f)})};r.closable===!0&&l.addEventListener("click",function(e){e.target===l&&b()});var f={element:function(){return l},visible:function(){return h(l)},show:function(e){return r.onShow(f)!==!1&&function(c,g){return document.body.appendChild(c),setTimeout(function(){requestAnimationFrame(function(){return c.classList.add("basicLightbox--visible"),g()})},10),!0}(l,function(){if(typeof e=="function")return e(f)})},close:b};return f}},{}]},{},[1])(1)})})(C);const y="/Vyshyvanka-Project/assets/icons-433e1a2e.svg",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAMAAABEQrEuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAACcUExURUdwTN/PcO3Zee/fgOzZee/XeOvYeevXeO/PcOfXeOzXeOzYeOvZeu3Zee3Yee3ZeOrXeOzYee3aeu3aeezaeuvYeezYeOvWduvYeOraeurXeOzZeevXeO3Yd+rUde3aeu3YeOrWd+zZeezaeezYd+3aeuvZeevYd+3ZeOvZeuzZeenWdunXeOzbeuzaeuzaeuzZeezWd+vZeezZeXs/15kAAAAzdFJOUwAQ3xDfIHBAECBgkIDPcH9g4M+P78C/cLAwoKCAbzCf35Dvv6/vz4+fsK9QgK+Qn1CQ0C8oGK0AAAFjSURBVBgZlcEHcuQgFAXABwI+KE2ecY6b8+67/90WaWxZVRYl1I2ENddYRBkajwzuh0dvRfIGPbW6RdqGRhAFRk8BkRgapDFaAbhi5xugdoyQxo65+86ztRh2PFIspwWkXHJawDsKPeE0QUcpDALZHB+d7Djts5SPHx5Ij1fFnlksBhVz3OONMIdg5JnzGow5zisxVnAextQt550UXgR33DPL0QUA7oFLmBMuuEwDq7mEtoDdMl/jERXXzHXtcVYzT4UB82CwY54VztQX5vrtEalPzNcEIBguYQK2XOYCreYSGwfAtgdm+XhoA174lvOcxxjneYytOe+EsS3nPWNEmEPw5oo5/mIQmOXJ41VBbr5WpfzitEra6vCPtBh4j45wmqDn8Y7ltDukWE4LSCnY0VLy7M+lZgdpjCoP/GTnHkDNCGkbakFk94wsItE0SHO1R++GZI1eUTtkKDS1xyIlS0z7D/ilJJV6IfShAAAAAElFTkSuQmCC",z=`<div class="lightbox-container">
<button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon"><use href=${y}#menu-close>
</use><svg></button>
<div class="lightbox-img-wrapper">
    <picture class="lightbox-img"></picture>
    <ul class="lightbox-size-list">
    ${X(["XXS","XS","S","M","L","XL","XXL","XXXL"])}
    </ul>
    <div class="lightbox-hand-made">
    <img class="lightbox-hand-made-img" src="${S}" alt="Star symbol" width="49" height="49">
    <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>
    <div class="lightbox-desc-wrapper">
    <h2 class="lightbox-desc-title"></h2>
    <p class="lightbox-desc-text"></p>
    <p class="lightbox-desc-text">Crafted using only 100% pure organic materials (flax, cotton)</p>
    <p class="lightbox-desc-price"></p>
    <a class="lightbox-order-link" href="#order">
    Order
    <svg class="lightbox-order-icon" width="26" height="10">
    <use href=${y}#arrow></use>
    </svg>
    </a>
    </div>
    </div>`;function X(o){return o.map(i=>`<li class="lightbox-size-item">
        <span class="lightbox-size-text">${i}</span>
      </li>`).join("")}const k=document.querySelector(".collection-list"),A=v.create(z,{onClose:()=>{document.body.classList.remove("scrollBan")}});console.log(A);function p(o,i,a){o.innerHTML=a.target.parentElement.parentElement.querySelector(i).textContent}function P(o,i){document.querySelector(".basicLightbox"),o.element().querySelector(".lightbox-container");const a=o.element().querySelector(".lightbox-img"),d=o.element().querySelector(".lightbox-desc-title"),t=o.element().querySelector(".lightbox-desc-text"),n=o.element().querySelector(".lightbox-desc-price"),u=o.element().querySelector(".lightbox-close-button"),h=o.element().querySelector(".lightbox-order-link");a.innerHTML=i.target.parentElement.innerHTML,p(d,".collection-subtitle",i),p(t,".collection-desc",i),p(n,".collection-text",i),u.addEventListener("click",()=>{o.close(),document.body.classList.remove("scrollBan")}),h.addEventListener("click",()=>{o.close(),document.body.classList.remove("scrollBan")})}k.addEventListener("click",o=>{o.target.nodeName==="IMG"&&(document.body.classList.add("scrollBan"),P(A,o),A.show(i=>{const a=document.querySelector(".basicLightbox"),d=i.element().querySelector(".lightbox-container");window.innerHeight<d.offsetHeight?(a.classList.add("basicLightbox1"),console.log("add")):(a.classList.remove("basicLightbox1"),console.log("remove"))}))});
