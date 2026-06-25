# TaskFlow – Full Stack Task Management App

A full-stack task management web application built with React and Django REST Framework. Supports real-time task creation, completion tracking, and deletion with a clean modern UI.

---

## Demo

> Run locally following the steps below. Both frontend and backend must be running simultaneously.

---

## Features

- Create, complete, and delete tasks in real time
- REST API backend with full CRUD operations
- Secure session-based authentication
- Responsive, mobile-friendly dark UI
- Live progress stats — total, pending, completed, and progress %
- React Hooks-based modular component architecture
- Django ORM for efficient database operations

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Axios, CSS3 |
| Backend | Django, Django REST Framework |
| Database | SQLite (dev) / MySQL (prod) |
| Auth | Django session authentication |
| API | RESTful API |

---

## Project Structure

```
Taskflow_Full_stack_app/
├── taskflow_backend/        # Django backend
│   ├── task_app/            # Tasks app (models, views, serializers)
│   ├── taskflow_backend/    # Django settings, urls, wsgi
│   ├── manage.py
│   └── requirements.txt
├── taskflow_frontend/       # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js  # Add task form
│   │   │   └── TaskList.js  # Task list with complete/delete
│   │   ├── services/
│   │   │   └── api.js       # Axios API config
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
```

---

## Run Locally

### Prerequisites
- Python 3.x
- Node.js & npm

### 1. Clone the repo
```bash
git clone https://github.com/SwathiDatla/Taskflow_Full_stack_app.git
cd Taskflow_Full_stack_app
```

### 2. Run the Backend (Django)
```bash
cd taskflow_backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Backend runs at: `http://127.0.0.1:8000`

### 3. Run the Frontend (React)
Open a new terminal:
```bash
cd taskflow_frontend
npm install
npm start
```
Frontend runs at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks/` | Get all tasks |
| POST | `/api/tasks/` | Create a new task |
| PUT | `/api/tasks/:id/` | Update / toggle complete |
| DELETE | `/api/tasks/:id/` | Delete a task |

---

## Screenshots

> UI features a dark modern design with live stats dashboard, task cards with completion toggle, and instant delete.

---

## Author

**Swathi Datla**
M.S. Applied Computer Science — Southeast Missouri State University
[LinkedIn](https://www.linkedin.com/in/swathi-datla) · [GitHub](https://github.com/SwathiDatla)