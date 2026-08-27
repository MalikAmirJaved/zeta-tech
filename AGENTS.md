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

**RULE: NEVER use hardcoded colors in component files.**

All colors MUST come from `globals.css` using semantic tokens. This ensures that if the color theory changes, you only update `globals.css` and the entire app updates automatically.

#### Semantic Color Tokens (USE THESE):
| Token | Purpose | Tailwind Class |
|-------|---------|----------------|
| `--primary` | Brand color (red) | `text-primary`, `bg-primary` |
| `--secondary` | Card backgrounds | `text-secondary`, `bg-secondary` |
| `--background` | Page background | `bg-background` |
| `--foreground` | Main text | `text-foreground` |
| `--muted` | Subtle backgrounds | `bg-muted` |
| `--muted-foreground` | Gray text | `text-muted` |
| `--accent` | Success/green | `text-accent`, `bg-accent` |
| `--destructive` | Error/danger | `text-destructive` |
| `--border` | Borders | `border-border` |

#### Dark Theme Utilities (for dark sections):
| Utility | Purpose |
|---------|---------|
| `bg-dark` | Dark background (#0C0C0E) |
| `bg-dark-darker` | Darker background (#141416) |
| `bg-dark-surface` | Dark surface (#0F1828) |
| `bg-dark-surface-2` | Dark surface 2 (#1C2938) |
| `border-dark` | Dark borders (#1E1E20) |
| `text-dark-muted` | Muted text on dark (#999999) |

#### Color Change Workflow:
1. To change brand color: Edit `--primary` in `:root`
2. To change dark theme: Edit `--zeta-dark`, `--zeta-darker`, `--zeta-dark-border`
3. To change text colors: Edit `--foreground`, `--muted-foreground`
4. To change success color: Edit `--accent`

#### FORBIDDEN:
- ❌ `text-[#ED001B]` - Use `text-primary`
- ❌ `bg-[#0C0C0E]` - Use `bg-dark`
- ❌ `text-[#999999]` - Use `text-muted`
- ❌ `border-[#1E1E20]` - Use `border-dark`

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

### 7. HEADER MEGA MENU HOVER BEHAVIOR
- NEVER use pure CSS `group-hover` for dropdowns/mega menus that are `position: fixed` outside the parent hover area
- Use React state (`useState`) + `onMouseEnter`/`onMouseLeave` with a 150ms `setTimeout` delay before closing
- Both the nav trigger AND the dropdown panel must call `handleMenuEnter(label)` on enter to keep it open
- Apply `onMouseLeave` to both nav trigger and dropdown panel to close after the delay
- This prevents the menu from hiding when the cursor moves from the nav item to the dropdown

### 8. BUTTON HOVER BEHAVIOR
- On hover, button colors must NOT change (remove `hover:opacity-90`, `hover:bg-*`, `transition-opacity`, `transition-colors` from buttons)
- Arrow icons in buttons must NOT translate on hover (remove `group-hover:translate-x-1`)
- Arrow icons in buttons MUST rotate -30deg on hover using `group-hover:-rotate-30` to tilt slightly upward
- Add `group` class to the button and `transition-transform duration-200 group-hover:-rotate-30` to the arrow icon

### 9. CARD HOVER BEHAVIOR
- For card hover effects, add `group` to the card container
- On hover, border must change to `border-primary` using `group-hover:border-primary` with `transition-colors`
- For internal arrow/link icons inside cards, apply `transition-transform duration-200 group-hover:-rotate-30` to tilt slightly upward on hover

### 10. GRID CELL HOVER BEHAVIOR
- For grid/list cells that change background on hover, use `group` on the cell container
- Apply `hover:bg-primary` and `transition-colors` to the cell
- Ensure inner text becomes readable on hover by adding `group-hover:text-white` to text elements
- For status dots/icons inside cells, add `group-hover:bg-white transition-colors` to maintain visibility

### 11. INLINE LINK HOVER BEHAVIOR
- For inline text links with arrows (e.g., "Read Article"), add `group` to the link
- Apply `transition-transform duration-200 group-hover:-rotate-30` to the arrow icon

### 12. COMMIT CONVENTIONS
- Format: `type(scope): description`
- Types: feat, fix, style, refactor, docs, chore
- Example: `feat(hero): implement hero section with NOC dashboard`

---

## Design Tokens Reference

### Light Theme (Default)
```css
:root {
  --background: #F9FAFB;
  --foreground: #333333;
  --card: #FFFFFF;
  --primary: #ED001B;
  --secondary: #F7F7F5;
  --muted: #F3F4F6;
  --muted-foreground: #666666;
  --accent: #00C94F;
  --border: #E5E7EB;
}
```

### Dark Theme (Hero, Footer, etc.)
```css
:root {
  --zeta-dark: #0C0C0E;
  --zeta-darker: #141416;
  --zeta-dark-border: #1E1E20;
  --zeta-dark-surface: #0F1828;
  --zeta-dark-surface-2: #1C2938;
}
```
