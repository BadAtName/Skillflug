"use client";
import { useState } from "react";
import DOMPurify from "dompurify";  

export default function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const sanitizedTask = DOMPurify.sanitize(task);

      addTodo({
        id: Date.now(),
        text: sanitizedTask,  
      });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-5 animate animate-fade-right animate-delay-200">
      <input
        type="text"
        placeholder="Add a new task"
        className="input flex-1 border border-gray-300 p-4 text-lg sm:text-base"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn bg-blue-500 text-white font-semibold px-4 py-2 sm:py-0">
        Add
      </button>
    </form>
  );
}
