import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Student = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    rollNumber: "",
    registrationNumber: "",
    batch: "",
    semester: "",
    fullName: user?.displayName || "",
    email: user?.email || "",
    phoneNumber: "",
    address: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: user.uid, // 🔗 backend: students.userId
      department: "ICE", // 🔗 backend: students.department
      enrolledCourses: [], // 🔗 backend: students.enrolledCourses
      ...formData,
    };

    console.log("Student Application Payload:", payload);
    // 🔗 POST → /students (backend index.js)
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-sky-500 text-3xl md:text-4xl font-extrabold text-center mb-8">
          Student Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Academic */}
          <div>
            <label className="font-bold text-black">Roll Number</label>
            <input name="rollNumber" onChange={handleChange} required className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Registration Number</label>
            <input name="registrationNumber" onChange={handleChange} required className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Batch</label>
            <input name="batch" placeholder="ICE-20" onChange={handleChange} className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Semester</label>
            <input type="number" name="semester" onChange={handleChange} className="input" />
          </div>

          {/* Personal */}
          <div>
            <label className="font-bold text-black">Full Name</label>
            <input name="fullName" value={formData.fullName} className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Email</label>
            <input name="email" value={formData.email} className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Phone Number</label>
            <input name="phoneNumber" onChange={handleChange} className="input" />
          </div>

          <div>
            <label className="font-bold text-black">Gender</label>
            <select name="gender" onChange={handleChange} className="input">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="font-bold text-black">Address</label>
            <textarea name="address" onChange={handleChange} className="input h-24" />
          </div>

          <div>
            <label className="font-bold text-black">Date of Birth</label>
            <input type="date" name="dateOfBirth" onChange={handleChange} className="input" />
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-sky-500 hover:bg-black text-white px-12 py-4 rounded-xl font-bold text-lg transition">
              Submit Student Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Student;
