# 🎨 AI Valley Logo Integration Guide

## Where to Place the Logo

Place your `ai-valley.png` file in the `/public` directory:
```
/public/ai-valley.png
```

## Logo Specifications

### Recommended Image Properties:
- **Format**: PNG with transparent background (preferred)
- **Dimensions**: At least 400x120px for best quality
- **Aspect Ratio**: Approximately 3:1 (width:height)
- **File Size**: Optimized for web (< 100KB if possible)

## Where the Logo Appears

I've added the AI Valley logo to **5 key locations** throughout the website:

### 1. 🧭 **Navigation Bar** (Desktop & Mobile)
- **Location**: Top navigation, in the collaboration badge
- **Size**: Height of 24px (desktop) / 20px (mobile)
- **Behavior**: Appears next to "In collaboration with AI Valley"

### 2. 🎯 **Hero Section**
- **Location**: Main hero banner, prominent collaboration badge
- **Size**: Height of 32px
- **Behavior**: Hover effect scales the logo slightly

### 3. 💰 **Sponsors Section** (Featured Placement)
- **Location**: Center of presenting partner box
- **Size**: Height of 64px (largest display)
- **Behavior**: Most prominent display of the logo

### 4. 👣 **Footer**
- **Location**: "Powered by AI Valley" section
- **Size**: Height of 24px
- **Behavior**: Inverted colors (white version) for dark background

### 5. 🖼️ **Open Graph Image**
- **Location**: Social media preview cards
- **Note**: Currently text-based, but can be updated to include logo

## Fallback Behavior

All logo implementations include graceful fallbacks:
- If the image doesn't load, it will hide and show text instead
- The site remains fully functional without the logo file
- Error handling prevents broken image icons

## Testing Your Logo

1. **Add your logo file**:
   ```bash
   # Place your ai-valley.png in the public folder
   cp /path/to/your/ai-valley.png ./public/
   ```

2. **Test locally**:
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

3. **Check all locations**:
   - Navigate through the site
   - Resize browser to test mobile views
   - Check hover effects

## Customization Options

### To adjust logo sizes, edit these components:

1. **Navigation** (`components/Navigation.tsx`)
   - Lines 61-71 (desktop) and 113-122 (mobile)
   
2. **HeroSection** (`components/HeroSection.tsx`)
   - Lines 90-99

3. **Footer** (`components/Footer.tsx`)
   - Lines 66-75

4. **Sponsors** (`components/Sponsors.tsx`)
   - Lines 90-102

### CSS Classes Applied:
- `h-6 w-auto` - Height 24px, auto width
- `h-8 w-auto` - Height 32px, auto width
- `h-16 w-auto` - Height 64px, auto width
- `group-hover:scale-105` - Slight zoom on hover
- `brightness-0 invert` - Makes logo white for dark backgrounds

## Deployment

When deploying to Vercel:
1. Ensure `ai-valley.png` is in the `/public` folder
2. The logo will be automatically available at `/ai-valley.png`
3. Next.js will optimize the image loading

## Alternative Logo Formats

If you have the logo in other formats:
- **SVG**: Rename to `ai-valley.svg` and update `src` paths
- **WebP**: Better compression, rename to `ai-valley.webp`
- **Multiple sizes**: Add responsive variants like `ai-valley-sm.png`, `ai-valley-lg.png`

## Need Help?

Contact: community@aivalley.io

---

The website is fully prepared to showcase the AI Valley logo prominently! 🎉
