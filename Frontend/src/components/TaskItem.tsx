// ==== D:\DevelopmentLibrary\Apps\TaskListManager\Frontend\src\components\TaskItem.tsx ====
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Checkbox } from './Checkbox';
import { TrashIcon } from '../icons';
import type { Task } from '../pages/Tasks';

const StyleSheet = {
  create<T extends Record<string, CSSProperties>>(styles: T): T {
    return styles;
  }
};

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.content}>
        <Checkbox 
          checked={task.isDone} 
          onChange={() => onToggle(task.id)} 
          label={`Alternar tarefa: ${task.title}`} 
        />
        <span style={{ ...styles.title, ...(task.isDone ? styles.titleDone : {}) }}>
          {task.title}
        </span>
      </div>
      
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        style={{ ...styles.deleteBtn, opacity: isHovered ? 1 : 0.3 }}
        aria-label="Excluir tarefa"
      >
        <TrashIcon size={18} />
      </button>
    </li>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    marginBottom: '8px',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  title: {
    fontSize: '16px',
    color: 'var(--text-primary)',
    transition: 'color 0.2s ease, text-decoration 0.2s ease',
  },
  titleDone: {
    color: 'var(--text-secondary)',
    textDecoration: 'line-through',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    color: '#ef4444',
    cursor: 'pointer',
    padding: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
    borderRadius: '4px',
  }
});