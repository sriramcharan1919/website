// Global state management
const state = {
    currentPage: 'home',
    mobileMenuOpen: false,
    dashboardData: {
        candidatesScreened: 247,
        qualifiedMatches: 89,
        processTime: 2.3,
        progressWidth: 85
    },
    formSubmitting: false
};

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function generateRandomData() {
    return {
        candidatesScreened: Math.floor(Math.random() * (500 - 150 + 1)) + 150,
        qualifiedMatches: Math.floor(Math.random() * (100 - 90 + 1)) + 90,
        processTime: (Math.random() * (3.0 - 0.5) + 0.5).toFixed(1),
        progressWidth: Math.floor(Math.random() * (95 - 70 + 1)) + 70
    };
}

function updateDashboardData() {
    const newData = generateRandomData();
    state.dashboardData = newData;
    
    // Update DOM elements if they exist
    const candidatesElement = document.querySelector('.processing-number');
    const matchScoreElement = document.querySelector('.stat-number');
    const processTimeElement = document.querySelector('.progress-value');
    const progressFill = document.querySelector('.progress-fill');
    
    if (candidatesElement) {
        candidatesElement.textContent = newData.candidatesScreened;
    }
    
    if (matchScoreElement) {
        matchScoreElement.textContent = newData.qualifiedMatches;
    }
    
    if (processTimeElement) {
        processTimeElement.textContent = `${newData.processTime}s per resume`;
    }
    
    if (progressFill) {
        progressFill.style.width = `${newData.progressWidth}%`;
    }
    
    // Update analytics items
    const analyticsValues = document.querySelectorAll('.analytics-value');
    if (analyticsValues.length >= 3) {
        analyticsValues[0].textContent = Math.floor(newData.candidatesScreened * 0.1) + ' pending';
        analyticsValues[1].textContent = Math.floor((newData.qualifiedMatches / newData.candidatesScreened) * 100) + '%';
        analyticsValues[2].textContent = (Math.random() * (8.0 - 3.0) + 3.0).toFixed(1) + ' hrs';
    }
}

// Navigation functions
function navigateTo(page) {
    state.currentPage = page;
    loadPage(page);
    scrollToTop();
    closeMobileMenu();
}

function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (state.mobileMenuOpen) {
        mobileMenu.classList.add('active');
        menuIcon.className = 'fas fa-times';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    state.mobileMenuOpen = false;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    mobileMenu.classList.remove('active');
    menuIcon.className = 'fas fa-bars';
}

// Page loading functions
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    
    switch (page) {
        case 'home':
            mainContent.innerHTML = getHomePage();
            break;
        case 'about':
            mainContent.innerHTML = getAboutPage();
            break;
        case 'products':
            mainContent.innerHTML = getProductsPage();
            break;
        case 'resources':
            mainContent.innerHTML = getResourcesPage();
            break;
        case 'blog':
            mainContent.innerHTML = getBlogPage();
            break;
        case 'contact':
            mainContent.innerHTML = getContactPage();
            break;
        case 'ebook':
            mainContent.innerHTML = getEbookPage();
            break;
        case 'thank-you':
            mainContent.innerHTML = getThankYouPage();
            break;
        default:
            mainContent.innerHTML = getHomePage();
    }
    
    // Initialize page-specific functionality
    initializePage(page);
}

function initializePage(page) {
    if (page === 'home' || page === 'products') {
        // Start dashboard animation
        setTimeout(() => {
            updateDashboardData();
            setInterval(updateDashboardData, 3000);
        }, 500);
    }
    
    if (page === 'contact') {
        initializeContactForm();
    }
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-fade-in-right');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0)';
        }, index * 100);
    });
}

// Page content generators
function getHomePage() {
    return `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-bg-element hero-bg-1"></div>
                <div class="hero-bg-element hero-bg-2"></div>
                <div class="hero-bg-element hero-bg-3"></div>
            </div>

            <div class="hero-container">
                <div class="hero-grid">
                    <!-- Left side - Hero Content -->
                    <div class="hero-content animate-fade-in">
                        <div style="margin-bottom: 1.5rem;">
                            <h1 class="hero-title">
                                <span>AI Agents That </span>
                                <span class="hero-title-gradient">Transform</span>
                                <br>
                                <span>Your Business</span>
                            </h1>
                            
                            <p class="hero-subtitle">
                                Revolutionize your workflows with intelligent AI agents designed for recruitment, 
                                real estate, marketing, and trading. Automate complex processes and boost 
                                productivity by up to 10x.
                            </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="hero-buttons">
                            <button onclick="navigateTo('products')" class="hero-btn hero-btn-primary">
                                Get Started
                                <i class="fas fa-arrow-right hero-btn-icon"></i>
                            </button>
                        </div>

                        <!-- Metrics Cards -->
                        <div class="hero-metrics">
                            <div class="hero-metric">
                                <div class="hero-metric-number">10x</div>
                                <div class="hero-metric-label">Productivity Boost</div>
                            </div>
                            <div class="hero-metric">
                                <div class="hero-metric-number">60%</div>
                                <div class="hero-metric-label">Time Saved</div>
                            </div>
                            <div class="hero-metric">
                                <div class="hero-metric-number">500+</div>
                                <div class="hero-metric-label">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                    <!-- Right side - AI Agent Dashboard -->
                    <div class="dashboard-container">
                        <div class="dashboard">
                            <div class="dashboard-header">
                                <h3 class="dashboard-title">Live AIRA Dashboard</h3>
                                <div class="dashboard-status">
                                    <div class="status-dot"></div>
                                    <span class="status-text">Live</span>
                                </div>
                            </div>

                            <div class="dashboard-processing">
                                <div class="processing-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="processing-content">
                                    <h3>AIRA Processing</h3>
                                    <p class="processing-text">
                                        Screening <span class="processing-number">${state.dashboardData.candidatesScreened}</span> candidates...
                                    </p>
                                </div>
                            </div>

                            <div class="dashboard-stats">
                                <div class="stat-card">
                                    <div class="stat-number">${state.dashboardData.qualifiedMatches}%</div>
                                    <div class="stat-label">Match Score</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${state.dashboardData.processTime}s</div>
                                    <div class="stat-label">Process Time</div>
                                </div>
                            </div>

                            <div class="dashboard-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Processing Speed</span>
                                    <span class="progress-value">${state.dashboardData.processTime}s per resume</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${state.dashboardData.progressWidth}%"></div>
                                </div>
                            </div>

                            <div class="dashboard-analytics">
                                <div class="analytics-header">
                                    <h4 class="analytics-title">Real-time Analytics</h4>
                                    <div class="analytics-status">
                                        <div class="analytics-dot"></div>
                                        <span class="analytics-text">Live</span>
                                    </div>
                                </div>

                                <div class="analytics-items">
                                    <div class="analytics-item">
                                        <span class="analytics-label">Candidates Processed</span>
                                        <span class="analytics-value">${state.dashboardData.candidatesScreened}</span>
                                    </div>
                                    <div class="analytics-item">
                                        <span class="analytics-label">Quality Matches</span>
                                        <span class="analytics-value">${state.dashboardData.qualifiedMatches}</span>
                                    </div>
                                    <div class="analytics-item">
                                        <span class="analytics-label">Time Saved Today</span>
                                        <span class="analytics-value">4.2 hrs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Elements -->
                        <div class="dashboard-float-1"></div>
                        <div class="dashboard-float-2"></div>
                        <div class="dashboard-float-3"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our AI Agent Suite Section -->
        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Our AI Agent Suite</h2>
                    <p class="section-subtitle">
                        Specialized AI agents tailored for different industries and use cases, each designed to maximize efficiency and results.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style="max-width: 80rem; margin: 0 auto;">
                    <!-- AIRA - AI Recruitment Agent -->
                    <div class="card" style="border-top: 4px solid #3b82f6;">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 class="card-title" style="font-size: 1.5rem;">AIRA - AI Recruitment Agent</h3>
                            <p class="card-text">
                                Revolutionize your hiring process with intelligent candidate screening and engagement
                            </p>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #374151;">Automated Resume Screening</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #374151;">Candidate Engagement</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #374151;">Interview Scheduling</span>
                            </div>
                        </div>

                        <button onclick="navigateTo('products')" class="btn btn-primary" style="width: 100%;">
                            Learn More
                            <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                        </button>
                    </div>

                    <!-- Coming Soon Card -->
                    <div class="card" style="background: #f9fafb; border-top: 4px solid #9ca3af; opacity: 0.6;">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 class="card-title" style="font-size: 1.5rem; color: #6b7280;">More AI Agents</h3>
                            <p class="card-text" style="color: #9ca3af;">
                                Additional specialized AI agents coming soon to expand your automation capabilities
                            </p>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #9ca3af; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #9ca3af;">Real Estate Automation</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #9ca3af; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #9ca3af;">Marketing Intelligence</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div style="width: 1.25rem; height: 1.25rem; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: #9ca3af; border-radius: 50%;"></div>
                                </div>
                                <span style="color: #9ca3af;">Trading Analytics</span>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); color: #1e40af; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 600; text-align: center;">
                            Coming Soon
                        </div>

                        <div style="position: absolute; top: 1rem; right: 1rem; background: #dbeafe; color: #3b82f6; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">
                            In Development
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Zetaflow Section -->
        <section class="section section-bg-gradient">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Why Choose Zetaflow?</h2>
                    <p class="section-subtitle">
                        Our AI agents are designed to seamlessly integrate with your existing workflows while providing unprecedented automation capabilities.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <h3 class="card-title">AI-Powered Agents</h3>
                        <p class="card-text">
                            Intelligent agents that learn and adapt to your business processes
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-bolt"></i>
                        </div>
                        <h3 class="card-title">Workflow Automation</h3>
                        <p class="card-text">
                            Streamline complex processes with smart automation
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-green">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3 class="card-title">Enterprise Security</h3>
                        <p class="card-text">
                            Bank-grade security with end-to-end encryption
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-orange">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="card-title">Team Collaboration</h3>
                        <p class="card-text">
                            Seamless integration with your existing team workflows
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- What Our Clients Say Section -->
        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">What Our Clients Say</h2>
                    <p class="section-subtitle">
                        Join thousands of satisfied customers who have transformed their businesses with Zetaflow AI agents.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <!-- Testimonial 1 -->
                    <div class="testimonial">
                        <div class="testimonial-stars">
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                        </div>
                        <p class="testimonial-text">
                            "AIRA has transformed our recruitment process. We're reducing hiring time by 60% while improving candidate quality."
                        </p>
                        <div class="testimonial-author">
                            <div class="author-avatar">SJ</div>
                            <div>
                                <div class="author-name">Sarah Johnson</div>
                                <div class="author-title">HR Director, TechCorp</div>
                            </div>
                        </div>
                    </div>

                    <!-- Testimonial 2 -->
                    <div class="testimonial" style="background: linear-gradient(135deg, #e0e7ff, #fce7f3); border-color: #c7d2fe;">
                        <div class="testimonial-stars">
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                        </div>
                        <p class="testimonial-text">
                            "The AI Real Estate Agent has helped me close deals faster by identifying perfect matches between properties and clients."
                        </p>
                        <div class="testimonial-author">
                            <div class="author-avatar" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">MC</div>
                            <div>
                                <div class="author-name">Michael Chen</div>
                                <div class="author-title">Real Estate Agent, Elite Properties</div>
                            </div>
                        </div>
                    </div>

                    <!-- Testimonial 3 -->
                    <div class="testimonial" style="background: linear-gradient(135deg, #d1fae5, #dbeafe); border-color: #a7f3d0;">
                        <div class="testimonial-stars">
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                        </div>
                        <p class="testimonial-text">
                            "Our campaign ROI increased by 150% after implementing the AI Marketing Agent. It's a game changer."
                        </p>
                        <div class="testimonial-author">
                            <div class="author-avatar" style="background: linear-gradient(135deg, #10b981, #3b82f6);">ER</div>
                            <div>
                                <div class="author-name">Emily Rodriguez</div>
                                <div class="author-title">Marketing Director, GrowthCo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta section">
            <div class="section-container">
                <h2 class="cta-title">Ready to Transform Your Business?</h2>
                <p class="cta-text">
                    Join thousands of companies already using Zetaflow AI agents to automate their workflows and boost productivity.
                </p>
                
                <div class="cta-buttons">
                    <button onclick="navigateTo('products')" class="cta-btn-primary">
                        Get Started
                        <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                    </button>
                    <button onclick="navigateTo('contact')" class="cta-btn-secondary">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    `;
}

