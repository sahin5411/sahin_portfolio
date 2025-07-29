import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, User, Briefcase, Shield, Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'About', icon: User, color: 'text-blue-400', hoverColor: 'hover:text-blue-300' },
    { id: 'skills', label: 'Skills', icon: Code, color: 'text-cyan-400', hoverColor: 'hover:text-cyan-300' },
    { id: 'projects', label: 'Projects', icon: Briefcase, color: 'text-sky-400', hoverColor: 'hover:text-sky-300' },
    { id: 'encryption', label: 'Security', icon: Shield, color: 'text-emerald-400', hoverColor: 'hover:text-emerald-300' },
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/sahinmondal', 
      icon: Github, 
      label: 'GitHub',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300'
    },
    { 
      href: 'https://linkedin.com/in/sahin-mondal', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-300'
    },
    { 
      href: 'mailto:sahin.office24@gmail.com', 
      icon: Mail, 
      label: 'Email',
      color: 'text-sky-400',
      hoverColor: 'hover:text-sky-300'
    },
    { 
      href: 'tel:+918617833233', 
      icon: Phone, 
      label: 'Phone',
      color: 'text-emerald-400',
      hoverColor: 'hover:text-emerald-300'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    console.log('Nav clicked:', sectionId); // Debug log
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' 
          : 'bg-black/40 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      {/* Cosmic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg relative"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)", 
                scale: 1.1 
              }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.2)", 
                  "0 0 30px rgba(34, 211, 238, 0.4)", 
                  "0 0 20px rgba(34, 211, 238, 0.2)"
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white font-bold text-sm">SM</span>
              
              {/* Orbital glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl border border-blue-400/30"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-white text-lg font-semibold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Sahin Aktar Mondal
              </h1>
              <p className="text-gray-400 text-xs">Angular Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative group ${activeSection === item.id ? `bg-${item.color.split('-')[1]}-500/20 text-${item.color.split('-')[1]}-400 border border-${item.color.split('-')[1]}-500/40 shadow-lg shadow-${item.color.split('-')[1]}-500/20` : `text-gray-300 ${item.hoverColor} hover:bg-${item.color.split('-')[1]}-500/10 hover:border hover:border-${item.color.split('-')[1]}-500/20`}`}
              >
                <item.icon className={`w-4 h-4 transition-colors ${activeSection === item.id ? item.color : `group-hover:${item.color}`}`} />
                <span className="text-sm font-medium">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-${item.color.split('-')[1]}-400 rounded-full shadow-lg shadow-${item.color.split('-')[1]}-400/50`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Hover glow */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-${item.color.split('-')[1]}-500/5 opacity-0 group-hover:opacity-100 transition-opacity`}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -2
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`${social.color} ${social.hoverColor} transition-all duration-300 p-2 rounded-lg hover:bg-${social.color.split('-')[1]}-500/10 hover:shadow-lg hover:shadow-${social.color.split('-')[1]}-500/20 group relative`}
              >
                <social.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 ${social.color} px-2 py-1 rounded text-xs whitespace-nowrap backdrop-blur-sm border border-${social.color.split('-')[1]}-500/30 pointer-events-none`}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => {
              console.log('Mobile menu button clicked. Current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-500/10"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="pt-4 pb-2 space-y-2 border-t border-blue-500/20 mt-4"
            initial={{ y: -20 }}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.id ? `bg-${item.color.split('-')[1]}-500/20 ${item.color} border border-${item.color.split('-')[1]}-500/40 shadow-lg shadow-${item.color.split('-')[1]}-500/20` : `text-gray-300 ${item.hoverColor} hover:bg-${item.color.split('-')[1]}-500/10 hover:border hover:border-${item.color.split('-')[1]}-500/20`}`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-medium">{item.label}</span>
                
                {/* Mobile active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`ml-auto w-2 h-2 bg-${item.color.split('-')[1]}-400 rounded-full shadow-md shadow-${item.color.split('-')[1]}-400/50`}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Mobile Social Links */}
            <motion.div 
              className="flex justify-center space-x-6 pt-4 border-t border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    scale: isMobileMenuOpen ? 1 : 0 
                  }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className={`${social.color} ${social.hoverColor} transition-colors p-2 rounded-lg hover:bg-${social.color.split('-')[1]}-500/10`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.nav>
  );
}