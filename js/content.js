/* =====================================================================
   PAX SILICA, EXPLAINED — ALL WEBSITE TEXT LIVES IN THIS FILE
   ---------------------------------------------------------------------
   • Every piece of text has an English (en) and Filipino (fil) version.
   • To cite a source inside any text, write {{c:sourceId}} or
     {{c:id1,id2}}. Source IDs are listed in SOURCES below.
   • Item "type" controls the label shown next to it:
       "fact"       = what happened, as reported
       "claim"      = what someone says / argues
       "projection" = a forecast or target, not a result
   • See README.md for step-by-step editing instructions.
   ===================================================================== */

/* ---------- 1. THE "AS OF" DATE (change this when you update) ---------- */
window.AS_OF = {
  en: "November 5, 2026",
  fil: "Nobyembre 5, 2026"
};

/* ---------- 2. SOURCES ----------
   outlet: name shown in small text
   date:   date shown in small text ("" = date still to confirm)
   url:    link to the article ("" = no link yet)
   note:   optional extra label, e.g. Chinese state media
*/
window.SOURCES = {
  wiki:        { outlet: "Wikipedia", date: "", url: "" },
  avasant:     { outlet: "Avasant", date: "", url: "" },
  big:         { outlet: "Brussels Institute for Geopolitics", date: "July 2026", url: "" },
  manorama:    { outlet: "Manorama", date: "June 2026", url: "" },
  philstar0810:{ outlet: "Philstar", date: "Aug 10, 2026", url: "" },
  rappler1104: { outlet: "Rappler", date: "Nov 4, 2026", url: "" },
  members:     { outlet: "Membership figures — source to be confirmed", date: "", url: "" },
  statedept:   { outlet: "US State Department", date: "April 2026", url: "" },
  inquirer:    { outlet: "Inquirer", date: "", url: "" },
  bworld:      { outlet: "BusinessWorld", date: "", url: "" },
  rappler07:   { outlet: "Rappler", date: "July 2026", url: "" },
  mb0424:      { outlet: "Manila Bulletin", date: "Apr 24, 2026", url: "" },
  tribune:     { outlet: "Daily Tribune", date: "", url: "" },
  mb0518:      { outlet: "Manila Bulletin", date: "May 18, 2026", url: "" },
  scmp:        { outlet: "SCMP", date: "", url: "" },
  pna:         { outlet: "PNA", date: "July 27, 2026 (SONA)", url: "" },
  sunstar:     { outlet: "SunStar", date: "", url: "" },
  rappler:     { outlet: "Rappler", date: "", url: "" },
  gma:         { outlet: "GMA", date: "", url: "" },
  bworld1019:  { outlet: "BusinessWorld", date: "Oct 19, 2026", url: "" },
  bworld1104:  { outlet: "BusinessWorld", date: "Nov 4, 2026", url: "" },
  techpil:     { outlet: "Tech Pilipinas", date: "Oct 27, 2026", url: "" },
  inq07:       { outlet: "Inquirer", date: "July 2026", url: "" },
  map:         { outlet: "Management Association of the Philippines (MAP)", date: "", url: "" },
  manilatimes: { outlet: "Manila Times", date: "", url: "" },
  inq1103:     { outlet: "Inquirer", date: "Nov 3, 2026", url: "" },
  globaltimes: { outlet: "Global Times", date: "", url: "",
                 note: { en: "Chinese state media", fil: "state media ng China" } },
  dzrh:        { outlet: "DZRH", date: "Aug 12, 2026", url: "" },
  rs:          { outlet: "Responsible Statecraft", date: "", url: "" },
  mt1004:      { outlet: "Manila Times (editorial)", date: "Oct 4, 2026", url: "" },
  tribune1104: { outlet: "Daily Tribune", date: "Nov 4, 2026", url: "" }
};

/* ---------- 3. SHORT LABELS, HEADINGS AND PARAGRAPHS ----------
   Used by data-i18n="key" in index.html. */
