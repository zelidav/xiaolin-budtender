/* Made in Xiaolin — Roller Academy. Client-only SPA (localStorage). MVP, no backend yet. */
const PASS = 0.8;
const LS = "xiaolin_roller_v1";

function loadState(){
  try { return JSON.parse(localStorage.getItem(LS)) || null; } catch(e){ return null; }
}
function saveState(s){ localStorage.setItem(LS, JSON.stringify(s)); }
function freshState(name, store){
  return { name, store, joined: true, passed: {}, points: 0, code: null, sales: [], moduleBonus: {} };
}
let S = loadState();
if (S && !Array.isArray(S.sales)) S.sales = [];          // migrate older saves
if (S && !S.moduleBonus) S.moduleBonus = {};

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
function moduleSecs(id){ return XIAOLIN.sections.filter(s => s.module === id); }
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
    default: return S && S.joined ? viewDashboard(app) : viewCover(app);
  }
}
window.addEventListener("hashchange", render);

/* ---------- shared chrome ---------- */
function topbar(){
  const pts = S ? S.points : 0;
  return `<div class="topbar">
    <a class="brand" href="#/dashboard" style="text-decoration:none">
      <img src="img/xiaolin-logo.png" alt="Made in Xiaolin">
      <div><div class="nm">Made in Xiaolin</div><div class="ac">Roller Academy</div></div>
    </a>
    <div class="pts"><b>${pts}</b>Roller Pts</div>
  </div>`;
}
function foot(){ return `<div class="foot">Rolled Proper · Made in New York · Warwick, NY</div>`; }

/* ---------- cover / signup ---------- */
function viewCover(app){
  app.innerHTML = `
  <div class="cover">
    <img class="seal" src="img/xiaolin-logo.png" alt="Made in Xiaolin">
    <div class="kicker">Budtender Program</div>
    <h1>The Roller<br>Academy</h1>
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
      <div class="es-rule">Earn <b>1 pt / $1</b> sold · 3 modules pay <b>+250</b></div>
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
  S = freshState(name, store); saveState(S); go("#/dashboard");
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
    <div class="ph-rule">Earn <b>1 pt per $1</b> you sell · modules pay <b>50 / 75 / 125</b></div>
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
    ? `<div class="codechip"><div class="l">Your Budtender Code · ${XIAOLIN.rewards.discountPct}% Off</div><div class="c">${S.code}</div></div>`
    : `<div class="codechip locked"><div class="l">50% Code — Locked</div><div class="c">Reach 100 pts (the modules get you there)</div></div>`;
  app.innerHTML = `${topbar()}
  <div class="kicker">Welcome, ${esc(S.name.split(" ")[0])}</div>
  <h1 style="font-size:2.4rem">${esc(S.store)}</h1>
  ${pointsHero()}
  ${!complete?`<div class="card" style="margin-top:14px">
    <h3 style="font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-deep)">Training · 3 modules → High Council</h3>
    <div class="prog-outer" style="margin-top:8px"><div class="prog-inner" style="width:${Math.round(done/total*100)}%"></div></div>
    <div class="prog-label">${done} of ${total} sections passed — modules pay <b style="color:var(--gold)">50 / 75 / 125 pts</b></div>
  </div>`:""}
  ${codeBlock}
  <a class="btn ${complete?'ghost':''}" href="#/training">${complete?'Review Training':'Continue Training →'}</a>
  <a class="btn ${complete?'gold':'ghost'}" href="#/sale">📷 Log a Sale (1 pt / $) →</a>
  <a class="btn ghost" href="#/lineup">Study the Lineup</a>

  <div class="vault-head">
    <h3>The Rewards Vault</h3>
    <a href="#/reward" class="vault-link">View all →</a>
  </div>
  ${merchLadder(true)}
  ${foot()}`;
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
  // capstone
  const cap = XIAOLIN.sections.find(s=>s.capstone);
  const modsDone = XIAOLIN.modules.every(m=>moduleDone(m.id));
  const capPassed = S.passed[cap.n];
  const capLocked = !modsDone && !capPassed;
  const capBlock = `<div class="mod-head capstone"><div><span class="mod-lvl">Capstone</span><span class="mod-ttl">The High Council</span></div><div class="mod-bonus">${councilUnlocked()?'👑 Open':'1,000 pts'}</div></div>
    <a class="sect-card council-card ${capPassed?'passed':''} ${capLocked?'locked':''}" href="${capLocked?'#/training':'#/training/'+cap.n}">
      <span class="badge">${capPassed?'✓':(capLocked?'🔒':'👑')}</span>
      <div class="sn">${capLocked?'Finish all 3 modules first':'Capstone'}</div>
      <div class="st">${esc(cap.title)}</div>
    </a>`;
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <h1>Training</h1>
  <p class="sub">Three modules — Basic → Medium → Advanced — then the High Council. Pass each quiz at 80%. ${done}/${total} done. Each module pays points into your total.</p>
  <a href="${XIAOLIN.highCouncil.movieUrl}" target="_blank" rel="noopener" class="movie-cta">
    ▶ Watch the official Retail Sales Training Movie
    <span>Straight from the studio · recommended before you start</span>
  </a>
  ${modBlocks}
  ${capBlock}
  ${modsDone ? `<a class="btn gold" href="#/sale" style="margin-top:16px">Modules done! Log a sale to climb to 1,000 →</a>` : ""}
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
  <div class="kicker">${esc(lvl)}${s.tag?' · '+esc(s.tag):''}</div>
  <h1>${s.title}</h1>
  <div class="reader">
    <img class="reader-hero" src="${s.hero}" alt="${s.title}">
    ${body}
  </div>
  <a class="btn" href="#/training/${s.n}/quiz">${S.passed[s.n]?'Retake':'Take'} the ${esc(s.title)} Quiz →</a>
  ${foot()}`;
  window.scrollTo(0,0);
}

