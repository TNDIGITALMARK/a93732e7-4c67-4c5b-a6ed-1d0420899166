# Solana Drawing Arena

A competitive drawing platform powered by Solana blockchain where artists compete in timed rounds to create artwork based on prompts. Users connect their Solana wallets, submit drawings, and vote on their favorite submissions through a like system.

## 🎨 Design System

### Color Palette (EXACT values from design reference)

**Background Gradients:**
- Primary Gradient: `#8B5CF6` (Purple) → `#14B8A6` (Teal)
- Card Background: `#0f0f0f` (Very Dark Gray)
- Canvas Background: `#1F2937` (Dark Blue-Gray)

**Accent Colors:**
- Primary Purple: `#A855F7` (HSL: 283, 76%, 61%)
- Cyan: `#06B6D4` (HSL: 189, 94%, 43%)
- Pink: `#D946EF` (HSL: 330, 81%, 60%)

**Text Colors:**
- Primary: `#FFFFFF` (White)
- Secondary: `#9CA3AF` (Light Gray)
- Muted: `#6B7280` (Medium Gray)

**Borders & Dividers:**
- Border: `#374151` (Dark Gray)
- Border Dark: `#2D3748` (Darker Gray)

### Typography

**Font Family:** Inter (400, 500, 600, 700, 800)

**Font Sizes:**
- Timer: 72px (bold, gradient)
- Heading: 24px (bold, uppercase)
- Subheading: 16px (bold)
- Body: 14px (medium)
- Small: 12px
- Tiny: 10px (uppercase, letter-spacing)

### Spacing System

- Card Padding: 32px
- Section Gap: 24px
- Component Spacing: 16px
- Small Spacing: 8px

### Border Radius

- Card: 12px
- Button: 8px
- Thumbnail: 8px
- Full: 9999px (circular)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global design system with exact values
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main Arena page
├── components/
│   ├── Header.tsx            # Navigation header with logo and wallet button
│   ├── Timer.tsx             # Countdown timer with circular progress
│   ├── WalletButton.tsx      # Solana wallet connection button
│   ├── UploadZone.tsx        # Drag-and-drop artwork submission
│   ├── ArtworkCard.tsx       # Gallery card with like functionality
│   └── Leaderboard.tsx       # Top artists ranking display
├── types/
│   └── arena.ts              # TypeScript interfaces for submissions, rounds, users
├── lib/
│   └── mockData.ts           # Mock data for development/demo
└── public/
    └── generated/            # AI-generated artwork and assets
        ├── rocket-icon.png   # Canvas placeholder icon
        ├── artwork-1.png     # Sample submission 1
        ├── artwork-2.png     # Sample submission 2
        └── artwork-3.png     # Sample submission 3
```

## 🎯 Core Features

### 1. **Timed Drawing Rounds (15 minutes)**
- Live countdown timer with visual progress
- Round prompts (e.g., "DRAW A ROCKET")
- Automatic round transitions

### 2. **Artwork Submission System**
- Drag-and-drop upload zone
- Manual wallet address input (if not connected)
- Image preview before submission
- File validation (images only)

### 3. **Wallet Integration**
- Connect/disconnect Solana wallet
- Wallet address display and tracking
- User identification for submissions

### 4. **Voting System**
- Like/unlike artwork submissions
- Real-time like counter
- Prevent duplicate likes from same wallet
- Hover-to-interact on artwork cards

### 5. **Gallery Display**
- 3x3 grid of recent submissions in sidebar
- Full gallery view below main arena
- Responsive grid layout (2/4/6 columns)
- Hover effects with like counts

### 6. **Leaderboard**
- Top 3 artists ranked by likes
- Trophy/medal icons for top positions
- Total likes and wins statistics
- Real-time updates

### 7. **Drawing Tools UI**
- Brush, Pencil, Eraser tool selection
- Color picker with 8 preset colors
- Brush size selector (4 sizes)
- Visual tool state indicators

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:4006` to view the application.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

- **Next.js 15.5.2**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first CSS
- **Lucide React**: Icon library
- **Inter Font**: Typography via Google Fonts

