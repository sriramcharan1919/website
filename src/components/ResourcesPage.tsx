import React from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, ArrowRight, Mail, FileText, Users, TrendingUp, CheckCircle, Star, Briefcase, Play, Phone } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-16 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">E-books & Learning </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Expand your knowledge with our comprehensive collection of AI and automation guides written by industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured E-book Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Featured E-book
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              {/* Left side - E-book Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold leading-tight">
                    The Automated Income Engine
                  </h2>
                  
                  <p className="text-xl text-purple-100 leading-relaxed">
                    A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold line-through text-purple-200">$199</div>
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">90% OFF</div>
                    <div className="text-4xl font-bold">$19</div>
                  </div>
                </div>

                <Link 
                  to="/ebook"
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center text-base lg:text-lg"
                >
                  Learn More & Get Instant Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Right side - Features */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-white" />
                    <span className="text-lg font-semibold">285 pages of actionable content</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>50+ AI tool recommendations</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Step-by-step automation blueprints</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Real case studies & examples</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Bonus video tutorials</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>Lifetime updates included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our E-books Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our E-books?</h2>
            <p className="text-xl text-gray-600">
              Our e-books are crafted by industry experts with years of practical experience in AI and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Authors</h3>
              <p className="text-gray-600 leading-relaxed">
                Written by industry leaders like with years of practical experience in AI and automation
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical strategies and step-by-step guides you can implement immediately in your business
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lifetime Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Download once, access forever with free updates and additional content as we expand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Want more insights?</h2>
                <p className="text-xl text-blue-100">
                  Join our newsletter for weekly AI tips and resources delivered straight to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base lg:text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe
                </button>
              </div>
              
              <p className="text-blue-200 text-sm">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
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
                  <BookOpen className="w-4 h-4 text-white" />
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

export default ResourcesPage;