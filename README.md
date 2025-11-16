
## Features

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
