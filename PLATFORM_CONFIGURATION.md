# EPIC RPG - Platform & Build Configuration

## 1. TARGET PLATFORM

**Primary Platform:** Web Browser (HTML5/CSS3/JavaScript)  
**Target Browsers:** Chrome, Firefox, Safari, Edge (modern versions)  
**Mobile Support:** Limited (not optimized for mobile, designed for desktop/tablet)  
**Deployment:** Manus static web hosting

---

## 2. TECHNOLOGY STACK

### 2.1 Frontend Framework
- **Language:** Vanilla JavaScript (ES6+)
- **HTML:** HTML5
- **CSS:** CSS3 with custom properties (CSS variables)
- **No Framework:** Pure vanilla JavaScript (NOT React, Vue, or Angular)
- **Build Tool:** Vite 7.1.7

### 2.2 Build Configuration

**File:** `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindPlugin from '@tailwindcss/vite'
import jxcLocPlugin from '@builder.io/vite-plugin-jsx-loc'
import manusPlugin from 'vite-plugin-manus-runtime'

export default defineConfig({
  plugins: [
    react(),
    tailwindPlugin(),
    jxcLocPlugin(),
    manusPlugin()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    middlewareMode: false
  }
})
```

**Key Settings:**
- Host: 0.0.0.0 (accessible from all interfaces)
- Port: 3000 (development server)
- Plugins: React, Tailwind, JSX location tracking, Manus runtime

### 2.3 Package Manager
- **Package Manager:** pnpm 10.4.1
- **Lock File:** pnpm-lock.yaml (exact dependency versions)
- **Node Version:** 22.13.0

---

## 3. DEPENDENCIES

### 3.1 Core Dependencies (package.json)

