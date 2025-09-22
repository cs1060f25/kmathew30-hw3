'use client';

import { useState } from 'react';
import { TrendingUp, Search, Bot, Users, DollarSign, Target, Coffee, MapPin, TrendingDown, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { mockInfluencers, mockCampaigns } from '@/lib/mockData';

export default function SheaDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResults, setAiResults] = useState<any[]>([]);
  const [showAiResults, setShowAiResults] = useState(false);
  const [salesData, setSalesData] = useState({
    before: 2000,
    after: 7000,
    growth: 250
  });

  const handleNaturalLanguageSearch = () => {
    if (searchQuery.toLowerCase().includes('female') && 
        searchQuery.toLowerCase().includes('20s') && 
        searchQuery.toLowerCase().includes('day in the life') && 
        searchQuery.toLowerCase().includes('coffee')) {
      
      // AI finds perfect matches for Shea's criteria
      const matches = mockInfluencers.filter(influencer => 
        influencer.categories.includes('Coffee') && 
        influencer.categories.includes('Day in the Life') &&
        influencer.location.includes('Boston')
      );
      
      setAiResults(matches);
      setShowAiResults(true);
    } else {
      alert('Try searching: "I want to find females, in their 20s, who are making day in the life content, and LOVE coffee"');
    }
  };

  const handleAutoOutreach = () => {
    alert('AI Agent has automatically reached out to all 5 influencers on your behalf! They will receive personalized messages about your coffee shop.');
  };

  const handleContractSetup = () => {
    alert('Contracts have been automatically generated and sent to the influencers. They can review and sign directly on the platform.');
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
                <Coffee className="h-5 w-5 text-amber-600" />
                <span className="text-gray-600">Welcome, Shea</span>
              </div>
              <button className="btn-primary">Create Campaign</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to your AI Marketing Assistant!</h1>
            <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              <Bot className="h-4 w-4" />
              <span>AI Agent Active</span>
            </div>
          </div>
          <p className="text-gray-600">Your AI agent is ready to help you find the perfect influencers for Shea's Coffee Store. Just tell us what you're looking for in natural language!</p>
        </div>

        {/* Natural Language Search */}
        <div className="card mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Bot className="h-6 w-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900">AI-Powered Influencer Search</h2>
          </div>
          <p className="text-gray-600 mb-4">Describe the type of influencers you want to work with in your own words:</p>
          
          <div className="space-y-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="I want to find females, in their 20s, who are making 'day in the life' content, and LOVE coffee"
                className="flex-1 input-field"
              />
              <button 
                onClick={handleNaturalLanguageSearch}
                className="btn-primary"
              >
                <Search className="h-4 w-4 mr-2" />
                Search with AI
              </button>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">💡 Try this example:</h4>
              <p className="text-blue-700 text-sm">
                "I want to find females, in their 20s, who are making 'day in the life' content, and LOVE coffee"
              </p>
            </div>
          </div>
        </div>

        {/* AI Results */}
        {showAiResults && (
          <div className="card mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">AI Found 5 Perfect Matches!</h2>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleAutoOutreach}
                  className="btn-primary"
                >
                  <Bot className="h-4 w-4 mr-2" />
                  Auto-Outreach
                </button>
                <button 
                  onClick={handleContractSetup}
                  className="btn-secondary"
                >
                  Setup Contracts
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiResults.map(influencer => (
                <div key={influencer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={influencer.avatar}
                      alt={influencer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{influencer.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{influencer.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{influencer.bio}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Followers:</span>
                      <span className="font-medium">{Object.values(influencer.followers).reduce((sum, count) => sum + (count || 0), 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Engagement:</span>
                      <span className="font-medium">{influencer.engagementRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-medium">${influencer.priceRange.min}-${influencer.priceRange.max}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {influencer.categories.map(category => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Target className="h-4 w-4" />
                    <span className="font-medium">95% Match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sales Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Campaign Results</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">+{salesData.growth}%</div>
                  <div className="text-sm text-gray-600">Sales Growth</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$7,000</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Sophia Chen</h3>
                    <p className="text-sm text-gray-600">Coffee lifestyle content • 18K followers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">2,500 views</div>
                    <div className="text-xs text-gray-500">6.2% engagement</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">Maya Rodriguez</h3>
                    <p className="text-sm text-gray-600">Study session content • 12K followers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">1,800 views</div>
                    <div className="text-xs text-gray-500">7.8% engagement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Campaign</h2>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">Shea's Coffee Store Local Marketing</h3>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Promote our local Boston coffee shop to young adults who love coffee and day-in-the-life content.</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Budget: $1,500</span>
                  <span>Deadline: Mar 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Business Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Sales</span>
                  <div className="text-right">
                    <div className="font-medium">$7,000</div>
                    <div className="text-xs text-green-600">+250%</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Customers</span>
                  <div className="text-right">
                    <div className="font-medium">+180</div>
                    <div className="text-xs text-green-600">This month</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI</span>
                  <div className="text-right">
                    <div className="font-medium">400%</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Agent Status */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">AI Agent Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">5 influencers contacted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">3 contracts signed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Content posted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Analytics tracking</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800">🎉 Your campaign is performing amazingly! Consider increasing your budget for more influencers.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">📈 Try targeting college students during exam season for study content.</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-purple-800">☕ Consider seasonal campaigns for pumpkin spice season!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
