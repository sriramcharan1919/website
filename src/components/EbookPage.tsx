import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Star, Download, Clock, Users, Target, ArrowRight, Briefcase, Play, Mail, Phone } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const EbookPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/resources" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Resources
            </Link>
            <span className="text-gray-400">•</span>
            <div className="flex items-center text-purple-600">
              <BookOpen className="w-4 h-4 mr-1" />
              Bestselling E-book
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - E-book Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Bestselling E-book
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-gray-900">The Automated </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Income Engine
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 font-medium">
                  A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover how to build multiple streams of automated income using cutting-edge AI tools and no-code platforms. Perfect for entrepreneurs who want to scale without hiring a team.
                </p>
              </div>

              {/* Reviews and Pages */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(247 reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">285 pages</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-gray-400 line-through">$599</div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">90% OFF</div>
                  <div className="text-4xl font-bold text-gray-900">$19</div>
                </div>
                <p className="text-gray-600">One-time purchase • Lifetime access</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Contact Sales - $59
                </Link>
                <button className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-base">
                  Get More Information
                </button>
              </div>

              {/* Money Back Guarantee */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            {/* Right side - What You'll Get */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 animate-fade-in-right">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">What You'll Get</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">285-page comprehensive guide</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">50+ AI tool recommendations</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Step-by-step tutorials</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Bonus video content</span>
                  </div>
                </div>

                {/* Limited Time Offer */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-4 border border-red-100">
                  <div className="text-center space-y-2">
                    <div className="text-red-600 font-bold">Limited Time Offer</div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Offer ends soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Inside the Book</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive guide covering everything you need to know about building automated income streams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Strategy Framework</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn the proven framework for identifying and implementing AI solutions that generate consistent revenue.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No-Code Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Master no-code platforms to build sophisticated automation systems without technical expertise.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Case Studies</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed breakdowns of successful automated income streams with exact implementation steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to Build Your Automated Income Engine?</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Join thousands of entrepreneurs who have transformed their businesses with AI automation. Get instant access today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base lg:text-lg"
              >
                Contact Sales - $59
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <p className="text-purple-200 italic">
              30-day money-back guarantee. Instant download.
            </p>
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

export default EbookPage;