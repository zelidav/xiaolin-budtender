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
    {"id": 1, "level": "Chamber I", "title": "Welcome to the Family", "tag": "Welcome to the Family", "bonus": 150},
    {"id": 2, "level": "Chamber II", "title": "The Lineup", "tag": "The Lineup", "bonus": 300},
    {"id": 3, "level": "Chamber III", "title": "Rolled Proper", "tag": "Rolled Proper", "bonus": 100},
    {"id": 4, "level": "Chamber IV", "title": "The Experience", "tag": "The Experience", "bonus": 200},
    {"id": 5, "level": "Chamber V", "title": "The Commissary", "tag": "The Commissary", "bonus": 100},
    {"id": 6, "level": "Chamber VI", "title": "The Path Forward", "tag": "The Path Forward", "bonus": 150},
  ],

  sections: [
    {
      n: 1, module: 1, key: "the-story-of-xiaolin", title: "The Story of Xiaolin", tag: "Welcome to the Family", hero: "img/medallion.jpg",
      body: [
        "Welcome to Xiaolin. Xiaolin is a cannabis lifestyle company built around craft, culture, and celebration. From the beginning, our goal has never been simply to create cannabis products.",
        "We set out to create products and experiences that feel worthy of life's meaningful moments. Sometimes that's a wedding, a promotion, a family gathering, a reunion with old friends, or simply the end of a long week.",
        "Whatever the occasion, everything we create is guided by a simple mission: To achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity.",
        "But like every company, Xiaolin started somewhere. For Xiaolin, it began with a personal journey. Founder Christopher Louie was introduced to cannabis while recovering from a gunshot injury.",
        "What started as a tool for pain management eventually became part of a larger pursuit of balance, wellness, and personal growth. Around that same time, he began training in Shaolin Kung Fu under Shifu Shi Yan Ming in New York City.",
        "The lessons learned through that practice left a lasting impact: Discipline. Patience. Respect for craft. Continuous improvement. Years later, Christopher and his wife Chongsi moved to Colorado as the legal cannabis industry was beginning to emerge.",
        "While living there, they searched for products that felt worthy of life's biggest celebrations. When they couldn't find exactly what they were looking for, they decided to create them themselves.",
        "What started as a personal project eventually became Xiaolin. Today, every product we create reflects those same foundations: Discipline. Celebration. Family. Craft.",
      ],
      quiz: [
        {"q": "Xiaolin is best described as:", "o": {"A": "A cannabis cultivation company focused solely on flower production", "B": "A cannabis lifestyle company built around craft, culture, and celebration", "C": "A cannabis technology company", "D": "A cannabis consulting firm"}, "a": "B", "e": ""},
        {"q": "What is the mission that guides everything Xiaolin creates?", "o": {"A": "To create the strongest cannabis products possible", "B": "To become the largest cannabis company in the industry", "C": "To achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity", "D": "To provide low-cost cannabis products to consumers"}, "a": "C", "e": ""},
        {"q": "Which of the following is NOT listed as one of the foundations that continues to guide Xiaolin today?", "o": {"A": "Discipline", "B": "Celebration", "C": "Family", "D": "Potency"}, "a": "D", "e": ""},
      ],
    },
    {
      n: 2, module: 1, key: "why-xiaolin", title: "Why Xiaolin", tag: "Welcome to the Family", hero: "img/medallion.jpg",
      body: [
        "Why Xiaolin? The name is pronounced exactly like Shaolin, but the spelling was intentionally changed. The \"X\" represents transformation. The point where tradition meets innovation.",
        "Where experience meets possibility. The name also serves as a tribute. Rather than borrowing something sacred, Xiaolin was created to honor the lessons, discipline, and philosophy that inspired the brand.",
        "For Christopher, the name carries another meaning as well. Staten Island, New York, where he was raised, has long been referred to as \"Shaolin\" in hip hop culture thanks to the Wu-Tang Clan.",
        "The result is a name that bridges multiple worlds: Craft and Culture Tradition and Transformation Discipline and Celebration The name reminds us where we came from, what inspired us, and what we continue to strive toward.",
      ],
      quiz: [
        {"q": "Which of the following best describes the purpose of the name Xiaolin?", "o": {"A": "To create a modern cannabis brand with no outside influences", "B": "To honor the past while embracing transformation and possibility", "C": "To emphasize product potency", "D": "To reflect a single cultural influence"}, "a": "B", "e": ""},
        {"q": "Which group is credited with popularizing the nickname \"Shaolin\" for Staten Island?", "o": {"A": "Run-D.M.C.", "B": "Wu-Tang Clan", "C": "A Tribe Called Quest", "D": "The Staten Island Chamber of Commerce"}, "a": "B", "e": ""},
        {"q": "Bonus: According to the Wu-Tang Clan, what should you protect?", "o": {"A": "Your heart", "B": "Your head", "C": "Your neck", "D": "Your reputation"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 3, module: 1, key: "the-pursuit-of-excellence", title: "The Pursuit of Excellence", tag: "Welcome to the Family", hero: "img/medallion.jpg",
      body: [
        "At Xiaolin, our mission is: To achieve excellence in crafting cannabis lifestyle products and experiences with creativity and integrity. That mission influences every decision we make.",
        "Whether we're selecting flower and concentrates, developing products, training High Council members, or creating memorable customer experiences, we believe excellence comes from intention, attention to detail, and a commitment to continuous improvement.",
        "Excellence Is a Pursuit Excellence is not something you achieve once. It's something you pursue continuously. Every batch can improve. Every workshop can improve. Every experience can improve.",
        "As a member of the High Council, you become part of that pursuit. You don't need to be perfect. You simply need to care enough to keep learning, improving, and contributing.",
        "That's how standards are built. Creativity and Integrity The final two words of our mission are just as important as the first. Creativity is the willingness to explore new ideas, challenge assumptions, and look for better ways of doing things.",
        "Many of the products, experiences, and programs we offer today exist because someone asked a simple question: \"How can this be done better?\" Integrity is the commitment to doing things the right way.",
        "It means maintaining standards even when shortcuts are available. It means choosing quality over convenience and long term trust over short term gain. Together, creativity and integrity help ensure that what we create reflects what we stand for.",
        "As a member of the High Council, you now play a role in carrying those values forward.",
      ],
      quiz: [
        {"q": "According to the lesson, excellence is:", "o": {"A": "A goal that can be fully achieved", "B": "Something reserved for experts", "C": "A continuous pursuit of learning and improvement", "D": "Determined by sales and performance"}, "a": "C", "e": ""},
        {"q": "Which question best reflects the spirit of creativity at Xiaolin?", "o": {"A": "\"How can we make this faster?\"", "B": "\"How can this be done better?\"", "C": "\"How can we sell more?\"", "D": "\"How can we finish this meeting in under 30 seconds?\""}, "a": "B", "e": ""},
        {"q": "According to the lesson, integrity means:", "o": {"A": "Choosing convenience whenever possible", "B": "Following trends and customer demand", "C": "Maintaining standards and choosing long term trust over short term gain", "D": "Avoiding change and new ideas"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 4, module: 1, key: "the-high-council", title: "The High Council", tag: "Welcome to the Family", hero: "img/medallion.jpg",
      body: [
        "The High Council is the community that helps carry the Xiaolin standard forward. Its members come from many different backgrounds. Some are retail associates, some are managers, some are industry professionals, and others are simply passionate supporters of the brand.",
        "What brings them together is a shared commitment to learning, growth, and the pursuit of excellence. Membership isn't about status or titles. It's about participation.",
        "Every member contributes in their own way, whether that's through education, feedback, mentorship, advocacy, or simply a willingness to learn. As a member, you'll have opportunities to learn about products, attend workshops, participate in flavor reviews, earn Commissary rewards, and contribute feedback that helps shape future products and experiences.",
        "No two journeys within the High Council look exactly alike, and there is no single path to follow. What matters most is a willingness to learn, contribute, and help strengthen the community.",
        "The Four Roles As members grow within the High Council, they often find themselves stepping into one or more of four roles. Brand Stewards help protect and strengthen the Xiaolin image through knowledge, professionalism, and consistency.",
        "Culture Carriers help preserve and share the ideas, traditions, and philosophy that make Xiaolin unique. Connectors build relationships and help people discover products, experiences, and opportunities that fit their needs.",
        "Craft Advocates understand and communicate the standards, craftsmanship, and attention to detail behind Xiaolin products. The Four Responsibilities While the roles describe who we are, the responsibilities describe what we do.",
        "Educate by sharing knowledge and helping others better understand the products, standards, and philosophy behind the brand. Engage by creating meaningful interactions, listening carefully, asking thoughtful questions, and remaining curious.",
        "Reflect by providing observations and feedback that help improve products, programs, and experiences. Represent by carrying yourself in a way that reflects the values and standards of the High Council.",
        "Carrying the Standard The goal is not perfection. The goal is progress. Every conversation is an opportunity to learn, every experience is an opportunity to improve, and every contribution helps strengthen the community.",
        "As a member of the High Council, you're helping shape how people experience Xiaolin. The standards, culture, and philosophy of the brand are carried forward not by any one person, but by the collective efforts of the community. Carry that responsibility with pride.",
      ],
      quiz: [
        {"q": "What brings High Council members together?", "o": {"A": "Their job titles and positions", "B": "Their cannabis experience", "C": "A shared commitment to learning, growth, and the pursuit of excellence", "D": "Their ability to sell Xiaolin products"}, "a": "C", "e": ""},
        {"q": "According to the lesson, membership in the High Council is primarily about:", "o": {"A": "Collecting titles like Pokémon cards", "B": "Participation and contribution", "C": "Product knowledge alone", "D": "Years of experience in cannabis"}, "a": "B", "e": ""},
        {"q": "Which High Council role helps preserve and share the ideas, traditions, and philosophy that make Xiaolin unique?", "o": {"A": "Brand Steward", "B": "Culture Carrier", "C": "Connector", "D": "Craft Advocate"}, "a": "B", "e": ""},
        {"q": "Which of the following is one of the Four Responsibilities of a High Council member?", "o": {"A": "Educate", "B": "Recruit", "C": "Promote", "D": "Manage"}, "a": "A", "e": ""},
      ],
    },
    {
      n: 5, module: 2, key: "the-godfather", title: "The Godfather", tag: "The Lineup", hero: "img/cannagars/godfather.png",
      body: [
        "The Godfather is the largest and most iconic member of the Xiaolin family. Designed for weddings, milestone celebrations, and moments that deserve a centerpiece, The Godfather represents the highest expression of the Xiaolin cannagar experience.",
        "With 12 grams of material and a burn time that can exceed two hours, it was created for occasions where the experience itself becomes part of the event. Specifications Total Weight: 12 grams Premium Flower: 10 grams Live Rosin: 2 grams Infusion Ratio: 20% Live Rosin Burn Time: Up to 2+ hours What Makes It Different?",
        "Like all Xiaolin cannagars, The Godfather is handcrafted by a trained Canna-Torcedor and finished with 24kt gold detailing as part of the VSXL collection. Its size, construction, and extended burn time make it ideal for sharing, allowing groups to settle in, connect, and enjoy the experience together.",
        "Rather than being something that's rushed through, The Godfather was designed to become part of the occasion itself. When To Recommend It The Godfather is best suited for: • Weddings • Anniversaries • Major celebrations • Luxury gifting • Group experiences • Milestone moments Key Takeaway The Godfather is the centerpiece of the Xiaolin lineup.",
        "When the moment calls for something extraordinary, this is the product built for it.",
      ],
      quiz: [
        {"q": "What is the total weight of The Godfather?", "o": {"A": "3 grams", "B": "6 grams", "C": "12 grams", "D": "24 grams"}, "a": "C", "e": ""},
        {"q": "The Godfather is best suited for:", "o": {"A": "Walking the dog around the block", "B": "Everyday convenience", "C": "Weddings, milestone celebrations, and group experiences", "D": "First-time cannabis consumers"}, "a": "C", "e": ""},
        {"q": "Approximately how long can The Godfather burn?", "o": {"A": "15–20 minutes", "B": "30–45 minutes", "C": "About 1 hour", "D": "Up to 2+ hours"}, "a": "D", "e": ""},
        {"q": "According to the lesson, what makes The Godfather unique within the Xiaolin lineup?", "o": {"A": "It is the smallest product in the lineup", "B": "It is designed primarily for concentrates", "C": "It is the largest and most iconic member of the Xiaolin family", "D": "It is the only product infused with live rosin"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 6, module: 2, key: "the-capo", title: "The Capo", tag: "The Lineup", hero: "img/cannagars/capo.png",
      body: [
        "The Capo is built for those moments that call for something premium without going all the way to a Godfather. Named after the caporegime of organized crime lore, The Capo represents leadership, confidence, and quiet authority.",
        "It delivers the full Xiaolin cannagar experience in a format that's easier to share, gift, and enjoy across a wider variety of occasions. Specifications Total Weight: 6 grams Premium Flower: 5 grams Live Rosin: 1 gram Infusion Ratio: 20% Live Rosin Burn Time: Up to 1+ hour What Makes It Different?",
        "The Capo is part of the VSXL collection and features 24kt gold detailing along with a Jade Green Glass Dragon Tip. Like all Xiaolin cannagars, it is handcrafted by a trained Canna-Torcedor and built around the same standards of construction, airflow, and presentation.",
        "Its size places it squarely between the larger Godfather and the more intimate Goomah, making it one of the most versatile products in the lineup. For many customers, The Capo offers the ideal balance between size, experience, and practicality.",
        "It feels special enough for celebrations and gifting, while remaining approachable enough for smaller gatherings and everyday milestones. When To Recommend It The Capo is best suited for: • Birthdays • Dinner parties • Executive gifting • Date nights • Small group celebrations • Customers looking for a premium cannagar experience Key Takeaway The Capo delivers the luxury and craftsmanship of a Xiaolin cannagar in a format that fits a wide range of occasions.",
        "When someone wants something memorable without stepping up to a Godfather, The Capo is often the perfect choice.",
      ],
      quiz: [
        {"q": "What is the total weight of The Capo?", "o": {"A": "3 grams", "B": "6 grams", "C": "12 grams", "D": "24 grams"}, "a": "B", "e": ""},
        {"q": "What distinguishes The Capo from the other VSXL cannagars?", "o": {"A": "A Wooden Dragon Tip", "B": "A Clear Dragon Tip", "C": "A Jade Green Glass Dragon Tip", "D": "A Gold Dragon Tip"}, "a": "C", "e": ""},
        {"q": "Approximately how long can The Capo burn?", "o": {"A": "30–45 minutes", "B": "Up to 1+ hour", "C": "Up to 2+ hours", "D": "10–15 minutes"}, "a": "B", "e": ""},
        {"q": "According to the lesson, The Capo is often the right choice when:", "o": {"A": "A customer wants the largest cannagar available", "B": "A customer is trying to fit a cannagar into a shirt pocket", "C": "A customer wants something special without stepping up to a Godfather", "D": "A customer is new to cannabis"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 7, module: 2, key: "the-goomah", title: "The Goomah", tag: "The Lineup", hero: "img/cannagars/goomah.png",
      body: [
        "The Goomah is the smallest member of the VSXL cannagar family, but don't mistake size for significance. Designed for more intimate moments, The Goomah combines premium craftsmanship, live rosin infusion, and a smooth draw in a format that's approachable, elegant, and easy to enjoy.",
        "Its name comes from Italian-American slang, where \"Goomah\" refers to someone unforgettable—the person people remember long after the moment has passed. That same idea helped inspire the product, which was designed to leave a lasting impression without requiring a major occasion.",
        "Specifications Total Weight: 3 grams Premium Flower: 2.5 grams Live Rosin: 0.5 grams Infusion Ratio: 20% Live Rosin Burn Time: Up to 30–45 minutes What Makes It Different?",
        "The Goomah is part of the VSXL collection and features 24kt gold detailing along with a natural wooden tip. Its smaller size makes it more approachable than a Godfather or Capo while still delivering the same craftsmanship, construction, and flavor-focused experience found throughout the Xiaolin cannagar lineup.",
        "For many customers, The Goomah serves as an introduction to premium cannagars. For others, it's the perfect size for personal celebrations, smaller gatherings, or moments that call for something special without the commitment of a larger format.",
        "When To Recommend It The Goomah is best suited for: • Date nights • Personal celebrations • Rooftop sessions • Smaller gatherings • Customers new to cannagars • Customers seeking a premium but approachable experience Key Takeaway The Goomah delivers the craftsmanship, flavor, and experience of a Xiaolin cannagar in a more intimate format.",
        "It offers an approachable introduction to the VSXL collection while remaining a favorite for customers who appreciate quality without excess.",
      ],
      quiz: [
        {"q": "What is the total weight of The Goomah?", "o": {"A": "2 grams", "B": "3 grams", "C": "6 grams", "D": "12 grams"}, "a": "B", "e": ""},
        {"q": "Which feature is unique to The Goomah?", "o": {"A": "Jade Green Glass Dragon Tip", "B": "Clear Dragon Tip", "C": "Natural Wooden Tip", "D": "Gold Dragon Tip"}, "a": "C", "e": ""},
        {"q": "The Goomah is often recommended for:", "o": {"A": "Weddings and major milestone celebrations", "B": "Surviving a zombie apocalypse", "C": "Date nights, smaller gatherings, and customers new to cannagars", "D": "Concentrate enthusiasts seeking a combustion-free experience"}, "a": "C", "e": ""},
        {"q": "According to the lesson, The Goomah delivers:", "o": {"A": "The largest cannagar experience available", "B": "A quick convenience-focused session", "C": "The craftsmanship and experience of a Xiaolin cannagar in a more intimate format", "D": "A non-infused flower experience"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 8, module: 2, key: "the-soldato", title: "The Soldato", tag: "The Lineup", hero: "img/joints/RiceSoldato.png",
      body: [
        "The Soldato is Xiaolin's take on the infused joint. Named after the Italian word for \"soldier,\" The Soldato was designed to be dependable, purposeful, and ready when called upon.",
        "While our cannagars are often reserved for larger occasions, The Soldato delivers a premium Xiaolin experience in a format built for everyday enjoyment. Specifications Total Weight: 2.4 grams Premium Flower: 2 grams Live Rosin: 0.4 grams Infusion Ratio: 20% Live Rosin Burn Time: Up to 15–20 minutes What Makes It Different?",
        "The Soldato is rolled using the plumber technique, a construction method designed to improve airflow and create a more consistent smoking experience. During production, a bamboo skewer is inserted through the center of the roll.",
        "Once removed, it leaves behind a central airway that helps promote a smoother draw and a more even burn from beginning to end. Each Soldato is finished with a Clear Glass Dragon Tip, adding comfort and refinement while helping preserve flavor throughout the session.",
        "Like all Xiaolin products, The Soldato follows our 20% live rosin infusion standard and is crafted around the same philosophy that guides the rest of the lineup: balance, flavor, and experience.",
        "When To Recommend It The Soldato is best suited for: • Solo sessions • Flavor-focused consumers • Experienced smokers • Customers looking for a premium infused joint • Customers who appreciate craftsmanship and construction Key Takeaway The Soldato combines premium flower, live rosin, and thoughtful construction into a dependable infused joint experience.",
        "For customers looking for everyday convenience without sacrificing craftsmanship, The Soldato delivers the core Xiaolin experience in a familiar format.",
      ],
      quiz: [
        {"q": "What production technique helps create The Soldato's smooth draw and consistent burn?", "o": {"A": "Hand-packing", "B": "Triple infusion", "C": "The plumber technique", "D": "Cold curing"}, "a": "C", "e": ""},
        {"q": "Which tip is featured on The Soldato?", "o": {"A": "Natural Wooden Tip", "B": "Jade Green Glass Dragon Tip", "C": "Gold Dragon Tip", "D": "Clear Glass Dragon Tip"}, "a": "D", "e": ""},
        {"q": "The name \"Soldato\" comes from the Italian word for:", "o": {"A": "Leader", "B": "Friend", "C": "Soldier", "D": "Family"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 9, module: 2, key: "the-bambino", title: "The Bambino", tag: "The Lineup", hero: "img/joints/Bambino_RedTip.png",
      body: [
        "The Bambino may be the smallest product in the Xiaolin lineup, but it is held to the same standards as everything else we create. Designed for convenience and accessibility, The Bambino offers an easy way to experience the brand without committing to a larger format.",
        "Each package contains two infused joints, making it ideal for sharing with a friend or saving one for later. Specifications Package Contents: Two Infused Joints Per Joint Weight: 0.5 grams Premium Flower: 0.4 grams Live Rosin: 0.1 grams Infusion Ratio: 20% Live Rosin Burn Time: Up to 10–15 minutes per joint What Makes It Different?",
        "The Bambino is produced using the knock box method, allowing for consistency while maintaining the standards expected of a Xiaolin product. Although smaller than a Soldato or cannagar, it still follows the same 20% live rosin infusion standard and flavor-first philosophy found throughout the lineup.",
        "The goal isn't simply to create a smaller product, but to create a more approachable way for customers to experience the brand. For many customers, The Bambino serves as their introduction to Xiaolin.",
        "For others, it becomes a convenient favorite they return to again and again. When To Recommend It The Bambino is best suited for: • New customers • Casual consumers • Quick sessions • Customers looking to try the brand • Add-on purchases • Social events and gatherings Key Takeaway The Bambino offers a convenient and approachable entry point into the Xiaolin lineup.",
        "It delivers the same flavor-focused philosophy and live rosin infusion standards as the rest of the family in a format that's easy to enjoy, share, and revisit.",
      ],
      quiz: [
        {"q": "How many infused joints are included in a package of Bambinos?", "o": {"A": "One", "B": "Two", "C": "Three", "D": "Four"}, "a": "B", "e": ""},
        {"q": "Which of the following customers is The Bambino especially well suited for?", "o": {"A": "Customers looking for a quick and approachable introduction to the brand", "B": "Customers planning a wedding celebration", "C": "Customers seeking the largest product in the lineup", "D": "Customers looking for a concentrate-only experience"}, "a": "A", "e": ""},
        {"q": "According to the lesson, The Bambino is best described as:", "o": {"A": "A premium centerpiece for major celebrations", "B": "An approachable and convenient entry point into the Xiaolin lineup", "C": "A product designed exclusively for experienced consumers", "D": "A concentrate-focused product"}, "a": "B", "e": ""},
      ],
    },
    {
      n: 10, module: 2, key: "the-chalice", title: "The Chalice", tag: "The Lineup", hero: "img/chalice/c1.jpg",
      body: [
        "The Chalice represents a different side of the Xiaolin experience. While our cannagars and joints are built around combustion, The Chalice was created for those seeking a ritual centered around vapor.",
        "Designed to combine function, presentation, and experience, it offers a unique way to appreciate cannabis that feels both intentional and memorable. At its core, The Chalice transforms consumption into an experience that encourages people to slow down, connect, and appreciate the moment.",
        "Specifications Device Type: Premium Vaporizing Device Compatibility: • Cannabis Concentrates • 510 Thread Cartridges Features: • Detachable Octagonal Glass Chalice • Gold Rim Detailing • Multiple Finish Options • Rechargeable Battery System What Makes It Different?",
        "Rather than drawing through a traditional mouthpiece, vapor collects within the octagonal glass chalice before being enjoyed through a slow sip. This creates an experience that feels distinctly different from smoking or using a conventional vaporizer.",
        "The Chalice was designed around the idea that consumption can be more than a routine. The slower pace, unique presentation, and social nature of the device encourage people to pause, engage with the experience, and appreciate the ritual itself.",
        "For many customers, The Chalice becomes more than a device. It becomes a conversation piece, a centerpiece, and a different way to enjoy cannabis with friends or on their own.",
        "When To Recommend It The Chalice is best suited for: • Concentrate consumers • Cartridge users • Customers seeking a combustion-free experience • Gifting occasions • Collectors • Customers interested in ritual and presentation Key Takeaway The Chalice expands the Xiaolin experience beyond smoking by combining vapor, presentation, and ritual into a single experience.",
        "For customers seeking something distinctive, it offers a unique way to slow down and appreciate cannabis.",
      ],
      quiz: [
        {"q": "What type of product is The Chalice?", "o": {"A": "Infused Joint", "B": "Cannagar", "C": "Premium Vaporizing Device", "D": "Glass Tip Accessory"}, "a": "C", "e": ""},
        {"q": "What makes The Chalice experience different from a traditional vaporizer?", "o": {"A": "It uses a larger battery", "B": "Vapor collects in the glass chalice before being enjoyed through a slow sip", "C": "It only works with cartridges", "D": "It produces smoke instead of vapor"}, "a": "B", "e": ""},
        {"q": "Which of the following customers is The Chalice best suited for?", "o": {"A": "Customers seeking a combustion-free experience", "B": "Customers looking for the largest cannagar available", "C": "Customers interested only in flower", "D": "Customers seeking the quickest possible session"}, "a": "A", "e": ""},
      ],
    },
    {
      n: 11, module: 2, key: "the-xiaolin-standard", title: "The Xiaolin Standard", tag: "The Lineup", hero: "img/chalice/c-hand.jpg",
      body: [
        "While the products in the Xiaolin lineup may differ in size, format, and intended occasion, they are all connected by a shared philosophy and set of standards. Understanding those standards is one of the most important parts of understanding the brand.",
        "The 20% Standard Every infused product in the Xiaolin lineup follows the same infusion ratio: one part live rosin to five parts flower, creating a 20% live rosin infusion.",
        "This standard was established with balance in mind. Rather than overwhelming the flower, the goal is to enhance it. The flower remains the foundation of the experience, while the live rosin contributes additional flavor, complexity, and depth.",
        "By maintaining a consistent infusion ratio across the lineup, we create products that deliver a more intentional and predictable experience while allowing the unique characteristics of the flower to remain at the forefront.",
        "Flavor Before Fire At Xiaolin, we believe great cannabis starts with flavor. When evaluating flower and concentrates, we prioritize taste, aroma, and overall experience before potency numbers.",
        "This philosophy influences how we source materials, develop products, and conduct flavor reviews. While potency certainly has its place, our goal isn't simply to create stronger products.",
        "Our goal is to create better experiences. Built With Intention Every product in the Xiaolin lineup serves a purpose. Some are designed for major celebrations, while others are intended for everyday enjoyment.",
        "Some are built to be shared among friends, while others are better suited for personal rituals and quiet reflection. The formats may differ, and the occasions may change, but the commitment to craftsmanship remains the same.",
        "Each product exists for a reason and is designed to create a specific type of experience. Key Takeaway The products may differ, but the philosophy remains consistent.",
        "Craftsmanship. Balance. Flavor. Experience. These principles connect everything we create and help define what it means to be Xiaolin. Whether someone chooses a Godfather, a Bambino, or anything in between, they should be able to recognize the same commitment to quality, intention, and the pursuit of excellence.",
      ],
      quiz: [
      ],
    },
    {
      n: 12, module: 3, key: "rolled-proper", title: "Rolled Proper", tag: "Rolled Proper", hero: "img/chalice/c-hand.jpg",
      body: [
        "The phrase \"Rolled Proper\" comes from a lyric by The Notorious B.I.G.: \"I only smoke blunts if they rolled proper.\" We connected with that idea immediately. Not because of the blunt, but because of the standard behind it.",
        "At Xiaolin, Rolled Proper became our way of describing the pursuit of excellence. It's not just about how a product is rolled. It's about how it's crafted, presented, and experienced.",
        "A product that is Rolled Proper should consistently reflect five core principles. Visual Symmetry A quality product should look intentional. It should feel balanced, clean, and well constructed.",
        "Before a customer ever lights a product, they should be able to see the care and attention that went into creating it. Smooth Draw Airflow matters. A premium experience should feel effortless from start to finish.",
        "The draw should be smooth, comfortable, and consistent, allowing the consumer to focus on the experience rather than the mechanics. Slow Even Burn A properly crafted product should burn evenly and predictably.",
        "No racing, no excessive canoeing, and no wasted experience. The goal is to allow the consumer to focus on the moment, not the product. Strong Ash Strong ash is often a sign of quality flower, proper curing, and solid construction.",
        "While ash color alone doesn't determine quality, a product that burns cleanly and maintains its structure can be a reflection of the care that went into producing it.",
        "Flavor Before Fire Perhaps the most important Xiaolin principle is that flavor comes first. Before potency. Before THC percentages. Before marketing claims. If the experience isn't enjoyable, nothing else matters.",
        "Together, these five principles help define what it means to be Rolled Proper.",
      ],
      quiz: [
        {"q": "The phrase \"Rolled Proper\" was inspired by a lyric from which artist?", "o": {"A": "Nas", "B": "Jay-Z", "C": "The Notorious B.I.G.", "D": "Wu-Tang Clan"}, "a": "C", "e": ""},
        {"q": "Which of the following is NOT one of the Five Principles of Rolled Proper?", "o": {"A": "Visual Symmetry", "B": "Strong Ash", "C": "Looking Cool on Instagram", "D": "Smooth Draw"}, "a": "C", "e": ""},
        {"q": "According to the lesson, what does \"Flavor Before Fire\" mean?", "o": {"A": "Flavor should be considered before potency, THC percentages, and marketing claims", "B": "Products should only be consumed for flavor", "C": "Potency is more important than flavor", "D": "THC percentage determines quality"}, "a": "A", "e": ""},
        {"q": "What is the primary purpose of the Rolled Proper principles?", "o": {"A": "To increase THC percentages", "B": "To create a framework for evaluating quality and experience", "C": "To determine product pricing", "D": "To classify cannabis strains"}, "a": "B", "e": ""},
      ],
    },
    {
      n: 13, module: 3, key: "flavor-before-fire", title: "Flavor Before Fire", tag: "Rolled Proper", hero: "img/chalice/c3.jpg",
      body: [
        "At Xiaolin, we believe great cannabis starts with flavor. That's why one of our core philosophies is simple: Flavor Before Fire. Many brands focus their attention on THC percentages.",
        "Others focus on strain names. We take a different approach by focusing on the overall experience. Blind Reviews When evaluating flower and concentrates, we often review samples without knowing the strain name, THC percentage, or producer.",
        "This helps remove bias from the process and keeps our attention on what matters most. The question becomes simple: \"Do we enjoy this?\" If the answer is no, the numbers don't matter.",
        "VSXL VSXL stands for Very Special Xiaolin. It is a designation reserved for our premium cannagar lineup, including the Godfather, Capo, and Goomah. Every VSXL product features 24kt gold detailing and is designed to commemorate moments that matter.",
        "The designation reflects our commitment to craftsmanship, presentation, and experience. Craft Over Hype At Xiaolin, we don't believe the best product is always the one with the highest THC percentage.",
        "We believe the best product is the one that delivers the best experience. That's why we prioritize flavor. That's why we focus on craftsmanship. And that's why we continue to pursue excellence in everything we create.",
      ],
      quiz: [
        {"q": "What does the philosophy \"Flavor Before Fire\" encourage us to prioritize?", "o": {"A": "THC percentage", "B": "Strain names", "C": "The overall experience, including flavor", "D": "Packaging design"}, "a": "C", "e": ""},
        {"q": "Why does Xiaolin use blind reviews when evaluating flower and concentrates?", "o": {"A": "To speed up the review process", "B": "To remove bias and focus on the experience itself", "C": "To compare products by THC percentage", "D": "To identify the producer"}, "a": "B", "e": ""},
        {"q": "What does VSXL stand for?", "o": {"A": "Very Special Xiaolin", "B": "Very Strong Xiaolin Line", "C": "Vapor System Xiaolin Line", "D": "Verified Standard Xiaolin Label"}, "a": "A", "e": ""},
        {"q": "According to the lesson, the best product is:", "o": {"A": "The one with the highest THC percentage", "B": "The one with the strongest aroma", "C": "The one that delivers the best experience", "D": "The most expensive option"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 14, module: 4, key: "reading-the-moment", title: "Reading the Moment", tag: "The Experience", hero: "img/gen/nightlife.jpg",
      body: [
        "Every customer is different. Some know exactly what they're looking for, while others are still exploring. Some are celebrating a milestone, while others are simply looking to relax after a long day.",
        "The most effective recommendations begin with understanding the person, not the product. Listen Before You Lead Many customers will tell you exactly what they're looking for if you're willing to listen.",
        "Before recommending a product, take time to understand the occasion, the mood, or the experience they're hoping to create. Simple questions often reveal the most useful information.",
        "Questions such as: • What brings you in today? • Looking for something familiar or something new? • Are you celebrating anything? The goal isn't to sell. The goal is to understand.",
        "Stay Curious Curiosity creates better conversations. When you remain curious, recommendations become more personal and meaningful. Customers often remember how a recommendation made them feel more than the recommendation itself.",
        "Focus on the Experience Rather than immediately focusing on products, focus on the experience someone is looking for. Once you understand the moment, choosing the right product becomes much easier.",
      ],
      quiz: [
        {"q": "According to the lesson, the most effective recommendations begin with:", "o": {"A": "Understanding the person, not the product", "B": "Recommending the most expensive option first", "C": "Quoting THC percentages from memory", "D": "Asking, \"How many of these are you buying today?\""}, "a": "A", "e": ""},
        {"q": "Before recommending a product, what should you try to understand?", "o": {"A": "The occasion, mood, or experience the customer is hoping to create", "B": "Their favorite pizza topping", "C": "Whether they believe Bigfoot exists", "D": "Their Wi-Fi password"}, "a": "A", "e": ""},
        {"q": "What is the goal of asking questions like \"What brings you in today?\" or", "o": {"A": "To collect customer data for future marketing campaigns", "B": "To understand the customer's needs and desired experience", "C": "To see how long they'll talk before buying something", "D": "To determine whether they deserve a Godfather"}, "a": "B", "e": ""},
        {"q": "According to the lesson, customers often remember:", "o": {"A": "Every specification and terpene percentage", "B": "The exact SKU number of the product", "C": "How a recommendation made them feel", "D": "The employee who recited the most THC percentages"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 15, module: 4, key: "matching-the-occasion", title: "Matching the Occasion", tag: "The Experience", hero: "img/gen/event.jpg",
      body: [
        "Every product in the Xiaolin lineup was created with a different type of experience in mind. Understanding those differences helps create more thoughtful recommendations.",
        "The Godfather The Godfather was designed for major celebrations, including weddings, anniversaries, significant milestones, and moments that deserve a centerpiece.",
        "The Capo The Capo is often well suited for premium experiences such as dinner parties, birthdays, small group celebrations, and luxury gifting. The Goomah The Goomah naturally fits date nights, personal celebrations, intimate gatherings, and relaxed social experiences.",
        "The Soldato The Soldato appeals to solo sessions, flavor focused consumers, and customers seeking a premium infused joint experience. The Bambino The Bambino is ideal for quick sessions, casual consumers, social events, and customers looking for an easy introduction to the brand.",
        "The Chalice The Chalice often appeals to ritual focused consumers, concentrate users, collectors, and enthusiasts seeking a combustion free experience. No Perfect Answers These recommendations are guidelines, not rules.",
        "The goal is not to force a product into a moment. The goal is to help someone find the product that best supports the experience they want to create.",
      ],
      quiz: [
        {"q": "A customer is shopping for a wedding celebration. Which Xiaolin product would generally be the best fit?", "o": {"A": "The Bambino", "B": "The Soldato", "C": "The Godfather", "D": "Whatever happens to be closest to the register"}, "a": "C", "e": ""},
        {"q": "Which product is often recommended for customers looking for a quick session or an easy introduction to the brand?", "o": {"A": "The Godfather", "B": "The Bambino", "C": "The Chalice", "D": "A six-hour meditation retreat"}, "a": "B", "e": ""},
        {"q": "A customer is looking for a combustion-free experience and enjoys ritual, presentation, and concentrates. Which product would be the best fit?", "o": {"A": "The Goomah", "B": "The Soldato", "C": "The Chalice", "D": "A really fancy drinking glass"}, "a": "C", "e": ""},
        {"q": "According to the lesson, the purpose of these recommendations is to:", "o": {"A": "Match every customer to the same product", "B": "Follow strict rules with no exceptions", "C": "Help customers find the product that best supports the experience they want to create", "D": "Convince everyone they need a Godfather"}, "a": "C", "e": ""},
      ],
    },
    {
      n: 16, module: 4, key: "beyond-indica-sativa-and-hybrid", title: "Beyond Indica, Sativa, and Hybrid", tag: "The Experience", hero: "img/gen/event.jpg",
      body: [
        "Indica, Sativa, and Hybrid are among the most recognizable terms in cannabis. While these classifications remain widely used, they don't always provide a complete picture of the experience a product may deliver.",
        "Many factors contribute to the overall experience, including cannabinoid content, terpene profile, dosage, setting, and the individual consuming the product. Because of this, two products carrying the same classification can sometimes produce very different experiences.",
        "At Xiaolin, we encourage members to think beyond simple labels and focus on the experience a customer is looking to create. A customer may be seeking relaxation, celebration, creativity, connection, focus, or simply a moment to unwind.",
        "Understanding that desired outcome often provides greater insight than relying on a category alone. This doesn't mean Indica, Sativa, and Hybrid aren't useful. It simply means they are one part of a much larger conversation.",
        "The goal is to understand the moment first, then help guide someone toward the experience that best fits it.",
      ],
      quiz: [
        {"q": "According to the lesson, why don't Indica, Sativa, and Hybrid always tell the whole story?", "o": {"A": "Because those categories no longer exist", "B": "Because factors like cannabinoids, terpenes, dosage, setting, and the individual also influence the experience", "C": "Because all cannabis products produce the exact same effects", "D": "Because customers secretly choose products based on package color"}, "a": "B", "e": ""},
        {"q": "At Xiaolin, what should members focus on first when helping a customer?", "o": {"A": "THC percentage", "B": "Whether the product is Indica, Sativa, or Hybrid", "C": "The experience the customer is hoping to create", "D": "Which product has the coolest name"}, "a": "C", "e": ""},
        {"q": "True or False: The lesson teaches that Indica, Sativa, and Hybrid are completely useless terms.", "o": {"A": "True", "B": "False", "C": "Only on Tuesdays", "D": "Depends on the moon phase"}, "a": "B", "e": ""},
        {"q": "Which question is most aligned with the Xiaolin approach?", "o": {"A": "\"What's the highest THC product you have?\"", "B": "\"Is it an Indica or a Sativa?\"", "C": "\"What kind of experience are you looking to create?\"", "D": "\"Which one has the longest product name?\""}, "a": "C", "e": ""},
      ],
    },
    {
      n: 17, module: 4, key: "why-experiences-matter", title: "Why Experiences Matter", tag: "The Experience", hero: "img/gen/event.jpg",
      body: [
        "Cannabis products can often appear similar at first glance. Flower, pre-rolls, concentrates, vaporizers, and edibles are available from countless brands across the industry.",
        "What often separates one product from another is not simply the ingredients or specifications, but the experience surrounding it. A product purchased for a wedding serves a different purpose than one purchased for a quiet evening at home.",
        "An occasion can influence how a product is selected, shared, remembered, and discussed long after it has been enjoyed. Understanding this relationship between products and experiences helps explain many of the decisions made throughout the Xiaolin lineup.",
        "Different products exist because different moments call for different experiences. Some are designed for celebration. Some are designed for convenience. Some are designed for sharing.",
        "Others are designed for personal rituals. Recognizing those differences creates a deeper understanding of the role products can play in people's lives. At Xiaolin, we believe the most memorable experiences are often intentional ones.",
        "That belief continues to influence how we think about products, craftsmanship, and the moments they help create.",
      ],
      quiz: [
        {"q": "According to the lesson, what often separates one product from another?", "o": {"A": "The size of the logo on the package", "B": "The experience surrounding the product", "C": "The length of the product name", "D": "Whether the box looks expensive"}, "a": "B", "e": ""},
        {"q": "Why do different products exist throughout the Xiaolin lineup?", "o": {"A": "To make ordering more complicated", "B": "Because every product must have a different color", "C": "Because different moments call for different experiences", "D": "Because someone lost a bet"}, "a": "C", "e": ""},
        {"q": "According to the lesson, the most memorable experiences are often:", "o": {"A": "The most expensive ones", "B": "The loudest ones", "C": "The highest THC ones", "D": "Intentional ones"}, "a": "D", "e": ""},
        {"q": "Bonus: Which of the following would most likely call for a different product recommendation than a quiet evening at home?", "o": {"A": "A wedding celebration", "B": "A major anniversary", "C": "A milestone event", "D": "All of the above"}, "a": "D", "e": ""},
      ],
    },
    {
      n: 18, module: 5, key: "the-commissary", title: "The Commissary", tag: "The Commissary", hero: "img/medallion.jpg",
      body: [
        "Being part of the High Council is about more than completing lessons. It's about participation. The Commissary was designed to reward members who continue learning, contributing, and helping carry the Xiaolin standard forward.",
        "While points and rewards are part of the program, the larger goal is to encourage ongoing involvement within the community. Earning Points Members can earn Commissary Points through a variety of activities across the High Council ecosystem.",
        "Examples may include: • Completing Chambers and educational content • Attending workshops and events • Participating in flavor reviews • Contributing feedback • Supporting activations and special projects • Other approved High Council activities As the High Council continues to evolve, additional opportunities to earn points may be introduced.",
        "Submitting Activity Some activities may require verification before points are awarded. Depending on the activity, verification may include attendance records, submission forms, event participation, sales or activity reports, or manager verification.",
        "The goal is not to create extra work. The goal is to ensure that participation is recognized fairly and consistently throughout the program. Redeeming Rewards Commissary Points can be exchanged for rewards made available through the High Council Portal.",
        "Rewards may include Xiaolin products, merchandise, exclusive opportunities, event access, and limited releases. Available rewards may change over time as the program continues to grow and new opportunities become available.",
        "Progression and Unlocks The Commissary is more than a rewards program. It is also a reflection of participation and engagement within the High Council. As members continue their journey, they may unlock new opportunities, experiences, and levels of involvement.",
        "The more engaged you become, the more opportunities become available. Participation Matters The Commissary was built around a simple idea: Participation should be recognized.",
        "Every workshop attended, every lesson completed, every contribution shared, and every experience helped create contributes to the strength of the High Council community.",
        "The Commissary exists to recognize those efforts, reward meaningful participation, and encourage members to continue growing alongside the community.",
      ],
      quiz: [
        {"q": "The Commissary was created to:", "o": {"A": "Track who talks the most during workshops", "B": "Recognize participation, reward meaningful contributions, and encourage continued growth within the High Council", "C": "Replace all High Council activities with quizzes", "D": "Determine who gets assigned cleanup duty"}, "a": "B", "e": ""},
        {"q": "Which of the following activities may help members earn Commissary Points?", "o": {"A": "Completing Chambers and educational content", "B": "Attending workshops and events", "C": "Participating in flavor reviews and contributing feedback", "D": "All of the above"}, "a": "D", "e": ""},
      ],
    },
    {
      n: 19, module: 6, key: "flavor-review-workshops", title: "Flavor Review Workshops", tag: "The Path Forward", hero: "img/chalice/c3.jpg",
      body: [
        "At Xiaolin, flavor plays an important role in everything we create. One of the ways we evaluate flower and concentrates is through structured flavor reviews, and Flavor Review Workshops give High Council members an opportunity to participate in that process.",
        "During these sessions, members evaluate aroma, flavor, and overall experience while providing feedback that can influence future product decisions. These workshops are designed to sharpen sensory awareness while giving members a deeper understanding of how products are selected, curated, and developed.",
        "For many members, this is their first opportunity to directly contribute to the creative process behind the brand.",
      ],
      quiz: [
        {"q": "What is the primary purpose of a Flavor Review Workshop?", "o": {"A": "To see who can finish a sample the fastest", "B": "To evaluate aroma, flavor, and overall experience while providing feedback that may influence future product decisions", "C": "To memorize terpene charts and strain names", "D": "To determine who gets the last Bambino in the room"}, "a": "B", "e": ""},
      ],
    },
    {
      n: 20, module: 6, key: "customer-engagement-workshops", title: "Customer Engagement Workshops", tag: "The Path Forward", hero: "img/gen/nightlife.jpg",
      body: [
        "Great products deserve great experiences. Customer Engagement Workshops focus on communication, connection, and creating meaningful interactions. These workshops build upon many of the concepts introduced throughout the Chambers and provide opportunities to explore them in greater depth.",
        "Topics may include customer communication, product positioning, storytelling, active listening, and experience creation. While products are often part of the conversation, the focus extends beyond product knowledge alone.",
        "The goal is not simply to sell products. The goal is to help create memorable experiences.",
      ],
      quiz: [
        {"q": "What is the primary goal of a Customer Engagement Workshop?", "o": {"A": "To memorize product specifications and THC percentages", "B": "To help create memorable customer experiences through communication and connection", "C": "To see who can talk the longest without taking a breath", "D": "To convince every customer they need a Godfather"}, "a": "B", "e": ""},
      ],
    },
    {
      n: 21, module: 6, key: "production-workshops", title: "Production Workshops", tag: "The Path Forward", hero: "img/gen/popup-dispensary.jpg",
      body: [
        "Every Xiaolin product begins long before it reaches a shelf. Production Workshops provide members with a behind-the-scenes look at the craftsmanship, techniques, and processes that help bring products to life.",
        "Depending on the workshop, members may learn about sourcing, infusion, rolling techniques, quality control, packaging, and other aspects of production. Understanding how products are made often creates a greater appreciation for the standards behind them and the effort required to consistently deliver quality experiences.",
      ],
      quiz: [
        {"q": "What is the primary purpose of a Production Workshop?", "o": {"A": "To learn how products are sourced, crafted, and brought to life", "B": "To determine who gets promoted to Head Canna-Torcedor", "C": "To test everyone's packaging speed", "D": "To see how many Dragon Tips can fit in a pocket"}, "a": "A", "e": ""},
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

  // Upcoming High Council experiences — workshops, trainings, flavor reviews, etc.
  events: [
    { date: "Aug 07", type: "Connect", title: "High Council Connect — Summer", where: "Brooklyn, NY", note: "Meet the family + first look at the fall drop.", pts: 25 },
    { date: "Jun 18", type: "Flavor Review",  title: "Flavor Review Workshop", where: "Warwick, NY",
      note: "Blind-taste the next NY drop and help pick what makes the cut.", pts: 25 },
    { date: "Jun 25", type: "Experience",     title: "High Council Experience (Live)", where: "NYC",
      note: "The full immersive course with Christopher Louie — smoke, eat, connect.", pts: 50 },
    { date: "Jul 09", type: "Production",      title: "Production Workshop", where: "Warwick, NY",
      note: "Roll alongside a Canna-Torcedor and learn the craft hands-on.", pts: 50 },
    { date: "Jul 16", type: "Customer Engage", title: "Customer Engagement Lab", where: "Virtual",
      note: "Live sales-floor role play — read the room, close like a boss.", pts: 25 },
    { date: "Jul 24", type: "Connect",         title: "High Council Connect", where: "Astoria, NY",
      note: "Quick intro session + meet other Council members across stores.", pts: 25 },
  ],
};

if (typeof module !== "undefined") module.exports = XIAOLIN;
