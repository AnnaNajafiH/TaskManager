import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UpdateTask from "./pages/UpdateTask.tsx/UpdateTask";
import CreateTask from "./pages/CreateTask.tsx/CreateTask";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update/:id" element={<UpdateTask />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
