// ==== src/pages/Home.tsx ====
import { useNavigate } from 'react-router-dom';
import { SidebarTopbarLayout } from '../components/SidebarTopbarLayout';
import { useAppConfig } from '../contexts/AppConfigContext';
import { ClipboardListIcon } from '../icons';

export default function Home() {
  const { t } = useAppConfig();
  const navigate = useNavigate();

  return (
    <SidebarTopbarLayout>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.iconWrap}>
            <ClipboardListIcon size={40} />
          </div>
          <h1 style={styles.title}>{t('welcomeTitle')}</h1>
          <p style={styles.subtitle}>{t('welcomeSubtitle')}</p>
          <button
            type="button"
            style={styles.cta}
            onClick={() => navigate('/tasks')}
          >
            {t('tasks')} →
          </button>
        </div>
      </div>
    </SidebarTopbarLayout>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    padding: '20px',
  },
  card: {
    backgroundColor: 'var(--bg-surface)',
    padding: '40px',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'center' as const,
    maxWidth: '400px',
    width: '100%',
  },
  iconWrap: {
    color: 'var(--accent)',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  subtitle: {
    color: 'var(--text-secondary)',
    marginBottom: '24px',
  },
  cta: {
    backgroundColor: 'var(--accent)',
    color: 'var(--text-inverse)',
    border: 'none',
    padding: '12px 24px',
    borderRadius: 'var(--radius-sm)',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 500,
  }
};