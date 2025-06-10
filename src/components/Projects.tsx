import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Database, Globe, Coffee, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Headliner',
      description: 'A comprehensive news web application built with React and Node.js...',
      longDescription: 'Headliner is a full-featured news platform...',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Weather API'],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      category: 'Full-Stack',
      github: 'https://github.com/REWA17SHANKAR',
      demo: 'https://news-web-r1hd.vercel.app/',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      title: 'IQnition',
      description: 'An engaging quiz web application with Google Login...',
      longDescription: 'Quiz Master is a dynamic quiz platform...',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'Google OAuth', 'Nodemailer'],
      icon: Eye,
      color: 'from-indigo-500 to-purple-500',
      category: 'API',
      github: 'https://github.com/REWA17SHANKAR',
      demo: 'https://minor-project-clg-6.onrender.com/',
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      title: 'Hidden India',
      description: 'An interactive web platform showcasing lesser-known destinations...',
      longDescription: 'Hidden India promotes offbeat tourism...',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API', 'Responsive Design'],
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      category: 'Web',
      github: 'https://github.com/REWA17SHANKAR',
      demo: 'https://rewa17shankar.github.io/Hidden_India/',
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      title: 'Coffee Shop Website',
      description: 'A modern, responsive website for a coffee shop...',
      longDescription: 'This coffee shop website combines aesthetic design...',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      icon: Coffee,
      color: 'from-amber-500 to-orange-500',
      category: 'Web',
      github: 'https://github.com/REWA17SHANKAR',
      demo: 'https://rewa17shankar.github.io/Coffee_WebPage/',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
  ];

  const filters = ['All', 'Full-Stack', 'Web', 'API'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white mb-6" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Eye size={32} />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">Here are some of my recent projects that showcase my skills in modern web development</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter size={16} />
                {filter}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Project Image */}
                  <div className={`overflow-hidden ${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                    <div className={`${project.featured ? 'lg:w-1/2' : ''}`}>
                      <img src={project.image} alt={project.title} className="w-full h-64 lg:h-80 object-cover" />
                    </div>
                    <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <div className={`p-2 rounded-full bg-gradient-to-br ${project.color} text-white`}>
                          <Icon size={20} />
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.featured ? project.longDescription : project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-2 z-10 pointer-events-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                        {project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg`}
                          >
                            <ExternalLink size={12} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/REWA17SHANKAR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
