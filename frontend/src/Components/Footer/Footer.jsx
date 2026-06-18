import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Youtube, Facebook, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://x.com/EHMOfficial1', label: 'Twitter' },
    { icon: Instagram, url: 'https://www.instagram.com/ehmofficial1/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100063877967113', label: 'Facebook' },
    { icon: Youtube, url: 'https://www.youtube.com/@EHMOfficial1', label: 'YouTube' },
  ];

  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/CommonImages/logo.jpg?v=2"
                alt="EHM Logo"
                className="h-12 w-auto max-w-[180px] object-contain rounded-lg shadow-lg bg-white p-1"
                onError={(e) => {
                  e.currentTarget.src = "/favicon.png";
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Hydro Canopy Analyst</h3>
                <p className="text-sky-300 text-sm">Water & Sustainable Solutions</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-200 leading-relaxed">
              Water Intelligence | Hydrogeology | Climate Risk | Sustainability Consulting
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2 text-gray-200 hover:text-sky-300 transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-sky-300" />
                <span>Registered Office: AD - 77B, 1st Floor<br />Shalimar Bagh, Delhi - 110088</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200 hover:text-sky-300 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0 text-sky-300" />
                <a href="mailto:info@hydrocanopyanalyst.com" className="hover:underline">
                  info@hydrocanopyanalyst.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-200 hover:text-sky-300 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-sky-300" />
                <a href="tel:+919453047196" className="hover:underline">
                  +91 9453047196
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-gray-200 hover:text-sky-300 hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-200 mb-4">
              Subscribe to our newsletter for the latest updates on sustainability initiatives.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-4 py-2.5 bg-blue-900/50 border border-blue-700/50 rounded-lg focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white text-sm transition-all backdrop-blur-sm"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              <p className="text-xs text-gray-300">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-sky-600 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© {new Date().getFullYear()} Hydro Canopy Analyst Private Limited. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="hover:text-sky-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-300 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-sky-300 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;