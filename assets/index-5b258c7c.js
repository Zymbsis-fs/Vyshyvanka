(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function h(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=h(t);fetch(t.href,r)}})();function p(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var v={},O={get exports(){return v},set exports(o){v=o}};(function(o,u){(function(h){o.exports=h()})(function(){return function h(d,t,r){function c(n,s){if(!t[n]){if(!d[n]){var m=typeof p=="function"&&p;if(!s&&m)return m(n,!0);if(g)return g(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var e=t[n]={exports:{}};d[n][0].call(e.exports,function(a){return c(d[n][1][a]||a)},e,e.exports,h,d,t,r)}return t[n].exports}for(var g=typeof p=="function"&&p,i=0;i<r.length;i++)c(r[i]);return c}({1:[function(h,d,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var r=function(i){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=document.createElement("div");return s.innerHTML=i.trim(),n===!0?s.children:s.firstChild},c=function(i,n){var s=i.children;return s.length===1&&s[0].tagName===n},g=function(i){return(i=i||document.querySelector(".basicLightbox"))!=null&&i.ownerDocument.body.contains(i)===!0};t.visible=g,t.create=function(i,n){var s=function(e,a){var l=r(`
		<div class="basicLightbox `.concat(a.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),b=l.querySelector(".basicLightbox__placeholder");e.forEach(function(L){return b.appendChild(L)});var y=c(b,"IMG"),w=c(b,"VIDEO"),E=c(b,"IFRAME");return y===!0&&l.classList.add("basicLightbox--img"),w===!0&&l.classList.add("basicLightbox--video"),E===!0&&l.classList.add("basicLightbox--iframe"),l}(i=function(e){var a=typeof e=="string",l=e instanceof HTMLElement==1;if(a===!1&&l===!1)throw new Error("Content must be a DOM element/node or string");return a===!0?Array.from(r(e,!0)):e.tagName==="TEMPLATE"?[e.content.cloneNode(!0)]:Array.from(e.children)}(i),n=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable==null&&(e.closable=!0),e.className==null&&(e.className=""),e.onShow==null&&(e.onShow=function(){}),e.onClose==null&&(e.onClose=function(){}),typeof e.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof e.className!="string")throw new Error("Property `className` must be a string");if(typeof e.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof e.onClose!="function")throw new Error("Property `onClose` must be a function");return e}(n)),m=function(e){return n.onClose(f)!==!1&&function(a,l){return a.classList.remove("basicLightbox--visible"),setTimeout(function(){return g(a)===!1||a.parentElement.removeChild(a),l()},410),!0}(s,function(){if(typeof e=="function")return e(f)})};n.closable===!0&&s.addEventListener("click",function(e){e.target===s&&m()});var f={element:function(){return s},visible:function(){return g(s)},show:function(e){return n.onShow(f)!==!1&&function(a,l){return document.body.appendChild(a),setTimeout(function(){requestAnimationFrame(function(){return a.classList.add("basicLightbox--visible"),l()})},10),!0}(s,function(){if(typeof e=="function")return e(f)})},close:m};return f}},{}]},{},[1])(1)})})(O);const x="/Vyshyvanka-Project/assets/icons-433e1a2e.svg",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAMAAABEQrEuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAACcUExURUdwTN/PcO3Zee/fgOzZee/XeOvYeevXeO/PcOfXeOzXeOzYeOvZeu3Zee3Yee3ZeOrXeOzYee3aeu3aeezaeuvYeezYeOvWduvYeOraeurXeOzZeevXeO3Yd+rUde3aeu3YeOrWd+zZeezaeezYd+3aeuvZeevYd+3ZeOvZeuzZeenWdunXeOzbeuzaeuzaeuzZeezWd+vZeezZeXs/15kAAAAzdFJOUwAQ3xDfIHBAECBgkIDPcH9g4M+P78C/cLAwoKCAbzCf35Dvv6/vz4+fsK9QgK+Qn1CQ0C8oGK0AAAFjSURBVBgZlcEHcuQgFAXABwI+KE2ecY6b8+67/90WaWxZVRYl1I2ENddYRBkajwzuh0dvRfIGPbW6RdqGRhAFRk8BkRgapDFaAbhi5xugdoyQxo65+86ztRh2PFIspwWkXHJawDsKPeE0QUcpDALZHB+d7Djts5SPHx5Ij1fFnlksBhVz3OONMIdg5JnzGow5zisxVnAextQt550UXgR33DPL0QUA7oFLmBMuuEwDq7mEtoDdMl/jERXXzHXtcVYzT4UB82CwY54VztQX5vrtEalPzNcEIBguYQK2XOYCreYSGwfAtgdm+XhoA174lvOcxxjneYytOe+EsS3nPWNEmEPw5oo5/mIQmOXJ41VBbr5WpfzitEra6vCPtBh4j45wmqDn8Y7ltDukWE4LSCnY0VLy7M+lZgdpjCoP/GTnHkDNCGkbakFk94wsItE0SHO1R++GZI1eUTtkKDS1xyIlS0z7D/ilJJV6IfShAAAAAElFTkSuQmCC",C=document.querySelector(".collection-list");function X(o){return o.map(u=>`<li class="lightbox-size-item">
        <span class="lightbox-size-text">${u}</span>
      </li>`).join("")}function A(o,u){return u.target.parentNode.parentNode.querySelector(o).textContent}function S(o){return v.create(`<div class="lightbox-container">
    <button class="lightbox-close-button" type="button"><svg width="26" height="26" class="lightbox-close-icon"><use href=${x}#menu-close>
    </use><svg></button>
    <div class="lightbox-img-wrapper">
    <picture class="lightbox-img" ${o.target.parentNode.innerHTML}</picture>
    <ul class="lightbox-size-list">
    ${X(["XXS","XS","S","M","L","XL","XXL","XXXL"])}
    </ul>
    <div class="lightbox-hand-made">
    <img class="lightbox-hand-made-img" src="${z}" alt="Star symbol" width="49" height="49">
    <p class="lightbox-hand-made-text">all embroidery is made by hand</p></div></div>

    <div class="lightbox-desc-wrapper">
    <h2 class="lightbox-desc-title">${A(".collection-subtitle",o)}</h2>
    <p class="lightbox-desc-text">${A(".collection-desc",o)}</p>
    <p class="lightbox-desc-price">${A(".collection-text",o)}</p>
    <a class="lightbox-order-link" href="#order">
          Order
          <svg class="lightbox-order-icon" width="26" height="10">
            <use href=${x}#arrow></use>
          </svg>
        </a>
    </div>
    </div>`)}C.addEventListener("click",o=>{o.target.nodeName==="IMG"&&S(o).show()});