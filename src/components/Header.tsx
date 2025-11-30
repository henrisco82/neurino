import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [snackbar, setSnackbar] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false
  })

  const isActive = (path: string) => location.pathname === path

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    const languageName = lng === 'en' ? 'English' : 'Slovenčina'
    setSnackbar({
      message: `${t('snackbar.languageChanged')} ${languageName}`,
      visible: true
    })

    setTimeout(() => {
      setSnackbar({ message: '', visible: false })
    }, 3000)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary-red">
            Neurino
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['/', '/services', '/therapists', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-gray-700 hover:text-primary-red transition-colors ${
                  isActive(path) ? 'text-primary-red font-medium' : ''
                }`}
              >
                {t(`nav.${path === '/' ? 'home' : path.slice(1)}`)}
              </Link>
            ))}
          </nav>

          {/* Language switch & mobile button */}
          <div className="flex items-center space-x-4">
            {/* Language Buttons */}
            <div className="hidden md:flex space-x-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'en' ? 'text-primary-red bg-primary-red/10' : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sk')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'sk' ? 'text-primary-red bg-primary-red/10' : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                SK
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 pb-4">
            {['/', '/services', '/therapists', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-primary-red transition-colors ${
                  isActive(path) ? 'text-primary-red font-medium' : ''
                }`}
              >
                {t(`nav.${path === '/' ? 'home' : path.slice(1)}`)}
              </Link>
            ))}

            {/* Language buttons for mobile */}
            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'en' ? 'text-primary-red bg-primary-red/10' : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sk')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'sk' ? 'text-primary-red bg-primary-red/10' : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                SK
              </button>
            </div>
          </nav>
        )}
      </div>

      {/* Snackbar */}
      {snackbar.visible && (
        <div className="fixed top-20 right-4 z-50">
          <div className="bg-primary-red text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
            <span className="text-sm font-medium">{snackbar.message}</span>
            <button
              onClick={() => setSnackbar({ message: '', visible: false })}
              className="text-white hover:text-gray-200 ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
