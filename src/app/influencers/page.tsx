'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Users, Heart, MessageCircle, Star, TrendingUp } from 'lucide-react';
import { mockInfluencers } from '@/lib/mockData';

export default function InfluencersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('followers');

  const categories = ['Fashion', 'Technology', 'Fitness', 'Lifestyle', 'Food', 'Travel', 'Beauty', 'Gaming'];

  const filteredInfluencers = mockInfluencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         influencer.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || influencer.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    switch (sortBy) {
      case 'followers':
        const aTotal = Object.values(a.followers).reduce((sum, count) => sum + (count || 0), 0);
        const bTotal = Object.values(b.followers).reduce((sum, count) => sum + (count || 0), 0);
        return bTotal - aTotal;
      case 'engagement':
        return b.engagementRate - a.engagementRate;
      case 'price':
        return a.priceRange.min - b.priceRange.min;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Brandley.ai</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, TechCorp</span>
              <button className="btn-primary">Create Campaign</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Discover Influencers</h1>
          <p className="text-gray-600">Find the perfect creators for your brand</p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search influencers by name or bio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field"
              >
                <option value="followers">Sort by Followers</option>
                <option value="engagement">Sort by Engagement</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-6">
          {sortedInfluencers.map(influencer => {
            const totalFollowers = Object.values(influencer.followers).reduce((sum, count) => sum + (count || 0), 0);
            
            return (
              <div key={influencer.id} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={influencer.avatar}
                    alt={influencer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{influencer.name}</h3>
                      {influencer.verified && (
                        <Star className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {influencer.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {totalFollowers.toLocaleString()} followers
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{influencer.bio}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {influencer.categories.map(category => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Engagement:</span>
                    <span className="font-medium ml-1">{influencer.engagementRate}%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Price:</span>
                    <span className="font-medium ml-1">
                      ${influencer.priceRange.min.toLocaleString()}-${influencer.priceRange.max.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Connect
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {sortedInfluencers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No influencers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </main>
    </div>
  );
}
