import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Language, Theme, TranslationKey } from '../types';

interface AppConfigContextData {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (key: TranslationKey) => string;
}

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    home: 'Home',
    tasks: 'Tasks',
    addTask: 'Add a new task...',
    youHave: 'You have',
    tasksCount: 'tasks',
    taskList: 'Task List',
    toggleTheme: 'Theme',
    toggleLang: 'PT',
    welcomeTitle: 'Welcome back',
    welcomeSubtitle: 'Stay organized. One task at a time.',
    noTasks: 'No tasks yet. Add one above!',
    errorLoading: 'Could not load tasks. Is the server running?',
    loading: 'Loading...',
    deleteTask: 'Delete task',
    completedTasks: 'Completed',
    pendingTasks: 'Pending',
  },
  pt: {
    home: 'Início',
    tasks: 'Tarefas',
    addTask: 'Adicionar nova tarefa...',
    youHave: 'Você tem',
    tasksCount: 'tarefas',
    taskList: 'Lista de Tarefas',
    toggleTheme: 'Tema',
    toggleLang: 'EN',
    welcomeTitle: 'Bem-vindo',
    welcomeSubtitle: 'Mantenha o foco. Uma tarefa por vez.',
    noTasks: 'Nenhuma tarefa ainda. Adicione uma acima!',
    errorLoading: 'Não foi possível carregar as tarefas. O servidor está rodando?',
    loading: 'Carregando...',
    deleteTask: 'Excluir tarefa',
    completedTasks: 'Concluídas',
    pendingTasks: 'Pendentes',
  },
};

const AppConfigContext = createContext<AppConfigContextData>({} as AppConfigContextData);

export function AppConfigProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => translations[language][key] ?? key,
    [language]
  );

  return (
    <AppConfigContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
      {children}
    </AppConfigContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppConfig() {
  return useContext(AppConfigContext);
}
