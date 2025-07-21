import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, TrendingUp, Clock, Globe, Building, CheckCircle, Heart, Briefcase, Play, Mail, Phone, Target, Award, Lightbulb, Rocket, Star, Eye, Brain, Bot } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden py-20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Building className="w-4 h-4 mr-2" />
                Revolutionizing Business with AI
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-gray-900">Transforming Businesses with </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Intelligent AI Agents
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 font-medium">
                  Pioneering the Future of Automated Workflows
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                  At ZetaFlow.AI, we're not just building AI tools – we're crafting the future of intelligent business automation. Our mission is to empower every organization with AI agents that think, learn, and adapt to transform how work gets done.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base lg:text-lg w-fit"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right side - Company Stats */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Global Impact</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 text-center border border-blue-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Businesses Transformed</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center border border-purple-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      25+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Countries Served</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 text-center border border-green-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      1M+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Tasks Automated</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 text-center border border-orange-100">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Uptime Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Story Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900">From Vision to Reality</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2023 by a team of AI researchers and business automation experts, ZetaFlow.AI emerged from a simple yet powerful observation: while AI technology was advancing rapidly, most businesses struggled to harness its transformative potential.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We witnessed firsthand how manual, repetitive tasks were consuming valuable human creativity and innovation. Our founders envisioned a world where AI agents could handle the mundane, freeing humans to focus on what they do best – create, innovate, and connect.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to be at the forefront of the AI automation revolution, helping businesses across 25+ countries transform their operations with intelligent agents that learn, adapt, and deliver exceptional results.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-bold text-gray-900">Industry Recognition</div>
                      <div className="text-sm text-gray-600">AI Innovation Award 2024</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-bold text-gray-900">Rapid Growth</div>
                      <div className="text-sm text-gray-600">300% YoY expansion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Mission & Vision */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To democratize AI technology and make intelligent automation accessible to businesses of all sizes, empowering them to achieve unprecedented efficiency and innovation while preserving the human element that drives meaningful progress.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A world where every business, regardless of size or industry, can leverage the power of AI to automate routine tasks, make data-driven decisions, and focus on what truly matters – creating value for their customers and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our values shape every decision we make and every solution we create, ensuring we deliver exceptional value while maintaining the highest standards of integrity and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push the boundaries of what's possible with AI, developing cutting-edge solutions that solve real-world business challenges.
              </p>
            </div>
            
            {/* Human-Centric */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Human-Centric AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI enhances human capabilities rather than replacing them, creating technology that empowers people to achieve more.
              </p>
            </div>
            
            {/* Reliability */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest security standards with enterprise-grade protection, ensuring your data is always safe and secure.
              </p>
            </div>
            
            {/* Excellence */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence in Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.
              </p>
            </div>
            
            {/* Transparency */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency & Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in open communication and building lasting relationships based on trust, honesty, and mutual respect.
              </p>
            </div>
            
            {/* Continuous Learning */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace a culture of continuous improvement, constantly learning and evolving to stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              Our Solutions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive AI Automation Suite</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide end-to-end AI solutions designed to transform every aspect of your business operations, from recruitment to customer service and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AIRA - Featured */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Available Now
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AIRA - AI Recruitment Agent</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Revolutionary AI-powered recruitment automation that screens candidates, schedules interviews, and manages the entire hiring pipeline with unprecedented efficiency.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Automated resume screening & ranking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Intelligent candidate engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Smart interview scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Real-time analytics dashboard</span>
                  </div>
                </div>

                <Link 
                  to="/products"
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center w-fit"
                >
                  Explore AIRA
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Future Solutions */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Coming Soon
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Expanding AI Agent Suite</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We're developing specialized AI agents for various industries including real estate, marketing, customer service, and financial trading.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Real Estate Automation Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Marketing Intelligence Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Customer Service Agent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Trading Analytics Agent</span>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center w-fit"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZetaFlow Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ZetaFlow.AI?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another AI company. We're your partners in transformation, committed to delivering measurable results and exceptional experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Get up and running with our AI agents in minutes, not months. Our plug-and-play solutions integrate seamlessly with your existing workflows.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level encryption and security protocols ensure your data is always protected. SOC 2 compliant with 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Human-Centric AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI enhances human capabilities rather than replacing them. Designed to augment your team's productivity and decision-making.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                Track real-time performance metrics and see immediate impact on your bottom line. Average ROI of 300% within the first quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transforming Businesses Worldwide</h2>
            <p className="text-xl text-blue-100">
              Our AI agents are delivering measurable results across industries and geographies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-4">10x</div>
              <h3 className="text-xl font-semibold text-white mb-2">Productivity Boost</h3>
              <p className="text-blue-100">Average increase in team efficiency</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-4">60%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Time Savings</h3>
              <p className="text-blue-100">Reduction in manual task completion time</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-5xl font-bold text-white mb-4">500+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Satisfied Businesses</h3>
              <p className="text-blue-100">Companies transformed with our AI agents</p>
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
              Join thousands of companies already using ZetaFlow AI agents to automate their workflows and boost productivity. Experience the power of AIRA with our 30-day free trial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-base lg:text-lg"
              >
                Start Your AI Journey
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

export default AboutPage;