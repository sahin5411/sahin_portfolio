import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Fingerprint, 
  ShieldCheck,
  FileText,
  AlertTriangle,
  CheckCircle,
  Zap,
  Database,
  Globe,
  Server,
  Monitor,
  Cpu
} from 'lucide-react';

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Implementing robust data encryption and secure storage practices to protect sensitive user information.',
      color: 'from-blue-400 to-blue-600',
      glowColor: 'shadow-blue-400/40'
    },
    {
      icon: Lock,
      title: 'Authentication',
      description: 'Multi-factor authentication and OAuth integration for secure user access management.',
      color: 'from-green-400 to-green-600',
      glowColor: 'shadow-green-400/40'
    },
    {
      icon: Key,
      title: 'API Security',
      description: 'Secure API endpoints with proper authorization, rate limiting, and input validation.',
      color: 'from-purple-400 to-purple-600',
      glowColor: 'shadow-purple-400/40'
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      description: 'GDPR compliance and user privacy controls with transparent data handling policies.',
      color: 'from-cyan-400 to-cyan-600',
      glowColor: 'shadow-cyan-400/40'
    },
    {
      icon: Fingerprint,
      title: 'Access Control',
      description: 'Role-based access control and permission management for secure resource access.',
      color: 'from-pink-400 to-pink-600',
      glowColor: 'shadow-pink-400/40'
    },
    {
      icon: ShieldCheck,
      title: 'Code Security',
      description: 'Security audits, vulnerability scanning, and secure coding practices implementation.',
      color: 'from-orange-400 to-orange-600',
      glowColor: 'shadow-orange-400/40'
    }
  ];

  const orbitalSecurityElements = [
    { name: 'Encryption', icon: Lock, color: 'from-blue-400 to-blue-500' },
    { name: 'Firewall', icon: Shield, color: 'from-green-400 to-green-500' },
    { name: 'Authentication', icon: Key, color: 'from-purple-400 to-purple-500' },
    { name: 'Monitoring', icon: Eye, color: 'from-cyan-400 to-cyan-500' },
    { name: 'Backup', icon: Database, color: 'from-pink-400 to-pink-500' },
    { name: 'SSL/TLS', icon: Globe, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Server Security', icon: Server, color: 'from-indigo-400 to-indigo-500' },
    { name: 'Network Security', icon: Monitor, color: 'from-red-400 to-red-500' },
  ];

  const securityStats = [
    { icon: CheckCircle, value: '100%', label: 'Secure Coding', color: 'text-green-400' },
    { icon: Shield, value: '99.9%', label: 'Uptime Security', color: 'text-blue-400' },
    { icon: Lock, value: '256-bit', label: 'Encryption', color: 'text-purple-400' },
    { icon: Zap, value: '24/7', label: 'Monitoring', color: 'text-cyan-400' },
  ];

  return (
    <section id="encryption" className="relative py-20 bg-gradient-to-b from-black via-blue-900/10 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1.1, 1, 1.1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        />

        {/* Security orbital background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Security orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[700px] h-[700px] border border-blue-400/5 rounded-full" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[900px] h-[900px] border border-cyan-400/5 rounded-full" />
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
            className="inline-flex items-center space-x-2 text-blue-400 text-sm font-medium mb-4"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span>SECURITY & PRIVACY</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Security
            </span>{' '}
            First Development
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Building secure, reliable applications with industry-standard security practices, 
            data protection, and privacy-focused development approaches.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Orbital Security Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[450px] h-[450px]">
              {/* Orbital Security Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {orbitalSecurityElements.map((element, index) => {
                  const angle = (index * (360 / orbitalSecurityElements.length)) * (Math.PI / 180);
                  const radius = 170;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={element.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`absolute w-16 h-16 bg-gradient-to-br ${element.color} rounded-full flex items-center justify-center border border-white/20 shadow-lg transition-all duration-300 backdrop-blur-sm group`}
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                      whileHover={{ scale: 1.3, rotate: -360, z: 50 }}
                    >
                      <element.icon className="w-7 h-7 text-white" />
                      
                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap backdrop-blur-sm border border-white/30"
                      >
                        {element.name}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* Center Security Hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/20"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Shield className="w-10 h-10" />
                </motion.div>
              </motion.div>

              {/* Security Orbit Trails */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 border border-blue-400/20 rounded-full animate-pulse" />
                <div className="absolute w-96 h-96 border border-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute w-[450px] h-[450px] border border-purple-400/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Security scanning animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-60 h-60 relative">
                  <div className="absolute inset-0 border-2 border-transparent border-t-blue-400/50 rounded-full" />
                  <div className="absolute inset-2 border-2 border-transparent border-t-cyan-400/30 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Security Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Security Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {securityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Security Features */}
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-lg ${feature.glowColor} transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Security Commitment
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I prioritize security in every aspect of development, from secure coding practices 
                to data protection and privacy compliance. Every application is built with security 
                as a fundamental requirement, not an afterthought.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Security Standards
            </span>{' '}
            & Best Practices
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'OWASP Top 10', icon: Shield },
              { name: 'GDPR Compliance', icon: FileText },
              { name: 'Secure SDLC', icon: Cpu },
              { name: 'Penetration Testing', icon: AlertTriangle },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <cert.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}