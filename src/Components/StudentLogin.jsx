import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const redirectSignUp = () => {
    navigate("/students/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Student logged in successfully!!");
      setTimeout(() => {
        window.location.href = "/students/portal";
      }, 2000);
      toast.success("Logged in successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="w-[25%] h-[52%] bg-[#3d3c3c] rounded-2xl text-white flex justify-center items-center flex-col gap-5">
      <h1 className="text-[22px]">Student Login Portal</h1>
      <p className="text-xs text-center px-5">
        Log in to book appointments with your teachers and manage your schedule
        effortlessly.
      </p>
      <form onSubmit={handleSubmit} className="w-full">
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
              Sign in
            </button>
            <p onClick={redirectSignUp} className="text-[12px] cursor-pointer ">
              create account!!
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
