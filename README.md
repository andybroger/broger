# broger.ch

Persönliche Website von **Jakob (Köbi) Broger**. Die Website wird nicht direkt
von Hand bearbeitet, sondern über Codex verwaltet.

Die aktuelle Website ist online unter:

```text
https://broger.ch
```

Der aktuelle GitHub-Stand liegt hier:

```text
https://github.com/andybroger/broger
```

Codex liest beim Öffnen dieses Projekts automatisch [`AGENTS.md`](./AGENTS.md).
Dort stehen alle technischen Anweisungen, damit Codex die Website korrekt
ändern, lokal prüfen und veröffentlichen kann.

## Website mit Codex bearbeiten

Du musst nicht wissen, wie Programmierung, Git oder GitHub Pages funktionieren.
Sag Codex einfach in normaler Sprache, was geändert werden soll.

## Erste Einrichtung

1. Installiere die Codex-App für macOS oder Windows von OpenAI.
2. Öffne Codex und melde dich mit deinem ChatGPT-Konto an.
3. Wähle in Codex **Open project** oder **Select a project folder** und dann
   einen normalen Ort für deine Websites, zum Beispiel `Documents` oder `Sites`.
4. Sende Codex diese Nachricht:

   ```text
   Klone https://github.com/andybroger/broger.git in einen Ordner namens broger-site.
   Wenn das erledigt ist, sag mir, dass ich diesen Ordner als Projekt öffnen soll.
   ```

5. Wenn Codex meldet, dass das Klonen fertig ist, öffne oder wechsle in Codex
   zum neuen Ordner `broger-site`.
6. Sende danach zum Start zum Beispiel diese Nachricht:

   ```text
   Lies die Anweisungen, prüfe ob Node.js und npm auf diesem Computer bereit sind, installiere die Projekt-Abhängigkeiten und sag mir danach, was diese Website ist und wie du sie aktualisieren würdest.
   ```

Codex soll die lokale Einrichtung automatisch erledigen. Falls auf deinem
Computer noch etwas fehlt, zum Beispiel Node.js, soll Codex dir genau sagen, was
du installieren musst.

## Änderungen beauftragen

Schreibe deine Wünsche in normaler Sprache. Gute Beispiele:

- `Aktualisiere die Biografie mit diesem neuen Text: ...`
- `Füge diesen Sponsor und dieses Logo hinzu.`
- `Ersetze das grosse Startbild durch dieses Bild.`
- `Füge ein neues Resultat in die Resultattabelle ein.`
- `Prüfe die Website, baue sie, veröffentliche sie und sag mir, wenn sie live ist.`

## Lokal prüfen, bevor du veröffentlichst

Wenn du die Änderung zuerst ansehen möchtest, sag Codex:

```text
Mach diese Änderung, starte danach die lokale Vorschau und gib mir den Link. Bitte noch nicht veröffentlichen.
```

Codex startet dann die Website lokal und gibt dir einen Link wie
`http://localhost:4321`. Öffne diesen Link im Browser und prüfe die Änderung.
Wenn etwas noch nicht stimmt, beschreibe Codex einfach, was anders sein soll.

## Veröffentlichen

Wenn die Vorschau gut aussieht, sag Codex:

```text
Die Vorschau passt. Baue die Website, veröffentliche sie und sag mir, wenn sie live ist.
```

Codex prüft die Website, veröffentlicht die Änderung und wartet, bis GitHub Pages
fertig ist. Erst danach ist die Änderung online sichtbar.

- Live-Domain: `https://broger.ch`
- GitHub-Repo: `https://github.com/andybroger/broger`

Wichtig: Das Repository muss für GitHub Pages in dieser Konfiguration öffentlich
bleiben. Wenn es privat gemacht wird, wird `broger.ch` über GitHub Pages nicht
mehr korrekt ausgeliefert. Für ein privates Repository müsste später ein anderer
Hoster wie Cloudflare Pages, Netlify oder Vercel verwendet werden.

## Was Codex braucht

- Für Textänderungen: füge den genauen Text ein oder beschreibe die Idee und
  bitte Codex, den Text auf Deutsch mit Schweizer Schreibweise zu formulieren.
- Für Fotos: gib Codex die Bilddatei und sage, wo das Bild erscheinen soll.
- Für Sponsorenlogos: gib Codex die Logodatei, den Sponsornamen und falls
  vorhanden die Website.
- Wenn du unsicher bist: bitte Codex, die Änderung zuerst lokal zu zeigen, bevor
  sie veröffentlicht wird.

## Für andere KI-Assistenten

Dieses Repository ist die Quelle der Wahrheit. Bitte keine Inhalte aus alten
temporären Ordnern oder Repositories übernehmen. Die wichtigsten Inhalte stehen
in `src/data/site.js`; Fotos stehen in `src/assets/photos/`; Sponsorenlogos in
`public/images/logos/`. Vor dem Veröffentlichen immer `npm run build` ausführen.
