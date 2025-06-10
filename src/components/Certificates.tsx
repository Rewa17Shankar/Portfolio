import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'Database Management Systems',
      issuer: 'NPTEL',
      organization: 'IIT Madras',
      description: 'Comprehensive course covering database design, SQL, normalization, transactions, indexing, and advanced database concepts including NoSQL databases.',
      date: '2025',
      month: 'June',
      status: 'Completed',
      skills: ['SQL', 'Database Design', 'Normalization', 'Transactions', 'Indexing'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Soft Skill Development',
      issuer: 'NPTEL',
      organization: 'IIT Kanpur',
      description: 'Professional development course focusing on communication skills, leadership, teamwork, emotional intelligence, and personality development.',
      date: '2025',
      month: 'May',
      status: 'Completed',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Emotional Intelligence'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Full-Stack Development Training',
      issuer: 'Flipr Labs',
      organization: 'Industry Training Program',
      description: 'Intensive training program covering modern web technologies, frameworks, industry best practices, and hands-on project development.',
      date: '2024',
      month: 'December',
      status: 'Completed',
      skills: ['React', 'Software development', 'API integration', 'project deployment', 'frontend development'],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-gradient-to-br from-electric-500/10 to-accent-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            <Award size={32} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certificates & Training
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and training programs that enhance my expertise and keep me updated with industry standards
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-electric-500 transform md:-translate-x-0.5"></div>

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.7)",
                    "0 0 0 10px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />

              {/* Certificate Card */}
              <motion.div
                className={`group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className={`flex-shrink-0 p-4 bg-gradient-to-br ${cert.color} rounded-2xl text-white shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award size={32} />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span className="font-semibold text-primary-600 dark:text-primary-400">
                            {cert.issuer}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{cert.month} {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                          <CheckCircle size={16} />
                          <span className="font-medium">{cert.status}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.organization}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{cert.description}</p>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Skills Acquired:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorations */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="p-8 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-electric-500/10 rounded-3xl border border-primary-200/20 dark:border-primary-800/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies and industry best practices.
            </p>
            <motion.div
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award size={20} />
              More certifications in progress...
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
