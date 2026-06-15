/* Add-to-Home-Screen banner — shows for the first 10s on mobile, so the app can
 * be installed and launch fullscreen (standalone). Hidden if already installed. */
(function(){
  var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone;
  if (standalone) return;                                   // already installed → no banner
  var DUR = 10000, deferred = null;
  var isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  var isMobile = isiOS || /android|mobile/i.test(navigator.userAgent);

  window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault(); deferred = e;
    var b = document.getElementById("a2-add"); if (b) b.style.display = "inline-block";
  });

  function hide(){
    var el = document.getElementById("a2hs"); if (!el) return;
    el.classList.remove("show"); setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, 380);
  }
  function show(){
    if (document.getElementById("a2hs")) return;
    var el = document.createElement("div"); el.id = "a2hs";
    el.innerHTML =
      "<img src='img/icon-192.png' alt=''>" +
      "<div class='a2-tx'><b>Add Xiaolin to your Home Screen</b>" +
      "<span>" + (isiOS ? "Tap the Share icon, then “Add to Home Screen” for the full-screen temple." : "Install for the full-screen temple experience.") + "</span></div>" +
      (isiOS ? "" : "<button id='a2-add'>Add</button>") +
      "<button id='a2-x' aria-label='dismiss'>✕</button>";
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add("show"); });
    var add = document.getElementById("a2-add");
    if (add){
      if (!deferred) add.style.display = "none";
      add.onclick = function(){ if (deferred){ deferred.prompt(); deferred.userChoice.then(hide); deferred = null; } else hide(); };
    }
    document.getElementById("a2-x").onclick = hide;
    setTimeout(hide, DUR);                                   // first 10 seconds only
  }

  function go(){ setTimeout(show, 1200); }   // first ~10s of the visit
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
