import React from "react";
import API from "../services/api";

const TaskList = ({ tasks, fetchTasks }) => {
  const toggleComplete = async (task) => {
    await API.put(`tasks/${task.id}/`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`tasks/${id}/`);
    fetchTasks();
  };

  if (tasks.length === 0) {
    return (
      <div className="task-empty">
        No tasks yet — add one above to get started! ✨
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <div
            className={`task-check ${task.completed ? "done" : ""}`}
            onClick={() => toggleComplete(task)}
          >
            {task.completed ? "✓" : ""}
          </div>
          <div className="task-content">
            <div className="task-title">{task.title}</div>
            {task.description && (
              <div className="task-desc">{task.description}</div>
            )}
          </div>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;