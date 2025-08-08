# OPTERO - Hero Section

A modern, responsive hero section built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Clean, modern design with mobile-first approach
- ⚡ Built with Next.js 15 and TypeScript
- 🎯 Responsive hero section with badge, heading, and CTA button
- 🎨 Styled with Tailwind CSS and shadcn/ui components
- 🚀 Optimized for performance with SSG/SSR support

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Hero section page
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── badge.tsx
│       └── button.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Accessible component primitives

## Design

The hero section features:
- A prominent badge with company news
- Large "OPTERO" brand name
- Descriptive subheading and tagline
- Call-to-action button
- Clean, minimalist design with proper spacing
- Mobile-first responsive approach

## Development

- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Lint code:** `npm run lint`
