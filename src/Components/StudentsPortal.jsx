import { toast } from "react-toastify";
import { auth, db } from "./Firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const StudentsPortal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        number,
        date,
        message,
      });

      setName("");
      setEmail("");
      setNumber("");
      setDate("");
      setMessage("");

      toast.success("Appointment booked successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      auth.signOut();
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      toast.success("Logged out successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#1e1d1d] relative">
      <button
        onClick={handleLogout}
        className="absolute right-0 top-0 mt-5 mr-5 px-8 py-3 bg-[#6a6d6c]  text-white rounded-xl"
      >
        Logout
      </button>
      <div className="w-[65%] h-[72%] rounded-[30px] bg-[#3d3c3c] flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex flex-col gap-5">
          <h1 className="text-[33px] text-white">Book your Appointment</h1>
          <p className="text-white text-[13px]">
            Provide your details and select a time to schedule your appointment{" "}
            <br /> with a teacher
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#E2DEE4] outline-none border-none px-6"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#E2DEE4] outline-none border-none px-6"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <input
                className="text-[14px] font-medium my-7 w-[370px] h-[40px] rounded-xl bg-[#E2DEE4] outline-none border-none px-6"
                placeholder="Enter your number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                className="text-[14px] font-medium my-7 w-[370px] h-[40px] rounded-xl bg-[#E2DEE4] outline-none border-none px-6"
                placeholder="Enter appointment date"
                type="date"
                min="2024-10-01"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <textarea
              value={message}
              placeholder="Enter you message"
              className="w-[94.5%] h-[100px] text-[14px] font-medium rounded-xl bg-[#E2DEE4] outline-none border-none px-6 pt-3 resize-none"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-[#a9a6a6] w-[94.5%] py-3 mt-5  text-black font-medium rounded-xl text-[13px]"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentsPortal;
