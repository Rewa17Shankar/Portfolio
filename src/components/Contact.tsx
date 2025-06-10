import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = {
    email: 'shankarewajii@gmail.com',
    github: 'https://github.com/REWA17SHANKAR',
    linkedin: 'https://www.linkedin.com/in/rewa-shankar-gupta-9a5b8827a/',
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'group-hover:bg-gray-900 dark:group-hover:bg-white',
      description: 'View my code repositories',
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'group-hover:bg-blue-600',
      description: 'Connect professionally',
    },
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
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
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16">
            <motion.div
              className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white mb-8 shadow-2xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <MessageCircle size={40} />
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Feel free to connect via email or through the platforms below. I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          {/* Contact Details */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <motion.div
                  key={detail.label}
                  className="group text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {detail.action ? (
                    <a href={detail.action} className="block">
                      <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${detail.color} rounded-2xl text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {detail.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {detail.value}
                      </p>
                    </a>
                  ) : (
                    <>
                      <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-br ${detail.color} rounded-2xl text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <IconComponent size={32} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {detail.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {detail.value}
                      </p>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Email Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-6 px-12 py-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl border-2 border-transparent hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white group-hover:shadow-2xl transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Mail size={32} />
              </motion.div>
              <div className="text-left">
                <div className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Email Me
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {contactInfo.email}
                </div>
              </div>
              <Send size={24} className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-2 transition-all duration-300" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-center"
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                >
                  <div className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl hover:bg-white dark:hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <IconComponent
                      size={48}
                      className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 relative z-10 mx-auto mb-4`}
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {social.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {social.description}
                    </p>
                    
                    {/* Hover Effect Background */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 ${social.bgColor} transition-opacity duration-500`} />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Connect on {social.name}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="p-12 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-electric-500/10 rounded-3xl border border-primary-200/20 dark:border-primary-800/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to connect, I'd love to hear from you.
            </p>
            <motion.a
              href={`mailto:${contactInfo.email}?subject=Let's Connect&body=Hi Rewa, I'd like to discuss...`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-electric-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-glow-lg transition-all duration-500 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Conversation</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;