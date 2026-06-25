import React, { useState } from "react";
import API from "../services/api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await API.post("tasks/", { title, description, completed: false });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="task-input"
        type="text"
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-btn" type="submit">+ Add Task</button>
    </form>
  );
};

export default TaskForm;