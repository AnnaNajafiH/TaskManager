import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { FiSave, FiArrowLeft } from "react-icons/fi";
import type { TaskInput } from "../../types/Task";
import "./CreateTask.css";

const API_URI = import.meta.env.VITE_API_URL || "http://localhost:5000";

const CreateTask: React.FC = () => {
  const [form, setForm] = useState<TaskInput>({
    title: "",
    description: "",
    completed: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URI}/tasks`, form);
      console.log("Task created:", response.data);
      navigate("/");
    } catch (err) {
      console.error("Error creating task:", err);
      setError("Failed to create task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <Card className="create-task-card shadow-sm border-0">
            <Card.Body className="p-4">
              {/* Header */}
              <div className="d-flex align-items-center mb-4">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => navigate("/")}
                  className="me-3"
                >
                  <FiArrowLeft />
                </Button>
                <div>
                  <h2 className="h4 mb-1 text-primary fw-bold">
                    Create New Task
                  </h2>
                  <p className="text-muted mb-0">Add a new task to your list</p>
                </div>
              </div>

              {/* Error Alert */}
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="title" className="fw-semibold">
                    Task Title *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter task title..."
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label htmlFor="description" className="fw-semibold">
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe your task..."
                    className="form-control-lg"
                  />
                </Form.Group>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate("/")}
                    disabled={loading}
                    className="me-md-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className={`btn-create-task d-flex align-items-center ${
                      loading ? "btn-loading" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Creating...
                      </>
                    ) : (
                      <>
                        <FiSave className="me-2" />
                        Create Task
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default CreateTask;
