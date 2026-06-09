/* Made in Xiaolin — Roller Academy
 * Content merged from the official "Welcome to the Family" budtender kit +
 * the Premium Roll cheat sheet + madeinxiaolin.com. NY-forward.
 * Three training modules (Basic / Medium / Advanced) → High Council capstone.
 * Quizzes pass at 80% (4 of 5).
 */

const XIAOLIN = {
  brand: {
    name: "Made in Xiaolin",
    tagline: "Rolled Proper",
    founder: "Chris Louie",
    since: "2018",
    origin: "Evergreen, Colorado",
    ny: "Warwick, New York",
    vsxl: "Very Special Xiaolin",
    mission: "To achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.",
    press: ["High Times", "Playboy", "Forbes"],
  },

  // The lineup — official specs + family nicknames from the Welcome Kit.
  // Prices = live NY retail (Terp Bros Astoria + Alto Canna; dispensary-set, vary by store).
  products: [
    { sku: "GODFATHER", name: "The Godfather VSXL", nick: "The Boss", line: "Cannagar · Rosin Infused", img: "img/cannagars/godfather.png",
      flower: "10g flower", conc: "2g rosin", burn: "2–3 hours", total: "12g", price: "$382.30",
      blurb: "The Boss — our largest, longest-burning cannagar (10g flower + 2g rosin, 2–3 hr). The top of the line, the pinnacle of power and finesse." },
    { sku: "CAPO", name: "The Capo", nick: "The Underboss", line: "Cannagar · Rosin Infused", img: "img/cannagars/capo.png",
      flower: "5g flower", conc: "1g rosin", burn: "1–2 hours", total: "6g", price: "$194.69",
      blurb: "The Underboss — our mid-size cannagar (5g + 1g, 1–2 hr). The perfect mix of strength and elegance, commanding respect without a word." },
    { sku: "GOOMAH", name: "The Goomah VSXL", nick: "The Mistress", line: "Cannagar · Rosin Infused", img: "img/cannagars/goomah.png",
      flower: "2.5g flower", conc: "0.5g rosin", burn: "0.5–1 hour", total: "3g", price: "$120.00",
      blurb: "The Mistress — our smallest cannagar (2.5g + 0.5g, 0.5–1 hr). A loyal confidante: a moment of pleasure and escape, the entry into the cannagar world." },
    { sku: "SOLDATO", name: "The Soldato", nick: "The Soldier", line: "Infused Joint", img: "img/joints/RiceSoldato.png",
      flower: "2g flower", conc: "0.4g rosin", burn: "~30 minutes", total: "", price: "",
      blurb: "The Soldier — our standard infused joint (2g + 0.4g, ~30 min), plumbed with a skewer for the PROPER pull. Reliable, always ready to go." },
    { sku: "BAMBINO", name: "The Bambino — 2pk", nick: "The Baby", line: "Rosin Infused Joints", img: "img/joints/Bambino_RedTip.png",
      flower: "0.4g ×2 flower", conc: "0.1g ×2 rosin", burn: "5–10 min each", total: "3g", price: "$37.17",
      blurb: "The Baby — our smallest infused joint, two in the twin pack (0.4g + 0.1g each, 5–10 min). The ultimate 'dog-walker.' Small but mighty." },
    { sku: "KNIFE", name: "The Knife", nick: "", line: "Rolling Tool", img: "img/joints/lineup.png",
      flower: "", conc: "", burn: "", total: "", price: "",
      blurb: "The studio's signature rolling tool. The reward piece — earned, not bought." },
  ],

  // Three training modules, increasing depth. Each awards a completion bonus
  // into the points platform. Basic 50 + Medium 75 + Advanced 125 = 250 pts;
  // the rest of the climb to 1,000 (High Council) comes from sales (1 pt / $1).
  modules: [
    { id: 1, level: "Basic",    title: "Welcome to the Family", tag: "Start here · the brand", bonus: 50 },
    { id: 2, level: "Medium",   title: "Know the Product",      tag: "The lineup, in detail",  bonus: 75 },
    { id: 3, level: "Advanced", title: "Sell Like Made",        tag: "Ritual, FAQ & pairings", bonus: 125 },
  ],

  // Sections carry a module id. The capstone (High Council) sits after Module 3.
  sections: [
    /* ───────── MODULE 1 · BASIC — Welcome to the Family ───────── */
    {
      n: 1, module: 1, key: "welcome", title: "Welcome to Xiaolin",
      tag: "The brand", hero: "img/medallion.jpg",
      body: [
        "<strong>Welcome to the family.</strong> Made in Xiaolin (say it <em>\"SHAO-lin\"</em>) is the original creative rolling studio — founded by <strong>Chris Louie</strong> in <strong>Colorado, 2018</strong>, and now <strong>Made in New York</strong>, hand-rolled at the studio's workshop in <strong>Warwick, NY</strong>.",
        "Two words carry the whole brand at the counter: <strong>Rolled Proper.</strong> Every piece is hand-crafted in studio — luxury cannabis, not factory pre-rolls.",
        "The mission you're selling: <strong>excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.</strong> In NY, Xiaolin is the <strong>luxury / statement</strong> end of the menu.",
        "Holding a Xiaolin product isn't just enjoying the best-crafted cannabis — <em>it's making a statement.</em> It's about standing out, sparking curiosity, and being at the center of memorable moments. You're not moving units; you're handing someone <strong>presence</strong>.",
        "Credibility to drop: featured in <strong>High Times, Playboy, and Forbes</strong>, with a 2024 New York launch as <em>the</em> luxury cannabis cigar.",
      ],
      quiz: [
        { q: "Who founded Made in Xiaolin, and where?", o: { A: "Chris Louie — Colorado, 2018", B: "A holding company, 2021", C: "A dispensary chain", D: "Unknown" }, a: "A",
          e: "Chris Louie, Colorado, 2018 — now Made in New York (Warwick, NY)." },
        { q: "Two words that sum up the brand?", o: { A: "Rolled Proper", B: "Rolled Fast", C: "Made Cheap", D: "Big & Loud" }, a: "A",
          e: "Rolled Proper. It IS the brand — say it." },
        { q: "Where are Xiaolin's NY products rolled?", o: { A: "Denver", B: "Warwick, NY", C: "Overseas", D: "California" }, a: "B",
          e: "Warwick, New York. Made in New York, Rolled Proper." },
        { q: "How is Xiaolin positioned in NY?", o: { A: "Cheapest pre-rolls", B: "The luxury / statement end of the menu", C: "Bulk wholesale", D: "Vapes only" }, a: "B",
          e: "Luxury. You're selling presence and a statement, not a gram." },
        { q: "Which is real Xiaolin press?", o: { A: "High Times, Playboy, Forbes", B: "None", C: "Local radio only", D: "A vape blog" }, a: "A",
          e: "High Times, Playboy, Forbes + the 2024 NY luxury launch." },
      ],
    },
    {
      n: 2, module: 1, key: "family", title: "The Family",
      tag: "Meet the lineup", hero: "img/joints/lineup.png",
      body: [
        "The lineup is a <strong>family</strong>, and every member has a role. Learn the names and the nicknames — customers love the story.",
        "<strong>Cannagars</strong> (cannabis cigars): <strong>The Godfather</strong> = \"The Boss,\" <strong>The Capo</strong> = \"The Underboss,\" <strong>The Goomah</strong> = \"The Mistress.\"",
        "<strong>Infused joints:</strong> <strong>The Soldato</strong> = \"The Soldier,\" <strong>The Bambino</strong> (twin pack) = \"The Baby.\"",
        "One thing they all share: every Xiaolin roll is <strong>infused</strong> — hand-selected flower <em>plus</em> concentrate (rosin). That's why they hit harder and burn longer than a normal pre-roll.",
        "When you pick up a Made in Xiaolin product, you're not just holding a cannagar — <strong>you're becoming part of a legacy.</strong> Whether it's the Godfather or the Bambino, every boss started somewhere.",
      ],
      quiz: [
        { q: "The Godfather's family nickname is…", o: { A: "The Boss", B: "The Baby", C: "The Soldier", D: "The Mistress" }, a: "A",
          e: "Godfather = The Boss — top of the line." },
        { q: "Which two products are the infused JOINTS?", o: { A: "Godfather & Capo", B: "Soldato & Bambino", C: "Goomah & Capo", D: "Knife & Chalice" }, a: "B",
          e: "Soldato (Soldier) and Bambino (Baby) are the joints." },
        { q: "What does every Xiaolin roll have in common?", o: { A: "It's flower only", B: "It's infused — flower + concentrate", C: "It's CBD", D: "It's a vape" }, a: "B",
          e: "All infused: hand-selected flower + rosin." },
        { q: "The Bambino is nicknamed…", o: { A: "The Boss", B: "The Underboss", C: "The Baby", D: "The Mistress" }, a: "C",
          e: "Bambino = The Baby — small but mighty, twin pack." },
        { q: "The Capo is the…", o: { A: "Underboss (mid-size cannagar)", B: "Smallest joint", C: "Vaporizer", D: "Rolling tool" }, a: "A",
          e: "Capo = The Underboss, the mid-size cannagar." },
      ],
    },
    {
      n: 3, module: 1, key: "name", title: "Our Name",
      tag: "More than a name", hero: "img/chalice/c-hand.jpg",
      body: [
        "<strong>\"A made man\"</strong> is someone who's earned their stripes — respected, trusted, untouchable. At Made in Xiaolin, every product is built with that same <strong>precision, loyalty to craft, and earned respect</strong>.",
        "The sizes are a nod to the hierarchy of a family, where every role is critical and everyone knows their place:",
        "<strong>The Godfather</strong> — the pinnacle of power and finesse, where the best come to reign supreme. <strong>The Capo</strong> — second in command, strength and elegance. <strong>The Goomah</strong> — a loyal confidante, a moment of pleasure and escape.",
        "<strong>The Soldato</strong> — the soldier on the frontlines, reliable and always ready, whether it's your daily grind or a night out. <strong>The Bambino</strong> — small but mighty, the youngest, packing a punch.",
        "Every great empire is built one brick at a time, and every boss started somewhere. <strong>Welcome to the family. We are Rolled Proper for you.</strong>",
      ],
      quiz: [
        { q: "What does \"a made man\" stand for at Xiaolin?", o: { A: "Earned respect, loyalty to craft, precision", B: "Cheap and fast", C: "Mass-produced", D: "Imported" }, a: "A",
          e: "Earned stripes — respected, trusted, untouchable. Same as the craft." },
        { q: "Which product is \"the pinnacle of power and finesse\"?", o: { A: "The Bambino", B: "The Godfather", C: "The Soldato", D: "The Knife" }, a: "B",
          e: "The Godfather — where the best reign supreme." },
        { q: "The Soldato represents…", o: { A: "The frontline soldier — reliable, always ready", B: "The boss", C: "A vape", D: "Merch" }, a: "A",
          e: "The soldier: daily grind or a night out, always ready." },
        { q: "Made in Xiaolin's closing line is…", o: { A: "'Welcome to the family — we are Rolled Proper for you'", B: "'Thanks for shopping'", C: "'Buy more'", D: "'See you later'" }, a: "A",
          e: "Welcome to the family. We are Rolled Proper for you." },
        { q: "The product names are a nod to…", o: { A: "Random words", B: "The hierarchy / roles of a family", C: "Cities", D: "Colors" }, a: "B",
          e: "Each size is a role in the family hierarchy." },
      ],
    },

    /* ───────── MODULE 2 · MEDIUM — Know the Product ───────── */
    {
      n: 4, module: 2, key: "cannagars", title: "The Cannagar",
      tag: "V.S.X.L.", hero: "img/cannagars/godfather.png",
      body: [
        "A <strong>cannagar</strong> is a cannabis cigar — dense, slow-burning, made to be savored. Xiaolin's are <strong>V.S.X.L. = Very Special Xiaolin</strong> (that's what the letters mean — not a size code).",
        "<strong>How it's built:</strong> hand-selected flower (chosen for terpene profile, taste, structure, and appearance) is pressed and paired with concentrate, wrapped in a <strong>rice-paper shell</strong> and finished with <strong>24kt gold paper</strong> and a <strong>glass or wood tip etched with the medallion</strong>. Jewelry you smoke.",
        "<strong>The three, by role:</strong> <strong>Godfather</strong> (The Boss) — 10g + 2g, <strong>2–3 hr</strong>. <strong>Capo</strong> (The Underboss) — 5g + 1g, <strong>1–2 hr</strong>. <strong>Goomah</strong> (The Mistress) — 2.5g + 0.5g, <strong>0.5–1 hr</strong>, the entry cannagar.",
        "<strong>Lit time</strong> is the approximate burn time, calculated at roughly <strong>10–15 minutes per gram</strong>. That's the math behind \"2–3 hours\" on the Godfather — and your best line at the counter.",
        "That size ladder is your upsell: curious customer → start at the <strong>Goomah</strong>; celebration buyer → reach for the <strong>Godfather</strong>.",
      ],
      quiz: [
        { q: "What does V.S.X.L. actually stand for?", o: { A: "Very-Super-Extra-Large", B: "Very Special Xiaolin", C: "Variable Size XL", D: "Vacuum-Sealed XL" }, a: "B",
          e: "Very Special Xiaolin. Straight from the kit." },
        { q: "How is lit time calculated?", o: { A: "~10–15 min per gram", B: "1 hr flat", C: "By THC %", D: "Random" }, a: "A",
          e: "~10–15 min/gram — that's why the Godfather runs 2–3 hr." },
        { q: "The Godfather's specs?", o: { A: "2g + 0.4g, 30 min", B: "10g flower + 2g rosin, 2–3 hr", C: "5g + 1g, 1–2 hr", D: "0.4g, 5 min" }, a: "B",
          e: "10g + 2g, 2–3 hr. The Boss." },
        { q: "What's a Xiaolin cannagar wrapped/finished in?", o: { A: "Plastic", B: "Rice-paper shell, 24kt gold paper, glass/wood medallion tip", C: "Foil only", D: "Nothing" }, a: "B",
          e: "Rice shell + gold paper + glass/wood medallion tip." },
        { q: "Customer new to cannagars — start them on…", o: { A: "The Godfather", B: "The Goomah (entry cannagar)", C: "The Bambino", D: "The Chalice" }, a: "B",
          e: "Goomah — 2.5g, 0.5–1 hr. Then ladder up." },
      ],
    },
    {
      n: 5, module: 2, key: "joints", title: "The Infused Joint",
      tag: "Soldato, Bambino & the Dragon Tip", hero: "img/joints/RiceSoldato.png",
      body: [
        "<strong>The Soldato</strong> (The Soldier) — the standard infused joint, <strong>2g flower + 0.4g rosin, ~30 min</strong>. It's <strong>plumbed with a skewer</strong> for achieving the PROPER pull and an even burn line.",
        "Key counter tip: the Soldato ships with a <strong>\"remove before smoking\"</strong> skewer. Tell the customer to <strong>pull the skewer just before lighting</strong> — it opens the airway so the draw stays smooth.",
        "<strong>The Bambino</strong> (The Baby) — the smallest infused joint, <strong>0.4g + 0.1g, 5–10 min</strong>, <strong>two in the twin pack</strong>. The ultimate \"dog-walker\": share one with a friend or save one for later.",
        "<strong>The Dragon Tip</strong> — Xiaolin's premium, reusable, handcrafted <strong>vortex glass tip</strong>, engineered with <strong>8 holes</strong> to evenly distribute airflow for an optimum, cooler pull. Styles fit the Soldato joint and the Capo cannagar — a true experience elevator.",
        "Rice vs Natural paper: <strong>rice burns slower and cleaner</strong> with less paper taste — the connoisseur pick.",
      ],
      quiz: [
        { q: "What's special about the Soldato's build?", o: { A: "It's plumbed with a skewer for the proper pull", B: "It's hollow", C: "It has a filter only", D: "Nothing" }, a: "A",
          e: "Skewer-plumbed for the PROPER pull + even burn line." },
        { q: "When does the customer remove the Soldato skewer?", o: { A: "Never", B: "Just before lighting", C: "After smoking", D: "During the sale" }, a: "B",
          e: "Pull it right before smoking — preserves the airway." },
        { q: "The Bambino twin pack is…", o: { A: "Two infused joints, 5–10 min each", B: "One cannagar", C: "A vape", D: "A glass tip" }, a: "A",
          e: "Two in the pack — the 'dog-walker.'" },
        { q: "What is the Dragon Tip?", o: { A: "A strain", B: "A reusable vortex glass tip, 8 holes for airflow", C: "A discount", D: "A cannagar" }, a: "B",
          e: "Handcrafted vortex glass, 8 holes — cooler, even pull." },
        { q: "Why recommend Rice paper?", o: { A: "Cheaper", B: "Slower, cleaner burn, less paper taste", C: "More THC", D: "Only option" }, a: "B",
          e: "Rice = the connoisseur pick." },
      ],
    },
    {
      n: 6, module: 2, key: "merch", title: "The Merchandise",
      tag: "Chalice, gear & your reward merch", hero: "img/merch/hat-red.png",
      body: [
        "Xiaolin is a lifestyle brand — the gear matters. Know it; it's also what <strong>you earn</strong> in this academy.",
        "<strong>The Chalice Vaporizer</strong> — Xiaolin's cutting-edge electronic device (black, red, gold). <strong>Flavor-first</strong>: built for the pure essence of hash. It takes <strong>live rosin / hash OR any 510-threaded cartridge</strong>, has full <strong>temperature control</strong>, and is a serious <strong>cloud creator</strong>. A statement piece. (shop.xiaolin.com)",
        "<strong>The Cutter</strong> — XIAOLIN cannagar cutters, vibrant red with gold accents: functional and a statement piece. <strong>The Torch</strong> — the Signature Torch, a small intense flame for the proper light. <strong>Clothing</strong> — the Signature line, bold logos and clean minimalist detailing.",
        "<strong>Earn-it merch (this program):</strong> a co-branded <strong>Xiaolin × your shop tote</strong> and <strong>red trucker hat</strong> — earned with points, not bought. High Council members unlock <strong>exclusive, limited merch not available to the public.</strong>",
        "When a customer loves their cannagar, the upsell is the <strong>Cutter + Torch + Dragon Tip</strong> — the kit that makes the ritual proper.",
      ],
      quiz: [
        { q: "The Chalice Vaporizer accepts…", o: { A: "Only Xiaolin pods", B: "Live rosin/hash OR any 510 cartridge", C: "Flower only", D: "Nothing — it's decor" }, a: "B",
          e: "Live rosin/hash or any 510 cart. Flavor-first, cloud creator." },
        { q: "Which is a real Xiaolin accessory?", o: { A: "The Cutter (cannagar cutter)", B: "A keychain phone", C: "Rolling trays only", D: "None" }, a: "A",
          e: "Cutter, Torch, Clothing, Chalice — the gear line." },
        { q: "In THIS program, what merch can a budtender earn?", o: { A: "Nothing", B: "Xiaolin × shop tote + red trucker hat", C: "A car", D: "Only stickers" }, a: "B",
          e: "Co-branded tote + trucker hat, earned with points." },
        { q: "High Council members get…", o: { A: "Nothing extra", B: "Exclusive, limited merch not available to the public", C: "A discount only", D: "Parking" }, a: "B",
          e: "Limited High-Council-only merch." },
        { q: "Best upsell to a happy cannagar customer?", o: { A: "Cutter + Torch + Dragon Tip", B: "Nothing", C: "A different brand", D: "A refund" }, a: "A",
          e: "The kit that makes the ritual proper." },
      ],
    },

    /* ───────── MODULE 3 · ADVANCED — Sell Like Made ───────── */
    {
      n: 7, module: 3, key: "ritual", title: "The Ritual",
      tag: "Light · pop · store", hero: "img/gen/nightlife.jpg",
      body: [
        "<strong>How to light a cannagar:</strong> use a small <strong>torch lighter</strong> — its intense flame is ideal. Hold the flame to the <strong>foot</strong>, rotate so it burns evenly, 15–30 seconds at a time, then blow and rotate. <strong>Never</strong> light it in your mouth and inhale — that can burn your throat.",
        "<strong>Heads-up to share:</strong> smoke from the head can get <strong>extremely hot</strong> — tell customers to keep their lips back from the hole on the head.",
        "<strong>How to 'pop' a Soldato:</strong> grab the skewer just below the sticker and pull it down and out the foot — <strong>before lighting</strong> — for the proper airflow.",
        "<strong>Putting it out:</strong> leave it in an ashtray until it self-extinguishes, or use a <strong>cigar cutter</strong> to trim the burnt foot for a clean re-light. <strong>The roach</strong> is a bonus — drop it in a bowl for about <strong>5 more minutes</strong> of lit time.",
        "<strong>Storage:</strong> keep it in the <strong>sealed original packaging</strong> (good up to ~18 months from the production date), out of direct sunlight — or in a <strong>humidor at 62% RH for up to 90 days</strong>. Cannagars are delicate; handle with care.",
      ],
      quiz: [
        { q: "Best way to light a cannagar?", o: { A: "Torch the foot, rotate evenly, blow & repeat", B: "Light it in your mouth and inhale hard", C: "Microwave it", D: "A candle" }, a: "A",
          e: "Small torch on the foot, rotate. Never inhale-light it." },
        { q: "How do you 'pop' a Soldato before smoking?", o: { A: "Bite the tip", B: "Pull the skewer down and out the foot", C: "Soak it", D: "Nothing" }, a: "B",
          e: "Pull the skewer for the proper airflow." },
        { q: "What can you do with the roach?", o: { A: "Toss it", B: "Drop it in a bowl for ~5 more minutes", C: "Eat it", D: "Re-roll it" }, a: "B",
          e: "Bowl puck — ~5 min of lit time." },
        { q: "How should a customer store a cannagar?", o: { A: "Sealed packaging (~18 mo) or humidor 62% RH (90 days)", B: "In the freezer wet", C: "On a sunny sill", D: "In a pocket forever" }, a: "A",
          e: "Sealed + out of sun, or humidor at 62% RH." },
        { q: "What should customers know about the smoke?", o: { A: "It can be extremely hot — keep lips back", B: "It's cold", C: "It's odorless", D: "Nothing" }, a: "A",
          e: "Head smoke runs hot — keep lips off the hole." },
      ],
    },
    {
      n: 8, module: 3, key: "faq", title: "Customer Questions",
      tag: "Answer like a pro", hero: "img/gen/popup-dispensary.jpg",
      body: [
        "<strong>\"Why aren't the cannagars all the same length?\"</strong> Different strains have different structure, density, and stickiness, so they pack differently — lengths vary even within the same strain. It's a feature of hand-rolling, not a flaw.",
        "<strong>\"What's inside?\"</strong> Hand-selected flower paired with concentrate (rosin), matched by terpene profile and effect — named strain right on the package.",
        "<strong>\"How long does it last?\"</strong> Lit time ≈ 10–15 min per gram. Shelf life: like any cannabis, months in prime conditions — handle with care, they're delicate.",
        "<strong>\"It arrived damaged.\"</strong> Apologize, take care of the guest, and have the store contact Xiaolin (sales@madeinxiaolin.com) — they resolve issues quickly.",
        "<strong>\"Is it strong?\"</strong> Yes — it's infused, so it tests high (often 20–32% THC). Set expectations: a slow, potent, sit-down product. Pace yourself.",
      ],
      quiz: [
        { q: "Why do cannagar lengths vary?", o: { A: "Mistakes", B: "Strains differ in structure/density, so they pack differently", C: "Random cutting", D: "They don't" }, a: "B",
          e: "Strain structure & density → different lengths. Hand-rolled." },
        { q: "Roughly how is lit time figured?", o: { A: "~10–15 min per gram", B: "Always 20 min", C: "By price", D: "By color" }, a: "A",
          e: "~10–15 min/gram." },
        { q: "A customer's cannagar arrived damaged. You…", o: { A: "Take care of them + have the store contact Xiaolin", B: "Blame the customer", C: "Ignore it", D: "Tell them tough luck" }, a: "A",
          e: "Make it right; store emails sales@madeinxiaolin.com." },
        { q: "Why do Xiaolin pieces test high (20–32%)?", o: { A: "Added nicotine", B: "They're infused — flower + rosin", C: "Spray-on THC", D: "They don't" }, a: "B",
          e: "Infusion stacks rosin on flower. Set expectations." },
        { q: "What's inside a Xiaolin roll?", o: { A: "Hand-selected flower + rosin, matched by terpenes", B: "Mystery filler", C: "CBD only", D: "Tobacco" }, a: "A",
          e: "Named flower + rosin, paired on purpose." },
      ],
    },
    {
      n: 9, module: 3, key: "pairing", title: "Pairing & Selling",
      tag: "Match the moment, close it", hero: "img/gen/event.jpg",
      body: [
        "Life is meant to be celebrated in every moment, big or small. <strong>Match the product to the experience</strong> and the sale makes itself:",
        "<strong>Godfather</strong> → milestone moments (promotions, anniversaries, retirements), festive gatherings. <strong>Capo</strong> → concerts & festivals, sporting events, backyard parties. <strong>Goomah</strong> → weekend getaways, wine nights, fishing trips.",
        "<strong>Soldato</strong> → game nights, movie marathons, flavor chasers. <strong>Bambino</strong> → nature walks & dog walks, quick meetups, pre/post-gym. A light, share-able yes.",
        "<strong>Objection: \"too expensive.\"</strong> → It burns for <em>hours</em>, it's hand-rolled with gold paper and a glass tip, it's been in Forbes and High Times — cost-per-hour, the cannagar is a deal, and the Goomah is the easy entry.",
        "<strong>Objection: \"I just want flower.\"</strong> → This IS premium NY flower, rolled proper and infused — the upgrade, not the alternative. Close every rec with two words: <strong>Rolled Proper.</strong>",
      ],
      quiz: [
        { q: "Big anniversary / milestone — recommend…", o: { A: "The Godfather", B: "A single Bambino", C: "The Knife", D: "Nothing" }, a: "A",
          e: "Godfather = milestone moments & celebrations." },
        { q: "A quick dog-walk or catch-up smoke → ", o: { A: "The Godfather", B: "The Bambino", C: "Three cannagars", D: "The Chalice only" }, a: "B",
          e: "Bambino — the 'dog-walker,' light and quick." },
        { q: "Best counter to 'too expensive'?", o: { A: "Hours-long burn + hand-craft + national press = value; Goomah is the entry", B: "Agree and move on", C: "Offer a coupon", D: "Say nothing" }, a: "A",
          e: "Answer price with craft, performance, press — and the entry option." },
        { q: "'I just want flower' — you say…", o: { A: "This IS premium flower, infused & rolled proper — the upgrade", B: "Sorry, not for you", C: "Buy a vape", D: "Nothing" }, a: "A",
          e: "Frame Xiaolin as the upgrade." },
        { q: "How should every recommendation end?", o: { A: "'Rolled Proper'", B: "'Whatever you want'", C: "'It's on sale'", D: "Silence" }, a: "A",
          e: "Rolled Proper. Every time." },
      ],
    },

    /* ───────── CAPSTONE · THE HIGH COUNCIL ───────── */
    {
      n: 10, module: 4, key: "council", title: "The High Council", capstone: true,
      tag: "The ultimate prize", hero: "img/medallion.jpg",
      body: [
        "Finish all three modules and one door opens: <strong>The High Council</strong> — Xiaolin's official program to <strong>honor and reward sales associates with expert knowledge</strong> of the brand. Everything you need to pass the application is in this academy.",
        "<strong>The Commissary</strong> is the Council's real rewards program. Members earn points for every <strong>verified sale</strong> — <strong>Godfather 255 · Capo 130 · Goomah 70 · Soldato 45 · Bambino 20</strong> — plus points for training. Points <strong>never expire</strong>.",
        "<strong>Redeem for product.</strong> Cash points in the Commissary: Bambino <strong>800</strong>, Goomah <strong>2,800</strong>, Capo <strong>5,000</strong>, Godfather <strong>9,500</strong> — plus future Dragon Tips, apparel, and exclusive experiences. Submit proof of sale (your receipt), get approved, redeem.",
        "<strong>Exclusive access.</strong> High Council members get Council-only <strong>events, workshops, and programs</strong>, plus <strong>limited merch not available to the public.</strong> It's the bridge from budtender to <strong>brand ambassador</strong>.",
        "<strong>Your path here:</strong> earn <strong>1,000 points</strong> — finish the three modules (+250) and log verified sales — and your invitation to <strong>apply</strong> unlocks, straight to Xiaolin's real form, info packet, and training movie.",
        "Apply when you have a solid understanding of all things Xiaolin. <strong>Welcome to the family — Rolled Proper.</strong>",
      ],
      quiz: [
        { q: "What is the High Council?", o: { A: "A discount tier", B: "Xiaolin's program to honor & reward expert sales associates", C: "A glass collection", D: "A raffle" }, a: "B",
          e: "The inner circle — reps who know Xiaolin cold." },
        { q: "How do Council members earn rewards?", o: { A: "Points for every Xiaolin product sold, cashed for product + merch", B: "Hourly pay", C: "Tips only", D: "Nothing" }, a: "A",
          e: "Reward points per product sold — the platform you're on." },
        { q: "How many points unlock your invitation here?", o: { A: "100", B: "1,000", C: "10", D: "50,000" }, a: "B",
          e: "1,000 — modules (250) + sales (1 pt/$1)." },
        { q: "A real High Council perk?", o: { A: "Exclusive events + limited public-unavailable merch", B: "Free rent", C: "A car", D: "Nothing" }, a: "A",
          e: "Council-only events/programs + limited merch." },
        { q: "The High Council turns a budtender into a…", o: { A: "Cashier", B: "Brand ambassador / Xiaolin rep", C: "Grower", D: "Competitor" }, a: "B",
          e: "Budtender → brand ambassador." },
      ],
    },
  ],

  // The ultimate prize — Xiaolin's real sales-rep inner circle. Links are live on madeinxiaolin.com.
  highCouncil: {
    medallion: "img/medallion.jpg",
    blurb: "Xiaolin's official program honoring sales associates with expert product knowledge — reward points for every product sold, exclusive events, and limited merch.",
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdB12otvZPFUltdtxFNDmzetDyya83LY55cAdu9-faqHTb1ZA/viewform",
    packetUrl: "https://drive.google.com/drive/folders/1museYXd29L6XYAuaC9JhglgLA3kEJv7V",
    movieUrl: "https://drive.google.com/file/d/1bMuSECJGKJkJWaKV3uXGfzXUtuArlTKq/view?usp=drivesdk",
  },

  // Points economy — calibrated to the real High Council Commissary program.
  rewards: {
    discountPct: 50,
    discountCodeStem: "XIAOLIN-ROLLER-",
    giveaway: "Monthly VSXL cannagar draw",
    councilPts: 1000,    // pts to unlock the High Council application (the audition)
  },

  // The High Council Commissary — Xiaolin's real rewards program (from the
  // official Commissary docs). Earn points per VERIFIED sale; redeem for product.
  // Points never expire. Module bonuses here count as "training participation."
  commissary: {
    earn: {   // points per product sold (Commissary "Points Earned")
      GODFATHER: 255, CAPO: 130, GOOMAH: 70, SOLDATO: 45, BAMBINO: 20,
    },
    trainingAttendance: 25,
    redeem: [  // Commissary catalog — "Earn Your Keep" (Points Required)
      { sku: "BAMBINO",   name: "Bambino Twin Pack", pts: 800,  img: "img/joints/Bambino_RedTip.png" },
      { sku: "GOOMAH",    name: "Goomah VSXL",       pts: 2800, img: "img/cannagars/goomah.png" },
      { sku: "CAPO",      name: "Capo VSXL",         pts: 5000, img: "img/cannagars/capo.png" },
      { sku: "GODFATHER", name: "Godfather VSXL",    pts: 9500, img: "img/cannagars/godfather.png" },
    ],
    future: ["Dragon Tips", "Xiaolin apparel", "Exclusive merch", "Limited accessories", "Event invitations", "Special experiences"],
  },

  // The Rewards Vault ladder — co-branded Xiaolin × the budtender's store.
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
