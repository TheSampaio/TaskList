// ==== D:\DevelopmentLibrary\Apps\TaskListManager\Frontend\src\hooks\useTasks.ts ====
import { useState, useEffect } from 'react';
import type { Task } from '../pages/Tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simula uma chamada assíncrona ao servidor (API)
    const fetchTasks = async () => {
      try {
        const savedData = localStorage.getItem('@TaskList:tasks');
        if (savedData) {
          setTasks(JSON.parse(savedData));
        }
        setIsLoading(false);
      } catch (err) {
        console.error('Erro ao carregar as tarefas:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    // Timeout para você ver o estado de loading visualmente
    setTimeout(fetchTasks, 400);
  }, []);

  const saveAndSync = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem('@TaskList:tasks', JSON.stringify(newTasks));
  };

  const addTask = async (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(), // Gera um ID único nativo do browser
      title,
      isDone: false,
    };
    saveAndSync([newTask, ...tasks]);
  };

  const toggleTask = async (id: string) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    );
    saveAndSync(newTasks);
  };

  const deleteTask = async (id: string) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    saveAndSync(newTasks);
  };

  return { tasks, isLoading, error, addTask, toggleTask, deleteTask };
}