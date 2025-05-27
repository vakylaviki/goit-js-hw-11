import{a as c,S as d,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u="50541308-8b3817b4b3c5c4721b4bd6fc3",f="https://pixabay.com/api/";async function m(t){return(await c.get(f,{params:{key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const s=t.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${r.likes}</p>
          <p class="info-item"><b>Views:</b> ${r.views}</p>
          <p class="info-item"><b>Comments:</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){l.innerHTML=""}function h(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}function b(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}const L=document.querySelector(".form");document.querySelector(".gallery");L.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements["search-text"].value.trim();if(!s){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}b(),g();try{const r=await m(s);r.hits.length===0?a.warning({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(r.hits)}catch{a.error({title:"Error",message:"Failed to load images",position:"topRight"})}finally{h()}});
//# sourceMappingURL=index.js.map
