import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Briefcase, Zap, Shield, Users, Activity, Play, Mail, Phone, TrendingUp, Clock } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Animated Dashboard Component
const AnimatedDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    screening: 75,
    matchScore: 90,
    processTime: 2.3,
    candidatesProcessed: 900,
    qualityMatches: 89,
    timeSaved: 4.2
  });

  const [progressWidth, setProgressWidth] = useState(0);

  // Function to generate random numbers within specified ranges
  const generateRandomData = () => {
    return {
      screening: Math.floor(Math.random() * (100 - 50 + 1)) + 50, // 50-100
      matchScore: Math.floor(Math.random() * (100 - 80 + 1)) + 80, // 80-100
      processTime: (Math.random() * (3.0 - 0.5) + 0.5).toFixed(1), // 0.5-3.0 seconds
      candidatesProcessed: Math.floor(Math.random() * (1000 - 800 + 1)) + 800, // 800-1000
      qualityMatches: Math.floor(Math.random() * (150 - 80 + 1)) + 80, // 80-150
      timeSaved: (Math.random() * (8.0 - 3.0) + 3.0).toFixed(1) // 3.0-8.0 hours
    };
  };

  useEffect(() => {
    // Initial animation
    const timer = setTimeout(() => {
      setProgressWidth(85);
    }, 500);

    // Generate initial random data
    setDashboardData(generateRandomData());

    // Update data every 3 seconds with smooth animation
    const interval = setInterval(() => {
      setDashboardData(generateRandomData());
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative animate-fade-in-right px-2 lg:px-4">
      <div className="relative z-10">
        {/* Main AI Agent Dashboard Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300">
          <div className="space-y-4">
            {/* AI Agent Active Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">AI Agent Active</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500 animate-bounce" />
                <span className="text-xs text-green-600 font-bold">Live</span>
              </div>
            </div>

            {/* AIRA Processing Section */}
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md animate-pulse">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">AIRA Processing</h3>
                <p className="text-sm text-gray-600">
                  Screening <span className="font-bold text-blue-600 transition-all duration-1000">{dashboardData.screening}</span> candidates...
                </p>
              </div>
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 transition-all duration-1000">
                  {dashboardData.matchScore}%
                </div>
                <div className="text-xs text-gray-600 font-medium">Match Score</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3 transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1 transition-all duration-1000">
                  {dashboardData.processTime}s
                </div>
                <div className="text-xs text-gray-600 font-medium">Process Time</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Processing Speed</span>
                <span className="font-semibold text-gray-800 transition-all duration-1000">
                  {dashboardData.processTime}s per resume
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-2000 ease-out animate-pulse"
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
            </div>

            {/* Real-time Analytics */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-gray-800">Real-time Analytics</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-xs text-green-600 font-bold">Live</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">Candidates Processed</span>
                  <span className="text-sm font-bold text-blue-600 transition-all duration-1000">
                    {dashboardData.candidatesProcessed}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-green-50/50 to-blue-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">Quality Matches</span>
                  <span className="text-sm font-bold text-green-600 transition-all duration-1000">
                    {dashboardData.qualityMatches}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">Time Saved Today</span>
                  <span className="text-sm font-bold text-purple-600 transition-all duration-1000">
                    {dashboardData.timeSaved} hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full opacity-60 animate-bounce delay-1000"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full opacity-60 animate-bounce delay-2000"></div>
      <div className="absolute top-1/2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full opacity-60 animate-pulse delay-500"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-12 flex items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-8">
            {/* Left side - Hero Content */}
            <div className="space-y-6 animate-fade-in px-2 lg:px-4">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">AI Agents That </span>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-gray-900">Your Business</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Revolutionize your workflows with intelligent AI agents designed for recruitment, 
                  real estate, marketing, and trading. Automate complex processes and boost 
                  productivity by up to 10x.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  to="/products" 
                  onClick={scrollToTop}
                  className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-105 text-base lg:text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">10x</div>
                  <div className="text-gray-600 font-medium">Productivity Boost</div>
                </div>

                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">60%</div>
                  <div className="text-gray-600 font-medium">Time Saved</div>
                </div>

                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right side - AI Agent Dashboard */}
            <AnimatedDashboard />
          </div>
        </div>
      </section>

      {/* Our AI Agent Suite Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Agent Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents tailored for different industries and use cases, each designed to maximize efficiency and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AIRA - AI Recruitment Agent */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="border-t-4 border-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl -mt-8 -mx-8 mb-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AIRA - AI Recruitment Agent</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Revolutionize your hiring process with intelligent candidate screening and engagement
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Automated Resume Screening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Candidate Engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Interview Scheduling</span>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
              <div className="border-t-4 border-gray-300 rounded-t-3xl -mt-8 -mx-8 mb-6 h-1"></div>
              
              <div className="space-y-6 opacity-60">
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">More AI Agents</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Additional specialized AI agents coming soon to expand your automation capabilities
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-500">Real Estate Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-500">Marketing Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-500">Trading Analytics</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-lg font-semibold text-center">
                  Coming Soon
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                In Development
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zetaflow Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zetaflow?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI agents are designed to seamlessly integrate with your existing workflows while providing unprecedented automation capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/30 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Agents</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent agents that learn and adapt to your business processes
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/30 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline complex processes with smart automation
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/30 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-grade security with end-to-end encryption
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/30 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless integration with your existing team workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who have transformed their businesses with Zetaflow AI agents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "AIRA has transformed our recruitment process. We're reducing hiring time by 60% while improving candidate quality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">HR Director, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "The AI Real Estate Agent has helped me close deals faster by identifying perfect matches between properties and clients."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Real Estate Agent, Elite Properties</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "Our campaign ROI increased by 150% after implementing the AI Marketing Agent. It's a game changer."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ER
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">Marketing Director, GrowthCo</div>
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
            <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of companies already using Zetaflow AI agents to automate their workflows and boost productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" onClick={scrollToTop} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
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
                <h4 className="text-lg font-semibold">Contact</h4>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@zetaflow.ai</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+17327979162</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Zetaflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;