import pool from "../config/db.js";

//get all tasks
export const getAllTasksService = async () => {
  const res = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
  return res.rows;
};

//get task by id
export const getTaskByIdService = async (id) => {
  const res = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return res.rows[0];
};

//create a new task
export const createTaskService = async (title, description) => {
  const res = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

//update a task
export const updateTaskService = async (id, title, description) => {
  const res = await pool.query(
    "UPDATE tasks SET title = $1, description = $2, updated_at = NOW() WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  return res.rows[0];
};

//delete a task
export const deleteTaskService = async (id) => {
  const res = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
  return res.rows[0];
};


