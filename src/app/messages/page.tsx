'use client';

import { useState } from 'react';
import { ArrowLeft, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const mockConversations = [
  {
    id: '1',
    participants: ['b1', '1'],
    lastMessage: {
      id: 'm1',
      senderId: '1',
      receiverId: 'b1',
      content: 'Hi! I saw your smartphone campaign and I\'m very interested. I have 200K YouTube subscribers and specialize in tech reviews.',
      createdAt: new Date('2024-01-22T10:30:00'),
      read: false
    },
    updatedAt: new Date('2024-01-22T10:30:00'),
    influencer: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      verified: true
    }
  },
  {
    id: '2',
    participants: ['b1', '2'],
    lastMessage: {
      id: 'm2',
      senderId: 'b1',
      receiverId: '2',
      content: 'Thanks for your interest! We\'d love to work with you. What are your rates for a 2-minute review video?',
      createdAt: new Date('2024-01-21T15:45:00'),
      read: true
    },
    updatedAt: new Date('2024-01-21T15:45:00'),
    influencer: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      verified: true
    }
  }
];

const mockMessages = [
  {
    id: 'm1',
    senderId: '1',
    receiverId: 'b1',
    content: 'Hi! I saw your smartphone campaign and I\'m very interested. I have 200K YouTube subscribers and specialize in tech reviews.',
    createdAt: new Date('2024-01-22T10:30:00'),
    read: false
  },
  {
    id: 'm2',
    senderId: 'b1',
    receiverId: '1',
    content: 'Hi Mike! Thanks for reaching out. Your content looks great and aligns perfectly with our brand. What are your rates for a comprehensive review?',
    createdAt: new Date('2024-01-22T11:15:00'),
    read: true
  },
  {
    id: 'm3',
    senderId: '1',
    receiverId: 'b1',
    content: 'For a detailed review video (5-8 minutes), my rate is $3,500. This includes script review, filming, editing, and posting across all my platforms.',
    createdAt: new Date('2024-01-22T11:45:00'),
    read: true
  },
  {
    id: 'm4',
    senderId: 'b1',
    receiverId: '1',
    content: 'That sounds reasonable. We can work with that budget. When would you be available to start?',
    createdAt: new Date('2024-01-22T12:00:00'),
    read: true
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

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
              <span className="ml-2 text-2xl font-bold text-gray-900">Brandley.ai</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Connect and collaborate with influencers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversations</h2>
              <div className="space-y-2 overflow-y-auto">
                {mockConversations.map(conversation => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full p-4 text-left rounded-lg transition-colors ${
                      selectedConversation.id === conversation.id
                        ? 'bg-primary-50 border border-primary-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={conversation.influencer.avatar}
                        alt={conversation.influencer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900 truncate">
                            {conversation.influencer.name}
                          </h3>
                          {conversation.influencer.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {conversation.lastMessage.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {conversation.lastMessage.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                      {!conversation.lastMessage.read && (
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="card h-full flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    src={selectedConversation.influencer.avatar}
                    alt={selectedConversation.influencer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {selectedConversation.influencer.name}
                    </h3>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Video className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {mockMessages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'b1' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.senderId === 'b1'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.senderId === 'b1' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 input-field"
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
