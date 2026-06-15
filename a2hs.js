/* Add-to-Home-Screen banner — shows for the first ~10s on a visit so the app can
 * be installed and launch fullscreen (standalone). Hidden if already installed. */
(function(){
  // Register the service worker — REQUIRED for the install prompt / Add to Home Screen.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); });
  }

  var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone;
  if (standalone) return;                                   // already installed → no banner
  var DUR = 12000, deferred = null;
  var ua = navigator.userAgent;
  var isiOS = /iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && "ontouchend" in document); // iPadOS reports as Mac
  var isAndroid = /android/i.test(ua);

  window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault(); deferred = e;
    var b = document.getElementById("a2-add");
    if (b){ b.textContent = "Add"; b.dataset.ready = "1"; }   // native prompt now available
  });
  window.addEventListener("appinstalled", function(){ hide(); });

  function hide(){
    var el = document.getElementById("a2hs"); if (!el) return;
    el.classList.remove("show"); setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, 380);
  }
  function show(){
    if (document.getElementById("a2hs")) return;
    var hint = isiOS
      ? "Tap the Share icon, then “Add to Home Screen” for the full-screen temple."
      : "Install for the full-screen temple experience.";
    var el = document.createElement("div"); el.id = "a2hs";
    el.innerHTML =
      "<img src='img/icon-192.png' alt=''>" +
      "<div class='a2-tx'><b>Add Xiaolin to your Home Screen</b><span>" + hint + "</span></div>" +
      (isiOS ? "" : "<button id='a2-add'>Add</button>") +
      "<button id='a2-x' aria-label='dismiss'>✕</button>";
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add("show"); });

    var add = document.getElementById("a2-add");
    if (add){
      if (deferred) add.dataset.ready = "1";                  // prompt fired before banner rendered
      add.onclick = function(){
        if (deferred){ deferred.prompt(); deferred.userChoice.then(hide); deferred = null; return; }
        // Native prompt not ready (or unsupported browser) → tell them where the menu item is.
        var sp = el.querySelector(".a2-tx span");
        if (sp) sp.textContent = isAndroid
          ? "Open the browser menu (⋮) and tap “Add to Home screen” / “Install app.”"
          : "Open your browser menu and choose “Add to Home Screen.”";
        clearTimeout(el._t); el._t = setTimeout(hide, 8000);  // give them time to read
      };
    }
    document.getElementById("a2-x").onclick = hide;
    el._t = setTimeout(hide, DUR);                            // first ~12 seconds only
  }

  function go(){ setTimeout(show, 1500); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
