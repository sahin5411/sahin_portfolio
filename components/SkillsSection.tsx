import { motion } from 'framer-motion';
import { useState } from 'react';
import { Progress } from './ui/progress';
import { 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Server, 
  Globe, 
  Smartphone,
  GitBranch,
  Shield,
  TestTube,
  Layers,
  Monitor,
  Cloud,
  Cpu,
  Settings
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Angular', level: 95, icon: Code, color: 'text-red-400' },
        { name: 'TypeScript', level: 90, icon: Code, color: 'text-blue-400' },
        { name: 'JavaScript', level: 88, icon: Code, color: 'text-yellow-400' },
        { name: 'HTML5/CSS3', level: 92, icon: Palette, color: 'text-orange-400' },
        { name: 'SCSS/SASS', level: 85, icon: Palette, color: 'text-pink-400' },
        { name: 'RxJS', level: 87, icon: Zap, color: 'text-purple-400' },
        { name: 'Angular Material', level: 90, icon: Palette, color: 'text-indigo-400' },
        { name: 'Bootstrap', level: 85, icon: Palette, color: 'text-violet-400' },
      ]
    },
    backend: {
      title: 'Backend & Database',
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 82, icon: Server, color: 'text-green-400' },
        { name: 'Express.js', level: 80, icon: Server, color: 'text-gray-400' },
        { name: 'MongoDB', level: 85, icon: Database, color: 'text-emerald-400' },
        { name: 'Firebase', level: 88, icon: Cloud, color: 'text-orange-400' },
        { name: 'MySQL', level: 75, icon: Database, color: 'text-blue-400' },
        { name: 'REST APIs', level: 90, icon: Globe, color: 'text-cyan-400' },
        { name: 'GraphQL', level: 70, icon: Globe, color: 'text-pink-400' },
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: Settings,
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Git/GitHub', level: 92, icon: GitBranch, color: 'text-orange-400' },
        { name: 'VS Code', level: 95, icon: Monitor, color: 'text-blue-400' },
        { name: 'Docker', level: 75, icon: Layers, color: 'text-blue-400' },
        { name: 'Jest/Karma', level: 80, icon: TestTube, color: 'text-red-400' },
        { name: 'Webpack', level: 78, icon: Cpu, color: 'text-cyan-400' },
        { name: 'NPM/Yarn', level: 90, icon: Layers, color: 'text-red-400' },
        { name: 'Figma', level: 85, icon: Palette, color: 'text-purple-400' },
      ]
    }
  };

  const orbitalSkills = [
    { name: 'Angular', icon: Code, color: 'from-red-400 to-red-500' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-400 to-blue-500' },
    { name: 'Node.js', icon: Server, color: 'from-green-400 to-green-500' },
    { name: 'MongoDB', icon: Database, color: 'from-emerald-400 to-emerald-500' },
    { name: 'Firebase', icon: Cloud, color: 'from-orange-400 to-yellow-400' },
    { name: 'Git', icon: GitBranch, color: 'from-purple-400 to-pink-400' },
    { name: 'REST API', icon: Globe, color: 'from-cyan-400 to-blue-400' },
    { name: 'Material UI', icon: Palette, color: 'from-indigo-400 to-purple-400' },
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-black via-purple-900/10 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Orbital Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Skill orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[600px] h-[600px] border border-cyan-400/5 rounded-full" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[800px] h-[800px] border border-purple-400/5 rounded-full" />
          </motion.div>
        </div>
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
            className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium mb-4"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>TECHNICAL EXPERTISE</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>{' '}
            & Technologies
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            4+ years of hands-on experience with modern web technologies, 
            specializing in Angular ecosystem and full-stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Orbital Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Orbital Skills */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {orbitalSkills.map((skill, index) => {
                  const angle = (index * (360 / orbitalSkills.length)) * (Math.PI / 180);
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`absolute w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center border border-white/20 shadow-lg transition-all duration-300 backdrop-blur-sm group`}
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                      whileHover={{ scale: 1.3, rotate: -360, z: 50 }}
                    >
                      <skill.icon className="w-7 h-7 text-white" />
                      
                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap backdrop-blur-sm border border-white/30"
                      >
                        {skill.name}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* Center Hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Code className="w-8 h-8" />
                </motion.div>
              </motion.div>

              {/* Orbit Trails */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 border border-cyan-400/20 rounded-full animate-pulse" />
                <div className="absolute w-96 h-96 border border-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </motion.div>

          {/* Right - Skill Categories and Progress */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{category.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills Progress */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {skillCategories[activeCategory].skills.map((skill:any, index:any) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-800/50 rounded-full overflow-hidden"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-white text-lg font-semibold mb-3">
                Professional Experience
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-400">Years of Experience</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">4+ Years</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-400">Projects Completed</span>
                  </div>
                  <div className="text-blue-400 font-semibold">5+ Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-gray-400">Primary Focus</span>
                  </div>
                  <div className="text-purple-400 font-semibold">Angular Development</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-400">Specialization</span>
                  </div>
                  <div className="text-green-400 font-semibold">Frontend Engineering</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}