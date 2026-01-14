# Broccoli Studios Style Guide

Design system reference for consistent UI development.

---

## Colors

Uses OKLCH color space for perceptually uniform colors. Neutral-only palette for professional, minimalist aesthetic.

### Semantic Colors

| Token                | Light Mode  | Dark Mode   | Usage                        |
| -------------------- | ----------- | ----------- | ---------------------------- |
| `background`         | White       | Near-black  | Page backgrounds             |
| `foreground`         | Near-black  | White       | Primary text                 |
| `primary`            | Dark gray   | Light gray  | Emphasis, icons, accents     |
| `primary-foreground` | White       | Dark        | Text on primary bg           |
| `secondary`          | Light gray  | Dark gray   | Alternate section bg         |
| `muted-foreground`   | Medium gray | Medium gray | Secondary text, descriptions |
| `border`             | Light gray  | White 10%   | Borders, dividers            |

### Usage in Tailwind

```tsx
// Backgrounds
className = 'bg-background'; // Default page bg
className = 'bg-secondary'; // Alternate sections
className = 'bg-primary'; // Dark emphasis (e.g., CTA)
className = 'bg-muted'; // Subtle backgrounds

// Text
className = 'text-foreground'; // Primary text (default)
className = 'text-muted-foreground'; // Secondary/descriptions
className = 'text-primary'; // Accent text (labels, icons)
className = 'text-primary-foreground'; // Text on dark bg
```

---

## Typography

### Fonts

- **Sans:** Geist (`font-sans`) - All UI text
- **Mono:** Geist Mono (`font-mono`) - Code only

### Scale

| Element    | Classes                                      | Usage                   |
| ---------- | -------------------------------------------- | ----------------------- |
| H1         | `text-4xl md:text-5xl lg:text-6xl font-bold` | Hero headlines          |
| H2         | `text-3xl md:text-4xl font-bold`             | Section headers         |
| H3         | `text-2xl md:text-3xl font-bold`             | Card/item titles        |
| H4         | `text-xl font-semibold`                      | Subsection headers      |
| Body Large | `text-lg md:text-xl`                         | Intro paragraphs        |
| Body       | `text-base`                                  | Default body text       |
| Small      | `text-sm`                                    | Labels, metadata, lists |

### Labels & Categories

```tsx
// Uppercase accent labels
className = 'text-primary text-sm tracking-wider uppercase';
```

---

## Spacing

### Section Padding

All sections use consistent responsive padding:

```tsx
className = 'px-6 py-24 md:px-12 lg:px-24';
```

### Container

```tsx
className = 'mx-auto max-w-6xl';
```

### Vertical Rhythm

| Spacing          | Class        | Usage                        |
| ---------------- | ------------ | ---------------------------- |
| Section gap      | `space-y-24` | Between major content blocks |
| Header margin    | `mb-16`      | After section headers        |
| Paragraph margin | `mb-6`       | After paragraphs             |
| Tight margin     | `mb-4`       | Headings to content          |
| Minimal margin   | `mb-2`       | Labels to headings           |

### Grid Gaps

| Gap      | Class    | Usage                          |
| -------- | -------- | ------------------------------ |
| Standard | `gap-8`  | Default grid/flex gap          |
| Tight    | `gap-6`  | Compact layouts                |
| Wide     | `gap-12` | Case studies, featured content |

---

## Components

### Buttons

```tsx
// Primary (default)
<Button>Action</Button>

// Secondary
<Button variant="secondary">Secondary</Button>

// Outline
<Button variant="outline">Outline</Button>

// Sizes
<Button size="lg">Large</Button>
<Button size="sm">Small</Button>
```

### Cards

```tsx
// Basic card
className = 'border rounded-lg p-6 bg-background';

// With hover
className = 'border rounded-lg p-6 bg-background transition-colors hover:border-primary/50';
```

### Portfolio/Case Study Cards

