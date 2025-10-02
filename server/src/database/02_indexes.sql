-- Performance optimization: Create indexes on frequently queried columns

CREATE INDEX IF NOT EXISTS idx_tasks_completed ON tasks (completed);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks (created_at DESC);