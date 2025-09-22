# Brandley.ai - Influencer Marketing Platform

A modern 2-sided platform that connects brands with influencers for authentic marketing partnerships.

## 🚀 Features

### For Brands
- **Campaign Creation**: Create detailed campaigns with specific requirements
- **Influencer Discovery**: Search and filter influencers by category, followers, engagement rate
- **Smart Matching**: AI-powered recommendations for the best influencer matches
- **Messaging System**: Direct communication with influencers
- **Campaign Management**: Track applications and manage partnerships

### For Influencers
- **Profile Management**: Showcase portfolio, social media stats, and pricing
- **Campaign Discovery**: Find relevant brand opportunities
- **Application System**: Apply to campaigns with custom proposals
- **Messaging**: Communicate directly with brands
- **Portfolio Showcase**: Display best work and engagement metrics

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Data**: Synthetic mock data for demonstration

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── campaigns/         # Campaign-related pages
│   ├── influencers/       # Influencer discovery
│   ├── messages/          # Messaging system
│   ├── profile/           # User profiles
│   └── page.tsx           # Landing page
├── components/            # Reusable components
├── lib/                   # Utilities and mock data
└── types/                 # TypeScript type definitions
```

## 🎯 User Flows

### Brand User Journey
1. **Landing Page**: Choose "I'm a Brand" role
2. **Dashboard**: View active campaigns and recommended influencers
3. **Create Campaign**: Set requirements, budget, and deadlines
4. **Discover Influencers**: Search and filter by criteria
5. **Connect**: Message influencers directly
6. **Manage**: Track applications and partnerships

### Influencer User Journey
1. **Landing Page**: Choose "I'm an Influencer" role
2. **Dashboard**: View available campaigns and applications
3. **Profile**: Manage portfolio and social media stats
4. **Apply**: Submit proposals to relevant campaigns
5. **Communicate**: Message with brands
6. **Track**: Monitor application status

## 🎨 Design Features

- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth transitions and hover effects
- **Accessible**: Proper contrast ratios and keyboard navigation
- **Brand Colors**: Primary blue theme with secondary grays

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 📱 Pages Overview

### Landing Page (`/`)
- Role selection (Brand vs Influencer)
- Feature highlights
- Platform benefits

### Brand Dashboard
- Active campaigns overview
- Recommended influencers
- Quick stats and recent activity

### Influencer Dashboard
- Available campaigns
- Application status
- Profile stats and earnings

### Campaign Creation (`/campaigns/create`)
- Detailed campaign setup form
- Platform and category selection
- Influencer requirements
- Budget and deadline setting

### Influencer Discovery (`/influencers`)
- Search and filter functionality
- Influencer cards with key metrics
- Connect and favorite actions

### Messaging System (`/messages`)
- Conversation list
- Real-time chat interface
- Message history

### Profile Page (`/profile`)
- Complete influencer profile
- Social media stats
- Portfolio showcase
- Contact actions

## 🔧 Customization

The platform uses a modular design that makes it easy to:
- Add new user types
- Extend campaign requirements
- Integrate with real APIs
- Customize the UI theme
- Add new features

## 📊 Mock Data

The platform includes realistic synthetic data:
- 3 sample influencers with complete profiles
- 3 sample brands with company information
- 3 active campaigns with different requirements
- Sample conversations and messages
- Portfolio items with engagement metrics

## 🎯 Future Enhancements

- Real authentication system
- Payment processing integration
- Advanced analytics dashboard
- Video call integration
- Mobile app development
- AI-powered matching algorithm
- Contract management system

## 📄 License

This project is created for educational purposes as part of a homework assignment.
