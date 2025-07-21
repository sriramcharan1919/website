import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import ResourcesPage from './components/ResourcesPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import EbookPage from './components/EbookPage';
import ComingSoonPage from './components/ComingSoonPage';
import LoadMorePage from './components/LoadMorePage';
import ThankYouPage from './components/ThankYouPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/chatgpt4o-vs-other-llms" element={<BlogPost />} />
          <Route path="/ebook" element={<EbookPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
          <Route path="/load-more" element={<LoadMorePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;