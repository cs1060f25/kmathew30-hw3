'use client';

import { useState } from 'react';
import { TrendingUp, Menu, X, Home, Users, MessageCircle, Plus, User } from 'lucide-react';

interface NavigationProps {
  userType: 'brand' | 'influencer';
  userName: string;
}

export default function Navigation({ userType, userName }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandNavItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Discover Influencers', href: '/influencers', icon: Users },
    { name: 'Messages', href: '/messages', icon: MessageCircle },
    { name: 'Create Campaign', href: '/campaigns/create', icon: Plus },
  ];

  const influencerNavItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'My Profile', href: '/profile', icon: User },
    { name: 'Messages', href: '/messages', icon: MessageCircle },
  ];

  const navItems = userType === 'brand' ? brandNavItems : influencerNavItems;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">InfluenceHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hidden sm:block">Welcome, {userName}</span>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
