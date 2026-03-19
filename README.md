# WealthUp – Next.js Landing Page

A pixel-faithful Next.js implementation of the WealthUp frontend assignment (Figma node `3413-8`).

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Google Fonts** — Bricolage Grotesque (display) + DM Sans (body)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
wealthup/
├── app/
│   ├── globals.css        # Base styles, animations, range slider
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Assembles all sections
├── components/
│   ├── AnimatedSection.tsx  # Scroll-triggered reveal wrapper
│   ├── Navbar.tsx           # Sticky nav with scroll shrink + mobile drawer
│   ├── HeroSection.tsx      # Hero with interactive goal calculator
│   ├── BackedBy.tsx         # Infinite marquee partner logos
│   ├── InvestSection.tsx    # Tabbed investment types (MF / Bonds / Invoice)
│   ├── WhySection.tsx       # Feature cards with stats
│   ├── CTABanner.tsx        # Full-width gradient CTA
│   ├── HowItWorks.tsx       # Accordion steps + phone mockup
│   └── Footer.tsx           # Multi-column footer + newsletter
├── hooks/
│   └── useInView.ts         # IntersectionObserver scroll hook
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Features

| Feature | Detail |
|---|---|
| Scroll animations | Every section fades + slides up on scroll via `useInView` |
| Goal calculator | Interactive sliders for price & years → live SIP/lump-sum calc |
| Goal switcher | Car / Travel / Home / Custom with goal-specific illustrations |
| Invest tabs | Click Mutual Funds / Bonds / Invoice Discounting for details |
| Infinite marquee | Backed-by logos scroll continuously, pause on hover |
| Navbar | Transparent → white on scroll; mobile drawer |
| Phone mockup | Animated per How-it-Works step |
| Responsive | Mobile-first, all breakpoints covered |

## Customisation

- **Colors** – defined in `tailwind.config.ts` under `theme.extend.colors`
- **Fonts** – swap `@import` URL in `globals.css`
- **Content** – all copy lives in the component files as typed arrays
