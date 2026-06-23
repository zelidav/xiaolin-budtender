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
      var master = actx.createGain(); master.gain.value = 0.95; master.connect(actx.destination);
      // metallic strike transient — short filtered noise burst
      var len = Math.floor(actx.sampleRate * 0.22);
      var nb = actx.createBuffer(1, len, actx.sampleRate), d = nb.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = (Math.random()*2 - 1) * Math.pow(1 - i/len, 2.2);
      var ns = actx.createBufferSource(); ns.buffer = nb;
      var nf = actx.createBiquadFilter(); nf.type = "bandpass"; nf.frequency.value = 1400; nf.Q.value = 0.7;
      var ng = actx.createGain(); ng.gain.value = 0.45;
      ns.connect(nf); nf.connect(ng); ng.connect(master); ns.start(t);
      // inharmonic partials give the gong its shimmer + long bloom
      var partials = [1, 2.01, 2.78, 3.95, 5.12, 6.85, 8.3], base = 68;
      partials.forEach(function(r, i){
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = "sine";
        o.frequency.value = base * r * (1 + (i ? 0.005 * (i % 2 ? 1 : -1) : 0)); // detune → beating
        var peak = 0.55 / (i + 1.25);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(peak, t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 3.6 + i * 0.18);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + 4.1);
      });
    } catch(e){}
  }
  // Browsers block audio until a user gesture — unlock on first touch and ring if a gate is up.
  var unlocked = false;
  function unlock(){
    if (unlocked) return; unlocked = true;
    try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === "suspended") actx.resume(); } catch(e){}
    if (document.getElementById("xl-gate")) gong();
  }
  ["pointerdown","touchstart","keydown"].forEach(function(ev){ window.addEventListener(ev, unlock, {once:true}); });

  function play(word, sub, quick, img){
    var ex = document.getElementById("xl-gate"); if (ex && ex.parentNode) ex.parentNode.removeChild(ex);
    var g = document.createElement("div");
    g.id = "xl-gate"; if (quick) g.className = "xl-quick";
    var ds = img ? " style=\"background-image:url('" + img + "')\"" : "";
    g.innerHTML =
      "<div class='xl-burst'></div><div class='xl-rays'></div>" +
      "<div class='xl-smoke'><span></span><span></span><span></span><span></span><span></span></div>" +
      "<div class='xl-door l'" + ds + "></div><div class='xl-door r'" + ds + "></div><div class='xl-seam'></div>" +
      "<div class='xl-crest'><img class='xl-seal' src='img/xiaolin-logo.png' alt=''>" +
      "<div class='xl-kick'>Made in Xiaolin</div>" +
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
    setTimeout(close, quick ? 3900 : 5500);
  }
  window.XLGate = { play: play };

  // Main gate — once per browser session
  function mainGate(){ play("XIAOLIN", "Welcome to the High Council"); }  // every load (replays on refresh)
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
    // Each Chamber's gate grows more ornate (jade → jewels → gold). Ch I = the base gate.
    var img = sec.module > 1 ? ("img/gate-ch" + sec.module + ".jpg") : "img/gate-doors.jpg";
    play(mod ? mod.title : "Chamber", mod ? mod.level : "Entering", true, img);
  });
})();
