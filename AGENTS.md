# Zeta Tech - AGENTS.md

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans, JetBrains Mono (monospace)

### Directory Structure
```
src/
├── app/
│   ├── globals.css          # Global styles & CSS custom properties
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── TrustedBy.tsx    # Enterprise clients section
│       ├── About.tsx        # About Zeta section
│       ├── Automation.tsx   # Intelligent Automation section
│       ├── Stack.tsx        # Sovereign Intelligence Stack
│       ├── Platforms.tsx    # Purpose-built platforms
│       ├── Proof.tsx        # The Proof Behind The Platform
│       ├── Insights.tsx     # Latest Insights & System Updates
│       ├── Industries.tsx   # Different Industries section
│       └── CTA.tsx          # Call to Action section
└── lib/
    └── utils.ts             # Utility functions
```

---

## STRICT RULES

### 1. COLOR MANAGEMENT (CRITICAL)
- **NEVER use hardcoded colors** in component files
- **ALWAYS use CSS custom properties** from `globals.css`
- Reference colors via Tailwind classes: `text-primary`, `bg-background`, `text-muted-foreground`, etc.
- Available color tokens:
  - `--zeta-red`: #ED001B (Primary brand color)
  - `--zeta-dark`: #0C0C0E (Dark backgrounds)
  - `--zeta-darker`: #141416 (Card backgrounds)
  - `--zeta-border`: #1E1E20 (Borders)
  - `--zeta-gray`: #999999 (Muted text)
  - `--zeta-text`: #333333 (Dark text)
  - `--zeta-green`: #00C94F (Success/active states)
  - `--zeta-page-bg`: #F9FAFB (Page background)
  - `--zeta-white`: #FFFFFF

### 2. COMPONENT RULES
- All components must be client components (`"use client"`) when using interactivity
- Use shadcn/ui components from `@/components/ui/` when available
- Follow existing shadcn/ui patterns for new components
- Keep components modular and reusable

### 3. TYPOGRAPHY
- Use `font-heading` for headlines (Geist)
- Use `font-mono` for technical/monospace text (JetBrains Mono)
- Font sizes follow Tailwind defaults

### 4. SPACING & LAYOUT
- Max content width: `max-w-[1440px]`
- Section padding: `py-20 px-6 lg:px-[144px]`
- Component gaps: Use Tailwind spacing scale

### 5. RESPONSIVE DESIGN
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### 6. ASSET HANDLING
- Images should be placed in `public/images/`
- Use Next.js `Image` component for optimized images
- SVG icons use Lucide React

### 7. COMMIT CONVENTIONS
- Format: `type(scope): description`
- Types: feat, fix, style, refactor, docs, chore
- Example: `feat(hero): implement hero section with NOC dashboard`

---

## Design Tokens Reference

```css
:root {
  /* Brand Colors */
  --zeta-red: #ED001B;
  --zeta-red-rgb: 237, 0, 27;
  
  /* Dark Theme */
  --zeta-dark: #0C0C0E;
  --zeta-darker: #141416;
  --zeta-border: #1E1E20;
  
  /* Light Theme */
  --zeta-page-bg: #F9FAFB;
  --zeta-white: #FFFFFF;
  
  /* Text Colors */
  --zeta-text: #333333;
  --zeta-text-light: #555555;
  --zeta-gray: #999999;
  
  /* Status Colors */
  --zeta-green: #00C94F;
  --zeta-green-dark: #136027;
  --zeta-green-light: #9ECEB7;
}
```
