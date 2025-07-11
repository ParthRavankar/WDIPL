# Dark Background Pattern Implementation Guide

## Standard Dark Page Structure

Every page should follow this consistent pattern:

```tsx
export function PageName() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Always dark */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Hero content */}
        </div>
      </section>
      
      {/* Content Sections - Alternate between bg-background and bg-black */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section content */}
        </div>
      </section>
      
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section content */}
        </div>
      </section>
      
      {/* Process Section - Always use component's built-in dark styling */}
      <ProcessSection />
      
      {/* CTA Section - Dark background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* CTA content */}
        </div>
      </section>
      
      {/* FAQ Section - Component handles dark styling */}
      <FAQSection 
        title="Page-Specific Questions"
        faqs={pageFAQs}
      />
      
      {/* Footer - Component handles dark styling */}
      <Footer />
    </div>
  );
}
```

## Key Pattern Rules

### 1. Page Wrapper
```tsx
<div className="dark min-h-screen bg-background">
```
- **Always** use `dark` class
- **Always** use `bg-background` for main wrapper
- **Always** include `min-h-screen`

### 2. Section Backgrounds
```tsx
// Option 1: Primary dark background
<section className="py-20 bg-background">

// Option 2: Pure black (for contrast)  
<section className="py-32 bg-black">

// Option 3: For special sections
<section className="relative py-20 overflow-hidden bg-black">
```

### 3. Text Colors for Dark Backgrounds
```tsx
// Headings
<h1 className="text-white">Primary Heading</h1>
<h2 className="text-foreground">Secondary Heading</h2>

// Body text
<p className="text-gray-300">Regular body text</p>
<p className="text-muted-foreground">Muted text</p>

// Accent text
<span className="text-[#E5195E]">WDI Pink Accent</span>
<span className="text-accent">Accent Color</span>
```

### 4. Card Components
```tsx
// Dark cards
<Card className="bg-card/20 backdrop-blur-md border-white/10">
<Card className="bg-gray-900/50 backdrop-blur-md border-gray-700/50">

// Card text
<CardContent className="text-foreground">
  <h3 className="text-white">Card Title</h3>
  <p className="text-gray-300">Card description</p>
</CardContent>
```

## Background Replacement Patterns

### Replace These Patterns:
```tsx
// ❌ WRONG - Light backgrounds
<section className="py-20 bg-white">
<section className="py-20 bg-gray-50">
<div className="bg-white">

// ✅ CORRECT - Dark backgrounds  
<section className="py-20 bg-background">
<section className="py-20 bg-black">
<div className="bg-background">
```

### Text Color Adjustments:
```tsx
// ❌ WRONG - Dark text on dark background
<h1 className="text-black">
<p className="text-gray-900">

// ✅ CORRECT - Light text on dark background
<h1 className="text-white">
<p className="text-gray-300">
```

## Component Integration

### Using Existing Dark Components:
```tsx
// These components already handle dark styling
<Navigation />           // ✅ Dark by default
<Footer />              // ✅ Dark by default
<ProcessSection />      // ✅ Dark by default
<FAQSection />          // ✅ Updated to dark

// For custom sections, ensure dark backgrounds
<section className="bg-background">
  <CustomComponent />
</section>
```

## Validation Checklist

For each page, verify:

- [ ] Page wrapper uses `dark` class and `bg-background`
- [ ] All sections use `bg-background` or `bg-black`
- [ ] No white/light background classes anywhere
- [ ] Text is readable (white/light on dark backgrounds)
- [ ] Cards and components use dark variants
- [ ] Borders are visible (use `border-white/10` or similar)
- [ ] Interactive elements are properly styled
- [ ] Navigation and Footer are included
- [ ] FAQSection uses new dark styling

## Common Mistakes to Avoid

1. **Forgetting the dark class**: Always include `dark` in page wrapper
2. **Mixed backgrounds**: Don't mix light and dark backgrounds
3. **Invisible text**: Ensure text color contrasts with background
4. **Invisible borders**: Use light borders on dark backgrounds
5. **Component conflicts**: Verify all components work with dark theme