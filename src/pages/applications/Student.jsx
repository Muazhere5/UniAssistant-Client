import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Student = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    year: "",
    semester: "",
    batch: "",
    session: "",
    institutionalEmail: "",
    mobile: "",
    address: "",
    dob: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    // 🖼️ Upload image to IMGBB
    if (image) {
      const imgData = new FormData();
      imgData.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        { method: "POST", body: imgData }
      );

      const imgRes = await res.json();
      imageUrl = imgRes.data.display_url;
    }

    const payload = {
      ...formData,
      email: user.email, // 🔐 logged-in email
      image: imageUrl,
      status: "pending",
      createdAt: new Date(),
    };

    await axiosSecure.post("/students", payload);
    alert("Student application submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 className="text-sky-500 text-4xl font-extrabold text-center mb-8">
          Student Application Form
        </h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input name="name" placeholder="Student Name" onChange={handleChange} className="input" required />
          <input name="roll" placeholder="Roll Number" onChange={handleChange} className="input" required />

          <select name="year" onChange={handleChange} className="input" required>
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <select name="semester" onChange={handleChange} className="input" required>
            <option value="">Select Semester</option>
            <option>1st Semester</option>
            <option>2nd Semester</option>
          </select>

          <input name="batch" placeholder="Batch (ICE-20)" onChange={handleChange} className="input" />
          <input name="session" placeholder="Session (2020-21)" onChange={handleChange} className="input" />

          <input name="institutionalEmail" placeholder="Institutional Email" onChange={handleChange} className="input" />

          <input value={user.email} disabled className="input bg-gray-100" />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="input" />

          <input name="mobile" placeholder="Mobile Number" onChange={handleChange} className="input" />
          <input type="date" name="dob" onChange={handleChange} className="input" />

          <textarea name="address" placeholder="Address" onChange={handleChange} className="input md:col-span-2 h-24" />

          <button className="md:col-span-2 bg-sky-500 hover:bg-black text-white py-4 rounded-xl font-bold">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student;
