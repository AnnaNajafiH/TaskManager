# TaskManager

A modern full-stack task management application built with React, TypeScript, and Node.js.

## 🚀 Project Overview

TaskManager is a comprehensive task management solution designed to help users organize, track, and manage their tasks efficiently. The application follows a modern full-stack architecture with a React frontend and Node.js backend.

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **React Router** - Client-side routing and navigation
- **Vite** - Fast build tool and development server
- **Bootstrap 5.3.8** - Responsive UI framework
- **React Bootstrap 2.10.10** - React components for Bootstrap
- **React Icons** - Comprehensive icon library
- **Axios** - HTTP client for API communication
- **ESLint** - Code quality and consistency

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **PostgreSQL 15** - Relational database with Alpine Linux
- **pg** - PostgreSQL client for Node.js
- **Docker & Docker Compose** - Containerization and orchestration
- **Cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-restart utility

### DevOps & Tools
- **Docker** - Application containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control system
- **VS Code** - Development environment

## 📁 Project Structure

```
TaskManager/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Application assets
│   │   ├── components/    # Reusable React components
│   │   │   ├── Header/    # Navigation header with routing & dropdown menus
│   │   │   │   ├── Header.tsx      # Main navigation component
│   │   │   │   └── Header.css      # Navigation styling
│   │   │   ├── Layout.tsx # Main layout wrapper
│   │   │   └── Footer.tsx # Application footer
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage/  # Task list and management dashboard
│   │   │   │   ├── HomePage.tsx    # Main task interface
│   │   │   │   └── HomePage.css    # Homepage styling
│   │   │   ├── CreateTask.tsx/ # Task creation form
│   │   │   │   ├── CreateTask.tsx  # Task creation component
│   │   │   │   └── CreateTask.css  # Form styling with gradients
│   │   │   └── UpdateTask.tsx/ # Task editing form (in development)
│   │   ├── types/         # TypeScript type definitions
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies
│   └── vite.config.ts     # Vite configuration
└── server/                # Node.js backend application
    ├── src/
    │   ├── config/        # Database configuration
    │   ├── controllers/   # Request handlers for API endpoints
    │   ├── database/      # Database schema and initialization scripts
    │   ├── middlewares/   # Custom middleware (error handling)
    │   ├── routes/        # API routes (health, tasks)
    │   ├── services/      # Business logic layer
    │   └── utils/         # Utility functions
    ├── server.js          # Server entry point
    ├── Dockerfile         # Docker configuration
    ├── .dockerignore      # Docker ignore file
    ├── .env               # Environment variables
    ├── docker-compose.yml # Docker Compose configuration
    └── package.json       # Backend dependencies
```

## 🎯 Current Implementation Status

### ✅ Completed

#### Frontend
- [x] Project structure setup with TypeScript
- [x] React application with modern hooks and components
- [x] React Router integration for navigation
- [x] Bootstrap and React Bootstrap integration
- [x] Professional header with navigation and branding
- [x] Responsive layout component
- [x] Homepage with task management interface
- [x] Task creation form (CreateTask component) with modern UI
- [x] Modern UI with cards, badges, and animations
- [x] TypeScript interfaces and type safety
- [x] Icon integration (React Icons)
- [x] CSS styling with hover effects and transitions
- [x] Mobile-responsive design
- [x] Loading states and error handling
- [x] Form validation and user feedback
- [x] Gradient backgrounds and modern styling
- [x] Professional dropdown navigation menus

#### Backend
- [x] Express.js server setup
- [x] PostgreSQL database integration
- [x] Database schema and initialization scripts
- [x] Task CRUD API endpoints (GET, POST, PUT, DELETE)
- [x] Docker containerization with Node.js 20
- [x] Docker Compose orchestration
- [x] Environment configuration
- [x] Error handling middleware
- [x] CORS configuration
- [x] Health check endpoints
- [x] Database seed data for testing
- [x] Proper API route structure
- [x] Database connection pooling

#### DevOps
- [x] Dockerized application stack
- [x] PostgreSQL database container with Alpine Linux
- [x] Volume persistence for data
- [x] Container networking
- [x] Development environment setup
- [x] Hot reload for development
- [x] Container health checks
- [x] Simplified Docker configuration for learning
- [x] Production-ready container orchestration

### 🔄 In Progress

- [ ] Task editing functionality (UpdateTask component)
- [ ] User authentication system
- [ ] Task filtering and search
- [ ] Task categories and priorities
- [ ] Due date management
- [ ] User profiles and settings

### 🚀 Ready to Implement

- [ ] Task assignment to users
- [ ] Email notifications
- [ ] File attachments
- [ ] Task comments and collaboration
- [ ] Dashboard analytics
- [ ] Export functionality
- [ ] Mobile app (React Native)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **Docker** and **Docker Compose**
- **Git** for version control
- **npm** or **yarn** package manager

### Installation & Setup

