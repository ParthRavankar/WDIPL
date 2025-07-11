# Complete Local Development Setup

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Development Server
```bash
npm run dev
```

## Step 3: If you still get figma:asset errors, run these manual fixes:

### Fix CarouselTestimonials.tsx
Replace the import line in `components/CarouselTestimonials.tsx`:

```tsx
// OLD:
import clutchLogo from "figma:asset/2e527c2f1a28e8f4cafbb9fd9f8f9d410530d352.png";

// NEW:
const clutchLogo = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format";
```

### Fix CaseStudyHighlight.tsx
Replace the imports in `components/CaseStudyHighlight.tsx`:

```tsx
// OLD:
import regroupImage from "figma:asset/92c9546d073e10bfa567559041d8b7e5b0d84ce7.png";
import seezunImage from "figma:asset/06e3cfb0c62c4da1116eaa2ecf65c8d2c54cf50a.png";
import wokaAwardImage from "figma:asset/91ae572d9f4dbf6bf5424e541b65db8087a129ff.png";

// NEW:
const regroupImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";
const seezunImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format";
const wokaAwardImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format";
```

### Quick Fix Script (PowerShell)
If you're on Windows, you can run this PowerShell script to fix all files at once:

```powershell
# Fix CarouselTestimonials.tsx
(Get-Content "components/CarouselTestimonials.tsx") -replace 'import clutchLogo from "figma:asset/[^"]+";', 'const clutchLogo = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format";' | Set-Content "components/CarouselTestimonials.tsx"

# Fix CaseStudyHighlight.tsx
$content = Get-Content "components/CaseStudyHighlight.tsx"
$content = $content -replace 'import regroupImage from "figma:asset/[^"]+";', 'const regroupImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format";'
$content = $content -replace 'import seezunImage from "figma:asset/[^"]+";', 'const seezunImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format";'
$content = $content -replace 'import wokaAwardImage from "figma:asset/[^"]+";', 'const wokaAwardImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format";'
$content | Set-Content "components/CaseStudyHighlight.tsx"
```

### Quick Fix Script (Bash/Linux/Mac)
```bash
# Fix CarouselTestimonials.tsx
sed -i 's/import clutchLogo from "figma:asset\/[^"]*";/const clutchLogo = "https:\/\/images.unsplash.com\/photo-1560472354-b33ff0c44a43?w=120\&h=60\&fit=crop\&auto=format";/' components/CarouselTestimonials.tsx

# Fix CaseStudyHighlight.tsx
sed -i 's/import regroupImage from "figma:asset\/[^"]*";/const regroupImage = "https:\/\/images.unsplash.com\/photo-1551650975-87deedd944c3?w=600\&h=400\&fit=crop\&auto=format";/' components/CaseStudyHighlight.tsx
sed -i 's/import seezunImage from "figma:asset\/[^"]*";/const seezunImage = "https:\/\/images.unsplash.com\/photo-1512941937669-90a1b58e7e9c?w=600\&h=400\&fit=crop\&auto=format";/' components/CaseStudyHighlight.tsx
sed -i 's/import wokaAwardImage from "figma:asset\/[^"]*";/const wokaAwardImage = "https:\/\/images.unsplash.com\/photo-1517077304055-6e89abbf09b0?w=600\&h=400\&fit=crop\&auto=format";/' components/CaseStudyHighlight.tsx
```

## After Fixes
1. Save all files
2. The development server should automatically reload
3. Navigate to `http://localhost:3001` in your browser
4. The site should now load without errors!

## Pro Tip
Create a `/public/images` folder and add your actual project images there, then import them as:
```tsx
const projectImage = "/images/my-project.png";
```