window.UI = {
  site_title: { en: "Pax Silica, Explained", fil: "Pax Silica, Explained" },
  site_sub: {
    en: "What it is, what it could mean for the Philippines, and what different sides are saying — in plain language.",
    fil: "Ano ito, ano ang puwedeng ibig sabihin nito para sa Pilipinas, at ano ang sinasabi ng iba't ibang panig — sa simpleng salita."
  },
  byline: { en: "By @missniceph · Nice to Know", fil: "Gawa ni @missniceph · Nice to Know" },
  skip: { en: "Skip to content", fil: "Lumaktaw sa nilalaman" },
  asof_label: { en: "As of", fil: "Hanggang" },
  asof_rest: {
    en: "(Philippine time) — <strong>this is a developing story.</strong> Some details may change.",
    fil: "(oras sa Pilipinas) — <strong>tuloy-tuloy pa ang balitang ito.</strong> Puwede pang magbago ang ilang detalye."
  },
  asof_link: { en: "See what's still undecided →", fil: "Tingnan kung ano pa ang hindi napagpapasyahan →" },
  lang_label: { en: "Language", fil: "Wika" },
  theme_label: { en: "Theme", fil: "Tema" },
  theme_auto: { en: "Auto", fil: "Auto" },
  theme_light: { en: "Light", fil: "Light" },
  theme_dark: { en: "Dark", fil: "Dark" },
  copy_link: { en: "Copy link", fil: "Kopyahin ang link" },
  copied: { en: "Link copied!", fil: "Nakopya na ang link!" },
  contents: { en: "Contents", fil: "Nilalaman" },

  /* how-to-read key */
  key_title: { en: "How to read this explainer", fil: "Paano basahin ang explainer na ito" },
  key_fact: { en: "<b>What happened</b>, as reported by a named source.", fil: "<b>Ang nangyari</b>, ayon sa ulat ng isang pinangalanang source." },
  key_claim: { en: "<b>What someone says or argues.</b> We always say who.", fil: "<b>Ang sinasabi o ipinaglalaban ng isang tao o grupo.</b> Lagi naming sinasabi kung sino." },
  key_projection: { en: "<b>A forecast or target</b> — not a result yet.", fil: "<b>Hula o target</b> — hindi pa ito resulta." },
  key_sources: {
    en: "Small grey text in brackets shows the source (outlet and date). Tap it to jump to the Sources list.",
    fil: "Ang maliit na abong text sa bracket ay ang source (outlet at petsa). I-tap ito para makita sa listahan ng Sources."
  },
  badge_fact: { en: "Fact", fil: "Nangyari" },
  badge_claim: { en: "Claim", fil: "Sinasabi" },
  badge_projection: { en: "Projection", fil: "Hula/Target" },

  /* nav */
  nav_sixty: { en: "60 seconds", fil: "60 segundo" },
  nav_basics: { en: "The basics", fil: "Ang basics" },
  nav_what: { en: "What it is", fil: "Ano ito" },
  nav_ph: { en: "The Philippines", fil: "Ang Pilipinas" },
  nav_timeline: { en: "Timeline", fil: "Timeline" },
  nav_sides: { en: "Case for & concerns", fil: "Pabor at alalahanin" },
  nav_middle: { en: "Middle ground", fil: "Gitnang posisyon" },
  nav_undecided: { en: "Still undecided", fil: "Hindi pa tiyak" },
  nav_glossary: { en: "Glossary", fil: "Glossary" },
  nav_quiz: { en: "Quiz", fil: "Quiz" },
  nav_sources: { en: "Sources", fil: "Sources" },

  /* 1. sixty */
  h_sixty: { en: "Pax Silica in 60 seconds", fil: "Pax Silica sa loob ng 60 segundo" },

  /* 2. basics */
  h_basics: { en: "The basics: chips, minerals and supply chains", fil: "Ang basics: chips, mineral, at supply chain" },
  basics_intro: {
    en: "Before we get to Pax Silica, here are a few ideas that make the rest easier to follow. No economics degree needed.",
    fil: "Bago tayo pumunta sa Pax Silica, heto muna ang ilang konsepto para mas madaling sundan ang lahat. Hindi kailangan ng degree sa economics."
  },
  diag_supply_title: { en: "The AI supply chain, simplified", fil: "Ang AI supply chain, pinasimple" },
  diag_s1: { en: "Minerals", fil: "Mineral" },
  diag_s1b: { en: "& energy", fil: "at enerhiya" },
  diag_s2: { en: "Processing", fil: "Pagproseso" },
  diag_s2b: { en: "& manufacturing", fil: "at paggawa" },
  diag_s3: { en: "Chips", fil: "Chips" },
  diag_s3b: { en: "(semiconductors)", fil: "(semiconductors)" },
  diag_s4: { en: "AI infrastructure", fil: "AI infrastructure" },
  diag_s4b: { en: "& logistics", fil: "at logistics" },
  diag_supply_caption: {
    en: "Pax Silica's stated scope covers this whole chain — critical minerals and energy inputs, advanced manufacturing, semiconductors, AI infrastructure and logistics.",
    fil: "Ayon sa mga ulat, sakop ng Pax Silica ang buong chain na ito — critical minerals at enerhiya, advanced manufacturing, semiconductors, AI infrastructure at logistics."
  },

  /* 3. what */
  h_what: { en: "What Pax Silica is", fil: "Ano ang Pax Silica" },
  what_intro: {
    en: "The global picture: where it came from, what it covers, and who has signed on.",
    fil: "Ang malaking larawan: saan ito nanggaling, ano ang sakop nito, at sino-sino ang pumirma."
  },
  members_title: { en: "How membership grew", fil: "Paano dumami ang mga miyembro" },
  members_note: {
    en: "The list of founding signatories is still being confirmed and is not shown here yet.",
    fil: "Kinukumpirma pa ang listahan ng mga unang pumirma (founding signatories), kaya hindi pa ito nakalagay dito."
  },

  /* 4. philippines */
  h_ph: { en: "The Philippines and Pax Silica", fil: "Ang Pilipinas at ang Pax Silica" },
  ph_intro: {
    en: "When and how the Philippines joined, what is planned at New Clark City, and the rules officials say will apply.",
    fil: "Kailan at paano sumali ang Pilipinas, ano ang plano sa New Clark City, at anong mga patakaran daw ang susundin ayon sa mga opisyal."
  },
  ph_h_join: { en: "Joining", fil: "Pagsali" },
  ph_h_hub: { en: "The New Clark City hub", fil: "Ang hub sa New Clark City" },
  ph_h_legal: { en: "The legal framework and the lease", fil: "Ang legal framework at ang lease" },
  ph_h_benefits: { en: "The promised benefits", fil: "Ang mga ipinangakong benepisyo" },
  ph_benefits_note: {
    en: "These are government projections and targets, not results. No firm investor has been announced yet (see “Still undecided”).",
    fil: "Mga hula at target ito ng gobyerno, hindi pa resulta. Wala pang tiyak na investor na inaanunsyo (tingnan ang “Hindi pa tiyak”)."
  },
  ph_h_communities: { en: "People living in the area", fil: "Ang mga taong nakatira sa lugar" },
  ph_h_law: { en: "In Congress", fil: "Sa Kongreso" },
  lease_title: { en: "How the land arrangement works, per officials", fil: "Paano gagana ang lupa, ayon sa mga opisyal" },
  lease_bcda: { en: "BCDA", fil: "BCDA" },
  lease_bcda2: { en: "keeps ownership", fil: "may-ari pa rin" },
  lease_bcda3: { en: "of the land", fil: "ng lupa" },
  lease_arrow: { en: "leases land to", fil: "pinauupahan sa" },
  lease_ml: { en: "Master lessee", fil: "Master lessee" },
  lease_ml2: { en: "develops the", fil: "siyang gagawa ng" },
  lease_ml3: { en: "infrastructure", fil: "infrastructure" },
  lease_grace: { en: "BCDA offer: 2-year lease-free grace period (in-kind contribution)", fil: "Alok ng BCDA: 2 taong walang upa (in-kind contribution)" },
  lease_laws: { en: "Philippine laws apply: RA 7227 · RA 7916 · RA 12066 · Investors' Lease Act", fil: "Batas ng Pilipinas ang susundin: RA 7227 · RA 7916 · RA 12066 · Investors' Lease Act" },

  /* 5. timeline */
  h_timeline: { en: "Timeline: December 2025 → November 2026", fil: "Timeline: Disyembre 2025 → Nobyembre 2026" },
  timeline_intro: {
    en: "Tap a filter to focus. Tap an event to see more. Some dates are when something was <em>reported</em>, which we label.",
    fil: "Pumili ng filter para mag-focus. I-tap ang isang event para makita ang detalye. May mga petsa na kung kailan ito <em>naiulat</em> — nakalagay namin iyon."
  },
  f_all: { en: "All", fil: "Lahat" },
  f_world: { en: "Global", fil: "Global" },
  f_ph: { en: "Philippines", fil: "Pilipinas" },
  f_debate: { en: "Debate", fil: "Debate" },
  upcoming: { en: "Upcoming", fil: "Paparating" },

  /* 6–7. sides */
  h_sides: { en: "The case for, and the concerns", fil: "Mga argumento pabor, at mga alalahanin" },
  sides_intro: {
    en: "Both sides are shown in the words of the people who said them, under the same five themes, in the same order. Everything in the two columns is a <strong>claim</strong> — a view or a prediction — not a settled fact. Grey boxes marked “Fact” give shared context.",
    fil: "Makikita rito ang dalawang panig, sa sariling salita ng mga nagsabi, sa ilalim ng parehong limang tema at parehong pagkakasunod. Lahat ng nasa dalawang column ay <strong>sinasabi</strong> — pananaw o hula — hindi pa tiyak na katotohanan. Ang mga abong kahon na may “Nangyari” ay pinagsasaluhang konteksto."
  },
  sides_uneven: {
    en: "Where one column has fewer points, it is because our sources contain fewer attributed statements on that theme — not because one side matters more.",
    fil: "Kung mas kaunti ang laman ng isang column, ibig sabihin lang ay mas kaunti ang naka-attribute na pahayag sa aming mga source para sa temang iyon — hindi dahil mas mahalaga ang isang panig."
  },
  col_for: { en: "The case for", fil: "Mga argumento pabor" },
  col_for_sub: { en: "As argued by the government and supporters", fil: "Ayon sa gobyerno at mga sumusuporta" },
  col_against: { en: "The concerns", fil: "Mga alalahanin" },
  col_against_sub: { en: "As raised by economists, researchers, environmental and farmer groups, legislators and analysts", fil: "Ayon sa mga ekonomista, mananaliksik, environmental at farmer groups, mambabatas, at analyst" },
  tabs_label: { en: "Choose a side to read", fil: "Pumili ng panig na babasahin" },
  energy_bar_title: { en: "Projected demand vs. Luzon grid capacity", fil: "Inaasahang demand kumpara sa kapasidad ng Luzon grid" },
  energy_bar_a: { en: "Projected hub demand: 3 GW", fil: "Inaasahang demand ng hub: 3 GW" },
  energy_bar_b: { en: "Luzon grid capacity: 18.75 GW", fil: "Kapasidad ng Luzon grid: 18.75 GW" },
  energy_bar_c: { en: "about 16%", fil: "mga 16%" },

  /* 8. middle */
  h_middle: { en: "Where some find middle ground", fil: "Kung saan may nakikitang gitnang posisyon" },
  middle_intro: {
    en: "Not everyone is simply “for” or “against.” Some voices argue for taking part, but only with protections or conditions.",
    fil: "Hindi lahat ay basta “pabor” o “kontra.” May mga nagsasabing puwedeng sumali, pero may kasamang proteksyon o kondisyon."
  },

  /* 9. undecided */
  h_undecided: { en: "What's still undecided", fil: "Ano pa ang hindi napagpapasyahan" },
  undecided_intro: {
    en: "As of {ASOF}, these are the open items, based on the latest reports in our sources.",
    fil: "Hanggang {ASOF}, ito ang mga bukas pang usapin, batay sa pinakabagong ulat sa aming mga source."
  },
  h_questions: { en: "Questions to watch", fil: "Mga tanong na dapat abangan" },
  questions_intro: {
    en: "These are open questions, not predictions. Keep them in mind as the story develops.",
    fil: "Mga bukas na tanong ito, hindi hula. Tandaan ang mga ito habang umuusad ang balita."
  },

  /* 10. glossary */
  h_glossary: { en: "Glossary: 20 terms", fil: "Glossary: 20 salita" },
  glossary_intro: {
    en: "Key words in English, with a plain explanation in both languages.",
    fil: "Mga mahahalagang salita sa English, may simpleng paliwanag sa dalawang wika."
  },
  glossary_search: { en: "Search the glossary", fil: "Maghanap sa glossary" },
  glossary_none: { en: "No matching term.", fil: "Walang tugmang salita." },

  /* 11. quiz */
  h_quiz: { en: "Check your understanding", fil: "Subukan ang iyong pag-unawa" },
  quiz_intro: {
    en: "Six quick questions, all based on the facts above. No opinion questions.",
    fil: "Anim na mabilis na tanong, lahat batay sa mga nangyari sa itaas. Walang tanong tungkol sa opinyon."
  },
  quiz_correct: { en: "Correct!", fil: "Tama!" },
  quiz_wrong: { en: "Not quite.", fil: "Hindi ito." },
  quiz_score: { en: "Your score: {S} out of {T}", fil: "Ang iskor mo: {S} sa {T}" },
  quiz_reset: { en: "Try again", fil: "Ulitin" },

  /* 12. sources */
  h_sources: { en: "Sources", fil: "Sources" },
  sources_intro: {
    en: "Every fact and claim on this page comes from the sources below. “Cited in” shows where each one is used. Where a date or link is still missing, it says so.",
    fil: "Lahat ng nangyari at sinasabi sa page na ito ay galing sa mga source sa ibaba. Ipinapakita ng “Ginamit sa” kung saan ito ginamit. Kung kulang pa ang petsa o link, nakasulat iyon."
  },
  src_cited_in: { en: "Cited in:", fil: "Ginamit sa:" },
  src_date_tbc: { en: "date to be confirmed", fil: "kukumpirmahin pa ang petsa" },
  src_no_link: { en: "link to be added", fil: "idadagdag pa ang link" },
  back_top: { en: "Back to top ↑", fil: "Bumalik sa itaas ↑" },

  /* footer */
  foot_position: { en: "This explainer does not take a position.", fil: "Walang pinapanigan ang explainer na ito." },
  foot_made: { en: "Made by", fil: "Gawa ni" },
  foot_privacy: { en: "No tracking. No cookies. No ads.", fil: "Walang tracking. Walang cookies. Walang ads." },
  foot_update: { en: "Last content update:", fil: "Huling update ng nilalaman:" }
};

