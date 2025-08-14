import { useState } from "react";

type AddTaskProps = {
  onAdd: (title: string) => void;
};

export default function AddTask({ onAdd }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask.trim()) return;
    onAdd(newTask);
    setNewTask("");
  };

  return (
    <div className="bg-white p-4 mt-6 rounded-md shadow flex items-center">
      <span
        className="pr-4 pl-1 font-bold cursor-pointer text-gray-400"
        onClick={handleAdd}
      >
        ◯
      </span>
      <input
        type="text"
        placeholder="Add a task..."
        className="flex-1 outline-none"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
    </div>
  );
}
