/* 
🌓 THEME MODE:
- Default: Dark Mode (`.dark` class toggles light/dark mode)
- Uses CSS custom properties (`--variable`) for theme tokens

🖋 FONT STACK:
- Primary: Manrope
- Fallbacks: Inter, Outfit, system-ui, sans-serif
- Loaded via Google Fonts: 200–800 weight range

🌈 COLOR SYSTEM:
- Primary Accent: #E5195E (used in brand CTAs and highlights)
- Base Dark: #0E0E0E (background for body and containers)
- Text: #FFFFFF and rgba variants for secondary text
- Uses OKLCH for extended color precision (for charts, contrast, tones)

🧊 GLASSMORPHISM:
- Glass panels use: `rgba(255, 255, 255, 0.05)` + `backdrop-filter: blur(12px)`
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Rounded corners: `--radius` and derivatives (`--radius-md`, `--radius-lg`, etc.)

🔘 BUTTONS:
- Prebuilt styles: 
  - `.btn-primary-wdi`, `.btn-outline-wdi`, `.btn-ghost-wdi`, etc.
  - Animations: `hover: translateY`, `focus-visible` outlines, `box-shadow` elevation
- Size variants: `.btn-sm`, `.btn-lg`, `.btn-xl`

⚙️ UTILITIES:
- Animations: `scroll`, `marquee`, `shimmer`, `rotate`, `float`, `gradientMove`
- Elevation system: `.btn-elevation` (lift on hover)
- Scrollbar hide: `.scrollbar-hide`

📐 TYPOGRAPHY:
- Heading sizes: h1–h4 set via `@layer base` with responsive scaling
- Body font size driven by `--font-size` (default: 14px)
- All text components inherit styles unless overridden with Tailwind’s `text-*`

🧩 STRUCTURE:
- Modular with `@layer base`, `@layer utilities`, and `@theme inline`
- Compatible with Tailwind utility merging

⚠️ NOTES:
- Ensure class `.dark` is applied to `<html>` or `<body>` to activate dark theme.
- When extending utilities or themes, keep new tokens in sync with `:root` and `.dark` scopes.
- Follow WDI UI component naming conventions (`btn-*`, `card-*`, etc.)

──────────────────────────────────────────────
*/
