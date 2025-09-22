import { Influencer, Brand, Campaign, PortfolioItem } from '@/types';

export const mockInfluencers: Influencer[] = [
  {
    id: '1',
    email: 'sarah@example.com',
    name: 'Sarah Johnson',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Lifestyle & fashion influencer passionate about sustainable living and authentic content.',
    location: 'Los Angeles, CA',
    socialMedia: {
      instagram: '@sarahjohnson',
      tiktok: '@sarahj_lifestyle',
      youtube: 'Sarah Johnson Lifestyle'
    },
    followers: {
      instagram: 125000,
      tiktok: 89000,
      youtube: 45000
    },
    engagementRate: 4.2,
    categories: ['Fashion', 'Lifestyle', 'Sustainability'],
    priceRange: { min: 500, max: 2000 },
    verified: true,
    portfolio: [
      {
        id: 'p1',
        title: 'Sustainable Fashion Haul',
        description: 'Showcasing eco-friendly clothing brands',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
        platform: 'instagram',
        metrics: { likes: 8500, comments: 320, shares: 180 },
        createdAt: new Date('2024-01-15')
      }
    ],
    createdAt: new Date('2023-06-01')
  },
  {
    id: '2',
    email: 'mike@example.com',
    name: 'Mike Chen',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Tech reviewer and gadget enthusiast. Making technology accessible to everyone.',
    location: 'San Francisco, CA',
    socialMedia: {
      instagram: '@mikechen_tech',
      youtube: 'Mike Chen Tech',
      twitter: '@mikechen_tech'
    },
    followers: {
      instagram: 75000,
      youtube: 200000,
      twitter: 45000
    },
    engagementRate: 6.8,
    categories: ['Technology', 'Gadgets', 'Reviews'],
    priceRange: { min: 1000, max: 5000 },
    verified: true,
    portfolio: [
      {
        id: 'p2',
        title: 'iPhone 15 Pro Review',
        description: 'Comprehensive review of the latest iPhone',
        imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
        platform: 'youtube',
        metrics: { likes: 12000, comments: 890, shares: 450, views: 150000 },
        createdAt: new Date('2024-01-20')
      }
    ],
    createdAt: new Date('2023-03-15')
  },
  {
    id: '3',
    email: 'emma@example.com',
    name: 'Emma Rodriguez',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Fitness coach and wellness advocate. Helping people achieve their health goals.',
    location: 'Miami, FL',
    socialMedia: {
      instagram: '@emma_fitness',
      tiktok: '@emma_wellness',
      youtube: 'Emma Fitness'
    },
    followers: {
      instagram: 200000,
      tiktok: 150000,
      youtube: 80000
    },
    engagementRate: 5.5,
    categories: ['Fitness', 'Wellness', 'Health'],
    priceRange: { min: 800, max: 3000 },
    verified: true,
    portfolio: [
      {
        id: 'p3',
        title: 'Morning Workout Routine',
        description: 'Quick 15-minute morning workout for busy people',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
        platform: 'tiktok',
        metrics: { likes: 25000, comments: 1200, shares: 800 },
        createdAt: new Date('2024-01-18')
      }
    ],
    createdAt: new Date('2023-01-10')
  },
  {
    id: '4',
    email: 'diana@example.com',
    name: 'Diana Ramirez',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    bio: 'Kinesiology graduate creating home workout and nutrition content. Inspiring healthier lifestyles for young adults with authentic, relatable fitness content.',
    location: 'Miami, FL',
    socialMedia: {
      instagram: '@diana_fitlife',
      tiktok: '@diana_wellness'
    },
    followers: {
      instagram: 25000,
      tiktok: 12000
    },
    engagementRate: 4.5,
    categories: ['Fitness', 'Wellness', 'Nutrition', 'Home Workouts'],
    priceRange: { min: 200, max: 800 },
    verified: true,
    audienceDemographics: {
      gender: { female: 60, male: 40 },
      age: { '18-24': 35, '25-34': 45, '35-44': 20 },
      location: { 'United States': 80, 'Canada': 15, 'Other': 5 }
    },
    portfolio: [
      {
        id: 'p4',
        title: '20-Minute Home Workout',
        description: 'Full body workout using just bodyweight exercises',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
        platform: 'instagram',
        metrics: { likes: 1200, comments: 85, shares: 45 },
        createdAt: new Date('2024-01-20')
      },
      {
        id: 'p5',
        title: 'Healthy Meal Prep Ideas',
        description: 'Quick and nutritious meal prep for busy lifestyles',
        imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop',
        platform: 'instagram',
        metrics: { likes: 950, comments: 62, shares: 38 },
        createdAt: new Date('2024-01-18')
      }
    ],
    createdAt: new Date('2023-08-15')
  }
];

