export interface User {
  id: string;
  email: string;
  name: string;
  type: 'brand' | 'influencer';
  avatar?: string;
  createdAt: Date;
}

export interface Influencer extends User {
  type: 'influencer';
  bio: string;
  location: string;
  socialMedia: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    twitter?: string;
  };
  followers: {
    instagram?: number;
    tiktok?: number;
    youtube?: number;
    twitter?: number;
  };
  engagementRate: number;
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  portfolio: PortfolioItem[];
  verified: boolean;
  audienceDemographics?: {
    gender: { female: number; male: number };
    age: { [key: string]: number };
    location: { [key: string]: number };
  };
}

export interface Brand extends User {
  type: 'brand';
  companyName: string;
  industry: string;
  website?: string;
  description: string;
  location?: string;
  budget?: number;
  targetAudience?: string;
  campaigns: Campaign[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'twitter';
  metrics: {
    likes: number;
    comments: number;
    shares: number;
    views?: number;
  };
  createdAt: Date;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  brandId: string;
  brandName: string;
  budget: number;
  requirements: {
    platforms: string[];
    deliverables?: string[];
    timeline?: string;
    audience?: {
      age: string[];
      interests: string[];
    };
    categories?: string[];
    followerRange?: {
      min: number;
      max: number;
    };
    engagementRate?: number;
  };
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  applications: CampaignApplication[];
  createdAt: Date;
  deadline: Date;
  matchScore?: number;
  isAmbassadorProgram?: boolean;
  programDuration?: string;
  isLocalBusiness?: boolean;
  location?: string;
}

export interface CampaignApplication {
  id: string;
  campaignId: string;
  influencerId: string;
  message: string;
  proposedPrice: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: Date;
}
