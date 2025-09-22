'use client';

import { useState } from 'react';
import { User, Users, TrendingUp, Star } from 'lucide-react';

export default function HomePage() {
  const [userType, setUserType] = useState<'brand' | 'influencer' | null>(null);

  if (userType === 'brand') {
    return <BrandDashboard />;
  }

  if (userType === 'influencer') {
    return <InfluencerDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">InfluenceHub</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Brands with
            <span className="text-primary-600"> Influencers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate platform for authentic influencer marketing. Brands discover perfect creators, 
            influencers find meaningful partnerships.
          </p>
          
          {/* User Type Selection */}
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose your role</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setUserType('brand')}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary-200 group"
              >
                <User className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">I'm a Brand</h3>
                <p className="text-gray-600">
                  Find and collaborate with influencers to promote your products and services.
                </p>
              </button>
              
              <button
                onClick={() => setUserType('influencer')}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary-200 group"
              >
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">I'm an Influencer</h3>
                <p className="text-gray-600">
                  Connect with brands and monetize your content through authentic partnerships.
                </p>
              </button>
            </div>
          </div>

          {/* Demo Section */}
          <div className="mt-20 mb-16">
            <div className="card max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">See Diana's Success Story</h2>
              <p className="text-gray-600 mb-6">
                Watch how Diana Ramirez, a micro-influencer from Miami, transformed her inconsistent income 
                into a sustainable business with our platform.
              </p>
              <a href="/demo" className="btn-primary">
                View Diana's Journey
              </a>
            </div>
          </div>

          {/* Features */}
          <div id="features" className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose InfluenceHub?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Creators</h3>
                <p className="text-gray-600">
                  All influencers are verified with authentic engagement metrics and portfolio reviews.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h3>
                <p className="text-gray-600">
                  Our AI-powered algorithm matches brands with the perfect influencers for their campaigns.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Protected transactions with milestone-based payments and dispute resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Brand Dashboard Component
function BrandDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">InfluenceHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, TechCorp</span>
              <a href="/campaigns/create" className="btn-primary">Create Campaign</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Brand Dashboard</h1>
          <p className="text-gray-600">Manage your campaigns and discover influencers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaign Stats */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Campaigns</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">TechCorp Smartphone Launch</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Promote our latest smartphone with focus on camera features</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Budget: $50,000</span>
                    <span>Deadline: Mar 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Influencers</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Mike Chen" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Mike Chen</h3>
                    <p className="text-sm text-gray-600">Tech reviewer • 200K YouTube followers</p>
                    <p className="text-sm text-gray-500">Engagement: 6.8% • Price: $1,000-$5,000</p>
                  </div>
                  <a href="/messages" className="btn-primary text-sm">Connect</a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Campaigns</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Spent</span>
                  <span className="font-medium">$12,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Connections</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">New application from Sarah Johnson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Campaign "Spring Collection" launched</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Influencer Dashboard Component
function InfluencerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">InfluenceHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, Sarah Johnson</span>
              <a href="/profile" className="btn-primary">Update Profile</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Influencer Dashboard</h1>
          <p className="text-gray-600">Manage your profile and discover brand opportunities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Campaigns</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">EcoFashion Spring Collection</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Perfect Match</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Showcase sustainable spring collection with eco-friendly materials</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>Budget: $30,000</span>
                    <span>Deadline: Apr 1, 2024</span>
                  </div>
                  <a href="/messages" className="btn-primary text-sm">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">My Applications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">TechCorp Smartphone Launch</h3>
                    <p className="text-sm text-gray-600">Applied on Jan 12, 2024</p>
                  </div>
                  <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Profile Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Followers</span>
                  <span className="font-medium">259K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Engagement Rate</span>
                  <span className="font-medium">4.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Earnings This Month</span>
                  <span className="font-medium">$3,200</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Messages</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">New message from EcoFashion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Application accepted by TechCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
