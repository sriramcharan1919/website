import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Zap, Bell, ArrowRight, Briefcase, Play, Mail, Phone, FileText, TrendingUp } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const LoadMorePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/blog" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>
            <span className="text-gray-400">•</span>
            <div className="flex items-center text-purple-600">
              <FileText className="w-4 h-4 mr-1" />
              More Articles
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-16 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-lg font-medium mb-8">
              <TrendingUp className="w-5 h-5 mr-3" />
              More Articles Coming Soon
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">More </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  AI Insights
                </span>
                <br />
                <span className="text-gray-900">Coming Soon</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We're working on more comprehensive articles about AI automation, workflow optimization, and cutting-edge technology insights. Stay tuned for our upcoming content!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base"
              >
                <Bell className="w-5 h-5 mr-2" />
                Get Notified About New Articles
              </Link>
              <Link 
                to="/blog"
                onClick={scrollToTop}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center text-base"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Current Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Coming Next</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're preparing in-depth articles covering the latest trends and best practices in AI automation and business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced AI Strategies</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep dives into advanced AI implementation strategies for enterprise-level automation and optimization.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Case Studies</h3>
              <p className="text-gray-600 leading-relaxed">
                Real-world success stories and detailed case studies from businesses that have transformed with AI.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future Trends Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert analysis of emerging AI trends and their potential impact on various industries and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Topics Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Article Topics</h2>
            <p className="text-xl text-gray-600">
              Here's a preview of the exciting content we're preparing for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Agent Development Best Practices</h3>
                  <p className="text-gray-600 text-sm">A comprehensive guide to building, training, and deploying AI agents for maximum efficiency.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">ROI Measurement in AI Automation</h3>
                  <p className="text-gray-600 text-sm">Learn how to measure and optimize the return on investment for your AI automation initiatives.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise AI Integration Strategies</h3>
                  <p className="text-gray-600 text-sm">Strategic approaches to integrating AI solutions into existing enterprise workflows and systems.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Future of Work: AI and Human Collaboration</h3>
                  <p className="text-gray-600 text-sm">Exploring how AI will reshape the workplace and enhance human-AI collaboration in the coming years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Stay in the Loop</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be the first to read our latest articles and insights. Contact us to join our exclusive content updates list.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center"
              >
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Zetaflow</h3>
              <p className="text-gray-400">
                Revolutionizing business processes with AI-powered agents and intelligent workflow automation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Products</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>AI Recruitment Agent</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Resources</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>E-books</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Contact Info</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@zetaflow.ai</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+17327979162</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>Copyright © 2025 Zetaflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoadMorePage;