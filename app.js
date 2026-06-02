/* Made in Xiaolin — Roller Academy. Client-only SPA (localStorage). MVP, no backend yet. */
const PASS = 0.8;
const LS = "xiaolin_roller_v1";

function loadState(){
  try { return JSON.parse(localStorage.getItem(LS)) || null; } catch(e){ return null; }
}
function saveState(s){ localStorage.setItem(LS, JSON.stringify(s)); }
function freshState(name, store){
  return { name, store, joined: true, passed: {}, points: 0, code: null, sales: [] };
}
let S = loadState();
if (S && !Array.isArray(S.sales)) S.sales = [];   // migrate older saves

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
// Merch, the discount code, and the High Council invite all require BOTH:
// finish training AND log at least one real sale.
function canRedeem(){ return allPassed() && saleCount() >= 1; }

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
function foot(){ return `<div class="foot">Rolled Proper · Evergreen, CO · Est. 2018</div>`; }

/* ---------- cover / signup ---------- */
function viewCover(app){
  app.innerHTML = `
  <div class="cover">
    <img class="seal" src="img/xiaolin-logo.png" alt="Made in Xiaolin">
    <div class="kicker">Budtender Program</div>
    <h1>The Roller<br>Academy</h1>
    <div class="promise">Learn the craft. Earn the merch.</div>
    <div class="marque"><span>High Times</span><span class="x">×</span><span>Playboy</span><span class="x">×</span><span>Forbes</span></div>
    <p class="sub">Colorado's only creative rolling studio. Pass the training, log a real sale, and unlock a budtender discount, studio merch, and a seat on the <strong>High Council</strong>.</p>
  </div>
  <div class="card">
    <h2>Get Rolling</h2>
    <p class="sub" style="margin-bottom:6px">Two minutes. No corporate hoops.</p>
    <div class="field"><label>Your Name</label><input id="f_name" placeholder="First & last" autocomplete="name"></div>
    <div class="field"><label>Your Shop</label><input id="f_store" placeholder="Dispensary name" autocomplete="organization"></div>
    <div class="err" id="joinErr">Add your name and your shop to start.</div>
    <button class="btn" onclick="doJoin()">Enter the Studio →</button>
    <p class="sub" style="text-align:center;margin-top:14px">Already started? Your progress is saved on this device.</p>
  </div>
  ${foot()}`;
}
function doJoin(){
  const name = document.getElementById("f_name").value.trim();
  const store = document.getElementById("f_store").value.trim();
  if (!name || !store){ document.getElementById("joinErr").classList.add("show"); return; }
  S = freshState(name, store); saveState(S); go("#/dashboard");
}

