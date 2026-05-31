import { useState, useRef } from 'react';
import { SidebarTopbarLayout } from '../components/SidebarTopbarLayout';
import { TaskItem } from '../components/TaskItem';
import { useAppConfig } from '../contexts/AppConfigContext';
import { useTasks } from '../hooks/useTasks';
import { PlusIcon } from '../icons';
import styles from './Tasks.module.css';

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export default function Tasks() {
  const { t } = useAppConfig();
  const { tasks, isLoading, error, addTask, toggleTask, deleteTask } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = async () => {
    if (!newTaskTitle.trim()) return;
    await addTask(newTaskTitle);
    setNewTaskTitle('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  // 2. Aplicamos a tipagem explícita (task: Task) para eliminar o erro de 'any'
  const pendingTasks = tasks.filter((task: Task) => !task.isDone);
  const completedTasks = tasks.filter((task: Task) => task.isDone);

  return (
    <SidebarTopbarLayout>
      <div className={styles.container}>
        {/* Add Task Input */}
        <div className={styles.addCard}>
          <input
            ref={inputRef}
            type="text"
            placeholder={t('addTask')}
            className={styles.input}
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label={t('addTask')}
          />
          <button
            type="button"
            className={styles.addBtn}
            onClick={handleAdd}
            aria-label={t('addTask')}
            disabled={!newTaskTitle.trim()}
          >
            <PlusIcon size={18} />
          </button>
        </div>

        {/* Status messages */}
        {isLoading && (
          <p className={styles.statusMsg}>{t('loading')}</p>
        )}

        {error && (
          <div className={styles.errorMsg}>{t('errorLoading')}</div>
        )}

        {/* Task Lists */}
        {!isLoading && !error && (
          <>
            {pendingTasks.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  {t('pendingTasks')}
                  <span className={styles.badge}>{pendingTasks.length}</span>
                </h2>
                <ul className={styles.list}>
                  {pendingTasks.map((task: Task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={toggleTask}
                      onDelete={deleteTask}
                    />
                  ))}
                </ul>
              </section>
            )}

            {completedTasks.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  {t('completedTasks')}
                  <span className={`${styles.badge} ${styles.badgeDone}`}>
                    {completedTasks.length}
                  </span>
                </h2>
                <ul className={styles.list}>
                  {completedTasks.map((task: Task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggle={toggleTask}
                      onDelete={deleteTask}
                    />
                  ))}
                </ul>
              </section>
            )}

            {tasks.length === 0 && (
              <p className={styles.emptyMsg}>{t('noTasks')}</p>
            )}
          </>
        )}

        {/* Footer summary */}
        {tasks.length > 0 && (
          <p className={styles.summary}>
            {t('youHave')} <strong>{tasks.length}</strong> {t('tasksCount')}
          </p>
        )}
      </div>
    </SidebarTopbarLayout>
  );
}