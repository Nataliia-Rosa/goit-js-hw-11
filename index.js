import{S as m,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const d="47394057-a123a8d6d5d39dc35fe9d8ef3",p="https://pixabay.com/api/";function g(t,o=1,s=12){const a=new URLSearchParams({key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}),r=`${p}?${a.toString()}`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Failed to fetch images. Please try again later");return e.json()}).then(e=>e).catch(e=>console.log(e.message))}function h(t){return t.map(({webformatURL:o,largeImageURL:s,tags:a,likes:r,views:e,comments:i,downloads:f})=>`
    <a href="${s}" class="gallery-item">
      <div class="photo-card">
        <img src="${o}" alt="${a}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r}</p>
          <p class="info-item"><b>Views</b> ${e}</p>
          <p class="info-item"><b>Comments</b> ${i}</p>
          <p class="info-item"><b>Downloads</b> ${f}</p>
        </div>
      </div>
    </a>
  `).join("")}function y(t){t.innerHTML=""}const n=document.querySelector("#search-form"),u=document.querySelector(".gallery"),b=document.querySelector(".loader");let L=new m(".gallery a");n.dataset.page="1";n.dataset.query="";n.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.searchQuery.value.trim();if(!o){c.error({title:"Error",position:"bottomCenter",message:"Please enter a search term!"});return}n.dataset.query=o,n.dataset.page="1",y(u),l(!0),g(o,1).then(s=>{if(l(!1),s.hits.length===0){c.error({position:"bottomCenter",message:"Sorry, there are no images matching </br> your search query. Please, try again!"}),n.elements.searchQuery.value="";return}const a=h(s.hits);u.insertAdjacentHTML("beforeend",a),L.refresh()}).catch(s=>{l(!1),c.error({title:"Error",message:s.message})}),n.elements.searchQuery.value=""});function l(t){b.style.display=t?"block":"none"}
//# sourceMappingURL=index.js.map