function getAboutPage() {
    return `
        <!-- About Hero Section -->
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-bg-element hero-bg-1"></div>
                <div class="hero-bg-element hero-bg-2"></div>
                <div class="hero-bg-element hero-bg-3"></div>
            </div>

            <div class="hero-container">
                <div class="hero-grid">
                    <div class="hero-content animate-fade-in">
                        <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(135deg, #dbeafe, #e0e7ff); color: #1d4ed8; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem;">
                            <i class="fas fa-building" style="margin-right: 0.5rem;"></i>
                            Revolutionizing Business with AI
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <h1 class="hero-title">
                                <span>Transforming Businesses with </span>
                                <br>
                                <span class="hero-title-gradient">Intelligent AI Agents</span>
                            </h1>
                            
                            <p style="font-size: 1.125rem; color: #4b5563; font-weight: 500; margin-bottom: 1rem;">
                                Pioneering the Future of Automated Workflows
                            </p>
                            
                            <p class="hero-subtitle">
                                At ZetaFlow.AI, we're not just building AI tools – we're crafting the future of intelligent business automation. Our mission is to empower every organization with AI agents that think, learn, and adapt to transform how work gets done.
                            </p>
                        </div>

                        <div style="padding-top: 1rem;">
                            <button onclick="navigateTo('contact')" class="hero-btn hero-btn-primary">
                                Start Your AI Journey
                                <i class="fas fa-arrow-right hero-btn-icon"></i>
                            </button>
                        </div>
                    </div>

                    <div class="animate-fade-in-right">
                        <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 2rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.5);">
                            <div style="text-align: center; margin-bottom: 1.5rem;">
                                <div class="card-icon card-icon-blue" style="margin: 0 auto 1rem;">
                                    <i class="fas fa-globe"></i>
                                </div>
                                <h3 class="card-title">Global Impact</h3>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-6">
                                <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1rem; padding: 1rem; text-align: center; border: 1px solid #bfdbfe;">
                                    <div style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">
                                        500+
                                    </div>
                                    <div style="font-size: 0.875rem; color: #4b5563; font-weight: 500;">Businesses Transformed</div>
                                </div>
                                
                                <div style="background: linear-gradient(135deg, #e0e7ff, #fce7f3); border-radius: 1rem; padding: 1rem; text-align: center; border: 1px solid #c7d2fe;">
                                    <div style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, #8b5cf6, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">
                                        25+
                                    </div>
                                    <div style="font-size: 0.875rem; color: #4b5563; font-weight: 500;">Countries Served</div>
                                </div>
                                
                                <div style="background: linear-gradient(135deg, #d1fae5, #dbeafe); border-radius: 1rem; padding: 1rem; text-align: center; border: 1px solid #a7f3d0;">
                                    <div style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, #10b981, #3b82f6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">
                                        1M+
                                    </div>
                                    <div style="font-size: 0.875rem; color: #4b5563; font-weight: 500;">Tasks Automated</div>
                                </div>
                                
                                <div style="background: linear-gradient(135deg, #fed7aa, #fecaca); border-radius: 1rem; padding: 1rem; text-align: center; border: 1px solid #fdba74;">
                                    <div style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, #ea580c, #dc2626); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.5rem;">
                                        99.9%
                                    </div>
                                    <div style="font-size: 0.875rem; color: #4b5563; font-weight: 500;">Uptime Reliability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Story Section -->
        <section class="section">
            <div class="section-container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16" style="align-items: center;">
                    <div style="margin-bottom: 2rem;">
                        <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(135deg, #e0e7ff, #fce7f3); color: #7c3aed; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem;">
                            <i class="fas fa-heart" style="margin-right: 0.5rem;"></i>
                            Our Story
                        </div>
                        <h2 style="font-size: 2.5rem; font-weight: 800; color: #111827; margin-bottom: 1.5rem;">From Vision to Reality</h2>
                        <p style="font-size: 1.25rem; color: #4b5563; line-height: 1.75; margin-bottom: 1.5rem;">
                            Founded in 2023 by a team of AI researchers and business automation experts, ZetaFlow.AI emerged from a simple yet powerful observation: while AI technology was advancing rapidly, most businesses struggled to harness its transformative potential.
                        </p>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <p style="font-size: 1.125rem; color: #4b5563; line-height: 1.75; margin-bottom: 1.5rem;">
                                We witnessed firsthand how manual, repetitive tasks were consuming valuable human creativity and innovation. Our founders envisioned a world where AI agents could handle the mundane, freeing humans to focus on what they do best – create, innovate, and connect.
                            </p>
                            
                            <p style="font-size: 1.125rem; color: #4b5563; line-height: 1.75;">
                                Today, we're proud to be at the forefront of the AI automation revolution, helping businesses across 25+ countries transform their operations with intelligent agents that learn, adapt, and deliver exceptional results.
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-6">
                            <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 0.75rem; padding: 1rem; border: 1px solid #bfdbfe;">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-award" style="width: 1.5rem; height: 1.5rem; color: #3b82f6;"></i>
                                    <div>
                                        <div style="font-weight: 800; color: #111827;">Industry Recognition</div>
                                        <div style="font-size: 0.875rem; color: #4b5563;">AI Innovation Award 2024</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #d1fae5, #dbeafe); border-radius: 0.75rem; padding: 1rem; border: 1px solid #a7f3d0;">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-rocket" style="width: 1.5rem; height: 1.5rem; color: #10b981;"></i>
                                    <div>
                                        <div style="font-weight: 800; color: #111827;">Rapid Growth</div>
                                        <div style="font-size: 0.875rem; color: #4b5563;">300% YoY expansion</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 2rem;">
                        <!-- Mission -->
                        <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1.5rem; padding: 2rem; border: 1px solid #bfdbfe;">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                                <div class="card-icon card-icon-blue" style="width: 3rem; height: 3rem; margin: 0;">
                                    <i class="fas fa-bullseye"></i>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827;">Our Mission</h3>
                            </div>
                            <p style="color: #374151; line-height: 1.75;">
                                To democratize AI technology and make intelligent automation accessible to businesses of all sizes, empowering them to achieve unprecedented efficiency and innovation while preserving the human element that drives meaningful progress.
                            </p>
                        </div>

                        <!-- Vision -->
                        <div style="background: linear-gradient(135deg, #e0e7ff, #fce7f3); border-radius: 1.5rem; padding: 2rem; border: 1px solid #c7d2fe;">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                                <div class="card-icon card-icon-purple" style="width: 3rem; height: 3rem; margin: 0;">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827;">Our Vision</h3>
                            </div>
                            <p style="color: #374151; line-height: 1.75;">
                                A world where every business, regardless of size or industry, can leverage the power of AI to automate routine tasks, make data-driven decisions, and focus on what truly matters – creating value for their customers and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Values Section -->
        <section class="section section-bg-gradient">
            <div class="section-container">
                <div class="section-header">
                    <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(135deg, #dbeafe, #e0e7ff); color: #1d4ed8; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem;">
                        <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                        Our Core Values
                    </div>
                    <h2 class="section-title">What Drives Us Forward</h2>
                    <p class="section-subtitle">
                        Our values shape every decision we make and every solution we create, ensuring we deliver exceptional value while maintaining the highest standards of integrity and innovation.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h3 class="card-title">Innovation First</h3>
                        <p class="card-text">
                            We constantly push the boundaries of what's possible with AI, developing cutting-edge solutions that solve real-world business challenges.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="card-title">Human-Centric AI</h3>
                        <p class="card-text">
                            Our AI enhances human capabilities rather than replacing them, creating technology that empowers people to achieve more.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-green">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3 class="card-title">Uncompromising Security</h3>
                        <p class="card-text">
                            We maintain the highest security standards with enterprise-grade protection, ensuring your data is always safe and secure.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-orange">
                            <i class="fas fa-award"></i>
                        </div>
                        <h3 class="card-title">Excellence in Execution</h3>
                        <p class="card-text">
                            We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3 class="card-title">Transparency & Trust</h3>
                        <p class="card-text">
                            We believe in open communication and building lasting relationships based on trust, honesty, and mutual respect.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon" style="background: linear-gradient(135deg, #14b8a6, #06b6d4);">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h3 class="card-title">Continuous Learning</h3>
                        <p class="card-text">
                            We embrace a culture of continuous improvement, constantly learning and evolving to stay ahead of industry trends.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta section">
            <div class="section-container">
                <h2 class="cta-title">Ready to Transform Your Business?</h2>
                <p class="cta-text">
                    Join thousands of companies already using ZetaFlow AI agents to automate their workflows and boost productivity. Experience the power of AIRA with our 30-day free trial.
                </p>
                
                <div class="cta-buttons">
                    <button onclick="navigateTo('contact')" class="cta-btn-primary">
                        Start Your AI Journey
                        <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                    </button>
                </div>
            </div>
        </section>
    `;
}

