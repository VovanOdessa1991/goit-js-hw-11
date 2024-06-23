import{S as a}from"./assets/vendor-10cb7c31.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();function c(o,t,r,l,e){return`<li class="galery__item">
          <div class="galery__item-div">
            <a href="${o}">
              <img
                class="galery-img"
                src = "${o}"
                alt=""
                
                
              />
            </a>
            <div class="galery__info">
              <ul class="gallery__info-list">
                <!-- ! подпись под карточкой -->

                <li class="galeri__info-item">
                  <p class="galeri__info-header">Likes</p>
                  <p class="galeri__ingo-footer">${t}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${r}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${l}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${e}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`}function f(o){for(;o.firstChild;)o.removeChild(o.lastChild)}function d(o,t,r,l,e,i){const s=c(t,r,l,e,i);o.insertAdjacentHTML("afterbegin",s)}const n={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list")};n.formIMG.addEventListener("submit",g);function g(o){o.preventDefault(),console.log("IMG!");const t=o.target.name.value;console.log(t),p(t).then(r=>{if(r.hits.length==0){console.log("ЖОПА_КОТОСРОФА");return}console.log("length"+r.hits.length),console.log(r.hits),f(n.galery),r.hits.forEach(e=>{console.log(e.downloads),d(n.galery,e.webformatURL,e.likes,e.views,e.comments,e.downloads)}),new a(".galery__item-div a").on("show.simplelightbox",function(){})}),o.target.name.value=""}const u="https://pixabay.com/api/",_="?key=44446882-f589529ab68d1d31e6487214d";function p(o){const t=`&q=${o}&min_width=2450`,r=`${u}${_}${t}`;return fetch(r).then(e=>e.json()).catch(()=>{console.log("Error")})}
//# sourceMappingURL=commonHelpers.js.map
