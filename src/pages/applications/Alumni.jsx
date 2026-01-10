import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Alumni = () => {
  const { user } = useAuth();

  const [data, setData] = useState({
    fullName: user?.displayName || "",
    graduationYear: "",
    jobTitle: "",
    organization: "",
    industry: "",
    workLocation: "",
    email: user?.email || "",
    phoneNumber: "",
    linkedinProfile: "",
    isPublic: true,
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      userId: user.uid, // 🔗 alumni.userId
      department: "ICE", // 🔗 alumni.department
      isVerified: false, // 🔗 admin verification
      ...data,
    };

    console.log("Alumni Payload:", payload);
    // 🔗 POST → /alumni
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-xl p-10">
        <h2 className="text-sky-500 text-3xl font-bold text-center mb-8">
          Alumni Registration
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {Object.entries(data).map(([key]) => (
            <div key={key}>
              <label className="font-bold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input name={key} onChange={handleChange} className="input" />
            </div>
          ))}

          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-sky-500 hover:bg-black text-white px-12 py-4 rounded-xl font-bold transition">
              Join as Alumni
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alumni;
