# 🚀 Guida Completa Deploy su Render.com

## Configurazione: Frontend + Backend su Render, Dominio su Aruba

---

## 📋 Prerequisiti

- ✅ Codice su GitHub: `https://github.com/Andrea-Taloni/cornea-web-academy`
- ✅ Account GitHub attivo
- ✅ Dominio su Aruba (da configurare dopo)

---

## PARTE 1: DEPLOY BACKEND (Web Service)

### Step 1.1: Accedi a Render

1. Vai su **[render.com](https://render.com)**
2. Click **"Get Started"** (in alto a destra)
3. Click **"Sign in with GitHub"**
4. Autorizza Render ad accedere ai tuoi repository

### Step 1.2: Crea Web Service per Backend

1. Nella Dashboard Render, click **"New +"** (in alto a destra)
2. Seleziona **"Web Service"**

### Step 1.3: Connetti Repository

1. Trovi la lista dei tuoi repository
2. Cerca **"cornea-web-academy"**
3. Click **"Connect"** accanto al repository

### Step 1.4: Configura il Backend

Compila i campi così:

#### **Impostazioni Base:**

| Campo | Valore |
|-------|--------|
| **Name** | `cornea-api` |
| **Region** | `Frankfurt (EU Central)` |
| **Branch** | `master` |
| **Root Directory** | `server` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

#### **Impostazioni Piano:**

| Campo | Valore |
|-------|--------|
| **Instance Type** | `Free` |

### Step 1.5: Aggiungi Environment Variables

Scroll fino alla sezione **"Environment Variables"**

Click **"Add Environment Variable"** e aggiungi queste variabili una per una:

#### Variable 1:
```
Key: MONGODB_URI
Value: mongodb+srv://talonioculistica:LOTRtesA32T@corneawebauth.bjmcj.mongodb.net/corneawebacademy?retryWrites=true&w=majority
```

#### Variable 2:
```
Key: JWT_SECRET
Value: cwa-jwt-secret-2024-secure-key
```

#### Variable 3:
```
Key: PORT
Value: 10000
```

#### Variable 4:
```
Key: NODE_ENV
Value: production
```

#### Variable 5:
```
Key: CLIENT_URL
Value: https://corneawebacademy.org
```

**Nota:** Cambia `corneawebacademy.org` con il tuo dominio reale se diverso!

### Step 1.6: Deploy!

1. Click **"Create Web Service"** (in fondo alla pagina)
2. Render inizia il deploy automaticamente
3. Vedrai log in tempo reale
4. Attendi 2-5 minuti

### Step 1.7: Verifica Backend

Quando vedi **"Live"** in verde:

1. Copia l'URL del servizio (es: `https://cornea-api.onrender.com`)
2. Aprilo nel browser aggiungendo `/api/health`
3. Dovresti vedere:
   ```json
   {
     "status": "OK",
     "message": "Server is running",
     "database": "Connected"
   }
   ```

✅ **Backend deployato con successo!**

**IMPORTANTE:** Salva questo URL, ti servirà per il frontend!

---

## PARTE 2: DEPLOY FRONTEND (Static Site)

### Step 2.1: Crea Static Site

1. Nella Dashboard Render, click **"New +"**
2. Seleziona **"Static Site"**

### Step 2.2: Connetti Repository

1. Seleziona lo stesso repository **"cornea-web-academy"**
2. Click **"Connect"**

### Step 2.3: Configura il Frontend

Compila i campi così:

#### **Impostazioni Base:**

| Campo | Valore |
|-------|--------|
| **Name** | `cornea-web-academy` |
| **Region** | `Frankfurt (EU Central)` |
| **Branch** | `master` |
| **Root Directory** | (lascia vuoto) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### Step 2.4: Aggiungi Environment Variables

Click **"Advanced"** per vedere le variabili d'ambiente.

Aggiungi queste variabili:

#### Variable 1:
```
Key: VITE_API_URL
Value: https://cornea-api.onrender.com/api
```

**IMPORTANTE:** Sostituisci con l'URL del tuo backend dallo Step 1.7!

#### Variable 2:
```
Key: VITE_YOUTUBE_API_KEY
Value: AIzaSyB59PNI8KsPzij3-W3-DiEVWzLBrtExHwI
```

#### Variable 3:
```
Key: VITE_YOUTUBE_CHANNEL_ID
Value: UCPgK4DK6PaMx_bSzbnyRArw
```

#### Variable 4:
```
Key: NODE_VERSION
Value: 18
```

### Step 2.5: Deploy!

1. Click **"Create Static Site"**
2. Render inizia il build
3. Attendi 3-5 minuti
4. Vedrai **"Live"** quando pronto

### Step 2.6: Configura Vue Router

**IMPORTANTE:** Per far funzionare le route di Vue Router:

1. Nel tuo Static Site, vai su **"Redirects/Rewrites"** (menu laterale)
2. Click **"New Redirect/Rewrite Rule"**
3. Compila:
   ```
   Source: /*
   Destination: /index.html
   Action: Rewrite
   ```
4. Click **"Save"**

### Step 2.7: Verifica Frontend

1. Click sull'URL del tuo Static Site (es: `https://cornea-web-academy.onrender.com`)
2. Dovresti vedere il tuo sito!
3. Prova a navigare tra le pagine
4. Apri console browser (F12) per verificare che non ci siano errori

✅ **Frontend deployato con successo!**

---

## PARTE 3: CUSTOM DOMAIN (Dominio Aruba)

### Step 3.1: Aggiungi Custom Domain su Render

#### Per il Frontend:

1. Vai nel tuo **Static Site** dashboard
2. Click **"Settings"** (menu laterale)
3. Scroll fino a **"Custom Domains"**
4. Click **"Add Custom Domain"**
5. Inserisci: `corneawebacademy.org`
6. Click **"Save"**
7. Ripeti per: `www.corneawebacademy.org`

Render ti mostrerà le istruzioni DNS da configurare!

#### Per il Backend (Opzionale):

Se vuoi usare `api.corneawebacademy.org` invece di `cornea-api.onrender.com`:

1. Vai nel tuo **Web Service** dashboard
2. Settings → Custom Domains
3. Aggiungi: `api.corneawebacademy.org`

**Oppure:** Lascia il backend con URL Render (funziona benissimo!)

### Step 3.2: Configura DNS su Aruba

#### Login Aruba:

1. Vai su **[admin.aruba.it](https://admin.aruba.it)**
2. Login con le tue credenziali
3. Trova il tuo dominio
4. Click **"Gestione DNS"** o **"DNS Management"**

#### Record DNS da Aggiungere:

Render ti avrà mostrato i valori esatti. Tipicamente:

**Per www.corneawebacademy.org:**
```
Type: CNAME
Name: www
Value: cornea-web-academy.onrender.com
TTL: 3600
```

**Per corneawebacademy.org (root):**
```
Type: A
Name: @ (o lascia vuoto)
Value: [IP fornito da Render]
TTL: 3600
```

**Per api.corneawebacademy.org (se usato):**
```
Type: CNAME
Name: api
Value: cornea-api.onrender.com
TTL: 3600
```

#### Salva le Modifiche DNS

1. Salva tutti i record
2. Aspetta 15-30 minuti per la propagazione DNS
3. In alcuni casi può richiedere fino a 24 ore (raro)

### Step 3.3: Verifica SSL

Dopo la propagazione DNS:

1. Render genererà automaticamente certificati SSL (Let's Encrypt)
2. Attendi altri 5-10 minuti
3. Visita `https://corneawebacademy.org`
4. Dovresti vedere il lucchetto verde 🔒

---

## PARTE 4: AGGIORNA BACKEND CORS

Ora che hai il dominio configurato, aggiorna il CORS del backend:

### Step 4.1: Modifica Locale

Apri `server/server.js` e trova la sezione CORS (circa linea 12):

**Sostituisci:**
```javascript
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
```

**Con:**
```javascript
app.use(cors({
  origin: [
    'http://localhost:5173', // Sviluppo locale
    'https://corneawebacademy.org', // Produzione
    'https://www.corneawebacademy.org', // Produzione con www
    'http://corneawebacademy.org', // Fallback HTTP
    'http://www.corneawebacademy.org' // Fallback HTTP www
  ],
  credentials: true
}));
```

### Step 4.2: Push su GitHub

```bash
git add server/server.js
git commit -m "Update CORS for production domain"
git push origin master
```

### Step 4.3: Rideploy Automatico

Render rileva il push automaticamente e rideploya il backend!
Attendi 2-3 minuti.

---

## PARTE 5: TEST COMPLETO

### Test 1: Homepage
- Visita `https://corneawebacademy.org`
- Verifica che carichi correttamente
- ✅ Dovrebbe funzionare

### Test 2: Navigazione
- Clicca su vari link
- Prova le route (About, Contact, ecc.)
- ✅ Non dovrebbero esserci errori 404

### Test 3: API Calls
- Apri console browser (F12)
- Vai alla pagina che fa chiamate API
- Verifica che non ci siano errori CORS
- ✅ Le chiamate dovrebbero funzionare

### Test 4: Login/Register
- Prova a registrare un nuovo utente
- Prova a fare login
- ✅ Dovrebbe funzionare

### Test 5: Console Errors
- Apri console (F12)
- Cerca errori in rosso
- ✅ Non dovrebbero esserci errori bloccanti

---

## 🔄 AGGIORNAMENTI FUTURI

### Come Aggiornare il Sito

Ogni volta che vuoi deployare modifiche:

```bash
# 1. Fai le modifiche al codice
# 2. Testa in locale
npm run dev

# 3. Commit e push
git add .
git commit -m "Descrizione modifiche"
git push origin master

# 4. Render rideploya automaticamente!
# - Backend: se modifichi /server
# - Frontend: se modifichi altre parti
```

**Nessun'altra azione necessaria!** 🎉

---

## 🛠️ TROUBLESHOOTING

### Problema: "Backend non risponde"

**Soluzione:**
1. Vai su Render Dashboard → Web Service
2. Click "Logs"
3. Cerca errori
4. Verifica che tutte le variabili d'ambiente siano impostate

### Problema: "Pagina bianca sul frontend"

**Soluzione:**
1. Apri console browser (F12)
2. Guarda errori
3. Verifica che `VITE_API_URL` sia corretto
4. Controlla Redirects/Rewrites per Vue Router

### Problema: "Errori CORS"

**Soluzione:**
1. Verifica che il CORS nel backend includa il tuo dominio
2. Fai push delle modifiche
3. Attendi rideploy (2-3 min)
4. Riprova

### Problema: "SSL/HTTPS non funziona"

**Soluzione:**
1. Verifica che DNS sia propagato (usa dnschecker.org)
2. Attendi 10-20 minuti per generazione SSL
3. In Render, vai su Settings → Custom Domains
4. Verifica che status sia "Verified"

### Problema: "Backend dorme (cold start)"

**Soluzione:**
- È normale con piano Free
- Prima richiesta dopo 15 min: 30-60 secondi
- Opzioni:
  - Accettare il cold start (gratis)
  - Upgrade a Render Pro ($7/mese)
  - Usare UptimeRobot per keep-alive

---

## 📊 DASHBOARD RENDER

### Dove Trovare Cosa:

**Backend (Web Service):**
- Logs: Vedi cosa succede in tempo reale
- Metrics: CPU, memoria, richieste
- Events: Storia deploy
- Settings: Variabili, dominio, ecc.

**Frontend (Static Site):**
- Deploys: Lista build
- Redirects/Rewrites: Per Vue Router
- Settings: Variabili, dominio, ecc.

### Comandi Utili:

**Rideploy Manuale:**
1. Vai su "Manual Deploy"
2. Click "Deploy latest commit"

**Cancellare e Rifare:**
1. Settings → "Delete Service"
2. Ricrea seguendo questa guida

---

## ✅ CHECKLIST FINALE

- [ ] Backend deployato e mostra "Live"
- [ ] Backend risponde a `/api/health`
- [ ] Frontend deployato e mostra "Live"
- [ ] Vue Router configurato (Redirects/Rewrites)
- [ ] Custom domain aggiunto su Render
- [ ] DNS configurato su Aruba
- [ ] CORS aggiornato nel backend
- [ ] SSL attivo (lucchetto verde)
- [ ] Sito accessibile via `https://tuodominio.org`
- [ ] Login/Register funzionanti
- [ ] Nessun errore in console

---

## 🎉 COMPLIMENTI!

Hai deployato con successo il tuo sito full-stack su Render!

**Setup Finale:**
```
✅ Frontend (Vue.js) → Render Static Site
✅ Backend (Node.js) → Render Web Service
✅ Database → MongoDB Atlas
✅ Dominio → Aruba DNS → Render
✅ SSL → Let's Encrypt (automatico)
✅ Deploy → Automatico da Git push
```

**Costo Totale: €0/mese** (con piano Free)

---

## 📞 SUPPORTO

Se hai problemi:
1. Controlla i Logs su Render
2. Verifica DNS con dnschecker.org
3. Controlla console browser (F12)
4. Rileggi la sezione Troubleshooting

---

**Buon deploy! 🚀**
