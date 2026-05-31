import { CheckIcon } from '../icons';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label ?? 'Toggle task'}
      onClick={onChange}
      className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
    >
      {checked && <CheckIcon size={12} />}
    </button>
  );
}
