"use strict";
/* ---------- Plan data ---------- */
const SUBJ = {
  m: { code: "041", name: "Maths", full: "Mathematics", hash: "maths", paper: "80 marks, 3 hours" },
  s: { code: "086", name: "Science", full: "Science", hash: "science", paper: "80 marks, 3 hours" },
  k: { code: "087", name: "SST", full: "Social Science", hash: "sst", paper: "80 marks, 3 hours" },
  e: { code: "184", name: "English", full: "English Language and Literature", hash: "english", paper: "80 marks, 3 hours" },
  h: { code: "002", name: "Hindi", full: "Hindi", hash: "hindi", paper: "80 marks, 3 hours" },
  i: { code: "402", name: "IT", full: "Information Technology", hash: "it", paper: "50 marks, 2 hours" }
};
const ORDER = ["m", "s", "k", "e", "h", "i"];
/* [subject, unit, unit marks, [[id, chapter label, title, minutes, day, note]], Hindi course] */
const PLAN = [
  ["m", "Number Systems", 6, [["m1", "1", "Real Numbers", 35, 1]]],
  ["m", "Algebra", 20, [["m2", "2", "Polynomials", 35, 1], ["m3", "3", "Pair of Linear Equations in Two Variables", 45, 2], ["m4", "4", "Quadratic Equations", 45, 2], ["m5", "5", "Arithmetic Progressions", 45, 3]]],
  ["m", "Geometry", 15, [["m6", "6", "Triangles", 45, 4], ["m10", "10", "Circles", 35, 6]]],
  ["m", "Coordinate Geometry", 6, [["m7", "7", "Coordinate Geometry", 35, 4]]],
  ["m", "Trigonometry", 12, [["m8", "8", "Introduction to Trigonometry", 45, 5], ["m9", "9", "Some Applications of Trigonometry", 40, 6]]],
  ["m", "Mensuration", 10, [["m11", "11", "Areas Related to Circles", 35, 7], ["m12", "12", "Surface Areas and Volumes", 45, 7]]],
  ["m", "Statistics and Probability", 11, [["m13", "13", "Statistics", 45, 8], ["m14", "14", "Probability", 30, 8]]],
  ["m", "Full paper", 80, [["mP", "P", "Maths full practice paper", 180, 10, "", 80]]],

  ["s", "Chemical Substances", 25, [["s1", "1", "Chemical Reactions and Equations", 40, 1], ["s2", "2", "Acids, Bases and Salts", 45, 1], ["s3", "3", "Metals and Non-metals", 45, 2], ["s4", "4", "Carbon and its Compounds", 45, 2]]],
  ["s", "World of Living", 25, [["s5", "5", "Life Processes", 50, 3], ["s6", "6", "Control and Coordination", 40, 3], ["s7", "7", "How do Organisms Reproduce?", 40, 4], ["s8", "8", "Heredity", 40, 5, "Skip Evolution"]]],
  ["s", "Natural Phenomena", 12, [["s9", "9", "Light: Reflection and Refraction", 50, 5], ["s10", "10", "The Human Eye and the Colourful World", 35, 6]]],
  ["s", "Effects of Current", 13, [["s11", "11", "Electricity", 50, 7], ["s12", "12", "Magnetic Effects of Electric Current", 40, 8, "Skip motor, induction and generator"]]],
  ["s", "Natural Resources", 5, [["s13", "13", "Our Environment", 30, 8]]],
  ["s", "Full paper", 80, [["sP", "P", "Science full practice paper", 180, 9, "", 80]]],

  ["k", "History", 20, [["h1", "1", "The Rise of Nationalism in Europe", 40, 1], ["h2", "2", "Nationalism in India", 45, 3], ["h3", "3", "The Making of a Global World", 20, 6, "Topics 1 to 1.3 only"], ["h5", "5", "Print Culture and the Modern World", 35, 8]]],
  ["k", "Geography", 20, [["g1", "1", "Resources and Development", 35, 1], ["g2", "2", "Forest and Wildlife Resources", 25, 2], ["g3", "3", "Water Resources", 25, 3], ["g4", "4", "Agriculture", 35, 5], ["g5", "5", "Minerals and Energy Resources", 35, 6], ["g6", "6", "Manufacturing Industries", 30, 7], ["g7", "7", "Lifelines of National Economy", 20, 8, "Map pointing only"]]],
  ["k", "Political Science", 20, [["p1", "1", "Power-sharing", 25, 1], ["p2", "2", "Federalism", 30, 2], ["p3", "3", "Gender, Religion and Caste", 30, 4], ["p4", "4", "Political Parties", 35, 6], ["p5", "5", "Outcomes of Democracy", 25, 8]]],
  ["k", "Economics", 20, [["e1", "1", "Development", 30, 2], ["e2", "2", "Sectors of the Indian Economy", 35, 4], ["e3", "3", "Money and Credit", 30, 5], ["e4", "4", "Globalisation and the Indian Economy", 20, 7, "First two topics only"]]],
  ["k", "Map work", null, [["map", "", "All map items, History and Geography", 25, 10, "2 marks in History, 3 in Geography"]]],
  ["k", "Full paper", 80, [["kP", "P", "SST full practice paper", 180, 11, "", 80]]],

  ["e", "First Flight, prose", null, [["f1", "1", "A Letter to God", 20, 1], ["f2", "2", "Nelson Mandela: Long Walk to Freedom", 20, 1], ["f3", "3", "Two Stories about Flying", 20, 2], ["f4", "4", "From the Diary of Anne Frank", 20, 3], ["f5", "5", "Glimpses of India", 20, 3], ["f6", "6", "Mijbil the Otter", 20, 5], ["f7", "7", "Madam Rides the Bus", 20, 5], ["f8", "8", "The Sermon at Benares", 15, 7], ["f9", "9", "The Proposal", 25, 10]]],
  ["e", "First Flight, poems", null, [["po1", "", "Dust of Snow, Fire and Ice", 20, 1], ["po2", "", "A Tiger in the Zoo, How to Tell Wild Animals", 20, 3], ["po3", "", "The Ball Poem, Amanda!", 20, 5], ["po4", "", "The Trees, Fog", 20, 7], ["po5", "", "The Tale of Custard the Dragon, For Anne Gregory", 20, 10]]],
  ["e", "Footprints Without Feet", null, [["w1", "1", "A Triumph of Surgery", 15, 1], ["w2", "2", "The Thief's Story", 15, 2], ["w3", "3", "The Midnight Visitor", 15, 3], ["w4", "4", "A Question of Trust", 15, 5], ["w5", "5", "Footprints Without Feet", 15, 5], ["w6", "6", "The Making of a Scientist", 15, 7], ["w7", "7", "The Necklace", 15, 7], ["w8", "8", "Bholi", 15, 8], ["w9", "9", "The Book That Saved the Earth", 15, 10]]],
  ["e", "Writing and grammar", 20, [["eg1", "", "Grammar: tenses, modals, determiners", 25, 2], ["eg2", "", "Grammar: subject-verb concord, reported speech", 25, 7], ["ew1", "", "Formal letter", 25, 3], ["ew2", "", "Analytical paragraph", 25, 10]]],
  ["e", "Reading", 20, [["er", "", "Discursive passage and case-based passage", 30, 10]]],
  ["e", "Full paper", 80, [["eP", "P", "English full practice paper", 180, 12, "", 80]]],

  ["h", "क्षितिज, काव्य", null, [["a1", "1", "पद (सूरदास)", 20, 1], ["a2", "2", "राम-लक्ष्मण-परशुराम संवाद", 25, 2], ["a3", "3", "आत्मकथ्य", 20, 4], ["a4", "4", "उत्साह, अट नहीं रही है", 20, 4], ["a5", "5", "यह दंतुरित मुसकान, फसल", 20, 6], ["a6", "6", "संगतकार", 20, 8]], "A"],
  ["h", "क्षितिज, गद्य", null, [["a7", "7", "नेताजी का चश्मा", 20, 1], ["a8", "8", "बालगोबिन भगत", 20, 2], ["a9", "9", "लखनवी अंदाज़", 20, 4], ["a10", "10", "एक कहानी यह भी", 20, 6], ["a11", "11", "नौबतखाने में इबादत", 20, 7], ["a12", "12", "संस्कृति", 20, 8]], "A"],
  ["h", "कृतिका", null, [["ak1", "1", "माता का अँचल", 20, 2], ["ak2", "2", "साना-साना हाथ जोड़ि", 20, 6], ["ak3", "3", "मैं क्यों लिखता हूँ?", 15, 8]], "A"],
  ["h", "व्याकरण", 16, [["ag1", "", "रचना के आधार पर वाक्य भेद", 20, 1], ["ag2", "", "वाच्य", 20, 4], ["ag3", "", "पद परिचय", 20, 6], ["ag4", "", "अलंकार", 20, 8]], "A"],
  ["h", "रचनात्मक लेखन", 20, [["aw1", "", "अनुच्छेद और पत्र", 25, 4], ["aw2", "", "स्ववृत्त, ई-मेल, विज्ञापन, संदेश", 25, 8]], "A"],
  ["h", "अपठित बोध", 14, [["ar", "", "अपठित गद्यांश और काव्यांश", 20, 8]], "A"],

  ["h", "स्पर्श, काव्य", null, [["b1", "", "साखी (कबीर)", 20, 1], ["b2", "", "पद (मीरा)", 15, 2], ["b3", "", "मनुष्यता", 20, 4], ["b4", "", "पर्वत प्रदेश में पावस", 15, 4], ["b5", "", "तोप", 15, 6], ["b6", "", "कर चले हम फ़िदा", 15, 6], ["b7", "", "आत्मत्राण", 15, 8]], "B"],
  ["h", "स्पर्श, गद्य", null, [["b8", "", "बड़े भाई साहब", 20, 1], ["b9", "", "डायरी का एक पन्ना", 20, 2], ["b10", "", "ततांरा-वामीरो कथा", 20, 4], ["b11", "", "तीसरी कसम के शिल्पकार शैलेंद्र", 20, 6], ["b12", "", "अब कहाँ दूसरे के दुख से दुखी होने वाले", 20, 7], ["b13", "", "पतझर में टूटी पत्तियाँ: झेन की देन", 15, 8], ["b14", "", "कारतूस", 15, 8]], "B"],
  ["h", "संचयन", null, [["bs1", "", "हरिहर काका", 20, 2], ["bs2", "", "सपनों के-से दिन", 20, 6], ["bs3", "", "टोपी शुक्ला", 20, 8]], "B"],
  ["h", "व्याकरण", 16, [["bg1", "", "पदबंध", 20, 1], ["bg2", "", "रचना के आधार पर वाक्य रूपांतरण", 20, 4], ["bg3", "", "समास", 20, 6], ["bg4", "", "मुहावरे", 20, 8]], "B"],
  ["h", "रचनात्मक लेखन", 22, [["bw1", "", "अनुच्छेद और औपचारिक पत्र", 25, 4], ["bw2", "", "सूचना, विज्ञापन, ई-मेल या लघु कथा", 25, 8]], "B"],
  ["h", "अपठित बोध", 14, [["br", "", "अपठित गद्यांश", 20, 8]], "B"],
  ["h", "Full paper", 80, [["hP", "P", "Hindi full practice paper", 180, 9, "", 80]]],

  ["i", "Part A: Employability Skills", 10, [["i1", "A1", "Communication Skills-II", 15, 1], ["i2", "A2", "Self-Management Skills-II", 15, 3], ["i3", "A3", "ICT Skills-II", 15, 5], ["i4", "A4", "Entrepreneurial Skills-II", 15, 7], ["i5", "A5", "Green Skills-II", 10, 7]]],
  ["i", "Part B: Subject Skills", 40, [["i6", "B1", "Digital Documentation, Advanced (Writer)", 35, 2], ["i7", "B2", "Electronic Spreadsheet, Advanced (Calc)", 40, 4], ["i8", "B3", "Database Management System (Base)", 45, 6], ["i9", "B4", "Healthy, Safe and Secure Working Environment", 35, 8]]],
  ["i", "Full paper", 50, [["iP", "P", "IT full practice paper", 120, 11, "", 50]]]
];
const OUT = {
  s: ["Periodic Classification of Elements: not asked in the year-end exam", "Evolution: not asked in the year-end exam", "Electric motor, electromagnetic induction, generator: not asked in the year-end exam"],
  k: ["History Ch 4, The Age of Industrialisation: periodic or mid-term test only", "Economics Ch 5, Consumer Rights: project work only", "The rest of History Ch 3 and Economics Ch 4: project work only"],
  e: ["The Hundred Dresses I and II, Animals, The Hack Driver: not in the 2026-27 list"],
  hA: ["सवैया और कवित्त (देव), छाया मत छूना, कन्यादान", "मानवीय करुणा की दिव्य चमक, स्त्री शिक्षा के विरोधी कुतर्कों का खंडन", "जॉर्ज पंचम की नाक, एही ठैयाँ झुलनी हेरानी हो रामा!"]
};
const ITEMS = [], BY = {};
for (const [s, u, um, list, course] of PLAN) for (const [id, ch, t, mins, day, note, paper] of list) {
  const it = { id, s, u, um, ch, t, mins, day, note: note || "", paper: paper || 0, course: course || "" };
  ITEMS.push(it); BY[id] = it;
}
const N = 12, Y = 2026, WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], WDL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MON = { 10: ["Nov", "November"], 11: ["Dec", "December"] };
const dateOf = n => new Date(Y, 10, 27 + n);
const short = n => { const d = dateOf(n); return `${WD[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()][0]}`; };
const long = n => { const d = dateOf(n); return `${WDL[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()][1]}`; };
const dm = n => `${dateOf(n).getDate()} ${MON[dateOf(n).getMonth()][1]}`, SPAN = `${dm(1)} to ${dm(N)} ${Y}`;
const rawToday = () => { const d = new Date(); return Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - dateOf(0)) / 864e5); };
const todayN = () => Math.min(N, Math.max(1, rawToday()));
const hm = m => { const h = Math.floor(m / 60), r = Math.round(m % 60); return h ? (r ? `${h} h ${r} min` : `${h} h`) : `${r} min`; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

/* ---------- State ---------- */
const KEY = "c10sheet.v1", RUNKEY = "c10sheet.run";
const num = v => (v === null || v === undefined || v === "" || !isFinite(Number(v))) ? null : Number(v);
/* Plan 1 started on 25 November, so a chapter moved to another day in plan 1 is stored 3 days higher. */
const PLAN_V = 2;
function clean(doc) {
  const out = { plan: PLAN_V, items: {}, set: {} }, off = doc && doc.plan === PLAN_V ? 0 : 3;
  if (doc && doc.items && typeof doc.items === "object") for (const id of Object.keys(doc.items)) {
    if (!BY[id]) continue;
    const r = doc.items[id] || {}, v = num(r.v) - off;
    out.items[id] = { d: r.d ? 1 : 0, g: num(r.g), x: num(r.x), m: num(r.m) || 0, v: v >= 1 && v <= N ? Math.round(v) : null, t: num(r.t) || 0 };
  }
  const h = doc && doc.set && doc.set.hindi;
  if (h && (h.v === "A" || h.v === "B")) out.set.hindi = { v: h.v, t: num(h.t) || 0 };
  return out;
}
function merge(a, b) {
  let changed = false, newer = false;
  for (const id of new Set([...Object.keys(a.items), ...Object.keys(b.items)])) {
    const x = a.items[id], y = b.items[id];
    if (!x || (y && y.t > x.t)) { a.items[id] = y; changed = true; } else if (!y || x.t > y.t) newer = true;
  }
  const x = a.set.hindi, y = b.set.hindi;
  if (y && (!x || y.t > x.t)) { a.set.hindi = y; changed = true; } else if (x && (!y || x.t > y.t)) newer = true;
  return { changed, newer };
}
const readLS = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
let saveOK = true;
const writeLS = (k, v) => { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); saveOK = true; } catch { saveOK = false; } };
let S = clean(readLS(KEY));
let run = readLS(RUNKEY); if (run && !BY[run.id]) run = null;
let finishing = false, openRow = null;
const course = () => (S.set.hindi && S.set.hindi.v) || "A";
const st = id => S.items[id] || {};
const dayOf = it => st(it.id).v || it.day;
const active = () => ITEMS.filter(i => !i.course || i.course === course());
const pct = id => { const r = st(id); return r.g !== null && r.g !== undefined && r.x ? r.g / r.x * 100 : null; };
function patch(id, o) { S.items[id] = { d: 0, g: null, x: null, m: 0, v: null, ...st(id), ...o, t: Date.now() }; writeLS(KEY, S); queue(); }

