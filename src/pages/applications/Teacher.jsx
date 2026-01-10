import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Teacher = () => {
  const { user } = useAuth();

  const [data, setData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    designation: "",
    phoneNumber: "",
    officeRoom: "",
    officeHours: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: user.uid, // 🔗 teachers.userId
      department: "ICE", // 🔗 teachers.department
      assignedCourses: [], // 🔗 teachers.assignedCourses
      ...data,
    };

    console.log("Teacher Payload:", payload);
    // 🔗 POST → /teachers
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-10">
        <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
          Teacher Application
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {Object.entries(data).map(([key]) => (
            <div key={key}>
              <label className="font-bold capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                name={key}
                onChange={handleChange}
                className="input"
              />
            </div>
          ))}

          <button className="w-full bg-sky-500 hover:bg-black text-white py-4 rounded-xl font-bold transition">
            Apply as Teacher
          </button>
        </form>
      </div>
    </div>
  );
};

export default Teacher;
