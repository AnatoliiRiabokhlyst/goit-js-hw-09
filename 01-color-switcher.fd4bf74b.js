const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let o=null;function d(t,o){e.disabled=t,n.disabled=o}n.disabled=!0,e.addEventListener("click",(function(){o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),d(!0,!1)})),n.addEventListener("click",(function(){clearInterval(o),d(!1,!0)}));
//# sourceMappingURL=01-color-switcher.fd4bf74b.js.map