```tsx
<div className="bg-background group hover:border-primary/50 overflow-hidden rounded-lg border transition-colors">
  <div className="bg-muted relative aspect-[16/9] overflow-hidden">
    <Image
      src={imagePath}
      alt={title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
  <div className="p-5">
    <p className="text-primary mb-1 text-xs tracking-wider uppercase">{category}</p>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{summary}</p>
  </div>
</div>
```

### Badges/Pills

```tsx
className = 'bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm';
```

### Lists with Bullets

```tsx
<ul className="text-muted-foreground space-y-1 text-sm">
  <li className="flex items-start">
    <span className="text-primary mr-2">•</span>
    List item text
  </li>
</ul>
```

---

## Layout Patterns

### Section Structure

```tsx
<section id="section-name" className="px-6 py-24 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">
    {/* Header */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Title</h2>
      <p className="text-muted-foreground mx-auto max-w-2xl text-lg">Description</p>
    </div>

    {/* Content */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{/* Items */}</div>
  </div>
</section>
```

### Section Backgrounds

- **Default:** No class (white/background)
- **Alternate:** `bg-secondary` - Use to create visual rhythm
- **Dark CTA:** `bg-primary text-primary-foreground`

### Responsive Grids

```tsx
// 3-column (services, cards)
className = 'grid gap-8 md:grid-cols-2 lg:grid-cols-3';

// 2-column (features, info)
className = 'grid gap-8 md:grid-cols-2';

// 5-column (steps, process)
className = 'grid gap-8 md:grid-cols-2 lg:grid-cols-5';

// Asymmetric (case studies)
className = 'grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr,1fr]';
```

---

## Images

### Aspect Ratios

| Ratio | Class            | Usage                        |
| ----- | ---------------- | ---------------------------- |
| 16:9  | `aspect-video`   | Videos, wide banners         |
| 16:10 | `aspect-[16/10]` | Case study images, portfolio |
| 4:3   | `aspect-[4/3]`   | Taller content images        |
| 1:1   | `aspect-square`  | Avatars, icons               |

### Image Container

```tsx
<div className="bg-muted relative aspect-[16/10] overflow-hidden rounded-lg">
  <Image
    src={imagePath}
    alt={altText}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Size Guidelines

- **Case studies:** Use `aspect-[16/10]` for balanced width-to-height
- **Hero images:** Full width, max height `h-[60vh]` or similar
- **Thumbnails:** Fixed size with `aspect-square` or `aspect-video`

---

## Border Radius

Base radius: `0.625rem`

| Token   | Class          | Usage                     |
| ------- | -------------- | ------------------------- |
| Default | `rounded-lg`   | Cards, images, containers |
| Full    | `rounded-full` | Pills, badges, avatars    |
| Small   | `rounded-md`   | Buttons, inputs           |

---

## Shadows & Effects

Minimal shadow usage. Prefer borders for definition.

```tsx
// Subtle elevation (use sparingly)
className = 'shadow-sm';

// Focus states (built into components)
className = 'focus-visible:ring-2 focus-visible:ring-ring';
```

---

## Responsive Breakpoints

| Prefix | Min Width | Usage             |
| ------ | --------- | ----------------- |
| (none) | 0px       | Mobile-first base |
| `sm:`  | 640px     | Large phones      |
| `md:`  | 768px     | Tablets           |
| `lg:`  | 1024px    | Desktop           |
| `xl:`  | 1280px    | Large desktop     |

### Mobile-First Pattern

```tsx
// Start small, add larger
className = 'text-3xl md:text-4xl lg:text-5xl';
className = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
className = 'px-6 md:px-12 lg:px-24';
```

---

## Do's and Don'ts

### Do

- Use semantic color tokens (`text-muted-foreground` not `text-gray-500`)
- Follow mobile-first responsive patterns
- Keep spacing consistent with the scale
- Use `aspect-[16/10]` for portfolio/case study images
- Alternate section backgrounds for visual rhythm

### Don't

- Add custom colors outside the design system
- Use shadows heavily (keep it flat)
- Mix spacing values inconsistently
- Use `aspect-[4/3]` for large images (too tall)
- Skip responsive considerations
