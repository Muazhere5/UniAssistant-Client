import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/teachers").then(res => setTeachers(res.data));
  }, [axiosSecure]);

  const approve = async (email) => {
    await axiosSecure.patch(`/admin/approve/${email}/teacher`);
    setTeachers(teachers.filter(t => t.email !== email));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Teacher Applications
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {teachers.map(t => (
          <div key={t.email} className="bg-white shadow-xl p-6 rounded-xl">
            <p><b>Email:</b> {t.email}</p>

            <button
              onClick={() => approve(t.email)}
              className="mt-4 bg-sky-500 hover:bg-black text-white px-6 py-3 rounded-xl"
            >
              Approve Teacher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TRequest;
