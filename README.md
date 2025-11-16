# Minimal 3D Next.js Portfolio

A minimalist, high-performant 3D portfolio website built with Next.js, React, Chakra UI, Framer Motion, and Three.js (react-three-fiber).

## Features

- ✨ **3D Scene**: Interactive Three.js scene with react-three-fiber
- 🎨 **Modern UI**: Built with Chakra UI for beautiful, accessible components
- 🎭 **Smooth Animations**: Framer Motion for delightful micro-interactions
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Respects `prefers-reduced-motion` and follows WCAG guidelines
- 🌓 **Dark Mode**: Built-in dark mode support
- ⚡ **Performance**: Optimized for speed with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Chakra UI
- **Animation**: Framer Motion
- **3D**: Three.js via `@react-three/fiber` + `@react-three/drei`
- **Language**: TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                  # Next.js app router pages
    layout.tsx
    page.tsx            # home
    projects/page.tsx
    contact/page.tsx
  components/
    ui/                 # UI components
      Button.tsx
      Header.tsx
      Footer.tsx
      Hero.tsx
      ProjectCard.tsx
      ContactForm.tsx
      Layout.tsx
    three/              # 3D components
      ThreeCanvas.tsx
      Scene.tsx
  hooks/
    useReducedMotion.ts
  lib/
    motion.tsx          # Chakra + Framer Motion integration
  theme/
    index.ts            # Chakra theme configuration
  data/
    projects.json       # Project data
```

## Customization

### Update Projects

Edit `src/data/projects.json` to add or modify projects.

### Change Colors

Update the color palette in `src/theme/index.ts`.

### Modify 3D Scene

Edit `src/components/three/Scene.tsx` to change the 3D object or animations.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project on Vercel
3. Deploy!

## License

MIT
