import { motion } from 'framer-motion'

const Services = () => {
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-blue-50 to-white py-16"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specialized pediatric physiotherapy treatments designed to help children thrive
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-16"
            variants={serviceVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pediatric Physiotherapy */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8"
              variants={cardVariants}
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-16 h-16 bg-accent-yellow rounded-lg flex items-center justify-center">
                    <span className="text-3xl">👶</span>
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Pediatric Physiotherapy
                  </motion.h2>
                  <motion.div
                    className="space-y-4 text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <p>
                      Our pediatric physiotherapy services are designed to address a wide range of developmental,
                      neurological, and musculoskeletal conditions in children. We work with infants, toddlers,
                      and children of all ages to improve their physical function and independence.
                    </p>
                    <p>
                      Through comprehensive assessments and individualized treatment plans, we help children
                      achieve their developmental milestones, improve motor skills, and enhance their overall
                      quality of life. Our evidence-based approach combines play-based therapy with clinical
                      expertise to make treatment engaging and effective.
                    </p>
                    <p>
                      Whether your child needs help with developmental delays, cerebral palsy, spina bifida,
                      muscular dystrophy, or other conditions, our experienced therapists provide compassionate
                      care in a supportive environment.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Craniosacral Therapy */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8"
              variants={cardVariants}
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="w-16 h-16 bg-accent-green rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🧠</span>
                  </div>
                </motion.div>
                <div className="flex-1">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    Craniosacral Therapy
                  </motion.h2>
                  <motion.div
                    className="space-y-4 text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <p>
                      Craniosacral therapy is a gentle, hands-on approach that supports the body's natural
                      healing processes. This subtle therapy focuses on the craniosacral system, which includes
                      the membranes and cerebrospinal fluid that surround and protect the brain and spinal cord.
                    </p>
                    <p>
                      Through light touch, our therapists help release restrictions in the craniosacral system,
                      promoting better flow of cerebrospinal fluid and supporting the body's self-healing
                      mechanisms. This therapy is particularly beneficial for children experiencing various
                      conditions or simply needing support for optimal neurological development.
                    </p>
                    <p>
                      The gentle nature of craniosacral therapy makes it suitable for children of all ages,
                      from newborns to teenagers. It's often used alongside other therapies to enhance overall
                      treatment outcomes and promote relaxation and well-being.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
