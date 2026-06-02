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

  // The lineup — the products a budtender will actually sell.
  products: [
    { sku: "GODFATHER", name: "The Godfather", line: "Cannagar · V.S.X.L.", img: "img/cannagars/godfather.png",
      burn: "Up to 3 hours", blurb: "The flagship Very-Super-Extra-Large cannagar. The longest, slowest, most ceremonial roll in the studio — built for the table, not the pocket." },
    { sku: "CAPO", name: "The Capo", line: "Cannagar · V.S.X.L.", img: "img/cannagars/capo.png",
      burn: "Up to 3 hours", blurb: "Second in command. Same VSXL stature, the everyday boss of the cannagar lineup." },
    { sku: "GOOMAH", name: "The Goomah", line: "Cannagar · V.S.X.L.", img: "img/cannagars/goomah.png",
      burn: "Up to 3 hours", blurb: "The seductive one. A VSXL cannagar with the curves — premium flower, rolled proper." },
    { sku: "SOLDATO", name: "The Soldato", line: "Infused Joint", img: "img/joints/RiceSoldato.png",
      burn: "Solo session", blurb: "The infused soldier. Available in Rice (cleaner draw, slower burn) and Natural paper." },
    { sku: "BAMBINO", name: "The Bambino — 2 Pack", line: "Infused Joint", img: "img/joints/Bambino_RedTip.png",
      burn: "Two sessions", blurb: "The little one, two to a pack. Red-tip and white-tip — your share-with-a-friend SKU." },
    { sku: "KNIFE", name: "The Knife", line: "Rolling Tool", img: "img/joints/lineup.png",
      burn: "—", blurb: "The studio's signature rolling tool. The reward piece — earned, not bought." },
  ],

  // 6 training sections — each ~2 min, then a quiz.
  sections: [
    {
      n: 1, key: "studio", title: "The Studio",
      tag: "Where it's rolled",
      hero: "img/chalice/c-hand.jpg",
      body: [
        "<strong>Made in Xiaolin is Colorado's only creative rolling studio</strong> — operating since <strong>2018</strong> out of their Temple in Evergreen, Colorado.",
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
        "The crown of the lineup is the <strong>cannagar</strong> — a cannabis cigar, rolled in studio at <strong>V.S.X.L.</strong> (Very-Super-Extra-Large) format.",
        "Three names to know: <strong>The Godfather</strong> (the flagship), <strong>The Capo</strong> (second in command), and <strong>The Goomah</strong> (the seductive one). All VSXL.",
        "The selling line: a VSXL cannagar can <strong>burn for up to three hours</strong>. As one customer put it, it smokes <em>\"for 3 hours… totally worth it.\"</em>",
        "This is a <strong>ceremony product</strong> — for the table, the session, the celebration. Sell the experience, not the gram.",
      ],
      quiz: [
        { q: "What does V.S.X.L. stand for?", o: { A: "Very Strong Xtra Loud", B: "Very-Super-Extra-Large", C: "Variable Size XL", D: "Vacuum-Sealed XL" }, a: "B",
          e: "Very-Super-Extra-Large. It's the cannagar size class." },
        { q: "Which is the flagship cannagar?", o: { A: "The Capo", B: "The Goomah", C: "The Godfather", D: "The Soldato" }, a: "C",
          e: "The Godfather leads the cannagar line." },
        { q: "About how long does a VSXL cannagar burn?", o: { A: "10 minutes", B: "30 minutes", C: "Up to 3 hours", D: "All day" }, a: "C",
          e: "Up to 3 hours — that's the headline. It's a session, not a hit." },
        { q: "Best way to sell a cannagar?", o: { A: "By THC %", B: "As the cheapest option", C: "As a ceremony / shared experience product", D: "As a quick solo smoke" }, a: "C",
          e: "Cannagars are for the table and the occasion. Sell the ritual." },
        { q: "Name the three VSXL cannagars.", o: { A: "Soldato, Bambino, Knife", B: "Godfather, Capo, Goomah", C: "Rice, Natural, Winter", D: "Capo, Knife, Soldato" }, a: "B",
          e: "Godfather (flagship), Capo, Goomah — all VSXL." },
      ],
    },
    {
      n: 3, key: "joints", title: "The Infused Joints",
      tag: "Soldato & Bambino",
      hero: "img/joints/lineup.png",
      body: [
        "Below the cannagars sit the <strong>infused joints</strong> — premium flower infused and rolled proper.",
        "<strong>The Soldato</strong> — \"the soldier.\" A full infused joint, offered in <strong>Rice paper</strong> (cleaner draw, slower, more even burn) and <strong>Natural paper</strong>.",
        "<strong>The Bambino — 2 Pack</strong> — \"the little one,\" two to a pack with red-tip and white-tip. This is your <strong>share-with-a-friend</strong> and entry-to-infused SKU.",
        "Rice vs Natural is a real budtender question: <strong>rice paper burns slower and cleaner</strong> with less paper taste — recommend it to the connoisseur.",
      ],
      quiz: [
        { q: "Which product is the single infused 'soldier'?", o: { A: "The Bambino", B: "The Soldato", C: "The Capo", D: "The Knife" }, a: "B",
          e: "The Soldato — the infused soldier." },
        { q: "What comes in the Bambino?", o: { A: "One cannagar", B: "A rolling tool", C: "Two infused joints (red-tip & white-tip)", D: "A glass piece" }, a: "C",
          e: "Bambino = 2 Pack. The share SKU." },
        { q: "Why recommend Rice paper over Natural?", o: { A: "It's cheaper", B: "Slower, cleaner, more even burn with less paper taste", C: "More THC", D: "It's the only option" }, a: "B",
          e: "Rice = slower, cleaner draw. The connoisseur pick." },
        { q: "Best customer for the Bambino 2 Pack?", o: { A: "Someone buying to share or trying infused for the first time", B: "Only experts", C: "Nobody — it's discontinued", D: "Wholesale only" }, a: "A",
          e: "Two-pack = share with a friend or an easy entry to infused." },
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
  ],

  // Earned on completing all sections.
  rewards: {
    discountPct: 50,
    discountCodeStem: "XIAOLIN-ROLLER-",
    merch: "The Knife (studio rolling tool)",
    giveaway: "Monthly VSXL cannagar draw",
  },
};

if (typeof module !== "undefined") module.exports = XIAOLIN;
