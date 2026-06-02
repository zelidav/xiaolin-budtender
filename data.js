/* Made in Xiaolin — Roller Academy
 * All content sourced from madeinxiaolin.com (brand, lineup, craft, press).
 * Static MVP data. Quizzes pass at 80% (4/5 or 3/4).
 */

const XIAOLIN = {
  brand: {
    name: "Made in Xiaolin",
    tagline: "Rolled Proper",
    since: "2018",
    studio: "Colorado's Only Creative Rolling Studio",
    temple: "Evergreen, Colorado",
    mission: "To achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.",
    press: ["High Times", "Playboy", "Forbes", "Denver Westword"],
  },

  // The lineup — official specs from the Made in Xiaolin "Premium Roll Product
  // Lineup" budtender cheat sheet. Every roll is INFUSED (flower + rosin).
  // Prices = live NY retail at Terp Bros Astoria (dispensary-set; vary by store).
  // The infused weight is total (flower + concentrate), matching menu listings.
  products: [
    { sku: "GODFATHER", name: "The Godfather VSXL", line: "Cannagar · Rosin Infused", img: "img/cannagars/godfather.png",
      flower: "10g flower", conc: "2g rosin", burn: "2–3 hours", total: "12g", price: "$382.30",
      blurb: "The flagship VSXL cannagar — 12g total (10g flower + 2g rosin). The longest, slowest, most ceremonial roll in the studio. Built for the table, burns 2–3 hours." },
    { sku: "CAPO", name: "The Capo", line: "Cannagar · Rosin Infused", img: "img/cannagars/capo.png",
      flower: "5g flower", conc: "1g rosin", burn: "1–2 hours", total: "6g", price: "$194.69",
      blurb: "Second in command — 6g total (5g flower + 1g rosin), 1–2 hour burn. The everyday boss of the cannagar lineup." },
    { sku: "GOOMAH", name: "The Goomah VSXL", line: "Cannagar · Rosin Infused", img: "img/cannagars/goomah.png",
      flower: "2.5g flower", conc: "0.5g rosin", burn: "0.5–1 hour", total: "3g", price: "$120.00",
      blurb: "The entry cannagar — 3g total (2.5g flower + 0.5g rosin), 0.5–1 hour. The seductive one: a real cannagar experience at the easiest price." },
    { sku: "SOLDATO", name: "The Soldato", line: "Infused Joint", img: "img/joints/RiceSoldato.png",
      flower: "2g flower", conc: "0.4g rosin", burn: "~30 minutes", total: "", price: "",
      blurb: "The infused soldier — a fat 2g joint with 0.4g rosin, ~30 min burn. Offered in Rice (cleaner, slower draw) and Natural paper." },
    { sku: "BAMBINO", name: "The Bambino — 2pk", line: "Rosin Infused Joints", img: "img/joints/Bambino_RedTip.png",
      flower: "Two joints", conc: "Rosin infused", burn: "5–10 min each", total: "3g", price: "$37.17",
      blurb: "The little one — two rosin-infused joints (3g total), 5–10 min apiece. Red-tip and white-tip: your share-with-a-friend SKU." },
    { sku: "KNIFE", name: "The Knife", line: "Rolling Tool", img: "img/joints/lineup.png",
      flower: "", conc: "", burn: "", total: "", price: "",
      blurb: "The studio's signature rolling tool. The reward piece — earned, not bought." },
  ],

  // 6 training sections — each ~2 min, then a quiz.
  sections: [
    {
      n: 1, key: "studio", title: "The Studio",
      tag: "Born in CO · rolled in NY",
      hero: "img/chalice/c-hand.jpg",
      body: [
        "<strong>Made in Xiaolin</strong> (say it <em>\"SHAO-lin\"</em>) is the original creative rolling studio — founded by <strong>Chris Louie</strong> in <strong>Colorado in 2018</strong>, and now rolling for <strong>New York</strong>.",
        "Your NY product is <strong>Made in New York</strong> — hand-rolled at the Xiaolin workshop in <strong>Warwick, NY</strong> (an upstate facility the team calls \"the farm\"). Colorado roots, New York craft.",
        "The mission you're selling: <strong>excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.</strong> In NY that means the <strong>luxury</strong> end of the menu.",
        "Two words carry the whole brand at the counter: <strong>Rolled Proper.</strong> Every piece is hand-crafted in studio — this is artisan cannabis, not factory pre-rolls.",
      ],
      quiz: [
        { q: "Who founded Made in Xiaolin?", o: { A: "Chris Louie", B: "A dispensary chain", C: "A glass importer", D: "A vape company" }, a: "A",
          e: "Founder Chris Louie — started in Colorado in 2018." },
        { q: "Where are Xiaolin's New York cannagars rolled?", o: { A: "Denver, CO", B: "Warwick, NY", C: "Brooklyn, NY", D: "Overseas" }, a: "B",
          e: "Warwick, NY — \"the farm.\" Made in New York, Rolled Proper." },
        { q: "What two words sum up the brand promise?", o: { A: "Rolled Proper", B: "Rolled Fast", C: "Made Cheap", D: "Big & Loud" }, a: "A",
          e: "Rolled Proper. Use it. It IS the brand." },
        { q: "How is Xiaolin positioned in the NY market?", o: { A: "Cheapest pre-rolls", B: "The luxury / premium end of the menu", C: "Bulk wholesale", D: "Vapes only" }, a: "B",
          e: "NY = luxury. Hand-rolled, infused, ceremony-grade. Sell the craft." },
        { q: "What year — and where — did the studio start?", o: { A: "2021, NY", B: "2014, CA", C: "2018, Colorado", D: "2010, Oregon" }, a: "C",
          e: "Colorado, 2018. Roots in CO, now rolling NY." },
      ],
    },
    {
      n: 2, key: "cannagars", title: "The Cannagars",
      tag: "The flagship roll",
      hero: "img/cannagars/godfather.png",
      body: [
        "The crown of the lineup is the <strong>cannagar</strong> — a cannabis cigar. Think of a fine cigar, but cannabis: dense, slow-burning, made to be passed around and savored over an hour or more.",
        "<strong>How it's built.</strong> Each Xiaolin cannagar is hand-assembled around a <strong>rice-paper shell</strong>, loaded with selected flower and concentrate, and finished with a <strong>glass or wood tip etched with the Xiaolin medallion</strong>. The premium pieces are wrapped in <strong>24kt gold rolling paper</strong>, and special editions even carry <strong>gold-leaf and rose-petal</strong> details. This is jewelry you smoke.",
        "There are three, stepping down in size: <strong>Godfather → Capo → Goomah</strong>. All <strong>infused</strong> (flower <em>plus</em> rosin). Real specs: <strong>Godfather</strong> 10g + 2g, <strong>2–3 hr</strong> (the flagship). <strong>Capo</strong> 5g + 1g, <strong>1–2 hr</strong>. <strong>Goomah</strong> 2.5g + 0.5g, <strong>0.5–1 hr</strong> (the entry cannagar).",
        "Why it burns for hours: the flower is <strong>pressed and cured tight</strong>, the rice shell breathes slowly, and the rosin infusion keeps it lit low and even. No canoeing, no harsh finish — a clean, cool draw start to finish.",
        "That size ladder is your upsell: a customer curious about cannagars starts at the <strong>Goomah</strong>; the celebration buyer reaches for the <strong>Godfather</strong>.",
        "This is a <strong>ceremony product</strong> — for the table, the session, the celebration. Sell the experience and the hours, not the gram.",
      ],
      quiz: [
        { q: "What makes a Xiaolin cannagar 'infused'?", o: { A: "Nothing — it's just flower", B: "It's flower PLUS concentrate", C: "It's dipped in water", D: "It has a filter" }, a: "B",
          e: "Every roll is flower + concentrate. That's the infused selling point." },
        { q: "Which is the flagship (biggest) cannagar?", o: { A: "The Capo", B: "The Goomah", C: "The Godfather", D: "The Soldato" }, a: "C",
          e: "Godfather — 10g flower + 2g concentrate, 2–3 hr burn." },
        { q: "About how long does the Godfather burn?", o: { A: "10 minutes", B: "30 minutes", C: "2–3 hours", D: "All day" }, a: "C",
          e: "2–3 hours. The headline number for the flagship." },
        { q: "A customer new to cannagars — which do you start them on?", o: { A: "The Godfather", B: "The Goomah (entry cannagar, 0.5–1 hr)", C: "The Bambino", D: "The Knife" }, a: "B",
          e: "Goomah is the entry cannagar: 2.5g, 0.5–1 hr. Then ladder up." },
        { q: "Order the cannagars largest → smallest.", o: { A: "Goomah, Capo, Godfather", B: "Capo, Godfather, Goomah", C: "Godfather, Capo, Goomah", D: "They're all the same size" }, a: "C",
          e: "Godfather (10g) → Capo (5g) → Goomah (2.5g)." },
      ],
    },
    {
      n: 3, key: "joints", title: "The Infused Joints",
      tag: "Soldato & Bambino",
      hero: "img/joints/lineup.png",
      body: [
        "Below the cannagars sit the <strong>infused joints</strong> — same studio craft, pocket size, also flower + rosin, each finished with a <strong>wood or glass tip</strong>.",
        "<strong>The Soldato</strong> — \"the soldier.\" A fat <strong>2g flower + 0.4g rosin</strong> joint, ~<strong>30 min</strong> burn. It's <strong>plumbed with a 4mm hole</strong> down the center for maximum pull and an even burn line — that's why it draws so smooth.",
        "Pro detail: the <strong>new Soldato is built around a skewer</strong> that holds the infused joint's structure together. Tell the customer to <strong>leave the skewer in until right before they smoke</strong>, then pull it — it preserves the airway so the draw stays open.",
        "The Soldato comes in <strong>Rice paper</strong> (slower, cleaner, more even, less paper taste — the connoisseur pick) and <strong>Natural paper</strong>. Knowing the difference is a fast way to look like the expert.",
        "<strong>The Bambino — Twin Pack.</strong> \"The little one,\" two to a pack (red-tip and white-tip), <strong>5–10 min</strong> each. This is your <strong>share-with-a-friend</strong> and entry-to-infused SKU — the easiest yes on the menu.",
      ],
      quiz: [
        { q: "What's in the Soldato?", o: { A: "Flower only, 5g", B: "2g flower + 0.4g concentrate, ~30 min", C: "Two joints", D: "A rolling tool" }, a: "B",
          e: "Soldato = 2g flower + 0.4g concentrate, ~30 min. The infused soldier." },
        { q: "What comes in the Bambino?", o: { A: "One cannagar", B: "A rolling tool", C: "Two infused joints (red-tip & white-tip)", D: "A glass piece" }, a: "C",
          e: "Bambino = Twin Pack — two infused joints, 5–10 min each." },
        { q: "Why recommend Rice paper over Natural?", o: { A: "It's cheaper", B: "Slower, cleaner, more even burn with less paper taste", C: "More THC", D: "It's the only option" }, a: "B",
          e: "Rice = slower, cleaner draw. The connoisseur pick." },
        { q: "Best customer for the Bambino Twin Pack?", o: { A: "Someone buying to share or trying infused for the first time", B: "Only experts", C: "Nobody — it's discontinued", D: "Wholesale only" }, a: "A",
          e: "Twin pack = share with a friend or an easy entry to infused." },
        { q: "The Soldato comes in which two papers?", o: { A: "Rice and Natural", B: "Hemp and Foil", C: "White and Black", D: "Glass and Clay" }, a: "A",
          e: "Rice (cleaner, slower) and Natural. Know the difference." },
      ],
    },
    {
      n: 4, key: "craft", title: "The Craft",
      tag: "Rolled Proper",
      hero: "img/chalice/c1.jpg",
      body: [
        "Xiaolin sells <strong>craft</strong>. Customers say it plainly: <em>\"the craftsmanship on these pieces is insane.\"</em> Your job is to make them feel that before they buy.",
        "Everything is <strong>hand-rolled in studio</strong> — Xiaolin is a creative rolling <em>studio</em>, not a packaging line. They even publish their rolling techniques and lore in <strong>\"The Rolling Scroll,\"</strong> their education channel.",
        "<strong>The materials tell the story.</strong> Rice-paper shells, glass and wood tips etched with the medallion, <strong>24kt gold rolling paper</strong>, gold-leaf and rose-petal finishes on the special editions. Hand-assembled, loaded with named flower and rosin. Nothing here is mass-produced.",
        "<strong>The Knife</strong> is the studio's signature rolling tool — the icon of the craft. In this academy it's also a <strong>reward you can earn</strong>… right alongside the Xiaolin tote and trucker hat.",
        "Every piece is a tiny production: <strong>hours of hand-work</strong> per cannagar. When a customer hesitates on price, that's your answer — craft, studio technique, and a product that performs for hours.",
        "Lean on the proof: Xiaolin has been featured in <strong>High Times, Playboy, and Forbes</strong>, and its New York launch made headlines as the luxury cannabis cigar. That's not hype you're inventing — it's the record.",
      ],
      quiz: [
        { q: "What is Xiaolin really selling at a premium price?", o: { A: "Volume", B: "Craft / hand-rolled studio quality", C: "Discounts", D: "Branding only" }, a: "B",
          e: "Craft. 'The craftsmanship is insane' — make them feel it." },
        { q: "The Knife is…", o: { A: "A strain", B: "The studio's signature rolling tool", C: "A glass pipe", D: "An event" }, a: "B",
          e: "The Knife — the signature rolling tool and the craft's icon." },
        { q: "Where does Xiaolin publish rolling techniques?", o: { A: "Nowhere", B: "The Rolling Scroll", C: "A vape manual", D: "Instagram only" }, a: "B",
          e: "The Rolling Scroll — their education/blog channel." },
        { q: "Best response to 'why is it so expensive?'", o: { A: "Shrug", B: "Point to hand-craft, studio technique, and hours-long performance", C: "Offer a discount", D: "Change the subject" }, a: "B",
          e: "Answer price with craft, every time." },
        { q: "In this academy, The Knife is also…", o: { A: "A strain pairing", B: "The merch reward you can earn", C: "A discount code", D: "An event ticket" }, a: "B",
          e: "Earn the studio's signature tool by certifying." },
      ],
    },
    {
      n: 5, key: "collabs", title: "Made in New York",
      tag: "NY flower & strains",
      hero: "img/gen/event.jpg",
      body: [
        "Your product is <strong>Made in New York</strong>. Xiaolin rolls <strong>NY-grown flower and New York rosin</strong> at its Warwick, NY workshop — so every piece on your shelf is licensed NY cannabis, hand-rolled in-state.",
        "<strong>Strains rotate by drop.</strong> Recent NY runs have featured names like <em>Singapore Sling</em>, <em>Purple Headband / Sour D Wilson</em>, and <em>Wander Bread</em>. The strain on the label changes — what stays constant is the <strong>infusion (flower + rosin)</strong> and the build.",
        "The pairings are <strong>intentional, never random</strong> — a strain is matched to a rosin for flavor and effect, then rolled. When a customer asks <em>\"what's inside?\"</em>, point to the <strong>named NY strain + rosin</strong> right on the package.",
        "Read the label out loud: <strong>strain, class (Indica / Hybrid / Sativa), THC %</strong>. Xiaolin's NY pieces run strong — often <strong>20–32% THC</strong> — because they're infused. Set expectations: this is a slow, potent, sit-down product.",
        "Credibility to drop at the counter: <strong>High Times, Playboy, Forbes</strong>, and Xiaolin's <strong>2024 New York launch</strong> as <em>the</em> luxury cannabis cigar — including the press around a <strong>$600+ NYC cannagar</strong>. You're selling a brand people write about.",
      ],
      quiz: [
        { q: "Where is your New York Xiaolin flower from / rolled?", o: { A: "Imported", B: "NY-grown flower, rolled in Warwick, NY", C: "Colorado only", D: "Synthetic" }, a: "B",
          e: "Made in New York — NY flower + NY rosin, rolled in Warwick." },
        { q: "What's true about Xiaolin strain pairings?", o: { A: "Random", B: "Intentional strain + rosin pairings", C: "Always one strain", D: "Customer's choice only" }, a: "B",
          e: "Strain matched to rosin on purpose, then rolled." },
        { q: "A recent NY Xiaolin strain is…", o: { A: "Singapore Sling", B: "There are no strains", C: "Only CBD", D: "House blend, unnamed" }, a: "A",
          e: "e.g. Singapore Sling, Purple Headband, Wander Bread — strains rotate by drop." },
        { q: "Why do Xiaolin's NY pieces test high (often 20–32%)?", o: { A: "Added nicotine", B: "They're infused — flower + rosin", C: "They're not, it's a typo", D: "Spray-on THC" }, a: "B",
          e: "Infusion stacks rosin on flower → higher potency. Set expectations." },
        { q: "Which is real Xiaolin press?", o: { A: "High Times, Playboy, Forbes + 2024 NY luxury launch", B: "None", C: "Local radio only", D: "A vape blog" }, a: "A",
          e: "National press + the NY luxury-cannagar launch. Use it." },
      ],
    },
    {
      n: 6, key: "selling", title: "Selling Xiaolin",
      tag: "Close the sale",
      hero: "img/gen/nightlife.jpg",
      body: [
        "<strong>Match the product to the moment.</strong> Solo weeknight → Soldato or Bambino. Group / celebration → a Godfather, Capo, or Goomah cannagar. New to infused → Bambino twin-pack.",
        "<strong>You're selling NY luxury.</strong> This is the top of the menu — a gifting and special-occasion product. Anniversaries, birthdays, closings, \"I want the best thing you have.\" Walk the cannagar over to that customer first.",
        "<strong>Objection: 'too expensive.'</strong> → It burns for <em>hours</em>, it's hand-rolled in Warwick with gold-paper and a glass tip, and it's been in Forbes and High Times. Cost-per-hour, the cannagar is a deal — and the Goomah is the easy entry at the low end.",
        "<strong>Objection: 'I just want flower.'</strong> → Great — this IS premium NY flower, rolled proper and infused, so they don't have to roll a thing. Position it as the upgrade, not the alternative.",
        "<strong>Hand them the story.</strong> Made in New York, founded by Chris Louie, the brand the magazines call the luxury cannabis cigar. People love owning a piece of that.",
        "<strong>Always Rolled Proper.</strong> Two words at the end of every recommendation. You're not moving units — you're handing someone a ritual.",
      ],
      quiz: [
        { q: "Customer wants a celebration / group product. Recommend…", o: { A: "A single Bambino", B: "A VSXL cannagar (Godfather / Capo / Goomah)", C: "The Knife", D: "Nothing" }, a: "B",
          e: "Cannagars are the shared-occasion play." },
        { q: "Best counter to 'too expensive'?", o: { A: "Agree and move on", B: "Hours-long burn + hand-rolled craft + national press = value", C: "Offer a coupon", D: "Say nothing" }, a: "B",
          e: "Answer price with craft, performance, and press." },
        { q: "Customer says 'I just want flower.' You…", o: { A: "Send them away", B: "Position Xiaolin as premium flower already rolled proper — the upgrade", C: "Agree it's not for them", D: "Upsell a vape" }, a: "B",
          e: "It IS premium flower — frame it as the upgrade." },
        { q: "How should every recommendation end?", o: { A: "'Whatever you want'", B: "'Rolled Proper'", C: "'It's on sale'", D: "Silence" }, a: "B",
          e: "Rolled Proper. Every time." },
        { q: "Solo weeknight customer — your pick?", o: { A: "A VSXL Godfather", B: "The Soldato or a Bambino", C: "Nothing infused", D: "Three cannagars" }, a: "B",
          e: "Match product to moment: solo → Soldato / Bambino." },
      ],
    },
    {
      n: 7, key: "council", title: "The High Council",
      tag: "The ultimate prize",
      hero: "img/medallion.jpg",
      body: [
        "Pass everything here and one door opens that money can't: <strong>The High Council</strong> — Xiaolin's official inner circle.",
        "In Xiaolin's words, the High Council is <em>\"our program for sales representatives who are seeking to work more closely with Xiaolin\"</em> to deliver its products and experiences to customers. It's the bridge from <strong>budtender</strong> to <strong>brand ambassador</strong>.",
        "Council members get the real tools: the official <strong>Info Packet</strong>, the <strong>Retail Training Movie</strong>, and a direct line into the studio — founder <strong>Chris Louie</strong>'s team that rolls every NY piece in Warwick.",
        "This academy is your audition. <strong>Earn 1,000 points</strong> — finish training (+100) and sell (1 pt per $1) — and your invitation to apply for the High Council unlocks. That's the ultimate prize: not a coupon, a seat at the table.",
      ],
      quiz: [
        { q: "What is the High Council?", o: { A: "A discount tier", B: "Xiaolin's official sales-representative / ambassador program", C: "A glass collection", D: "A monthly raffle" }, a: "B",
          e: "The inner circle — reps who work directly with Xiaolin." },
        { q: "How many points unlock your High Council invitation?", o: { A: "100", B: "500", C: "1,000", D: "10,000" }, a: "C",
          e: "1,000 pts — finish training (+100) and sell (1 pt / $1)." },
        { q: "Which is a real High Council resource?", o: { A: "The Retail Training Movie", B: "A free vape", C: "A parking pass", D: "Nothing tangible" }, a: "A",
          e: "Info Packet + Retail Training Movie + a direct line to the studio." },
        { q: "The High Council moves a budtender toward becoming a…", o: { A: "Cashier", B: "Brand ambassador / Xiaolin sales rep", C: "Grower", D: "Competitor" }, a: "B",
          e: "Budtender → brand ambassador. That's the path." },
        { q: "Who founded the studio the Council connects you to?", o: { A: "Chris Louie", B: "A holding company", C: "A grower co-op", D: "Unknown" }, a: "A",
          e: "Chris Louie — founder; the team rolls every NY piece in Warwick." },
      ],
    },
  ],

  // The ultimate prize — Xiaolin's real sales-rep inner circle. Links are live on madeinxiaolin.com.
  highCouncil: {
    medallion: "img/medallion.jpg",
    blurb: "Xiaolin's official program for sales representatives who work directly with the studio. Certify and log a sale to unlock your invitation to apply.",
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdB12otvZPFUltdtxFNDmzetDyya83LY55cAdu9-faqHTb1ZA/viewform",
    packetUrl: "https://drive.google.com/drive/folders/1museYXd29L6XYAuaC9JhglgLA3kEJv7V",
    movieUrl: "https://drive.google.com/file/d/1bMuSECJGKJkJWaKV3uXGfzXUtuArlTKq/view?usp=drivesdk",
  },

  // Points economy.
  rewards: {
    discountPct: 50,
    discountCodeStem: "XIAOLIN-ROLLER-",
    giveaway: "Monthly VSXL cannagar draw",
    trainingBonus: 100,   // pts for finishing all training
    perDollar: 1,         // pts per $ sold
    councilPts: 1000,     // pts to reach the High Council
  },

  // The Rewards Vault ladder — what budtenders earn, by points.
  // Merch is co-branded Xiaolin × the budtender's store.
  tiers: [
    { pts: 100,  key: "code",    icon: "🏷️", title: "50% Budtender Code",
      desc: "Your personal discount on the entire lineup. Unlocks the moment you finish training." },
    { pts: 400,  key: "tote",    icon: "👜", img: "img/merch/tote-red.png",
      title: "Xiaolin Tote", desc: "Co-branded canvas tote — carry the studio. Earned at 400 pts." },
    { pts: 700,  key: "hat",     icon: "🧢", img: "img/merch/hat-red.png",
      title: "Xiaolin Trucker Hat", desc: "The red trucker, repping your shop. Earned, not bought — 700 pts." },
    { pts: 1000, key: "council", icon: "👑", img: "img/medallion.jpg",
      title: "The High Council", desc: "Xiaolin's inner circle. The ultimate prize — 1,000 pts." },
  ],
};

if (typeof module !== "undefined") module.exports = XIAOLIN;
