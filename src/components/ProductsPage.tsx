import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Target, TrendingUp, Clock, CheckCircle, Play, Building, UserCheck, Briefcase, Mail, Phone, MapPin, Calendar, BarChart3, MessageSquare, Zap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Enhanced Animated AIRA Dashboard Component
const AnimatedAIRADashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    candidatesScreened: 247,
    qualifiedMatches: 89,
    processTime: 2.3
  });

  const [progressWidth, setProgressWidth] = useState(0);

  // Function to generate random numbers within specified ranges
  const generateRandomData = () => {
    return {
      candidatesScreened: Math.floor(Math.random() * (500 - 150 + 1)) + 150, // 150-500
      qualifiedMatches: Math.floor(Math.random() * (100 - 90 + 1)) + 90, // 90-100
      processTime: (Math.random() * (3.0 - 0.5) + 0.5).toFixed(1) // 0.5-3.0 seconds
    };
  };

  useEffect(() => {
    // Initial animation for progress bar
    const timer = setTimeout(() => {
      setProgressWidth(85);
    }, 500);

    // Generate initial random data
    setDashboardData(generateRandomData());

    // Update data every 3 seconds with smooth animation
    const interval = setInterval(() => {
      setDashboardData(generateRandomData());
      // Randomize progress bar width between 70-95%
      setProgressWidth(Math.floor(Math.random() * (95 - 70 + 1)) + 70);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative animate-fade-in-right px-2 lg:px-4">
      {/* Enhanced Z-axis container with depth */}
      <div className="relative z-20 transform perspective-1000">
        {/* Main AIRA Dashboard Card with enhanced depth */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-y-5" style={{ transformStyle: 'preserve-3d' }}>
          <div className="space-y-6">
            {/* Dashboard Header with live indicator */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Live AIRA Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse absolute"></div>
                <span className="text-sm font-medium text-green-600 animate-pulse">Live</span>
              </div>
            </div>

            {/* Enhanced Stats Grid with animations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 border border-blue-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 transition-all duration-1000">
                  {dashboardData.candidatesScreened}
                </div>
                <div className="text-sm text-gray-600 font-medium">Candidates Screened</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 transition-all duration-1000">
                  {dashboardData.qualifiedMatches}
                </div>
                <div className="text-sm text-gray-600 font-medium">Qualified Matches</div>
              </div>
            </div>

            {/* Enhanced Processing Speed with animated progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Processing Speed</span>
                <span className="text-gray-900 font-bold transition-all duration-1000">
                  {dashboardData.processTime}s per resume
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                  style={{ width: `${progressWidth}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Real-time Status Indicators */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-gray-800">System Status</h4>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-xs text-green-600 font-bold">Operational</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">AI Engine Status</span>
                  <span className="text-sm font-bold text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-green-50/50 to-blue-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">Queue Processing</span>
                  <span className="text-sm font-bold text-blue-600 transition-all duration-1000">
                    {Math.floor(dashboardData.candidatesScreened * 0.1)} pending
                  </span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-lg p-2 transform hover:scale-105 transition-all duration-300">
                  <span className="text-xs text-gray-600">Success Rate</span>
                  <span className="text-sm font-bold text-purple-600">
                    {Math.floor((dashboardData.qualifiedMatches / dashboardData.candidatesScreened) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements with z-axis depth */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full opacity-60 animate-bounce delay-1000 z-10"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full opacity-60 animate-bounce delay-2000 z-10"></div>
      <div className="absolute top-1/2 -left-3 w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full opacity-60 animate-pulse delay-500 z-10"></div>
      <div className="absolute top-1/4 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full opacity-60 animate-ping delay-1500 z-10"></div>
      
      {/* Background depth layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-3xl transform translate-z-[-10px] scale-95 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/5 to-pink-100/5 rounded-3xl transform translate-z-[-20px] scale-90 z-0"></div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-12 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-8">
            {/* Left side - Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                <Briefcase className="w-4 h-4 mr-2" />
                AI Recruitment Agent
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">AIRA - Revolutionize Your </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Hiring Process
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Transform your recruitment workflow with AI-powered candidate screening, engagement, and placement automation. Reduce hiring time by 60% while improving candidate quality.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-105 text-base lg:text-lg"
                >
                  Contact Sales Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">60%</div>
                  <div className="text-gray-600 font-medium">Faster Hiring</div>
                </div>
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">85%</div>
                  <div className="text-gray-600 font-medium">Better Matches</div>
                </div>
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">40%</div>
                  <div className="text-gray-600 font-medium">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Live AIRA Dashboard */}
            <AnimatedAIRADashboard />
          </div>
        </div>
      </section>

      {/* Complete Recruitment Automation Suite */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Recruitment Automation Suite</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AIRA provides end-to-end recruitment automation with specialized modules for every aspect of the hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Row 1 */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Automated Resume Screening</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                AI-powered candidate evaluation and ranking
              </p>
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center w-full text-sm"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Corp-to-Corp Recruitment</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Specialized recruitment for corporate partnerships
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Candidate Engagement Tool</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Automated communication and follow-ups
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Scheduling Automation</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Smart interview scheduling and coordination
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 2 */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Automated Bench Sales</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Optimize consultant placement and sales
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Hiring Dashboards</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Real-time analytics and insights
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Business Development Module</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Lead generation and client management
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI-powered Follow-ups</h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Intelligent candidate and client communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your AIRA Plan</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Flexible pricing options to match your recruitment needs. Contact our sales team to get started with the perfect plan for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <p className="text-gray-600">Perfect for small recruitment teams</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Up to 100 candidate profiles/month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Basic resume screening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Email automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Standard support</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg text-base lg:text-lg flex items-center justify-center"
                  >
                    Contact Sales Team
                  </Link>
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-base lg:text-lg flex items-center justify-center"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Plan - Most Popular */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-blue-500 hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                  <p className="text-gray-600">Ideal for growing recruitment agencies</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">$49</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Up to 500 candidate profiles/month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Advanced AI screening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Multi-channel communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Analytics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Get 10 days bonus</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg text-base lg:text-lg flex items-center justify-center"
                  >
                    Contact Sales Team
                  </Link>
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-base lg:text-lg flex items-center justify-center"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <p className="text-gray-600">For large-scale recruitment operations</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">$500</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Unlimited candidate profiles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Custom AI models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Advanced integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24/7 premium support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Get 20 days bonus</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg text-base lg:text-lg flex items-center justify-center"
                  >
                    Contact Sales Team
                  </Link>
                  <Link 
                    to="/contact"
                    onClick={scrollToTop}
                    className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-base lg:text-lg flex items-center justify-center"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
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

export default ProductsPage;