import { Routes,Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./Pages/Student/Overview";
import Courses from "./Pages/Student/Courses";
import Projects from "./Pages/Student/Projects";
import Settings from "./Pages/Student/Settings";
import { motion } from 'framer-motion'
import Login from "./Pages/Student/Login";
import StudentLayout from "./Pages/Student/StudentLayout";

export default function App() {
  return (
      <div
        className="max-h-screen gap-6 flex p-6 bg-gradient-to-br overflow-hidden from-purple-200 to-purple-400">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<StudentLayout/>}>
            <Route path="/" element={<Overview />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>

      </div>

  )
}