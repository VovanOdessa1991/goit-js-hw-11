import{i as c,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function f(o,r,t,l,e){return`<li class="galery__item">
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
                  <p class="galeri__ingo-footer">${r}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${t}</p>
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
        </li>`}function g(o){for(;o.firstChild;)o.removeChild(o.lastChild)}function u(o,r,t,l,e,i){const a=f(r,t,l,e,i);o.insertAdjacentHTML("afterbegin",a)}const s={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader")};n();s.formIMG.addEventListener("submit",m);function m(o){o.preventDefault(),console.log("IMG!");const r=o.target.name.value;console.log(r),L(),y(r).then(t=>{if(t.hits.length==0){console.log("ЖОПА_КОТОСРОФА"),n(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log("length"+t.hits.length),console.log(t.hits),g(s.galery),t.hits.forEach(e=>{console.log(e.downloads),u(s.galery,e.webformatURL,e.likes,e.views,e.comments,e.downloads)}),new d(".galery__item-div a").on("show.simplelightbox",function(){}),h()}),o.target.name.value=""}function h(){console.log("Лоадер!");const o=document.querySelectorAll("img, video");let r=0;console.log(o),Array.from(o).forEach(t=>{t.onload=()=>{r++,console.log(r),r===o.length-2&&(console.log("ZGRYZILOS!"),n())}})}const p="https://pixabay.com/api/",_="?key=44446882-f589529ab68d1d31e6487214d";function y(o){const r=`&q=${o}&min_width=2450`,l=`${p}${_}${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(l).then(i=>i.json()).catch(()=>{console.log("Error")})}function L(){s.loader.classList.remove("hidden"),s.preLoader.classList.remove("hidden")}function n(){s.loader.classList.add("hidden"),s.preLoader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
