# Shikona Dictionary

Sumo wrestler shikona dictionaries for Google Japanese Input and Microsoft IME.

Parent project: [dai/o-sumo](https://github.com/dai/o-sumo)

Download the latest files from [Releases](https://github.com/dai/shikona/releases/latest).

## Files

- `rikishi_20260703.txt`: Google Japanese Input user dictionary text.
- `rikishi_20260703.dic`: Microsoft IME system dictionary.

## Google Japanese Input import

1. Download `rikishi_20260703.txt` from the latest release.
2. Open Google Japanese Input properties.
3. Open `Dictionary`, then `User dictionary`.
4. Select the dictionary where you want to import the shikona entries.
5. Open `Tools`, then choose `Import from selected dictionary`.
6. Select `rikishi_20260703.txt`.
7. Keep the file format as Google Japanese Input text format.
8. Run the import and confirm that the shikona entries were added.

The text file uses three tab-separated columns: word, reading, and type.

## Microsoft IME import

1. Download `rikishi_20260703.dic` from the latest release.
2. Open Windows Settings.
3. Go to `Time & language`, then `Language & region`.
4. Open Japanese language options.
5. Open Microsoft IME keyboard options.
6. Open `Dictionary and learning`, then `System dictionaries`.
7. Add `rikishi_20260703.dic`.
8. Enable the added dictionary and confirm that shikona conversion works.

The `.dic` file is distributed as a Microsoft IME dictionary file. If your Windows UI labels differ, search Windows Settings for `Microsoft IME` and open the system dictionary settings from there.

## Development

```bash
pnpm install
pnpm dev
pnpm build
```

GitHub Pages deployment is handled by `.github/workflows/pages.yml`.
