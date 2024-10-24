import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const handleTeacherSignUp = () => {
    navigate("/teachers/signup");
  };

  const handleStudentSignUp = () => {
    navigate("/students/signup");
  };


  return (
    <div className="w-[25%] h-[52%] bg-[#3d3c3c] rounded-2xl text-white flex justify-center items-center flex-col gap-5">
      <h1 className="text-[22px]">Appointment Booking Page</h1>
      <p className="text-xs text-center px-5">
        Easily schedule appointments with your teachers and manage your academic
        progress with our intuitive booking system. Stay organized and make the
        most of your learning time.
      </p>
      <p className="text-sm text-centre">Are you a:</p>
      <div className="flex gap-5">
        <button onClick={handleStudentSignUp} className="px-6 py-3 rounded-xl text-black text-sm bg-[#a9a6a6]">
          Student
        </button>
        <button onClick={handleTeacherSignUp} className="px-6 py-3 rounded-xl text-black text-sm bg-[#a9a6a6]">
          Teacher
        </button>
      </div>
    </div>
  );
};

export default HomePage;
