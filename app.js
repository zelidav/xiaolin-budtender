/* Made in Xiaolin — Roller Academy. Client-only SPA (localStorage). MVP, no backend yet. */
const PASS = 0.8;
/* ---------- multi-user store (MVP: localStorage; backend phase = real sync) ---------- */
const DB_KEY = "xiaolin_db_v2", CUR_KEY = "xiaolin_cur_v2", ADMIN_KEY = "xiaolin_admin_v2";
const ADMIN_CODE = "XHC-ADMIN";   // access code embedded in admin links
function loadDB(){ try { return JSON.parse(localStorage.getItem(DB_KEY)); } catch(e){ return null; } }
function saveDB(){ try { localStorage.setItem(DB_KEY, JSON.stringify(DB)); } catch(e){} }

function seedDB(){
  const stores = [
    { id: "xiaolin-disp", name: "Xiaolin Dispensary" },
    { id: "terp-bros",    name: "Terp Bros Astoria" },
    { id: "alto-canna",   name: "Alto Canna NYC" },
    { id: "daves",        name: "Dave's Dispensary" },
  ];
  const allSec = {}; for (let i=1;i<=21;i++) allSec[i]=true;
  const sub = (keys)=>{ const o={}; keys.forEach(k=>o[k]=true); return o; };
  const sc = (keys)=>{ const o={}; keys.forEach(k=>o[k]={correct:5,total:5,pct:100}); return o; };
  const sale = (sku,prod,amt,earned,receipt)=>({ product:prod, sku, amount:amt, earned, receipt, verified:true, date:"2026-06-09" });
  const mk = (id,name,email,store,role,passed,moduleBonus,sales,scores)=>{
    const pts = Object.keys(moduleBonus).reduce((a,k)=>a+(XIAOLIN.modules.find(m=>m.id==k)||{bonus:0}).bonus,0)
              + sales.reduce((a,s)=>a+(s.earned||0),0);
    return { id, name, email, store, role, joined:true, passed, moduleBonus, sales, scores: scores||{}, points: pts, code: makeCode(name,store), created:"2026-06-09" };
  };
  const users = {};
  users["david-z"] = mk("david-z", "David Z", "david@canismajorpartners.com", "Xiaolin Dispensary", "admin",
    allSec, {1:1,2:1,3:1,4:1,5:1,6:1},
    [ sale("GODFATHER","The Godfather","420.00",255,"img/receipts/r-david.png"),
      sale("CAPO","The Capo","195.00",130,"img/receipts/r-david.png"),
      sale("BAMBINO","The Bambino — 2pk","37.00",20,"img/receipts/r-david.png") ], sc(Array.from({length:21},(_,i)=>i+1)));
  users["chris-ls"] = mk("chris-ls", 'Christopher "LS" Louie', "ls@madeinxiaolin.com", "Xiaolin Dispensary", "admin",
    allSec, {1:1,2:1,3:1,4:1,5:1,6:1},
    [ sale("GODFATHER","The Godfather","420.00",255,"img/receipts/r-chris.png"),
      sale("GODFATHER","The Godfather","420.00",255,"img/receipts/r-chris.png"),
      sale("GOOMAH","The Goomah","120.00",70,"img/receipts/r-chris.png") ], sc(Array.from({length:21},(_,i)=>i+1)));
  users["maria-c"] = mk("maria-c", "Maria Chen", "", "Terp Bros Astoria", "budtender",
    sub([1,2,3,4,5,6,7,8,9,10,11]), {1:1,2:1}, [ sale("CAPO","The Capo","195.00",130,"img/receipts/r-david.png") ], sc([1,2,3,4,5,6,7,8,9,10,11]));
  users["jay-r"]   = mk("jay-r", "Jay Rivera", "", "Alto Canna NYC", "budtender",
    sub([1,2,3,4]), {1:1}, [ sale("GOOMAH","The Goomah","120.00",70,"img/receipts/r-chris.png") ], sc([1,2,3,4]));
  users["sam-k"]   = mk("sam-k", "Sam Kim", "", "Dave's Dispensary", "budtender",
    allSec, {1:1,2:1,3:1,4:1,5:1,6:1}, [ sale("BAMBINO","The Bambino — 2pk","37.00",20,"img/receipts/r-david.png") ], sc(Array.from({length:21},(_,i)=>i+1)));
  users["tara-w"]  = mk("tara-w", "Tara White", "", "Terp Bros Astoria", "budtender",
    sub([1,2]), {}, [], sc([1,2]));
  return { stores, users, v: 2 };
}

let DB = loadDB() || seedDB();
saveDB();
let CURRENT = localStorage.getItem(CUR_KEY) || null;
let S = (CURRENT && DB.users[CURRENT]) ? DB.users[CURRENT] : null;
function saveState(s){ if (s && s.id){ DB.users[s.id] = s; saveDB(); } }
function setCurrent(uid){ CURRENT = uid; localStorage.setItem(CUR_KEY, uid); S = DB.users[uid] || null; }
function isAdmin(){ return localStorage.getItem(ADMIN_KEY) === "1" || (S && S.role === "admin"); }
function uid(name, store){ return (name+"-"+store).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"") + "-" + (Object.keys(DB.users).length); }
function freshState(name, store){
  return { id: uid(name,store), name, store, role:"budtender", joined: true, passed: {}, points: 0, code: null, sales: [], moduleBonus: {}, scores: {}, created: "2026-06-09" };
}

// Deterministic per-roller code (no Date/random needed for MVP).
function makeCode(name, store){
  const seed = (name + store).toUpperCase().replace(/[^A-Z0-9]/g,"");
  let h = 0; for (let i=0;i<seed.length;i++){ h = (h*31 + seed.charCodeAt(i)) >>> 0; }
  const suffix = (h % 100000).toString().padStart(5,"0");
  return XIAOLIN.rewards.discountCodeStem + suffix;
}
function allPassed(){ return XIAOLIN.sections.every(s => S && S.passed[s.n]); }
function passedCount(){ return XIAOLIN.sections.filter(s => S && S.passed[s.n]).length; }
function saleCount(){ return S && S.sales ? S.sales.length : 0; }
function pts(){ return S ? S.points : 0; }
// Points economy: modules pay 50/75/125 (250 total), 1 pt per $ sold, 1000 → High Council.
const COUNCIL_PTS = () => XIAOLIN.rewards.councilPts;
function tierUnlocked(tier){ return pts() >= tier.pts; }
function councilUnlocked(){ return pts() >= COUNCIL_PTS(); }
function codeUnlocked(){ return pts() >= (XIAOLIN.tiers.find(t=>t.key==="code")||{pts:100}).pts; }
function nextTier(){ return XIAOLIN.tiers.find(t => pts() < t.pts) || null; }

