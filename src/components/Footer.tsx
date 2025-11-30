import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary-red mb-4">Neurino</h3>
            <p className="text-gray-600 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-gray-500">
              {t('footer.basedIn')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-red transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary-red transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/therapists" className="text-gray-600 hover:text-primary-red transition-colors">
                  {t('nav.therapists')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-red transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-600">
              <li>📍 Ulica Vicenzy 2209/8A, Samorin, Slovakia</li>
              <li>📞 +421 903 988 963 </li>
              <li>✉️ neurino@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
