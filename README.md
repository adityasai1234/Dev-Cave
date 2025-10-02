
## 🚀 Features

- **Responsive Design** - Works on all devices
- **Smooth Animations** - Fade-in effects and hover animations
- **GitHub Integration** - Live GitHub stats and repository links
- **Modern UI** - Clean design with gradient backgrounds
- **Fast Loading** - Optimized for performance

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)
- GitHub API
- Vercel (Hosting)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development

```bash
# Watch CSS changes and serve locally
npm run dev

# Build for production
npm run build

# Just build CSS
npm run css:build

# Watch CSS only
npm run css:watch
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

3. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically!

### Vercel Configuration

The project includes `vercel.json` with optimal settings:
- Build command: `npm run vercel-build`
- Output directory: `./`
- Custom routes for clean URLs

## 📁 Project Structure

```
portfolio/
├── index.html          # Main landing page
├── about.html          # About me page
├── styles.css          # Compiled CSS (auto-generated)
├── tailwind.css        # Source CSS with Tailwind directives
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## 🎨 Customization

1. **Update personal info** in `index.html` and `about.html`
2. **Change GitHub username** in the API calls
3. **Modify colors** in `tailwind.config.js`

## 📱 Live Demo

Visit the live portfolio: [addyhacks.xyz]