/* ---------- 4. SECTION 1: 60 SECONDS ---------- */
window.SIXTY = [
  {
    en: "<strong>Pax Silica</strong> is a group of countries led by the United States, launched on December 12, 2025. It focuses on the whole AI supply chain — from minerals and energy to chips and AI infrastructure. {{c:wiki,avasant,manorama}}",
    fil: "Ang <strong>Pax Silica</strong> ay grupo ng mga bansa na pinangungunahan ng United States. Inilunsad ito noong Disyembre 12, 2025. Tutok ito sa buong AI supply chain — mula mineral at enerhiya hanggang chips at AI infrastructure. {{c:wiki,avasant,manorama}}"
  },
  {
    en: "Countries join by signing a <strong>declaration</strong>. The European Commission said it is <strong>not legally binding</strong>. By June 27, 2026, there were 24 signatories. {{c:big,members}}",
    fil: "Sumasali ang mga bansa sa pagpirma ng isang <strong>declaration</strong>. Sabi ng European Commission, <strong>hindi ito legally binding</strong> — walang legal na obligasyon. Pagdating ng Hunyo 27, 2026, 24 na ang pumirma. {{c:big,members}}"
  },
  {
    en: "The US has been open that Pax Silica is meant to counter China's dominance in the AI and semiconductor supply chain. {{c:philstar0810}}",
    fil: "Hayagang sinabi ng US na layunin ng Pax Silica na kontrahin ang pangingibabaw ng China sa supply chain ng AI at semiconductors. {{c:philstar0810}}"
  },
  {
    en: "The Philippines joined on April 16, 2026. The US and the Philippines announced plans for a 4,000-acre (about 1,620-hectare) industrial hub at New Clark City in Capas, Tarlac. {{c:statedept,inquirer,bworld}}",
    fil: "Sumali ang Pilipinas noong Abril 16, 2026. Inanunsyo ng US at Pilipinas ang planong 4,000-acre (mga 1,620 ektarya) na industrial hub sa New Clark City, Capas, Tarlac. {{c:statedept,inquirer,bworld}}"
  },
  {
    en: "The government projects jobs and investment; critics raise concerns about power and water, economic value, sovereignty and transparency. As of November 5, 2026, the PH–US framework agreement is <strong>not yet signed</strong>. {{c:rappler1104,tribune1104}}",
    fil: "Inaasahan ng gobyerno na magdadala ito ng trabaho at investment. Ang mga kritiko naman ay may alalahanin sa kuryente at tubig, sa tunay na pakinabang sa ekonomiya, sa soberanya, at sa transparency. Hanggang Nobyembre 5, 2026, <strong>hindi pa pirmado</strong> ang framework agreement ng PH at US. {{c:rappler1104,tribune1104}}"
  }
];

/* ---------- 5. SECTION 2: THE BASICS (analogies, no outside facts) ---------- */
window.BASICS = [
  {
    icon: "chip",
    title: { en: "What is a chip?", fil: "Ano ang chip?" },
    en: "A <strong>semiconductor</strong> chip is a tiny, flat piece of material packed with a huge number of very small on-off switches. It is the “brain” that lets a phone, laptop or car follow instructions.",
    fil: "Ang <strong>semiconductor</strong> chip ay maliit at manipis na piraso na punô ng napakaraming maliliit na on-off switch. Ito ang “utak” na nagpapagana sa cellphone, laptop, o kotse para sumunod sa utos.",
    analogy: {
      en: "Think of it like a light switch — but shrunk down and multiplied many, many times, all working together.",
      fil: "Isipin ang switch ng ilaw — pero pinaliit nang husto at pinarami nang sobra, sabay-sabay na gumagana."
    }
  },
  {
    icon: "ai",
    title: { en: "Why does AI need chips?", fil: "Bakit kailangan ng AI ang chips?" },
    en: "AI programs learn and answer by doing an enormous amount of math, very fast. That math runs on chips. More AI means more chips, and more electricity to run them.",
    fil: "Natututo at sumasagot ang AI sa pamamagitan ng napakaraming kalkulasyon, nang napakabilis. Sa chips tumatakbo ang mga kalkulasyong iyon. Mas maraming AI, mas maraming chips — at mas maraming kuryente.",
    analogy: {
      en: "Like a carinderia at lunchtime: more customers need more cooks and more stoves — and a bigger gas bill.",
      fil: "Parang karinderya tuwing tanghalian: mas maraming customer, mas maraming kusinero at kalan ang kailangan — at mas malaki ang bayad sa gas."
    }
  },
  {
    icon: "mineral",
    title: { en: "What are critical minerals?", fil: "Ano ang critical minerals?" },
    en: "Chips, batteries and electronics need certain minerals dug from the ground. Countries call them “critical” because modern industry depends on them. <strong>Nickel</strong> is one that Philippine officials have mentioned.",
    fil: "Kailangan ng chips, baterya, at electronics ang ilang mineral na hinuhukay mula sa lupa. Tinatawag silang “critical” dahil umaasa rito ang modernong industriya. Ang <strong>nickel</strong> ay isa sa mga binanggit ng mga opisyal ng Pilipinas.",
    analogy: {
      en: "Like rice for a Filipino meal — you can change the ulam, but it's hard to do without the rice.",
      fil: "Parang kanin sa pagkaing Pinoy — puwedeng palitan ang ulam, pero mahirap kung walang kanin."
    }
  },
  {
    icon: "chain",
    title: { en: "What is a supply chain?", fil: "Ano ang supply chain?" },
    en: "<strong>Supply chain</strong> – ang buong daan ng isang produkto mula hilaw na materyales hanggang sa tindahan. It is every step a product goes through, from raw material to the store.",
    fil: "<strong>Supply chain</strong> – ang buong daan ng isang produkto mula hilaw na materyales hanggang sa tindahan. Lahat ng hakbang na dinaraanan nito bago umabot sa iyo.",
    analogy: {
      en: "Pandesal: wheat → flour mill → bakery → sari-sari store. If one step stops, there's no pandesal in the morning.",
      fil: "Pandesal: trigo → gilingan ng harina → panaderya → sari-sari store. Kapag tumigil ang isang hakbang, walang pandesal sa umaga."
    }
  },
  {
    icon: "ladder",
    title: { en: "What does “moving up the value chain” mean?", fil: "Ano ang ibig sabihin ng “umakyat sa value chain”?" },
    en: "<strong>Value chain</strong> – ang mga hakbang kung saan nadadagdagan ang halaga ng produkto. Some steps earn much more than others. Selling raw material usually earns less than turning it into a finished product.",
    fil: "<strong>Value chain</strong> – ang mga hakbang kung saan nadadagdagan ang halaga ng produkto. Mas malaki ang kita sa ilang hakbang kaysa sa iba. Kadalasan, mas maliit ang kita sa pagbebenta ng hilaw na materyales kaysa sa tapos na produkto.",
    analogy: {
      en: "Selling fresh mangoes by the kilo vs. selling packs of dried mangoes. Same fruit — different earnings.",
      fil: "Pagbebenta ng sariwang mangga kada kilo vs. pagbebenta ng dried mangoes na naka-pack. Parehong prutas — magkaiba ang kita."
    }
  },
  {
    icon: "store",
    title: { en: "Why worry about relying on one supplier?", fil: "Bakit nag-aalala kung iisa lang ang supplier?" },
    en: "If one country supplies most of something important, other countries can be stuck if that supply stops, gets expensive, or is used as leverage. So some governments try to spread out where they buy from.",
    fil: "Kapag iisang bansa ang nagsu-supply ng karamihan ng isang mahalagang bagay, puwedeng maipit ang ibang bansa kung matigil ito, magmahal, o gamitin bilang panggipit. Kaya sinusubukan ng ilang gobyerno na ikalat kung saan sila bumibili.",
    analogy: {
      en: "If only one store in the barangay sells rice, everyone is in trouble when it closes or raises its price.",
      fil: "Kung iisang tindahan lang sa barangay ang nagbebenta ng bigas, problema ng lahat kapag nagsara ito o nagtaas ng presyo."
    }
  }
];

/* ---------- 6. SECTION 3: WHAT PAX SILICA IS ---------- */
window.WHAT = [
  {
    type: "fact",
    title: { en: "Origin", fil: "Pinagmulan" },
    en: "Launched on December 12, 2025 at the first (inaugural) Pax Silica Summit in Washington, D.C. It was convened by US Under Secretary of State for Economic Affairs Jacob Helberg. The US State Department describes it as its flagship effort on AI and supply-chain security. {{c:wiki,avasant}}",
    fil: "Inilunsad noong Disyembre 12, 2025 sa unang Pax Silica Summit sa Washington, D.C. Pinangunahan ito ni US Under Secretary of State for Economic Affairs Jacob Helberg. Tinatawag ito ng US State Department na “flagship” o pangunahing hakbang nila sa AI at supply-chain security. {{c:wiki,avasant}}"
  },
  {
    type: "fact",
    title: { en: "Scope", fil: "Sakop" },
    en: "It covers the whole AI supply chain: critical minerals and energy inputs, advanced manufacturing, semiconductors, AI infrastructure and logistics. {{c:manorama}}",
    fil: "Sakop nito ang buong AI supply chain: critical minerals at enerhiya, advanced manufacturing, semiconductors, AI infrastructure, at logistics. {{c:manorama}}"
  },
  {
    type: "fact",
    title: { en: "Not legally binding", fil: "Hindi legally binding" },
    en: "Countries sign a non-binding Pax Silica Declaration. When the European Union joined in June 2026, the European Commission said the declaration is not legally binding. In plain terms: it is a shared statement of goals, not a contract that can be enforced in court. {{c:big}}",
    fil: "Pumipirma ang mga bansa sa Pax Silica Declaration na non-binding. Nang sumali ang European Union noong Hunyo 2026, sinabi ng European Commission na hindi ito legally binding. Sa simpleng salita: pahayag ito ng magkakaparehong layunin, hindi kontratang puwedeng ipatupad sa korte. {{c:big}}"
  },
  {
    type: "fact",
    title: { en: "The China angle, as the US states it", fil: "Ang anggulo ng China, ayon mismo sa US" },
    en: "The US has been open that Pax Silica is meant to counter China's dominance in the AI and semiconductor supply chain. {{c:philstar0810}} A US official has called China-led supply chains a “hostage chain.” {{c:rappler1104}}",
    fil: "Hayagang sinabi ng US na layunin ng Pax Silica na kontrahin ang pangingibabaw ng China sa supply chain ng AI at semiconductors. {{c:philstar0810}} Tinawag pa ng isang US official ang mga supply chain na pinangungunahan ng China na “hostage chain.” {{c:rappler1104}}"
  }
];

