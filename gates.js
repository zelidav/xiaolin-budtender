/* Xiaolin Gate Intro - plays every visit, tap-to-skip */
(function(){
  function build(){
    var g=document.createElement('div');
    g.id='xl-gate';
    g.innerHTML="<div class='xl-door l'></div><div class='xl-door r'></div><div class='xl-seam'></div><div class='xl-crest'><div class='xl-word'>XIAOLIN</div><div class='xl-sub'>High Council Academy</div></div><div class='xl-tap'>tap to enter</div>";
    document.body.appendChild(g);
    function close(){ if(!g.classList.contains('xl-skip')){ g.classList.add('xl-skip'); } setTimeout(function(){ if(g&&g.parentNode){ g.parentNode.removeChild(g); } }, 600); }
    g.addEventListener('click', close);
    setTimeout(close, 3200);
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', build); } else { build(); }
})();
