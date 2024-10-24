import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/homePage"
import StudentLogin from "./Components/StudentLogin"
import StudentSignup from "./Components/StudentSignup"
import TeacherLogin from "./Components/TeacherLogin"
import TeacherSignup from "./Components/TeacherSignup"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { TeacherPortal } from "./Components/TeacherPortal"
import StudentsPortal from "./Components/StudentsPortal"


const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#1e1d1d]">
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/students/signup" element={<StudentSignup/>} />
            <Route path="/students/login" element={<StudentLogin />} />
            <Route path="/teachers/signup" element={<TeacherSignup/>} />
            <Route path="/teachers/login" element={<TeacherLogin/>} />
            <Route path="/teachers/portal" element = {<TeacherPortal />} />
            <Route path="/students/portal" element={<StudentsPortal />} />
         </Routes>
         <ToastContainer />
    </div>
  )
}

export default App