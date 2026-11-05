/* Pax Silica, Explained — page logic. No tracking, no external requests.
   You normally do NOT need to edit this file. Edit js/content.js instead. */
(function () {
  "use strict";

  var UI = window.UI, SOURCES = window.SOURCES;
  var state = {
    lang: "en",
    filter: "all",
    side: "pro",
    quiz: {},        // question index -> chosen index
    openEvents: {}   // timeline sort key -> true
  };
  var usage = {};    // source id -> { sectionId: true }
  var currentSection = null;

  var SECTION_NAV = {
    sixty: "nav_sixty", basics: "nav_basics", what: "nav_what", philippines: "nav_ph",
    timeline: "nav_timeline", sides: "nav_sides", middle: "nav_middle",
    undecided: "nav_undecided", glossary: "nav_glossary", quiz: "nav_quiz"
  };

  /* ---------- helpers ---------- */
  function t(key) {
    var v = UI[key];
    if (!v) { console.warn("Missing UI key:", key); return ""; }
    return v[state.lang] != null ? v[state.lang] : v.en;
  }
  function L(obj) { return obj ? (obj[state.lang] != null ? obj[state.lang] : obj.en) : ""; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function citeHTML(ids) {
    var parts = ids.split(",").map(function (id) {
      id = id.trim();
      var s = SOURCES[id];
      if (!s) { console.warn("Unknown source id:", id); return esc(id); }
      if (currentSection) { (usage[id] = usage[id] || {})[currentSection] = true; }
      var label = s.outlet + (s.note ? " — " + L(s.note) : "") + (s.date ? ", " + s.date : "");
      return '<a href="#src-' + id + '">' + esc(label) + "</a>";
    });
    return '<span class="cite">(' + parts.join("; ") + ")</span>";
  }

  function fmt(str) {
    if (!str) return "";
    return str
      .replace(/\{\{c:([^}]+)\}\}/g, function (_, ids) { return citeHTML(ids); })
      .replace(/\{ASOF\}/g, L(window.AS_OF));
  }

  function badge(type) {
    return '<span class="badge badge-' + type + '">' + esc(t("badge_" + type)) + "</span>";
  }

  function itemHTML(it) {
    var type = it.type || "fact";
    return '<div class="item item-' + type + '">' + badge(type) +
      (it.title ? '<h3 class="item-title">' + esc(L(it.title)) + "</h3>" : "") +
      "<p>" + fmt(L(it)) + "</p></div>";
  }

  function claimHTML(c) {
    var type = c.type || "claim";
    return '<div class="claim">' + badge(type) +
      '<p class="who">' + esc(L(c.who)) + "</p><p>" + fmt(L(c)) + "</p></div>";
  }

  /* ---------- renderers ---------- */
  var R = {};

  R.sixty = function () {
    return window.SIXTY.map(function (b) { return "<li>" + fmt(L(b)) + "</li>"; }).join("");
  };

  var ICONS = {
    chip: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>',
    ai: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',
    mineral: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18M15 3l-3 18"/>',
    chain: '<rect x="2" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/>',
    ladder: '<path d="M4 20h4v-4h4v-4h4V8h4V4"/>',
    store: '<path d="M3 9l2-5h14l2 5M3 9h18v11H3zM9 20v-6h6v6"/>'
  };

  R.basics = function () {
    return window.BASICS.map(function (b) {
      return '<article class="card"><svg class="card-ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[b.icon] || "") + "</svg>" +
        "<h3>" + esc(L(b.title)) + "</h3><p>" + fmt(L(b)) + "</p>" +
        '<p class="analogy"><span aria-hidden="true">💡</span> ' + fmt(L(b.analogy)) + "</p></article>";
    }).join("");
  };

  R.what = function () { return window.WHAT.map(itemHTML).join(""); };

  R.members = function () {
    return window.MEMBERS.map(function (m) {
      return '<li class="' + (m.ph ? "is-ph" : "") + '"><span class="step-date">' + esc(L(m.date)) + "</span><span>" + fmt(L(m)) + "</span></li>";
    }).join("");
  };

  R.ph = function (part) { return (window.PH[part] || []).map(itemHTML).join(""); };

  R.timeline = function () {
    var items = window.TIMELINE.slice().sort(function (a, b) { return a.sort < b.sort ? -1 : 1; });
    return items.map(function (e) {
      var open = !!state.openEvents[e.sort];
      var hidden = state.filter !== "all" && state.filter !== e.cat;
      var catLabel = t({ world: "f_world", ph: "f_ph", debate: "f_debate" }[e.cat]);
      return '<li class="tl-item cat-' + e.cat + (e.upcoming ? " upcoming" : "") + '" data-cat="' + e.cat + '"' + (hidden ? " hidden" : "") + ">" +
        '<span class="tl-dot" aria-hidden="true"></span>' +
        '<button type="button" class="tl-btn" aria-expanded="' + open + '" data-key="' + e.sort + '">' +
          '<span class="tl-date">' + esc(L(e.date)) + (e.upcoming ? ' <span class="tag-up">' + esc(t("upcoming")) + "</span>" : "") + "</span>" +
          '<span class="tl-title">' + esc(L(e.title)) + "</span>" +
          '<span class="tl-cat">' + esc(catLabel) + "</span>" +
        "</button>" +
        '<div class="tl-body"' + (open ? "" : " hidden") + "><p>" + fmt(L(e)) + "</p></div></li>";
    }).join("");
  };

  R.themes = function () {
    return window.THEMES.map(function (th) {
      var ctx = th.context.map(function (c) {
        var chart = "";
        if (c.chart === "energy") {
          chart = '<figure class="bar" aria-label="' + esc(t("energy_bar_title")) + '">' +
            '<p class="diagram-title">' + esc(t("energy_bar_title")) + "</p>" +
            '<div class="bar-track"><div class="bar-fill" style="width:16%"></div><span class="bar-pct">' + esc(t("energy_bar_c")) + "</span></div>" +
            '<div class="bar-legend"><span><i class="sw sw-fill"></i>' + esc(t("energy_bar_a")) + "</span><span><i class=\"sw sw-track\"></i>" + esc(t("energy_bar_b")) + "</span></div></figure>";
        }
        return '<div class="context">' + badge(c.type || "fact") + "<p>" + fmt(L(c)) + "</p>" + chart + "</div>";
      }).join("");
      return '<article class="theme" id="theme-' + th.id + '">' +
        '<h3 class="theme-title">' + esc(L(th.title)) + "</h3>" + ctx +
        '<div class="theme-cols">' +
          '<div class="col col-pro"><p class="col-label"><span class="mark mark-pro" aria-hidden="true"></span>' + esc(t("col_for")) + "</p>" + th.pro.map(claimHTML).join("") + "</div>" +
          '<div class="col col-con"><p class="col-label"><span class="mark mark-con" aria-hidden="true"></span>' + esc(t("col_against")) + "</p>" + th.con.map(claimHTML).join("") + "</div>" +
        "</div></article>";
    }).join("");
  };

  R.middle = function () { return window.MIDDLE.map(claimHTML).join(""); };

  R.undecided = function () {
    return window.UNDECIDED.map(function (u) {
      return '<div class="open-item"><span class="open-ico" aria-hidden="true">?</span><div>' + badge("fact") +
        "<h3>" + esc(L(u.title)) + "</h3><p>" + fmt(L(u)) + "</p></div></div>";
    }).join("");
  };

  R.questions = function () { return window.QUESTIONS.map(function (q) { return "<li>" + fmt(L(q)) + "</li>"; }).join(""); };

  R.glossary = function () {
    return window.GLOSSARY.map(function (g) {
      var other = state.lang === "en" ? g.fil : g.en;
      return '<div class="gloss-item" data-search="' + esc((g.term + " " + g.en + " " + g.fil).toLowerCase()) + '">' +
        "<dt>" + esc(g.term) + "</dt>" +
        '<dd><span class="g-main">' + esc(L(g)) + '</span><span class="g-other" lang="' + (state.lang === "en" ? "fil" : "en") + '">' +
        (state.lang === "en" ? "FIL: " : "EN: ") + esc(other) + "</span></dd></div>";
    }).join("");
  };

  R.quiz = function () {
    return window.QUIZ.map(function (q, qi) {
      var chosen = state.quiz[qi];
      var answered = chosen != null;
      var btns = q.choices.map(function (c, ci) {
        var cls = "q-choice";
        if (answered && ci === q.answer) cls += " is-right";
        if (answered && ci === chosen && ci !== q.answer) cls += " is-wrong";
        var sr = "";
        if (answered && ci === q.answer) sr = ' <span class="sr">(' + esc(t("quiz_sr_right")) + ")</span>";
        else if (answered && ci === chosen) sr = ' <span class="sr">(' + esc(t("quiz_sr_wrong")) + ")</span>";
        return '<button type="button" class="' + cls + '" data-q="' + qi + '" data-c="' + ci + '"' + (answered ? " disabled" : "") + ">" + esc(L(c)) + sr + "</button>";
      }).join("");
      var fb = answered
        ? '<p class="q-fb ' + (chosen === q.answer ? "ok" : "no") + '" tabindex="-1" id="qfb-' + qi + '"><strong>' + esc(t(chosen === q.answer ? "quiz_correct" : "quiz_wrong")) + "</strong> " + fmt(L(q.why)) + "</p>"
        : "";
      return '<fieldset class="q"><legend><span class="q-num">' + (qi + 1) + "</span>" + esc(L(q.q)) + "</legend>" +
        '<div class="q-choices">' + btns + "</div>" + fb + "</fieldset>";
    }).join("");
  };

  R.sources = function () {
    var ids = Object.keys(SOURCES).sort(function (a, b) {
      var A = SOURCES[a].outlet.toLowerCase(), B = SOURCES[b].outlet.toLowerCase();
      return A === B ? (SOURCES[a].date < SOURCES[b].date ? -1 : 1) : (A < B ? -1 : 1);
    });
    return ids.map(function (id) {
      var s = SOURCES[id];
      var name = s.url ? '<a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.outlet) + "</a>" : esc(s.outlet);
      var used = Object.keys(usage[id] || {}).map(function (sec) {
        return '<a href="#' + sec + '">' + esc(t(SECTION_NAV[sec] || sec)) + "</a>";
      }).join(", ");
      return '<li id="src-' + id + '"><span class="src-name">' + name + "</span>" +
        (s.note ? ' <span class="src-note">' + esc(L(s.note)) + "</span>" : "") +
        ' <span class="src-date">' + (s.date ? esc(s.date) : '<em class="tbc">' + esc(t("src_date_tbc")) + "</em>") + "</span>" +
        (s.url ? "" : ' <em class="tbc">· ' + esc(t("src_no_link")) + "</em>") +
        (used ? '<span class="src-used">' + esc(t("src_cited_in")) + " " + used + "</span>" : "") + "</li>";
    }).join("");
  };

  /* ---------- render everything ---------- */
  function renderAll() {
    usage = {};
    document.documentElement.lang = state.lang === "fil" ? "fil" : "en";
    document.title = t("site_title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      currentSection = (el.closest("section[id]") || {}).id || null;
      el.innerHTML = fmt(t(el.getAttribute("data-i18n")));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-asof]").forEach(function (el) { el.textContent = L(window.AS_OF); });
    document.querySelectorAll("[data-badge]").forEach(function (el) { el.textContent = t("badge_" + el.getAttribute("data-badge")); });

    // render lists; sources must come last so "Cited in" is complete
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-render]"));
    targets.sort(function (a, b) { return (a.getAttribute("data-render") === "sources") - (b.getAttribute("data-render") === "sources"); });
    targets.forEach(function (el) {
      var spec = el.getAttribute("data-render").split(":");
      currentSection = (el.closest("section[id]") || {}).id || null;
      if (spec[0] === "sources") currentSection = null;
      el.innerHTML = R[spec[0]](spec[1]);
    });
    document.querySelectorAll("[data-cite]").forEach(function (el) {
      currentSection = (el.closest("section[id]") || {}).id || null;
      el.innerHTML = citeHTML(el.getAttribute("data-cite"));
    });
    // re-render sources now that data-cite usage is recorded
    currentSection = null;
    document.querySelector('[data-render="sources"]').innerHTML = R.sources();

    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === state.lang));
    });
    addCopyButtons();
    applyGlossFilter();
    updateQuizResult();
    updateThemeLabel();
  }

  /* ---------- copy link ---------- */
  function linkFor(id) {
    var base = location.href.split("#")[0].split("?")[0];
    return base + (state.lang === "fil" ? "?lang=fil" : "") + "#" + id;
  }
  function addCopyButtons() {
    var heads = document.querySelectorAll(".sec-head, .theme-title, #questions");
    heads.forEach(function (h) {
      var target = h.classList.contains("sec-head") ? h.closest("section") : (h.closest(".theme") || h);
      if (!target || !target.id) return;
      var old = h.querySelector(".copy");
      if (old) old.remove();
      var b = document.createElement("button");
      b.type = "button";
      b.className = "copy";
      b.setAttribute("data-copy", target.id);
      b.setAttribute("aria-label", t("copy_link"));
      b.title = t("copy_link");
      b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="copy-txt">' + esc(t("copy_link")) + "</span>";
      h.appendChild(b);
    });
  }
  function copyText(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    return new Promise(function (res, rej) {
      var ta = document.createElement("textarea");
      ta.value = txt; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? res() : rej(); } catch (e) { rej(e); }
      ta.remove();
    });
  }
  var toastTimer;
  function toast(msg) {
    var el = document.querySelector(".toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 1800);
  }

  /* ---------- glossary search ---------- */
  function applyGlossFilter() {
    var input = document.getElementById("glossSearch");
    var q = (input.value || "").trim().toLowerCase();
    var any = false;
    document.querySelectorAll(".gloss-item").forEach(function (it) {
      var show = !q || it.getAttribute("data-search").indexOf(q) !== -1;
      it.hidden = !show; if (show) any = true;
    });
    document.querySelector(".gloss-none").hidden = any;
  }

  /* ---------- quiz ---------- */
  function updateQuizResult() {
    var total = window.QUIZ.length, done = 0, score = 0;
    window.QUIZ.forEach(function (q, i) {
      if (state.quiz[i] != null) { done++; if (state.quiz[i] === q.answer) score++; }
    });
    var box = document.querySelector(".quiz-result");
    if (done < total) { box.innerHTML = ""; return; }
    box.innerHTML = '<p class="score">' + esc(t("quiz_score").replace("{S}", score).replace("{T}", total)) +
      '</p><button type="button" class="btn" id="quizReset">' + esc(t("quiz_reset")) + "</button>";
  }

  /* ---------- theme ---------- */
  function getTheme() { try { return localStorage.getItem("ps-theme") || "auto"; } catch (e) { return "auto"; } }
  function setTheme(v) {
    try { if (v === "auto") localStorage.removeItem("ps-theme"); else localStorage.setItem("ps-theme", v); } catch (e) {}
    if (v === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", v);
    updateThemeLabel();
  }
  function updateThemeLabel() {
    var v = getTheme();
    document.getElementById("themeLabel").textContent = t("theme_" + v);
    document.getElementById("themeBtn").setAttribute("aria-label", t("theme_label") + ": " + t("theme_" + v));
  }

  /* ---------- language ---------- */
  function initialLang() {
    var m = location.search.match(/[?&]lang=(en|fil)\b/);
    if (m) return m[1];
    try { var s = localStorage.getItem("ps-lang"); if (s === "en" || s === "fil") return s; } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    return (nav.indexOf("fil") === 0 || nav.indexOf("tl") === 0) ? "fil" : "en";
  }
  function setLang(l) {
    state.lang = l;
    try { localStorage.setItem("ps-lang", l); } catch (e) {}
    var url = location.pathname + (l === "fil" ? "?lang=fil" : "") + location.hash;
    try { history.replaceState(null, "", url); } catch (e) {}
    renderAll();
  }

  /* ---------- events (delegated) ---------- */
  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-lang]"))) { setLang(el.getAttribute("data-lang")); return; }
    if ((el = e.target.closest("#themeBtn"))) {
      var order = ["auto", "light", "dark"];
      setTheme(order[(order.indexOf(getTheme()) + 1) % 3]); return;
    }
    if ((el = e.target.closest("[data-copy]"))) {
      copyText(linkFor(el.getAttribute("data-copy"))).then(function () { toast(t("copied")); }, function () { toast(linkFor(el.getAttribute("data-copy"))); });
      return;
    }
    if ((el = e.target.closest("[data-filter]"))) {
      state.filter = el.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === el)); });
      document.querySelectorAll(".tl-item").forEach(function (li) {
        li.hidden = state.filter !== "all" && li.getAttribute("data-cat") !== state.filter;
      });
      return;
    }
    if ((el = e.target.closest(".tl-btn"))) {
      var open = el.getAttribute("aria-expanded") !== "true";
      el.setAttribute("aria-expanded", String(open));
      el.nextElementSibling.hidden = !open;
      state.openEvents[el.getAttribute("data-key")] = open;
      return;
    }
    if ((el = e.target.closest("[data-side]"))) {
      state.side = el.getAttribute("data-side");
      document.getElementById("sidesGrid").setAttribute("data-show", state.side);
      document.querySelectorAll("[data-side]").forEach(function (b) { b.setAttribute("aria-pressed", String(b === el)); });
      return;
    }
    if ((el = e.target.closest(".q-choice"))) {
      var qi = +el.getAttribute("data-q");
      if (state.quiz[qi] != null) return;
      state.quiz[qi] = +el.getAttribute("data-c");
      var holder = document.querySelector('[data-render="quiz"]');
      currentSection = "quiz";
      holder.innerHTML = R.quiz();
      updateQuizResult();
      var fb = document.getElementById("qfb-" + qi);
      if (fb) fb.focus({ preventScroll: true });
      return;
    }
    if ((el = e.target.closest("#quizReset"))) {
      state.quiz = {};
      currentSection = "quiz";
      document.querySelector('[data-render="quiz"]').innerHTML = R.quiz();
      updateQuizResult();
      var firstChoice = document.querySelector(".q-choice");
      if (firstChoice) firstChoice.focus({ preventScroll: true });
      document.getElementById("quiz").scrollIntoView();
      return;
    }
  });

  document.getElementById("glossSearch").addEventListener("input", applyGlossFilter);

  /* keep sticky offsets in sync with the real header height */
  function setHeadH() {
    var h = document.querySelector(".topbar").offsetHeight;
    document.documentElement.style.setProperty("--head-h", h + "px");
  }
  window.addEventListener("resize", setHeadH);

  /* ---------- start ---------- */
  state.lang = initialLang();
  setHeadH();
  renderAll();
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      var jump = function () { target.scrollIntoView({ behavior: "instant", block: "start" }); };
      requestAnimationFrame(jump);
      window.addEventListener("load", jump, { once: true });
    }
  }
})();