/* ---------- training modules ---------- */
function moduleSecs(id){ return XIAOLIN.sections.filter(s => s.module === id && !s.capstone); }
function moduleDone(id){ return moduleSecs(id).every(s => S && S.passed[s.n]); }
function moduleOf(n){ const s = XIAOLIN.sections.find(x=>x.n===n); return s ? s.module : null; }
// Award any newly-completed module's bonus (once each). Returns the module just completed, if any.
function awardModuleBonus(){
  let justDone = null;
  XIAOLIN.modules.forEach(m => {
    if (moduleDone(m.id) && !S.moduleBonus[m.id]){
      S.moduleBonus[m.id] = true; S.points += m.bonus; justDone = m;
    }
  });
  if (justDone) saveState(S);
  return justDone;
}

/* ---------- tiny hash router ---------- */
function go(hash){ location.hash = hash; }
function render(){
  const app = document.getElementById("app");
  const h = location.hash || "#/";
  // admin panel is reachable without a logged-in budtender
  if (h === "#/admin" || h.indexOf("#/admin/") === 0){ if (isAdmin()) return viewAdmin(app); return go("#/"); }
  // gate: must join before anything else
  if (!S || !S.joined){ if (h !== "#/") return go("#/"); }
  const m = h.match(/^#\/training\/(\d+)\/quiz$/);
  if (m) return viewQuiz(app, +m[1]);
  const t = h.match(/^#\/training\/(\d+)$/);
  if (t) return viewSection(app, +t[1]);
  switch(h){
    case "#/dashboard": return viewDashboard(app);
    case "#/training": return viewTrainingHub(app);
    case "#/lineup": return viewLineup(app);
    case "#/sale": return viewSale(app);
    case "#/reward": return viewReward(app);
    case "#/exchange": return viewExchange(app);
    default: return S && S.joined ? viewDashboard(app) : viewCover(app);
  }
}
window.addEventListener("hashchange", render);

/* ---------- shared chrome ---------- */
function topbar(){
  const p = S ? S.points : 0;
  return `<div class="topbar">
    <a class="brand" href="#/dashboard" style="text-decoration:none">
      <img src="img/xiaolin-logo.png" alt="Made in Xiaolin">
      <div><div class="nm">Made in Xiaolin</div><div class="ac">High Council Academy</div></div>
    </a>
    <div style="display:flex;align-items:center;gap:12px">
      ${isAdmin()?`<a href="#/admin" class="admin-chip">ADMIN</a>`:""}
      <div class="pts"><b>${p}</b>HC Points</div>
    </div>
  </div>`;
}
function foot(){ return `<div class="foot">Rolled Proper · Made in New York · Warwick, NY</div>`; }

/* ---------- cover / signup ---------- */
function viewCover(app){
  app.innerHTML = `
  <div class="cover">
    <img class="seal" src="img/xiaolin-logo.png" alt="Made in Xiaolin">
    <div class="kicker">Budtender Program</div>
    <h1>The High Council<br>Academy</h1>
    <div class="promise">Learn the craft. Earn the merch.</div>
    <div class="marque"><span>High Times</span><span class="x">×</span><span>Playboy</span><span class="x">×</span><span>Forbes</span></div>
    <p class="sub">The original creative rolling studio — now <strong>Made in New York</strong>. Get certified, sell, and rack up points to earn real <strong>Xiaolin × your shop</strong> gear and a seat on the <strong>High Council</strong>.</p>

    <div class="earn-strip">
      <div class="es-head">What you're playing for</div>
      <div class="es-row">
        <div class="es-item"><div class="es-pic"><span>🏷️</span></div><div class="es-c">50% Code</div><div class="es-p">100 pts</div></div>
        <div class="es-item"><div class="es-pic"><img src="img/merch/tote-red.png" alt="tote"></div><div class="es-c">Tote</div><div class="es-p">400 pts</div></div>
        <div class="es-item"><div class="es-pic"><img src="img/merch/hat-red.png" alt="hat"></div><div class="es-c">Trucker Hat</div><div class="es-p">700 pts</div></div>
        <div class="es-item"><div class="es-pic"><img src="img/medallion.jpg" alt="council"></div><div class="es-c">High Council</div><div class="es-p">1000 pts</div></div>
      </div>
      <div class="es-rule">Earn per sale (up to <b>255</b>) · the 6 Chambers pay up to <b>1,000</b></div>
    </div>
  </div>
  <div class="card">
    <h2>Get Rolling</h2>
    <p class="sub" style="margin-bottom:6px">Two minutes. No corporate hoops.</p>
    <div class="field"><label>Your Name</label><input id="f_name" placeholder="First & last" autocomplete="name"></div>
    <div class="field"><label>Your Shop</label><input id="f_store" placeholder="Dispensary name" autocomplete="organization"></div>
    <div class="err" id="joinErr">Add your name and your shop to start.</div>
    <button class="btn" onclick="doJoin()">Enter the Studio →</button>
    <p class="demo-hint" onclick="fillDemo()">Demo? Tap to use <strong>Dave Z · Dave's Dispensary</strong></p>
    <p class="sub" style="text-align:center;margin-top:10px">Already started? Your progress is saved on this device.</p>
  </div>
  ${foot()}`;
}
function doJoin(){
  const name = document.getElementById("f_name").value.trim();
  const store = document.getElementById("f_store").value.trim();
  if (!name || !store){ document.getElementById("joinErr").classList.add("show"); return; }
  const nu = freshState(name, store); DB.users[nu.id] = nu; setCurrent(nu.id); saveState(nu);
  go("#/dashboard");
}
function fillDemo(){
  document.getElementById("f_name").value = "Dave Z";
  document.getElementById("f_store").value = "Dave's Dispensary";
}

/* ---------- points hero + merch ladder (shared) ---------- */
function pointsHero(){
  const goal = COUNCIL_PTS(), p = pts();
  const pctToCouncil = Math.min(100, Math.round(p/goal*100));
  const nt = nextTier();
  const need = nt ? nt.pts - p : 0;
  return `<div class="pts-hero">
    <div class="ph-glow"></div>
    <div class="ph-num">${p.toLocaleString()}<span>pts</span></div>
    <div class="ph-sub">${councilUnlocked() ? "👑 High Council unlocked" : `${need.toLocaleString()} pts to ${nt ? esc(nt.title) : "the next reward"}`}</div>
    <div class="ph-bar"><div class="ph-fill" style="width:${pctToCouncil}%"></div>
      <span class="ph-cap" style="left:10%">100</span><span class="ph-cap" style="left:40%">400</span>
      <span class="ph-cap" style="left:70%">700</span><span class="ph-cap end">1000 👑</span></div>
    <div class="ph-rule">Points per sale — Godfather <b>255</b> · Capo <b>130</b> · Goomah <b>70</b> · Bambino <b>20</b> · 6 Chambers earn up to <b>1,000</b></div>
  </div>`;
}
function merchLadder(compact){
  const cards = XIAOLIN.tiers.map(t=>{
    const got = tierUnlocked(t);
    const media = t.img ? `<img src="${t.img}" alt="${esc(t.title)}">` : `<div class="ml-ico">${t.icon}</div>`;
    const store = esc((S.store||"").trim());
    const title = (t.key==="tote"||t.key==="hat") && store ? `${esc(t.title)}` : esc(t.title);
    return `<div class="ml-item ${got?'got':'locked'}">
      <div class="ml-media">${media}<span class="ml-badge">${got?'✓ Earned':t.pts.toLocaleString()+' pts'}</span></div>
      <div class="ml-body">
        <div class="ml-t">${title}</div>
        ${(t.key==="tote"||t.key==="hat")&&store?`<div class="ml-co">Xiaolin × ${store}</div>`:""}
        ${compact?"":`<div class="ml-d">${esc(t.desc)}</div>`}
      </div>
    </div>`;
  }).join("");
  return `<div class="merch-ladder${compact?' compact':''}">${cards}</div>`;
}

/* ---------- dashboard ---------- */
function viewDashboard(app){
  const done = passedCount(), total = XIAOLIN.sections.length;
  const complete = allPassed();
  if (codeUnlocked() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const codeBlock = codeUnlocked()
    ? `<div class="codechip"><div class="l">Your High Council Code · ${XIAOLIN.rewards.discountPct}% Off</div><div class="c">${S.code}</div></div>`
    : `<div class="codechip locked"><div class="l">50% Code — Locked</div><div class="c">Reach 100 pts (the modules get you there)</div></div>`;
  app.innerHTML = `${topbar()}
  <div class="kicker">Welcome, ${esc(S.name.split(" ")[0])} · ${esc(S.store)}</div>
  <h1 style="font-size:2.4rem">High Council Dashboard</h1>
  ${pointsHero()}
  ${!complete?`<div class="card" style="margin-top:14px">
    <h3 style="font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-deep)">Training · 3 modules → High Council</h3>
    <div class="prog-outer" style="margin-top:8px"><div class="prog-inner" style="width:${Math.round(done/total*100)}%"></div></div>
    <div class="prog-label">${done} of ${total} sections passed — 6 Chambers earn up to <b style="color:var(--gold)">1,000 pts</b></div>
  </div>`:""}
  ${codeBlock}
  <a class="btn ${complete?'ghost':''}" href="#/training">${complete?'Enter the Training Chambers':'Enter the Training Chambers →'}</a>
  <a class="btn ${complete?'gold':'ghost'}" href="#/sale">📷 Submit a Sale →</a>
  <a class="btn ghost" href="#/lineup">The Lineup</a>

  ${councilEvents()}

  <div class="vault-head">
    <h3>The Commissary</h3>
    <a href="#/reward" class="vault-link">View all →</a>
  </div>
  ${merchLadder(true)}
  ${foot()}`;
}

/* ---------- High Council events ---------- */
function councilEvents(){
  const evs = (XIAOLIN.events||[]);
  if (!evs.length) return "";
  const rows = evs.map(e=>{
    const [mo,day] = e.date.split(" ");
    return `<div class="ev-row">
      <div class="ev-date"><span class="ev-mo">${esc(mo)}</span><span class="ev-day">${esc(day)}</span></div>
      <div class="ev-b">
        <div class="ev-type">${esc(e.type)}${e.pts?` · +${e.pts} pts`:""}</div>
        <div class="ev-t">${esc(e.title)}</div>
        <div class="ev-note">${esc(e.note)}</div>
        <div class="ev-where">📍 ${esc(e.where)}</div>
      </div>
    </div>`;
  }).join("");
  return `<div class="vault-head"><h3>High Council Events</h3><span class="vault-link">RSVP at workshops</span></div>
  <p class="sub" style="margin:-4px 0 10px">Upcoming workshops, trainings, flavor reviews &amp; experiences — attend to earn Commissary points.</p>
  <div class="ev-list">${rows}</div>`;
}

/* ---------- training hub ---------- */
function viewTrainingHub(app){
  const done = passedCount(), total = XIAOLIN.sections.length;
  const order = XIAOLIN.sections;   // ordered by n
  const card = (s) => {
    const i = order.findIndex(x=>x.n===s.n);
    const passed = S.passed[s.n];
    const locked = i>0 && !S.passed[order[i-1].n] && !passed;
    const cls = passed ? "passed" : (locked ? "locked" : "");
    return `<a class="sect-card ${cls}" href="${locked?'#/training':'#/training/'+s.n}">
      <span class="badge">${passed?'✓':(locked?'🔒':'›')}</span>
      <div class="sn">${esc(s.tag)}</div>
      <div class="st">${esc(s.title)}</div>
    </a>`;
  };
  // module blocks
  const modBlocks = XIAOLIN.modules.map(m => {
    const secs = moduleSecs(m.id);
    const mdone = moduleDone(m.id);
    const got = S.moduleBonus[m.id];
    return `<div class="mod-head ${mdone?'done':''}">
      <div><span class="mod-lvl">${esc(m.level)}</span><span class="mod-ttl">${esc(m.title)}</span></div>
      <div class="mod-bonus">${got?'✓ +'+m.bonus:'+'+m.bonus+' pts'}</div>
    </div>
    <div class="sect-grid">${secs.map(card).join("")}</div>`;
  }).join("");
  const cap = XIAOLIN.sections.find(s=>s.capstone);   // optional
  const modsDone = XIAOLIN.modules.every(m=>moduleDone(m.id));
  const capBlock = cap ? (()=>{
    const capPassed = S.passed[cap.n], capLocked = !modsDone && !capPassed;
    return `<div class="mod-head capstone"><div><span class="mod-lvl">Capstone</span><span class="mod-ttl">The High Council</span></div><div class="mod-bonus">${councilUnlocked()?'👑 Open':'1,000 pts'}</div></div>
    <a class="sect-card council-card ${capPassed?'passed':''} ${capLocked?'locked':''}" href="${capLocked?'#/training':'#/training/'+cap.n}">
      <span class="badge">${capPassed?'✓':(capLocked?'🔒':'👑')}</span>
      <div class="sn">${capLocked?'Finish all Chambers first':'Capstone'}</div>
      <div class="st">${esc(cap.title)}</div>
    </a>`;})() : "";
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <h1>The Chambers</h1>
  <p class="sub">Six Chambers, each with short lessons + quizzes. ${done} of ${total} lessons done. Finish a Chamber to bank its points — all six earn you 1,000 and your seat on the High Council.</p>
  <a href="${XIAOLIN.highCouncil.movieUrl}" target="_blank" rel="noopener" class="movie-cta">
    ▶ Watch the official Retail Sales Training Movie
    <span>Straight from the studio · recommended before you start</span>
  </a>
  ${modBlocks}
  ${capBlock}
  ${modsDone ? `<a class="btn gold" href="#/sale" style="margin-top:16px">Chambers complete! Submit a sale to keep climbing →</a>` : ""}
  ${foot()}`;
}

/* ---------- section reading ---------- */
function viewSection(app, n){
  const s = XIAOLIN.sections.find(x=>x.n===n);
  if (!s) return go("#/training");
  const body = s.body.map(p=>`<p>${p}</p>`).join("");
  const mod = XIAOLIN.modules.find(m=>m.id===s.module);
  const lvl = s.capstone ? "Capstone" : (mod ? mod.level + " · " + mod.title : "");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/training">← All modules</a>
  <div class="kicker">${esc(lvl)}${s.tag && (!mod || s.tag!==mod.title)?' · '+esc(s.tag):''}</div>
  <h1>${s.title}</h1>
  <div class="reader">
    <img class="reader-hero" src="${s.hero}" alt="${s.title}">
    ${body}
  </div>
  ${(s.quiz && s.quiz.length)
    ? `<a class="btn" href="#/training/${s.n}/quiz">${S.passed[s.n]?'Retake':'Take'} the ${esc(s.title)} Quiz →</a>`
    : `<button class="btn" onclick="markRead(${s.n})">${S.passed[s.n]?'Lesson Complete ✓':'Mark Lesson Complete →'}</button>`}
  ${foot()}`;
  window.scrollTo(0,0);
}
// Lessons with no quiz (e.g. summaries) complete on read.
function markRead(n){
  if (!S.passed[n]){ S.passed[n] = true; const m = awardModuleBonus(); saveState(S);
    if (m) alert(`${m.level} complete — ${m.title}. +${m.bonus} points!`); }
  go("#/training");
}

/* ---------- quiz ---------- */
function viewQuiz(app, n){
  const s = XIAOLIN.sections.find(x=>x.n===n);
  if (!s) return go("#/training");
  if (!s.quiz || !s.quiz.length) return go("#/training/"+n);   // no-quiz lesson
  const qs = s.quiz;
  const html = qs.map((q,qi)=>{
    const opts = Object.entries(q.o).map(([k,v])=>`
      <label class="qopt" data-q="${qi}" data-opt="${k}" onclick="selOpt(${qi},'${k}')">
        <input type="radio" name="q${qi}" value="${k}"><span>${esc(v)}</span>
      </label>`).join("");
    return `<div class="qcard" data-card="${qi}"><div class="qprompt">${qi+1}. ${esc(q.q)}</div>${opts}<div class="qexplain hidden" data-exp="${qi}"></div></div>`;
  }).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/training/${n}">← Re-read ${esc(s.title)}</a>
  <div class="kicker">${esc(s.title)} · Quiz</div>
  <h1>${s.title}</h1>
  <p class="sub">${qs.length} question${qs.length>1?'s':''} · miss at most one to pass${S.passed[n]?' · already passed ✓':''}</p>
  <div id="scoreSlot"></div>
  <form id="quiz">${html}</form>
  <button class="btn" id="submitBtn" onclick="gradeQuiz(${n})">Submit Answers</button>
  ${foot()}`;
  window._answers = {};
  window.scrollTo(0,0);
}
function selOpt(qi, k){
  window._answers = window._answers || {};
  window._answers[qi] = k;
  document.querySelectorAll(`.qopt[data-q="${qi}"]`).forEach(el=>{
    el.classList.toggle("sel", el.dataset.opt===k);
    const r = el.querySelector("input"); r.checked = el.dataset.opt===k;
  });
}
function gradeQuiz(n){
  const s = XIAOLIN.sections.find(x=>x.n===n);
  const qs = s.quiz, ans = window._answers || {};
  if (Object.keys(ans).length < qs.length){
    alert("Answer all "+qs.length+" questions first.");
    return;
  }
  let correct = 0;
  qs.forEach((q,qi)=>{
    const card = document.querySelector(`.qcard[data-card="${qi}"]`);
    const exp = document.querySelector(`.qexplain[data-exp="${qi}"]`);
    const ok = ans[qi]===q.a;
    if (ok) correct++;
    card.classList.add(ok?"correct":"wrong");
    exp.classList.remove("hidden");
    exp.innerHTML = ok ? `<strong>Correct.</strong> ${esc(q.e)}` :
      `<strong>Not quite —</strong> the answer is <strong>${esc(q.o[q.a])}</strong>. ${esc(q.e)}`;
  });
  const pct = Math.round(correct/qs.length*100);
  const passed = correct >= Math.max(1, qs.length - 1);
  const slot = document.getElementById("scoreSlot");
  // record the score (keep the best attempt)
  S.scores = S.scores || {};
  if (!S.scores[n] || pct >= S.scores[n].pct) S.scores[n] = { correct, total: qs.length, pct };
  if (passed && !S.passed[n]){ S.passed[n] = true; }
  saveState(S);
  const sec = XIAOLIN.sections.find(x=>x.n===n);
  const moduleJustDone = passed ? awardModuleBonus() : null;   // awards module bonus if completed
  let msg, cta;
  if (!passed){
    msg = "You need 80% to pass. Re-read the section and try again — answers are explained below.";
    cta = `<a class="btn" href="#/training/${n}">Re-read this section</a>`;
  } else if (sec && sec.capstone){
    msg = councilUnlocked()
      ? "You know all of Xiaolin — and you've hit 1,000 points. The High Council is open."
      : `You know all of Xiaolin. Reach <b>1,000 pts</b> (${(COUNCIL_PTS()-pts()).toLocaleString()} to go) and your High Council invitation unlocks.`;
    cta = `<a class="btn gold" href="#/reward">Open the Commissary →</a>`;
  } else if (moduleJustDone){
    msg = `<b>${esc(moduleJustDone.level)} module complete</b> — “${esc(moduleJustDone.title)}.” <b>+${moduleJustDone.bonus} points!</b>`;
    cta = `<a class="btn gold" href="#/training">Continue to the Next Module →</a>`;
  } else {
    msg = "Section passed. Next section unlocked.";
    cta = `<a class="btn" href="#/training">Continue →</a>`;
  }
  slot.innerHTML = `<div class="score ${passed?'pass':'fail'}">
    <div class="pct">${pct}%</div>
    <span class="tag">${passed?'Section '+n+' Passed':'Keep Studying'}</span>
    <div class="msg">${msg}</div>
  </div>` + cta;
  document.getElementById("submitBtn").classList.add("hidden");
  slot.scrollIntoView({behavior:"smooth"});
  document.querySelectorAll(".qopt").forEach(el=>el.style.pointerEvents="none");
  render._topbarRefresh && render._topbarRefresh();
  // refresh points in topbar
  const ptsEl = document.querySelector(".topbar .pts b"); if (ptsEl) ptsEl.textContent = S.points;
}

/* ---------- lineup ---------- */
function viewLineup(app){
  const rows = XIAOLIN.products.map(p=>{
    const ep = XIAOLIN.commissary.earn[p.sku];
    const specs = [p.flower, p.conc, p.burn].filter(Boolean).join(" · ");
    const price = p.price ? `<div class="pprice">${esc(p.price)}${ep?`<span class="pearn">+${ep} pts</span>`:""}</div>`
      : (p.sku==="KNIFE" ? "" : `<div class="pprice none">varies</div>`);
    return `<div class="prod-row">
      <img src="${p.img}" alt="${p.name}">
      <div class="pinfo">
        <div class="pn">${p.name}</div>
        <div class="pl">${p.line}</div>
        ${specs?`<div class="pspecs">${esc(specs)}</div>`:""}
        <div class="pb">${p.blurb}</div>
      </div>
      ${price}
    </div>`;
  }).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <h1>The Lineup</h1>
  <p class="sub">Official Premium Roll Product Lineup — every roll is rosin-infused (flower <em>plus</em> concentrate). Prices are live NY retail (Terp Bros Astoria + Alto Canna). The dispensary sets cannabis pricing, so it swings hard by store — the Godfather runs ~$382 at Terp Bros but up to $495–$660 elsewhere in NYC. Sell the craft, not the sticker.</p>
  <a href="img/spec-sheet.png" target="_blank" rel="noopener" class="spec-link">
    <img class="spec-sheet" src="img/spec-sheet.png" alt="Made in Xiaolin Premium Roll Product Lineup spec sheet">
    <span>Official spec sheet · tap to enlarge</span>
  </a>
  <div class="card">${rows}</div>
  ${foot()}`;
  window.scrollTo(0,0);
}

/* ---------- receipt scanner (real OCR via Tesseract.js) ---------- */
function viewSale(app){
  const opts = XIAOLIN.products.map(p=>`<option value="${p.sku}">${esc(p.name)} — ${esc(p.line)}</option>`).join("");
  const prior = S.sales.map((sl)=>`<div class="sale-row">
    ${sl.receipt?`<img class="rcpt-thumb" src="${sl.receipt}" onclick="showImg('${sl.receipt}')" alt="receipt">`:`<span style="width:34px;text-align:center">🧾</span>`}
    <span class="sr-name">${esc(sl.product)}</span>
    <span class="sr-pts">+${sl.earned||0}</span>
    <span class="sr-amt">$${esc(sl.amount)}</span></div>`).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="kicker">Receipt Scanner</div>
  <h1>Submit a Sale</h1>
  <p class="sub">Log a Made in Xiaolin sale — attach a photo of the receipt, pick the product, and bank the points. Points are per product (Godfather 255 · Capo 130 · Goomah 70 · Soldato 45 · Bambino 20).</p>

  <div class="card">
    <label>Receipt photo</label>
    <label for="rfile" class="scan-drop" id="scanDrop">
      <div id="scanInner"><div class="scan-ico">📷</div><div class="scan-t">Tap to attach receipt</div><div class="scan-s">Snap or upload · stays on your device</div></div>
      <img id="scanPrev" class="scan-prev hidden" alt="receipt preview">
    </label>
    <input id="rfile" type="file" accept="image/*" capture="environment" class="hidden" onchange="onReceipt(event)">

    <div class="field"><label>What did you sell?</label>
      <select id="rprod" class="sel">${opts}</select></div>
    <div class="field"><label>Sale amount (USD)</label>
      <input id="ramt" type="number" inputmode="decimal" min="1" placeholder="e.g. 420"></div>

    <div class="err" id="saleErr">Attach a receipt photo and an amount to log the sale.</div>
    <button class="btn" id="logBtn" onclick="logSale()">Submit Sale</button>
  </div>

  ${prior?`<h3 style="margin:22px 0 6px;font-family:var(--serif);font-size:1.3rem;color:var(--gold);font-weight:600">Your logged sales</h3><div class="card" style="padding:6px 18px">${prior}</div>`:""}
  ${foot()}`;
  window._receiptImg = null;
  window.scrollTo(0,0);
}

function onReceipt(ev){
  const f = ev.target.files && ev.target.files[0];
  if (!f) return;
  const drop = document.getElementById("scanDrop");
  const inner = document.getElementById("scanInner");
  const reader = new FileReader();
  reader.onload = e => {
    window._receiptImg = e.target.result;     // attach the photo to the log
    const prev = document.getElementById("scanPrev");
    prev.src = e.target.result; prev.classList.remove("hidden");
    inner.classList.add("hidden");
    drop.classList.remove("scanning"); drop.classList.add("captured");
  };
  reader.readAsDataURL(f);
}

function logSale(){
  const amt = parseFloat(document.getElementById("ramt").value);
  const sku = document.getElementById("rprod").value;
  const prod = (XIAOLIN.products.find(p=>p.sku===sku)||{}).name || sku;
  if (!window._receiptImg || !amt || amt <= 0){
    document.getElementById("saleErr").classList.add("show"); return;
  }
  const earned = (XIAOLIN.commissary.earn[sku]) || Math.max(1, Math.round(amt / 3));
  const wasUnder = !councilUnlocked();
  S.sales.push({ product: prod, sku, amount: amt.toFixed(2), earned, receipt: window._receiptImg, verified: true, date: "2026-06-09" });
  S.points += earned;
  saveState(S);
  if (codeUnlocked() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const reached = councilUnlocked();
  alert(`Sale logged — +${earned} points (${esc(prod)})!` + (reached && wasUnder ? "  You've hit 1,000 — the High Council is open." :
        (allPassed() ? "" : "  Finish the modules for bonus points + your code.")));
  go(reached ? "#/reward" : "#/dashboard");
}

/* ---------- shared helpers: scoring, QR, lightbox ---------- */
function scoreList(u){ u=u||S; const v=Object.values(u.scores||{}); return v; }
function avgScore(u){ const v=scoreList(u); if(!v.length) return null; return Math.round(v.reduce((a,s)=>a+s.pct,0)/v.length); }
function qrUrl(data){ return "https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=" + encodeURIComponent(data); }
function acctLink(uid){ return location.origin + location.pathname + "?u=" + uid + "#/dashboard"; }
function adminLink(){ return location.origin + location.pathname + "?admin=" + ADMIN_CODE + "#/admin"; }
function showImg(src){
  let o = document.getElementById("imgLight");
  if (!o){ o = document.createElement("div"); o.id="imgLight"; o.className="img-light"; o.onclick=()=>o.remove(); document.body.appendChild(o); }
  o.innerHTML = `<img src="${src}" alt="receipt">`;
}

/* ---------- exchange / Commissary redemption ---------- */
function exchangeItems(){
  const prod = XIAOLIN.commissary.redeem.map(r=>({ key:r.sku, kind:"product", name:r.name, pts:r.pts, img:r.img }));
  const merch = [
    { key:"TOTE", kind:"merch", name:"Xiaolin × Store Tote", pts:1500, img:"img/merch/tote-red.png" },
    { key:"HAT",  kind:"merch", name:"Xiaolin Trucker Hat",  pts:2500, img:"img/merch/hat-red.png" },
  ];
  return merch.concat(prod);
}
function viewExchange(app){
  S.redemptions = S.redemptions || [];
  const p = pts();
  const items = exchangeItems().map(it=>{
    const can = p >= it.pts;
    return `<div class="ex-item ${can?'can':'no'}">
      <div class="ex-media"><img src="${it.img}" alt="${esc(it.name)}"><span class="ex-tag">${it.kind}</span></div>
      <div class="ex-b">
        <div class="ex-n">${esc(it.name)}</div>
        <div class="ex-p">${it.pts.toLocaleString()} pts</div>
        <button class="btn ${can?'gold':''}" ${can?'':'disabled'} onclick="doExchange('${it.key}')">${can?'Redeem':(it.pts-p).toLocaleString()+' pts to go'}</button>
      </div></div>`;
  }).join("");
  const hist = (S.redemptions||[]).map(r=>`<div class="sale-row"><span class="sr-name">🎁 ${esc(r.name)}</span><span class="sr-pts">-${r.pts}</span></div>`).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/reward">← Commissary</a>
  <div class="kicker">The Commissary</div>
  <h1>Commissary Catalog</h1>
  <p class="sub">Trade your points for <b style="color:var(--gold)">merch or real Made in Xiaolin product</b> — your shot at being the one with the best at the party. You have <b style="color:var(--gold)">${p.toLocaleString()} pts</b>.</p>
  <div class="ex-grid">${items}</div>
  ${hist?`<h3 style="margin:22px 0 6px;font-family:var(--serif);font-size:1.3rem;color:var(--gold);font-weight:600">Redeemed</h3><div class="card" style="padding:6px 16px">${hist}</div>`:""}
  ${foot()}`;
  window.scrollTo(0,0);
}
function doExchange(key){
  const it = exchangeItems().find(x=>x.key===key); if(!it) return;
  if (pts() < it.pts) return;
  if (!confirm(`Redeem ${it.name} for ${it.pts.toLocaleString()} points?`)) return;
  S.points -= it.pts;
  S.redemptions = S.redemptions || [];
  S.redemptions.push({ key, name: it.name, pts: it.pts, date: "2026-06-09" });
  saveState(S);
  alert(`Redeemed! ${it.name} is on its way. Your rep will follow up.`);
  go("#/exchange");
}

/* ---------- admin panel ---------- */
function viewAdmin(app){
  const detail = (location.hash.match(/^#\/admin\/user\/(.+)$/)||[])[1];
  if (detail) return viewAdminUser(app, decodeURIComponent(detail));
  const users = Object.values(DB.users);
  const totalPts = users.reduce((a,u)=>a+(u.points||0),0);
  const totalSales = users.reduce((a,u)=>a+((u.sales||[]).length),0);
  const byStore = {};
  users.forEach(u=>{ (byStore[u.store]=byStore[u.store]||[]).push(u); });
  const storeOpts = DB.stores.map(s=>`<option value="${esc(s.name)}">${esc(s.name)}</option>`).join("");
  const rows = Object.entries(byStore).map(([store,us])=>`
    <div class="adm-store">${esc(store)} <span>${us.length} budtender${us.length>1?'s':''}</span></div>
    ${us.map(u=>`<a class="adm-user" href="#/admin/user/${encodeURIComponent(u.id)}">
        <div class="au-l"><div class="au-n">${esc(u.name)} ${u.role==='admin'?'<span class="au-admin">ADMIN</span>':''}</div>
          <div class="au-s">${passedCountFor(u)}/13 sections · ${(u.sales||[]).length} sales${avgScore(u)!=null?' · '+avgScore(u)+'% avg':''}</div></div>
        <div class="au-p">${(u.points||0).toLocaleString()}<span>pts</span></div>
      </a>`).join("")}`).join("");
  app.innerHTML = `<div class="wrap-admin">
  <div class="topbar"><a class="brand" href="#/dashboard" style="text-decoration:none"><img src="img/xiaolin-logo.png"><div><div class="nm">Made in Xiaolin</div><div class="ac">Admin Panel</div></div></a>
    <a href="#/dashboard" class="admin-chip">App →</a></div>
  <h1 style="font-size:2.2rem">Admin Panel</h1>
  <div class="adm-stats">
    <div class="adm-stat"><b>${users.length}</b>Users</div>
    <div class="adm-stat"><b>${DB.stores.length}</b>Stores</div>
    <div class="adm-stat"><b>${totalSales}</b>Sales</div>
    <div class="adm-stat"><b>${(totalPts/1000).toFixed(1)}k</b>Points</div>
  </div>

  <div class="expert-card" onclick="openBot('admin')">
    <div class="ex-ico">🛠️</div>
    <div><div class="ex-h">App Expert · 24/7</div>
    <div class="ex-d">An expert AI for this app — troubleshoot issues, or add &amp; update lessons, quizzes, products, events &amp; prices. It writes the exact code to paste.</div></div>
    <div class="ex-go">Ask →</div>
  </div>

  <div class="card">
    <h3 style="font-family:var(--serif);font-size:1.3rem;color:var(--gold);font-weight:600;margin-bottom:4px">Quick-create a budtender</h3>
    <div class="field"><label>Name</label><input id="qc_name" placeholder="First & last"></div>
    <div class="field"><label>Email (optional)</label><input id="qc_email" placeholder="name@store.com"></div>
    <div class="field"><label>Store</label><select id="qc_store" class="sel">${storeOpts}<option value="__new">+ New store…</option></select></div>
    <input id="qc_newstore" placeholder="New store name" class="hidden" style="margin-top:8px">
    <button class="btn gold" onclick="adminQuickCreate()">Create + Get Link / QR</button>
    <div id="qc_result"></div>
  </div>

  <h3 style="margin:24px 0 8px;font-family:var(--serif);font-size:1.4rem;color:var(--gold);font-weight:600">All budtenders</h3>
  ${rows}
  ${foot()}</div>`;
  const sel = document.getElementById("qc_store");
  if (sel) sel.onchange = ()=>{ document.getElementById("qc_newstore").classList.toggle("hidden", sel.value!=="__new"); };
  window.scrollTo(0,0);
}
function passedCountFor(u){ return XIAOLIN.sections.filter(s=>u.passed&&u.passed[s.n]).length; }
function adminQuickCreate(){
  const name=(document.getElementById("qc_name").value||"").trim();
  let store=document.getElementById("qc_store").value;
  if (store==="__new") store=(document.getElementById("qc_newstore").value||"").trim();
  const email=(document.getElementById("qc_email").value||"").trim();
  if(!name||!store){ alert("Name and store required."); return; }
  if(!DB.stores.find(s=>s.name===store)) DB.stores.push({id:store.toLowerCase().replace(/[^a-z0-9]+/g,"-"),name:store});
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+Object.keys(DB.users).length;
  DB.users[id]={ id, name, email, store, role:"budtender", joined:true, passed:{}, points:0, code:makeCode(name,store), sales:[], moduleBonus:{}, scores:{}, created:"2026-06-09" };
  saveDB();
  const link=acctLink(id);
  document.getElementById("qc_result").innerHTML=`<div class="qc-out">
    <div class="qc-h">✓ ${esc(name)} created · ${esc(store)}</div>
    <img class="qc-qr" src="${qrUrl(link)}" alt="QR">
    <div class="qc-link" onclick="navigator.clipboard&&navigator.clipboard.writeText('${link}')">${esc(link)}</div>
    <div class="qc-hint">Tap the link to copy. Text or scan the QR to hand them their account.</div>
  </div>`;
}
function viewAdminUser(app, id){
  const u = DB.users[id]; if(!u) return go("#/admin");
  const sales=(u.sales||[]).map(sl=>`<div class="sale-row">
    ${sl.receipt?`<img class="rcpt-thumb" src="${sl.receipt}" onclick="showImg('${sl.receipt}')">`:`<span style="width:34px;text-align:center">🧾</span>`}
    <span class="sr-name">${esc(sl.product)}</span><span class="sr-pts">+${sl.earned||0}</span><span class="sr-amt">$${esc(sl.amount)}</span></div>`).join("")||`<p class="sub">No sales logged yet.</p>`;
  const link=acctLink(u.id);
  app.innerHTML=`<div class="wrap-admin">
  <div class="topbar"><a class="brand" href="#/admin" style="text-decoration:none"><img src="img/xiaolin-logo.png"><div><div class="nm">Made in Xiaolin</div><div class="ac">Admin · User</div></div></a><a href="#/admin" class="admin-chip">← All</a></div>
  <div class="kicker">${esc(u.store)}</div>
  <h1 style="font-size:2.2rem">${esc(u.name)} ${u.role==='admin'?'<span class="au-admin">ADMIN</span>':''}</h1>
  ${u.email?`<p class="sub">${esc(u.email)}</p>`:""}
  <div class="adm-stats">
    <div class="adm-stat"><b>${(u.points||0).toLocaleString()}</b>Points</div>
    <div class="adm-stat"><b>${passedCountFor(u)}/13</b>Sections</div>
    <div class="adm-stat"><b>${(u.sales||[]).length}</b>Sales</div>
    <div class="adm-stat"><b>${avgScore(u)!=null?avgScore(u)+'%':'—'}</b>Avg score</div>
  </div>
  <div class="card">
    <h3 style="font-family:var(--serif);font-size:1.2rem;color:var(--gold);font-weight:600;margin-bottom:6px">Adjust points</h3>
    <div style="display:flex;gap:8px;align-items:center">
      <input id="adm_pts" type="number" placeholder="e.g. 100" style="flex:1">
      <button class="btn gold" style="margin:0;width:auto;padding:14px 18px" onclick="adminAddPoints('${u.id}')">Add</button>
    </div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn ghost" style="margin:0" onclick="adminAddPoints('${u.id}',-100)">−100</button>
      <button class="btn ghost" style="margin:0" onclick="adminAddPoints('${u.id}',255)">+255 (Godfather)</button>
    </div>
  </div>
  <h3 style="margin:20px 0 6px;font-family:var(--serif);font-size:1.3rem;color:var(--gold);font-weight:600">Sales & receipts</h3>
  <div class="card" style="padding:6px 16px">${sales}</div>
  <div class="card" style="text-align:center">
    <div class="qc-h" style="margin-bottom:8px">Account link / QR</div>
    <img class="qc-qr" src="${qrUrl(link)}" alt="QR">
    <div class="qc-link" onclick="navigator.clipboard&&navigator.clipboard.writeText('${link}')">${esc(link)}</div>
  </div>
  <a class="btn ghost" href="?u=${u.id}#/dashboard">Open ${esc(u.name.split(' ')[0])}'s account →</a>
  ${foot()}</div>`;
  window.scrollTo(0,0);
}
function adminAddPoints(id, fixed){
  const u=DB.users[id]; if(!u) return;
  let n = fixed!==undefined ? fixed : parseInt(document.getElementById("adm_pts").value,10);
  if(!n||isNaN(n)){ return; }
  u.points = Math.max(0,(u.points||0)+n);
  saveDB(); if (S && S.id===id) S=u;
  render();
}

/* ---------- rewards vault ---------- */
function viewReward(app){
  const hc = XIAOLIN.highCouncil;
  if (codeUnlocked() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const codeBlock = codeUnlocked()
    ? `<div class="codechip"><div class="l">Your High Council Code · ${XIAOLIN.rewards.discountPct}% Off</div><div class="c">${S.code}</div></div>`
    : `<div class="codechip locked"><div class="l">50% Code — Locked</div><div class="c">Finish training (+100 pts) to unlock</div></div>`;

  const council = councilUnlocked()
    ? `<div class="council">
        <img class="council-seal" src="${hc.medallion}" alt="Xiaolin Medallion">
        <div class="ut" style="color:var(--gold-soft)">1,000 Points · The Ultimate Prize</div>
        <h2 style="color:#fff;font-family:var(--serif);font-size:2.1rem;margin:6px 0">Ascend to the High Council</h2>
        <p style="color:#e7c9ad;font-size:.92rem;line-height:1.55">${esc(hc.blurb.replace(/Certify and log a sale.*/,''))} You hit 1,000 — this is the seat at the table.</p>
        <a class="btn gold" href="${hc.applyUrl}" target="_blank" rel="noopener" style="margin-top:16px">Apply to the High Council →</a>
        <div class="council-links">
          <a href="${hc.movieUrl}" target="_blank" rel="noopener">▶ Retail Training Movie</a>
          <a href="${hc.packetUrl}" target="_blank" rel="noopener">📄 Info Packet</a>
        </div>
      </div>`
    : `<div class="council locked">
        <img class="council-seal dim" src="${hc.medallion}" alt="Xiaolin Medallion">
        <div class="ut" style="color:var(--gold-soft)">The Ultimate Prize · 1,000 pts</div>
        <h2 style="color:#fff;font-family:var(--serif);font-size:2rem;margin:6px 0">The High Council 🔒</h2>
        <p style="color:#e7c9ad;font-size:.9rem;line-height:1.5">Xiaolin's inner circle. ${esc((COUNCIL_PTS()-pts()).toLocaleString())} more points and your invitation to apply unlocks.</p>
        <a class="btn gold" href="#/sale" style="margin-top:14px">Submit a Sale to Climb →</a>
      </div>`;

  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="kicker">Commissary</div>
  <h1>Earn the Gear</h1>
  <p class="sub">Earn points per verified sale (Godfather 255 · Capo 130 · Goomah 70 · Bambino 20) + your 3 modules. Climb to your code, your Xiaolin × ${esc(S.store)} merch, and a seat on the High Council at 1,000.</p>
  ${pointsHero()}
  ${avgScore()!=null?`<div class="cert-score"><span>Certification score</span><b>${avgScore()}%</b></div>`:""}
  ${codeBlock}
  ${merchLadder(false)}
  ${council}
  ${commissaryPanel()}
  <a class="btn gold" href="#/exchange">🎁 Open the Commissary Catalog →</a>
  <a class="btn ghost" href="#/sale">📷 Submit a Sale (earn points)</a>
  <a class="btn ghost" href="#/lineup">Brush Up on the Lineup</a>
  ${foot()}`;
  window.scrollTo(0,0);
}

// The real High Council Commissary — redeem points for product.
function commissaryPanel(){
  const c = XIAOLIN.commissary;
  const rows = c.redeem.map(r=>{
    const got = pts() >= r.pts;
    return `<div class="comm-row ${got?'got':''}">
      <img src="${r.img}" alt="${esc(r.name)}">
      <div class="comm-n">${esc(r.name)}</div>
      <div class="comm-p">${r.pts.toLocaleString()} pts${got?' · redeemable ✓':''}</div>
    </div>`;
  }).join("");
  return `<div class="vault-head"><h3>The Commissary</h3><a class="vault-link" href="#/exchange">Exchange →</a></div>
  <p class="sub" style="margin:-4px 0 10px">Exchange your points for merch <b style="color:var(--gold)">or real Made in Xiaolin cannabis</b> — your shot at being the one who pulls out the best at the party. Points never expire.</p>
  <div class="card" style="padding:8px 16px">${rows}</div>
  <p class="sub" style="text-align:center;font-size:.72rem">Plus: ${esc(c.future.join(" · "))}</p>`;
}

/* ---------- util ---------- */
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function resetProgress(){ if(confirm("Reset all progress on this device?")){ localStorage.removeItem(LS); S=null; go("#/"); render(); } }

// Deep links: ?u=<id> opens an existing account · ?admin=<code> grants admin ·
// ?n=&s= creates a new account.
function initFromLink(){
  const q = new URLSearchParams(location.search);
  if (q.get("admin") === ADMIN_CODE){ localStorage.setItem(ADMIN_KEY, "1"); }
  const u = (q.get("u")||"").trim();
  if (u && DB.users[u]){ setCurrent(u); if (!location.hash || location.hash === "#/") location.hash = "#/dashboard"; return; }
  const n = (q.get("n")||"").trim(), st = (q.get("s")||"").trim();
  if (n && st && (!S || !S.joined)){
    const nu = freshState(n, st); DB.users[nu.id] = nu; setCurrent(nu.id); saveState(nu);
    if (!location.hash || location.hash === "#/") location.hash = "#/dashboard";
  }
}
/* ---------- High Council support bot (always-on) ---------- */
const BOT_URL = "https://xiaolin-support-804083036164.us-east1.run.app/chat";
let BOT_MSGS = [], BOT_MODE = "customer";
const BOT_INTRO = {
  customer: "👋 Welcome to the High Council. Ask me anything — how the app works, the lineup, or how to sell it.",
  admin: "🛠️ App Expert here, 24/7. Ask me to troubleshoot anything, or to add/update lessons, quizzes, products, events, prices — I'll give you the exact code to paste & deploy."
};
function mountBot(){
  if (document.getElementById("hcBot")) return;
  const el = document.createElement("div"); el.id = "hcBot";
  el.innerHTML = `
    <button id="hcBotBtn" aria-label="Support" onclick="openBot('customer')">💬<span>Ask</span></button>
    <div id="hcBotPanel" class="hidden">
      <div class="hcb-head"><span id="hcbTitle">High Council Support</span><button onclick="botToggle()">✕</button></div>
      <div id="hcbMsgs" class="hcb-msgs"></div>
      <div class="hcb-input"><input id="hcbIn" placeholder="Ask about the app or products…" onkeydown="if(event.key==='Enter')botSend()"><button onclick="botSend()">→</button></div>
    </div>`;
  document.body.appendChild(el);
}
function openBot(mode){
  const p = document.getElementById("hcBotPanel"); if(!p) return;
  if (mode && mode !== BOT_MODE){ BOT_MODE = mode; BOT_MSGS = []; }
  document.getElementById("hcbTitle").textContent = BOT_MODE==="admin" ? "App Expert · 24/7" : "High Council Support";
  document.getElementById("hcbIn").placeholder = BOT_MODE==="admin" ? "Troubleshoot or edit lessons/content…" : "Ask about the app or products…";
  const panel = document.getElementById("hcBotPanel");
  panel.classList.toggle("admin", BOT_MODE==="admin");
  panel.classList.remove("hidden");
  if (!BOT_MSGS.length) botRender([{role:"assistant",content: BOT_INTRO[BOT_MODE]}], true);
  setTimeout(()=>{ const i=document.getElementById("hcbIn"); if(i) i.focus(); }, 50);
}
function botToggle(){
  const p = document.getElementById("hcBotPanel"); if(!p) return;
  if (p.classList.contains("hidden")) return openBot(BOT_MODE);
  p.classList.add("hidden");
}
let APPLY_ACTIONS = [];
function botMsgHtml(m){
  if (m.content === "…") return '<span class="hcb-typing">●●●</span>';
  if (m.role === "assistant" && /```apply/.test(m.content)){
    const re = /```apply\s*([\s\S]*?)```/g; let out = ""; let last = 0; let mm;
    while ((mm = re.exec(m.content)) !== null){
      out += esc(m.content.slice(last, mm.index));
      const idx = APPLY_ACTIONS.push(mm[1].trim()) - 1;
      out += `<div class="hcb-apply"><button onclick="botApply(${idx})">✅ Apply &amp; Deploy</button></div>`;
      last = mm.index + mm[0].length;
    }
    out += esc(m.content.slice(last));
    return out;
  }
  return esc(m.content);
}
function botRender(extra, intro){
  const box = document.getElementById("hcbMsgs"); if(!box) return;
  const all = intro ? extra : BOT_MSGS;
  APPLY_ACTIONS = [];
  box.innerHTML = all.map(m=>`<div class="hcb-msg ${m.role}">${botMsgHtml(m)}</div>`).join("");
  box.scrollTop = box.scrollHeight;
}
async function botApplyFetch(action){
  try {
    const r = await fetch(BOT_URL.replace("/chat","/apply"), {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(action)});
    return await r.json();
  } catch(e){ return {ok:false, error:"network error"}; }
}
async function botApply(idx){
  let action; try { action = JSON.parse(APPLY_ACTIONS[idx]); } catch(e){ alert("Couldn't read that action."); return; }
  let key = sessionStorage.getItem("xhc_apply_key");
  if (!key){ key = prompt("Enter the password to apply & deploy this change:"); if (!key) return; sessionStorage.setItem("xhc_apply_key", key.trim()); }
  action.key = key.trim ? key.trim() : key;
  BOT_MSGS.push({role:"assistant", content:"⏳ Applying & deploying…"}); botRender();
  const d = await botApplyFetch(action);
  BOT_MSGS[BOT_MSGS.length-1] = (d && d.ok)
    ? {role:"assistant", content:"✅ Done — committed and deploying (live in ~1–2 min)."+(d.commit?"\n"+d.commit:"")}
    : {role:"assistant", content:"⚠️ "+((d&&d.error)||"Apply failed")+( (d&&/unauthorized/.test(d.error||""))?" — wrong password, try again":"")};
  if (d && !d.ok && /unauthorized/.test(d.error||"")) sessionStorage.removeItem("xhc_apply_key");
  botRender();
}
async function botSend(){
  const inp = document.getElementById("hcbIn"); const text=(inp.value||"").trim(); if(!text) return;
  inp.value="";
  BOT_MSGS.push({role:"user",content:text});
  BOT_MSGS.push({role:"assistant",content:"…"});
  botRender();
  try{
    const r = await fetch(BOT_URL, {method:"POST",headers:{"Content-Type":"application/json"},
      body: JSON.stringify({mode: BOT_MODE, messages: BOT_MSGS.filter(m=>m.content!=="…")})});
    const d = await r.json();
    BOT_MSGS[BOT_MSGS.length-1] = {role:"assistant",content: d.reply || "Try that again?"};
  }catch(e){
    BOT_MSGS[BOT_MSGS.length-1] = {role:"assistant",content:"Connection hiccup — give it another shot."};
  }
  botRender();
}

initFromLink();
mountBot();
render();
