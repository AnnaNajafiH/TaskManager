-- Database Initialization Orchestration Script for Task Manager Project
\echo 'Starting Task Manager database initialization...'

\echo '1/4 Creating database schema...'
\i /docker-entrypoint-initdb.d/01_schema.sql

\echo '2/4 Creating indexes for performance...'
\i /docker-entrypoint-initdb.d/02_indexes.sql

\echo '3/4 Creating functions and triggers...'
\i /docker-entrypoint-initdb.d/03_functions.sql

\echo '4/4 Inserting sample data...'
\i /docker-entrypoint-initdb.d/04_seed_data.sql


-- Display completion message
DO $$
BEGIN
    RAISE NOTICE 'Task Manager Projet database initialized successfully!';
    RAISE NOTICE 'All components loaded: schema, indexes, functions, sample data';
END $$;