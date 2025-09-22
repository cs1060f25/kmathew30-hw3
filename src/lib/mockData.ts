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
  },
  {
    id: '5',
    email: 'sophia@example.com',
    name: 'Sophia Chen',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    bio: 'Coffee enthusiast and lifestyle blogger sharing daily routines and local Boston finds. Love discovering hidden gems in the city!',
    location: 'Boston, MA',
    socialMedia: {
      instagram: '@sophia_daily',
      tiktok: '@sophia_coffee'
    },
    followers: {
      instagram: 18000,
      tiktok: 12000
    },
    engagementRate: 6.2,
    categories: ['Lifestyle', 'Coffee', 'Local Boston', 'Day in the Life'],
    priceRange: { min: 150, max: 400 },
    verified: true,
    audienceDemographics: {
      gender: { female: 75, male: 25 },
      age: { '18-24': 40, '25-34': 50, '35-44': 10 },
      location: { 'Boston': 60, 'Massachusetts': 25, 'Other': 15 }
    },
    portfolio: [
      {
        id: 'p6',
        title: 'Morning Coffee Routine',
        description: 'Day in the life content featuring local coffee shops',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
        platform: 'instagram',
        metrics: { likes: 850, comments: 45, shares: 12 },
        createdAt: new Date('2024-01-19')
      }
    ],
    createdAt: new Date('2023-09-01')
  },
  {
    id: '6',
    email: 'maya@example.com',
    name: 'Maya Rodriguez',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    bio: 'College student in Boston documenting my coffee adventures and study sessions. Always on the hunt for the perfect latte!',
    location: 'Boston, MA',
    socialMedia: {
      instagram: '@maya_studies',
      tiktok: '@maya_coffee'
    },
    followers: {
      instagram: 12000,
      tiktok: 8000
    },
    engagementRate: 7.8,
    categories: ['Coffee', 'Student Life', 'Boston', 'Study Content'],
    priceRange: { min: 100, max: 300 },
    verified: true,
    audienceDemographics: {
      gender: { female: 80, male: 20 },
      age: { '18-24': 70, '25-34': 30 },
      location: { 'Boston': 45, 'Massachusetts': 35, 'Other': 20 }
    },
    portfolio: [
      {
        id: 'p7',
        title: 'Study Session at Local Cafe',
        description: 'Productive study session with coffee and pastries',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        platform: 'tiktok',
        metrics: { likes: 1200, comments: 89, shares: 34 },
        createdAt: new Date('2024-01-21')
      }
    ],
    createdAt: new Date('2023-10-15')
  },
  {
    id: '7',
    email: 'alex@example.com',
    name: 'Alex Thompson',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Travel photographer and adventure seeker. Documenting beautiful destinations and sustainable travel practices around the world.',
    location: 'San Francisco, CA',
    socialMedia: {
      instagram: '@alex_travels',
      youtube: 'Alex Thompson Travel',
      tiktok: '@alex_adventures'
    },
    followers: {
      instagram: 85000,
      youtube: 120000,
      tiktok: 45000
    },
    engagementRate: 5.8,
    categories: ['Travel', 'Photography', 'Adventure', 'Sustainability'],
    priceRange: { min: 600, max: 2500 },
    verified: true,
    audienceDemographics: {
      gender: { female: 55, male: 45 },
      age: { '18-24': 25, '25-34': 50, '35-44': 25 },
      location: { 'United States': 60, 'Europe': 25, 'Other': 15 }
    },
    portfolio: [
      {
        id: 'p8',
        title: 'Costa Rica Eco-Adventure',
        description: 'Sustainable travel guide through Costa Rican rainforests',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
        platform: 'instagram',
        metrics: { likes: 3200, comments: 180, shares: 95 },
        createdAt: new Date('2024-01-16')
      }
    ],
    createdAt: new Date('2023-05-20')
  },
  {
    id: '8',
    email: 'jessica@example.com',
    name: 'Jessica Park',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Beauty and skincare expert sharing Korean beauty routines and product reviews. Helping people achieve their best skin.',
    location: 'Los Angeles, CA',
    socialMedia: {
      instagram: '@jessica_beauty',
      youtube: 'Jessica Beauty',
      tiktok: '@jessica_skincare'
    },
    followers: {
      instagram: 150000,
      youtube: 80000,
      tiktok: 200000
    },
    engagementRate: 7.2,
    categories: ['Beauty', 'Skincare', 'Korean Beauty', 'Product Reviews'],
    priceRange: { min: 800, max: 3500 },
    verified: true,
    audienceDemographics: {
      gender: { female: 85, male: 15 },
      age: { '18-24': 40, '25-34': 45, '35-44': 15 },
      location: { 'United States': 70, 'Asia': 20, 'Other': 10 }
    },
    portfolio: [
      {
        id: 'p9',
        title: '10-Step Korean Skincare Routine',
        description: 'Complete morning and evening skincare routine tutorial',
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        platform: 'youtube',
        metrics: { likes: 8500, comments: 420, shares: 180, views: 95000 },
        createdAt: new Date('2024-01-14')
      }
    ],
    createdAt: new Date('2023-02-10')
  },
  {
    id: '9',
    email: 'marcus@example.com',
    name: 'Marcus Johnson',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Gaming content creator and tech reviewer. Streaming daily and reviewing the latest gaming hardware and software.',
    location: 'Austin, TX',
    socialMedia: {
      instagram: '@marcus_gaming',
      youtube: 'Marcus Gaming',
      tiktok: '@marcus_plays'
    },
    followers: {
      instagram: 95000,
      youtube: 300000,
      tiktok: 180000
    },
    engagementRate: 8.5,
    categories: ['Gaming', 'Technology', 'Reviews', 'Streaming'],
    priceRange: { min: 1000, max: 5000 },
    verified: true,
    audienceDemographics: {
      gender: { female: 30, male: 70 },
      age: { '18-24': 60, '25-34': 35, '35-44': 5 },
      location: { 'United States': 75, 'Canada': 15, 'Other': 10 }
    },
    portfolio: [
      {
        id: 'p10',
        title: 'PS5 vs Xbox Series X Review',
        description: 'Comprehensive comparison of next-gen gaming consoles',
        imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
        platform: 'youtube',
        metrics: { likes: 15000, comments: 890, shares: 450, views: 200000 },
        createdAt: new Date('2024-01-12')
      }
    ],
    createdAt: new Date('2022-11-05')
  },
  {
    id: '10',
    email: 'lily@example.com',
    name: 'Lily Chen',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Food blogger and home chef sharing easy recipes and cooking tips. Making gourmet cooking accessible to everyone.',
    location: 'Portland, OR',
    socialMedia: {
      instagram: '@lily_cooks',
      youtube: 'Lily\'s Kitchen',
      tiktok: '@lily_recipes'
    },
    followers: {
      instagram: 120000,
      youtube: 150000,
      tiktok: 250000
    },
    engagementRate: 6.8,
    categories: ['Food', 'Cooking', 'Recipes', 'Lifestyle'],
    priceRange: { min: 700, max: 3000 },
    verified: true,
    audienceDemographics: {
      gender: { female: 70, male: 30 },
      age: { '18-24': 30, '25-34': 50, '35-44': 20 },
      location: { 'United States': 80, 'Canada': 15, 'Other': 5 }
    },
    portfolio: [
      {
        id: 'p11',
        title: '30-Minute Gourmet Pasta',
        description: 'Quick and easy gourmet pasta recipe for busy weeknights',
        imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop',
        platform: 'tiktok',
        metrics: { likes: 18000, comments: 1200, shares: 800 },
        createdAt: new Date('2024-01-17')
      }
    ],
    createdAt: new Date('2023-01-15')
  },
  {
    id: '11',
    email: 'ryan@example.com',
    name: 'Ryan Martinez',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bio: 'Fitness trainer and nutrition coach. Helping people build healthy habits and achieve their fitness goals through science-based approaches.',
    location: 'Denver, CO',
    socialMedia: {
      instagram: '@ryan_fitness',
      youtube: 'Ryan Fitness',
      tiktok: '@ryan_trains'
    },
    followers: {
      instagram: 180000,
      youtube: 200000,
      tiktok: 300000
    },
    engagementRate: 7.5,
    categories: ['Fitness', 'Nutrition', 'Health', 'Training'],
    priceRange: { min: 1200, max: 4000 },
    verified: true,
    audienceDemographics: {
      gender: { female: 45, male: 55 },
      age: { '18-24': 35, '25-34': 45, '35-44': 20 },
      location: { 'United States': 85, 'Canada': 10, 'Other': 5 }
    },
    portfolio: [
      {
        id: 'p12',
        title: 'Full Body HIIT Workout',
        description: 'High-intensity interval training for maximum results',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
        platform: 'youtube',
        metrics: { likes: 12000, comments: 650, shares: 320, views: 150000 },
        createdAt: new Date('2024-01-13')
      }
    ],
    createdAt: new Date('2022-09-20')
  },
  {
    id: '12',
    email: 'zoe@example.com',
    name: 'Zoe Williams',
    type: 'influencer',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    bio: 'Fashion and lifestyle influencer sharing affordable style tips and sustainable fashion choices. Making fashion accessible and eco-friendly.',
    location: 'New York, NY',
    socialMedia: {
      instagram: '@zoe_style',
      youtube: 'Zoe\'s Style',
      tiktok: '@zoe_fashion'
    },
    followers: {
      instagram: 220000,
      youtube: 100000,
      tiktok: 400000
    },
    engagementRate: 8.2,
    categories: ['Fashion', 'Lifestyle', 'Sustainable Fashion', 'Style Tips'],
    priceRange: { min: 1500, max: 6000 },
    verified: true,
    audienceDemographics: {
      gender: { female: 90, male: 10 },
      age: { '18-24': 50, '25-34': 40, '35-44': 10 },
      location: { 'United States': 70, 'Europe': 20, 'Other': 10 }
    },
    portfolio: [
      {
        id: 'p13',
        title: 'Sustainable Fashion Haul',
        description: 'Thrifted and eco-friendly fashion finds under $50',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
        platform: 'tiktok',
        metrics: { likes: 25000, comments: 1800, shares: 1200 },
        createdAt: new Date('2024-01-15')
      }
    ],
    createdAt: new Date('2022-07-10')
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
  },
  {
    id: 'b4',
    email: 'shea@sheascoffee.com',
    name: 'Shea Mathew',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    companyName: "Shea's Coffee Store",
    industry: 'Food & Beverage',
    website: 'https://sheascoffee.com',
    description: 'Local coffee shop in Boston serving artisanal coffee and pastries. Family-owned business passionate about bringing the community together over great coffee.',
    location: 'Boston, MA',
    budget: 5000,
    targetAudience: 'Young adults, coffee lovers, local community',
    campaigns: [],
    createdAt: new Date('2024-01-01')
  },
  {
    id: 'b5',
    email: 'marketing@greenliving.com',
    name: 'Sarah Green',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=face',
    companyName: 'Green Living Co.',
    industry: 'Sustainability',
    website: 'https://greenliving.com',
    description: 'Sustainable lifestyle brand offering eco-friendly home products, organic skincare, and zero-waste solutions for conscious consumers.',
    campaigns: [],
    createdAt: new Date('2023-06-15')
  },
  {
    id: 'b6',
    email: 'partnerships@fitgear.com',
    name: 'Mike Rodriguez',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face',
    companyName: 'FitGear Pro',
    industry: 'Fitness & Sports',
    website: 'https://fitgearpro.com',
    description: 'Premium fitness equipment and apparel brand. We create high-quality gear for serious athletes and fitness enthusiasts.',
    campaigns: [],
    createdAt: new Date('2023-04-10')
  },
  {
    id: 'b7',
    email: 'collab@beautybliss.com',
    name: 'Emma Kim',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop&crop=face',
    companyName: 'Beauty Bliss',
    industry: 'Beauty & Skincare',
    website: 'https://beautybliss.com',
    description: 'Korean-inspired skincare brand focused on natural ingredients and innovative formulations. Helping people achieve their best skin naturally.',
    campaigns: [],
    createdAt: new Date('2023-03-20')
  },
  {
    id: 'b8',
    email: 'marketing@gamezone.com',
    name: 'Alex Chen',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=150&h=150&fit=crop&crop=face',
    companyName: 'GameZone',
    industry: 'Gaming & Technology',
    website: 'https://gamezone.com',
    description: 'Leading gaming hardware and accessories company. We create cutting-edge gaming peripherals for competitive and casual gamers.',
    campaigns: [],
    createdAt: new Date('2023-01-15')
  },
  {
    id: 'b9',
    email: 'partnerships@culinarycraft.com',
    name: 'James Wilson',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop&crop=face',
    companyName: 'Culinary Craft',
    industry: 'Food & Kitchen',
    website: 'https://culinarycraft.com',
    description: 'Premium kitchen tools and cookware brand. We design beautiful, functional kitchen equipment for home chefs and cooking enthusiasts.',
    campaigns: [],
    createdAt: new Date('2023-05-05')
  },
  {
    id: 'b10',
    email: 'collab@stylehub.com',
    name: 'Rachel Taylor',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop&crop=face',
    companyName: 'StyleHub',
    industry: 'Fashion & Apparel',
    website: 'https://stylehub.com',
    description: 'Fast-fashion brand offering trendy, affordable clothing for young adults. We make fashion accessible and fun for everyone.',
    campaigns: [],
    createdAt: new Date('2022-12-01')
  },
  {
    id: 'b11',
    email: 'marketing@wellnessplus.com',
    name: 'Dr. Sarah Johnson',
    type: 'brand',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    companyName: 'Wellness Plus',
    industry: 'Health & Wellness',
    website: 'https://wellnessplus.com',
    description: 'Health and wellness brand offering supplements, fitness programs, and wellness coaching. Helping people live their healthiest lives.',
    campaigns: [],
    createdAt: new Date('2023-07-12')
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'TechCorp Smartphone Launch',
    description: 'Promote our latest smartphone with focus on camera features and battery life.',
    brandId: 'b1',
    brandName: 'TechCorp',
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
    brandName: 'EcoFashion',
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
    brandName: 'FitLife Supplements',
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
    brandName: 'EcoFashion',
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
    brandName: 'FitLife Supplements',
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
    brandName: 'TechCorp',
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
  },
  {
    id: 'c7',
    title: "Shea's Coffee Store Local Marketing",
    description: 'Promote our local Boston coffee shop to young adults who love coffee and day-in-the-life content. Perfect for micro-influencers in the Boston area.',
    brandId: 'b4',
    brandName: "Shea's Coffee Store",
    budget: 1500,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      categories: ['Coffee', 'Lifestyle', 'Local Boston', 'Day in the Life'],
      followerRange: { min: 5000, max: 50000 },
      engagementRate: 4.0
    },
    status: 'active',
    applications: [],
    matchScore: 95,
    isLocalBusiness: true,
    location: 'Boston, MA',
    createdAt: new Date('2024-01-25'),
    deadline: new Date('2024-03-15')
  },
  {
    id: 'c4',
    title: 'Green Living Eco-Products Launch',
    brandId: 'b5',
    brandName: 'Green Living Co.',
    description: 'Launch campaign for our new line of eco-friendly home products. Looking for sustainability-focused influencers to showcase our zero-waste solutions.',
    budget: 8000,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      deliverables: ['3 Instagram posts', '2 TikTok videos', '1 Instagram Story series'],
      timeline: '4 weeks',
      audience: {
        age: ['25-45'],
        interests: ['sustainability', 'eco-friendly', 'wellness']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 88,
    createdAt: new Date('2024-01-20'),
    deadline: new Date('2024-03-01')
  },
  {
    id: 'c5',
    title: 'FitGear Pro Equipment Review',
    brandId: 'b6',
    brandName: 'FitGear Pro',
    description: 'Product review campaign for our new premium fitness equipment line. Seeking fitness influencers to demonstrate and review our latest gear.',
    budget: 15000,
    requirements: {
      platforms: ['youtube', 'instagram'],
      deliverables: ['1 YouTube review video (10+ minutes)', '3 Instagram posts', 'Instagram Stories'],
      timeline: '3 weeks',
      audience: {
        age: ['18-40'],
        interests: ['fitness', 'gym', 'athletics']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 92,
    createdAt: new Date('2024-01-18'),
    deadline: new Date('2024-02-28')
  },
  {
    id: 'c6',
    title: 'Beauty Bliss Skincare Routine',
    brandId: 'b7',
    brandName: 'Beauty Bliss',
    description: 'Skincare routine campaign featuring our Korean-inspired products. Looking for beauty influencers to create authentic skincare content.',
    budget: 12000,
    requirements: {
      platforms: ['instagram', 'tiktok', 'youtube'],
      deliverables: ['2 Instagram posts', '3 TikTok videos', '1 YouTube tutorial'],
      timeline: '5 weeks',
      audience: {
        age: ['18-35'],
        interests: ['skincare', 'beauty', 'korean beauty']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 85,
    createdAt: new Date('2024-01-16'),
    deadline: new Date('2024-03-10')
  },
  {
    id: 'c7',
    title: 'GameZone Gaming Setup Tour',
    brandId: 'b8',
    brandName: 'GameZone',
    description: 'Gaming setup showcase campaign. Seeking gaming influencers to feature our latest gaming peripherals in their setup tours.',
    budget: 20000,
    requirements: {
      platforms: ['youtube', 'twitch', 'instagram'],
      deliverables: ['1 YouTube setup tour video', '2 Twitch streams', 'Instagram posts'],
      timeline: '6 weeks',
      audience: {
        age: ['16-35'],
        interests: ['gaming', 'esports', 'technology']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 90,
    createdAt: new Date('2024-01-14'),
    deadline: new Date('2024-03-05')
  },
  {
    id: 'c8',
    title: 'Culinary Craft Kitchen Essentials',
    brandId: 'b9',
    brandName: 'Culinary Craft',
    description: 'Kitchen essentials campaign showcasing our premium cookware. Looking for food influencers to demonstrate our products in cooking content.',
    budget: 10000,
    requirements: {
      platforms: ['instagram', 'tiktok', 'youtube'],
      deliverables: ['3 Instagram posts', '4 TikTok cooking videos', '1 YouTube recipe video'],
      timeline: '4 weeks',
      audience: {
        age: ['25-50'],
        interests: ['cooking', 'kitchen', 'food', 'recipes']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 87,
    createdAt: new Date('2024-01-12'),
    deadline: new Date('2024-02-25')
  },
  {
    id: 'c9',
    title: 'StyleHub Spring Collection',
    brandId: 'b10',
    brandName: 'StyleHub',
    description: 'Spring fashion collection launch. Seeking fashion influencers to showcase our new trendy clothing line for young adults.',
    budget: 25000,
    requirements: {
      platforms: ['instagram', 'tiktok'],
      deliverables: ['5 Instagram posts', '6 TikTok fashion videos', 'Instagram Stories'],
      timeline: '6 weeks',
      audience: {
        age: ['16-30'],
        interests: ['fashion', 'style', 'trends']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 89,
    createdAt: new Date('2024-01-10'),
    deadline: new Date('2024-03-20')
  },
  {
    id: 'c10',
    title: 'Wellness Plus Health Program',
    brandId: 'b11',
    brandName: 'Wellness Plus',
    description: 'Health and wellness program promotion. Looking for fitness and wellness influencers to share our comprehensive health program.',
    budget: 18000,
    requirements: {
      platforms: ['youtube', 'instagram'],
      deliverables: ['2 YouTube videos', '4 Instagram posts', 'Instagram Stories'],
      timeline: '5 weeks',
      audience: {
        age: ['25-45'],
        interests: ['health', 'wellness', 'fitness', 'nutrition']
      }
    },
    status: 'active',
    applications: [],
    matchScore: 91,
    createdAt: new Date('2024-01-08'),
    deadline: new Date('2024-03-12')
  }
];
