const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.setAttribute("disabled",!0),e.addEventListener("click",(function(){addColor=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),d.removeAttribute("disabled"),e.setAttribute("disabled",!0)})),d.addEventListener("click",(function(){clearInterval(addColor),e.removeAttribute("disabled"),d.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.2154e0ea.js.map