import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";

const TeacherSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/teachers/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User is registered successfully!!");
      setTimeout(() => {
        window.location.href = "/teachers/portal";
      }, 2000);
      toast.success("Registered successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="w-[25%] h-[52%] bg-[#3d3c3c] rounded-2xl text-white flex justify-center items-center flex-col gap-5">
      <h1 className="text-[22px]">Teacher Signup Portal</h1>
      <p className="text-xs text-center px-5">
        Create a secure teacher account to manage and view student appointments
        efficiently.
      </p>
      <form onSubmit={handleRegister} className="w-full">
        <div className="flex flex-col justify-center items-center gap-7 w-full">
          <input
            className="w-[80%] h-10 rounded-xl border-none outline-none px-4 bg-[#c6c0c0] text-black text-[14px]"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-[80%] h-10 rounded-xl border-none outline-none px-4 bg-[#c6c0c0] text-black text-[14px]"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-[80%] flex justify-between">
            <button
              className="px-6 py-3 rounded-xl text-white text-sm bg-[#1a1919]"
              type="submit"
            >
              Sign up
            </button>
            <p onClick={redirectLogin} className="text-[12px] cursor-pointer ">
              Already have an account??
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherSignup;
