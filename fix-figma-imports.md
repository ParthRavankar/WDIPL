# Fix Figma Asset Imports for Local Development

## Quick Fix Commands

Run these commands to install missing dependencies and fix the import issues:

```bash
# 1. Install missing dependencies
npm install @radix-ui/react-slot@^1.0.2 @tailwindcss/postcss@^4.0.0-alpha.31

# 2. Replace figma:asset imports with placeholder images
# This script will replace all figma:asset imports with placeholder URLs

# For PowerShell (Windows):
(Get-Content components/CarouselTestimonials.tsx) -replace 'import clutchLogo from "figma:asset/[^"]+";', '// import clutchLogo from "figma:asset/..."; // Placeholder image' | Set-Content components/CarouselTestimonials.tsx

# For each file with figma:asset imports, replace with a placeholder:
# Example for CarouselTestimonials.tsx:
```

## Manual Fix Instructions

For each file that has `figma:asset` imports, follow these steps:

### 1. Components/CarouselTestimonials.tsx
Replace:
```tsx
import clutchLogo from "figma:asset/2e527c2f1a28e8f4cafbb9fd9f8f9d410530d352.png";
```

With:
```tsx
// Placeholder for Clutch logo - replace with actual logo file
const clutchLogo = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format";
```

### 2. Other Files with figma:asset imports:
- `pages/RegroupProject.tsx`
- `pages/CaseStudies.tsx`
- `pages/iOSAppDevelopment.tsx`
- `pages/TanamiProject.tsx`
- `components/CaseStudyHighlight.tsx`
- `pages/SeezunProject.tsx`
- `pages/WokaProject.tsx`
- `pages/RanOutOfProject.tsx`
- `imports/Group1597880681.tsx`

For each file, replace the `figma:asset` imports with appropriate placeholder images from Unsplash:

```tsx
// Instead of: import imageName from "figma:asset/...";
// Use: const imageName = "https://images.unsplash.com/photo-[relevant-photo-id]?w=400&h=300&fit=crop&auto=format";
```

### 3. Recommended Placeholder Images:

**For project screenshots:**
```tsx
const projectImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
```

**For mobile app screenshots:**
```tsx
const mobileAppImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&auto=format";
```

**For logos:**
```tsx
const logoImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format";
```

**For tech/software images:**
```tsx
const techImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&auto=format";
```

## After Making Changes

1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run dev` to start the development server
3. The project should now run without the figma:asset import errors

## Note

These placeholder images are for development purposes only. In production, you should replace them with your actual project images, logos, and assets.