import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Home = () => {
  const { t } = useTranslation()

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

  const introVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  }

  const servicesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-blue-50 to-white py-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.title')}
              <motion.span
                className="block text-primary-red"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.subtitle')}
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-red/90 transition-colors"
              >
                {t('hero.cta')}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={introVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('about.description')}
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/therapists"
                className="text-primary-red hover:text-primary-red/80 font-semibold transition-colors"
              >
                {t('about.meetTherapists')}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        animate="visible"
        variants={servicesVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.preview')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={servicesVariants}
          >
            {/* Pediatric Physiotherapy */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.pediatric.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.pediatric.description')}
              </p>
              <Link
                to="/services"
                className="text-primary-red hover:text-primary-red/80 font-medium transition-colors"
              >
                {t('services.learnMore')}
              </Link>
            </motion.div>

            {/* Craniosacral Therapy */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('services.craniosacral.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.craniosacral.description')}
              </p>
              <Link
                to="/services"
                className="text-primary-red hover:text-primary-red/80 font-medium transition-colors"
              >
                {t('services.learnMore')}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link
              to="/services"
              className="inline-block bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-red/90 transition-colors"
            >
              {t('services.viewAll')}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
