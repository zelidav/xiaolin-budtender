/* Made in Xiaolin — Roller Academy
 * Content merged from the official High Council curriculum: the "Welcome to the
 * Family" kit, the Commissary docs, and Christopher Louie's expanded teaching
 * script + Companion Booklet + Connect + Workshops. NY-forward, sales-first.
 *
 * THEME: this is a LUXURY / FLEX product. The market is ballers — people who
 * want the best of the best, to impress the room, to pull out something that
 * makes everyone go "damn." The budtender's #1 job: spot that customer and make
 * them feel like a baller. Every module reinforces the SALES PROCESS.
 *
 * Four modules (Basic / Medium / Advanced "Sell Like a Made Man" / The High
 * Council) → apply capstone. ~2–3 min per section. Quizzes pass at 80% (4/5).
 */

const XIAOLIN = {
  brand: {
    name: "Made in Xiaolin",
    tagline: "Rolled Proper",
    founder: "Christopher Louie",
    since: "2018",
    origin: "Colorado",
    ny: "Warwick, New York",
    vsxl: "Very Special Xiaolin",
    nameOrigin: "Staten Island, NY (\"Shaolin\" — the Wu-Tang reference)",
    mission: "Crafted cannabis experiences for moments that matter.",
    press: ["High Times", "Playboy", "Forbes"],
  },

  // The lineup — official specs + family meanings + NY price points (MSRP-ish;
  // dispensaries set cannabis pricing, so it varies by store).
  products: [
    { sku: "GODFATHER", name: "The Godfather", nick: "The Boss", emoji: "👑", line: "Cannagar · 12g · Rosin Infused", img: "img/cannagars/godfather.png",
      flower: "10g flower", conc: "2g live rosin", burn: "2+ hours", total: "12g", price: "$382–420", msrp: "≈ $400 (up to $660 at premium NYC shops)",
      blurb: "The Boss. Largest, most iconic cannagar — 12g total (10g flower + 2g live rosin) in 24kt gold paper, by a trained Canna-Torcedor. Burns 2+ hours. Premium in presence, timeless by design." },
    { sku: "CAPO", name: "The Capo", nick: "The Underboss", emoji: "⚔️", line: "Cannagar · 6g · Rosin Infused", img: "img/cannagars/capo.png",
      flower: "5g flower", conc: "1g live rosin", burn: "1+ hour", total: "6g", price: "$195", msrp: "≈ $195",
      blurb: "The Underboss. 6g (5g flower + 1g rosin), 24kt gold paper + Jade Green Dragon Tip. Strong, composed, always delivers. Also a 'Benny' edition wrapped in $100-bill paper. Always in position." },
    { sku: "GOOMAH", name: "The Goomah", nick: "The Mistress", emoji: "💋", line: "Cannagar · 3g · Rosin Infused", img: "img/cannagars/goomah.png",
      flower: "2.5g flower", conc: "0.5g live rosin", burn: "30–45 min", total: "3g", price: "$120", msrp: "≈ $120",
      blurb: "The Mistress. 3g (2.5g flower + 0.5g rosin), natural wooden tip, velvety draw. The entry cannagar — potent and premium in a compact size. Seductively smooth, made to entice." },
    { sku: "SOLDATO", name: "The Soldato", nick: "The Soldier", emoji: "🪖", line: "Infused Joint · 2.4g", img: "img/joints/RiceSoldato.png",
      flower: "2g flower", conc: "0.4g live rosin", burn: "15–20 min", total: "2.4g", price: "$45–60", msrp: "≈ $45–60",
      blurb: "The Soldier. A 2.4g infused joint (plumber technique, bamboo skewer + clear Dragon Tip). Hard-hitting, clean-burning, tactical. Ready when called, built with purpose." },
    { sku: "BAMBINO", name: "The Bambino — 2pk", nick: "The Baby", emoji: "🍼", line: "Rosin Infused Joints · 2×0.5g", img: "img/joints/Bambino_RedTip.png",
      flower: "0.5g ×2 flower", conc: "live rosin", burn: "10–15 min each", total: "1g", price: "$37", msrp: "≈ $37 (2-pack)",
      blurb: "The Baby. Two 0.5g infused joints (knock-box method). Pocket-sized powerhouse for quick breaks, beginners, or an add-on. Small in size, big in presence." },
    { sku: "CHALICE", name: "The Chalice", nick: "", emoji: "🏆", line: "Vaporizer · concentrate + 510", img: "img/chalice/c1.jpg",
      flower: "", conc: "", burn: "burn-free", total: "", price: "shop.xiaolin.com", msrp: "see shop.xiaolin.com",
      blurb: "Burn-free luxury. A vaporizer with a detachable octagonal glass chalice + gold rim — vapor fills the cup, you lift and sip like a toast. No ash, no burn. Ceremony ready." },
  ],

  modules: [
    { id: 1, level: "Basic",    title: "Welcome to the Family", tag: "The brand & the family", bonus: 100 },
    { id: 2, level: "Medium",   title: "Know the Product",      tag: "Lineup, specs & price",  bonus: 200 },
    { id: 3, level: "Advanced", title: "Sell Like a Made Man",  tag: "Spot the baller, close", bonus: 300 },
    { id: 4, level: "High Council", title: "The High Council",  tag: "Roles, workshops, craft", bonus: 500 },
  ],

  sections: [
    /* ═════════ MODULE 1 · BASIC — Welcome to the Family ═════════ */
    {
      n: 1, module: 1, key: "welcome", title: "Welcome to Xiaolin",
      tag: "The brand", hero: "img/medallion.jpg",
      body: [
        "<strong>Welcome to the family.</strong> Made in Xiaolin (say it <em>\"SHAO-lin\"</em>) is a cannabis <strong>lifestyle</strong> brand built on craft, culture, and experience — founded by <strong>Christopher Louie</strong> in <strong>Colorado, 2018</strong>, and now <strong>Made in New York</strong>, hand-rolled in <strong>Warwick, NY</strong>.",
        "<strong>The name.</strong> Xiaolin is a tribute to where Chris grew up — <strong>Staten Island, NY, a.k.a. \"Shaolin\"</strong> (Wu-Tang fans catch that). He and his wife train in <strong>Shaolin Kung Fu</strong>, and that philosophy of <em>balance</em> runs straight into the product — a balance of flower and concentrate, Rolled Proper.",
        "<strong>The origin story.</strong> The brand was born out of <strong>healing</strong>: Chris survived a gunshot and used cannabis for pain management. It grew into something deeper — a practice rooted in Shaolin discipline, built to <strong>celebrate life's real moments</strong>.",
        "<strong>Know your market: this is for ballers.</strong> Xiaolin is the top of the menu — the flex. It's for the customer who wants the best of the best, who wants to reach into their pocket and pull out something that makes the <em>whole room go \"damn.\"</em> Your job is to spot that customer and make them feel like the boss they came in to be.",
        "<strong>Credibility to drop:</strong> featured in <strong>High Times, Playboy, and Forbes</strong>, with a 2024 New York launch as <em>the</em> luxury cannabis cigar.",
        "Two words carry it all at the counter: <strong>Rolled Proper.</strong> You're not selling a smoke — you're handing someone a <strong>moment</strong>.",
      ],
      quiz: [
        { q: "Who founded Made in Xiaolin?", o: { A: "Christopher Louie", B: "A holding company", C: "Wu-Tang Clan", D: "A dispensary chain" }, a: "A",
          e: "Christopher Louie — Colorado 2018, now Made in New York (Warwick)." },
        { q: "Where does the name 'Xiaolin' come from?", o: { A: "China", B: "Staten Island, NY (\"Shaolin\")", C: "A strain", D: "Random" }, a: "B",
          e: "Staten Island = Shaolin (the Wu-Tang reference) + Shaolin Kung Fu." },
        { q: "Who is the Xiaolin customer?", o: { A: "Bargain hunters", B: "Ballers — the best-of-the-best, impress-the-room buyer", C: "Medical only", D: "Wholesale" }, a: "B",
          e: "Luxury/flex. Spot the big spender; make them feel like a baller." },
        { q: "The brand was born out of…", o: { A: "A marketing agency", B: "Healing — the founder survived a gunshot, used cannabis to recover", C: "A bet", D: "Tobacco" }, a: "B",
          e: "Healing + Shaolin discipline → celebrating real moments." },
        { q: "Two words that carry the brand?", o: { A: "Rolled Proper", B: "Big Clouds", C: "Cheap & Fast", D: "Get High" }, a: "A",
          e: "Rolled Proper. Say it — it IS the brand." },
      ],
    },
    {
      n: 2, module: 1, key: "family", title: "The Family",
      tag: "Meet the lineup", hero: "img/joints/lineup.png",
      body: [
        "The lineup is a <strong>family</strong>, and every member has a role and a name. Learn them — customers love the story, and the story is what sells the flex.",
        "<strong>The cannagars</strong> (cannabis cigars): <strong>The Godfather</strong> 👑 = \"The Boss,\" <strong>The Capo</strong> ⚔️ = \"The Underboss\" (from <em>caporegime</em>), <strong>The Goomah</strong> 💋 = \"The Mistress\" (from <em>comare</em>). They <strong>double in size</strong> as they go up: Goomah → Capo → Godfather.",
        "<strong>The infused joints:</strong> <strong>The Soldato</strong> 🪖 = \"The Soldier,\" and <strong>The Bambino</strong> 🍼 = \"The Baby\" (a twin pack).",
        "<strong>The Chalice</strong> 🏆 rounds it out — the burn-free vaporizer for the concentrate crowd.",
        "One thing they all share: every roll is <strong>infused</strong> — premium flower <em>plus</em> live rosin at a <strong>20% ratio (1 part rosin : 5 parts flower)</strong>. That's serious flavor, potent clouds, and a clean, even burn. It's why a Xiaolin hits different than a normal pre-roll.",
        "When a customer picks up a Made in Xiaolin product, they're not just holding a cannagar — <strong>they're holding a statement.</strong> This thing of ours moves with intention. Welcome to the family.",
      ],
      quiz: [
        { q: "Godfather → Capo → Goomah are the three…", o: { A: "Joints", B: "Cannagars (cigars), doubling in size", C: "Vapes", D: "Accessories" }, a: "B",
          e: "Cannagars, doubling in size up the ladder." },
        { q: "Which two are the infused JOINTS?", o: { A: "Soldato & Bambino", B: "Godfather & Capo", C: "Goomah & Chalice", D: "Capo & Goomah" }, a: "A",
          e: "Soldato (Soldier) and Bambino (Baby)." },
        { q: "Every Xiaolin roll is infused at what ratio?", o: { A: "20% live rosin (1:5 rosin to flower)", B: "Flower only", C: "50/50", D: "CBD" }, a: "A",
          e: "20% live rosin — 1 part rosin to 5 parts flower." },
        { q: "The Capo's name comes from…", o: { A: "caporegime (a trusted lieutenant)", B: "a city", C: "a strain", D: "nothing" }, a: "A",
          e: "Caporegime — leads with quiet authority. The Underboss." },
        { q: "The Bambino is…", o: { A: "The biggest cannagar", B: "The Baby — a twin-pack of small joints", C: "A vaporizer", D: "A tool" }, a: "B",
          e: "The Baby — two small infused joints." },
      ],
    },
    {
      n: 3, module: 1, key: "proper", title: "Rolled Proper & Our Name",
      tag: "The code", hero: "img/chalice/c-hand.jpg",
      body: [
        "<strong>Rolled Proper</strong> is the code. It comes from <strong>Notorious B.I.G.</strong>: <em>\"I only smoke blunts if they rolled proper.\"</em> Xiaolin loved it so much they <strong>trademarked it</strong> and built a standard around it.",
        "The <strong>Rolled Proper Standard</strong> — five promises in every piece: <strong>📏 Visual Symmetry</strong> (balanced, clean, crafted on purpose), <strong>💨 Smooth Draw</strong> (a central airway from the skewer — no clogs), <strong>🔥 Slow, Even Burn</strong> (no canoes, no side-burns), <strong>🪨 Strong Ash</strong> (proof of proper cure + pack), and <strong>👅 Flavor Before Fire</strong>.",
        "<strong>Flavor Before Fire</strong> is the core value: Xiaolin doesn't chase THC numbers — it chases <strong>taste</strong>. Flower and concentrate are sourced <em>blind</em> by a flavor-review team (no names, no numbers, no bias). If it doesn't hit on flavor, it doesn't make the cut.",
        "<strong>\"A made man\"</strong> is someone who earned their stripes — respected, trusted, untouchable. Xiaolin builds every product with that same precision and earned respect. The sizes are a nod to a <strong>family hierarchy</strong> where every role is critical.",
        "<strong>VSXL = Very Special Xiaolin.</strong> Inspired by labels like <em>VSOP</em> on fine cognac, it marks something rare: premium build, gold-detailed finish, slow even burn, designed for milestones. Every Godfather, Capo, and Goomah is VSXL. The gold isn't for show — <strong>it's gold on purpose.</strong>",
        "So when a customer asks <em>\"what's Rolled Proper?\"</em> — you don't recite. You <strong>show them</strong>: the symmetry, the ash, the burn. The product speaks louder than any pitch.",
      ],
      quiz: [
        { q: "Where does 'Rolled Proper' come from?", o: { A: "Notorious B.I.G.", B: "A dictionary", C: "Shaolin scripture", D: "A customer" }, a: "A",
          e: "Biggie: 'I only smoke blunts if they rolled proper.' Trademarked." },
        { q: "Which is NOT one of the 5 Rolled Proper Standards?", o: { A: "Visual Symmetry", B: "Smooth Draw", C: "Highest THC %", D: "Strong Ash" }, a: "C",
          e: "It's Flavor Before Fire — they chase taste, NOT THC numbers." },
        { q: "How does Xiaolin source flower & concentrate?", o: { A: "Cheapest bulk", B: "Blind flavor review — no names, no numbers", C: "By THC % only", D: "Random" }, a: "B",
          e: "Blind. If it doesn't hit on flavor, it doesn't make the cut." },
        { q: "VSXL stands for…", o: { A: "Very-Super-Extra-Large", B: "Very Special Xiaolin", C: "Vacuum-Sealed XL", D: "Variable Size" }, a: "B",
          e: "Very Special Xiaolin — inspired by VSOP cognac." },
        { q: "What does the gold paper signal?", o: { A: "Nothing — decoration", B: "VSXL — premium, milestone-grade; it leaves gold flakes in the ash", C: "It's fake", D: "Lower grade" }, a: "B",
          e: "Gold on purpose — the VSXL mark of a statement piece." },
      ],
    },

    /* ═════════ MODULE 2 · MEDIUM — Know the Product ═════════ */
    {
      n: 4, module: 2, key: "cannagars", title: "The Cannagars",
      tag: "The flagships + price", hero: "img/cannagars/godfather.png",
      body: [
        "A <strong>cannagar</strong> is Xiaolin's take on a cannabis cigar — built to burn long and smooth. The process is inspired by the <strong>Thai-stick method</strong> (1970s): infused flower is compressed under steady pressure around a skewer to form a dense, slow-burning core. Pull the skewer and you get a clean central airway for a perfect draw. Xiaolin uses <strong>3D-printed molds and custom machines</strong> for consistency.",
        "The hands behind it are <strong>Canna-Torcedors</strong> — a title borrowed from the cigar world's <em>torcedor</em> (master roller). All cannagars are infused with <strong>live rosin at 20%</strong>.",
        "<strong>👑 The Godfather</strong> — the flagship. <strong>12g</strong> total (10g flower + 2g live rosin), wrapped in 24kt gold, burns <strong>2+ hours</strong>. Price point: <strong>≈ $400</strong> (up to $660 at premium NYC shops). For weddings, anniversaries, major wins, nights with real ones — or anyone <em>shopping for an occasion or looking to impress.</em>",
        "<strong>⚔️ The Capo</strong> — the Underboss. <strong>6g</strong> (5g + 1g), 24kt gold + Jade Green Dragon Tip, burns <strong>1+ hour</strong>. Price point: <strong>≈ $195</strong>. There's a <strong>\"Benny\"</strong> edition wrapped in real $100-bill rolling paper. For birthdays, luxury dinners, executive gifting.",
        "<strong>💋 The Goomah</strong> — the Mistress and the entry cannagar. <strong>3g</strong> (2.5g + 0.5g), natural wooden tip, burns <strong>30–45 min</strong>. Price point: <strong>≈ $120</strong>. For rooftop sessions, romantic settings, after-hours — potent and premium in a compact size.",
        "<strong>Cannagars are ceremonial</strong> — built for celebration, presence, and meaning. They're what you reach for when the moment deserves something more. The price ladder is your upsell: curious → Goomah; celebration → Godfather.",
      ],
      quiz: [
        { q: "The cannagar process is inspired by…", o: { A: "The Thai-stick method (flower compressed around a skewer)", B: "Vape pods", C: "Microwaving", D: "Machine extrusion only" }, a: "A",
          e: "Thai stick + modern 3D-printed molds for consistency." },
        { q: "A trained Xiaolin roller is called a…", o: { A: "Canna-Torcedor", B: "Barista", C: "Bud-tech", D: "Picker" }, a: "A",
          e: "Canna-Torcedor — from the cigar world's master roller." },
        { q: "The Godfather's specs & price?", o: { A: "12g, 2+ hr, ≈ $400", B: "3g, 30 min, $40", C: "6g, 1 hr, $195", D: "1g, 10 min, $20" }, a: "A",
          e: "12g (10+2), 2+ hr, ≈ $400 (up to $660 premium NYC)." },
        { q: "What's the Capo 'Benny' edition?", o: { A: "Wrapped in real $100-bill rolling paper", B: "A discount", C: "CBD version", D: "A vape" }, a: "A",
          e: "The Benny — $100-bill wrap. Pure flex." },
        { q: "Customer new to cannagars — start them on…", o: { A: "The Godfather", B: "The Goomah (≈ $120, the entry cannagar)", C: "The Bambino", D: "The Chalice" }, a: "B",
          e: "Goomah is the entry cannagar. Then ladder up." },
      ],
    },
    {
      n: 5, module: 2, key: "joints", title: "The Joints & Dragon Tip",
      tag: "Soldato, Bambino, glass", hero: "img/joints/RiceSoldato.png",
      body: [
        "Where cannagars are ceremonial, the <strong>infused joints</strong> are practical — same standard, pocket size.",
        "<strong>🪖 The Soldato</strong> — the Soldier. <strong>2.4g</strong> (2g flower + 0.4g live rosin), rolled with the <strong>plumber technique</strong>: a bamboo skewer driven through the center, left in until you're ready. <strong>Pull it like a cork from a bottle</strong> right before lighting — a small ritual before the flame. Finished with a clear Dragon Tip. Burns 15–20 min. Price point <strong>≈ $45–60</strong>. Tactical: hard-hitting, clean, reliable.",
        "<strong>🍼 The Bambino</strong> — the Baby. A 2-pack of <strong>0.5g</strong> infused joints, made with the <strong>knock-box method</strong> under a Canna-Torcedor's oversight. Burns 10–15 min each. Price point <strong>≈ $37</strong>. A pocket-sized powerhouse — perfect for quick breaks, first-timers, or an <strong>add-on to a bigger purchase.</strong>",
        "<strong>The Dragon Tip</strong> — Xiaolin's premium, reusable, handcrafted <strong>vortex glass</strong> mouthpiece, engineered with <strong>8 holes</strong> to evenly distribute airflow for a cooler, smoother pull. The Capo carries a <strong>Jade Green</strong> Dragon Tip; the Soldato a <strong>clear</strong> one. It's a true experience elevator — and a great upsell.",
        "Two roll techniques to know: the <strong>Knock-box</strong> (consistency + speed, still hand-finished and inspected) and the <strong>Plumber technique</strong> (the skewer that leaves a clean airway). Different format, same foundation — Rolled Proper.",
        "Reading the customer: solo flavor-chaser → <strong>Soldato</strong>; first-timer, quick break, or add-on → <strong>Bambino</strong>.",
      ],
      quiz: [
        { q: "What's the Soldato's signature build?", o: { A: "Plumber technique — bamboo skewer pulled like a cork before lighting", B: "Hollow tube", C: "No airway", D: "Two joints" }, a: "A",
          e: "Skewer through the center; pull it right before the flame." },
        { q: "The Bambino comes as…", o: { A: "A 2-pack of 0.5g infused joints (knock-box method)", B: "One cannagar", C: "A vape", D: "A glass tip" }, a: "A",
          e: "Two 0.5g joints — the Baby. Great add-on." },
        { q: "The Dragon Tip is…", o: { A: "A reusable vortex glass mouthpiece, 8 holes for airflow", B: "A strain", C: "A discount", D: "A lighter" }, a: "A",
          e: "Handcrafted vortex glass — cooler, smoother pull. Upsell it." },
        { q: "Soldato price point is roughly…", o: { A: "≈ $45–60", B: "$5", C: "$400", D: "$1,000" }, a: "A",
          e: "≈ $45–60 for the infused Soldier." },
        { q: "A first-timer or quick-break customer → ", o: { A: "The Bambino", B: "Three Godfathers", C: "The Chalice only", D: "Nothing" }, a: "A",
          e: "Bambino — pocket powerhouse, easy entry, great add-on." },
      ],
    },
    {
      n: 6, module: 2, key: "chalice", title: "The Chalice & Gear",
      tag: "Vape, accessories, your merch", hero: "img/merch/hat-red.png",
      body: [
        "<strong>🏆 The Chalice</strong> is Xiaolin's showpiece vaporizer — for the customer browsing high-end concentrates or carts. It takes <strong>live rosin / concentrate OR any 510-thread cartridge</strong>, with full temperature control.",
        "What makes it special: a detachable <strong>octagonal glass chalice with a gold rim</strong>. When activated, vapor fills the cup — <strong>you don't inhale through a mouthpiece, you lift the cup and sip, like a toast.</strong> No ash, no burn, just vapor and ritual. Finished in soft-touch red, black, white, metallic gold, and woodgrain.",
        "<strong>The pro line to use:</strong> <em>\"This isn't something you smoke — it's something you sip.\"</em> Perfect for upscale gifting, intimate gatherings, and mindful wind-downs.",
        "<strong>The accessories</strong> (the upsell kit): the <strong>Cutter</strong> (red + gold cannagar cutter — functional and a statement piece), the <strong>Signature Torch</strong> (small intense flame for the proper light), and the <strong>Clothing</strong> line (bold logos, clean minimalist detailing). When a customer loves their cannagar, the kit is <strong>Cutter + Torch + Dragon Tip.</strong>",
        "<strong>Earn-it merch (this program):</strong> a co-branded <strong>Xiaolin × your shop tote</strong> and <strong>red trucker hat</strong> — earned with points, not bought. High Council members unlock <strong>exclusive, limited merch not available to the public.</strong>",
        "Everything connects: gear isn't a side item, it's part of the lifestyle. Sell the ritual, not just the roll.",
      ],
      quiz: [
        { q: "How do you use the Chalice?", o: { A: "Lift the glass cup and sip the vapor — like a toast", B: "Light it on fire", C: "Eat it", D: "Inhale through a straw" }, a: "A",
          e: "Vapor fills the chalice; you sip. No ash, no burn." },
        { q: "The Chalice accepts…", o: { A: "Live rosin/concentrate OR any 510 cartridge", B: "Flower only", C: "Nothing", D: "Only Xiaolin pods" }, a: "A",
          e: "Concentrate or any 510 cart, full temp control." },
        { q: "Best line for the Chalice?", o: { A: "'This isn't something you smoke — it's something you sip'", B: "'It's cheap'", C: "'It's just a vape'", D: "Say nothing" }, a: "A",
          e: "Sip, not smoke — frame the ritual." },
        { q: "The upsell 'kit' for a cannagar buyer is…", o: { A: "Cutter + Torch + Dragon Tip", B: "Nothing", C: "A different brand", D: "A refund" }, a: "A",
          e: "The kit that makes the ritual proper." },
        { q: "What merch can a budtender EARN here?", o: { A: "Xiaolin × shop tote + red trucker hat", B: "A car", C: "Nothing", D: "Only stickers" }, a: "A",
          e: "Co-branded tote + hat, earned with points." },
      ],
    },

    /* ═════════ MODULE 3 · ADVANCED — Sell Like a Made Man ═════════ */
    {
      n: 7, module: 3, key: "read", title: "Read the Room",
      tag: "Spot the baller", hero: "img/gen/nightlife.jpg",
      body: [
        "Selling Xiaolin isn't about pushing product — it's about <strong>reading the room</strong> and creating a moment. The first job is recognizing the customer who's <strong>ready to spend real money and go out feeling like a baller.</strong>",
        "<strong>Listen before you lead.</strong> If you pay attention, most people tell you what they want. Start with a vibe-check, not a pitch. Openers: <em>\"What brings you in today?\" · \"Are you celebrating anything?\" · \"Looking for something new, or something special?\"</em> Let their energy guide your next move.",
        "<strong>Spot the signals.</strong> Dressed up / heading out, shopping for a gift, asking for \"the best you've got,\" celebrating a win, or eyeing the premium case — that's a baller moment. Walk the cannagar over <em>first</em>. Make them feel seen.",
        "<strong>Go beyond Sativa / Indica / Hybrid.</strong> \"Is this a Sativa?\" is the most common — and most misleading — question. People aren't asking for a plant type; they're asking for a <strong>feeling, a moment.</strong> Shift the conversation: <em>\"What kind of experience are you looking for? Winding down? Celebrating? Going somewhere special?\"</em> — <em>\"Xiaolin is built to mark a moment — what moment are you trying to create?\"</em>",
        "<strong>Match the product to the moment</strong> (the quick map): first-timer / casual → Bambino or Goomah; big celebration (birthday, wedding) → Capo or Godfather; flavor-chasing solo smoker → Soldato; browsing concentrates/carts → the Chalice. Don't overwhelm — help them find <em>the one.</em>",
        "Keep it simple, keep it personal. You're not pitching — you're guiding someone into the moment they came in to have.",
      ],
      quiz: [
        { q: "First move with any customer?", o: { A: "Listen / vibe-check before you lead", B: "Push the most expensive item", C: "Recite the menu", D: "Ignore them" }, a: "A",
          e: "Listen before you lead — let their energy guide you." },
        { q: "Best reframe for 'Is this a Sativa?'", o: { A: "'What kind of experience / moment are you looking for?'", B: "'Yes.'", C: "'Does it matter?'", D: "Walk away" }, a: "A",
          e: "Sell the moment, not the plant label." },
        { q: "A customer asks for 'the best you've got' and is dressed up. That's…", o: { A: "A baller moment — walk the cannagar over first", B: "A time-waster", C: "A Bambino sale", D: "Ignore it" }, a: "A",
          e: "Spot the spender; lead with the flagship." },
        { q: "Flavor-chasing solo smoker → recommend…", o: { A: "The Soldato", B: "Three Godfathers", C: "Nothing", D: "The tote" }, a: "A",
          e: "Soldato — tactical, flavorful, solo." },
        { q: "Browsing high-end concentrates / carts → introduce…", o: { A: "The Chalice", B: "The Bambino", C: "A lighter", D: "Flower" }, a: "A",
          e: "Chalice — the concentrate ritual." },
      ],
    },
    {
      n: 8, module: 3, key: "present", title: "Present the Experience",
      tag: "The 7-step ritual", hero: "img/chalice/c1.jpg",
      body: [
        "<strong>You're not presenting a product — you're curating an experience.</strong> When you hand someone a Xiaolin, treat it like a ritual. Here's the founder's seven-step flow:",
        "<strong>1 · Set the tone.</strong> Before you speak, speak with presence — stand tall, relax, eye contact, move with intention. Line: <em>\"Would you like to see something special?\"</em> (soft but confident, like letting them in on a secret). The first 5 seconds set the energy.",
        "<strong>2 · Introduce Xiaolin.</strong> A short statement of identity, not a pitch: <em>\"This is Xiaolin — they craft cannabis cigars and joints for moments that matter. Weddings, birthdays, milestones… or just making it through a tough week.\"</em>",
        "<strong>3 · Tell the story.</strong> <em>\"This brand was born out of healing — the founder survived a gunshot and used cannabis to recover. It grew into a practice rooted in Shaolin discipline, built to celebrate life's real moments.\"</em> Let it breathe. You're sharing presence, not pitching.",
        "<strong>4 · Present the product.</strong> Don't toss the box — <strong>display it like a bottle of vintage wine.</strong> Open it slowly, angle it so light catches the gold liner and the logo. <strong>5 · Explain the craft</strong> in plain, elevated language: <em>\"12 grams — 10 of premium flower infused with 2 of live rosin, slow-cured, wrapped in 24kt gold by a trained Canna-Torcedor. That gold leaves flakes in the ash.\"</em>",
        "<strong>6 · Invite the senses.</strong> Let them smell the infusion, look closely, feel the weight: <em>\"Take your time — that's what intention feels like.\"</em> <strong>7 · Close the experience:</strong> <em>\"This isn't something you light just to get high. This is something you light when it matters.\"</em> Pause. Smile. That's it.",
        "<strong>Use flavor language, not strain names.</strong> People don't connect with \"Gorilla Breath.\" Describe the taste and feeling: <em>\"sweet citrus up front, then a deep gassy finish\" · \"creamy dessert with a little spice on the back end\" · \"like a sunset — warm, mellow, smooth.\"</em> You're building a sensory experience.",
      ],
      quiz: [
        { q: "Step 1 of presenting a Xiaolin?", o: { A: "Set the tone with presence — 'Want to see something special?'", B: "Quote the price first", C: "Hand them the box fast", D: "List every strain" }, a: "A",
          e: "Set the tone; the first 5 seconds set the energy." },
        { q: "How should you handle the product?", o: { A: "Display it slowly, like a bottle of vintage wine", B: "Toss it across the counter", C: "Keep it in the drawer", D: "Hide the gold" }, a: "A",
          e: "Present it — angle the light on the gold and logo." },
        { q: "Instead of strain names, use…", o: { A: "Flavor language (taste + feeling)", B: "THC % only", C: "Latin names", D: "Nothing" }, a: "A",
          e: "Describe the taste and the feeling — sensory selling." },
        { q: "The founder's story to share is…", o: { A: "Born out of healing — survived a gunshot, Shaolin discipline", B: "A lottery win", C: "A tobacco merger", D: "Keep it secret" }, a: "A",
          e: "Healing → Shaolin → celebrating real moments." },
        { q: "The closing line is…", o: { A: "'This is something you light when it matters' (then pause)", B: "'Buy two get one'", C: "'Hurry up'", D: "Silence only" }, a: "A",
          e: "Close the experience, then let it land." },
      ],
    },
    {
      n: 9, module: 3, key: "price", title: "Hold the Price, Close",
      tag: "Objections like a boss", hero: "img/gen/event.jpg",
      body: [
        "The objection you'll face most is <strong>the price.</strong> Someone hears <strong>$420</strong> on a Godfather and their instinct kicks in — a raised eyebrow, a smirk, maybe <em>\"get outta here.\"</em> That reaction isn't disrespect — it means <strong>they don't understand what they're looking at yet.</strong> Your job: stand firm, stay calm, hold the value with confidence.",
        "<strong>\"That's expensive!\"</strong> → <em>\"It should be. A Godfather's packed with 2 grams of live rosin and 10 grams of top-shelf flower — flavor, time, and technique layered into a 2-hour experience.\"</em>",
        "<strong>\"That's pricey for a joint.\"</strong> → <em>\"You're not buying a joint. You're buying a memory — something handled by a trained Canna-Torcedor with the precision of a cigar artisan.\"</em>",
        "<strong>\"Why pay that when I can get something cheaper?\"</strong> → <em>\"If you're looking for something ordinary, there's plenty of that out there. These are for the moments that matter.\"</em> Then <strong>pause</strong> — let the silence work.",
        "<strong>The baller reframe</strong> (use it): <em>\"You ever see a really nice car, find out the price, and go 'damn, that's expensive' — but still want it anyway? That's what this is. It's meant to stand out.\"</em> No ego, just clarity and pride.",
        "<strong>The mindset:</strong> you're not closing a sale, <strong>you're opening an experience.</strong> Even if they don't buy today — and many won't — they'll remember how you carried it: the confidence, the energy. And when their moment comes, they'll know exactly where to go. Lean on the Rolled Proper Standard (symmetry, ash, burn, flavor) — let the product do the talking.",
      ],
      quiz: [
        { q: "A customer scoffs at the $420 Godfather. It usually means…", o: { A: "They don't understand what they're looking at yet — educate calmly", B: "They hate you", C: "Lower the price", D: "Give up" }, a: "A",
          e: "Hold value with confidence; show them what it is." },
        { q: "Best answer to 'that's pricey for a joint'?", o: { A: "'You're not buying a joint — you're buying a memory, by a trained Canna-Torcedor'", B: "'Yeah it's a rip-off'", C: "'Buy the cheap one'", D: "Shrug" }, a: "A",
          e: "Reframe joint → memory + craft." },
        { q: "The 'nice car' reframe means…", o: { A: "'Damn that's expensive — but you still want it. It's meant to stand out.'", B: "Cars are cheaper", C: "Don't buy it", D: "Nothing" }, a: "A",
          e: "The baller reframe — it's a flex you want anyway." },
        { q: "After a strong objection line, you should…", o: { A: "Pause — let the silence work", B: "Keep talking nervously", C: "Discount immediately", D: "Walk off" }, a: "A",
          e: "Pause. No pressure, just presence." },
        { q: "The right mindset on a sale?", o: { A: "You're opening an experience, not closing a sale", B: "Hit quota at all costs", C: "Pressure them", D: "It's just a transaction" }, a: "A",
          e: "Serve the moment; they'll remember how you carried it." },
      ],
    },
    {
      n: 10, module: 3, key: "roleplay", title: "Role Play — On the Floor",
      tag: "Live scenarios", hero: "img/gen/popup-dispensary.jpg",
      body: [
        "Time to run it. Below are real floor scenarios — read the customer, pick the move. There's a best answer for each, but the goal is the <strong>instinct</strong>: match the product to the moment, hold the value, make them feel like a baller.",
        "Remember the map: <strong>hours-long / celebration / impress</strong> → Godfather or Capo. <strong>Compact premium / romantic / after-hours</strong> → Goomah. <strong>Solo flavor / tactical</strong> → Soldato. <strong>First-timer / quick / add-on</strong> → Bambino. <strong>Concentrate crowd</strong> → Chalice.",
        "Lead with a question, present like a ritual, and never apologize for the price. Now — your shift starts. 👇",
      ],
      quiz: [
        { q: "A customer walks in dressed for the club, says they're headed to a party and want something that'll keep going for HOURS. You reach for…", o: { A: "The Godfather (or Capo) — a cannagar that burns 1–2+ hours, the flex for the room", B: "A single Bambino (10 min)", C: "The Chalice", D: "Tell them to come back" }, a: "A",
          e: "Party + hours + dressed to impress = Godfather/Capo. Hours-long burn, pass-around presence, total baller move." },
        { q: "Same customer hesitates at the price. Best line?", o: { A: "'You're walking into a party with something the whole room's gonna ask about — it burns for hours. That's not a joint, that's the night.'", B: "'It's overpriced, sorry.'", C: "'Get the Bambino instead.'", D: "Say nothing" }, a: "A",
          e: "Hold value + tie it to the flex and the hours. Sell the moment." },
        { q: "A nervous first-timer says they've 'never really smoked much.' You offer…", o: { A: "The Bambino or a Goomah — easy entry, not overwhelming", B: "The 12g Godfather", C: "Two Soldatos", D: "The Chalice on max temp" }, a: "A",
          e: "Match the moment — start them light. Build the relationship." },
        { q: "Someone's buying a 50th-anniversary gift for their parents and wants to impress. Recommend…", o: { A: "The Godfather — present it like vintage wine, tell the story", B: "A Bambino 2-pack", C: "A lighter", D: "Whatever's cheapest" }, a: "A",
          e: "Milestone = Godfather. Lead with the ritual + story." },
        { q: "A customer keeps asking 'is it Indica or Sativa?' You…", o: { A: "Reframe: 'What moment are you creating?' then match by occasion + flavor", B: "Just say 'Indica'", C: "Refuse to answer", D: "End the conversation" }, a: "A",
          e: "Move past the label — sell the experience and the moment." },
      ],
    },

    /* ═════════ MODULE 4 · THE HIGH COUNCIL — workshops & craft ═════════ */
    {
      n: 11, module: 4, key: "roles", title: "The Four Roles",
      tag: "What it means to be Made", hero: "img/medallion.jpg",
      body: [
        "The <strong>High Council</strong> is more than a title — it's a standard. As a member you're not just repping a product; you're carrying a legacy. You embody <strong>four roles</strong>:",
        "<strong>🎴 Brand Steward</strong> — you carry the Xiaolin image everywhere. How you speak, dress, and move; people feel Xiaolin through you. You make the brand tangible.",
        "<strong>📖 Culture Carrier</strong> — the products carry stories (recovery, resilience, celebration). When someone asks what Xiaolin is about, you don't list product names — you tell them what they <em>mean</em>. You remind them: Rolled Proper.",
        "<strong>🤝 Connector</strong> — you turn a moment into a memory. You don't just help someone find the right product; you help them find the right <strong>Xiaolin moment.</strong>",
        "<strong>💨 Craft Advocate</strong> — you know the difference between good and great and can explain <em>why ours is built different</em>. You carry the craft forward.",
        "And <strong>four responsibilities</strong> bring the roles to life: <strong>📚 Educate</strong> (you're the teacher), <strong>🗣️ Engage</strong> (listen, match energy, make it personal not transactional), <strong>🪞 Reflect</strong> (you're the brand's eyes and ears in the field), and <strong>🚶 Represent</strong> (your presence is the message — clean, sharp, intentional).",
      ],
      quiz: [
        { q: "Which is one of the four High Council roles?", o: { A: "Brand Steward", B: "Cashier", C: "Influencer", D: "Auditor" }, a: "A",
          e: "Brand Steward, Culture Carrier, Connector, Craft Advocate." },
        { q: "A 'Culture Carrier' does what?", o: { A: "Tells people what the products MEAN, not just their names", B: "Counts inventory", C: "Sets prices", D: "Cleans cases" }, a: "A",
          e: "Carries the stories — recovery, resilience, celebration." },
        { q: "The four responsibilities are Educate, Engage, Reflect, and…", o: { A: "Represent", B: "Retire", C: "Refund", D: "Restock" }, a: "A",
          e: "Educate · Engage · Reflect · Represent." },
        { q: "'Engage' means…", o: { A: "Listen, match energy, make it personal — not a pitch", B: "Hard-sell everyone", C: "Talk over them", D: "Stay silent" }, a: "A",
          e: "The story starts with THEM, not us." },
        { q: "A 'Connector' turns…", o: { A: "A moment into a memory", B: "A receipt into a refund", C: "A shift into overtime", D: "A no into a yes by pressure" }, a: "A",
          e: "Help them find the right Xiaolin moment." },
      ],
    },
    {
      n: 12, module: 4, key: "workshops", title: "The Workshops",
      tag: "Flavor · Craft · Engagement", hero: "img/chalice/c3.jpg",
      body: [
        "The full High Council runs deeper than this course — through hands-on <strong>workshops</strong>. Here's what they cover, and what you carry to the floor:",
        "<strong>👅 Flavor Review.</strong> Xiaolin's <strong>Flavor Before Fire</strong> value in action: the team samples flower and rosin <strong>blind</strong> — no strain names, no THC numbers, no bias. If it doesn't hit on flavor, it's cut. On the floor, this is your edge: <strong>sell flavor and feeling</strong>, not lab numbers.",
        "<strong>🏯 Production / The Craft.</strong> How it's really made: <strong>Canna-Torcedors</strong> compress infused flower around a skewer (the Thai-stick method, modernized with 3D-printed molds), infuse with <strong>live rosin at 20%</strong>, pull the skewer for a clean airway, and finish in 24kt gold. Knowing the craft is how you answer <em>\"why is it built different?\"</em> with authority.",
        "<strong>🤝 Customer Engagement.</strong> The deep version of Module 3 — reading intent, matching moments, flavor language, presentation, and objection handling, practiced live with the team.",
        "<strong>💠 High Council Connect</strong> is the quick intro session and the on-ramp; the full <strong>High Council Experience</strong> is the immersive course (and pizza). Both feed the <strong>Commissary</strong> — you earn points for sales, education, workshops, activations, and community.",
        "The throughline of every workshop: <strong>this thing of ours moves with intention.</strong> You don't just learn what the products are — you learn <em>when and why they matter.</em>",
      ],
      quiz: [
        { q: "What is 'Flavor Before Fire'?", o: { A: "Blind flavor review — taste over THC numbers", B: "Light it fast", C: "A torch brand", D: "Highest THC wins" }, a: "A",
          e: "Sampled blind; if it doesn't hit on flavor, it's cut." },
        { q: "Cannagars are infused with live rosin at…", o: { A: "20% (1 part rosin : 5 parts flower)", B: "0%", C: "90%", D: "Random" }, a: "A",
          e: "20% live rosin — flavor, potency, clean burn." },
        { q: "On the floor, the Flavor Review edge means you sell…", o: { A: "Flavor and feeling, not lab numbers", B: "THC % only", C: "The cheapest option", D: "By strain name only" }, a: "A",
          e: "Describe taste + experience — that's the craft talking." },
        { q: "Which is the quick intro on-ramp session?", o: { A: "High Council Connect", B: "The Commissary", C: "Flavor Review", D: "The Chalice" }, a: "A",
          e: "Connect = quick intro; Experience = the full immersive course." },
        { q: "Workshops feed which rewards system?", o: { A: "The Commissary (points for sales, education, workshops, activations)", B: "Nothing", C: "Payroll", D: "A raffle only" }, a: "A",
          e: "Earn points across everything — redeem for product/merch." },
      ],
    },

    /* ═════════ CAPSTONE · JOIN THE HIGH COUNCIL ═════════ */
    {
      n: 13, module: 4, key: "council", title: "Join the High Council", capstone: true,
      tag: "The ultimate prize", hero: "img/medallion.jpg",
      body: [
        "You've done the work — the brand, the lineup, the sales craft, the roles. Now the door opens: <strong>The High Council</strong>, Xiaolin's official program honoring sales associates with expert knowledge.",
        "<strong>The Commissary</strong> is the rewards engine. Earn points for every <strong>verified sale</strong> — <strong>Godfather 255 · Capo 130 · Goomah 70 · Soldato 45 · Bambino 20</strong> — plus points for training, workshops, and activations. Points <strong>never expire.</strong>",
        "<strong>Redeem for real product:</strong> Bambino <strong>800</strong>, Goomah <strong>2,800</strong>, Capo <strong>5,000</strong>, Godfather <strong>9,500</strong> — plus future Dragon Tips, apparel, and exclusive experiences. Submit proof of sale (your receipt), get approved, redeem.",
        "<strong>Exclusive access:</strong> Council-only events, workshops, and programs, plus <strong>limited merch not available to the public.</strong> It's the bridge from budtender to <strong>brand ambassador.</strong>",
        "<strong>Your path here:</strong> earn <strong>1,000 points</strong> — finish the four modules (+400) and log verified sales — and your invitation to <strong>apply</strong> unlocks: Xiaolin's real form, info packet, and training movie.",
        "Apply when you have a solid understanding of all things Xiaolin. <strong>Welcome to the family. We are Rolled Proper for you.</strong>",
      ],
      quiz: [
        { q: "What is the High Council Commissary?", o: { A: "The rewards engine — earn points for verified sales + training, redeem for product/merch", B: "A discount", C: "A glass piece", D: "A raffle" }, a: "A",
          e: "Earn via sales/education; redeem for product. Points never expire." },
        { q: "Points per Godfather sale?", o: { A: "255", B: "5", C: "9,500", D: "1" }, a: "A",
          e: "Godfather 255 · Capo 130 · Goomah 70 · Soldato 45 · Bambino 20." },
        { q: "How many points unlock the application here?", o: { A: "1,000", B: "100", C: "9,500", D: "50" }, a: "A",
          e: "1,000 — four modules (+400) + verified sales." },
        { q: "To earn sale points, you submit…", o: { A: "Proof of sale (your receipt)", B: "Nothing", C: "Cash", D: "A selfie" }, a: "A",
          e: "Receipt → reviewed/approved → points added." },
        { q: "The High Council makes you a…", o: { A: "Brand ambassador", B: "Cashier", C: "Competitor", D: "Grower" }, a: "A",
          e: "Budtender → brand ambassador. Welcome to the family." },
      ],
    },
  ],

  highCouncil: {
    medallion: "img/medallion.jpg",
    blurb: "Xiaolin's official program honoring sales associates with expert product knowledge — reward points for every verified sale, exclusive events, workshops, and limited merch.",
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdB12otvZPFUltdtxFNDmzetDyya83LY55cAdu9-faqHTb1ZA/viewform",
    packetUrl: "https://drive.google.com/drive/folders/1museYXd29L6XYAuaC9JhglgLA3kEJv7V",
    movieUrl: "https://drive.google.com/file/d/1bMuSECJGKJkJWaKV3uXGfzXUtuArlTKq/view?usp=drivesdk",
  },

  rewards: {
    discountPct: 50,
    discountCodeStem: "XIAOLIN-ROLLER-",
    giveaway: "Monthly VSXL cannagar draw",
    councilPts: 1000,
  },

  // The real High Council Commissary — earn per verified sale, redeem for product.
  commissary: {
    earn: { GODFATHER: 255, CAPO: 130, GOOMAH: 70, SOLDATO: 45, BAMBINO: 20 },
    trainingAttendance: 25,
    redeem: [
      { sku: "BAMBINO",   name: "Bambino Twin Pack", pts: 800,  img: "img/joints/Bambino_RedTip.png" },
      { sku: "GOOMAH",    name: "Goomah VSXL",       pts: 2800, img: "img/cannagars/goomah.png" },
      { sku: "CAPO",      name: "Capo VSXL",         pts: 5000, img: "img/cannagars/capo.png" },
      { sku: "GODFATHER", name: "Godfather VSXL",    pts: 9500, img: "img/cannagars/godfather.png" },
    ],
    future: ["Dragon Tips", "Xiaolin apparel", "Exclusive merch", "Limited accessories", "Event invitations", "Special experiences"],
  },

  tiers: [
    { pts: 100,  key: "code",    icon: "🏷️", title: "50% Budtender Code",
      desc: "Your personal discount on the entire lineup — unlocks at 100 pts." },
    { pts: 400,  key: "tote",    icon: "👜", img: "img/merch/tote-red.png",
      title: "Xiaolin Tote", desc: "Co-branded canvas tote — carry the studio. Earned at 400 pts." },
    { pts: 700,  key: "hat",     icon: "🧢", img: "img/merch/hat-red.png",
      title: "Xiaolin Trucker Hat", desc: "The red trucker, repping your shop. Earned, not bought — 700 pts." },
    { pts: 1000, key: "council", icon: "👑", img: "img/medallion.jpg",
      title: "The High Council", desc: "Xiaolin's inner circle. The ultimate prize — 1,000 pts." },
  ],
};

if (typeof module !== "undefined") module.exports = XIAOLIN;
