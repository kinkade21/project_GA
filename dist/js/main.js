(()=>{"use strict";(e=>{const t=document.querySelector(".count_1 span"),n=document.querySelector(".count_2 span"),o=document.querySelector(".count_3 span"),l=document.querySelector(".count_4 span"),c=()=>{let e=(()=>{let e=(new Date("01 october 2022")-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining<=0?(t.textContent="00",n.textContent="00",o.textContent="00",l.textContent="00"):(t.textContent=s(e.days),n.textContent=s(e.hours),o.textContent=s(e.minutes),l.textContent=s(e.seconds)),setInterval((()=>{e.timeRemaining>0&&c()}),1e3)},s=e=>e<10?"0"+e:e;c()})(),(()=>{const e=document.querySelector(".text-center"),t=document.querySelector(".overlay"),n=document.documentElement.clientHeight;e.addEventListener("click",(e=>{e.preventDefault();let o=e.target.closest(".sertificate-document"),l=o.children[0].src.split("/"),c=`${l.slice(0,-1).join("/")}/original/${l.slice(-1).toString().trim()}`,s=document.createElement("div");s.className="bigSert",s.innerHTML=`\n            <a href=${o.href} class="bigLink">\n                <img src=${c} class="bigImage" alt="">\n            </a>\n            <span class="sert-close">X</span>\n            `;let r=n-40,i=n/3*2;s.style.height=`${r}px`,s.style.width=`${i}px`,t.style.display="block",document.body.prepend(s),document.querySelector(".sert-close").addEventListener("click",(e=>{e.preventDefault(),s.remove(),t.style.display="none"})),t.addEventListener("click",(e=>{e.preventDefault(),s.remove(),t.style.display="none"}))}))})(),(()=>{const e=document.querySelector(".smooth-scroll");window.addEventListener("scroll",(function(){let t=window.pageYOffset,n=document.documentElement.clientHeight;t>n&&(e.style.display="block"),t<n&&(e.style.display="none")})),e.addEventListener("click",(function e(){let t;window.pageYOffset>0?(window.scrollBy(0,-50),t=setTimeout(e,.01)):clearTimeout(t)}))})(),(()=>{const e=document.getElementById("call"),t=document.querySelector(".header-modal"),n=document.querySelector(".overlay"),o=document.querySelector(".header-modal__close");e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",n.style.display="block"})),o.addEventListener("click",(()=>{t.style.display="none",n.style.display="none"})),n.addEventListener("click",(()=>{t.style.display="none",n.style.display="none"}))})()})();