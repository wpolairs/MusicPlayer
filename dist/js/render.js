!function(t){function r(e,n){let t=document.querySelector(".tatoltime"),r=document.querySelector(".curtime"),o=document.querySelector(".frontBg"),c=document.querySelector(".circle");var i=(frontBgWidth=n/e*100,frontBgWidth),e=l(e);o.style.width=i+"%",c.style.left=i+"%",t.innerHTML=e;n=l(n);r.innerHTML=n}function l(e){let n=Math.floor(e/60),t=e%60;return n=n<10?"0"+n:n,t=t<10?"0"+t:t,n+":"+t}t.render=function(e,n){!function(e){t.blurImg(e);const n=document.querySelector(".songimg img");n.src=e}(e.image),function(e){var n=e.name,t=e.singer,e=e.album;const r=document.querySelector(".songinfo").children;r[0].innerHTML=n,r[1].innerHTML=t,r[2].innerHTML=e}(e),function(e){let n=document.querySelector(".control li");"true"===e?n.className="like":"false"===e&&(n.className="")}(e.isLike),r(e.duration,n)}}(window.player||(window.player={}));