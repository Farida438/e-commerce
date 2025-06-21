import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, changeLanguage, currentLanguage } = useLanguage();

  // Mobile menu state (add this if using hamburger menu)
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        {t('brand_name')}
      </Link>

      {/* Desktop Menu */}
      <div className={styles.menu}>
        <Link to="/shop">{t('shop')}</Link>
        <Link to="/wishlist">{t('wishlist')}</Link>
        <Link to="/faq">{t('faq')}</Link>
      </div>

      {/* Right-side controls */}
      <div className={styles.controls}>
        {/* Language Switcher */}
        <button 
          onClick={() => changeLanguage(currentLanguage === 'en' ? 'az' : 'en')}
          className={styles.languageToggle}
        >
          {currentLanguage.toUpperCase()}
        </button>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Auth Status */}
        {user ? (
          <div className={styles.userSection}>
            <span>{user.username}</span>
            <button onClick={logout}>{t('logout')}</button>
          </div>
        ) : (
          <Link to="/login" className={styles.loginButton}>
            {t('login')}
          </Link>
        )}
      </div>

      {/* Mobile Hamburger (uncomment if needed) */}
      {/* <button 
        className={styles.mobileMenuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button> */}
    </nav>
  );
}