window.MEMBERS = [
  { date: { en: "Dec 12, 2025", fil: "Dis 12, 2025" }, en: "Launch with founding signatories", fil: "Paglulunsad kasama ang founding signatories" },
  { date: { en: "Jan 12, 2026", fil: "Ene 12, 2026" }, en: "Qatar joins", fil: "Sumali ang Qatar" },
  { date: { en: "Jan 14, 2026", fil: "Ene 14, 2026" }, en: "United Arab Emirates joins", fil: "Sumali ang United Arab Emirates" },
  { date: { en: "Feb 20, 2026", fil: "Peb 20, 2026" }, en: "India joins", fil: "Sumali ang India" },
  { date: { en: "Apr 16, 2026", fil: "Abr 16, 2026" }, en: "<strong>Philippines joins — 13th signatory</strong>", fil: "<strong>Sumali ang Pilipinas — ika-13 pumirma</strong>", ph: true },
  { date: { en: "May 6, 2026", fil: "Mayo 6, 2026" }, en: "Norway joins — 15th signatory", fil: "Sumali ang Norway — ika-15 pumirma" },
  { date: { en: "June 27, 2026", fil: "Hunyo 27, 2026" }, en: "Second summit adds 10 signatories, including the EU, Germany, the Netherlands, Argentina, Chile and Panama — <strong>24 in total</strong>", fil: "Sa ikalawang summit, 10 ang nadagdag, kasama ang EU, Germany, Netherlands, Argentina, Chile at Panama — <strong>24 lahat-lahat</strong>" }
];

/* ---------- 7. SECTION 4: THE PHILIPPINES ---------- */
window.PH = {
  join: [
    {
      type: "fact",
      en: "The Philippines joined Pax Silica on April 16, 2026, as the 13th signatory. The declaration was signed by Ceferino Rodolfo, Undersecretary of the Department of Trade and Industry (DTI) and Managing Head of the Board of Investments (BOI). {{c:statedept,members}}",
      fil: "Sumali ang Pilipinas sa Pax Silica noong Abril 16, 2026, bilang ika-13 pumirma. Si Ceferino Rodolfo, Undersecretary ng Department of Trade and Industry (DTI) at Managing Head ng Board of Investments (BOI), ang pumirma sa declaration. {{c:statedept,members}}"
    },
    {
      type: "claim",
      en: "Finance Secretary Frederick Go said joining ensures the country's mineral resources and strategic location are harnessed “to build the industries of the future.” {{c:rappler07}}",
      fil: "Sabi ni Finance Secretary Frederick Go, sa pagsali, masisiguro na magagamit ang mga mineral at estratehikong lokasyon ng bansa “to build the industries of the future” (para itayo ang mga industriya ng hinaharap). {{c:rappler07}}"
    }
  ],
  hub: [
    {
      type: "fact",
      en: "The US and the Philippines announced plans for a 4,000-acre (about 1,619–1,620 hectare) industrial hub in the Luzon Economic Corridor. It is called the first “AI-Native Industrial Acceleration Hub” under Pax Silica. {{c:statedept}}",
      fil: "Inanunsyo ng US at Pilipinas ang planong 4,000-acre (mga 1,619–1,620 ektarya) na industrial hub sa Luzon Economic Corridor. Tinawag itong unang “AI-Native Industrial Acceleration Hub” sa ilalim ng Pax Silica. {{c:statedept}}"
    },
    {
      type: "fact",
      en: "Location: New Clark City, Capas, Tarlac. {{c:inquirer,bworld}}",
      fil: "Lokasyon: New Clark City, Capas, Tarlac. {{c:inquirer,bworld}}"
    }
  ],
  legal: [
    {
      type: "claim",
      en: "Officials say Philippine laws apply: the BCDA Charter (RA 7227), the Special Economic Zone Act (RA 7916), CREATE MORE (RA 12066), and the Investors' Lease Act. {{c:mb0424,avasant,tribune}}",
      fil: "Ayon sa mga opisyal, batas ng Pilipinas ang masusunod: ang BCDA Charter (RA 7227), ang Special Economic Zone Act (RA 7916), CREATE MORE (RA 12066), at ang Investors' Lease Act. {{c:mb0424,avasant,tribune}}"
    },
    {
      type: "claim",
      en: "Per officials, BCDA keeps ownership of the land. A “master lessee” — the main tenant — develops the infrastructure. BCDA offered a 2-year lease-free grace period as its in-kind contribution. {{c:mb0424,avasant,tribune}}",
      fil: "Ayon sa mga opisyal, BCDA pa rin ang may-ari ng lupa. Isang “master lessee” — ang pangunahing uupa — ang gagawa ng infrastructure. Nag-alok ang BCDA ng 2 taong walang bayad na upa (grace period) bilang in-kind contribution nito. {{c:mb0424,avasant,tribune}}"
    },
    {
      type: "fact",
      en: "The US reportedly asked for a special legal arrangement. BCDA rejected it, saying “there will be no special arrangement accorded to the US.” {{c:mb0518,scmp}}",
      fil: "Ayon sa ulat, humiling ang US ng espesyal na legal na kaayusan. Tinanggihan ito ng BCDA: “there will be no special arrangement accorded to the US” (walang espesyal na kaayusang ibibigay sa US). {{c:mb0518,scmp}}"
    }
  ],
  benefits: [
    {
      type: "projection",
      en: "President Marcos said in his State of the Nation Address (July 27, 2026) that the hub could create up to <strong>190,000 jobs</strong>. BCDA had earlier cited 100,000+ and 130,000+. {{c:pna,tribune,sunstar}}",
      fil: "Sabi ni Pangulong Marcos sa kanyang SONA (Hulyo 27, 2026), puwedeng lumikha ang hub ng hanggang <strong>190,000 trabaho</strong>. Bago nito, 100,000+ at 130,000+ ang binanggit ng BCDA. {{c:pna,tribune,sunstar}}"
    },
    {
      type: "projection",
      en: "The target is <strong>$70 billion</strong> in investments. {{c:rappler}}",
      fil: "Ang target ay <strong>$70 bilyon</strong> na investment. {{c:rappler}}"
    },
    {
      type: "claim",
      en: "The government's stated goal is to move the Philippines up the value chain — for example, processing critical minerals like nickel here instead of exporting raw ore (Ambassador Romualdez; DTI's Rodolfo). {{c:philstar0810,gma}}",
      fil: "Ang sinasabing layunin ng gobyerno ay paakyatin ang Pilipinas sa value chain — halimbawa, iproseso dito ang critical minerals tulad ng nickel sa halip na i-export ang hilaw na ore (Ambassador Romualdez; si Rodolfo ng DTI). {{c:philstar0810,gma}}"
    }
  ],
  communities: [
    {
      type: "claim",
      en: "BCDA says displaced residents will be relocated on-site, to a 10-hectare housing site within New Clark City with agricultural land, after negotiations with the community, the NCIP and the Capas local government. {{c:bworld1019}}",
      fil: "Sabi ng BCDA, ililipat ang mga maaapektuhang residente sa loob mismo ng New Clark City, sa isang 10-ektaryang housing site na may lupang sakahan, matapos makipag-usap sa komunidad, sa NCIP, at sa LGU ng Capas. {{c:bworld1019}}"
    },
    {
      type: "claim",
      en: "The Palace says facilities will stay within buildable zones (about 3,000+ of 6,000+ hectares), and affected residents and Indigenous Peoples will get housing and financial aid. {{c:bworld1104}}",
      fil: "Sabi ng Palasyo, mananatili ang mga pasilidad sa loob ng mga buildable zone (mga 3,000+ sa 6,000+ ektarya), at bibigyan ng pabahay at tulong pinansyal ang mga apektadong residente at Indigenous Peoples. {{c:bworld1104}}"
    }
  ],
  law: [
    {
      type: "fact",
      en: "House Bill 11758, filed in October 2026 by National Unity Party (NUP) members led by Deputy Speaker Ronaldo Puno, would create a 1,350-hectare Advanced Industries Zone in New Clark City. {{c:techpil}}",
      fil: "Ang House Bill 11758, na inihain noong Oktubre 2026 ng mga miyembro ng NUP sa pangunguna ni Deputy Speaker Ronaldo Puno, ay naglalayong lumikha ng 1,350-ektaryang Advanced Industries Zone sa New Clark City. {{c:techpil}}"
    }
  ]
};

/* ---------- 8. SECTION 5: TIMELINE ----------
   cat: "world" | "ph" | "debate"
   date: shown as written; sort: YYYY-MM-DD used for ordering
   upcoming: true for future events */
