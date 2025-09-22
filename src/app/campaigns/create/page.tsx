'use client';

import { useState } from 'react';
import { ArrowLeft, Plus, X, TrendingUp } from 'lucide-react';

export default function CreateCampaignPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    platforms: [] as string[],
    categories: [] as string[],
    minFollowers: '',
    maxFollowers: '',
    minEngagement: '',
    deadline: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const platformOptions = ['Instagram', 'TikTok', 'YouTube', 'Twitter'];
  const categoryOptions = ['Fashion', 'Technology', 'Fitness', 'Lifestyle', 'Food', 'Travel', 'Beauty', 'Gaming'];

  const handlePlatformToggle = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate campaign creation
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="card max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Campaign Created!</h2>
          <p className="text-gray-600 mb-4">Your campaign has been successfully created and is now live.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <button 
              onClick={() => window.history.back()}
              className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Brandley.ai</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Campaign</h1>
          <p className="text-gray-600">Set up your campaign to attract the right influencers</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Campaign Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="input-field"
                  placeholder="e.g., Spring Collection Launch"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget ($) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="input-field"
                  placeholder="e.g., 25000"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="input-field"
                placeholder="Describe your campaign goals, requirements, and what you're looking for in influencers..."
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Deadline *
              </label>
              <input
                type="date"
                required
                value={formData.deadline}
                onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>

          {/* Platform Requirements */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Requirements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platformOptions.map(platform => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => handlePlatformToggle(platform)}
                  className={`p-4 border-2 rounded-lg text-center transition-colors ${
                    formData.platforms.includes(platform)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Category Requirements */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Content Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryOptions.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryToggle(category)}
                  className={`p-4 border-2 rounded-lg text-center transition-colors ${
                    formData.categories.includes(category)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Influencer Requirements */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Influencer Requirements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Followers
                </label>
                <input
                  type="number"
                  value={formData.minFollowers}
                  onChange={(e) => setFormData(prev => ({ ...prev, minFollowers: e.target.value }))}
                  className="input-field"
                  placeholder="e.g., 10000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Followers
                </label>
                <input
                  type="number"
                  value={formData.maxFollowers}
                  onChange={(e) => setFormData(prev => ({ ...prev, maxFollowers: e.target.value }))}
                  className="input-field"
                  placeholder="e.g., 1000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Engagement Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.minEngagement}
                  onChange={(e) => setFormData(prev => ({ ...prev, minEngagement: e.target.value }))}
                  className="input-field"
                  placeholder="e.g., 3.0"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
