import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/students").then(res => setStudents(res.data));
  }, [axiosSecure]);

  const approve = async (email) => {
    await axiosSecure.patch(`/admin/approve/${email}/student`);
    setStudents(students.filter(s => s.email !== email));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Student Applications
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {students.map(s => (
          <div key={s.email} className="bg-white shadow-xl p-6 rounded-xl">
            <p><b>Email:</b> {s.email}</p>
            <p><b>Status:</b> {s.status}</p>

            <button
              onClick={() => approve(s.email)}
              className="mt-4 bg-sky-500 hover:bg-black text-white px-6 py-3 rounded-xl"
            >
              Approve Student
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SRequest;
