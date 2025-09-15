# The Dumb Hackathon Website

A gloriously absurd website for The Dumb Hackathon, in collaboration with AI Valley. Built with Next.js 15, this site celebrates the joy of building utterly pointless things.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dumb-hackathon-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_EMAIL=community@aivalley.io
NEXT_PUBLIC_AIVALLEY_URL=https://aivalley.io
NEXT_PUBLIC_EVENT_DATE=2025-09-20
```

4. Add the AI Valley logo (optional but recommended):
```bash
# Place your ai-valley.png file in the public folder
cp /path/to/ai-valley.png ./public/
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

### Core Features
- **Glitchy Hero Section**: Animated title with floating emojis and typewriter effect
- **AI Valley Integration**: Prominent branding throughout the site
- **Event Countdown**: Timer that occasionally displays wrong numbers (for chaos)
- **Interactive Schedule**: Expandable timeline with emoji reactions
- **Project Gallery**: Carousel of terrible project ideas with "uselessness meter"
- **Sponsors Section**: Special placement for AI Valley as presenting partner
- **Prize Display**: Animated Labubu prize with particle effects

### Easter Eggs & Special Features
- **Konami Code**: Press ↑↑↓↓←→←→BA for a confetti surprise!
- **Duck Trail**: Mouse cursor leaves a trail of rubber ducks (activates after 3 seconds)
- **Random Page Tilts**: Occasionally the page will tilt slightly while scrolling
- **Clean Typography**: Consistent font styling throughout the site
- **Wiggling Buttons**: CTAs wiggle on hover
- **Moving Registration Button**: Try to click it... if you can!

### Design Elements
- **Color Palette**:
  - Primary: #FF6B6B (Silly Red)
  - Secondary: #4ECDC4 (Quirky Teal)
  - Accent: #FFD93D (Banana Yellow)
  - Chaos: #A8E6CF (Mint Chaos)

- **Animations**: Powered by Framer Motion
- **3D Elements**: Rotating prizes and floating particles
- **Responsive Design**: Works on all devices (chaos is universal)

## Project Structure

```
dumb-hackathon-website/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main homepage
├── components/
│   ├── Navigation.tsx    # Sticky nav with random colors
│   ├── HeroSection.tsx   # Glitchy hero with CTAs
│   ├── AboutSection.tsx  # Animated info cards
│   ├── EventDetails.tsx  # Countdown and location
│   ├── Schedule.tsx      # Interactive timeline
│   ├── ProjectsGallery.tsx # Carousel of bad ideas
│   ├── Sponsors.tsx      # Sponsor showcase
│   ├── PrizeSection.tsx  # Prize display
│   ├── Footer.tsx        # Footer with links
│   ├── KonamiCode.tsx    # Easter egg handler
│   └── DuckTrail.tsx     # Mouse trail effect
├── lib/
│   ├── constants.ts      # App constants and data
│   └── utils.ts          # Helper functions
└── hooks/
    └── useKonamiCode.ts  # Konami code detection

```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. **IMPORTANT**: Add these environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_EMAIL=community@aivalley.io`
   - `NEXT_PUBLIC_AIVALLEY_URL=https://aivalley.io`
   - `NEXT_PUBLIC_EVENT_DATE=2025-09-20`
4. Deploy!

```bash
npm run build  # Build for production
npm start      # Run production build locally
```

**Note**: See `DEPLOYMENT_GUIDE.md` for detailed troubleshooting if you encounter any issues.

## Venue Host

**[Pebblebed](https://pebblebed.com)** - Technical Early-Stage VC

Proudly hosted at Pebblebed's San Francisco office. Pebblebed is founded by industry leaders including Pam Vagata (co-founder of OpenAI), Keith Adams (founded Facebook AI Research), Luke Byrne (former partner at Tapestry), and Tammie Siew (former Sequoia Southeast Asia investor).

## Sponsors

### Presenting Partner
**[AI Valley](https://aivalley.io)** - Building the Future of AI Innovation

### Our Partners
- **[Google](https://google.com)** - Innovation Partner
- **[Morph](https://morphllm.com)** - Agentic coding middleware  
- **[Toolhouse](https://toolhouse.ai)** - AI Agent Platform - Building, deploying, and managing AI agents powered by LLMs
- **[Ministry of Programming](https://ministryofprogramming.com)** - Venture Builder & Product Studio - 100+ products built, supporting startups from idea to scale

### Sponsorship Opportunities
- **Investment**: $3,000
- **Contact**: community@aivalley.io
- **Benefits**: 
  - Brand visibility to 200+ innovative developers and creators
  - Logo placement on website, event materials, and social media
  - Speaking opportunity during opening/closing ceremonies
  - Direct talent recruitment and networking opportunities
  - Demonstrate support for creative innovation and tech community
  - Connect with the next generation of unconventional problem-solvers

## Contact

For all inquiries, sponsorships, and collaboration:
**Email**: community@aivalley.io
**Website**: [AI Valley](https://aivalley.io)

## Event Details

- **Date**: September 20th, 2025
- **Location**: Pebblebed Office, San Francisco, CA
- **Time**: 10:00 AM - 9:00 PM PST
- **Capacity**: Limited to 100 participants

## Warnings

- Side effects may include uncontrollable laughter
- Existential crisis about your career choices
- The urge to build more creative projects
- Sudden desire to build useless things

## License

This project is licensed under the "Do Whatever You Want But Keep It Dumb" License.

---

*Remember: The goal is to create a website that's professional in execution but absolutely ridiculous in spirit. Make it memorable, make it fun, and most importantly, make it dumb!*

Built with questionable judgment by the AI Valley community.