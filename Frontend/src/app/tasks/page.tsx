"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import AddTask from "@/components/AddTask";
import SidebarTopbarLayout from "@/components/SidebarTopbarLayout";
import Checkbox from "@/components/Checkbox";

type TaskProps = {
  id: number;
  title: string;
  isDone: boolean;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const apiTaskList: string = "https://localhost:5002/api/tasks";

  useEffect(() => {
    axios
      .get(apiTaskList)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Failed to get tasks:", error);
      });
  }, []);

  return (
    <SidebarTopbarLayout>
      <div className="m-4">
        {/* Component to add new tasks */}
        <AddTask
          onAdd={(title) => {
            const taskToAdd: TaskProps = {
              id: Date.now(), // Id temporary
              title,
              isDone: false,
            };
            setTasks((prev) => [...prev, taskToAdd]);

            // TODO: Add it to the backend
            // axios.post(apiTaskList, taskToAdd);
          }}
        />

        <hr className="text-gray-400 mt-8 mb-8" />

        <ul>
          {tasks.map((task) => (
            <li
              className="bg-white p-4 mt-6 rounded-md shadow flex items-center"
              key={task.id}
            >
              <Checkbox
                value={task.isDone}
                onClick={() => {
                  setTasks((prev) =>
                    prev.map((t) =>
                      t.id === task.id ? { ...t, isDone: !t.isDone } : t
                    )
                  );

                  // TODO: Update the backend
                  // axios.patch(`${apiTaskList}/${task.id}`, { isDone: !task.isDone });
                }}
              />
              <span className="ml-3">{task.title}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-[#17193a] mt-8">You have {tasks.length} tasks</h2>
      </div>
    </SidebarTopbarLayout>
  );
}
