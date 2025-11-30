import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Contact = () => {
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

  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
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
              {t('contact.title')}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={contactVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                variants={itemVariants}
              >
                {t('contact.getInTouch')}
              </motion.h2>

              <motion.div
                className="space-y-6"
                variants={contactVariants}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-red text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.location')}</h3>
                    <p className="text-gray-600">Samorin, Slovakia</p>
                    <p className="text-sm text-gray-500 mt-1">Ulica Vicenzy 2209/8A</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-accent-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-yellow text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.phone')}</h3>
                    <p className="text-gray-600">+421 903 988 963</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-green text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.email')}</h3>
                    <p className="text-gray-600">neurino@gmail.com</p>
                  </div>
                </motion.div>
            </motion.div>

              {/* Google Maps */}
              <motion.div
                className="mt-8"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-gray-900 mb-4">{t('contact.location')}</h3>
                <motion.div
                  className="rounded-lg overflow-hidden border border-gray-300 shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=Ulica%20Vicenzy%202209/8A,%20Samorin,%20Slovakia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Neurino Location - Ulica Vicenzy 2209/8A, Samorin, Slovakia"
                  />
                </motion.div>
                <p className="text-sm text-gray-600 mt-2">
                  Ulica Vicenzy 2209/8A, Samorin, Slovakia
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('contact.sendMessage')}
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder={t('contact.placeholder.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent resize-none"
                    placeholder={t('contact.placeholder.message')}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-red/90 transition-colors focus:ring-2 focus:ring-primary-red focus:ring-offset-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('contact.submit')}
                </motion.button>
              </form>

              <motion.p
                className="text-sm text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                {t('contact.required')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