/* ---------- dashboard ---------- */
function viewDashboard(app){
  const done = passedCount(), total = XIAOLIN.sections.length;
  const pct = Math.round(done/total*100);
  const complete = allPassed();
  const sales = saleCount();
  const redeem = canRedeem();
  if (redeem && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const codeBlock = redeem
    ? `<div class="codechip"><div class="l">Your Budtender Code · ${XIAOLIN.rewards.discountPct}% Off</div><div class="c">${S.code}</div></div>`
    : `<div class="codechip locked"><div class="l">Rewards — Locked</div><div class="c">Finish training + log 1 sale</div></div>`;
  // Two-step unlock tracker
  const step = (ok, label, sub) => `<div class="unlock-step ${ok?'done':''}">
      <span class="us-tick">${ok?'✓':'○'}</span>
      <div><div class="us-l">${label}</div><div class="us-s">${sub}</div></div></div>`;
  app.innerHTML = `${topbar()}
  <div class="kicker">Welcome, ${esc(S.name.split(" ")[0])}</div>
  <h1 style="font-size:2.4rem">${esc(S.store)}</h1>
  <hr class="hr">
  <div class="card">
    <h3 style="font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-deep)">Unlock your rewards</h3>
    <div class="prog-outer"><div class="prog-inner" style="width:${pct}%"></div></div>
    <div class="prog-label">${done} of ${total} sections passed${complete?" · Certified ✓":""}</div>
    <div class="unlock-steps">
      ${step(complete, "1 · Finish training", complete ? "All sections passed" : `${total-done} section${total-done===1?'':'s'} to go`)}
      ${step(sales>=1, "2 · Log your first sale", sales>=1 ? `${sales} sale${sales===1?'':'s'} logged` : "Scan a receipt to log a Xiaolin sale")}
    </div>
  </div>
  ${codeBlock}
  <a class="btn ${complete?'ghost':''}" href="#/training">${complete?'Review Training':'Continue Training →'}</a>
  <a class="btn ${complete&&sales<1?'gold':'ghost'}" href="#/sale">📷 ${sales<1?'Log a Sale (Receipt Scan)':'Log Another Sale'}</a>
  <a class="btn ghost" href="#/lineup">Study the Lineup</a>
  ${redeem?`<a class="btn gold" href="#/reward">Claim Your Reward →</a>`:""}

  <h3 style="margin:24px 0 4px;font-family:var(--serif);font-size:1.4rem;color:var(--red);font-weight:600">Roller Perks</h3>
  <div class="perks">
    <div class="perk"><div class="pi">👑</div><div class="pt">The High Council</div><div class="pp">The ultimate prize — Xiaolin's inner circle.</div></div>
    <div class="perk"><div class="pi">🎟️</div><div class="pt">Monthly VSXL Draw</div><div class="pp">Win a cannagar once you're certified + selling.</div></div>
    <div class="perk"><div class="pi">🔪</div><div class="pt">The Knife</div><div class="pp">Earn the studio's signature rolling tool.</div></div>
    <div class="perk"><div class="pi">🏷️</div><div class="pt">${XIAOLIN.rewards.discountPct}% Budtender Off</div><div class="pp">Your personal code on the full lineup.</div></div>
  </div>
  ${foot()}`;
}

/* ---------- training hub ---------- */
function viewTrainingHub(app){
  const done = passedCount(), total = XIAOLIN.sections.length;
  const cards = XIAOLIN.sections.map((s,i) => {
    const passed = S.passed[s.n];
    const locked = i>0 && !S.passed[XIAOLIN.sections[i-1].n] && !passed;
    const cls = passed ? "passed" : (locked ? "locked" : "");
    return `<a class="sect-card ${cls}" href="${locked?'#/training':'#/training/'+s.n}">
      <span class="badge">${passed?'✓':(locked?'🔒':'›')}</span>
      <div class="sn">Section ${s.n}</div>
      <div class="st">${s.title}</div>
      <div class="sd">${s.tag}</div>
    </a>`;
  }).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <h1>Training</h1>
  <p class="sub">${total} sections · ~2 min each · pass each quiz at 80% to unlock the next. ${done}/${total} done.</p>
  <a href="${XIAOLIN.highCouncil.movieUrl}" target="_blank" rel="noopener" class="movie-cta">
    ▶ Watch the official Retail Sales Training Movie
    <span>Straight from the studio · ~optional but recommended</span>
  </a>
  <div class="sect-grid">${cards}</div>
  ${allPassed() ? (canRedeem()
      ? `<a class="btn gold" href="#/reward">You're Certified — Claim Reward →</a>`
      : `<a class="btn gold" href="#/sale">Certified! Now log a sale to unlock →</a>`) : ""}
  ${foot()}`;
}

/* ---------- section reading ---------- */
function viewSection(app, n){
  const s = XIAOLIN.sections.find(x=>x.n===n);
  if (!s) return go("#/training");
  const body = s.body.map(p=>`<p>${p}</p>`).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/training">← All sections</a>
  <div class="kicker">Section ${s.n} · ${s.tag}</div>
  <h1>${s.title}</h1>
  <div class="reader">
    <img class="reader-hero" src="${s.hero}" alt="${s.title}">
    ${body}
  </div>
  <a class="btn" href="#/training/${s.n}/quiz">${S.passed[s.n]?'Retake':'Take'} the Section ${s.n} Quiz →</a>
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
  <a class="backlink" href="#/training/${n}">← Re-read Section ${n}</a>
  <div class="kicker">Section ${n} Quiz</div>
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
  if (passed && !S.passed[n]){ S.passed[n] = true; S.points += 50; saveState(S); }
  const justCertified = passed && allPassed();
  const needsSale = justCertified && saleCount() < 1;
  let msg, cta;
  if (!passed){
    msg = "You need 80% to pass. Re-read the section and try again — answers are explained below.";
    cta = `<a class="btn" href="#/training/${n}">Re-read Section ${n}</a>`;
  } else if (needsSale){
    msg = "That's all the training — you're a Certified Xiaolin Roller. One step left: log a real sale to unlock your code, merch, and your High Council invitation.";
    cta = `<a class="btn gold" href="#/sale">Log Your First Sale →</a>`;
  } else if (justCertified){
    msg = "Certified and selling — your rewards are unlocked.";
    cta = `<a class="btn gold" href="#/reward">Claim Your Reward →</a>`;
  } else {
    msg = "+50 Roller Points. Next section unlocked.";
    cta = `<a class="btn" href="#/training">Continue to Next Section →</a>`;
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

/* ---------- receipt scanner (MVP) ---------- */
function viewSale(app){
  const opts = XIAOLIN.products.map(p=>`<option value="${p.sku}">${esc(p.name)} — ${esc(p.line)}</option>`).join("");
  const prior = S.sales.map((sl,i)=>`<div class="sale-row"><span>🧾 ${esc(sl.product)}</span><span>$${esc(sl.amount)}</span></div>`).join("");
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="kicker">Receipt Scanner</div>
  <h1>Log a Sale</h1>
  <p class="sub">Snap the receipt from a Xiaolin sale. ${allPassed()?'':'(You can do this any time — but rewards unlock only after training is done too.)'} This is an MVP — the scan logs locally; full OCR + verification comes with the backend.</p>

  <div class="card">
    <label>Receipt photo</label>
    <label for="rfile" class="scan-drop" id="scanDrop">
      <div id="scanInner"><div class="scan-ico">📷</div><div class="scan-t">Tap to add receipt photo</div><div class="scan-s">Snap or upload · stays on your device</div></div>
      <img id="scanPrev" class="scan-prev hidden" alt="receipt preview">
    </label>
    <input id="rfile" type="file" accept="image/*" capture="environment" class="hidden" onchange="onReceipt(event)">

    <div class="field"><label>What did you sell?</label>
      <select id="rprod" class="sel">${opts}</select></div>
    <div class="field"><label>Sale amount (USD)</label>
      <input id="ramt" type="number" inputmode="decimal" min="1" placeholder="e.g. 60"></div>

    <div class="err" id="saleErr">Add a receipt photo and an amount to log the sale.</div>
    <button class="btn" id="logBtn" onclick="logSale()">Log This Sale</button>
  </div>

  ${prior?`<h3 style="margin:22px 0 6px;font-family:var(--serif);font-size:1.3rem;color:var(--red);font-weight:600">Your logged sales</h3><div class="card" style="padding:6px 18px">${prior}</div>`:""}
  ${foot()}`;
  window._receipt = null;
  window.scrollTo(0,0);
}
function onReceipt(ev){
  const f = ev.target.files && ev.target.files[0];
  if (!f) return;
  const drop = document.getElementById("scanDrop");
  drop.classList.add("scanning");
  const inner = document.getElementById("scanInner");
  inner.innerHTML = `<div class="scan-ico">⏳</div><div class="scan-t">Scanning receipt…</div>`;
  const reader = new FileReader();
  reader.onload = e => {
    window._receipt = true;
    // tiny "scan" beat for feel; honest MVP — no real OCR
    setTimeout(()=>{
      const prev = document.getElementById("scanPrev");
      prev.src = e.target.result; prev.classList.remove("hidden");
      inner.classList.add("hidden");
      drop.classList.remove("scanning"); drop.classList.add("captured");
    }, 700);
  };
  reader.readAsDataURL(f);
}
function logSale(){
  const amt = parseFloat(document.getElementById("ramt").value);
  const sku = document.getElementById("rprod").value;
  const prod = (XIAOLIN.products.find(p=>p.sku===sku)||{}).name || sku;
  if (!window._receipt || !amt || amt <= 0){
    document.getElementById("saleErr").classList.add("show"); return;
  }
  const first = saleCount() === 0;
  S.sales.push({ product: prod, sku, amount: amt.toFixed(2) });
  S.points += 25 + (first ? 50 : 0);   // sale points; bonus for first sale
  saveState(S);
  if (canRedeem() && !S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  if (canRedeem()) go("#/reward");
  else { alert("Sale logged! "+(allPassed()?"":"Finish training to unlock your rewards.")); go("#/dashboard"); }
}

/* ---------- reward ---------- */
function viewReward(app){
  if (!canRedeem()){ return go(allPassed() ? "#/sale" : "#/training"); }
  if (!S.code){ S.code = makeCode(S.name, S.store); saveState(S); }
  const hc = XIAOLIN.highCouncil;
  app.innerHTML = `${topbar()}
  <a class="backlink" href="#/dashboard">← Dashboard</a>
  <div class="unlock">
    <div class="ut">Certified Xiaolin Roller · Selling</div>
    <h2>Rolled Proper.</h2>
    <p style="color:#e7c9ad;margin-top:4px">${esc(S.name)} — you know the lineup and you've made the sale. Here's what you've earned.</p>
    <div class="code">${S.code}</div>
    <p style="color:#ffe6a8;font-weight:600;font-size:.85rem">${XIAOLIN.rewards.discountPct}% budtender discount · show this code in-store</p>
    <div class="gv">🎟️ Entered in the <strong>${esc(XIAOLIN.rewards.giveaway)}</strong>.</div>
    <div class="gv">🔪 Eligible to claim <strong>${esc(XIAOLIN.rewards.merch)}</strong> at your next rep visit.</div>
  </div>

  <!-- ULTIMATE PRIZE — the High Council -->
  <div class="council">
    <img class="council-seal" src="${hc.medallion}" alt="Xiaolin Medallion">
    <div class="ut" style="color:var(--gold-soft)">The Ultimate Prize</div>
    <h2 style="color:#fff;font-family:var(--serif);font-size:2.1rem;margin:6px 0">Ascend to the High Council</h2>
    <p style="color:#e7c9ad;font-size:.92rem;line-height:1.55">${esc(hc.blurb)} You've earned your invitation — this is the seat at the table.</p>
    <a class="btn gold" href="${hc.applyUrl}" target="_blank" rel="noopener" style="margin-top:16px">Apply to the High Council →</a>
    <div class="council-links">
      <a href="${hc.movieUrl}" target="_blank" rel="noopener">▶ Retail Training Movie</a>
      <a href="${hc.packetUrl}" target="_blank" rel="noopener">📄 Info Packet</a>
    </div>
  </div>

  <div class="card">
    <h3 style="font-family:var(--serif);font-size:1.3rem;color:var(--red);font-weight:600">What's next</h3>
    <p style="margin-top:6px">Screenshot your code and apply to the Council above. This is the MVP — live sales tracking, receipt OCR/verification, and the monthly draw come with the backend.</p>
  </div>
  <a class="btn ghost" href="#/sale">Log Another Sale</a>
  <a class="btn ghost" href="#/lineup">Brush Up on the Lineup</a>
  ${foot()}`;
  window.scrollTo(0,0);
}

/* ---------- util ---------- */
function esc(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function resetProgress(){ if(confirm("Reset all progress on this device?")){ localStorage.removeItem(LS); S=null; go("#/"); render(); } }

render();
