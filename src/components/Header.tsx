import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-red">
            Neurino
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-primary-red transition-colors ${
                isActive('/') ? 'text-primary-red font-medium' : ''
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/services"
              className={`text-gray-700 hover:text-primary-red transition-colors ${
                isActive('/services') ? 'text-primary-red font-medium' : ''
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/therapists"
              className={`text-gray-700 hover:text-primary-red transition-colors ${
                isActive('/therapists') ? 'text-primary-red font-medium' : ''
              }`}
            >
              {t('nav.therapists')}
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-primary-red transition-colors ${
                isActive('/contact') ? 'text-primary-red font-medium' : ''
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Switch */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'en'
                    ? 'text-primary-red bg-primary-red/10'
                    : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sk')}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  i18n.language === 'sk'
                    ? 'text-primary-red bg-primary-red/10'
                    : 'text-gray-600 hover:text-primary-red'
                }`}
              >
                SK
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