/* ---------- quiz ---------- */
function viewQuiz(app, n){
  const s = XIAOLIN.sections.find(x=>x.n===n);
  if (!s) return go("#/training");
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
  <p class="sub">${qs.length} questions · 80% to pass${S.passed[n]?' · already passed ✓':''}</p>
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
  const passed = correct/qs.length >= PASS;
  const slot = document.getElementById("scoreSlot");
  if (passed && !S.passed[n]){ S.passed[n] = true; saveState(S); }
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
    cta = `<a class="btn gold" href="#/reward">Open the Rewards Vault →</a>`;
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
    const specs = [p.flower, p.conc, p.burn].filter(Boolean).join(" · ");
    const price = p.price ? `<div class="pprice">${esc(p.price)}</div>`
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
  const prior = S.sales.map((sl)=>`<div class="sale-row"><span>${sl.verified?'✅':'🧾'} ${esc(sl.product)}</span><span>$${esc(sl.amount)}</span></div>`).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="kicker">Receipt Scanner</div>
  <h1>Log a Sale</h1>
  <p class="sub">Snap a receipt with a Made in Xiaolin sale. We read it on-device and verify the brand — nothing leaves your phone.${allPassed()?'':' (You can log any time, but rewards unlock only after training is done too.)'}</p>

  <div class="card">
    <label>Receipt photo</label>
    <label for="rfile" class="scan-drop" id="scanDrop">
      <div id="scanInner"><div class="scan-ico">📷</div><div class="scan-t">Tap to add receipt photo</div><div class="scan-s">Snap or upload · read on-device</div></div>
      <img id="scanPrev" class="scan-prev hidden" alt="receipt preview">
    </label>
    <input id="rfile" type="file" accept="image/*" capture="environment" class="hidden" onchange="onReceipt(event)">

    <div id="ocrResult"></div>

    <div class="field"><label>What did you sell?</label>
      <select id="rprod" class="sel">${opts}</select></div>
    <div class="field"><label>Sale amount (USD)</label>
      <input id="ramt" type="number" inputmode="decimal" min="1" placeholder="e.g. 120"></div>

    <div class="err" id="saleErr">Add a receipt photo and an amount to log the sale.</div>
    <button class="btn" id="logBtn" onclick="logSale()">Log This Sale</button>
  </div>

  ${prior?`<h3 style="margin:22px 0 6px;font-family:var(--serif);font-size:1.3rem;color:var(--gold);font-weight:600">Your logged sales</h3><div class="card" style="padding:6px 18px">${prior}</div>`:""}
  ${foot()}`;
  window._receipt = null; window._verified = null; window._ocrText = "";
  window.scrollTo(0,0);
}

function onReceipt(ev){
  const f = ev.target.files && ev.target.files[0];
  if (!f) return;
  const drop = document.getElementById("scanDrop");
  const inner = document.getElementById("scanInner");
  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    const prev = document.getElementById("scanPrev");
    prev.src = dataUrl; prev.classList.remove("hidden");
    inner.classList.add("hidden");
    drop.classList.remove("scanning"); drop.classList.add("captured");
    window._receipt = true;
    runOCR(dataUrl);
  };
  reader.readAsDataURL(f);
}

function ocrStatus(html){ const el=document.getElementById("ocrResult"); if(el) el.innerHTML=html; }

async function runOCR(dataUrl){
  ocrStatus(`<div class="ocr scanning"><span class="spin">◠</span> Reading receipt on-device…</div>`);
  if (typeof Tesseract === "undefined"){
    // OCR library didn't load — let the budtender confirm manually.
    window._verified = null;
    ocrStatus(`<div class="ocr warn">Couldn't load the scanner here. Confirm the product + amount below and log manually.</div>`);
    return;
  }
  try{
    const { data } = await Tesseract.recognize(dataUrl, "eng", {
      logger: m => { if (m.status === "recognizing text") ocrStatus(`<div class="ocr scanning"><span class="spin">◠</span> Reading receipt… ${Math.round((m.progress||0)*100)}%</div>`); }
    });
    applyOCR(data.text || "");
  }catch(err){
    window._verified = null;
    ocrStatus(`<div class="ocr warn">Scan didn't complete. Enter the product + amount below and log manually.</div>`);
  }
}

