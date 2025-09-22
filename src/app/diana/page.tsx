'use client';

import { useState } from 'react';
import { TrendingUp, Star, Clock, DollarSign, Users, Target, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { mockCampaigns } from '@/lib/mockData';

export default function DianaDashboard() {
  const [selectedCampaign, setSelectedCampaign] = useState(mockCampaigns[3]); // FlexiYoga campaign
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  // Filter campaigns that match Diana's profile (micro-influencer, fitness focus)
  const matchingCampaigns = mockCampaigns.filter(campaign => 
    campaign.matchScore && campaign.matchScore >= 85
  );

  const handleApplyToCampaign = (campaignId: string) => {
    // Simulate application submission
    console.log(`Applied to campaign ${campaignId}`);
    alert('Application submitted successfully! The brand will review your proposal within 24 hours.');
  };

  const handlePaymentRelease = () => {
    setShowPaymentSuccess(true);
    setTimeout(() => setShowPaymentSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Brandley.ai</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face" 
                  alt="Diana Ramirez" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-600">Welcome, Diana</span>
              </div>
              <button className="btn-primary">Update Profile</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Diana!</h1>
            <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>Verified</span>
            </div>
          </div>
          <p className="text-gray-600">Your AI-matched campaigns are ready. Focus on creating amazing content while we handle the business side.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month's Earnings</p>
                <p className="text-2xl font-bold text-gray-900">$1,200</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Followers</p>
                <p className="text-2xl font-bold text-gray-900">37K</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">4.5%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI-Matched Campaigns */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">AI-Matched Campaigns</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Perfect matches for your audience</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {matchingCampaigns.map(campaign => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{campaign.title}</h3>
                          <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                            <Target className="h-3 w-3" />
                            <span>{campaign.matchScore}% Match</span>
                          </div>
                          {campaign.isAmbassadorProgram && (
                            <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                              <Calendar className="h-3 w-3" />
                              <span>{campaign.programDuration}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{campaign.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>${campaign.budget.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Due {campaign.deadline.toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{campaign.requirements.followerRange.min.toLocaleString()}-{campaign.requirements.followerRange.max.toLocaleString()} followers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleApplyToCampaign(campaign.id)}
                        className="btn-primary"
                      >
                        Apply Now
                      </button>
                      <button className="btn-secondary">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message Brand
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Active Campaigns</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">FlexiYoga Apparel Collection</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Creating Instagram Reel showcasing yoga apparel in home workout</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Payment: $500 (Escrow Protected)</span>
                    <button 
                      onClick={handlePaymentRelease}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Complete & Release Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Audience Insights */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Your Audience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Gender</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Female</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Male</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Age Groups</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">18-24</span>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">25-34</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">35-44</span>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Payment of $500 received from FlexiYoga</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">New match: Wellness App Ambassador Program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Profile viewed by 3 brands this week</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">AI Tips for You</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">💡 Post at 7 PM EST for highest engagement with your audience</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800">📈 Try IGTV format for longer workout content - 23% higher engagement</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-purple-800">🎯 Your nutrition content performs 15% better than fitness-only posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Payment Success Modal */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="card max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Released!</h2>
            <p className="text-gray-600 mb-4">$500 has been transferred to your account. Great work on the campaign!</p>
            <button 
              onClick={() => setShowPaymentSuccess(false)}
              className="btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
