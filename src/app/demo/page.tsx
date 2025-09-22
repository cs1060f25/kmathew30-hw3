'use client';

import { useState } from 'react';
import { ArrowLeft, Play, Users, Target, DollarSign, CheckCircle, TrendingUp, Star, Upload, MessageCircle } from 'lucide-react';

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Diana's Challenge",
      description: "Micro-influencer struggling with inconsistent income and poor campaign matching",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Before InfluenceHub:</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Sporadic brand deals with delayed payments</li>
              <li>• Hours spent on outreach via DMs</li>
              <li>• Poorly matched campaigns</li>
              <li>• Juggling side gigs as personal trainer</li>
            </ul>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" 
              alt="Diana Ramirez" 
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Diana Ramirez</h3>
            <p className="text-gray-600">25K Instagram followers • Fitness & Wellness</p>
          </div>
        </div>
      )
    },
    {
      title: "AI-Powered Matching",
      description: "Smart algorithm connects Diana with perfect brand opportunities",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-900">Perfect Match: 95%</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Wellness App Ambassador</h4>
              <p className="text-sm text-gray-600 mb-3">3-month program, $1,500 total</p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Fitness</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Wellness</span>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">Great Match: 92%</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2">FlexiYoga Apparel</h4>
              <p className="text-sm text-gray-600 mb-3">Single campaign, $500</p>
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Fitness</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Home Workouts</span>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">AI Matching Benefits:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 24-hour campaign matching</li>
              <li>• Audience demographic alignment</li>
              <li>• Engagement rate compatibility</li>
              <li>• Brand value alignment</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Streamlined Collaboration",
      description: "In-platform tools make content creation and feedback seamless",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Upload Content</h4>
              <p className="text-sm text-gray-600">Easy file upload with preview</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Brand Feedback</h4>
              <p className="text-sm text-gray-600">Real-time collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Quick Approval</h4>
              <p className="text-sm text-gray-600">Streamlined review process</p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">Collaboration Benefits:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• No more endless email threads</li>
              <li>• Clear revision tracking</li>
              <li>• 2-day collaboration vs. weeks</li>
              <li>• Professional communication</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Secure Payments",
      description: "Escrow system ensures timely compensation",
      content: (
        <div className="space-y-4">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">FlexiYoga Campaign</h4>
              <span className="text-green-600 font-medium">$500</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Payment held in escrow</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Content approved by brand</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Payment released within 24 hours</span>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">Payment Benefits:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• No more weeks-long payment delays</li>
              <li>• Protected transactions</li>
              <li>• Automatic release upon completion</li>
              <li>• Dispute resolution system</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Growth & Success",
      description: "Diana's transformation into a sustainable influencer business",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-medium text-gray-900 mb-4">Before vs After</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Income</span>
                  <div className="text-right">
                    <span className="text-red-600 line-through">$800</span>
                    <span className="text-green-600 font-medium ml-2">$1,200</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time on Admin</span>
                  <div className="text-right">
                    <span className="text-red-600 line-through">15 hrs/week</span>
                    <span className="text-green-600 font-medium ml-2">3 hrs/week</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Campaign Success Rate</span>
                  <div className="text-right">
                    <span className="text-red-600 line-through">40%</span>
                    <span className="text-green-600 font-medium ml-2">85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <h4 className="font-medium text-gray-900 mb-4">Long-term Partnership</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">3-month ambassador program</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="text-sm">$1,500 guaranteed income</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">40% income increase</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">Diana's Success:</h4>
            <p className="text-sm text-green-700">
              "InfluenceHub transformed my fragmented influencer experience into a structured, rewarding business. 
              I can focus on creating authentic content while the platform handles the business side. 
              My income is now stable and growing!"
            </p>
          </div>
        </div>
      )
    }
  ];

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
              <TrendingUp className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">InfluenceHub</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Diana's Journey with InfluenceHub</h1>
          <p className="text-gray-600">See how our platform transforms micro-influencer challenges into sustainable success</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep + 1} of {demoSteps.length}</span>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / demoSteps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Step Content */}
        <div className="card mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{demoSteps[currentStep].title}</h2>
            <p className="text-gray-600">{demoSteps[currentStep].description}</p>
          </div>
          {demoSteps[currentStep].content}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex space-x-2">
            {demoSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
            disabled={currentStep === demoSteps.length - 1}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        {/* Call to Action */}
        {currentStep === demoSteps.length - 1 && (
          <div className="text-center mt-8">
            <div className="card max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Transform Your Influencer Journey?</h3>
              <p className="text-gray-600 mb-6">Join Diana and thousands of other influencers building sustainable careers</p>
              <div className="space-y-3">
                <a href="/diana" className="w-full btn-primary block text-center">
                  Try Diana's Dashboard
                </a>
                <a href="/" className="w-full btn-secondary block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
