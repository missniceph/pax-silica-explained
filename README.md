# Pax Silica, Explained

A plain-language, balanced, bilingual (English / Filipino) explainer about Pax Silica and what it means for the Philippines. Made by [@missniceph](https://instagram.com/missniceph) (Nice to Know).

- Plain HTML, CSS and JavaScript. No build step, no backend.
- No tracking, no cookies, no ads, no outside fonts or scripts.
- The only thing saved in the browser is the reader's own language and light/dark choice.

## Files

| File | What it is |
|---|---|
| `index.html` | The page layout. You rarely need to touch this. |
| `js/content.js` | **All the words** on the site, in English and Filipino, plus the sources, timeline, glossary and quiz. Most edits happen here. |
| `js/app.js` | Makes the page work (language switch, timeline, quiz, copy-link). You normally don't need to edit it. |
| `css/style.css` | Colors and layout. |

## Put it online (GitHub Pages)

1. On GitHub, open the repository → **Settings** → **Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**.
3. Pick the branch (e.g. `main`) and the folder **/ (root)**, then **Save**.
4. After a minute or two the site appears at `https://<your-username>.github.io/pax-silica-explained/`.

## Preview on your computer

Open `index.html` in a browser. Or, for the "copy link" button to behave exactly like online, run this in the folder and open http://localhost:8000:

```bash
python3 -m http.server 8000
```

## How to update the "As of" date

Open `js/content.js`. Near the top:

```js
window.AS_OF = {
  en: "November 5, 2026",
  fil: "Nobyembre 5, 2026"
};
```

Change both lines. The date updates everywhere (top banner, "Still undecided", footer).

Then also check the sections that say what is current: `window.UNDECIDED` ("What's still undecided") and `window.QUESTIONS` ("Questions to watch").

## How to add a timeline event

In `js/content.js`, find `window.TIMELINE` and copy an existing event. Example:

```js
{ sort: "2026-11-17", cat: "ph",
  date: { en: "Nov 17, 2026", fil: "Nob 17, 2026" },
  title: { en: "Short headline", fil: "Maikling headline" },
  en: "One or two sentences of what happened. {{c:rappler1104}}",
  fil: "Isa o dalawang pangungusap ng nangyari. {{c:rappler1104}}" },
```

- `sort` — the date as YEAR-MONTH-DAY. Events are ordered by this. If two events share a day, add a letter (`"2026-11-17b"`).
- `cat` — `"world"` (global), `"ph"` (Philippines) or `"debate"` (statements from critics or commentators).
- Add `upcoming: true` for something that hasn't happened yet. Remove it once it happens.
- If the date is when something was *reported*, say so: `"Reported Nov 17, 2026"` / `"Naiulat Nob 17, 2026"`.
- Don't forget the comma between events.

## How to add a source

In `js/content.js`, find `window.SOURCES` and add a line:

```js
inq1117: { outlet: "Inquirer", date: "Nov 17, 2026", url: "https://..." },
```

Then cite it anywhere in the text by writing `{{c:inq1117}}`. Cite several at once with `{{c:inq1117,rappler1104}}`. The Sources section builds itself, including where each source is used.

For Chinese state media (or any label you want shown), add a note:
`note: { en: "Chinese state media", fil: "state media ng China" }`.

## How to edit translations

Every piece of text in `js/content.js` has an `en:` and a `fil:` version side by side. Change the words between the quote marks. A few tips:

- Keep the `{{c:...}}` source tags in both languages.
- Short HTML like `<strong>bold</strong>` is allowed.
- If your text contains a double quote `"`, use curly quotes “ ” instead so you don't break the file.
- Filipino style used here: conversational, short sentences, Taglish is fine. Technical words keep the English term plus a Filipino explanation, e.g. *supply chain – ang buong daan ng isang produkto mula hilaw na materyales hanggang sa tindahan*.

Headings, buttons and short paragraphs are under `window.UI`. Each one has a name (like `h_sixty`) that `index.html` uses with `data-i18n="h_sixty"`.

## Balance rules (please keep these when editing)

- Use only facts from reported sources, each with outlet and date.
- Every claim says **who** made it ("BCDA says…", "KMP argues…").
- Label each item: `type: "fact"` (what happened), `"claim"` (what someone says), or `"projection"` (a forecast or target).
- "The case for" and "The concerns" use the same themes, in the same order, with the same layout. If you add a point to one side, check whether there is a sourced point for the other.
- Label Chinese state media as such.
- No photos of real people. No verdicts.

## Shareable links

- Every section and theme has a **Copy link** button.
- Add `?lang=fil` to open the page in Filipino, e.g. `.../pax-silica-explained/?lang=fil#sides`.

## Items to confirm [confirm]

These are shown honestly on the site (e.g., "date to be confirmed") until fixed in `js/content.js`:

1. **Founding signatories** — the list was not in the fact base. The site says it is still being confirmed.
2. **Source for membership dates and counts** (Qatar, UAE, India, Philippines as 13th, Norway as 15th, June 27 summit, 24 total) — no outlet was given. Shown as "Membership figures — source to be confirmed" (`members`).
3. **Signatory count doesn't add up**: Norway was the 15th signatory; adding 10 at the June 27 summit gives 25, but the fact base says 24 total. Please check.
4. **Missing dates** for: Wikipedia; Avasant; Inquirer (location, Cielo Magno); BusinessWorld (location); Daily Tribune (legal framework, 100,000+ jobs); SCMP; SunStar; Rappler ($70 billion, IBON, KMP); GMA (Rodolfo, BCDA energy/water, Makabayan Bloc, Kalikasan); MAP (energy figures); Manila Times (Bernard Villegas); Global Times; Responsible Statecraft (Tulfo, MAP); PNA (publication date of the SONA report).
5. **Links (URLs)** for every source — none were provided. Add them in `window.SOURCES`.
6. **"Resource platform" vs "satellite platform"** — the fact base doesn't say which phrase came from Bernard Villegas and which from the UP study, so the site attributes both phrases to both together.
7. **Land and communities — critics' side**: the fact base has no specific, attributed critic statement on land or relocation. The site says so plainly in that column.
8. **"Business groups" in the case for** — the only business group in the fact base is MAP, whose view ("Proceed, but Protected") is shown under Middle ground.
9. **Name expansions** written from general knowledge, please verify: BCDA = Bases Conversion and Development Authority; NUP = National Unity Party; DTI = Department of Trade and Industry; BOI = Board of Investments; PNA, SCMP and NCIP are left as abbreviations.
