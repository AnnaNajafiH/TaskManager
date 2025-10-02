import { useState, useEffect } from "react";
import axios from "axios";
import type { Task } from "../../types/Task";
import { Badge } from "react-bootstrap";

const API_URI = "http://localhost:5000";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URI}/tasks`);
        setTasks(response.data);
      } catch (err) {
        console.error("error fetching tasks", err);
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading)
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );

  return (
    <div className="container">
      <h1>Task List</h1>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          <div className="grid gap-4 grid-cols-3">
            {tasks.map((task: Task) => (
              <div className="card">
                <div key={task.id} className="card-body">
                  <h5
                    className={`card-title ${
                      task.completed ? "text-success" : "text-warning"
                    }`}
                  >
                    {task.title}
                  </h5>
                  <p
                    className={`card-text ${
                      task.completed ? "text-decoration-line-through" : "none"
                    }`}
                  >
                    {task.description}
                  </p>
                  <span
                    className={`badge ${
                      task.completed ? "bg-success" : "bg-warning"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

export default HomePage;