```json
{
  "name": "epic-rpg",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

### 3.2 Development Scripts

| Script | Purpose | Command |
|--------|---------|---------|
| `dev` | Start development server | `vite --host` |
| `build` | Build for production | `vite build && esbuild ...` |
| `start` | Run production build | `NODE_ENV=production node dist/index.js` |
| `preview` | Preview production build | `vite preview --host` |
| `check` | Type check | `tsc --noEmit` |
| `format` | Format code | `prettier --write .` |

### 3.3 Key Dependencies

**UI & Styling:**
- tailwindcss 4.1.14
- @tailwindcss/vite 4.1.3
- @tailwindcss/typography 0.5.15
- tailwind-merge 3.3.1
- tailwindcss-animate 1.0.7

**React & DOM:**
- react 19.2.1
- react-dom 19.2.1
- @vitejs/plugin-react 5.0.4

**UI Components & Forms:**
- @radix-ui/* (20+ components for accessible UI)
- react-hook-form 7.64.0
- @hookform/resolvers 5.2.2
- zod 4.1.12 (validation)

**Routing & Navigation:**
- wouter 3.3.5 (lightweight routing)
- react-resizable-panels 3.0.6

**Data & Utilities:**
- axios 1.12.0 (HTTP client)
- nanoid 5.1.5 (ID generation)
- clsx 2.1.1 (className utilities)
- class-variance-authority 0.7.1 (component variants)

**Notifications & UI Effects:**
- sonner 2.0.7 (toast notifications)
- framer-motion 12.23.22 (animations)
- vaul 1.1.2 (drawer component)
- embla-carousel-react 8.6.0 (carousel)

**Markdown & Content:**
- streamdown 1.4.0 (markdown rendering)

**Theming:**
- next-themes 0.4.6 (theme management)

**Server:**
- express 4.21.2
- @types/express 4.17.21

**Development:**
- typescript 5.6.3
- vite 7.1.7
- esbuild 0.25.0
- prettier 3.6.2
- vitest 2.1.4

---

## 4. BUILD PROCESS

### 4.1 Development Build

```bash
npm run dev
# or
pnpm dev
```

**Output:** Hot-reload development server on http://localhost:3000/

**Process:**
1. Vite starts development server
2. Serves vanilla JavaScript app from client/public/
3. Hot module replacement enabled
4. Watches for file changes

### 4.2 Production Build

```bash
npm run build
# or
pnpm build
```

**Output:** Optimized production bundle in `dist/` directory

**Process:**
1. Vite builds client-side assets
2. ESBuild bundles server code
3. Creates optimized JavaScript and CSS
4. Minifies and tree-shakes code
5. Generates sourcemaps

### 4.3 Production Start

```bash
NODE_ENV=production npm start
# or
NODE_ENV=production pnpm start
```

**Process:**
1. Sets NODE_ENV to production
2. Starts Express server from dist/index.js
3. Serves optimized assets
4. Listens on port 3000 (or PORT env var)

---

## 5. ENVIRONMENT VARIABLES

### 5.1 Manus-Injected Secrets

The following environment variables are automatically injected by Manus:

| Variable | Purpose | Example |
|----------|---------|---------|
| `BUILT_IN_FORGE_API_KEY` | Backend API authentication | (auto-injected) |
| `BUILT_IN_FORGE_API_URL` | Backend API endpoint | (auto-injected) |
| `JWT_SECRET` | JWT signing secret | (auto-injected) |
| `OAUTH_SERVER_URL` | OAuth server URL | (auto-injected) |
| `OWNER_NAME` | Project owner name | (auto-injected) |
| `OWNER_OPEN_ID` | Owner OpenID | (auto-injected) |
| `VITE_ANALYTICS_ENDPOINT` | Analytics service endpoint | (auto-injected) |
| `VITE_ANALYTICS_WEBSITE_ID` | Analytics website ID | (auto-injected) |
| `VITE_APP_ID` | Application ID | (auto-injected) |
| `VITE_APP_LOGO` | App logo URL | (auto-injected) |
| `VITE_APP_TITLE` | Application title | "EPIC RPG" |
| `VITE_FRONTEND_FORGE_API_KEY` | Frontend API key | (auto-injected) |
| `VITE_FRONTEND_FORGE_API_URL` | Frontend API URL | (auto-injected) |
| `VITE_OAUTH_PORTAL_URL` | OAuth portal URL | (auto-injected) |

### 5.2 Custom Environment Variables

**None currently configured.** Application is fully client-side with localStorage persistence.

---

## 6. FILE STRUCTURE

```
epic-rpg/
├── client/
│   ├── index.html                    (HTML entry point)
│   ├── public/
│   │   ├── epic-rpg-app.js          (Main application - 1268 lines)
│   │   ├── epic-rpg-style.css       (All styling - 1100+ lines)
│   │   ├── avatars/                 (80 avatar PNG files)
│   │   ├── badges/                  (8 badge ore icons)
│   │   ├── animations/              (3 tier celebration frames)
│   │   └── __manus__/
│   │       └── debug-collector.js   (Manus debug utility)
│   └── src/                          (React template - NOT USED)
├── server/
│   └── index.ts                      (Express server)
├── shared/
│   └── const.ts                      (Shared constants)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── pnpm-lock.yaml
└── dist/                             (Production build output)
    ├── index.js                      (Server bundle)
    └── public/                       (Client assets)
