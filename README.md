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

Last checked November 5, 2026, using web search only. The State Department, Wikipedia and US Embassy pages could not be opened directly from the build environment, so the items below still need a primary-source check.

### Resolved or partly resolved (already updated on the site)

- **Second summit date**: several reports (Digital Policy Alert, BHFS) say **June 25–26, 2026**, not June 27. The site now says June 25–26.
- **The 10 June signatories**: Argentina, Chile, Costa Rica, El Salvador, the EU, Germany, Greece, Kazakhstan, the Netherlands and Panama. The full list is now shown.
- **Founding signatories**: the ITIF timeline lists seven (US, UK, Japan, South Korea, Singapore, Israel, Australia). Other reports list them without the UK. The site shows the ITIF list and says reports differ.
- **Membership sources**: India (10th, Manorama Yearbook), the Philippines (13th, The Star), Norway (15th, Mining.com) and the June summit now have sources. Qatar and UAE dates still need one.
- **Land and communities, critics' side**: now filled with Aeta and farmer opposition (Daily Tribune, Aug 6, 2026) and residents interviewed by Radio Free Asia (Sept 22, 2026).
- **Heydarian**: the argument first appeared in his own SCMP opinion piece (June 2026); Global Times (July 14, 2026) cited it. Both are now cited.
- **Dates and links added**: Avasant (May 2026), Global Times (July 14, 2026), Inquirer energy article (July 30, 2026), and links for Manila Bulletin (Apr 24, May 18), DZRH, SunStar, Wikipedia. Extra supporting links were added for Teodoro (GMA), Tulfo (GMA), MAP (Interaksyon, July 30, 2026), BCDA's rejection of a special arrangement (BusinessWorld) and HB 11758 (Daily Tribune, Oct 26, 2026).

### Still open

1. **Signatory count**: Norway was 15th; 10 more in June would make 25, but reports say 24. Later reports also mention Italy (July 31, 2026, called the 25th) and Paraguay (Oct 23, 2026). These are **not yet on the site** — confirm against state.gov/pax-silica before adding.
2. **190,000 jobs**: the fact base credits this to President Marcos's SONA via PNA. Search results instead attribute a 130,000–190,000 range to BCDA, and no PNA article was found. Please check the PNA report or the SONA transcript.
3. **18.75 GW**: the Inquirer (July 30, 2026) says 3 GW is about 16% of Luzon's grid capacity, but doesn't state 18.75 GW (that figure is 3 ÷ 0.16). Confirm it with MAP's source.
4. **Philippines' join date**: the State Department announced it on April 16; at least one report says Rodolfo signed on April 17.
5. **Not found online**: Responsible Statecraft (Tulfo, MAP), Cielo Magno in the Inquirer, Bernard Villegas in the Manila Times (search shows him as a Manila Bulletin/BusinessWorld columnist — check which outlet), the Rappler pieces ($70 billion, IBON, KMP, July Go quote, Nov 4), the Brussels Institute for Geopolitics piece, Manorama (June), Philstar (Aug 10), Tech Pilipinas, the Manila Times editorial (Oct 4), BusinessWorld (Oct 19, Nov 4), Inquirer (Nov 3), Daily Tribune (Nov 4), PNA, SCMP on the special arrangement, and the GMA pieces on Makabayan, Kalikasan, Rodolfo and BCDA energy/water.
6. **"Resource platform" vs "satellite platform"**: still unclear which phrase came from Villegas and which from the UP study.
7. **"Business groups" in the case for**: MAP is the only business group in the sources; it is under Middle ground.
8. **Name expansions** to verify: BCDA = Bases Conversion and Development Authority; NUP = National Unity Party; DTI = Department of Trade and Industry; BOI = Board of Investments.