window.TIMELINE = [
  { sort: "2025-12-12", cat: "world",
    date: { en: "Dec 12, 2025", fil: "Dis 12, 2025" },
    title: { en: "Pax Silica launches in Washington, D.C.", fil: "Inilunsad ang Pax Silica sa Washington, D.C." },
    en: "The inaugural Pax Silica Summit is convened by US Under Secretary of State for Economic Affairs Jacob Helberg. {{c:wiki,avasant}}",
    fil: "Pinangunahan ni US Under Secretary of State for Economic Affairs Jacob Helberg ang unang Pax Silica Summit. {{c:wiki,avasant}}" },
  { sort: "2026-01-12", cat: "world",
    date: { en: "Jan 12, 2026", fil: "Ene 12, 2026" },
    title: { en: "Qatar joins", fil: "Sumali ang Qatar" },
    en: "Qatar signs the declaration. {{c:members}}", fil: "Pumirma ang Qatar sa declaration. {{c:members}}" },
  { sort: "2026-01-14", cat: "world",
    date: { en: "Jan 14, 2026", fil: "Ene 14, 2026" },
    title: { en: "UAE joins", fil: "Sumali ang UAE" },
    en: "The United Arab Emirates signs the declaration. {{c:members}}", fil: "Pumirma ang United Arab Emirates sa declaration. {{c:members}}" },
  { sort: "2026-02-20", cat: "world",
    date: { en: "Feb 20, 2026", fil: "Peb 20, 2026" },
    title: { en: "India joins", fil: "Sumali ang India" },
    en: "India signs the declaration. {{c:members}}", fil: "Pumirma ang India sa declaration. {{c:members}}" },
  { sort: "2026-04-16", cat: "ph",
    date: { en: "Apr 16, 2026", fil: "Abr 16, 2026" },
    title: { en: "The Philippines joins; New Clark City hub announced", fil: "Sumali ang Pilipinas; inanunsyo ang hub sa New Clark City" },
    en: "DTI Undersecretary Ceferino Rodolfo signs as the 13th signatory. The US and PH announce plans for a 4,000-acre “AI-Native Industrial Acceleration Hub.” {{c:statedept,members}}",
    fil: "Pumirma si DTI Undersecretary Ceferino Rodolfo bilang ika-13. Inanunsyo ng US at PH ang planong 4,000-acre na “AI-Native Industrial Acceleration Hub.” {{c:statedept,members}}" },
  { sort: "2026-04-24", cat: "ph",
    date: { en: "Reported Apr 24, 2026", fil: "Naiulat Abr 24, 2026" },
    title: { en: "Officials outline the legal framework and lease", fil: "Inilatag ng mga opisyal ang legal framework at lease" },
    en: "Philippine laws apply; BCDA keeps the land; a 2-year lease-free grace period is offered. Groundbreaking is eyed before the end of the Marcos administration in 2028. {{c:mb0424}}",
    fil: "Batas ng Pilipinas ang susundin; sa BCDA pa rin ang lupa; may alok na 2 taong walang upa. Target ang groundbreaking bago matapos ang administrasyong Marcos sa 2028. {{c:mb0424}}" },
  { sort: "2026-05-06", cat: "world",
    date: { en: "May 6, 2026", fil: "Mayo 6, 2026" },
    title: { en: "Norway joins as 15th signatory", fil: "Sumali ang Norway bilang ika-15" },
    en: "Norway signs the declaration. {{c:members}}", fil: "Pumirma ang Norway sa declaration. {{c:members}}" },
  { sort: "2026-05-18", cat: "ph",
    date: { en: "Reported May 18, 2026", fil: "Naiulat Mayo 18, 2026" },
    title: { en: "BCDA rejects a reported US request for a special legal arrangement", fil: "Tinanggihan ng BCDA ang iniulat na hiling ng US para sa espesyal na legal na kaayusan" },
    en: "BCDA: “there will be no special arrangement accorded to the US.” {{c:mb0518,scmp}}",
    fil: "BCDA: “there will be no special arrangement accorded to the US.” {{c:mb0518,scmp}}" },
  { sort: "2026-06-01", cat: "world",
    date: { en: "June 2026", fil: "Hunyo 2026" },
    title: { en: "The EU joins; says the declaration is not legally binding", fil: "Sumali ang EU; sinabing hindi legally binding ang declaration" },
    en: "The European Commission says the declaration is not legally binding. {{c:big}}",
    fil: "Sabi ng European Commission, hindi legally binding ang declaration. {{c:big}}" },
  { sort: "2026-06-27", cat: "world",
    date: { en: "June 27, 2026", fil: "Hunyo 27, 2026" },
    title: { en: "Second summit: 24 signatories", fil: "Ikalawang summit: 24 na ang pumirma" },
    en: "10 signatories are added, including the EU, Germany, the Netherlands, Argentina, Chile and Panama. {{c:members}}",
    fil: "10 ang nadagdag, kasama ang EU, Germany, Netherlands, Argentina, Chile at Panama. {{c:members}}" },
  { sort: "2026-07-02", cat: "debate",
    date: { en: "July 2026", fil: "Hulyo 2026" },
    title: { en: "Projected power demand reported: 3 GW", fil: "Naiulat ang inaasahang demand sa kuryente: 3 GW" },
    en: "That is about 16% of Luzon's grid capacity of 18.75 GW. {{c:inq07,map}}",
    fil: "Mga 16% iyan ng kapasidad ng Luzon grid na 18.75 GW. {{c:inq07,map}}" },
  { sort: "2026-07-03", cat: "ph",
    date: { en: "July 2026", fil: "Hulyo 2026" },
    title: { en: "Finance Secretary Go on “industries of the future”", fil: "Finance Secretary Go: “industries of the future”" },
    en: "Go says joining ensures PH mineral resources and location are harnessed “to build the industries of the future.” {{c:rappler07}}",
    fil: "Sabi ni Go, sa pagsali, magagamit ang mineral at lokasyon ng bansa “to build the industries of the future.” {{c:rappler07}}" },
  { sort: "2026-07-27", cat: "ph",
    date: { en: "July 27, 2026", fil: "Hulyo 27, 2026" },
    title: { en: "SONA: up to 190,000 jobs projected", fil: "SONA: hanggang 190,000 trabaho ang inaasahan" },
    en: "President Marcos cites up to 190,000 jobs — a projection. {{c:pna}}",
    fil: "Binanggit ni Pangulong Marcos ang hanggang 190,000 trabaho — isang hula/target. {{c:pna}}" },
  { sort: "2026-08-10", cat: "ph",
    date: { en: "Aug 10, 2026", fil: "Ago 10, 2026" },
    title: { en: "Ambassador Romualdez on processing minerals locally", fil: "Ambassador Romualdez: iproseso dito ang mineral" },
    en: "Romualdez speaks of moving up the value chain and processing minerals like nickel locally. The same report notes the US has been open about countering China. {{c:philstar0810}}",
    fil: "Binanggit ni Romualdez ang pag-akyat sa value chain at pagproseso dito ng mineral tulad ng nickel. Sa parehong ulat, hayag daw ang US na layon nitong kontrahin ang China. {{c:philstar0810}}" },
  { sort: "2026-08-12", cat: "debate",
    date: { en: "Aug 12, 2026", fil: "Ago 12, 2026" },
    title: { en: "Sen. Imee Marcos calls for a probe", fil: "Sen. Imee Marcos, nanawagan ng imbestigasyon" },
    en: "She calls for a probe into an alleged draft framework. {{c:dzrh}}",
    fil: "Nanawagan siya ng imbestigasyon sa isang umano'y draft na framework. {{c:dzrh}}" },
  { sort: "2026-10-04", cat: "debate",
    date: { en: "Oct 4, 2026", fil: "Okt 4, 2026" },
    title: { en: "Manila Times editorial names four areas", fil: "Editoryal ng Manila Times: apat na dapat tutukan" },
    en: "It urges the government to address environment and resources, sovereignty, transparency, and equity. {{c:mt1004}}",
    fil: "Hinimok nito ang gobyerno na tugunan ang kalikasan at likas-yaman, soberanya, transparency, at equity (pagkakapantay). {{c:mt1004}}" },
  { sort: "2026-10-19", cat: "ph",
    date: { en: "Oct 19, 2026", fil: "Okt 19, 2026" },
    title: { en: "BCDA describes on-site relocation plan", fil: "Inilarawan ng BCDA ang on-site relocation" },
    en: "A 10-hectare housing site with agricultural land within New Clark City, after negotiations with the community, NCIP and Capas LGU. {{c:bworld1019}}",
    fil: "Isang 10-ektaryang housing site na may lupang sakahan sa loob ng New Clark City, matapos makipag-usap sa komunidad, NCIP at LGU ng Capas. {{c:bworld1019}}" },
  { sort: "2026-10-27", cat: "ph",
    date: { en: "Reported Oct 27, 2026", fil: "Naiulat Okt 27, 2026" },
    title: { en: "House Bill 11758 filed", fil: "Inihain ang House Bill 11758" },
    en: "Filed in October by NUP members led by Deputy Speaker Ronaldo Puno, for a 1,350-hectare Advanced Industries Zone. {{c:techpil}}",
    fil: "Inihain noong Oktubre ng mga miyembro ng NUP sa pangunguna ni Deputy Speaker Ronaldo Puno, para sa 1,350-ektaryang Advanced Industries Zone. {{c:techpil}}" },
  { sort: "2026-11-03", cat: "debate",
    date: { en: "Nov 3, 2026", fil: "Nob 3, 2026" },
    title: { en: "UP study on economic value reported", fil: "Naiulat ang pag-aaral ng UP tungkol sa pakinabang sa ekonomiya" },
    en: "It warns of the risk that core functions stay abroad. {{c:inq1103}}",
    fil: "Nagbabala ito na baka manatili sa ibang bansa ang mga pangunahing gawain (core functions). {{c:inq1103}}" },
  { sort: "2026-11-03b", cat: "ph",
    date: { en: "Nov 3, 2026", fil: "Nob 3, 2026" },
    title: { en: "No firm investor yet; a government “wishlist”", fil: "Wala pang tiyak na investor; may “wishlist” ang gobyerno" },
    en: "The wishlist includes Apple, Nvidia, TSMC, MediaTek, UMC, Qualcomm, AMD and Broadcom. {{c:inq1103}}",
    fil: "Kasama sa wishlist ang Apple, Nvidia, TSMC, MediaTek, UMC, Qualcomm, AMD at Broadcom. {{c:inq1103}}" },
  { sort: "2026-11-04", cat: "ph",
    date: { en: "Nov 4, 2026", fil: "Nob 4, 2026" },
    title: { en: "Framework agreement still unsigned", fil: "Hindi pa rin pirmado ang framework agreement" },
    en: "BCDA has submitted it to Malacañang with no signing date; the Palace is awaiting the US response. The Palace also says facilities will stay within buildable zones. {{c:rappler1104,tribune1104,bworld1104}}",
    fil: "Naisumite na ng BCDA sa Malacañang pero walang petsa ng pirmahan; hinihintay ng Palasyo ang sagot ng US. Sabi rin ng Palasyo, mananatili sa buildable zones ang mga pasilidad. {{c:rappler1104,tribune1104,bworld1104}}" },
  { sort: "2026-11-04b", cat: "world",
    date: { en: "Reported Nov 4, 2026", fil: "Naiulat Nob 4, 2026" },
    title: { en: "US official: China-led supply chains a “hostage chain”", fil: "US official: “hostage chain” ang supply chain na pinangungunahan ng China" },
    en: "A US official uses the phrase “hostage chain.” {{c:rappler1104}}",
    fil: "Ginamit ng isang US official ang salitang “hostage chain.” {{c:rappler1104}}" },
  { sort: "2026-11-16", cat: "ph", upcoming: true,
    date: { en: "Nov 16–18, 2026", fil: "Nob 16–18, 2026" },
    title: { en: "ASEAN Summit in Manila", fil: "ASEAN Summit sa Maynila" },
    en: "President Trump is expected to attend. Whether the deal is signed then is an open question. {{c:rappler1104}}",
    fil: "Inaasahang dadalo si President Trump. Bukas pa ang tanong kung mapipirmahan ang kasunduan dito. {{c:rappler1104}}" }
];