/* ---------- Saving ---------- */
const syncEl = document.getElementById("sync");
function queue() { if (!saveOK) syncEl.textContent = "This browser isn't saving your progress. Turn off private browsing, or download a backup before you close the page."; }
window.addEventListener("storage", e => {
  if (e.key !== KEY) return;
  if (merge(S, clean(readLS(KEY))).changed) softRender();
});
function backup() {
  const blob = new Blob([JSON.stringify({ app: "class10-practice-sheet", saved: new Date().toISOString(), ...S }, null, 1)], { type: "application/json" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "class10-practice-backup.json";
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("Backup downloaded.");
}
async function restore(file) {
  let doc = null; try { doc = JSON.parse(await file.text()); } catch { }
  if (!doc || doc.app !== "class10-practice-sheet") { toast("That file isn't a practice sheet backup."); return; }
  const r = merge(S, clean(doc)); writeLS(KEY, S); render();
  toast(r.changed ? "Backup restored." : "Nothing new in that backup.");
}

/* ---------- Pieces ---------- */
function bubble(it, ctx) {
  const on = !!st(it.id).d;
  return `<button class="bub${it.paper ? " paper" : ""}" id="b-${ctx}-${it.id}" data-act="toggle" data-id="${it.id}" aria-pressed="${on}" aria-label="Done: ${esc(it.t)}">${esc(it.ch)}</button>`;
}
function rowHTML(it, ctx, tag) {
  const r = st(it.id), p = pct(it.id), hi = it.s === "h" && !it.paper ? ' lang="hi"' : "";
  const meta = [it.ch && !it.paper ? (it.s === "i" ? "Unit " : "Ch ") + esc(it.ch) : "", it.paper ? SUBJ[it.s].paper : `<span${hi}>${esc(it.u)}</span>`, it.paper ? "" : hm(it.mins), tag || ""].filter(Boolean).join(" · ");
  const open = openRow === ctx + it.id;
  return `<li class="row${r.d ? " is-done" : ""}">${bubble(it, ctx)}
    <div class="txt"><span class="ttl"${hi}>${esc(it.t)}</span><span class="meta">${meta}</span>${it.note ? `<span class="note">${esc(it.note)}</span>` : ""}</div>
    <div class="foot">${p !== null ? `<span class="mark" aria-label="Scored ${r.g} out of ${r.x}">${r.g}/${r.x}</span>` : ""}
      <button class="btn go" id="s-${ctx}-${it.id}" data-act="start" data-id="${it.id}">Start</button>
      <button class="btn" id="o-${ctx}-${it.id}" data-act="open" data-id="${ctx + it.id}" aria-expanded="${open}">Marks</button></div>
    ${open ? panelHTML(it, ctx) : ""}</li>`;
}
function panelHTML(it, ctx) {
  const r = st(it.id), k = ctx + "-" + it.id;
  let opts = ""; for (let n = 1; n <= N; n++) opts += `<option value="${n}"${dayOf(it) === n ? " selected" : ""}>Day ${n}, ${short(n)}</option>`;
  return `<form class="panel" data-form="marks" data-id="${it.id}" data-k="${k}" novalidate>
    <label class="field">Marks scored<input id="g-${k}" type="number" inputmode="decimal" min="0" step="0.5" value="${r.g ?? ""}"></label>
    <label class="field">Out of<input id="x-${k}" type="number" inputmode="decimal" min="1" step="0.5" value="${r.x ?? (it.paper || "")}"></label>
    <button class="btn fill" type="submit">Save marks</button>
    <label class="field">Do it on<select id="v-${k}" data-act="move" data-id="${it.id}">${opts}</select></label>
    <p class="err" id="e-${k}" hidden></p></form>`;
}
function groupHTML(s, list, ctx) {
  return `<section class="group"><h3><b>${s === "h" && course() === "B" ? "085" : SUBJ[s].code}</b>${SUBJ[s].full}<span>${hm(list.reduce((a, i) => a + i.mins, 0))}</span></h3><ul>${list.map(i => rowHTML(i, ctx)).join("")}</ul></section>`;
}
const code = s => s === "h" && course() === "B" ? "085" : SUBJ[s].code;

/* ---------- Views ---------- */
function omrHTML(sel) {
  const all = active(), t = rawToday();
  let cols = "";
  for (let n = 1; n <= N; n++) {
    const day = all.filter(i => dayOf(i) === n), done = day.filter(i => st(i.id).d).length, d = dateOf(n);
    cols += `<button class="omr-col${n === sel ? " sel" : ""}${n === t ? " today" : ""}" id="c-${n}" data-act="day" data-id="${n}" aria-label="Day ${n}, ${short(n)}, ${done} of ${day.length} done">
      <span class="omr-date"><span class="only-l">${WD[d.getDay()]}</span><span class="only-s">${WD[d.getDay()][0]}</span><strong>${d.getDate()}</strong></span>
      ${ORDER.map(s => `<span class="omr-cell">${day.filter(i => i.s === s).map(i => `<span class="dot${i.paper ? " paper" : ""}${st(i.id).d ? " on" : ""}"></span>`).join("")}</span>`).join("")}
      <span class="omr-foot"><i class="${day.length && done === day.length ? "on" : ""}"></i></span></button>`;
  }
  const done = all.filter(i => st(i.id).d).length, mins = all.reduce((a, i) => a + (st(i.id).m || 0), 0);
  const ps = all.map(i => pct(i.id)).filter(p => p !== null), avg = ps.length ? Math.round(ps.reduce((a, b) => a + b, 0) / ps.length) : null;
  return `<div class="omr"><div class="omr-labels" aria-hidden="true"><span></span>${ORDER.map(s => `<span><b>${code(s)}</b><em>${SUBJ[s].name}</em></span>`).join("")}<span></span></div>${cols}</div>
    <div class="omr-note"><p><strong>${done} of ${all.length}</strong> done${mins ? `, <strong>${hm(mins)}</strong> timed` : ""}${avg !== null ? `, average score <strong>${avg}%</strong>` : ""}</p>
    <p class="key" aria-hidden="true"><span><span class="dot"></span>chapter</span><span><span class="dot paper"></span>full paper</span><span><span class="dot on"></span>done</span><span><i></i>day complete</span></p></div>`;
}
function dayHTML(n) {
  const all = active(), day = all.filter(i => dayOf(i) === n), t = rawToday(), left = day.filter(i => !st(i.id).d);
  const late = n === t ? all.filter(i => dayOf(i) < n && !st(i.id).d).sort((a, b) => dayOf(a) - dayOf(b)) : [];
  const line = !day.length ? "Nothing is planned for this day." : !left.length ? `All ${plural(day.length, "session")} done.` : `<strong>${plural(left.length, "session")}</strong> to do, about <strong>${hm(left.reduce((a, i) => a + i.mins, 0))}</strong>. Press Start, do that chapter in your Oswal book, then enter your marks.`;
  let h = `<div class="dayhead"><div><p class="eyebrow">${n === t ? "Today, day" : "Day"} ${n} of ${N}</p><h2>${long(n)}</h2><p class="sub">${line}</p></div>
    <div class="step"><a class="btn" href="#day-${Math.max(1, n - 1)}"${n === 1 ? ' aria-disabled="true"' : ""}>Previous day</a><a class="btn" href="#day-${Math.min(N, n + 1)}"${n === N ? ' aria-disabled="true"' : ""}>Next day</a></div></div><div class="groups" style="margin-top:20px">`;
  if (late.length) h += `<section class="group late"><h3>Pending from earlier days<span>${hm(late.reduce((a, i) => a + i.mins, 0))}</span></h3><ul>${late.map(i => rowHTML(i, "l", `${SUBJ[i.s].name}, from ${short(dayOf(i))}`)).join("")}</ul></section>`;
  for (const s of ORDER) { const l = day.filter(i => i.s === s); if (l.length) h += groupHTML(s, l, "d"); }
  if (n >= N - 3) {
    const weak = all.filter(i => pct(i.id) !== null && pct(i.id) < 70 && !i.paper).sort((a, b) => pct(a.id) - pct(b.id)).slice(0, 6);
    h += `<section class="group"><h3>Redo your weakest chapters</h3>${weak.length ? `<ul>${weak.map(i => rowHTML(i, "r", SUBJ[i.s].name)).join("")}</ul>` : `<p class="empty">Chapters where you score under 70% will be listed here.</p>`}</section>`;
  }
  return h + "</div>";
}
function planHTML() {
  const all = active(), t = rawToday();
  let body = "";
  for (let n = 1; n <= N; n++) {
    const day = all.filter(i => dayOf(i) === n);
    body += `<tr class="${n === t ? "today" : ""}"><th scope="row"><a href="#day-${n}">${short(n)}</a>Day ${n}, ${hm(day.reduce((a, i) => a + i.mins, 0))}</th>${ORDER.map(s => {
      const l = day.filter(i => i.s === s);
      return `<td class="${l.length ? "" : "none"}" data-l="${code(s)} ${SUBJ[s].name}"><ul>${l.map(i => `<li class="${st(i.id).d ? "is-done" : ""}"><button class="tick${i.paper ? " paper" : ""}" id="b-a-${i.id}" data-act="toggle" data-id="${i.id}" aria-pressed="${!!st(i.id).d}" aria-label="Done: ${esc(i.t)}"></button><span${i.s === "h" && !i.paper ? ' lang="hi"' : ""}>${i.ch && !i.paper ? esc(i.ch) + ". " : ""}${esc(i.paper ? "Full paper" : i.t)}</span></li>`).join("")}</ul></td>`;
    }).join("")}</tr>`;
  }
  return `<div class="dayhead"><div><h2>All days</h2><p class="sub">Chapters run from 28 November to 7 December. Full papers run from 6 to 9 December.</p></div></div>
    <table class="ds" style="margin-top:18px"><thead><tr><th scope="col">Date</th>${ORDER.map(s => `<th scope="col"><b>${code(s)}</b> ${SUBJ[s].name}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table>`;
}
function subjectHTML(s) {
  const list = active().filter(i => i.s === s), done = list.filter(i => st(i.id).d).length;
  const ps = list.map(i => pct(i.id)).filter(p => p !== null);
  const chips = ORDER.map(k => { const l = active().filter(i => i.s === k); return `<a href="#${SUBJ[k].hash}" id="ch-${k}" aria-current="${k === s}"><b>${code(k)}</b>${SUBJ[k].name} ${l.filter(i => st(i.id).d).length}/${l.length}</a>`; }).join("");
  const units = [...new Set(list.map(i => i.u))];
  const out = s === "h" ? (course() === "A" ? OUT.hA : null) : OUT[s];
  return `<div class="chips">${chips}</div><div class="dayhead" style="margin-top:22px"><div><h2>${SUBJ[s].full}${s === "h" ? ", Course " + course() : ""}</h2>
    <p class="sub">Theory paper: ${SUBJ[s].paper}. <strong>${done} of ${list.length}</strong> done${ps.length ? `, average score <strong>${Math.round(ps.reduce((a, b) => a + b, 0) / ps.length)}%</strong>` : ""}.</p></div>
    ${s === "h" ? `<div class="seg" role="group" aria-label="Hindi course"><button id="hc-A" data-act="hindi" data-id="A" aria-pressed="${course() === "A"}">Course A</button><button id="hc-B" data-act="hindi" data-id="B" aria-pressed="${course() === "B"}">Course B</button></div>` : ""}</div>
    <div class="units" style="margin-top:18px">${units.map(u => { const l = list.filter(i => i.u === u); return `<section class="unit"><h3${s === "h" && !l[0].paper ? ' lang="hi"' : ""}>${esc(u)}${l[0].um ? `<span lang="en">${l[0].um} marks</span>` : ""}</h3><ul>${l.map(i => rowHTML(i, "s", `<a href="#day-${dayOf(i)}">${short(dayOf(i))}</a>`)).join("")}</ul></section>`; }).join("")}</div>
    ${out ? `<section class="out"><h3>Not in this plan</h3><ul${s === "h" ? ' lang="hi"' : ""}>${out.map(o => `<li>${esc(o)}</li>`).join("")}</ul></section>` : ""}
    ${s === "h" && course() === "B" ? `<section class="out"><h3>Check this list</h3><p>The Course B chapters come from a secondary source. Compare them with your own book.</p></section>` : ""}`;
}

/* ---------- Render ---------- */
const main = document.getElementById("main"), omr = document.getElementById("omr");
function route() {
  const h = location.hash.slice(1), m = /^day-(\d+)$/.exec(h);
  if (m && +m[1] >= 1 && +m[1] <= N) return { v: "day", n: +m[1] };
  if (h === "plan") return { v: "plan" };
  const s = ORDER.find(k => SUBJ[k].hash === h);
  if (s || h === "subjects") return { v: "subject", s: s || "m" };
  return { v: "day", n: todayN(), home: true };
}
function render() {
  const r = route(), keep = document.activeElement && document.activeElement.id, t = rawToday();
  omr.innerHTML = omrHTML(r.v === "day" ? r.n : 0);
  main.innerHTML = r.v === "day" ? dayHTML(r.n) : r.v === "plan" ? planHTML() : subjectHTML(r.s);
  for (const [id, on] of [["tab-today", r.v === "day" && r.n === todayN()], ["tab-plan", r.v === "plan"], ["tab-subjects", r.v === "subject"]]) {
    const a = document.getElementById(id); on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
  }
  document.getElementById("tab-today").textContent = t < 1 ? "First day" : "Today";
  const left = N - t + 1;
  document.getElementById("count").textContent = t < 1 ? `Oswal practice, ${SPAN}. Starts in ${plural(1 - t, "day")}` : left > 1 ? `Oswal practice, ends Wed 9 December. ${left} days left, counting today` : left === 1 ? "Oswal practice. Last day today" : `Oswal practice, ${SPAN}. Plan finished`;
  if (keep) { const el = document.getElementById(keep); if (el && el !== document.activeElement) el.focus({ preventScroll: true }); }
}
let later = false;
function softRender() { if (document.activeElement && document.activeElement.closest && document.activeElement.closest("form.panel")) { later = true; return; } render(); }
let tt = null;
function toast(msg) { const el = document.getElementById("toast"); el.textContent = msg; el.hidden = false; clearTimeout(tt); tt = setTimeout(() => { el.hidden = true; }, 2600); }

/* ---------- Timer ---------- */
const bar = document.getElementById("bar");
const elapsed = () => run ? run.acc + (run.start ? Date.now() - run.start : 0) : 0;
const clock = ms => { const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), p = n => String(n).padStart(2, "0"); return (h ? h + ":" : "") + p(m) + ":" + p(s % 60); };
const target = it => { const over = elapsed() - it.mins * 6e4; return over > 0 ? `${clock(over)} over the ${hm(it.mins)} target` : `Target ${hm(it.mins)}`; };
function drawBar() {
  bar.hidden = !run; if (!run) { bar.innerHTML = ""; return; }
  const it = BY[run.id];
  bar.innerHTML = `<div class="bar-in"><div class="bar-t"><strong>${esc(it.t)}</strong><span id="bar-sub">${SUBJ[it.s].name}. ${target(it)}</span></div><div class="clock" id="clock">${clock(elapsed())}</div>` +
    (finishing ? `<form class="acts" data-form="finish" novalidate><label class="field">Marks scored<input id="fg" type="number" inputmode="decimal" min="0" step="0.5"></label><label class="field">Out of<input id="fx" type="number" inputmode="decimal" min="1" step="0.5" value="${it.paper || ""}"></label><button class="btn fill" type="submit">Save and mark done</button><button class="btn" type="button" data-act="back">Keep going</button><button class="btn" type="button" data-act="discard">Discard</button><p class="err" id="fe" hidden></p></form>`
      : `<div class="acts"><button class="btn" id="pz" data-act="pause">${run.start ? "Pause" : "Resume"}</button><button class="btn fill" id="fin" data-act="finish">Finish</button></div>`) + `</div>`;
}
setInterval(() => { if (!run || !run.start) return; const c = document.getElementById("clock"); if (c) { c.textContent = clock(elapsed()); document.getElementById("bar-sub").textContent = `${SUBJ[BY[run.id].s].name}. ${target(BY[run.id])}`; } }, 1000);
const saveRun = () => writeLS(RUNKEY, run);
const pauseRun = () => { if (run.start) { run.acc = elapsed(); run.start = null; saveRun(); } };

/* Returns {g, x} or an error message. Both blank means "no marks". */
function readMarks(gv, xv) {
  const g = num(gv), x = num(xv);
  if (gv === "" ) return { g: null, x: null };
  if (g === null || g < 0) return "Enter the marks you scored, 0 or more.";
  if (x === null || x <= 0) return "Enter the total marks in Out of.";
  if (g > x) return "Marks scored can't be more than the total.";
  return { g, x };
}

/* ---------- Events ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b || b.tagName === "SELECT") return;
  const a = b.dataset.act, id = b.dataset.id;
  if (a === "toggle") { const on = !st(id).d; patch(id, { d: on ? 1 : 0 }); render(); toast(`${on ? "Done" : "Not done"}: ${BY[id].t}`); }
  else if (a === "day") location.hash = "day-" + id;
  else if (a === "open") { openRow = openRow === id ? null : id; render(); }
  else if (a === "hindi") { S.set.hindi = { v: id, t: Date.now() }; writeLS(KEY, S); queue(); render(); }
  else if (a === "start") {
    if (run && run.id !== id) { toast("Finish or discard the running session first."); return; }
    if (!run) { run = { id, acc: 0, start: Date.now() }; finishing = false; saveRun(); drawBar(); toast(`Timer started: ${BY[id].t}`); }
  }
  else if (a === "pause") { if (run.start) pauseRun(); else { run.start = Date.now(); saveRun(); } drawBar(); document.getElementById("pz").focus(); }
  else if (a === "finish") { pauseRun(); finishing = true; drawBar(); document.getElementById("fg").focus(); }
  else if (a === "back") { finishing = false; run.start = Date.now(); saveRun(); drawBar(); document.getElementById("pz").focus(); }
  else if (a === "backup") backup();
  else if (a === "restore") document.getElementById("bk-file").click();
  else if (a === "discard") { run = null; finishing = false; saveRun(); drawBar(); toast("Session discarded."); }
});
document.addEventListener("change", e => {
  if (e.target.dataset && e.target.dataset.act === "move") {
    const id = e.target.dataset.id, n = +e.target.value;
    patch(id, { v: n === BY[id].day ? null : n }); openRow = null; render(); toast(`Moved to ${short(n)}: ${BY[id].t}`);
  }
});
document.addEventListener("submit", e => {
  const f = e.target; if (!f.dataset.form) return; e.preventDefault();
  if (f.dataset.form === "marks") {
    const k = f.dataset.k, id = f.dataset.id, r = readMarks(document.getElementById("g-" + k).value, document.getElementById("x-" + k).value), er = document.getElementById("e-" + k);
    if (typeof r === "string") { er.textContent = r; er.hidden = false; return; }
    patch(id, r.g === null ? r : { ...r, d: 1 }); openRow = null; document.activeElement.blur(); render();
    toast(r.g === null ? `Marks cleared: ${BY[id].t}` : `Saved ${r.g}/${r.x}: ${BY[id].t}`);
  } else {
    const r = readMarks(document.getElementById("fg").value, document.getElementById("fx").value), er = document.getElementById("fe");
    if (typeof r === "string") { er.textContent = r; er.hidden = false; return; }
    const id = run.id, mins = Math.max(1, Math.round(elapsed() / 6e4));
    patch(id, { d: 1, m: (st(id).m || 0) + mins, ...(r.g === null ? {} : r) });
    run = null; finishing = false; saveRun(); drawBar(); render(); toast(`Done in ${hm(mins)}: ${BY[id].t}`);
  }
});
document.addEventListener("focusout", () => setTimeout(() => { if (later && !(document.activeElement && document.activeElement.closest("form.panel"))) { later = false; render(); } }, 0));
document.getElementById("bk-file").addEventListener("change", e => { const f = e.target.files[0]; e.target.value = ""; if (f) restore(f); });
window.addEventListener("hashchange", () => { openRow = null; render(); });
let seen = rawToday();
document.addEventListener("visibilitychange", () => { if (!document.hidden && rawToday() !== seen) { seen = rawToday(); render(); } });

render(); drawBar();
