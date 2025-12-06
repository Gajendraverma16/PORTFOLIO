# Project Architecture

## Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with smooth scroll
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── favicon.ico
│
├── components/
│   ├── canvas/                  # 3D/WebGL Components (Client-side only)
│   │   ├── Scene.tsx           # Main Canvas wrapper
│   │   ├── FloatingSphere.tsx  # Animated 3D sphere
│   │   └── Stars.tsx           # Particle starfield
│   │
│   ├── layout/                  # Layout Components
│   │   ├── SmoothScrollWrapper.tsx  # Lenis smooth scroll
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer section
│   │
│   └── ui/                      # UI Components
│       ├── Hero.tsx            # Hero section
│       ├── Works.tsx           # Projects section
│       └── ProjectCard.tsx     # Individual project card
│
├── hooks/                       # Custom React Hooks
│   └── useWindowSize.ts        # Window size hook
│
└── lib/                         # Utilities & Constants
    ├── constants.ts            # Site config, projects data
    └── animations.ts           # Framer Motion variants
```

## Key Architecture Decisions

### 1. Separation of Concerns
- **canvas/**: All Three.js/R3F components isolated for lazy loading
- **ui/**: Pure DOM components with no 3D dependencies
- **layout/**: Structural components (nav, footer, wrappers)

### 2. Performance Optimizations
- 3D Scene is lazy-loaded with `next/dynamic` (SSR disabled)
- Path aliases (`@/`) for clean imports
- Three.js transpiled in next.config.ts

### 3. Data Management
- All content centralized in `lib/constants.ts`
- Animation variants reusable from `lib/animations.ts`

### 4. Styling
- Tailwind CSS for utility-first styling
- Dark theme (#000000 background)
- Custom selection colors (indigo)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: React Three Fiber + Drei
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## Running the Project

```bash
npm run dev
```

Visit `http://localhost:3000`

## Adding New Projects

Edit `src/lib/constants.ts`:

```typescript
export const PROJECTS = [
  {
    id: 5,
    title: 'YOUR PROJECT',
    category: 'Category',
    year: '2024',
    description: 'Description here',
  },
];
```