/* ---------- 9. SECTIONS 6–7: CASE FOR AND CONCERNS ----------
   Same five themes, same order, for both columns.
   context = shared facts shown above both columns. */
window.THEMES = [
  {
    id: "energy-water",
    title: { en: "Energy and water", fil: "Enerhiya at tubig" },
    context: [
      { type: "fact",
        en: "The hub's projected power demand is 3 GW — about 16% of Luzon's grid capacity of 18.75 GW. {{c:inq07,map}}",
        fil: "Ang inaasahang demand ng hub sa kuryente ay 3 GW — mga 16% ng kapasidad ng Luzon grid na 18.75 GW. {{c:inq07,map}}",
        chart: "energy" }
    ],
    pro: [
      { who: { en: "BCDA", fil: "BCDA" },
        en: "Solar farms are among the options for power, and rainwater impounding tanks are being considered for water. {{c:gma}}",
        fil: "Kasama ang solar farms sa mga opsyon para sa kuryente, at pinag-aaralan ang rainwater impounding tanks (imbakan ng tubig-ulan) para sa tubig. {{c:gma}}" }
    ],
    con: [
      { who: { en: "Makabayan Bloc (legislators)", fil: "Makabayan Bloc (mga mambabatas)" },
        en: "Warns it could lock the Philippines into Asia's highest power rates. {{c:gma}}",
        fil: "Nagbabala na baka maipit ang Pilipinas sa pinakamataas na singil sa kuryente sa Asya. {{c:gma}}" },
      { who: { en: "Kalikasan (environmental group)", fil: "Kalikasan (environmental group)" },
        en: "Calls the project water- and energy-hungry. {{c:gma}}",
        fil: "Tinawag ang proyekto na “gutom” sa tubig at enerhiya. {{c:gma}}" }
    ]
  },
  {
    id: "land-communities",
    title: { en: "Land and communities", fil: "Lupa at mga komunidad" },
    context: [
      { type: "fact",
        en: "The hub is planned at New Clark City, Capas, Tarlac. Government statements refer to affected residents and Indigenous Peoples in the area. {{c:inquirer,bworld,bworld1104}}",
        fil: "Sa New Clark City, Capas, Tarlac planong itayo ang hub. Binabanggit ng gobyerno ang mga apektadong residente at Indigenous Peoples sa lugar. {{c:inquirer,bworld,bworld1104}}" }
    ],
    pro: [
      { who: { en: "BCDA", fil: "BCDA" },
        en: "Displaced residents will be relocated on-site, to a 10-hectare housing site with agricultural land within New Clark City, after negotiations with the community, NCIP and the Capas LGU. {{c:bworld1019}}",
        fil: "Ililipat ang mga maaapektuhang residente sa loob mismo ng New Clark City, sa 10-ektaryang housing site na may lupang sakahan, matapos makipag-usap sa komunidad, NCIP at LGU ng Capas. {{c:bworld1019}}" },
      { who: { en: "Malacañang (the Palace)", fil: "Malacañang (ang Palasyo)" },
        en: "Facilities will stay within buildable zones (about 3,000+ of 6,000+ hectares). Affected residents and Indigenous Peoples will get housing and financial aid. {{c:bworld1104}}",
        fil: "Mananatili ang mga pasilidad sa buildable zones (mga 3,000+ sa 6,000+ ektarya). Bibigyan ng pabahay at tulong pinansyal ang mga apektadong residente at Indigenous Peoples. {{c:bworld1104}}" }
    ],
    con: [
      { empty: true,
        en: "Our sources do not yet include a specific, attributed statement from critics on land and relocation. This will be updated if one is reported. See “Questions to watch.”",
        fil: "Wala pa sa aming mga source ang tiyak at naka-attribute na pahayag ng mga kritiko tungkol sa lupa at relokasyon. Ia-update ito kapag may naiulat. Tingnan ang “Mga tanong na dapat abangan.”" }
    ]
  },
  {
    id: "economic-value",
    title: { en: "Economic value: hosting vs. upgrading", fil: "Pakinabang sa ekonomiya: pagiging host vs. pag-angat" },
    context: [
      { type: "fact",
        en: "As of November 2026, no firm investor has been announced. The government has a “wishlist” of companies. {{c:inq1103}}",
        fil: "Hanggang Nobyembre 2026, wala pang tiyak na investor na inaanunsyo. May “wishlist” ang gobyerno ng mga kumpanya. {{c:inq1103}}" }
    ],
    pro: [
      { who: { en: "President Marcos; BCDA", fil: "Pangulong Marcos; BCDA" }, type: "projection",
        en: "Up to 190,000 jobs (SONA, July 27, 2026); BCDA earlier cited 100,000+ and 130,000+. These are projections. {{c:pna,tribune,sunstar}}",
        fil: "Hanggang 190,000 trabaho (SONA, Hulyo 27, 2026); 100,000+ at 130,000+ ang naunang binanggit ng BCDA. Mga hula/target ito. {{c:pna,tribune,sunstar}}" },
      { who: { en: "Government", fil: "Gobyerno" }, type: "projection",
        en: "A target of $70 billion in investments. {{c:rappler}}",
        fil: "Target na $70 bilyong investment. {{c:rappler}}" },
      { who: { en: "Ambassador Romualdez; DTI's Rodolfo", fil: "Ambassador Romualdez; si Rodolfo ng DTI" },
        en: "It can move the Philippines up the value chain — processing critical minerals like nickel locally instead of exporting raw ore. {{c:philstar0810,gma}}",
        fil: "Puwede nitong paakyatin ang Pilipinas sa value chain — iproseso dito ang critical minerals tulad ng nickel sa halip na i-export ang hilaw na ore. {{c:philstar0810,gma}}" },
      { who: { en: "Finance Secretary Frederick Go", fil: "Finance Secretary Frederick Go" },
        en: "Joining ensures PH mineral resources and strategic location are harnessed “to build the industries of the future.” {{c:rappler07}}",
        fil: "Sa pagsali, magagamit ang mineral at estratehikong lokasyon ng bansa “to build the industries of the future.” {{c:rappler07}}" }
    ],
    con: [
      { who: { en: "Economist Bernard Villegas; a UP study", fil: "Ekonomistang si Bernard Villegas; isang pag-aaral ng UP" },
        en: "Warn of the risk that the Philippines becomes a “resource platform” or “satellite platform,” where core functions stay abroad. {{c:manilatimes,inq1103}}",
        fil: "Nagbabala na baka maging “resource platform” o “satellite platform” lang ang Pilipinas, kung saan nananatili sa ibang bansa ang mga pangunahing gawain. {{c:manilatimes,inq1103}}" },
      { who: { en: "IBON Foundation", fil: "IBON Foundation" },
        en: "Notes that decades of low-value foreign investment did not industrialize the Philippines. {{c:rappler}}",
        fil: "Ipinunto na ilang dekada ng mababang-halagang foreign investment ang hindi nagpa-industriyalisa sa Pilipinas. {{c:rappler}}" },
      { who: { en: "Economist Cielo Magno", fil: "Ekonomistang si Cielo Magno" },
        en: "Warns the Philippines could trade one dependence for another. {{c:inquirer}}",
        fil: "Nagbabala na baka ipagpalit lang ng Pilipinas ang isang pagdepende sa isa pang pagdepende. {{c:inquirer}}" }
    ]
  },
  {
    id: "sovereignty",
    title: { en: "Sovereignty and geopolitics", fil: "Soberanya at geopolitics" },
    context: [
      { type: "fact",
        en: "The US has been open that Pax Silica is meant to counter China's dominance in the AI and semiconductor supply chain. {{c:philstar0810}}",
        fil: "Hayag ang US na layunin ng Pax Silica na kontrahin ang pangingibabaw ng China sa supply chain ng AI at semiconductors. {{c:philstar0810}}" }
    ],
    pro: [
      { who: { en: "Defense Secretary Gilberto Teodoro", fil: "Defense Secretary Gilberto Teodoro" },
        en: "Calls it “a manufacturing and high-technology initiative,” not a military framework. {{c:avasant}}",
        fil: "Tinawag itong “a manufacturing and high-technology initiative” (inisyatiba sa manufacturing at high-tech), hindi military framework. {{c:avasant}}" },
      { who: { en: "BCDA", fil: "BCDA" },
        en: "Rejected a reported US request for a special legal arrangement: “there will be no special arrangement accorded to the US.” {{c:mb0518,scmp}}",
        fil: "Tinanggihan ang iniulat na hiling ng US para sa espesyal na legal na kaayusan: “there will be no special arrangement accorded to the US.” {{c:mb0518,scmp}}" },
      { who: { en: "Officials", fil: "Mga opisyal" },
        en: "Philippine laws apply, and BCDA keeps ownership of the land. {{c:mb0424,avasant,tribune}}",
        fil: "Batas ng Pilipinas ang susundin, at BCDA pa rin ang may-ari ng lupa. {{c:mb0424,avasant,tribune}}" }
    ],
    con: [
      { who: { en: "KMP (farmers' group)", fil: "KMP (grupo ng mga magsasaka)" },
        en: "Calls it a “sellout” and frames it within concerns about militarization. {{c:rappler}}",
        fil: "Tinawag itong “sellout” (pagbebenta ng bayan) at iniuugnay sa alalahanin tungkol sa militarisasyon. {{c:rappler}}" },
      { who: { en: "Analyst Richard Heydarian, as cited by Global Times (Chinese state media)", fil: "Analyst na si Richard Heydarian, ayon sa Global Times (state media ng China)" },
        en: "Argued it rests on speculative promises and risks riling China. {{c:globaltimes}}",
        fil: "Sinabing nakasandal ito sa mga pangakong haka-haka lang at puwedeng ikagalit ng China. {{c:globaltimes}}" },
      { who: { en: "Analyst Dan Steinbock", fil: "Analyst na si Dan Steinbock" },
        en: "Called it a potential “risk multiplier.” {{c:avasant}}",
        fil: "Tinawag itong posibleng “risk multiplier” (nagpaparami ng panganib). {{c:avasant}}" },
      { who: { en: "Global Times (Chinese state media)", fil: "Global Times (state media ng China)" },
        en: "Called the Philippines a “sacrificial pawn” in US designs. {{c:globaltimes}}",
        fil: "Tinawag ang Pilipinas na “sacrificial pawn” (pyesang isinasakripisyo) sa mga plano ng US. {{c:globaltimes}}" }
    ]
  },
  {
    id: "transparency",
    title: { en: "Transparency and oversight", fil: "Transparency at pagbabantay" },
    context: [
      { type: "fact",
        en: "The PH–US framework agreement has been submitted to Malacañang by BCDA, with no signing date. Its full contents have not been described in our sources. {{c:rappler1104,tribune1104}}",
        fil: "Naisumite na ng BCDA sa Malacañang ang PH–US framework agreement, pero walang petsa ng pirmahan. Hindi pa inilalarawan sa aming mga source ang buong nilalaman nito. {{c:rappler1104,tribune1104}}" }
    ],
    pro: [
      { who: { en: "Officials", fil: "Mga opisyal" },
        en: "The project will run under existing Philippine laws: RA 7227, RA 7916, RA 12066 (CREATE MORE) and the Investors' Lease Act. {{c:mb0424,avasant,tribune}}",
        fil: "Tatakbo ang proyekto sa ilalim ng mga umiiral na batas: RA 7227, RA 7916, RA 12066 (CREATE MORE) at ang Investors' Lease Act. {{c:mb0424,avasant,tribune}}" },
      { who: { en: "NUP members led by Deputy Speaker Ronaldo Puno", fil: "Mga miyembro ng NUP sa pangunguna ni Deputy Speaker Ronaldo Puno" },
        en: "Filed House Bill 11758 to create a 1,350-hectare Advanced Industries Zone in New Clark City by law. {{c:techpil}}",
        fil: "Naghain ng House Bill 11758 para lumikha, sa pamamagitan ng batas, ng 1,350-ektaryang Advanced Industries Zone sa New Clark City. {{c:techpil}}" }
    ],
    con: [
      { who: { en: "Senator Imee Marcos", fil: "Senador Imee Marcos" },
        en: "Called for a probe into an alleged draft framework. {{c:dzrh}}",
        fil: "Nanawagan ng imbestigasyon sa isang umano'y draft na framework. {{c:dzrh}}" },
      { who: { en: "Senator Raffy Tulfo", fil: "Senador Raffy Tulfo" },
        en: "Questioned the government's capacity to regulate foreign projects. {{c:rs}}",
        fil: "Kinuwestiyon ang kakayahan ng gobyerno na i-regulate ang mga proyektong dayuhan. {{c:rs}}" }
    ]
  }
];