## 🎮 User Flow

1. **Connect Wallet**: User connects Solana wallet via "Connect Wallet" button
2. **View Challenge**: Current round prompt displayed with countdown timer
3. **Submit Artwork**: Drag-and-drop or click to upload artwork
4. **Enter Wallet**: If not connected, manually enter Solana wallet address
5. **View Gallery**: Browse submissions in real-time 3x3 grid
6. **Vote**: Like favorite submissions by hovering and clicking heart icon
7. **Check Leaderboard**: View top artists ranked by total likes

## 🔮 Future Enhancements

### Phase 1: Core Functionality
- [ ] Real Solana wallet integration (@solana/wallet-adapter)
- [ ] Backend API for submission storage
- [ ] Database integration (Supabase/PostgreSQL)
- [ ] Image upload to cloud storage (AWS S3/Cloudinary)

### Phase 2: Advanced Features
- [ ] Real-time updates with WebSockets
- [ ] Live drawing canvas (in-browser)
- [ ] Round history and archives
- [ ] User profiles and portfolios
- [ ] NFT minting for winning submissions

### Phase 3: Tokenomics
- [ ] Solana memecoin ($SDA) integration
- [ ] Token rewards for winners
- [ ] Staking for voting weight
- [ ] Tournament modes with prize pools

### Phase 4: Community
- [ ] Chat system for participants
- [ ] Social sharing features
- [ ] Follow/follower system
- [ ] Artist reputation scores

### Phase 5: Scalability
- [ ] Multiple simultaneous rounds
- [ ] Category-based competitions
- [ ] Sponsored brand challenges
- [ ] Mobile app (React Native)

## 🎨 Design Implementation Notes

### Pixel-Perfect Replication
The design system was extracted from the provided reference image with exact precision:
- All color values use the exact hex codes from the design
- Typography matches Inter font family with specified weights
- Spacing follows the exact pixel measurements from the reference
- Border radius values replicate the reference design exactly
- Gradient directions and colors match the reference precisely

### Component Styling
- Buttons use gradient backgrounds with purple-to-pink transitions
- Cards have dark backgrounds with subtle borders
- Timer features gradient text (purple to cyan)
- Artwork thumbnails have 8px border radius with hover overlays
- Leaderboard uses trophy/medal icons for visual hierarchy

### Responsive Design
- Mobile-first approach with breakpoints at md (768px) and lg (1024px)
- Grid layouts adapt from 2 → 4 → 6 columns based on screen size
- Header navigation collapses on smaller screens (future: hamburger menu)
- Touch-friendly button sizes (44px minimum height)

## 📝 Mock Data

The application uses mock data for development and demonstration:
- **9 sample submissions** with varying like counts
- **3 leaderboard entries** with wins and total likes
- **47 active participants** (simulated)
- **Current round** set to end 15 minutes from page load

All mock data is located in `src/lib/mockData.ts` and can be easily replaced with real API calls.

## 🛠️ Technical Implementation

### State Management
- React hooks (useState, useEffect) for local component state
- Timer updates every second via setInterval
- Submission list updates on new uploads
- Like counts update optimistically

### Type Safety
- TypeScript interfaces for all data structures
- Strict type checking for props and state
- Type-safe mock data generation

### Performance Optimization
- Image lazy loading in gallery
- Optimized re-renders with React keys
- CSS transitions for smooth animations
- Inter font preloaded via Google Fonts

### Accessibility
- Semantic HTML structure
- Proper ARIA labels (to be added)
- Keyboard navigation support (to be enhanced)
- Color contrast ratios meet WCAG standards

## 📄 License

This project is part of a memecoin initiative and is intended for demonstration purposes. For production use, ensure proper licensing and compliance with Solana blockchain regulations.

## 🤝 Contributing

Future contributions welcome! Areas of focus:
- Solana wallet integration
- Backend API development
- Real-time features (WebSockets)
- Mobile responsive enhancements
- Accessibility improvements

---

**Built with precision and attention to detail to match the design reference exactly.**
