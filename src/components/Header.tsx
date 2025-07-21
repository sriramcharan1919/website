import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, BookOpen } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = React.useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = React.useState(false);

  // Close other dropdowns when opening one
  const handleProductsDropdown = (isOpen) => {
    setIsProductsDropdownOpen(isOpen);
    if (isOpen) {
      setIsResourcesDropdownOpen(false);
    }
  };

  const handleResourcesDropdown = (isOpen) => {
    setIsResourcesDropdownOpen(isOpen);
    if (isOpen) {
      setIsProductsDropdownOpen(false);
    }
  };

  return (
    <div>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" onClick={scrollToTop}>
                <img 
                  src="/new trasparent copy copy.png" 
                  alt="ZETAFLOW.AI" 
                  className="h-auto w-auto transition-all duration-200 hover:scale-110"
                  style={{ width: 'auto', height: '100px', objectFit: 'contain' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" onClick={scrollToTop} className="text-gray-700 font-semibold transition-all duration-300 text-base relative group">
                <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Home
                </span>
              </Link>
              <Link to="/about" onClick={scrollToTop} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors text-base">
                About Us
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center text-base"
                  onClick={() => handleProductsDropdown(!isProductsDropdownOpen)}
                  onMouseEnter={() => handleProductsDropdown(true)}
                >
                  Products
                  <ChevronDown className="w-5 h-5 ml-1" />
                </button>
                
                {isProductsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50"
                    onMouseLeave={() => handleProductsDropdown(false)}
                  >
                    <Link 
                      to="/products" 
                      onClick={() => {
                        scrollToTop();
                        handleProductsDropdown(false);
                      }}
                      className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-transparent hover:bg-clip-text hover:font-semibold transition-all duration-300 text-sm font-medium group"
                    >
                      <div className="w-8 h-8 mr-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        AIRA – AI Recruitment Agent
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center text-base"
                  onClick={() => handleResourcesDropdown(!isResourcesDropdownOpen)}
                  onMouseEnter={() => handleResourcesDropdown(true)}
                >
                  Resources
                  <ChevronDown className="w-5 h-5 ml-1" />
                </button>
                
                {isResourcesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50"
                    onMouseLeave={() => handleResourcesDropdown(false)}
                  >
                    <Link 
                      to="/resources" 
                      onClick={() => {
                        scrollToTop();
                        handleResourcesDropdown(false);
                      }}
                      className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-transparent hover:bg-clip-text hover:font-semibold transition-all duration-300 text-base font-medium group"
                    >
                      <div className="w-8 h-8 mr-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        E-books
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/blog" onClick={scrollToTop} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors text-base">
                Blog
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-base flex items-center transform hover:scale-105 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative z-10">
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <Link to="/" onClick={scrollToTop} className="text-gray-700 font-semibold text-base py-2 transition-all duration-300 group">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Home
                  </span>
                </Link>
                <Link to="/about" onClick={scrollToTop} className="text-gray-700 font-semibold text-base py-2 transition-all duration-300 group">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    About Us
                  </span>
                </Link>
                <Link to="/products" onClick={scrollToTop} className="text-gray-700 font-semibold text-base py-2 transition-all duration-300 group">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Products
                  </span>
                </Link>
                <Link to="/resources" onClick={scrollToTop} className="text-gray-700 font-semibold text-base py-2 transition-all duration-300 group">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Resources
                  </span>
                </Link>
                <Link to="/blog" onClick={scrollToTop} className="text-gray-700 font-semibold text-base py-2 transition-all duration-300 group">
                  <span className="group-hover:bg-gradient-to-r group-hover:from-[#6a11cb] group-hover:to-[#2575fc] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Blog
                  </span>
                </Link>
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold w-full text-base flex items-center justify-center mt-4 shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <span className="relative z-10">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;