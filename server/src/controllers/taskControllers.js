import {
  getAllTasksService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskServices.js";

//get all tasks controller
export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

//get task by id controller
export const getTaskById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await getTaskByIdService(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

//create a new task controller
export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required" });
    }
    const newTask = await createTaskService(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

//update a task controller
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required" });
    }
    const updatedTask = await updateTaskService(
      id,
      title,
      description,
      completed
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

//delete a task controller
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskService(id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    next(error);
  }
};