/* ---------- 10. SECTION 8: MIDDLE GROUND ---------- */
window.MIDDLE = [
  { who: { en: "Management Association of the Philippines (MAP)", fil: "Management Association of the Philippines (MAP)" },
    en: "Backs a “Proceed, but Protected” approach. {{c:rs}}",
    fil: "Sumusuporta sa “Proceed, but Protected” — ituloy, pero may proteksyon. {{c:rs}}" },
  { who: { en: "Economist Cielo Magno", fil: "Ekonomistang si Cielo Magno" },
    en: "Proposes conditional participation — taking part only under set conditions. {{c:inquirer}}",
    fil: "Nagmumungkahi ng conditional participation — sumali lang kung may malinaw na kondisyon. {{c:inquirer}}" },
  { who: { en: "Manila Times editorial (Oct 4, 2026)", fil: "Editoryal ng Manila Times (Okt 4, 2026)" },
    en: "Urged the government to address four areas: <strong>environment and resources, sovereignty, transparency, and equity</strong>. {{c:mt1004}}",
    fil: "Hinimok ang gobyerno na tugunan ang apat na bagay: <strong>kalikasan at likas-yaman, soberanya, transparency, at equity (pagkakapantay)</strong>. {{c:mt1004}}" }
];

/* ---------- 11. SECTION 9: STILL UNDECIDED + QUESTIONS ---------- */
window.UNDECIDED = [
  { title: { en: "The PH–US framework agreement is not signed", fil: "Hindi pa pirmado ang PH–US framework agreement" },
    en: "BCDA submitted it to Malacañang with no signing date. The Palace is awaiting the US response. {{c:rappler1104,tribune1104}}",
    fil: "Isinumite na ito ng BCDA sa Malacañang pero walang petsa ng pirmahan. Hinihintay ng Palasyo ang sagot ng US. {{c:rappler1104,tribune1104}}" },
  { title: { en: "ASEAN Summit, November 16–18", fil: "ASEAN Summit, Nobyembre 16–18" },
    en: "President Trump is expected at the ASEAN Summit in Manila. Whether the deal is signed then is open. {{c:rappler1104}}",
    fil: "Inaasahang darating si President Trump sa ASEAN Summit sa Maynila. Bukas pa kung mapipirmahan ang kasunduan doon. {{c:rappler1104}}" },
  { title: { en: "No firm investor yet", fil: "Wala pang tiyak na investor" },
    en: "The government has a “wishlist” that includes Apple, Nvidia, TSMC, MediaTek, UMC, Qualcomm, AMD and Broadcom. {{c:inq1103}}",
    fil: "May “wishlist” ang gobyerno na kinabibilangan ng Apple, Nvidia, TSMC, MediaTek, UMC, Qualcomm, AMD at Broadcom. {{c:inq1103}}" },
  { title: { en: "Groundbreaking target", fil: "Target na groundbreaking" },
    en: "Groundbreaking has been eyed before the end of the Marcos administration in 2028. {{c:mb0424}}",
    fil: "Target ang groundbreaking bago matapos ang administrasyong Marcos sa 2028. {{c:mb0424}}" }
];

window.QUESTIONS = [
  { en: "Will the PH–US framework agreement be signed — and when? At the ASEAN Summit, or later?", fil: "Mapipirmahan ba ang PH–US framework agreement — at kailan? Sa ASEAN Summit ba, o mas huli pa?" },
  { en: "What is in the framework? Will its full text be made public?", fil: "Ano ang laman ng framework? Ilalabas ba sa publiko ang buong teksto nito?" },
  { en: "Who will actually invest? Will any company on the “wishlist” commit?", fil: "Sino talaga ang mag-i-invest? May kumpanya ba sa “wishlist” na mangangako?" },
  { en: "How will the projected 3 GW of power, and the water, be supplied — and who pays?", fil: "Paano ibibigay ang inaasahang 3 GW na kuryente at ang tubig — at sino ang magbabayad?" },
  { en: "Will there be technology transfer provisions, so Filipino workers and firms learn the higher-value work?", fil: "May probisyon ba para sa technology transfer, para matutunan ng mga Pilipinong manggagawa at kumpanya ang mas mataas na antas ng trabaho?" },
  { en: "How will negotiations with residents, Indigenous Peoples, the NCIP and the Capas LGU turn out?", fil: "Ano ang magiging resulta ng pakikipag-usap sa mga residente, Indigenous Peoples, NCIP at LGU ng Capas?" },
  { en: "Will House Bill 11758 move forward in Congress?", fil: "Uusad ba sa Kongreso ang House Bill 11758?" },
  { en: "Will the Senate act on calls for a probe?", fil: "Kikilos ba ang Senado sa panawagang imbestigasyon?" }
];

