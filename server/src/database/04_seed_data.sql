-- Testing Data Insertion

INSERT INTO tasks (title, description, completed) VALUES
('Create Project Structure', 'Set up folders and initial configuration files', true),
('Design Database Schema', 'Create database tables and relationships', true),
('Implement Backend API', 'Develop REST API endpoints for task management', true),
('Add Authentication', 'Implement user authentication and authorization', false),
('Build Frontend Components', 'Create React components for task interface', false),
('Connect Frontend to API', 'Integrate API calls in the frontend application', false),
('Implement Task Filtering', 'Add ability to filter tasks by status and priority', false),
('Add Sorting Features', 'Implement sorting options for task lists', false),
('Create User Dashboard', 'Design and implement user dashboard with statistics', false),
('Deploy Application', 'Prepare application for production deployment', false);
ON CONFLICT (id) DO NOTHING;