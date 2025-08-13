"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import SidebarTopbarLayout from "@/components/SidebarTopbarLayout";

type TaskProps = {
  id: number;
  title: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const urlGetAllTasks: string = "https://localhost:5002/api/tasks";

  useEffect(() => {
    axios
      .get(urlGetAllTasks)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Failed to get tasks:", error);
      });
  }, []);

  return (
    <div>
      <SidebarTopbarLayout>
        <h1>Você tem {tasks.length} tarefas</h1>
        <ul>
          {tasks.map((task: TaskProps) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </SidebarTopbarLayout>
    </div>
  );
}
