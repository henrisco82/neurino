import { motion } from 'framer-motion'
import NikkyImg from '../assets/Nikky.jpeg'
import AndreaImg from '../assets/Andrea.jpeg'
import HeidiImg from '../assets/Heidi.jpg'
import MichealaImg from '../assets/Micheala.jpg'
import DenisaImg from '../assets/Denisa.jpg'
import IvetaImg from '../assets/Iveta.jpg'

const Therapists = () => {
  const therapists = [
    {
      id: 1,
      name: "Mgr. Hedviga Maksimcuk",
      title: "Lead Physiotherapist",
      bio: "Hedviga has over 10 years of experience specializing in pediatric physiotherapy. She holds a Doctorate in Physical Therapy and is certified in pediatric neurodevelopmental treatment.",
      image: HeidiImg,
    },
    {
      id: 2,
      name: "Andrea Zsdral",
      title: "Massage Therapist",
      bio: "Andrea specializes in massage therapy for children with neurological conditions such as cerebral palsy and spina bifida. She uses evidence-based techniques to improve function and independence.",
      image: AndreaImg,
    },
    {
      id: 3,
      name: "Nikoleta Vegh",
      title: "Massage Therapist",
      bio: "Niki specializes in massage therapy for children with neurological conditions such as cerebral palsy and spina bifida. She uses evidence-based techniques to improve function and independence.",
      image: NikkyImg,
    },
    {
      id: 4,
      name: "Micheala Zlamalova",
      title: "Physiotherapist",
      bio: "Micheala brings expertise in sports physiotherapy adapted for pediatric patients. He helps young athletes recover from injuries and improve their performance through specialized training.",
      image: MichealaImg,
    },
    {
      id: 5,
      name: "Denisa Unah",
      title: "Physiotherapist",
      bio: "Denisa specializes in treating children with neurological conditions such as cerebral palsy and spina bifida. She uses evidence-based techniques to improve function and independence.",
      image: DenisaImg,
    },
    {
      id: 6,
      name: "Iveta Husvetheova",
      title: "Massage Therapist",
      bio: "Iveta specializes in massage therapy for children with neurological conditions such as cerebral palsy and spina bifida. She uses evidence-based techniques to improve function and independence.",
      image: IvetaImg
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
              Our Therapists
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet our experienced team of pediatric physiotherapy professionals dedicated to helping children grow through movement
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Therapists Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {therapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-accent-yellow ring-offset-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {therapist.name}
                  </motion.h3>
                  <motion.p
                    className="text-primary-red font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    {therapist.title}
                  </motion.p>
                </div>
                <motion.p
                  className="text-gray-600 text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                >
                  {therapist.bio}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Therapists
