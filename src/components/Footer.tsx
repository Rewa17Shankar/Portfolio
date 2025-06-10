import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/REWA17SHANKAR',
      icon: Github,
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rewa-shankar-gupta-9a5b8827a/',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:shankarewajii@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
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
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Name Section */}
          <motion.div
            className="mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 size={32} className="text-white" />
              </motion.div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-electric-400 bg-clip-text text-transparent">
                Rewa Shankar Gupta
              </h3>
            </div>
            <p className="text-xl text-gray-400 mb-4">Full-Stack Developer</p>
            <motion.div
              className="flex items-center justify-center gap-2 text-gray-500"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee size={16} />
              <span className="text-sm">Powered by coffee and curiosity</span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IconComponent size={24} className="transition-all duration-300" />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.name}
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-800 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Copyright and Credits */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span>© {currentYear} Rewa Shankar Gupta. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <motion.span 
                className="flex items-center gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Made with <Heart size={16} className="text-red-500 animate-pulse" /> and React
              </motion.span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

         
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;