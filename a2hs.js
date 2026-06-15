/* Add-to-Home-Screen banner.
 * Android/desktop: native install prompt.
 * iOS: there is NO programmatic install — guide the user to Safari's Share → Add to
 *      Home Screen, and detect when they're in a browser that can't do it at all. */
(function(){
  // Register the service worker — REQUIRED for the install prompt / Add to Home Screen.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); });
  }

  var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone;
  if (standalone) return;                                   // already installed → no banner

  var ua = navigator.userAgent;
  var isiOS = /iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && "ontouchend" in document);
  var isAndroid = /android/i.test(ua);
  // On iOS, Add-to-Home-Screen only exists in REAL Safari — not Chrome (CriOS), Firefox
  // (FxiOS), Edge (EdgiOS), or in-app webviews (Instagram/Facebook/Gmail/etc.).
  var iosOtherBrowser = /crios|fxios|edgios|opios/i.test(ua);
  var inAppWebview = /fban|fbav|instagram|line\/|micromessenger|gsa\//i.test(ua) ||
                     (isiOS && !/safari/i.test(ua));
  var iosCanInstall = isiOS && !iosOtherBrowser && !inAppWebview;
  var DUR = 15000, deferred = null;

  window.addEventListener("beforeinstallprompt", function(e){
    e.preventDefault(); deferred = e;
    var b = document.getElementById("a2-add"); if (b) b.dataset.ready = "1";
  });
  window.addEventListener("appinstalled", function(){ hide(); });

  function hide(){
    var el = document.getElementById("a2hs"); if (!el) return;
    el.classList.remove("show"); setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, 380);
  }

  var SHARE_SVG = "<svg viewBox='0 0 24 28' width='16' height='18' aria-hidden='true'>" +
    "<path d='M12 1.5 7.8 5.7l1.4 1.4L11 5.3V16h2V5.3l1.8 1.8 1.4-1.4z' fill='#3b9bff'/>" +
    "<path d='M5 10H3v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10h-2v15H5z' fill='#3b9bff'/></svg>";

  function show(){
    if (document.getElementById("a2hs")) return;
    var el = document.createElement("div"); el.id = "a2hs";

    if (inAppWebview || iosOtherBrowser){
      // Can't install here at all — get them into Safari first.
      el.className = "a2-top";
      el.innerHTML =
        "<img src='img/icon-192.png' alt=''>" +
        "<div class='a2-tx'><b>Open in Safari to install</b>" +
        "<span>" + (iosOtherBrowser
          ? "Add to Home Screen needs Safari. Tap ⋯ and choose “Open in Safari,” then Share → Add to Home Screen."
          : "Tap the ••• / Share menu and choose “Open in Safari,” then Share → Add to Home Screen.") +
        "</span></div>" +
        "<button id='a2-copy'>Copy link</button>" +
        "<button id='a2-x' aria-label='dismiss'>✕</button>";
    } else if (iosCanInstall){
      // iOS Safari — coach to the Share button at the BOTTOM of the screen.
      el.className = "a2-bottom a2-ios";
      el.innerHTML =
        "<button id='a2-x' aria-label='dismiss'>✕</button>" +
        "<div class='a2-row'><img src='img/icon-192.png' alt=''>" +
        "<div class='a2-tx'><b>Add Xiaolin to your Home Screen</b>" +
        "<span>For the full-screen temple, install the app:</span></div></div>" +
        "<ol class='a2-steps'>" +
        "<li>Tap the Share button " + SHARE_SVG + " below</li>" +
        "<li>Scroll and tap <b>Add to Home Screen</b></li>" +
        "<li>Tap <b>Add</b></li></ol>" +
        "<div class='a2-point'>▾</div>";
    } else {
      // Android / desktop — native prompt.
      el.className = "a2-top";
      el.innerHTML =
        "<img src='img/icon-192.png' alt=''>" +
        "<div class='a2-tx'><b>Add Xiaolin to your Home Screen</b>" +
        "<span>Install for the full-screen temple experience.</span></div>" +
        "<button id='a2-add'>Add</button>" +
        "<button id='a2-x' aria-label='dismiss'>✕</button>";
    }

    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add("show"); });

    var add = document.getElementById("a2-add");
    if (add){
      if (deferred) add.dataset.ready = "1";
      add.onclick = function(){
        if (deferred){ deferred.prompt(); deferred.userChoice.then(hide); deferred = null; return; }
        var sp = el.querySelector(".a2-tx span");
        if (sp) sp.textContent = isAndroid
          ? "Open the browser menu (⋮) and tap “Add to Home screen” / “Install app.”"
          : "Open your browser menu and choose “Add to Home Screen.”";
        clearTimeout(el._t); el._t = setTimeout(hide, 9000);
      };
    }
    var copy = document.getElementById("a2-copy");
    if (copy){
      copy.onclick = function(){
        var done = function(){ copy.textContent = "Copied ✓"; };
        try { navigator.clipboard.writeText(location.href).then(done, done); }
        catch(e){ done(); }
        clearTimeout(el._t); el._t = setTimeout(hide, 9000);
      };
    }
    var x = document.getElementById("a2-x"); if (x) x.onclick = hide;

    // iOS install card stays longer (there are steps to follow); others ~15s.
    el._t = setTimeout(hide, iosCanInstall ? 22000 : DUR);
  }

  function go(){ setTimeout(show, 1500); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
