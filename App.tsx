import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import SecuritySection from "./components/SecuritySection";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Phone,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced smooth scroll function
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      // Use smooth scrolling with easing
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section immediately for better UX
      setActiveSection(sectionId);
    }
  };

  // Handle learn more button click
  const handleLearnMore = () => {
    scrollToSection("skills");
  };

  // Track active section based on scroll position with improved logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "encryption"];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      // Find the current section
      let currentSection = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }

      // Only update if section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [activeSection]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
   
        {/* Cosmic Loading Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 via-purple-900/30 to-black">
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.08, 0.25, 0.08],
              rotate: [180, 540],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Loading Animation */}
        <div className="relative z-10">
          {/* Loading rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-32 h-32 border-2 border-cyan-400/40 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-4 border-2 border-purple-400/40 rounded-full"
          />

          {/* Center icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <span className="text-white font-bold text-xl">
                NG
              </span>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="text-cyan-400 text-sm font-medium tracking-wide">
              Loading Angular Portfolio...
            </div>
            <div className="text-gray-500 text-xs mt-1">
              Sahin Aktar Mondal
            </div>
          </motion.div>
        </div>

        {/* Background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen text-white overflow-x-hidden relative"
    >
      {/* Global Cosmic Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-900/20 via-purple-900/30 to-black">
        {/* Animated Cosmic Elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.2, 0.08],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.03, 0.12, 0.03],
            rotate: [0, 180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-green-400/08 to-emerald-500/08 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Global Orbital Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large orbital rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`global-orbit-${i}`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 40 + i * 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className={`border border-cyan-400/5 rounded-full opacity-${30 - i * 5}`}
                style={{
                  width: `${400 + i * 200}px`,
                  height: `${400 + i * 200}px`,
                }}
              />
            </motion.div>
          ))}

          {/* Floating orbital particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orbital-particle-${i}`}
              animate={{
                rotate: 360,
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                rotate: {
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute"
              style={{
                left: `${10 + i * 11}%`,
                top: `${15 + i * 9}%`,
              }}
            >
              <div className="w-2 h-2 bg-cyan-400/30 rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}

          {/* Micro orbital systems */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`micro-orbit-${i}`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 15 + i * 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + i * 15}%`,
              }}
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border border-purple-400/10 rounded-full" />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400/40 rounded-full -translate-x-1/2"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Twinkling Stars */}
        {[...Array(150)].map((_, i) => {
          const colors = ['bg-cyan-300', 'bg-purple-300', 'bg-blue-300', 'bg-pink-300', 'bg-green-300', 'bg-yellow-300'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${randomColor} rounded-full`}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onLearnMore={handleLearnMore} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Security Section */}
        <SecuritySection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-12 bg-gradient-to-t from-gray-900/30 to-transparent backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl text-white">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Build Something Amazing
                  </span>{" "}
                  Together
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Ready to discuss your next Angular project?
                  I'm available for freelance work and exciting
                  opportunities in Kolkata and remote positions.
                </p>

                {/* Contact Details */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mt-6">
                  <motion.a
                    href="mailto:sahin.office24@gmail.com"
                    whileHover={{
                      scale: 1.05,
                      color: "#22D3EE",
                    }}
                    className="flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>sahin.office24@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+918617833233"
                    whileHover={{
                      scale: 1.05,
                      color: "#10B981",
                    }}
                    className="flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>+91 86178 33233</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center space-x-6"
              >
                {[
                  {
                    href: "https://github.com/sahinmondal",
                    icon: Github,
                    label: "GitHub",
                    color: "hover:text-purple-400",
                    bgColor: "hover:bg-purple-500/20",
                    shadowColor: "hover:shadow-purple-500/25",
                    iconColor: "text-purple-400"
                  },
                  {
                    href: "https://linkedin.com/in/sahin-mondal",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                    bgColor: "hover:bg-blue-500/20",
                    shadowColor: "hover:shadow-blue-500/25",
                    iconColor: "text-blue-400"
                  },
                  {
                    href: "mailto:sahin.office24@gmail.com",
                    icon: Mail,
                    label: "Email",
                    color: "hover:text-cyan-400",
                    bgColor: "hover:bg-cyan-500/20",
                    shadowColor: "hover:shadow-cyan-500/25",
                    iconColor: "text-cyan-400"
                  },
                  {
                    href: "tel:+918617833233",
                    icon: Phone,
                    label: "Phone",
                    color: "hover:text-green-400",
                    bgColor: "hover:bg-green-500/20",
                    shadowColor: "hover:shadow-green-500/25",
                    iconColor: "text-green-400"
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                    }}
                    className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 border border-gray-700/50 hover:border-current ${social.shadowColor}`}
                  >
                    <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8 border-t border-gray-800/50 space-y-2"
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Sahin Aktar Mondal. All rights
                  reserved.
                </p>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-gray-500 text-xs flex items-center justify-center gap-1"
                >
                  Built with{" "}
                  <Heart className="w-3 h-3 text-pink-400" />{" "}
                  using Angular & TypeScript
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: activeSection !== "hero" ? 1 : 0,
          scale: activeSection !== "hero" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => scrollToSection("hero")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        <ArrowUp className="w-5 h-5" />
        
        {/* Orbital ring around scroll button */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-cyan-400/30"
        />
      </motion.button>
    </motion.div>
  );
}