// Parse OCR text → verify brand, detect products, pull the total. Prefill the form.
function applyOCR(text){
  window._ocrText = text;
  const low = text.toLowerCase();
  const brand = /xiaolin/.test(low);
  const PKEYS = [
    {sku:"GODFATHER", re:/godfather/}, {sku:"CAPO", re:/\bcapo\b/}, {sku:"GOOMAH", re:/goomah/},
    {sku:"SOLDATO", re:/soldato/}, {sku:"BAMBINO", re:/bambino/},
  ];
  const found = PKEYS.filter(p => p.re.test(low));
  // amount: prefer a line containing "total", else the largest $ figure on the receipt
  const money = m => parseFloat(m.replace(/[^0-9.]/g,""));
  let amount = null;
  const totalLine = text.split(/\n/).find(l => /total/i.test(l) && /\d/.test(l) && !/subtotal/i.test(l));
  const grab = s => { const m = (s||"").match(/\$?\s?\d{1,4}\.\d{2}/g); return m ? m.map(money) : []; };
  const tvals = grab(totalLine);
  if (tvals.length) amount = Math.max(...tvals);
  if (amount == null){ const all = grab(text); if (all.length) amount = Math.max(...all); }

  // prefill product dropdown + amount
  if (found.length){ const sel = document.getElementById("rprod"); if (sel) sel.value = found[0].sku; }
  if (amount != null){ const a = document.getElementById("ramt"); if (a && !a.value) a.value = amount.toFixed(2); }

  window._verified = brand;
  const names = found.map(f => (XIAOLIN.products.find(p=>p.sku===f.sku)||{}).name).filter(Boolean);
  if (brand){
    ocrStatus(`<div class="ocr ok">
      <div class="ocr-h">✓ Verified Made in Xiaolin receipt</div>
      ${names.length?`<div class="ocr-d">Detected: ${esc(names.join(", "))}</div>`:""}
      ${amount!=null?`<div class="ocr-d">Total read: <b>$${amount.toFixed(2)}</b> — confirm below.</div>`:`<div class="ocr-d">Couldn't read a total — enter the amount below.</div>`}
    </div>`);
  } else {
    ocrStatus(`<div class="ocr warn">
      <div class="ocr-h">⚠ Couldn't find "Xiaolin" on this receipt</div>
      <div class="ocr-d">Make sure the brand line is in frame, or pick the product + amount and log manually.</div>
    </div>`);
  }
}

function logSale(){
  const amt = parseFloat(document.getElementById("ramt").value);
  const sku = document.getElementById("rprod").value;
  const prod = (XIAOLIN.products.find(p=>p.sku===sku)||{}).name || sku;
  if (!window._receipt || !amt || amt <= 0){
    document.getElementById("saleErr").classList.add("show"); return;
  }
  // Validation gate: if OCR couldn't verify the brand, make the budtender confirm.
  if (window._verified === false &&
      !confirm("This receipt didn't scan as a Made in Xiaolin sale. Log it anyway?")) return;
  const earned = Math.round(amt * XIAOLIN.rewards.perDollar);   // 1 pt per $ sold
  S.sales.push({ product: prod, sku, amount: amt.toFixed(2), verified: window._verified === true, earned });
  S.points += earned;
  saveState(S);
  if (codeUnlocked() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const reached = councilUnlocked();
  alert(`Sale logged — +${earned} points!` + (reached ? "  You've hit 1,000 — the High Council is open." :
        (allPassed() ? "" : "  Finish training for +100 and your code.")));
  go(reached ? "#/reward" : "#/dashboard");
}

/* ---------- rewards vault ---------- */
function viewReward(app){
  const hc = XIAOLIN.highCouncil;
  if (codeUnlocked() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const codeBlock = codeUnlocked()
    ? `<div class="codechip"><div class="l">Your Budtender Code · ${XIAOLIN.rewards.discountPct}% Off</div><div class="c">${S.code}</div></div>`
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
        <a class="btn gold" href="#/sale" style="margin-top:14px">Log a Sale to Climb →</a>
      </div>`;

  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="kicker">Rewards Vault</div>
  <h1>Earn the Gear</h1>
  <p class="sub">Every $1 you sell = 1 point. Climb the ladder — your code, your Xiaolin × ${esc(S.store)} merch, then a seat on the High Council at 1,000.</p>
  ${pointsHero()}
  ${codeBlock}
  ${merchLadder(false)}
  ${council}
  <a class="btn gold" href="#/sale">📷 Log a Sale (1 pt / $) →</a>
  <a class="btn ghost" href="#/lineup">Brush Up on the Lineup</a>
  ${foot()}`;
  window.scrollTo(0,0);
}

/* ---------- util ---------- */
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function resetProgress(){ if(confirm("Reset all progress on this device?")){ localStorage.removeItem(LS); S=null; go("#/"); render(); } }

// Test-account deep link: ?n=Chris+Louie&s=Xiaolin+Dispensary creates the account.
function initFromLink(){
  const q = new URLSearchParams(location.search);
  const n = (q.get("n")||"").trim(), st = (q.get("s")||"").trim();
  if (n && st && (!S || !S.joined)){
    S = freshState(n, st); saveState(S);
    if (!location.hash || location.hash === "#/") location.hash = "#/dashboard";
  }
}
initFromLink();
render();
