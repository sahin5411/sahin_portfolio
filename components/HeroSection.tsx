import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { 
  Mail, 
  Download, 
  ArrowDown, 
  MapPin, 
  Calendar, 
  Award,
  Code,
  Database,
  Globe,
  Cloud,
  Smartphone,
  Server,
  Phone,
  Zap,
  Layers,
  GitBranch,
  Cpu,
  Monitor,
  Palette
} from 'lucide-react';
import ThreeStarfield from './ThreeStarfield';

interface HeroSectionProps {
  onLearnMore: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  // Remove old particle state and effects
  // Remove all orbit arrays and logic

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ThreeStarfield />
      {/* Cosmic Background and main hero content only, no orbits */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 via-purple-900/30 to-black">
        
        {/* Cosmic Nebula Effects */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.4, 0.15],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />

        {/* Orbital Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large background orbit rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`bg-orbit-${i}`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div 
                className="border border-cyan-400/10 rounded-full"
                style={{
                  width: `${300 + i * 150}px`,
                  height: `${300 + i * 150}px`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - About Me */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 text-cyan-400 text-sm font-medium"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Sahin Aktar Mondal
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  Angular Developer &{' '}
                  <motion.span
                    animate={{ color: ['#22D3EE', '#3B82F6', '#22D3EE'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    Frontend Engineer
                  </motion.span>
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                Passionate Angular developer with 4 years of experience building scalable 
                web applications and dynamic user interfaces. Specialized in creating 
                responsive, performant applications using modern frontend technologies.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <motion.div
                  whileHover={{ scale: 1.05, color: '#22D3EE' }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Kolkata, India</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, color: '#3B82F6' }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>4+ Years Experience</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, color: '#8B5CF6' }}
                  className="flex items-center gap-2 transition-colors"
                >
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>5+ Projects Completed</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('mailto:sahin.office24@gmail.com', '_blank')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border-0"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('tel:+918617833233', '_blank')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 border-0"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Explore Work Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={onLearnMore}
                variant="ghost"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 px-0 group"
              >
                <span className="mr-2">Explore My Work</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4 group-hover:text-cyan-400" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Multi-Orbit Tech Stack */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Inner Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Removed orbiting icons */}
              </motion.div>

              {/* Middle Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Removed orbiting icons */}
              </motion.div>

              {/* Outer Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Removed orbiting icons */}
              </motion.div>
              
              {/* Center Element - Angular Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20 z-10"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="font-bold text-xl"
                >
                  NG
                </motion.div>
              </motion.div>

              {/* Orbit Trails */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 border border-cyan-400/20 rounded-full animate-pulse" />
                <div className="absolute w-72 h-72 border border-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-[400px] h-[400px] border border-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const colors = ['bg-cyan-400/40', 'bg-blue-400/40', 'bg-purple-400/40', 'bg-green-400/40', 'bg-pink-400/40', 'bg-yellow-400/40'];
                const randomColor = colors[i % colors.length];
                
                return (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 ${randomColor} rounded-full`}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.2, 1, 0.2],
                      scale: [0.5, 1.2, 0.5],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}