export const mockBrands: Brand[] = [
  {
    id: 'b1',
    email: 'marketing@techcorp.com',
    name: 'John Smith',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    companyName: 'TechCorp',
    industry: 'Technology',
    website: 'https://techcorp.com',
    description: 'Leading technology company focused on innovation and user experience.',
    campaigns: [],
    createdAt: new Date('2023-01-01')
  },
  {
    id: 'b2',
    email: 'partnerships@fashionbrand.com',
    name: 'Lisa Wang',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    companyName: 'EcoFashion',
    industry: 'Fashion',
    website: 'https://ecofashion.com',
    description: 'Sustainable fashion brand committed to ethical production and environmental responsibility.',
    campaigns: [],
    createdAt: new Date('2023-02-15')
  },
  {
    id: 'b3',
    email: 'marketing@fitlife.com',
    name: 'David Johnson',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    companyName: 'FitLife Supplements',
    industry: 'Health & Wellness',
    website: 'https://fitlife.com',
    description: 'Premium fitness supplements and wellness products for active lifestyles.',
    campaigns: [],
    createdAt: new Date('2023-03-01')
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'TechCorp Smartphone Launch',
    description: 'Promote our latest smartphone with focus on camera features and battery life.',
    brandId: 'b1',
    budget: 50000,
    requirements: {
      platforms: ['instagram', 'youtube', 'tiktok'],
      categories: ['Technology', 'Gadgets'],
      followerRange: { min: 50000, max: 500000 },
      engagementRate: 3.0
    },
    status: 'active',
    applications: [],
    createdAt: new Date('2024-01-10'),
    deadline: new Date('2024-03-15')
  },
  {
    id: 'c2',
    title: 'EcoFashion Spring Collection',
    description: 'Showcase our sustainable spring collection with focus on eco-friendly materials.',
    brandId: 'b2',
    budget: 30000,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      categories: ['Fashion', 'Lifestyle', 'Sustainability'],
      followerRange: { min: 100000, max: 1000000 },
      engagementRate: 4.0
    },
    status: 'active',
    applications: [],
    createdAt: new Date('2024-01-15'),
    deadline: new Date('2024-04-01')
  },
  {
    id: 'c3',
    title: 'FitLife Protein Powder Campaign',
    description: 'Promote our new plant-based protein powder with workout content.',
    brandId: 'b3',
    budget: 25000,
    requirements: {
      platforms: ['instagram', 'youtube', 'tiktok'],
      categories: ['Fitness', 'Wellness', 'Health'],
      followerRange: { min: 75000, max: 300000 },
      engagementRate: 4.5
    },
    status: 'active',
    applications: [],
    createdAt: new Date('2024-01-20'),
    deadline: new Date('2024-03-30')
  },
  {
    id: 'c4',
    title: 'FlexiYoga Apparel Collection',
    description: 'Showcase our new yoga apparel line in home workout content. Perfect for micro-influencers who focus on accessible fitness.',
    brandId: 'b2',
    budget: 5000,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      categories: ['Fitness', 'Wellness', 'Home Workouts'],
      followerRange: { min: 10000, max: 100000 },
      engagementRate: 3.5
    },
    status: 'active',
    applications: [],
    matchScore: 92,
    createdAt: new Date('2024-01-22'),
    deadline: new Date('2024-04-15')
  },
  {
    id: 'c5',
    title: 'NutriBoost Protein Shake Launch',
    description: 'Create authentic content featuring our new protein shake in your daily routine and workout posts.',
    brandId: 'b3',
    budget: 3000,
    requirements: {
      platforms: ['instagram'],
      categories: ['Fitness', 'Nutrition', 'Wellness'],
      followerRange: { min: 15000, max: 50000 },
      engagementRate: 4.0
    },
    status: 'active',
    applications: [],
    matchScore: 88,
    createdAt: new Date('2024-01-23'),
    deadline: new Date('2024-04-01')
  },
  {
    id: 'c6',
    title: 'Wellness App Ambassador Program',
    description: '3-month ambassador program for fitness influencers. Monthly posts about healthy lifestyle tips and app features.',
    brandId: 'b1',
    budget: 1500,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      categories: ['Fitness', 'Wellness', 'Health'],
      followerRange: { min: 20000, max: 100000 },
      engagementRate: 4.0
    },
    status: 'active',
    applications: [],
    matchScore: 95,
    isAmbassadorProgram: true,
    programDuration: '3 months',
    createdAt: new Date('2024-01-24'),
    deadline: new Date('2024-04-30')
  }
];
