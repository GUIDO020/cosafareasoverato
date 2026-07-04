# Cosa Fare a Soverato

Sito statico (HTML/CSS/JS puro, nessuna build) per promuovere eventi, serate e attività
turistiche a Soverato. Ottimizzato per SEO, mobile-first, pensato per essere aggiornato
ogni settimana anche da chi non scrive codice.

## Struttura

```
index.html      → tutto il contenuto della pagina (eventi, sezioni, form)
css/style.css   → stile grafico
js/main.js      → menu mobile, animazioni, anno automatico nel footer
images/         → metti qui le foto reali (og-cover.jpg, logo.png, ecc.)
robots.txt      → indica ai motori di ricerca cosa indicizzare
sitemap.xml     → mappa del sito per Google
```

## Come aggiornare gli eventi del weekend

In `index.html`, cerca la sezione `<section class="section" id="weekend">`.
Ogni evento è un blocco così:

```html
<article class="event-card">
  <span class="badge badge-hot">🔥 Consigliato</span>
  <p class="event-day">VENERDÌ · 22:30</p>
  <h3>Nome dell'evento</h3>
  <p class="event-venue">📍 Nome del locale</p>
  <p class="event-desc">Descrizione breve e accattivante.</p>
  <div class="event-tags"><span>#tag1</span><span>#tag2</span></div>
  <a href="LINK_POST_INSTAGRAM" class="event-link">Vedi il post Instagram →</a>
</article>
```

Per aggiungere un evento: copia un intero blocco `<article>...</article>` e cambia solo
il testo. Per rimuoverne uno: cancella il blocco. Badge disponibili:
`badge-hot` (🔥 Consigliato), `badge-new` (🆕 Novità), `badge-free` (🎟️ Ingresso Gratuito).

## Come aggiornare il programma della settimana

Sezione `id="settimana"`: ogni giorno è un blocco `<div class="day-row">...</div>`
con dentro delle `<span class="pill">Testo evento</span>`. Usa `pill-hot` per evidenziare
gli eventi più importanti del giorno.

## Come collegare il Google Form per i locali

1. Crea un Google Form con i campi che ti servono (nome locale, tipo di evento, data,
   orario, descrizione, contatto, link Instagram del post).
2. Nel form, clicca sui tre puntini in alto a destra → **Incorpora HTML**.
3. Copia il valore dell'attributo `src` dell'iframe che ti viene mostrato.
4. In `index.html`, cerca `INSERISCI_QUI_ID_FORM` (sezione `id="locali"`) e sostituisci
   l'intero `src="..."` con quello copiato.
5. Le risposte arriveranno automaticamente in un Google Sheet collegato al form.

Quando in futuro vorrai introdurre un pricing, potrai aggiungere una seconda sezione
con i pacchetti a pagamento senza toccare il resto del sito.

## Come aggiungere contenuti da Instagram

Sezione `id="instagram"`: ogni post è un blocco:

```html
<a href="LINK_DEL_POST" target="_blank" rel="noopener" class="ig-card">
  <div class="ig-thumb ig-thumb-1">🌅</div>
  <p>Didascalia breve</p>
</a>
```

Per ora usa emoji/colori come copertina veloce. Se vuoi immagini vere: sostituisci
`<div class="ig-thumb ig-thumb-1">🌅</div>` con `<img src="images/post1.jpg" alt="...">`
e carica la foto nella cartella `images/`.

## Come pubblicare il sito online (gratis)

**Opzione consigliata — GitHub Pages:**
1. Crea un account su [github.com](https://github.com) e una repository (es. `cosa-fare-a-soverato`).
2. Carica tutti i file di questa cartella nella repository.
3. Vai in *Settings → Pages*, seleziona il branch principale come sorgente.
4. Il sito sarà online su `https://tuonome.github.io/cosa-fare-a-soverato/` in pochi minuti.
5. Puoi collegare un dominio personalizzato (es. `cosafareasoverato.it`) dalle impostazioni di Pages.

**Alternativa — Netlify:** trascina la cartella del sito su [app.netlify.com/drop](https://app.netlify.com/drop) e ottieni un link online in pochi secondi.

⚠️ Prima di pubblicare, sostituisci ovunque `https://www.cosafareasoverato.it/` (in
`index.html`, `robots.txt`, `sitemap.xml`) con il dominio reale che userai.

## Checklist SEO prima del lancio

- [ ] Sostituire il dominio placeholder in tutti i file
- [ ] Caricare `images/og-cover.jpg` (immagine di anteprima per condivisioni social, 1200×630px)
- [ ] Caricare `images/logo.png`
- [ ] Verificare titolo e descrizione in `<head>` di `index.html`
- [ ] Registrare il sito su [Google Search Console](https://search.google.com/search-console) e inviare `sitemap.xml`
- [ ] Aggiornare `sitemap.xml` → `<lastmod>` ogni volta che pubblichi contenuti nuovi
- [ ] Collegare Google Analytics (facoltativo, per capire quanti visitatori arrivano dal weekend recap)

## Aggiornamento settimanale (routine consigliata)

Ogni giovedì: aggiorna la sezione Weekend, aggiorna il programma della Settimana,
aggiungi i nuovi post Instagram, controlla le nuove segnalazioni arrivate dal Google
Form e pubblica gli eventi approvati.
