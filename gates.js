/* Made in Xiaolin — temple-gate animations.
 * Main gate (once per session) + per-Chamber gates, with a gong + sound toggle + skip. */
(function(){
  var SND = "xl_sound";
  var soundOn = localStorage.getItem(SND) !== "off";
  var actx;

  function gong(){
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      var t = actx.currentTime;
      [82, 164, 246, 330].forEach(function(f, i){
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = i ? "sine" : "triangle"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.32 / (i + 1), t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
        o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 2.7);
      });
    } catch(e){}
  }

  function play(word, sub, quick){
    var ex = document.getElementById("xl-gate"); if (ex && ex.parentNode) ex.parentNode.removeChild(ex);
    var g = document.createElement("div");
    g.id = "xl-gate"; if (quick) g.className = "xl-quick";
    g.innerHTML =
      "<div class='xl-door l'></div><div class='xl-door r'></div><div class='xl-seam'></div>" +
      "<div class='xl-crest'><img class='xl-seal' src='img/medallion.jpg' alt=''>" +
      "<div class='xl-word'>" + word + "</div><div class='xl-sub'>" + sub + "</div></div>" +
      "<button class='xl-snd' id='xl-snd' aria-label='sound'>" + (soundOn ? "🔊" : "🔇") + "</button>" +
      "<div class='xl-tap'>tap to enter · </div>";
    document.body.appendChild(g);
    gong();

    var snd = document.getElementById("xl-snd");
    snd.addEventListener("click", function(e){
      e.stopPropagation();
      soundOn = !soundOn; localStorage.setItem(SND, soundOn ? "on" : "off");
      snd.textContent = soundOn ? "🔊" : "🔇"; if (soundOn) gong();
    });

    var done = false;
    function close(){ if (done) return; done = true; g.classList.add("xl-skip");
      setTimeout(function(){ if (g.parentNode) g.parentNode.removeChild(g); }, 600); }
    g.addEventListener("click", close);
    setTimeout(close, quick ? 2200 : 3200);
  }
  window.XLGate = { play: play };

  // Main gate — once per browser session
  function mainGate(){
    if (sessionStorage.getItem("xl_main")) return;
    sessionStorage.setItem("xl_main", "1");
    play("XIAOLIN", "High Council Academy");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mainGate);
  else mainGate();

  // Chamber gates — when entering a new Chamber (once per Chamber per session)
  var lastChamber = null;
  window.addEventListener("hashchange", function(){
    var m = location.hash.match(/^#\/training\/(\d+)$/); if (!m) return;
    var X = window.XIAOLIN; if (!X || !X.sections) return;
    var n = +m[1];
    var sec = X.sections.find(function(s){ return s.n === n; }); if (!sec) return;
    if (sec.module === lastChamber) return; lastChamber = sec.module;
    var key = "xl_ch_" + sec.module; if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    var mod = (X.modules || []).find(function(x){ return x.id === sec.module; });
    play(mod ? mod.title : "Chamber", mod ? mod.level : "Entering", true);
  });
})();
