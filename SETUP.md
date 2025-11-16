# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── projects/page.tsx  # Projects listing page
│   ├── contact/page.tsx   # Contact page
│   ├── providers.tsx      # Chakra UI provider
│   └── template.tsx       # Page transition template
├── components/
│   ├── ui/                # UI components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── Layout.tsx
│   └── three/             # 3D components
│       ├── ThreeCanvas.tsx
│       └── Scene.tsx
├── hooks/
│   └── useReducedMotion.ts
├── lib/
│   └── motion.tsx         # Chakra + Framer Motion integration
├── theme/
│   └── index.ts           # Chakra theme configuration
└── data/
    └── projects.json      # Project data

```

## Customization

### Update Projects

Edit `src/data/projects.json` to add your projects:

```json
{
  "id": 1,
  "title": "My Project",
  "description": "Project description",
  "tags": ["React", "Next.js"],
  "image": "/images/project.jpg",
  "link": "https://example.com",
  "github": "https://github.com/username/repo"
}
```

### Change Colors

Edit `src/theme/index.ts` to customize the color palette.

### Modify 3D Scene

Edit `src/components/three/Scene.tsx` to change the 3D object, materials, or animations.

### Update Contact Info

Edit `src/app/contact/page.tsx` to update email addresses and social links.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy automatically!

Vercel will automatically detect Next.js and configure everything.

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Features Implemented

✅ Next.js 14 with App Router
✅ TypeScript configuration
✅ Chakra UI theme with custom colors
✅ Framer Motion animations
✅ React Three Fiber 3D scene
✅ Responsive design (mobile-first)
✅ Dark mode support
✅ Accessibility (prefers-reduced-motion)
✅ Page transitions
✅ Performance optimizations (intersection observer for 3D)
✅ Project cards with animations
✅ Contact form
✅ SEO-friendly structure

## Next Steps

1. Add your actual project data to `src/data/projects.json`
2. Add project images to `public/images/`
3. Customize colors in `src/theme/index.ts`
4. Update contact information
5. Add your own 3D models (optional) to `public/models/`
6. Deploy to Vercel!

## Troubleshooting

### 3D Scene Not Showing

- Check browser console for errors
- Ensure you're on a modern browser with WebGL support
- Try disabling dark mode to see if it's a contrast issue

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### TypeScript Errors

- Run `npm install` to ensure all type definitions are installed
- Check `tsconfig.json` paths are correct

