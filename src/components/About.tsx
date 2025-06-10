import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  Coffee,
  Music,
  BookOpen,
  Target,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', icon: Code2, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: Server, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'PostgreSQL', icon: Database, level: 80, color: 'from-purple-500 to-indigo-500' },
    { name: 'JavaScript', icon: Globe, level: 95, color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS', icon: Palette, level: 90, color: 'from-pink-500 to-rose-500' },
    { name: 'Tailwind CSS', icon: Smartphone, level: 85, color: 'from-teal-500 to-cyan-500' },
  ];

  const interests = [
    { name: 'Problem Solving', icon: Target, description: 'Love tackling complex challenges' },
    { name: 'Learning', icon: BookOpen, description: 'Always exploring new technologies' },
    { name: 'Coffee', icon: Coffee, description: 'Fuel for late-night coding sessions' },
    { name: 'Music', icon: Music, description: 'Coding soundtrack enthusiast' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-br from-electric-500/10 to-accent-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={32} />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer on a mission to create impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Developer Journey
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Full-Stack Developer who believes in the power of technology 
                  to solve real-world problems. My journey began with curiosity about how websites 
                  work, and it has evolved into a deep love for creating seamless digital experiences.
                </p>
                
                <p>
                  With expertise in modern web technologies like <span className="text-primary-600 dark:text-primary-400 font-semibold">React</span>, 
                  <span className="text-secondary-600 dark:text-secondary-400 font-semibold"> Node.js</span>, and 
                  <span className="text-electric-600 dark:text-electric-400 font-semibold"> PostgreSQL</span>, 
                  I focus on building applications that are not just functional, but delightful to use.
                </p>
                
                <motion.div
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border-l-4 border-primary-500"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="text-primary-600 dark:text-primary-400" size={24} />
                  <p className="text-primary-800 dark:text-primary-300 font-medium">
                    "I build modern apps that solve real-world problems."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What Drives Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <motion.div
                      key={interest.name}
                      className="group p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-lg"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <IconComponent className="text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300" size={24} />
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {interest.name}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {interest.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent size={20} />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: index * 0.2,
                              ease: "easeInOut" 
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '10+', label: 'Projects Completed' },
                { number: '3+', label: 'Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200/20 dark:border-primary-700/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;