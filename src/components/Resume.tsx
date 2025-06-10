import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, FileText, Calendar, Star, Code, Database, Globe } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleViewResume = () => {
    window.open('/Resume(10-June).pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume(10-June).pdf';
    link.download = 'Rewa_Shankar_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: 'Modern JavaScript frameworks and libraries',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'PostgreSQL, MySQL, and NoSQL databases',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Responsive design and modern web standards',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'PHP', 'MySQL'],
    tools: ['Git', 'jQuery', 'Google Maps API', 'RESTful APIs'],
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
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
            <FileText size={32} />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            View or download my complete resume to learn more about my experience, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-electric-600 p-12 text-white">
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-20 h-20 bg-white/5 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center p-6 bg-white/20 rounded-full backdrop-blur-sm mb-8 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileText size={48} />
                  </motion.div>
                  
                  <h3 className="text-4xl font-bold mb-4">
                    Professional Resume
                  </h3>
                  <p className="text-2xl text-white/90 mb-6">
                    Full-Stack Developer • React • Node.js • PostgreSQL
                  </p>
                  
                  {/* Last Updated Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <Calendar size={16} />
                    Last Updated: June 2024
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Key Highlights */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Star className="text-primary-600" size={32} />
                    Key Highlights
                  </h4>
                  
                  <div className="space-y-6">
                    {highlights.map((highlight, index) => {
                      const IconComponent = highlight.icon;
                      return (
                        <motion.div
                          key={highlight.title}
                          className="group flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-lg"
                          whileHover={{ scale: 1.02, x: 10 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${highlight.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent size={24} />
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                              {highlight.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300">
                              {highlight.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Technical Skills
                  </h4>
                  
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + categoryIndex * 0.2 }}
                      >
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                          {category}
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300 rounded-xl font-medium hover:scale-105 transition-transform duration-200 shadow-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: 1 + categoryIndex * 0.2 + skillIndex * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  onClick={handleViewResume}
                  className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-electric-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-glow-lg transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  View Resume
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                
                <motion.button
                  onClick={handleDownloadResume}
                  className="group flex items-center justify-center gap-3 px-10 py-5 border-3 border-primary-600 text-primary-600 dark:text-primary-400 font-bold text-lg rounded-2xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={24} className="group-hover:animate-bounce" />
                  Download Resume
                </motion.button>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <p className="text-gray-600 dark:text-gray-400">
                  Available in PDF format • Optimized for ATS systems • Mobile-friendly
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;