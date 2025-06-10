import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume(10-June).pdf';
    link.download = 'Rewa_Shankar_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/REWA17SHANKAR',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rewa-shankar-gupta-9a5b8827a/',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
        <ParticleBackground />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary-500/20 to-electric-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-accent-500/15 to-electric-500/15 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Section */}
         

          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl mx-auto mt-12">
                <img
                  src="/mine.png" // Update this path if needed
                  alt="My Avatar"
                  className="w-full h-full object-cover"
                />
              </div>


            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-electric-600 bg-clip-text text-transparent">
                Rewa Shankar Gupta
              </span>
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            className="mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              <TypeAnimation
                sequence={[
                  'Full-Stack Web Developer',
                  2000,
                  'React & Node.js Expert',
                  2000,
                  'Passionate Problem Solver',
                  2000,
                  'Modern App Builder',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            I build{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">modern apps</span>{' '}
            that solve{' '}
            <span className="text-secondary-600 dark:text-secondary-400 font-semibold">real-world problems</span>{' '}
            using cutting-edge technologies like{' '}
            <span className="text-electric-600 dark:text-electric-400 font-semibold">React</span>,{' '}
            <span className="text-accent-600 dark:text-accent-400 font-semibold">Node.js</span>, and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">PostgreSQL</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-electric-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-glow-lg transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View Projects
                <ExternalLink size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 via-electric-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              className="group px-10 py-5 border-3 border-primary-600 text-primary-600 dark:text-primary-400 font-bold text-lg rounded-2xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Download Resume
                <Download size={24} className="group-hover:animate-bounce" />
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <IconComponent size={32} className="transition-all duration-300" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown size={32} className="group-hover:animate-bounce" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;