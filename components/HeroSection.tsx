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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

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

const innerOrbitIcons = [
  { id: 'js', icon: Code, color: 'text-sky-400', label: 'JavaScript' }, // Changed to sky blue
  { id: 'html', icon: Layers, color: 'text-indigo-400', label: 'HTML' }, // Changed to indigo
  { id: 'css', icon: Palette, color: 'text-blue-500', label: 'CSS' },
];

const middleOrbitIcons = [
  { id: 'ts', icon: GitBranch, color: 'text-blue-400', label: 'TypeScript' },
  { id: 'tailwind', icon: Zap, color: 'text-cyan-400', label: 'Tailwind CSS' },
  { id: 'react', icon: Monitor, color: 'text-blue-300', label: 'React.js' },
  { id: 'node', icon: Server, color: 'text-emerald-400', label: 'Node.js' }, // Changed to emerald green
];

const outerOrbitIcons = [
  { id: 'angular', icon: Smartphone, color: 'text-red-400', label: 'Angular' }, // Changed to red-400 (closer to Angular's actual color, but less prominent)
];

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  // Remove old particle state and effects
  // Remove all orbit arrays and logic

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
  
      {/* Cosmic Background and main hero content only, no orbits */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black">
        
       
        
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
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-700/20 to-cyan-500/20 rounded-full blur-3xl"
        />

     
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-0 px-6 py-20" >
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-0">
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-xl">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-extrabold">
                    Sahin Aktar Mondal
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-4xl text-gray-200 font-light tracking-wide">
                  Angular Developer &{' '}
                  <motion.span
                    animate={{ color: ['#3B82F6', '#0EA5E9', '#3B82F6'] }} // Electric blue shades
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-blue-400 font-semibold"
                  >
                    Frontend Engineer
                  </motion.span>
                </h2>
              </div>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed opacity-90">
                Passionate Angular developer with 4 years of experience building scalable 
                web applications and dynamic user interfaces. Specialized in creating 
                responsive, performant applications using modern frontend technologies.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-400 mt-6 pt-6 border-t border-gray-700/30">
                <motion.div
                  whileHover={{ scale: 1.05, color: '#0EA5E9' }} // Electric blue
                  className="flex items-center gap-2 transition-colors transform hover:translate-x-1"
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Kolkata, India</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, color: '#0EA5E9' }} // Electric blue
                  className="flex items-center gap-2 transition-colors transform hover:translate-x-1"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>4+ Years Experience</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, color: '#0EA5E9' }} // Electric blue
                  className="flex items-center gap-2 transition-colors transform hover:translate-x-1"
                >
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>5+ Projects Completed</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('mailto:sahin.office24@gmail.com', '_blank')}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border-0"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('tel:+918617833233', '_blank')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border-0"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = './public/Sahin(Resume).pdf'; // Corrected path for public directory
                    link.download = 'Sahin(Resume).pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-transparent border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
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
              className="mt-8"
            >
              <Button
                onClick={onLearnMore}
                variant="ghost"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 px-0 group"
              >
                <span className="mr-2">Explore My Work</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-4 h-4 group-hover:text-blue-400" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Multi-Orbit Tech Stack */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Inner Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <TooltipProvider>
                  {innerOrbitIcons.map((item, i) => {
                    const Icon = item.icon;
                    const angle = (i / innerOrbitIcons.length) * 2 * Math.PI;
                    // Responsive radius calculation for inner orbit
                    const radius = window.innerWidth >= 768 ? 96 : 83; // 768px is Tailwind's 'md' breakpoint
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                      <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer"
                            style={{
                              top: `calc(50% + ${y}px - 24px)`, // Adjust for icon size
                              left: `calc(50% + ${x}px - 24px)`, // Adjust for icon size
                            }}
                          >
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </motion.div>

              {/* Middle Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <TooltipProvider>
                  {middleOrbitIcons.map((item, i) => {
                    const Icon = item.icon;
                    const angle = (i / middleOrbitIcons.length) * 2 * Math.PI;
                    // Responsive radius calculation for middle orbit
                    const radius = window.innerWidth >= 768 ? 160 : 147; // 768px is Tailwind's 'md' breakpoint
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                      <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer"
                            style={{
                              top: `calc(50% + ${y}px - 28px)`, // Adjust for icon size
                              left: `calc(50% + ${x}px - 28px)`, // Adjust for icon size
                            }}
                          >
                            <Icon className={`w-7 h-7 ${item.color}`} />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </motion.div>

              {/* Outer Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <TooltipProvider>
                  {outerOrbitIcons.map((item, i) => {
                    const Icon = item.icon;
                    const angle = (i / outerOrbitIcons.length) * 2 * Math.PI;
                    // Responsive radius calculation for outer orbit
                    const radius = window.innerWidth >= 768 ? 240 : 203; // 768px is Tailwind's 'md' breakpoint
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                      <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.6 + i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer"
                            style={{
                              top: `calc(50% + ${y}px - 32px)`, // Adjust for icon size
                              left: `calc(50% + ${x}px - 32px)`, // Adjust for icon size
                            }}
                          >
                            <Icon className={`w-8 h-8 ${item.color}`} />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </motion.div>
              
              {/* Center Element - Angular Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20 z-10"
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
                  className="flex items-center justify-center"
                >
                  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" className="w-12 h-12" />
                </motion.div>
              </motion.div>

              {/* Orbit Trails */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 md:w-48 md:h-48 border border-blue-400/20 rounded-full animate-pulse" />
                <div className="absolute w-72 h-72 md:w-80 md:h-80 border border-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-[400px] h-[400px] md:w-[480px] md:h-[480px] border border-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => {
                const colors = ['bg-blue-400/40', 'bg-cyan-400/40', 'bg-indigo-400/40', 'bg-blue-300/40', 'bg-sky-400/40', 'bg-teal-400/40'];
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