function getProductsPage() {
    return `
        <!-- Products Hero Section -->
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-bg-element hero-bg-1"></div>
                <div class="hero-bg-element hero-bg-2"></div>
                <div class="hero-bg-element hero-bg-3"></div>
            </div>

            <div class="hero-container">
                <div class="hero-grid">
                    <div class="hero-content animate-fade-in">
                        <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: #dbeafe; color: #3b82f6; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem;">
                            <i class="fas fa-briefcase" style="margin-right: 0.5rem;"></i>
                            AI Recruitment Agent
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <h1 class="hero-title">
                                <span>AIRA - Revolutionize Your </span>
                                <br>
                                <span class="hero-title-gradient">Hiring Process</span>
                            </h1>
                            
                            <p class="hero-subtitle">
                                Transform your recruitment workflow with AI-powered candidate screening, engagement, and placement automation. Reduce hiring time by 60% while improving candidate quality.
                            </p>
                        </div>

                        <div class="hero-buttons">
                            <button onclick="navigateTo('contact')" class="hero-btn hero-btn-primary">
                                Contact Sales Team
                                <i class="fas fa-arrow-right hero-btn-icon"></i>
                            </button>
                        </div>

                        <div class="hero-metrics">
                            <div class="hero-metric">
                                <div class="hero-metric-number">60%</div>
                                <div class="hero-metric-label">Faster Hiring</div>
                            </div>
                            <div class="hero-metric">
                                <div class="hero-metric-number">85%</div>
                                <div class="hero-metric-label">Better Matches</div>
                            </div>
                            <div class="hero-metric">
                                <div class="hero-metric-number">40%</div>
                                <div class="hero-metric-label">Cost Reduction</div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced Live AIRA Dashboard -->
                    <div class="dashboard-container">
                        <div class="dashboard">
                            <div class="dashboard-header">
                                <h3 class="dashboard-title">Live AIRA Dashboard</h3>
                                <div class="dashboard-status">
                                    <div class="status-dot"></div>
                                    <span class="status-text">Live</span>
                                </div>
                            </div>

                            <div class="dashboard-processing">
                                <div class="processing-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="processing-content">
                                    <h3>AIRA Processing</h3>
                                    <p class="processing-text">
                                        Screening <span class="processing-number">${state.dashboardData.candidatesScreened}</span> candidates...
                                    </p>
                                </div>
                            </div>

                            <div class="dashboard-stats">
                                <div class="stat-card">
                                    <div class="stat-number">${state.dashboardData.qualifiedMatches}%</div>
                                    <div class="stat-label">Match Score</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-number">${state.dashboardData.processTime}s</div>
                                    <div class="stat-label">Process Time</div>
                                </div>
                            </div>

                            <div class="dashboard-progress">
                                <div class="progress-header">
                                    <span class="progress-label">Processing Speed</span>
                                    <span class="progress-value">${state.dashboardData.processTime}s per resume</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${state.dashboardData.progressWidth}%"></div>
                                </div>
                            </div>

                            <div class="dashboard-analytics">
                                <div class="analytics-header">
                                    <h4 class="analytics-title">System Status</h4>
                                    <div class="analytics-status">
                                        <div class="analytics-dot"></div>
                                        <span class="analytics-text">Operational</span>
                                    </div>
                                </div>

                                <div class="analytics-items">
                                    <div class="analytics-item">
                                        <span class="analytics-label">Candidates Processed</span>
                                        <span class="analytics-value">${state.dashboardData.candidatesScreened}</span>
                                    </div>
                                    <div class="analytics-item">
                                        <span class="analytics-label">Quality Matches</span>
                                        <span class="analytics-value">${state.dashboardData.qualifiedMatches}</span>
                                    </div>
                                    <div class="analytics-item">
                                        <span class="analytics-label">Time Saved Today</span>
                                        <span class="analytics-value">4.2 hrs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Elements -->
                        <div class="dashboard-float-1"></div>
                        <div class="dashboard-float-2"></div>
                        <div class="dashboard-float-3"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Complete Recruitment Automation Suite -->
        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Complete Recruitment Automation Suite</h2>
                    <p class="section-subtitle">
                        AIRA provides end-to-end recruitment automation with specialized modules for every aspect of the hiring process.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="card-title">Automated Resume Screening</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            AI-powered candidate evaluation and ranking
                        </p>
                        <button onclick="navigateTo('contact')" class="btn btn-primary" style="width: 100%; font-size: 0.875rem;">
                            Learn More
                            <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                        </button>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h3 class="card-title">Corp-to-Corp Recruitment</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Specialized recruitment for corporate partnerships
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3 class="card-title">Candidate Engagement Tool</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Automated communication and follow-ups
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3 class="card-title">Scheduling Automation</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Smart interview scheduling and coordination
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3 class="card-title">Automated Bench Sales</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Optimize consultant placement and sales
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h3 class="card-title">Hiring Dashboards</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Real-time analytics and insights
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 class="card-title">Business Development Module</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Lead generation and client management
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3 class="card-title">AI-powered Follow-ups</h3>
                        <p class="card-text" style="margin-bottom: 1.5rem;">
                            Intelligent candidate and client communication
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="section section-bg-gradient">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Choose Your AIRA Plan</h2>
                    <p class="section-subtitle">
                        Flexible pricing options to match your recruitment needs. Contact our sales team to get started with the perfect plan for your business.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-3" style="max-width: 96rem; margin: 0 auto;">
                    <!-- Starter Plan -->
                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 2rem;">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem;">Starter</h3>
                            <p style="color: #4b5563;">Perfect for small recruitment teams</p>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: baseline;">
                                <span style="font-size: 3rem; font-weight: 800; color: #111827;">$29</span>
                                <span style="color: #4b5563; margin-left: 0.5rem;">/month</span>
                            </div>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Up to 100 candidate profiles/month</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Basic resume screening</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Email automation</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Standard support</span>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button onclick="navigateTo('contact')" class="btn btn-primary" style="width: 100%;">
                                Contact Sales Team
                            </button>
                            <button onclick="navigateTo('contact')" class="btn btn-secondary" style="width: 100%;">
                                Schedule Demo
                            </button>
                        </div>
                    </div>

                    <!-- Professional Plan - Most Popular -->
                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 2rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); border: 2px solid #3b82f6; position: relative;">
                        <div style="position: absolute; top: -1rem; left: 50%; transform: translateX(-50%);">
                            <div style="background: #3b82f6; color: white; padding: 0.5rem 1.5rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">
                                Most Popular
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem;">Professional</h3>
                            <p style="color: #4b5563;">Ideal for growing recruitment agencies</p>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: baseline;">
                                <span style="font-size: 3rem; font-weight: 800; color: #111827;">$49</span>
                                <span style="color: #4b5563; margin-left: 0.5rem;">/month</span>
                            </div>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Up to 500 candidate profiles/month</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Advanced AI screening</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Multi-channel communication</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Analytics dashboard</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Priority support</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Get 10 days bonus</span>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button onclick="navigateTo('contact')" class="btn btn-primary" style="width: 100%;">
                                Contact Sales Team
                            </button>
                            <button onclick="navigateTo('contact')" class="btn btn-secondary" style="width: 100%;">
                                Schedule Demo
                            </button>
                        </div>
                    </div>

                    <!-- Enterprise Plan -->
                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 2rem;">
                        <div style="margin-bottom: 1.5rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem;">Enterprise</h3>
                            <p style="color: #4b5563;">For large-scale recruitment operations</p>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: baseline;">
                                <span style="font-size: 3rem; font-weight: 800; color: #111827;">$500</span>
                                <span style="color: #4b5563; margin-left: 0.5rem;">/month</span>
                            </div>
                        </div>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Unlimited candidate profiles</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Custom AI models</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Advanced integrations</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Dedicated account manager</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">24/7 premium support</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                                <span style="color: #374151;">Get 20 days bonus</span>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button onclick="navigateTo('contact')" class="btn btn-primary" style="width: 100%;">
                                Contact Sales Team
                            </button>
                            <button onclick="navigateTo('contact')" class="btn btn-secondary" style="width: 100%;">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getResourcesPage() {
    return `
        <!-- Resources Hero Section -->
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-bg-element hero-bg-1"></div>
                <div class="hero-bg-element hero-bg-2"></div>
                <div class="hero-bg-element hero-bg-3"></div>
            </div>

            <div class="hero-container">
                <div class="text-center animate-fade-in">
                    <div style="margin-bottom: 1rem;">
                        <h1 class="hero-title">
                            <span>E-books & Learning </span>
                            <span class="hero-title-gradient">Resources</span>
                        </h1>
                        
                        <p class="hero-subtitle">
                            Expand your knowledge with our comprehensive collection of AI and automation guides written by industry experts.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured E-book Section -->
        <section class="section">
            <div class="section-container">
                <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); border-radius: 1.5rem; padding: 3rem; color: white; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 1.5rem; left: 1.5rem;">
                        <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(8px); border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">
                            <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                            Featured E-book
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12" style="align-items: center; margin-top: 2rem;">
                        <!-- Left side - E-book Info -->
                        <div style="display: flex; flex-direction: column; gap: 2rem;">
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <h2 style="font-size: 2.5rem; font-weight: 800; line-height: 1.2;">
                                    The Automated Income Engine
                                </h2>
                                
                                <p style="font-size: 1.25rem; color: rgba(196, 181, 253, 1); line-height: 1.75;">
                                    A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                                </p>
                                
                                <div style="display: flex; align-items: center; gap: 1rem;">
                                    <div style="font-size: 1.875rem; font-weight: 800; text-decoration: line-through; color: rgba(196, 181, 253, 1);">$199</div>
                                    <div style="background: #ea580c; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 800;">90% OFF</div>
                                    <div style="font-size: 2.5rem; font-weight: 800;">$19</div>
                                </div>
                            </div>

                            <button onclick="navigateTo('ebook')" class="btn btn-primary" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: fit-content;">
                                Learn More & Get Instant Access
                                <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                            </button>
                        </div>

                        <!-- Right side - Features -->
                        <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px); border-radius: 1rem; padding: 2rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-book-open" style="width: 1.5rem; height: 1.5rem; color: white;"></i>
                                    <span style="font-size: 1.125rem; font-weight: 600;">285 pages of actionable content</span>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-check-circle" style="width: 1.5rem; height: 1.5rem; color: #86efac;"></i>
                                    <span>50+ AI tool recommendations</span>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-check-circle" style="width: 1.5rem; height: 1.5rem; color: #86efac;"></i>
                                    <span>Step-by-step automation blueprints</span>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-check-circle" style="width: 1.5rem; height: 1.5rem; color: #86efac;"></i>
                                    <span>Real case studies & examples</span>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-check-circle" style="width: 1.5rem; height: 1.5rem; color: #86efac;"></i>
                                    <span>Bonus video tutorials</span>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <i class="fas fa-check-circle" style="width: 1.5rem; height: 1.5rem; color: #86efac;"></i>
                                    <span>Lifetime updates included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Our E-books Section -->
        <section class="section section-bg-gradient">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">Why Choose Our E-books?</h2>
                    <p class="section-subtitle">
                        Our e-books are crafted by industry experts with years of practical experience in AI and automation.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="card">
                        <div class="card-icon card-icon-blue">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <h3 class="card-title">Expert Authors</h3>
                        <p class="card-text">
                            Written by industry leaders with years of practical experience in AI and automation
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon card-icon-purple">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3 class="card-title">Actionable Insights</h3>
                        <p class="card-text">
                            Practical strategies and step-by-step guides you can implement immediately in your business
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon" style="background: linear-gradient(135deg, #3b82f6, #6366f1);">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3 class="card-title">Lifetime Access</h3>
                        <p class="card-text">
                            Download once, access forever with free updates and additional content as we expand
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter CTA Section -->
        <section class="cta section">
            <div class="section-container">
                <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px); border-radius: 1.5rem; padding: 3rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                    <div class="text-center" style="display: flex; flex-direction: column; gap: 2rem;">
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <h2 style="font-size: 2.5rem; font-weight: 800; color: white;">Want more insights?</h2>
                            <p style="font-size: 1.25rem; color: rgba(219, 234, 254, 1);">
                                Join our newsletter for weekly AI tips and resources delivered straight to your inbox.
                            </p>
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; max-width: 28rem; margin: 0 auto;">
                            <div style="flex: 1;">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address"
                                    style="width: 100%; padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(8px); color: white; outline: none;"
                                />
                            </div>
                            <button class="btn btn-primary" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>
                                Subscribe
                            </button>
                        </div>
                        
                        <p style="color: rgba(147, 197, 253, 1); font-size: 0.875rem;">
                            No spam, unsubscribe at any time. We respect your privacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getBlogPage() {
    return `
        <!-- Blog Hero Section -->
        <section class="hero" style="padding: 3rem 0;">
            <div class="hero-bg">
                <div class="hero-bg-element" style="top: 2.5rem; left: 2.5rem; width: 12rem; height: 12rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite;"></div>
                <div class="hero-bg-element" style="bottom: 2.5rem; right: 2.5rem; width: 16rem; height: 16rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 1s;"></div>
            </div>
            
            <div class="hero-container">
                <div class="text-center animate-fade-in">
                    <div style="margin-bottom: 1rem;">
                        <h1 class="hero-title" style="font-size: 2.25rem;">
                            <span>ZetaFlow </span>
                            <span class="hero-title-gradient">Blog</span>
                        </h1>
                        <p style="font-size: 1rem; color: #4b5563; max-width: 32rem; margin: 0 auto;">
                            Stay updated with the latest insights, trends, and best practices in AI automation and workflow optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Archive -->
        <section class="section" style="padding: 4rem 0;">
            <div class="section-container">
                <!-- Category Filter -->
                <div style="margin-bottom: 3rem;">
                    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
                        <button class="btn btn-primary" style="padding: 0.75rem 1.5rem; border-radius: 9999px;">
                            All
                        </button>
                        <button style="padding: 0.75rem 1.5rem; border-radius: 9999px; background: #f3f4f6; color: #374151; border: none; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                            AI Technology
                        </button>
                    </div>
                </div>

                <!-- Featured Post -->
                <div style="margin-bottom: 4rem;">
                    <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1.5rem; overflow: hidden; border: 1px solid #bfdbfe; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);">
                        <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 1.5rem 1.5rem 0;">
                            <span style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 800; display: flex; align-items: center;">
                                <i class="fas fa-chart-line" style="margin-right: 0.5rem;"></i>
                                Featured Article
                            </span>
                        </div>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" style="align-items: center; padding: 1.5rem;">
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div>
                                    <span style="display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.75rem;">
                                        AI Technology
                                    </span>
                                    <h2 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 1rem; line-height: 1.2;">
                                        ChatGPT-4o vs Other LLMs: The Best AI Tool for Automation in 2025
                                    </h2>
                                    <p style="color: #4b5563; font-size: 1rem; line-height: 1.75;">
                                        Find out how ChatGPT-4o stacks up with Claude, Gemini, Grok, Perplexity, etc for AI workflow automation. Discover features, intersection type compatibility, speed and precision.
                                    </p>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 1.5rem; font-size: 0.875rem; color: #6b7280;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-user"></i>
                                        <span style="font-weight: 500;">Vyshnavi & Dhanalakshmi</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-calendar"></i>
                                        <span>July 5, 2025</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <i class="fas fa-clock"></i>
                                        <span>12 min read</span>
                                    </div>
                                </div>
                                
                                <button onclick="navigateTo('blog-post')" style="display: inline-flex; align-items: center; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; width: fit-content;">
                                    Read Full Article
                                    <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                                </button>
                            </div>
                            
                            <div style="position: relative;">
                                <img 
                                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                                    alt="ChatGPT-4o vs Other LLMs"
                                    style="width: 100%; height: 20rem; object-fit: cover; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);"
                                />
                                <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px); border-radius: 0.5rem; padding: 0.75rem; display: flex; align-items: center; gap: 1rem; font-size: 0.875rem;">
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <i class="fas fa-eye" style="color: #4b5563;"></i>
                                        <span style="font-weight: 500;">3.2k</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <i class="fas fa-comment" style="color: #4b5563;"></i>
                                        <span style="font-weight: 500;">45</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Load More Button -->
                <div class="text-center" style="margin-top: 3rem;">
                    <button onclick="navigateTo('load-more')" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 1rem 2rem; border-radius: 9999px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>

        <!-- Newsletter Subscription -->
        <section class="section section-bg-gradient">
            <div class="section-container">
                <div style="max-width: 64rem; margin: 0 auto; text-align: center;">
                    <div style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 2rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.5);">
                        <h3 style="font-size: 1.875rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem;">
                            Stay Updated with Our Latest Insights
                        </h3>
                        <p style="color: #4b5563; margin-bottom: 2rem; font-size: 1.125rem;">
                            Get the latest AI automation trends, tips, and industry insights delivered straight to your inbox.
                        </p>
                        
                        <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 28rem; margin: 0 auto;">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                style="flex: 1; padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid #d1d5db; outline: none; transition: all 0.2s ease;"
                            />
                            <button style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);">
                                Subscribe
                            </button>
                        </div>
                        
                        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
                            No spam, unsubscribe at any time. We respect your privacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getContactPage() {
    return `
        <!-- Contact Hero Section -->
        <section class="hero" style="padding: 4rem 0;">
            <div class="hero-bg">
                <div class="hero-bg-element hero-bg-1"></div>
                <div class="hero-bg-element hero-bg-2"></div>
                <div class="hero-bg-element hero-bg-3"></div>
            </div>

            <div class="hero-container">
                <div class="text-center animate-fade-in">
                    <div style="margin-bottom: 1rem;">
                        <h1 class="hero-title">
                            <span>Get in </span>
                            <span class="hero-title-gradient">Touch</span>
                        </h1>
                        
                        <p class="hero-subtitle">
                            Ready to transform your business with AI? Contact us today and discover how AIRA can revolutionize your workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section">
            <div class="section-container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Information -->
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1rem; padding: 2rem; border: 1px solid #bfdbfe;">
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                                <div style="width: 2rem; height: 2rem; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">
                                    <span style="color: white; font-size: 1.125rem;">⭐</span>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827;">Contact Information</h3>
                            </div>
                            
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                    <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <i class="fas fa-envelope" style="width: 1.5rem; height: 1.5rem; color: white;"></i>
                                    </div>
                                    <div>
                                        <h4 style="font-size: 1.125rem; font-weight: 800; color: #111827; margin-bottom: 0.25rem;">Email Us</h4>
                                        <p style="color: #111827; font-weight: 500;">contact@zetaflow.ai</p>
                                        <p style="color: #4b5563;">support@zetaflow.ai</p>
                                        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">Get in touch via email</p>
                                    </div>
                                </div>
                                
                                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                    <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #10b981, #059669); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <i class="fas fa-phone" style="width: 1.5rem; height: 1.5rem; color: white;"></i>
                                    </div>
                                    <div>
                                        <h4 style="font-size: 1.125rem; font-weight: 800; color: #111827; margin-bottom: 0.25rem;">Call Us</h4>
                                        <p style="color: #111827; font-weight: 500;">+17327979162</p>
                                        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">Speak with our team</p>
                                    </div>
                                </div>
                                
                                <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                    <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                        <i class="fas fa-clock" style="width: 1.5rem; height: 1.5rem; color: white;"></i>
                                    </div>
                                    <div>
                                        <h4 style="font-size: 1.125rem; font-weight: 800; color: #111827; margin-bottom: 0.25rem;">Business Hours</h4>
                                        <p style="color: #111827; font-weight: 500;"><strong>Mon-Fri:</strong> 9AM-6PM EST</p>
                                        <p style="color: #4b5563;"><strong>Sat:</strong> 10AM-4PM EST</p>
                                        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">When we're available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form -->
                    <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1rem; padding: 2rem; border: 1px solid #bfdbfe;">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div style="width: 2rem; height: 2rem; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">
                                <span style="color: white; font-size: 1.125rem;">✈️</span>
                            </div>
                            <h3 style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Send us a Message</h3>
                        </div>
                        
                        <form id="contact-form" class="form">
                            <div id="form-status"></div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">
                                        <strong>Full Name</strong> <span style="color: #ef4444; font-weight: 800;">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        placeholder="Your full name"
                                        class="form-input"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">
                                        <strong>Email Address</strong> <span style="color: #ef4444; font-weight: 800;">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="your.email@company.com"
                                        class="form-input"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label"><strong>Company</strong></label>
                                    <input 
                                        type="text" 
                                        name="company"
                                        placeholder="Your company name"
                                        class="form-input"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="form-label"><strong>Phone Number</strong></label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        placeholder="+17327979162"
                                        class="form-input"
                                    />
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">
                                        <strong>Subject</strong> <span style="color: #ef4444; font-weight: 800;">*</span>
                                    </label>
                                    <select name="subject" class="form-select" required>
                                        <option value="">Select a subject</option>
                                        <option value="demo">Request Demo</option>
                                        <option value="pricing">Pricing Information</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label"><strong>Interested In</strong></label>
                                    <select name="interestedIn" class="form-select">
                                        <option value="">Select AIRA plan</option>
                                        <option value="starter">AIRA Starter</option>
                                        <option value="professional">AIRA Professional</option>
                                        <option value="enterprise">AIRA Enterprise</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">
                                    <strong>Message</strong> <span style="color: #ef4444; font-weight: 800;">*</span>
                                </label>
                                <textarea 
                                    name="message"
                                    placeholder="Tell us about your recruitment needs and how AIRA can help transform your hiring process..."
                                    class="form-textarea"
                                    required
                                ></textarea>
                            </div>
                            
                            <div class="form-checkbox">
                                <input type="checkbox" id="updates" name="updates" />
                                <label for="updates" style="font-size: 0.875rem; color: #4b5563; display: flex; align-items: center;">
                                    <span style="color: #ef4444; margin-right: 0.25rem;">❤️</span>
                                    <strong>I'd like to receive updates about AIRA and Zetaflow products</strong>
                                </label>
                            </div>
                            
                            <button type="submit" class="form-submit">
                                <span style="margin-right: 0.5rem;">✈️</span>
                                Send Message
                                <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section section-bg-gradient">
            <div class="section-container" style="max-width: 64rem;">
                <div class="section-header">
                    <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: linear-gradient(135deg, #dbeafe, #e0e7ff); color: #1d4ed8; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; margin-bottom: 1.5rem;">
                        <i class="fas fa-question-circle" style="margin-right: 0.5rem;"></i>
                        Frequently Asked Questions
                    </div>
                    <h2 style="font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem;">
                        Got Questions? We've Got Answers
                    </h2>
                    <p class="section-subtitle">
                        Find answers to the most common questions about <strong>AIRA</strong> and our AI recruitment solutions.
                    </p>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                        <button onclick="toggleFaq(0)" style="width: 100%; padding: 2rem; text-align: left; display: flex; align-items: center; justify-content: space-between; background: none; border: none; cursor: pointer; border-radius: 1rem; transition: all 0.3s ease;">
                            <h3 style="font-size: 1.125rem; font-weight: 800; color: #111827; padding-right: 1rem;">How quickly can I get started with AIRA?</h3>
                            <div style="flex-shrink: 0;">
                                <i class="fas fa-chevron-down" style="width: 1.5rem; height: 1.5rem; color: #9ca3af;"></i>
                            </div>
                        </button>
                        
                        <div id="faq-0" style="display: none; padding: 0 2rem 2rem;">
                            <div style="border-top: 1px solid #f3f4f6; padding-top: 1rem;">
                                <p style="color: #374151; line-height: 1.75;">You can get started with AIRA in just a few minutes! Our team will help you set up your account and configure the AI agent to match your specific recruitment needs. Most clients are up and running within 24 hours.</p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                        <button onclick="toggleFaq(1)" style="width: 100%; padding: 2rem; text-align: left; display: flex; align-items: center; justify-content: space-between; background: none; border: none; cursor: pointer; border-radius: 1rem; transition: all 0.3s ease;">
                            <h3 style="font-size: 1.125rem; font-weight: 800; color: #111827; padding-right: 1rem;">What makes AIRA different from other recruitment tools?</h3>
                            <div style="flex-shrink: 0;">
                                <i class="fas fa-chevron-down" style="width: 1.5rem; height: 1.5rem; color: #9ca3af;"></i>
                            </div>
                        </button>
                        
                        <div id="faq-1" style="display: none; padding: 0 2rem 2rem;">
                            <div style="border-top: 1px solid #f3f4f6; padding-top: 1rem;">
                                <p style="color: #374151; line-height: 1.75;">AIRA uses advanced AI technology to not just screen resumes, but to understand context, evaluate soft skills, and engage with candidates intelligently. It's like having a senior recruiter working 24/7 for your team.</p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                        <button onclick="toggleFaq(2)" style="width: 100%; padding: 2rem; text-align: left; display: flex; align-items: center; justify-content: space-between; background: none; border: none; cursor: pointer; border-radius: 1rem; transition: all 0.3s ease;">
                            <h3 style="font-size: 1.125rem; font-weight: 800; color: #111827; padding-right: 1rem;">Is my data secure with ZetaFlow.AI?</h3>
                            <div style="flex-shrink: 0;">
                                <i class="fas fa-chevron-down" style="width: 1.5rem; height: 1.5rem; color: #9ca3af;"></i>
                            </div>
                        </button>
                        
                        <div id="faq-2" style="display: none; padding: 0 2rem 2rem;">
                            <div style="border-top: 1px solid #f3f4f6; padding-top: 1rem;">
                                <p style="color: #374151; line-height: 1.75;">Absolutely! We use bank-level encryption and are SOC 2 compliant. Your candidate data and company information are protected with the highest security standards in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center" style="margin-top: 3rem;">
                    <p style="color: #4b5563; margin-bottom: 1.5rem;">
                        Still have questions? <strong>We're here to help!</strong>
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center;">
                        <a 
                            href="mailto:contact@zetaflow.ai"
                            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; text-decoration: none; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); width: fit-content; margin: 0 auto;"
                        >
                            <i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function getEbookPage() {
    return `
        <!-- Ebook Hero Section -->
        <section class="hero">
            <div class="hero-bg">
                <div class="hero-bg-element" style="top: 5rem; left: 2.5rem; width: 18rem; height: 18rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite;"></div>
                <div class="hero-bg-element" style="bottom: 5rem; right: 2.5rem; width: 24rem; height: 24rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 1s;"></div>
                <div class="hero-bg-element" style="top: 50%; left: 33.333333%; width: 16rem; height: 16rem; background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(59, 130, 246, 0.15)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 0.5s;"></div>
            </div>
            
            <div class="hero-container">
                <div class="hero-grid">
                    <!-- Left side - E-book Info -->
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;" class="animate-fade-in">
                        <div style="display: inline-flex; align-items: center; padding: 0.5rem 1rem; background: #e0e7ff; color: #8b5cf6; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; width: fit-content;">
                            <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                            Bestselling E-book
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <h1 class="hero-title">
                                <span>The Automated </span>
                                <br />
                                <span class="hero-title-gradient">Income Engine</span>
                            </h1>
                            
                            <p style="font-size: 1.125rem; color: #4b5563; font-weight: 500;">
                                A Solopreneur's Guide to Building Repetitive Monthly Revenue with AI and No-Code
                            </p>
                            
                            <p class="hero-subtitle">
                                Discover how to build multiple streams of automated income using cutting-edge AI tools and no-code platforms. Perfect for entrepreneurs who want to scale without hiring a team.
                            </p>
                        </div>

                        <!-- Reviews and Pages -->
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="display: flex;">
                                    <i class="fas fa-star" style="width: 1.25rem; height: 1.25rem; color: #fbbf24;"></i>
                                    <i class="fas fa-star" style="width: 1.25rem; height: 1.25rem; color: #fbbf24;"></i>
                                    <i class="fas fa-star" style="width: 1.25rem; height: 1.25rem; color: #fbbf24;"></i>
                                    <i class="fas fa-star" style="width: 1.25rem; height: 1.25rem; color: #fbbf24;"></i>
                                    <i class="fas fa-star" style="width: 1.25rem; height: 1.25rem; color: #fbbf24;"></i>
                                </div>
                                <span style="color: #4b5563;">(247 reviews)</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-book-open" style="width: 1.25rem; height: 1.25rem; color: #4b5563;"></i>
                                <span style="color: #4b5563;">285 pages</span>
                            </div>
                        </div>

                        <!-- Pricing -->
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="font-size: 1.875rem; font-weight: 800; color: #9ca3af; text-decoration: line-through;">$599</div>
                                <div style="background: #ef4444; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 800;">90% OFF</div>
                                <div style="font-size: 2.5rem; font-weight: 800; color: #111827;">$19</div>
                            </div>
                            <p style="color: #4b5563;">One-time purchase • Lifetime access</p>
                        </div>

                        <!-- Action Buttons -->
                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button onclick="navigateTo('contact')" style="width: 100%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-download" style="margin-right: 0.5rem;"></i>
                                Contact Sales - $59
                            </button>
                            <button style="width: 100%; border: 2px solid #d1d5db; color: #374151; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; background: none; cursor: pointer; transition: all 0.3s ease;">
                                Get More Information
                            </button>
                        </div>

                        <!-- Money Back Guarantee -->
                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.875rem; color: #4b5563;">
                            <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #10b981;"></i>
                            <span>30-day money-back guarantee</span>
                        </div>
                    </div>

                    <!-- Right side - What You'll Get -->
                    <div class="animate-fade-in-right">
                        <div style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px); border-radius: 1.5rem; padding: 1.5rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.5); transition: all 0.5s ease;">
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div style="text-align: center;">
                                    <div class="card-icon card-icon-purple" style="margin: 0 auto 1rem;">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <h3 style="font-size: 1.25rem; font-weight: 800; color: #111827;">What You'll Get</h3>
                                </div>
                                
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #8b5cf6; flex-shrink: 0;"></i>
                                        <span style="font-size: 0.875rem; color: #374151;">285-page comprehensive guide</span>
                                    </div>
                                    
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #8b5cf6; flex-shrink: 0;"></i>
                                        <span style="font-size: 0.875rem; color: #374151;">50+ AI tool recommendations</span>
                                    </div>
                                    
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #8b5cf6; flex-shrink: 0;"></i>
                                        <span style="font-size: 0.875rem; color: #374151;">Step-by-step tutorials</span>
                                    </div>
                                    
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <i class="fas fa-check-circle" style="width: 1.25rem; height: 1.25rem; color: #8b5cf6; flex-shrink: 0;"></i>
                                        <span style="font-size: 0.875rem; color: #374151;">Bonus video content</span>
                                    </div>
                                </div>

                                <!-- Limited Time Offer -->
                                <div style="background: linear-gradient(135deg, #fef2f2, #fef3c7); border-radius: 1rem; padding: 1rem; border: 1px solid #fca5a5;">
                                    <div style="text-align: center; display: flex; flex-direction: column; gap: 0.5rem;">
                                        <div style="color: #dc2626; font-weight: 800;">Limited Time Offer</div>
                                        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: #4b5563;">
                                            <i class="fas fa-clock" style="width: 1rem; height: 1rem;"></i>
                                            <span style="font-size: 0.875rem;">Offer ends soon</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What's Inside Section -->
        <section class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2 class="section-title">What's Inside the Book</h2>
                    <p class="section-subtitle">
                        A comprehensive guide covering everything you need to know about building automated income streams.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div style="background: linear-gradient(135deg, #e0e7ff, #dbeafe); border-radius: 1rem; padding: 2rem; border: 1px solid #c7d2fe;">
                        <div class="card-icon card-icon-purple" style="margin: 0 0 1.5rem 0;">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 1rem;">AI Strategy Framework</h3>
                        <p style="color: #4b5563; line-height: 1.75;">
                            Learn the proven framework for identifying and implementing AI solutions that generate consistent revenue.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1rem; padding: 2rem; border: 1px solid #bfdbfe;">
                        <div class="card-icon card-icon-blue" style="margin: 0 0 1.5rem 0;">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 1rem;">No-Code Automation</h3>
                        <p style="color: #4b5563; line-height: 1.75;">
                            Master no-code platforms to build sophisticated automation systems without technical expertise.
                        </p>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #d1fae5, #dbeafe); border-radius: 1rem; padding: 2rem; border: 1px solid #a7f3d0;">
                        <div class="card-icon card-icon-green" style="margin: 0 0 1.5rem 0;">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 1rem;">Real Case Studies</h3>
                        <p style="color: #4b5563; line-height: 1.75;">
                            Detailed breakdowns of successful automated income streams with exact implementation steps.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta section">
            <div class="section-container">
                <h2 class="cta-title">Ready to Build Your Automated Income Engine?</h2>
                <p class="cta-text">
                    Join thousands of entrepreneurs who have transformed their businesses with AI automation. Get instant access today.
                </p>
                
                <div class="cta-buttons">
                    <button onclick="navigateTo('contact')" class="cta-btn-primary">
                        Contact Sales - $59
                        <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                    </button>
                </div>
                
                <p style="color: rgba(196, 181, 253, 1); font-style: italic; margin-top: 1rem;">
                    30-day money-back guarantee. Instant download.
                </p>
            </div>
        </section>
    `;
}

function getThankYouPage() {
    return `
        <!-- Thank You Page -->
        <div style="min-height: 100vh; background: linear-gradient(135deg, #dbeafe, #e0e7ff, #fce7f3); position: relative; overflow: hidden;">
            <!-- Enhanced Animated Background Elements -->
            <div style="position: absolute; inset: 0;">
                <div style="position: absolute; top: 5rem; left: 2.5rem; width: 24rem; height: 24rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite;"></div>
                <div style="position: absolute; bottom: 5rem; right: 2.5rem; width: 32rem; height: 32rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 1s;"></div>
                <div style="position: absolute; top: 50%; left: 33.333333%; width: 20rem; height: 20rem; background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 0.5s;"></div>
                <div style="position: absolute; top: 2.5rem; right: 25%; width: 16rem; height: 16rem; background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2)); border-radius: 50%; filter: blur(60px); animation: pulse 4s ease-in-out infinite; animation-delay: 0.7s;"></div>
            </div>

            <!-- Enhanced Confetti Animation -->
            <div style="position: absolute; inset: 0; pointer-events: none; z-index: 10;">
                ${Array.from({ length: 30 }, (_, i) => `
                    <div style="position: absolute; border-radius: 50%; animation: bounce 2s infinite; 
                        width: ${Math.random() * 3 + 2}px; 
                        height: ${Math.random() * 3 + 2}px; 
                        background: ${['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#6366f1'][i % 6]}; 
                        left: ${Math.random() * 100}%; 
                        top: ${Math.random() * 100}%; 
                        animation-delay: ${Math.random() * 3}s; 
                        animation-duration: ${2 + Math.random() * 3}s; 
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    </div>
                `).join('')}
            </div>

            <!-- Main Content -->
            <section style="position: relative; z-index: 20; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 5rem 0;">
                <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem; text-align: center;">
                    <!-- Enhanced Success Icon with Pulse Effect -->
                    <div class="animate-fade-in">
                        <div style="position: relative;">
                            <div style="width: 10rem; height: 10rem; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; box-shadow: 0 25px 50px rgba(16, 185, 129, 0.4); animation: pulse 2s infinite; position: relative; overflow: hidden;">
                                <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(5, 150, 105, 0.5)); border-radius: 50%; animation: pulse 2s infinite;"></div>
                                <i class="fas fa-check-circle" style="font-size: 5rem; color: white; position: relative; z-index: 10;"></i>
                            </div>
                            <!-- Radiating circles -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12rem; height: 12rem; border: 4px solid rgba(16, 185, 129, 0.3); border-radius: 50%; animation: pulse 2s infinite;"></div>
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 14rem; height: 14rem; border: 2px solid rgba(16, 185, 129, 0.2); border-radius: 50%; animation: pulse 2s infinite; animation-delay: 0.5s;"></div>
                        </div>
                    </div>

                    <!-- Enhanced Thank You Message -->
                    <div class="animate-fade-in-up" style="display: flex; flex-direction: column; gap: 2rem; animation-delay: 0.3s;">
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <h1 style="font-size: 4rem; font-weight: 800; line-height: 1.2;">
                                <span style="background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: pulse 2s infinite;">
                                    Thank You!
                                </span>
                            </h1>
                            
                            <div style="display: flex; items-center; justify-content: center; gap: 0.75rem; font-size: 2rem; font-weight: 800; color: #111827;">
                                <i class="fas fa-heart" style="width: 2.5rem; height: 2.5rem; color: #ef4444; animation: pulse 2s infinite;"></i>
                                <span style="background: linear-gradient(135deg, #374151, #111827); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
                                    Message Sent Successfully
                                </span>
                                <i class="fas fa-sparkles" style="width: 2.5rem; height: 2.5rem; color: #fbbf24; animation: bounce 1s infinite;"></i>
                            </div>
                            
                            <p style="font-size: 1.25rem; color: #374151; line-height: 1.75; max-width: 48rem; margin: 0 auto; font-weight: 500;">
                                🎉 We've received your message and our expert team will get back to you within 24 hours. 
                                We're excited to help you transform your business with AI automation!
                            </p>
                        </div>
                    </div>

                    <!-- Enhanced What Happens Next Section -->
                    <div class="animate-fade-in-up" style="margin-top: 5rem; animation-delay: 0.6s;">
                        <div style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(20px); border-radius: 1.5rem; padding: 2.5rem; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25); border: 1px solid rgba(255, 255, 255, 0.6); max-width: 64rem; margin: 0 auto; position: relative; overflow: hidden;">
                            <!-- Background gradient overlay -->
                            <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05)); border-radius: 1.5rem;"></div>
                            
                            <div style="position: relative; z-index: 10;">
                                <h3 style="font-size: 1.875rem; font-weight: 800; color: #111827; margin-bottom: 2.5rem; display: flex; align-items: center; justify-content: center;">
                                    <i class="fas fa-calendar" style="width: 2rem; height: 2rem; margin-right: 1rem; color: #3b82f6;"></i>
                                    What Happens Next?
                                </h3>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div style="text-align: center; display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, #dbeafe, #e0e7ff); border-radius: 1rem; border: 2px solid #bfdbfe; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                                        <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);">
                                            <i class="fas fa-envelope" style="font-size: 2rem; color: white;"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 0.75rem;">Step 1</h4>
                                            <p style="color: #374151; font-weight: 500;">We'll review your message and requirements within 2 hours</p>
                                        </div>
                                    </div>

                                    <div style="text-align: center; display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, #e0e7ff, #fce7f3); border-radius: 1rem; border: 2px solid #c7d2fe; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                                        <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #8b5cf6, #7c3aed); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);">
                                            <i class="fas fa-phone" style="font-size: 2rem; color: white;"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 0.75rem;">Step 2</h4>
                                            <p style="color: #374151; font-weight: 500;">Our AI expert will contact you within 24 hours</p>
                                        </div>
                                    </div>

                                    <div style="text-align: center; display: flex; flex-direction: column; gap: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, #d1fae5, #dbeafe); border-radius: 1rem; border: 2px solid #a7f3d0; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                                        <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #10b981, #059669); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);">
                                            <i class="fas fa-star" style="font-size: 2rem; color: white;"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.25rem; font-weight: 800; color: #111827; margin-bottom: 0.75rem;">Step 3</h4>
                                            <p style="color: #374151; font-weight: 500;">We'll schedule a personalized AIRA demo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced Action Buttons -->
                    <div class="animate-fade-in-up" style="margin-top: 4rem; animation-delay: 0.9s;">
                        <div style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: center;">
                            <button onclick="navigateTo('home')" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899); color: white; padding: 1.25rem 2.5rem; border-radius: 9999px; font-weight: 800; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.125rem; position: relative; overflow: hidden; margin: 0 auto;">
                                <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2)); border-radius: 9999px; animation: pulse 2s infinite;"></div>
                                <i class="fas fa-home" style="width: 1.5rem; height: 1.5rem; margin-right: 0.75rem; position: relative; z-index: 10;"></i>
                                <span style="position: relative; z-index: 10;">Back to Home</span>
                                <i class="fas fa-arrow-right" style="width: 1.5rem; height: 1.5rem; margin-left: 0.75rem; position: relative; z-index: 10;"></i>
                            </button>
                            
                            <button onclick="navigateTo('products')" style="border: 3px solid #d1d5db; color: #374151; padding: 1.25rem 2.5rem; border-radius: 9999px; font-weight: 800; background: none; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; font-size: 1.125rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); margin: 0 auto;">
                                <i class="fas fa-briefcase" style="width: 1.5rem; height: 1.5rem; margin-right: 0.75rem;"></i>
                                Explore AIRA
                                <i class="fas fa-bolt" style="width: 1.5rem; height: 1.5rem; margin-left: 0.75rem;"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Enhanced Contact Information -->
                    <div class="animate-fade-in-up" style="margin-top: 5rem; animation-delay: 1.2s;">
                        <div style="background: linear-gradient(135deg, #f9fafb, #dbeafe); border-radius: 1.5rem; padding: 2rem; max-width: 48rem; margin: 0 auto; border: 2px solid #e5e7eb; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);">
                            <h4 style="font-size: 1.5rem; font-weight: 800; color: #111827; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-comments" style="width: 1.5rem; height: 1.5rem; margin-right: 0.75rem; color: #3b82f6;"></i>
                                Need Immediate Assistance?
                            </h4>
                            
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div style="text-align: center; padding: 1rem; background: white; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
                                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; color: #374151;">
                                        <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <i class="fas fa-envelope" style="width: 1.25rem; height: 1.25rem; color: white;"></i>
                                        </div>
                                        <div>
                                            <div style="font-weight: 800; color: #111827;">Email Us</div>
                                            <div style="font-weight: 500; color: #3b82f6;">contact@zetaflow.ai</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style="text-align: center; padding: 1rem; background: white; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease;">
                                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; color: #374151;">
                                        <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                            <i class="fas fa-phone" style="width: 1.25rem; height: 1.25rem; color: white;"></i>
                                        </div>
                                        <div>
                                            <div style="font-weight: 800; color: #111827;">Call Us</div>
                                            <div style="font-weight: 500; color: #10b981;">+17327979162</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Success Metrics -->
                    <div class="animate-fade-in-up" style="margin-top: 4rem; animation-delay: 1.5s;">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" style="max-width: 64rem; margin: 0 auto;">
                            <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.5); text-align: center; transition: all 0.3s ease;">
                                <i class="fas fa-chart-line" style="width: 2rem; height: 2rem; color: #3b82f6; margin: 0 auto 0.75rem;"></i>
                                <div style="font-size: 1.875rem; font-weight: 800; background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">500+</div>
                                <div style="color: #4b5563; font-weight: 500;">Happy Clients</div>
                            </div>
                            
                            <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.5); text-align: center; transition: all 0.3s ease;">
                                <i class="fas fa-bolt" style="width: 2rem; height: 2rem; color: #8b5cf6; margin: 0 auto 0.75rem;"></i>
                                <div style="font-size: 1.875rem; font-weight: 800; background: linear-gradient(135deg, #8b5cf6, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">24hrs</div>
                                <div style="color: #4b5563; font-weight: 500;">Response Time</div>
                            </div>
                            
                            <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); border-radius: 1rem; padding: 1.5rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.5); text-align: center; transition: all 0.3s ease;">
                                <i class="fas fa-star" style="width: 2rem; height: 2rem; color: #10b981; margin: 0 auto 0.75rem;"></i>
                                <div style="font-size: 1.875rem; font-weight: 800; background: linear-gradient(135deg, #10b981, #3b82f6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">99.9%</div>
                                <div style="color: #4b5563; font-weight: 500;">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (state.formSubmitting) return;
        
        state.formSubmitting = true;
        const submitBtn = form.querySelector('button[type="submit"]');
        const statusDiv = document.getElementById('form-status');
        
        // Update button state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <div class="loading"></div>
            Sending...
        `;
        
        // Clear previous status
        statusDiv.innerHTML = '';
        
        const formData = new FormData(form);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            interestedIn: formData.get('interestedIn'),
            message: formData.get('message'),
            updates: formData.get('updates') === 'on',
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyWLzx8GNGvOCg0WoeXgxP9Jhzti6DTJAr2iHGHR84llv9CDby_zpqnoaQKbMGs5XBYBg/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // Show success message
            statusDiv.innerHTML = `
                <div class="status-message status-success">
                    <i class="fas fa-check-circle"></i>
                    <span>Thank you! Your message has been sent successfully.</span>
                </div>
            `;
            
            // Reset form
            form.reset();
            
            // Redirect to thank you page after a short delay
            setTimeout(() => {
                navigateTo('thank-you');
            }, 2000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            statusDiv.innerHTML = `
                <div class="status-message status-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                </div>
            `;
        } finally {
            state.formSubmitting = false;
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <span style="margin-right: 0.5rem;">✈️</span>
                Send Message
                <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
            `;
        }
    });
}

// FAQ functionality
function toggleFaq(index) {
    const faqContent = document.getElementById(`faq-${index}`);
    const isOpen = faqContent.style.display === 'block';
    
    // Close all FAQs
    document.querySelectorAll('[id^="faq-"]').forEach(faq => {
        faq.style.display = 'none';
    });
    
    // Toggle current FAQ
    if (!isOpen) {
        faqContent.style.display = 'block';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load the home page by default
    loadPage('home');
    
    // Start dashboard animation after a short delay
    setTimeout(() => {
        updateDashboardData();
        setInterval(updateDashboardData, 3000);
    }, 1000);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    const page = e.state ? e.state.page : 'home';
    loadPage(page);
});

// Export functions for global access
window.navigateTo = navigateTo;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFaq = toggleFaq;