/* ---------- 12. SECTION 10: GLOSSARY (20 terms) ---------- */
window.GLOSSARY = [
  { term: "Semiconductor", en: "A material that can be set to let electricity pass or stop it. Chips are made from semiconductors, so “semiconductor” is often used to mean “chip.”", fil: "Materyales na puwedeng padaanin o pigilan ang kuryente. Dito gawa ang chips, kaya madalas “semiconductor” na rin ang tawag sa chip." },
  { term: "Chip", en: "A tiny piece of semiconductor packed with very small switches. The “brain” of electronic devices.", fil: "Maliit na piraso ng semiconductor na punô ng maliliit na switch. Ang “utak” ng mga electronic device." },
  { term: "Artificial intelligence (AI)", en: "Computer programs that learn from data to answer questions, recognize images, write text and more.", fil: "Mga computer program na natututo mula sa data para sumagot, kumilala ng larawan, sumulat, at iba pa." },
  { term: "AI infrastructure", en: "The physical things AI runs on: buildings full of computers (data centers), power, cooling and networks.", fil: "Ang mga pisikal na kailangan ng AI: mga gusaling punô ng computer (data centers), kuryente, pampalamig, at network." },
  { term: "Supply chain", en: "Every step a product goes through, from raw material to the store.", fil: "Ang buong daan ng isang produkto mula hilaw na materyales hanggang sa tindahan." },
  { term: "Value chain", en: "The steps where value is added to a product. Some steps earn much more than others.", fil: "Ang mga hakbang kung saan nadadagdagan ang halaga ng produkto. Mas malaki ang kita sa ilang hakbang." },
  { term: "Critical minerals", en: "Minerals that modern industries, such as electronics and batteries, depend on. Nickel is one example mentioned by PH officials.", fil: "Mga mineral na inaasahan ng modernong industriya, gaya ng electronics at baterya. Halimbawa ang nickel na binanggit ng mga opisyal." },
  { term: "Raw ore", en: "Rock or soil with minerals in it, dug up but not yet processed.", fil: "Bato o lupang may mineral, hinukay pero hindi pa naproseso." },
  { term: "Non-binding declaration", en: "A signed statement of shared goals that does not create legal obligations that can be enforced in court.", fil: "Pinirmahang pahayag ng magkakaparehong layunin, pero walang legal na obligasyong puwedeng ipatupad sa korte." },
  { term: "Signatory", en: "A country or party that has signed an agreement or declaration.", fil: "Bansa o partido na pumirma sa isang kasunduan o declaration." },
  { term: "Framework agreement", en: "An agreement that sets the general rules and structure for future, more detailed arrangements.", fil: "Kasunduang naglalatag ng pangkalahatang patakaran at balangkas para sa mas detalyadong usapan sa hinaharap." },
  { term: "Special Economic Zone (ecozone)", en: "An area with its own set of rules and incentives to attract businesses and investors.", fil: "Lugar na may sariling patakaran at insentibo para makaakit ng negosyo at investor." },
  { term: "BCDA", en: "Bases Conversion and Development Authority — the government agency that, per officials, keeps ownership of the land at New Clark City.", fil: "Bases Conversion and Development Authority — ahensya ng gobyerno na, ayon sa mga opisyal, may-ari ng lupa sa New Clark City." },
  { term: "Master lessee", en: "The main tenant that rents a large area and develops it, such as building roads, utilities and facilities.", fil: "Ang pangunahing uupa sa isang malaking lugar at siyang magde-develop nito, gaya ng kalsada, utilities at pasilidad." },
  { term: "Grace period (lease-free)", en: "A set time when rent does not have to be paid.", fil: "Takdang panahon na hindi kailangang magbayad ng upa." },
  { term: "In-kind contribution", en: "Contributing something other than cash, like land use, time or services.", fil: "Ambag na hindi pera, gaya ng paggamit ng lupa, oras, o serbisyo." },
  { term: "Gigawatt (GW)", en: "A large unit of electric power, used to describe how much electricity a big facility or a whole grid can use or supply.", fil: "Malaking sukat ng kuryente, ginagamit para ilarawan kung gaano karaming kuryente ang kaya o kailangan ng malaking pasilidad o ng buong grid." },
  { term: "Grid capacity", en: "How much electricity a power network can supply at one time.", fil: "Kung gaano karaming kuryente ang kayang ibigay ng isang power network nang sabay-sabay." },
  { term: "Technology transfer", en: "When a company shares know-how, skills or technology with local workers and firms, so the host country can eventually do the work itself.", fil: "Kapag ibinabahagi ng kumpanya ang kaalaman, kasanayan, o teknolohiya sa mga lokal na manggagawa at kumpanya, para kalaunan ay kaya na ng bansa." },
  { term: "State media", en: "News outlets owned or controlled by a government. Global Times is Chinese state media.", fil: "Mga news outlet na pag-aari o kontrolado ng gobyerno. Ang Global Times ay state media ng China." }
];

/* ---------- 13. SECTION 11: QUIZ (facts only) ----------
   answer = index of the correct choice (0 = first) */
window.QUIZ = [
  { q: { en: "When was Pax Silica launched?", fil: "Kailan inilunsad ang Pax Silica?" },
    choices: [
      { en: "December 12, 2025", fil: "Disyembre 12, 2025" },
      { en: "April 16, 2026", fil: "Abril 16, 2026" },
      { en: "June 27, 2026", fil: "Hunyo 27, 2026" },
      { en: "November 16, 2026", fil: "Nobyembre 16, 2026" }
    ], answer: 0,
    why: { en: "It launched at the inaugural Pax Silica Summit in Washington, D.C. April 16, 2026 is when the Philippines joined. {{c:wiki,avasant}}",
           fil: "Inilunsad ito sa unang Pax Silica Summit sa Washington, D.C. Ang Abril 16, 2026 ay noong sumali ang Pilipinas. {{c:wiki,avasant}}" } },
  { q: { en: "According to the European Commission, the Pax Silica Declaration is…", fil: "Ayon sa European Commission, ang Pax Silica Declaration ay…" },
    choices: [
      { en: "A legally binding treaty", fil: "Isang legally binding na tratado" },
      { en: "Not legally binding", fil: "Hindi legally binding" },
      { en: "Binding only on Asian members", fil: "Binding lang sa mga miyembrong taga-Asya" }
    ], answer: 1,
    why: { en: "The Commission said so when the EU joined in June 2026. {{c:big}}",
           fil: "Sinabi ito ng Commission nang sumali ang EU noong Hunyo 2026. {{c:big}}" } },
  { q: { en: "Where is the planned Pax Silica hub in the Philippines?", fil: "Saan itatayo ang planong Pax Silica hub sa Pilipinas?" },
    choices: [
      { en: "Subic, Zambales", fil: "Subic, Zambales" },
      { en: "New Clark City, Capas, Tarlac", fil: "New Clark City, Capas, Tarlac" },
      { en: "Mactan, Cebu", fil: "Mactan, Cebu" }
    ], answer: 1,
    why: { en: "It is planned at New Clark City in Capas, Tarlac. {{c:inquirer,bworld}}",
           fil: "Planong itayo ito sa New Clark City sa Capas, Tarlac. {{c:inquirer,bworld}}" } },
  { q: { en: "Per officials, who keeps ownership of the land?", fil: "Ayon sa mga opisyal, sino ang may-ari ng lupa?" },
    choices: [
      { en: "The US government", fil: "Ang gobyerno ng US" },
      { en: "The master lessee", fil: "Ang master lessee" },
      { en: "BCDA", fil: "BCDA" }
    ], answer: 2,
    why: { en: "BCDA keeps ownership; a master lessee develops the infrastructure. {{c:mb0424,avasant,tribune}}",
           fil: "Sa BCDA pa rin ang lupa; ang master lessee ang gagawa ng infrastructure. {{c:mb0424,avasant,tribune}}" } },
  { q: { en: "The hub's projected power demand of 3 GW is about what share of Luzon's grid capacity?", fil: "Ang inaasahang 3 GW na demand ng hub ay mga ilang porsyento ng kapasidad ng Luzon grid?" },
    choices: [
      { en: "About 2%", fil: "Mga 2%" },
      { en: "About 16%", fil: "Mga 16%" },
      { en: "About 50%", fil: "Mga 50%" }
    ], answer: 1,
    why: { en: "3 GW is about 16% of Luzon's 18.75 GW grid capacity. {{c:inq07,map}}",
           fil: "Ang 3 GW ay mga 16% ng 18.75 GW na kapasidad ng Luzon grid. {{c:inq07,map}}" } },
  { q: { en: "As of November 5, 2026, what is the status of the PH–US framework agreement?", fil: "Hanggang Nobyembre 5, 2026, ano ang estado ng PH–US framework agreement?" },
    choices: [
      { en: "Signed in April 2026", fil: "Pinirmahan noong Abril 2026" },
      { en: "Not yet signed; the Palace is awaiting the US response", fil: "Hindi pa pirmado; hinihintay ng Palasyo ang sagot ng US" },
      { en: "Cancelled", fil: "Kinansela" }
    ], answer: 1,
    why: { en: "BCDA submitted it to Malacañang with no signing date. {{c:rappler1104,tribune1104}}",
           fil: "Isinumite ito ng BCDA sa Malacañang nang walang petsa ng pirmahan. {{c:rappler1104,tribune1104}}" } }
];