```

---

## 7. DEPLOYMENT

### 7.1 Manus Hosting

**Platform:** Manus Static Web Hosting  
**URL:** https://3000-iqj5nwbaqz4jtwzu8mz99-318c2387.sg1.manus.computer  
**Auto-Generated Domain:** {project-name}.manus.space  
**Custom Domain:** Configurable through Manus UI

### 7.2 Deployment Process

1. **Create Checkpoint:** Save project state via `webdev_save_checkpoint`
2. **Click Publish:** Use Publish button in Manus UI
3. **Automatic Build:** Manus builds and deploys automatically
4. **Live:** Application available at assigned URL

### 7.3 Build Configuration for Deployment

**Vite Output:**
- Client assets: `dist/public/`
- Server bundle: `dist/index.js`
- Static files served with aggressive caching
- Content hash in filenames for cache busting

---

## 8. RUNTIME ENVIRONMENT

### 8.1 Browser Runtime
- **JavaScript Engine:** V8 (Chrome) or equivalent
- **DOM API:** Full HTML5 DOM support
- **Storage:** localStorage (5-10MB per domain)
- **Features Used:** localStorage, fetch API, Date API, Math API

### 8.2 Server Runtime (Production)
- **Node.js Version:** 22.13.0 (or compatible)
- **Runtime:** Node.js
- **Process Manager:** Manus runtime
- **Port:** 3000 (or PORT env var)

---

## 9. PERFORMANCE CONSIDERATIONS

### 9.1 Asset Optimization
- **Images:** PNG format, 64x64px avatars (optimized)
- **CSS:** Minified in production, ~35KB
- **JavaScript:** Minified in production, ~45KB
- **Total Size:** ~53MB with all assets

### 9.2 Caching Strategy
- **Static Assets:** Aggressive caching with content hash
- **localStorage:** Persistent across sessions
- **No API Calls:** All data client-side (no network latency)

### 9.3 Performance Metrics
- **Initial Load:** < 2 seconds (depends on network)
- **Tab Switching:** Instant (no network calls)
- **Data Operations:** Instant (in-memory)
- **Timer Updates:** Real-time (JavaScript setInterval)

---

## 10. SECURITY CONSIDERATIONS

### 10.1 Data Security
- **Storage:** localStorage (same-origin only)
- **No Transmission:** All data stays in browser
- **No Backend:** No server-side processing
- **No Authentication:** Not required (local use)

### 10.2 Vulnerabilities
- **XSS:** Minimal risk (vanilla JS, no dynamic HTML injection)
- **CSRF:** Not applicable (no server requests)
- **Data Exposure:** Limited to local device
- **NFC:** Currently not implemented in web version

---

## 11. KNOWN LIMITATIONS

### 11.1 Technical Limitations
- **No Cloud Sync:** Data only persists locally
- **No Multi-Device:** Cannot sync across devices
- **No Backup:** No automatic backup system
- **No Export:** No built-in export functionality
- **No API:** No external API integration
- **No Database:** All data in localStorage

### 11.2 Browser Limitations
- **Storage Limit:** ~5-10MB per domain (localStorage)
- **No Offline:** Requires initial load (then works offline)
- **No Background Sync:** No service worker
- **No Notifications:** No push notifications

---

## 12. DEPLOYMENT CHECKLIST

- [x] All source files present
- [x] All assets included (avatars, badges, animations)
- [x] package.json configured
- [x] vite.config.ts configured
- [x] pnpm-lock.yaml for exact versions
- [x] Development server tested
- [x] Production build tested
- [x] All features validated
- [x] Data persistence verified
- [x] UI responsive verified

---

## 13. RECONSTRUCTION INSTRUCTIONS

To reconstruct this project in another Manus account:

1. **Initialize Project:** Create new web-static project in Manus
2. **Copy Files:** Copy all files from SOURCE_FILE_TREE.txt
3. **Install Dependencies:** `pnpm install --frozen-lockfile`
4. **Verify Build:** `pnpm build` (should succeed)
5. **Start Dev Server:** `pnpm dev` (should run on port 3000)
6. **Test Features:** Verify all functionality matches FUNCTIONAL_VALIDATION_WALKTHROUGH.md
7. **Deploy:** Create checkpoint and publish via Manus UI

---

## 14. SUPPORT & TROUBLESHOOTING

### Issue: Dev server won't start
**Solution:** Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`

### Issue: localStorage data lost
**Solution:** Data persists in browser storage - clear browser cache to reset

### Issue: Timer not updating
**Solution:** Refresh page to see updated timer values

### Issue: Avatars not loading
**Solution:** Verify avatar files exist in client/public/avatars/

### Issue: Styles not applying
**Solution:** Verify epic-rpg-style.css is loaded in HTML

