!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.setAttribute("disabled"),e.addEventListener("click",(function(){addColor=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o.removeAttribute("disabled"),e.setAttribute("disabled")})),o.addEventListener("click",(function(){clearInterval(addColor),e.removeAttribute("disabled"),o.setAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.9854f253.js.map
