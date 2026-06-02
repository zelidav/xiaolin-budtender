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
      tag: "Where it's rolled",
      hero: "img/chalice/c-hand.jpg",
      body: [
        "<strong>Made in Xiaolin</strong> (say it <em>\"SHAO-lin\"</em>) is <strong>Colorado's only creative rolling studio</strong> — operating since <strong>2018</strong> out of their Temple in Evergreen, Colorado.",
        "The Temple isn't just an address. As they put it, it's <em>\"a mindset and a commitment to creating a legacy rooted in passion and authenticity.\"</em>",
        "The mission you're selling: <strong>to achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.</strong>",
        "Two words carry the whole brand at the counter: <strong>Rolled Proper.</strong> Every product is hand-crafted in studio — this is artisan cannabis, not factory pre-rolls.",
      ],
      quiz: [
        { q: "How does Xiaolin describe itself?", o: { A: "A vape company", B: "Colorado's only creative rolling studio", C: "A glass importer", D: "A dispensary chain" }, a: "B",
          e: "Since 2018 — Colorado's only creative rolling studio. Lead with that." },
        { q: "Where is the Xiaolin Temple?", o: { A: "Denver, CO", B: "Boulder, CO", C: "Evergreen, CO", D: "Aspen, CO" }, a: "C",
          e: "Evergreen, Colorado — the Temple. It's a mindset, not just a place." },
        { q: "What two words sum up the brand promise?", o: { A: "Rolled Proper", B: "Rolled Fast", C: "Made Cheap", D: "Big & Loud" }, a: "A",
          e: "Rolled Proper. Use it. It IS the brand." },
        { q: "What is Xiaolin's stated mission?", o: { A: "Lowest price in the state", B: "Excellence in cannabis lifestyle products with creativity and integrity", C: "Fastest delivery", D: "Most THC per gram" }, a: "B",
          e: "Creativity and integrity — premium lifestyle, not a price race." },
        { q: "What year did the studio start?", o: { A: "2010", B: "2014", C: "2018", D: "2021" }, a: "C",
          e: "Since 2018. Years of studio practice back every roll." },
      ],
    },
    {
      n: 2, key: "cannagars", title: "The Cannagars",
      tag: "The flagship roll",
      hero: "img/cannagars/godfather.png",
      body: [
        "The crown of the lineup is the <strong>cannagar</strong> — a cannabis cigar, hand-rolled in studio. There are three, and they step down in size: <strong>Godfather → Capo → Goomah</strong>.",
        "Know the real specs (they're all <strong>infused</strong> — flower <em>plus</em> concentrate): <strong>Godfather</strong> = 10g flower + 2g concentrate, <strong>2–3 hr burn</strong> (the flagship). <strong>Capo</strong> = 5g + 1g, <strong>1–2 hr</strong>. <strong>Goomah</strong> = 2.5g + 0.5g, <strong>0.5–1 hr</strong> (the entry cannagar).",
        "That ladder is your upsell: a customer curious about cannagars starts at the <strong>Goomah</strong>; the celebration buyer reaches for the <strong>Godfather</strong>.",
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
        "Below the cannagars sit the <strong>infused joints</strong> — same studio craft, pocket size, also flower + concentrate.",
        "<strong>The Soldato</strong> — \"the soldier.\" A fat <strong>2g flower + 0.4g concentrate</strong> joint, ~<strong>30 min</strong> burn. Offered in <strong>Rice paper</strong> (cleaner draw, slower, more even) and <strong>Natural paper</strong>.",
        "<strong>The Bambino — Twin Pack</strong> — \"the little one,\" two to a pack (each <strong>0.4g flower + 0.1g concentrate</strong>, <strong>5–10 min</strong>), red-tip and white-tip. Your <strong>share-with-a-friend</strong> and entry-to-infused SKU.",
        "Rice vs Natural is a real budtender question: <strong>rice paper burns slower and cleaner</strong> with less paper taste — recommend it to the connoisseur.",
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
        "Everything is <strong>hand-rolled in studio</strong> — this is a rolling <em>studio</em>, with rolling techniques they publish and teach (see 'The Rolling Scroll').",
        "<strong>The Knife</strong> is the studio's signature rolling tool — the icon of the craft. In this academy it's also the <strong>reward piece you can earn</strong>.",
        "When a customer hesitates on price, the answer is craft: <strong>hours of hand-work, studio technique, and a product that performs for hours.</strong>",
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
      n: 5, key: "collabs", title: "Collabs & Flower",
      tag: "Who they roll with",
      hero: "img/gen/event.jpg",
      body: [
        "Xiaolin rolls premium Colorado flower and concentrates from a deep <strong>collaborator bench</strong>: Harmony Extracts, Denver Dab Co, Summit Concentrates, In The Flow, Indico Craft, Kaya Cannabis, Sano Gardens, Vera Cultivation, Urban Extracts, and more.",
        "Past releases paired specific strains and rosins — e.g. <em>Petrol Punch × AK-47</em>, <em>Military Chocolate × Grape Runtz Rosin</em>. The point: <strong>thoughtful, intentional pairings</strong>, never random.",
        "The brand has been featured in <strong>High Times, Playboy, Forbes,</strong> and <strong>Denver Westword</strong> — drop that for instant credibility.",
        "When a customer asks 'what's inside?', the honest answer is <strong>named, premium partner extracts and flower</strong> — quality you can point to.",
      ],
      quiz: [
        { q: "How does Xiaolin source its flower/concentrate?", o: { A: "Cheapest bulk available", B: "Curated collaborations with named Colorado partners", C: "Synthetic only", D: "Imported" }, a: "B",
          e: "Named partner collabs — Harmony, Denver Dab Co, and more." },
        { q: "What's true about Xiaolin strain pairings?", o: { A: "Random", B: "Intentional strain + extract pairings", C: "Always the same one strain", D: "Customer's choice only" }, a: "B",
          e: "Intentional pairings — Petrol Punch × AK-47, etc." },
        { q: "Which outlets have featured the brand?", o: { A: "None", B: "High Times, Playboy, Forbes, Denver Westword", C: "Only local blogs", D: "TV only" }, a: "B",
          e: "High Times, Playboy, Forbes, Westword. Use it for credibility." },
        { q: "A customer asks what's inside — you say…", o: { A: "Not sure", B: "Named premium partner extracts and flower", C: "Trade secret", D: "Whatever's left" }, a: "B",
          e: "Point to real, named, premium inputs." },
        { q: "Name one Xiaolin collaborator.", o: { A: "Harmony Extracts", B: "A vape importer", C: "An out-of-state grower", D: "None — all in-house" }, a: "A",
          e: "Harmony Extracts, Denver Dab Co, Summit, and more." },
      ],
    },
    {
      n: 6, key: "selling", title: "Selling Xiaolin",
      tag: "Close the sale",
      hero: "img/gen/nightlife.jpg",
      body: [
        "<strong>Match the product to the moment.</strong> Solo weeknight → Soldato or Bambino. Group / celebration → a Godfather, Capo, or Goomah cannagar.",
        "<strong>Objection: 'too expensive.'</strong> → It burns for hours, it's hand-rolled in studio, and it's been in Forbes and High Times. Cost-per-hour, it's a deal.",
        "<strong>Objection: 'I just want flower.'</strong> → Great — this IS premium flower, rolled proper, so they don't have to. Position as the upgrade, not the alternative.",
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
        "Council members get the real tools: the official <strong>Info Packet</strong>, the <strong>Retail Training Movie</strong>, and a direct line into the Temple in Evergreen — <em>\"where each concept, creation, and innovation is born.\"</em>",
        "This academy is your audition. <strong>Certify, then log a real sale,</strong> and your invitation to apply for the High Council unlocks. That's the ultimate prize — not a coupon, a seat at the table.",
      ],
      quiz: [
        { q: "What is the High Council?", o: { A: "A discount tier", B: "Xiaolin's official sales-representative / ambassador program", C: "A glass collection", D: "A monthly raffle" }, a: "B",
          e: "The inner circle — reps who work directly with Xiaolin." },
        { q: "What do you do to unlock your High Council invitation here?", o: { A: "Just sign up", B: "Pay a fee", C: "Certify (finish training) AND log a real sale", D: "Win the raffle" }, a: "C",
          e: "Cert + one real sale. The academy is your audition." },
        { q: "Which is a real High Council resource?", o: { A: "The Retail Training Movie", B: "A free vape", C: "A parking pass", D: "Nothing tangible" }, a: "A",
          e: "Info Packet + Retail Training Movie + a line into the Temple." },
        { q: "The High Council moves a budtender toward becoming a…", o: { A: "Cashier", B: "Brand ambassador / Xiaolin sales rep", C: "Grower", D: "Competitor" }, a: "B",
          e: "Budtender → brand ambassador. That's the path." },
        { q: "Where is the Temple the Council connects you to?", o: { A: "Denver", B: "Los Angeles", C: "Evergreen, Colorado", D: "New York" }, a: "C",
          e: "Evergreen, CO — where every concept and creation is born." },
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
