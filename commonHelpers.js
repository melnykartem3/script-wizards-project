import{S as l,N as a,K as d,M as v,i as b}from"./assets/vendor-1aca9ae5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g=document.querySelectorAll(".nav-links, .header-order-link"),y=document.querySelectorAll(".nav-links"),L=document.querySelector(".nav-general-link"),w=document.querySelector(".nav-links-wrapper");for(const e of g)e.addEventListener("click",S);function S(e){e.preventDefault();const t=this.getAttribute("href"),s=document.querySelector(t).offsetTop;window.scrollTo({top:s,behavior:"smooth"})}L.addEventListener("click",function(e){e.preventDefault(),y.forEach(t=>{t.classList.toggle("show")})});w.addEventListener("mouseover",function(){y.forEach(e=>{e.classList.add("show")})});w.addEventListener("mouseout",function(){y.forEach(e=>{e.classList.remove("show")})});new l(".swiper-container",{modules:[a,d],slidesPerView:4,allowTouchMove:!0,slideToClickedSlide:!0,observer:!0,observeParents:!0,spaceBetween:16,grabCursor:!0,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});const f=new l(".swiper-projects",{modules:[a,d,v],navigation:{prevEl:".arrow-btn-left",nextEl:".arrow-btn-right"},watchOverflow:!0,slidesPerGroup:1,slidesPerView:1,speed:300,mousewheel:{invert:!0},keyboard:{enabled:!0}});new l(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[a,d,v],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"about-slide-active",navigation:{nextEl:".about-swiper-button"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});const q=document.querySelector(".swiper-projects");q.addEventListener("keydown",e=>{e.key==="Tab"&&(f.isEnd?f.slideTo(0):f.slideNext())});l.use([a,d,v]);const E="https://portfolio-js.b.goit.study/api/reviews",k=document.querySelector(".reviews-list");fetch(E).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{k.innerHTML=P(e),new l(".swiper",{direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-list-item",speed:300,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".reviews-btn-left",nextEl:".reviews-btn-right",preventClicks:!1}})}).catch(e=>console.log(e));function P(e){return e.map(({avatar_url:t,_id:s,author:r,review:o})=>`
        <li class="reviews-list-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${t}"
            alt="${s}"
            width="48"
            height="48"
            loading="lazy"
          />
          <h3 class="reviews-item-title">${r}</h3>
          <p class="reviews-item-text">${o}</p>
        </li>`).join("")}document.querySelector(".faq-column-line");document.querySelectorAll(".faq-list-item");document.querySelector(".faq-list");const x=document.querySelectorAll(".faq-list-item-btn");x.forEach(function(e){e.addEventListener("click",function(){const t=e.parentElement,s=t.querySelector(".faq-list-item-text"),r=e.querySelector(".faq-svg"),o=t.querySelector(".faq-list-item-title");s.classList.contains("is-active")?(s.classList.remove("is-active"),s.classList.add("faq-mobile-text"),o.classList.remove("faq-title-is-active"),e.parentElement.classList.remove("close-fqa-list-item-laptop"),r.classList.add("close-svg")):(s.classList.remove("faq-mobile-text"),s.classList.add("is-active"),o.classList.add("faq-title-is-active"),r.classList.remove("close-svg"),e.parentElement.classList.add("close-fqa-list-item-laptop"))})});const A=document.querySelectorAll(".accordion-header"),I=document.querySelector(".accordion-panel"),T=document.querySelector(".about-ac"),V=document.querySelector(".mobile-open-ac");I.style.maxHeight="100%";T.classList.add("active");V.style.transform="rotate(180deg)";A.forEach(e=>{e.addEventListener("click",function(){const t=this.closest(".about-ac"),s=t.querySelector(".accordion-panel"),r=this.querySelector(".mobile-open-ac");t.classList.toggle("active"),t.classList.contains("active")?(s.style.maxHeight=s.scrollHeight+"px",r.style.transform="rotate(180deg)"):(s.style.maxHeight="0",r.style.transform="rotate(0deg)")})});document.querySelector(".about-swiper-button").addEventListener("click",()=>{const e=document.querySelector(".swiper-slide.active"),t=e.nextElementSibling;if(t)e.classList.remove("active"),t.classList.add("active");else{const s=document.querySelector(".swiper-slide");e.classList.remove("active"),s.classList.add("active")}});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".js-menu-link"),o=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;n?document.body.classList.remove("no-scroll"):document.body.classList.add("no-scroll"),t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",o),s.addEventListener("click",o),r.forEach(n=>{n.addEventListener("click",c=>{c.preventDefault();const i=n.getAttribute("href").substring(1),u=document.getElementById(i);u&&(u.scrollIntoView({behavior:"smooth"}),o())})}),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body),document.body.classList.remove("no-scroll"))})})();const h=document.querySelector(".footer-form");h.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".footer-modal-background"),s=document.querySelector(".footer-input-success-message"),r=document.querySelector(".footer-input-error-message"),o=document.getElementById("email"),n=document.getElementById("comment");o.classList.remove("footer-input-error"),r.style.display="none";const c={email:o.value,comment:n.value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(i=>(i.ok?(t.classList.add("footer-modal-is-open"),document.querySelector(".footer-modal-btn").addEventListener("click",function(){t.classList.remove("footer-modal-is-open")}),document.addEventListener("keydown",function(m){m.key==="Escape"&&t.classList.remove("footer-modal-is-open")}),t.addEventListener("click",function(m){m.target===t&&t.classList.remove("footer-modal-is-open")}),o.classList.add("footer-input-success"),s.style.display="block",setTimeout(function(){s.style.display="none",o.classList.remove("footer-input-success")},1e4),h.reset()):(b.error({title:"Oops!",message:"Please, enter a valid email address"}),o.classList.add("footer-input-error"),r.style.display="block"),i.json())).then(i=>i).catch(i=>i)});const j=document.querySelectorAll(".covers-scroller-inner"),M=document.querySelector(".covers"),p=Array.from(j);function O(){p.forEach(e=>{Array.from(e.children).forEach(s=>{const r=s.cloneNode(!0);r.setAttribute("aria-hidden",!0),e.appendChild(r)})})}O();const C={threshold:.5,rootMargin:"-40px"},B=new IntersectionObserver(function(e,t){e.forEach(s=>{s.isIntersecting?p.forEach(r=>{r.style.animationPlayState="running"}):p.forEach(r=>{r.style.animationPlayState="paused"})})},C);B.observe(M);
//# sourceMappingURL=commonHelpers.js.map
