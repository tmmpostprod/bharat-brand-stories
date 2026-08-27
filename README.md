# Bharat Brand Stories

An immersive, high-performance web portal celebrating the legendary journeys of 15 iconic Indian founders and enterprises on Republic Bharat.

---

## 🚀 Features

- **Cinematic Experience**: 90-frame high-resolution logo animation sequence.
- **Interactive Founder Hub**: Filtering by sector (DeepTech, Agritech, CleanTech, D2C/FMCG, Manufacturing).
- **Nomination & Partner Submission Modals**: Interactive modals with client-side form validation.
- **Hostinger Ready**: Includes pre-configured `.htaccess`, `robots.txt`, and `sitemap.xml`.

---

## 🛠 Local Development & Preview

To preview the portal locally using Node.js:

```bash
# Start local static server
npm start
```

Or open `index.html` directly in any web browser.

---

## 🌐 Deploying to Hostinger

Hostinger supports hosting static websites through several flexible methods.

### Method 1: Hostinger Git Auto-Deployment (Recommended)

1. Log in to **Hostinger hPanel**.
2. Navigate to **Websites** -> Select your website domain -> **Git**.
3. Under **Create a New Repository**:
   - **Repository URL**: `https://github.com/tmmpostprod/bharat-brand-stories.git`
   - **Branch**: `main`
   - **Install Directory**: leave as `public_html`
4. Click **Create**.
5. Once created, click **Auto Deployment** to automatically update your live site whenever you push changes to GitHub!

---

### Method 2: Hostinger File Manager Upload

1. Log in to **Hostinger hPanel**.
2. Open **File Manager**.
3. Navigate to the `public_html/` folder.
4. Drag and drop all files from this project directory into `public_html/`.
5. Ensure `index.html` and `.htaccess` are directly inside `public_html/`.

---

### Method 3: FTP / SFTP Deployment

1. Retrieve your FTP credentials from **Hostinger hPanel** -> **Files** -> **FTP Accounts**.
2. Connect using an FTP client (FileZilla, Cyberduck, etc.).
3. Upload all files into the `public_html` directory.

---

## 📂 Project Structure

```
.
├── index.html            # Primary web application & interactive portal
├── code.html             # Extended components & layout reference
├── DESIGN.md             # Design tokens & color system documentation
├── .htaccess             # Apache/LiteSpeed caching, Gzip & security rules
├── robots.txt            # Search engine crawler permissions
├── sitemap.xml           # SEO sitemap
├── package.json          # Node.js project metadata & preview scripts
├── assets/
│   ├── logo-frames/      # 90 image frames for interactive logo animation
│   ├── founder_*.jpg     # Founder profile photos
│   └── ep*.jpg           # Episode highlight hero images
└── src/
    ├── components/       # TypeScript / React component modals
    └── data/             # Structured partnership & episode data
```

---

## 📜 License

Private & Proprietary - Bharat Brand Stories / Republic Bharat.
