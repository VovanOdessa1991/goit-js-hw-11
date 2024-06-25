import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function u(r,i,t,s,e){return`<li class="galery__item">
          <div class="galery__item-div">
            <a href="${r}">
              <img
                class="galery-img"
                src = "${r}"
                alt=""
                
                
              />
            </a>
            <div class="galery__info">
              <ul class="gallery__info-list">
                <!-- ! подпись под карточкой -->

                <li class="galeri__info-item">
                  <p class="galeri__info-header">Likes</p>
                  <p class="galeri__ingo-footer">${i}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Views</p>
                  <p class="galeri__ingo-footer">${t}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${s}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${e}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`}function d(r){r.innerHTML=""}function g(r,i,t,s,e,o){const a=u(i,t,s,e,o);r.insertAdjacentHTML("afterbegin",a)}const m="https://pixabay.com/api/",p="?key=44446882-f589529ab68d1d31e6487214d";function _(r){const i=`&q=${r}&min_width=2450`,s=`${m}${p}${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(o=>o.json()).catch(()=>{console.log("Error")})}const l={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader")};n();l.formIMG.addEventListener("submit",h);function h(r){if(r.preventDefault(),r.target.name.value.trim()===""){c.info({title:"Пустой РЯДОК!!"});return}const i=r.target.name.value;console.log(i),L(),_(i).then(t=>{if(t.hits.length==0){n(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),d(l.galery);return}d(l.galery),t.hits.forEach(e=>{g(l.galery,e.webformatURL,e.likes,e.views,e.comments,e.downloads)}),new f(".galery__item-div a").on("show.simplelightbox",function(){}),y()}),r.target.name.value=""}function y(){console.log("Лоадер!");const r=document.querySelectorAll("img, video");let i=0;console.log(r),Array.from(r).forEach(t=>{t.onload=()=>{i++,i===r.length-2&&(console.log("ZGRYZILOS!"),n())}})}function L(){l.loader.classList.remove("hidden"),l.preLoader.classList.remove("hidden")}function n(){l.loader.classList.add("hidden"),l.preLoader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
