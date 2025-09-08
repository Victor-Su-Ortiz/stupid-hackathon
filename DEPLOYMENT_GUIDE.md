# 🚀 Vercel Deployment Guide for The Dumb Hackathon Website

## Fixed Issues

I've resolved the 404 error on Vercel by fixing several critical issues:

### 1. **Server-Side Rendering (SSR) Issues** ✅
- **Problem**: The `HeroSection` component was accessing `window.innerWidth` and `window.innerHeight` directly during render, causing crashes on Vercel's server-side rendering.
- **Solution**: Moved window dimensions to useEffect and used safe fallback values.

### 2. **Next.js Configuration** ✅
- **Problem**: The `next.config.ts` had experimental features that could cause issues.
- **Solution**: Simplified configuration to only essential settings:
  ```typescript
  const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  };
  ```

### 3. **Removed vercel.json** ✅
- Let Vercel auto-detect the Next.js 15 app configuration for best compatibility.

## Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Fix SSR issues for Vercel deployment"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. **IMPORTANT**: Configure these environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_EMAIL=community@aivalley.io
   NEXT_PUBLIC_AIVALLEY_URL=https://aivalley.io
   NEXT_PUBLIC_EVENT_DATE=2025-09-20
   ```

### 3. Settings to Verify

In Vercel project settings:
- **Framework Preset**: Next.js (should auto-detect)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Node.js Version**: 18.x or 20.x

## Environment Variables

⚠️ **CRITICAL**: You must add these environment variables in Vercel's dashboard:

1. Go to your project on Vercel
2. Click on "Settings" tab
3. Navigate to "Environment Variables"
4. Add these variables:

| Key | Value | Description |
|-----|-------|-------------|
| `NEXT_PUBLIC_EMAIL` | `community@aivalley.io` | Contact email |
| `NEXT_PUBLIC_AIVALLEY_URL` | `https://aivalley.io` | AI Valley website |
| `NEXT_PUBLIC_EVENT_DATE` | `2025-09-20` | Event date |

## Troubleshooting

### If you still get 404:

1. **Check Build Logs**: Look for any errors in Vercel's build output
2. **Verify Root Directory**: Ensure Vercel is building from the root of your repo
3. **Check Functions Tab**: Verify that the serverless functions are created
4. **Clear Cache**: In Vercel dashboard, go to Settings → Functions → Purge Cache

### Common Issues:

- **Missing Environment Variables**: The app will build but may show incorrect data
- **Build Errors**: Check for any remaining `window` references in components
- **Route Issues**: Ensure all imports use `@/` alias correctly

## Testing Locally Before Deploy

```bash
# Test production build locally
npm run build
npm start

# Open http://localhost:3000
```

## What Was Fixed

1. ✅ Removed direct `window` object access in `HeroSection`
2. ✅ Simplified `next.config.ts` 
3. ✅ Fixed all ESLint errors
4. ✅ Ensured proper SSR compatibility
5. ✅ Removed problematic experimental features

## Support

If you encounter any issues:
- Contact: community@aivalley.io
- Check Vercel build logs for specific errors
- Ensure all environment variables are set

---

The website should now deploy successfully on Vercel! 🎉