#### Option 1: Docker Development (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnnaNajafiH/TaskManager.git
   cd TaskManager
   ```

2. **Start the entire application stack**
   ```bash
   docker-compose up -d --build
   ```

3. **Access the applications:**
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:5000
   - **Database**: localhost:5432

#### Option 2: Local Development

1. **Clone and setup backend**
   ```bash
   git clone https://github.com/AnnaNajafiH/TaskManager.git
   cd TaskManager/server
   npm install
   npm run dev
   ```

2. **Setup frontend** (in a new terminal)
   ```bash
   cd TaskManager/client
   npm install
   npm run dev
   ```

3. **Setup PostgreSQL database locally** or use Docker:
   ```bash
   docker run --name taskmanager-postgres -e POSTGRES_PASSWORD=secure_password_123 -e POSTGRES_DB=taskmanager -p 5432:5432 -d postgres:15-alpine
   ```

### 🔧 Environment Configuration

Create a `.env` file in the server directory:
```env
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager
DB_USER=postgres
DB_PASSWORD=secure_password_123
```

### 🐳 Docker Configuration

**Recent Updates & Fixes:**
- **Frontend**: Updated to Node.js 20 to support Vite 7.1.7 requirements
- **Backend**: Fixed Dockerfile to use `npm start` instead of `node start`
- **Simplified Setup**: Removed Nginx complexity for learning-focused development
- **Health Checks**: Comprehensive health monitoring for all services
- **Hot Reload**: Volume mounting for real-time development

**Container Services:**
- **Frontend**: `task-manager-client` on port 5173
- **Backend**: `task-manager-server` on port 5000  
- **Database**: `task-manager-postgres` on port 5432

**Quick Troubleshooting:**
- If containers fail to start, run `docker-compose down && docker-compose up --build -d`
- Check logs with `docker-compose logs [service-name]`
- Verify all containers are healthy with `docker-compose ps`

## 🌟 Current Features

### ✨ Implemented
- **✅ Task Management**: Full CRUD operations (Create, Read, Update, Delete)
- **✅ Task Creation**: Beautiful form with validation and modern styling
- **✅ Real-time Task Status**: Toggle between pending and completed
- **✅ Modern UI**: Professional cards with hover effects and animations
- **✅ Responsive Design**: Works on desktop, tablet, and mobile
- **✅ Task Statistics**: Live count of total, completed, and pending tasks
- **✅ Professional Navigation**: Header with routing, dropdown menus, and branding
- **✅ Loading States**: Smooth loading indicators and error handling
- **✅ Data Persistence**: PostgreSQL database with Docker
- **✅ API Integration**: RESTful API with proper error handling
- **✅ TypeScript**: Full type safety across frontend and backend
- **✅ Docker Ready**: Complete containerization with Node.js 20 and PostgreSQL 15
- **✅ Development Environment**: Hot reload and volume mounting for development
- **✅ Form Validation**: Client-side validation with user-friendly feedback
- **✅ Gradient Styling**: Modern CSS with gradients and animations
- **✅ Icon Integration**: Professional icons throughout the interface

### 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get single task |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

### 📱 Screenshots & Demo

**Homepage - Task Management Interface:**
- Modern card-based layout
- Task statistics dashboard
- Interactive task cards with actions
- Responsive grid system
- Professional navigation header

## 🧪 Testing the Application

### 🚀 Quick Start Test

1. **Start the application** using Docker Compose:
   ```bash
   docker-compose up -d --build
   ```

2. **Verify all services are running**:
   ```bash
   docker-compose ps
   ```
   You should see all containers as "Up" and "healthy"

3. **Access the frontend**: http://localhost:5173
   - Modern task management interface
   - Professional navigation with dropdown menus
   - Task statistics dashboard

4. **Test API endpoints** (optional):
   ```bash
   curl http://localhost:5000/health
   curl http://localhost:5000/tasks
   ```

### 📝 Feature Testing

1. **View Tasks**: Browse existing tasks from seed data
2. **Create Tasks**: Click "➕ New Task" to create new tasks with the beautiful form
3. **Task Actions**: 
   - Toggle status between pending ⏳ and completed ✅
   - Edit tasks using the edit button
   - Delete tasks using the delete button
4. **Responsive Design**: Test on different screen sizes
5. **Navigation**: Use the dropdown menu to access different sections

### 🔍 Troubleshooting

If you encounter issues:
- **Container errors**: Check logs with `docker-compose logs [service-name]`
- **Port conflicts**: Ensure ports 5173, 5000, and 5432 are available
- **Database issues**: Restart with `docker-compose down && docker-compose up -d`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the WBS Coding School curriculum.

## 👨‍💻 Author

**Anna Najafi**
- GitHub: [@AnnaNajafiH](https://github.com/AnnaNajafiH)
- Project: [TaskManager](https://github.com/AnnaNajafiH/TaskManager)

---

## � Project Status

**🎉 COMPLETE**: Fully functional task management application ready for production!

**Latest Updates:**
- ✅ Docker configuration optimized and working perfectly
- ✅ Node.js 20 compatibility for Vite 7.1.7
- ✅ Modern UI with gradients and professional styling
- ✅ Complete task creation workflow
- ✅ Professional navigation with dropdown menus
- ✅ Comprehensive error handling and loading states
- ✅ Mobile-responsive design
- ✅ Development environment with hot reload

**Ready for:** Portfolio showcase, production deployment, and further feature development!
