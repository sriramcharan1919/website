import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail, Phone, Calendar, Star, Briefcase, BookOpen, Home, MessageSquare, Sparkles, Heart, Zap, TrendingUp } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const ThankYouPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);
    
    // Generate floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 8 + Math.random() * 16
    }));
    setFloatingElements(elements);
    
    // Animate elements in sequence
    const timer1 = setTimeout(() => setAnimationStep(1), 300);
    const timer2 = setTimeout(() => setAnimationStep(2), 600);
    const timer3 = setTimeout(() => setAnimationStep(3), 900);
    const timer4 = setTimeout(() => setAnimationStep(4), 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Enhanced Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-bounce ${
                i % 6 === 0 ? 'w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600' :
                i % 6 === 1 ? 'w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600' :
                i % 6 === 2 ? 'w-5 h-5 bg-gradient-to-r from-pink-400 to-pink-600' :
                i % 6 === 3 ? 'w-2 h-2 bg-gradient-to-r from-green-400 to-green-600' :
                i % 6 === 4 ? 'w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500' :
                'w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500'
              } shadow-lg`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Gradient Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <section className="relative z-20 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced Success Icon with Pulse Effect */}
          <div className={`transform transition-all duration-1000 ${animationStep >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-300/50 to-emerald-400/50 rounded-full animate-ping"></div>
                <CheckCircle className="w-20 h-20 text-white relative z-10" />
              </div>
              {/* Radiating circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-green-300/30 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-green-200/20 rounded-full animate-ping delay-500"></div>
            </div>
          </div>

          {/* Enhanced Thank You Message */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${animationStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Thank You!
                </span>
              </h1>
              
              <div className="flex items-center justify-center space-x-3 text-3xl lg:text-4xl font-bold text-gray-800">
                <Heart className="w-10 h-10 text-red-500 animate-pulse" />
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Message Sent Successfully
                </span>
                <Sparkles className="w-10 h-10 text-yellow-500 animate-bounce" />
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                🎉 We've received your message and our expert team will get back to you within 24 hours. 
                We're excited to help you transform your business with AI automation!
              </p>
            </div>
          </div>

          {/* Enhanced What Happens Next Section */}
          <div className={`mt-20 transform transition-all duration-1000 delay-600 ${animationStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/60 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 mr-4 text-blue-600" />
                  What Happens Next?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Step 1</h4>
                      <p className="text-gray-700 font-medium">We'll review your message and requirements within 2 hours</p>
                    </div>
                  </div>

                  <div className="text-center space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Step 2</h4>
                      <p className="text-gray-700 font-medium">Our AI expert will contact you within 24 hours</p>
                    </div>
                  </div>

                  <div className="text-center space-y-6 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border-2 border-green-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Step 3</h4>
                      <p className="text-gray-700 font-medium">We'll schedule a personalized AIRA demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className={`mt-16 transform transition-all duration-1000 delay-900 ${animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/"
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center text-lg transform hover:scale-110 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                <Home className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Back to Home</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              
              <Link 
                to="/products"
                onClick={scrollToTop}
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-full font-bold hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 flex items-center justify-center text-lg transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Briefcase className="w-6 h-6 mr-3 group-hover:text-blue-600 transition-colors duration-300" />
                Explore AIRA
                <Zap className="w-6 h-6 ml-3 group-hover:text-purple-600 transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className={`mt-20 transform transition-all duration-1000 delay-1200 ${animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 max-w-3xl mx-auto border-2 border-gray-100 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                Need Immediate Assistance?
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Email Us</div>
                      <div className="font-medium text-blue-600">contact@zetaflow.ai</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Call Us</div>
                      <div className="font-medium text-green-600">+17327979162</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className={`mt-16 transform transition-all duration-1000 delay-1500 ${animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24hrs</div>
                <div className="text-gray-600 font-medium">Response Time</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300">
                <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative z-20">
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

export default ThankYouPage;