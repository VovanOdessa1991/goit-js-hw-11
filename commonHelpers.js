import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s={formIMG:document.querySelector("form"),galery:document.querySelector(".galery__list"),loader:document.querySelector(".loader"),preLoader:document.querySelector(".preLoader")};function u(i){const t=i.map(({webformatURL:o,views:a,comments:e,likes:r,downloads:l}=i)=>`<li class="galery__item">
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
                  <p class="galeri__ingo-footer">${a}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Comments</p>
                  <p class="galeri__ingo-footer">${e}</p>
                </li>
                <li class="galeri__info-item">
                  <p class="galeri__info-header">Downloads</p>
                  <p class="galeri__ingo-footer">${l}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>`).join("");s.galery.insertAdjacentHTML("beforeend",t)}function n(i){i.innerHTML="";//!  Old methods
}const m="https://pixabay.com/api/",g="?key=44446882-f589529ab68d1d31e6487214d";function p(i){const t=`&q=${i}&min_width=2450`,a=`${m}${g}${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(a).then(r=>r.json()).catch(()=>{console.log("Error")})}c();s.formIMG.addEventListener("submit",h);let _=new f(".galery__item-div a");function h(i){i.preventDefault();const t=i.target.name.value.trim();if(t===""){n(s.galery),d.info({title:"Пустой РЯДОК!!"});return}L(),p(t).then(o=>{if(o.hits.length==0){c(),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n(s.galery);return}n(s.galery),u(o.hits),_.refresh(),y()}),i.target.name.value=""}function y(){const i=document.querySelectorAll("img, video");let t=0;Array.from(i).forEach(o=>{o.onload=()=>{t++,t===i.length-2&&c()}})}function L(){s.loader.classList.remove("hidden"),s.preLoader.classList.remove("hidden")}function c(){s.loader.classList.add("hidden"),s.preLoader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
