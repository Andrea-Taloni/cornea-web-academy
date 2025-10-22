# 🚀 Deployment Guide - Cornea Web Academy

## Architecture

- **Frontend**: Cloudflare Pages (Static hosting)
- **Backend**: Render.com or Railway.app (Node.js + Express)
- **Database**: MongoDB Atlas (Already configured)
- **Domain**: www.corneawebacademy.org

---

## 📦 Step 1: Deploy Backend to Render.com

### 1.1 Prepare Backend for Production

The backend is already configured in the `server/` folder.

### 1.2 Deploy to Render

1. Go to [render.com](https://render.com) and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `cornea-web-academy`
4. Configure:
   - **Name**: `cornea-web-academy-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables (in Render dashboard):
   ```
   MONGODB_URI=mongodb+srv://talonioculistica:LOTRtesA32T@corneawebauth.bjmcj.mongodb.net/corneawebacademy?retryWrites=true&w=majority
   JWT_SECRET=cwa-jwt-secret-2024-secure-key
   PORT=10000
   NODE_ENV=production
   ```

6. Click **"Create Web Service"**

7. **IMPORTANT**: Copy your backend URL (e.g., `https://cornea-web-academy-api.onrender.com`)

### Alternative: Railway.app

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your repository
4. Add same environment variables as above
5. Railway will auto-detect and deploy

---

## 🌐 Step 2: Deploy Frontend to Cloudflare Pages

### 2.1 Build Test (Optional)

Test the build locally first:

```bash
npm run build
```

This creates a `dist/` folder with production files.

### 2.2 Deploy to Cloudflare Pages

#### Method 1: Using Cloudflare Dashboard (Recommended for first deploy)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository: `cornea-web-academy`
4. Configure build settings:
   - **Project name**: `cornea-web-academy`
   - **Production branch**: `master`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

5. **Environment variables** (Click "Add variable"):
   ```
   VITE_API_URL = https://your-backend-url.onrender.com/api
   VITE_YOUTUBE_API_KEY = AIzaSyB59PNI8KsPzij3-W3-DiEVWzLBrtExHwI
   VITE_YOUTUBE_CHANNEL_ID = UCPgK4DK6PaMx_bSzbnyRArw
   NODE_VERSION = 18
   ```

6. Click **"Save and Deploy"**

#### Method 2: Using Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx wrangler pages deploy dist --project-name=cornea-web-academy
```

---

## 🔗 Step 3: Configure Custom Domain

### 3.1 In Cloudflare Pages Dashboard

1. Go to your Pages project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter: `www.corneawebacademy.org`
4. Cloudflare will automatically configure DNS if domain is on Cloudflare

### 3.2 Add Root Domain (Optional)

1. Add another custom domain: `corneawebacademy.org`
2. Set up redirect from root to www

---

## ✅ Step 4: Verify Deployment

### 4.1 Check Frontend

Visit: `https://www.corneawebacademy.org`

### 4.2 Check Backend

Visit: `https://your-backend-url.onrender.com/api/health` (if you add a health endpoint)

### 4.3 Test Login

1. Go to Login page
2. Try to register/login
3. Check browser console for any errors

---

## 🔧 Troubleshooting

### CORS Issues

If you get CORS errors, update `server/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://www.corneawebacademy.org',
    'https://corneawebacademy.org'
  ],
  credentials: true
}));
```

### API URL Not Found

Update `.env.production` and redeploy frontend:

```
VITE_API_URL=https://your-actual-backend-url.onrender.com/api
```

---

## 🔄 Future Updates

### Deploy New Changes

#### Frontend (Cloudflare Pages)
Cloudflare Pages auto-deploys on git push to master:
```bash
git add .
git commit -m "Update frontend"
git push origin master
```

#### Backend (Render/Railway)
Render/Railway auto-deploys on git push:
```bash
git add server/
git commit -m "Update backend"
git push origin master
```

---

## 📊 Monitoring

- **Cloudflare Pages**: Analytics in Cloudflare dashboard
- **Render**: Logs and metrics in Render dashboard
- **MongoDB**: Monitor in MongoDB Atlas dashboard

---

## 💰 Cost Estimate

- **Cloudflare Pages**: FREE (unlimited bandwidth)
- **Render.com Free Tier**: FREE (with limitations: spins down after 15min inactivity)
- **MongoDB Atlas Free Tier**: FREE (512MB storage)
- **Domain**: ~$10-15/year (if renewing)

**Total monthly cost: $0** (with free tiers)

### Upgrade Options (if needed)

- **Render Pro**: $7/month (always-on, better performance)
- **Railway**: Pay-as-you-go (~$5-10/month for small apps)
- **Cloudflare Workers**: $5/month (for backend on Cloudflare)

---

## 🎯 Next Steps

1. ✅ Deploy backend to Render
2. ✅ Get backend URL
3. ✅ Update VITE_API_URL in Cloudflare Pages env vars
4. ✅ Deploy frontend to Cloudflare Pages
5. ✅ Configure custom domain
6. ✅ Test everything!

---

**Need help?** Check the logs in each platform's dashboard.
