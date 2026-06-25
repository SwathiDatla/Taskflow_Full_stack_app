import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import API from "./services/api";
import "./App.css";
 
function App() {
  const [tasks, setTasks] = useState([]);
 
  const fetchTasks = async () => {
    const res = await API.get("tasks/");
    setTasks(res.data);
  };
 
  useEffect(() => {
    fetchTasks();
  }, []);
 
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.filter((t) => !t.completed).length;
 
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TaskFlow</span>
          </div>
          <div className="header-badge">Full Stack App</div>
        </div>
      </header>
 
      {/* Hero */}
      <div className="hero">
        <h1 className="hero-title">Manage your tasks,<br /><span>stay in flow.</span></h1>
        <p className="hero-sub">A full-stack task manager built with React & Django REST Framework.</p>
      </div>
 
      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <span className="stat-num">{tasks.length}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-num" style={{ color: "#f59e0b" }}>{pendingCount}</span>
          <span className="stat-label">Pending</span>
        </div>
        <div className="stat-card">
          <span className="stat-num" style={{ color: "#10b981" }}>{completedCount}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-num" style={{ color: "#7c6ef5" }}>
            {tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0}%
          </span>
          <span className="stat-label">Progress</span>
        </div>
      </div>
 
      {/* Main */}
      <main className="main">
        <div className="form-section">
          <h2 className="section-title">Add New Task</h2>
          <TaskForm fetchTasks={fetchTasks} />
        </div>
        <div className="list-section">
          <h2 className="section-title">
            Your Tasks
            <span className="task-count">{tasks.length}</span>
          </h2>
          <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
      </main>
 
      <footer className="footer">
        Built by <strong>Swathi Datla</strong> · React + Django + REST API
      </footer>
    </div>
  );
}
 
export default App;