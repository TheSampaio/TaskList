import { useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppConfig } from '../contexts/AppConfigContext';
import { SidebarButton } from './SidebarButton';
import {
  HomeIcon,
  ClipboardListIcon,
  SunIcon,
  MoonIcon,
  GlobeIcon,
  MenuIcon,
  XIcon,
} from '../icons';
import styles from './SidebarTopbarLayout.module.css';

interface SidebarTopbarLayoutProps {
  children: ReactNode;
}

export function SidebarTopbarLayout({ children }: SidebarTopbarLayoutProps) {
  const { t, toggleLanguage, toggleTheme, theme } = useAppConfig();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/home', label: t('home'), icon: <HomeIcon size={18} /> },
    { path: '/tasks', label: t('tasks'), icon: <ClipboardListIcon size={18} /> },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className={styles.container}>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={closeMobile} />
      )}

      {/* Sidebar */}
      <nav className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <ClipboardListIcon size={22} style={{ color: 'var(--accent-hover)' }} />
            <span className={styles.logoText}>TaskList</span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className={styles.navItems}>
          {navItems.map((item) => (
            <SidebarButton
              key={item.path}
              icon={item.icon}
              text={item.label}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                closeMobile();
              }}
            />
          ))}
        </div>

        <footer className={styles.sidebarFooter}>
          <p className={styles.footerCredit}>
            HeroIcons via{' '}
            <a
              href="https://heroicons.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              heroicons.com
            </a>
          </p>
        </footer>
      </nav>

      {/* Content area */}
      <div className={styles.contentArea}>
        <header className={styles.topbar}>
          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon size={22} />
          </button>

          <h1 className={styles.pageTitle}>{t('taskList')}</h1>

          <div className={styles.topbarActions}>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={toggleTheme}
              aria-label={t('toggleTheme')}
              title={t('toggleTheme')}
            >
              {theme === 'light' ? <MoonIcon size={17} /> : <SunIcon size={17} />}
              <span className={styles.actionLabel}>{t('toggleTheme')}</span>
            </button>

            <button
              type="button"
              className={styles.actionBtn}
              onClick={toggleLanguage}
              aria-label={t('toggleLang')}
              title={t('toggleLang')}
            >
              <GlobeIcon size={17} />
              <span className={styles.actionLabel}>{t('toggleLang')}</span>
            </button>
          </div>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
