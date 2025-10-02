import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import type { Task } from "../../types/Task";
import { Badge, Card, Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { FiPlus, FiEdit3, FiTrash2, FiCheckCircle, FiClock } from "react-icons/fi";
import "./HomePage.css";

const API_URI = "http://localhost:5000";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const deleteTask = async (taskId: number): Promise<void> => {
    try {
      await axios.delete(`${API_URI}/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (err) {
      console.error("Error deleting task:", err);
      setError("Failed to delete task.");
    }
  };

  const toggleTaskStatus = async (taskId: number): Promise<void> => {
    try {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;

      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`${API_URI}/tasks/${taskId}`, updatedTask);
      
      setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Failed to update task.");
    }
  };

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${API_URI}/tasks`);
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks. Please check if the server is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center">
          <Spinner animation="border" variant="primary" size="sm" className="me-2" />
          <span className="text-muted">Loading your tasks...</span>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger" className="text-center">
          <Alert.Heading>Oops! Something went wrong</Alert.Heading>
          <p>{error}</p>
          <hr />
          <p className="mb-0">
            <Button variant="outline-danger" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="display-6 fw-bold text-primary mb-1">Your Tasks</h1>
          <p className="text-muted mb-0">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} total • 
            {' '}{tasks.filter(task => task.completed).length} completed • 
            {' '}{tasks.filter(task => !task.completed).length} pending
          </p>
        </div>
        <Link to="/create" className="btn btn-primary btn-lg">
          <FiPlus className="me-2" />
          New Task
        </Link>
      </div>

      {/* Tasks Grid */}
      {tasks.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4">
            <FiCheckCircle size={64} className="text-muted" />
          </div>
          <h3 className="text-muted mb-3">No tasks yet</h3>
          <p className="text-muted mb-4">Create your first task to get started with organizing your work.</p>
          <Link to="/create" className="btn btn-primary">
            <FiPlus className="me-2" />
            Create Your First Task
          </Link>
        </div>
      ) : (
        <Row className="g-4">
          {tasks.map((task: Task) => (
            <Col key={task.id} md={6} lg={4}>
              <Card className={`task-card h-100 shadow-sm border-0 ${task.completed ? 'completed bg-light' : ''}`}>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Badge 
                      bg={task.completed ? 'success' : 'warning'} 
                      className={`task-badge d-flex align-items-center ${task.completed ? 'badge-completed' : 'badge-pending'}`}
                    >
                      {task.completed ? (
                        <>
                          <FiCheckCircle className="me-1" size={14} />
                          Completed
                        </>
                      ) : (
                        <>
                          <FiClock className="me-1" size={14} />
                          Pending
                        </>
                      )}
                    </Badge>
                  </div>

                  <h5 className={`task-title mb-2 ${task.completed ? 'text-decoration-line-through text-muted' : 'text-dark'}`}>
                    {task.title}
                  </h5>
                  
                  <p className={`task-description flex-grow-1 ${task.completed ? 'text-decoration-line-through text-muted' : 'text-secondary'}`}>
                    {task.description || 'No description provided.'}
                  </p>

                  <div className="task-actions d-flex gap-2 mt-3">
                    <Button
                      variant={task.completed ? 'outline-warning' : 'outline-success'}
                      size="sm"
                      onClick={() => toggleTaskStatus(task.id)}
                      className="flex-grow-1"
                    >
                      {task.completed ? 'Mark Pending' : 'Mark Complete'}
                    </Button>
                    
                    <Link to={`/update/${task.id}`} className="btn btn-outline-primary btn-sm">
                      <FiEdit3 size={16} />
                    </Link>
                    
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FiTrash2 size={16} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomePage;
