import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, ShoppingCart, Users, BarChart3, Calendar, BookOpen } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Admin Dashboard",
      description: "A comprehensive Angular-based admin dashboard for e-commerce management featuring real-time analytics, product management, order tracking, and user administration. Built with Angular Material and integrated with Firebase for backend services.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Angular 17", "TypeScript", "Angular Material", "Firebase", "RxJS", "Chart.js"],
      liveUrl: "https://ecommerce-admin.demo.com",
      githubUrl: "https://github.com/sahinmondal/ecommerce-admin",
      gradient: "from-blue-500 to-purple-600",
      icon: ShoppingCart,
      category: "Dashboard"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management application built with Angular featuring drag-and-drop functionality, real-time updates, team collaboration tools, and progress tracking. Implements advanced Angular features like custom directives and pipes.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Angular 16", "TypeScript", "PrimeNG", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://taskflow.demo.com",
      githubUrl: "https://github.com/sahinmondal/task-management",
      gradient: "from-green-500 to-teal-600",
      icon: Users,
      category: "Web App"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A data visualization dashboard for business analytics with interactive charts, custom date ranges, export functionality, and responsive design. Features advanced Angular reactive forms and custom chart components.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Angular 15", "TypeScript", "Chart.js", "Angular Material", "REST API", "CSS Grid"],
      liveUrl: "https://analytics-dashboard.demo.com",
      githubUrl: "https://github.com/sahinmondal/analytics-dashboard",
      gradient: "from-purple-500 to-pink-600",
      icon: BarChart3,
      category: "Dashboard"
    },
    {
      id: 4,
      title: "Event Booking Platform",
      description: "A comprehensive event booking platform with calendar integration, payment processing, user authentication, and admin panel. Built with Angular and integrated with multiple third-party APIs for seamless functionality.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      technologies: ["Angular 16", "TypeScript", "Bootstrap", "Stripe API", "Google Calendar API", "Firebase Auth"],
      liveUrl: "https://eventbooking.demo.com",
      githubUrl: "https://github.com/sahinmondal/event-booking",
      gradient: "from-orange-500 to-red-600",
      icon: Calendar,
      category: "Web App"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform featuring course management, video streaming, progress tracking, and interactive quizzes. Implements Angular lazy loading, guards, and advanced routing for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Angular 17", "TypeScript", "Angular Material", "Video.js", "Firebase", "SCSS"],
      liveUrl: "https://lms-platform.demo.com",
      githubUrl: "https://github.com/sahinmondal/lms-platform",
      gradient: "from-indigo-500 to-blue-600",
      icon: BookOpen,
      category: "Web App"
    }
  ];

  const categories = ["All", "Dashboard", "Web App"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 text-red-400 text-sm font-medium mb-4"
          >
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span>FEATURED WORK</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>{' '}
            & Portfolio
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing 5+ Angular projects spanning from enterprise dashboards to full-stack web applications, 
            demonstrating expertise in modern frontend development and user experience design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-red-400 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/70 text-red-400 border-red-500/30 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-red-400" />
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80 flex items-center justify-center`}
                  >
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-black transition-colors"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-black transition-colors"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl text-white group-hover:text-red-400 transition-colors font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 pointer-events-none`}
                  animate={hoveredProject === project.id ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-white mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  4+ Years
                </span>{' '}
                of Angular Development
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialized in creating scalable, maintainable Angular applications with focus on performance, 
                user experience, and modern development practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-red-500/30 mx-auto">
                  <span className="text-red-400 font-bold text-xl">5+</span>
                </div>
                <h4 className="text-white font-semibold">Projects Delivered</h4>
                <p className="text-gray-400 text-sm">
                  Successfully completed and deployed multiple Angular applications across different domains.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-red-500/30 mx-auto">
                  <span className="text-red-400 font-bold text-xl">NG</span>
                </div>
                <h4 className="text-white font-semibold">Angular Expertise</h4>
                <p className="text-gray-400 text-sm">
                  Deep knowledge of Angular ecosystem, from basic components to advanced patterns and optimization.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-red-500/30 mx-auto">
                  <span className="text-red-400 font-bold text-xl">100%</span>
                </div>
                <h4 className="text-white font-semibold">Client Satisfaction</h4>
                <p className="text-gray-400 text-sm">
                  Committed to delivering high-quality solutions that meet and exceed client expectations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="space-y-4">
            <p className="text-gray-400">
              Interested in collaborating on your next Angular project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('https://github.com/sahinmondal', '_blank')}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700 hover:border-gray-600"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Profile
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.open('mailto:sahin.office24@gmail.com', '_blank')}
                  className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Let's Discuss Your Project
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}