import { useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

const StyleSheet = {
  create<T extends Record<string, CSSProperties>>(styles: T): T {
    return styles;
  }
};

interface SidebarButtonProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  active?: boolean;
}

export function SidebarButton({ icon, text, onClick, active = false }: SidebarButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.button,
        ...(active ? styles.buttonActive : {}),
        ...(isHovered && !active ? styles.buttonHover : {})
      }}
    >
      <span style={styles.iconWrapper}>{icon}</span>
      <span style={styles.text}>{text}</span>
    </button>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonActive: {
    backgroundColor: 'var(--bg-sidebar-hover)',
    color: 'var(--accent)',
  },
  buttonHover: {
    backgroundColor: 'var(--bg-sidebar-hover)',
    color: 'var(--text-primary)',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: '15px',
    fontWeight: 500,
  }
});