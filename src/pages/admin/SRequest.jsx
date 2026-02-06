import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/students").then(res => setStudents(res.data));
  }, [axiosSecure]);

  const approveStudent = async (email) => {
    await axiosSecure.patch(`/admin/students/approve/${email}`);
    setStudents(students.filter(s => s.email !== email));
  };

  const deleteStudent = async (email) => {
    await axiosSecure.delete(`/admin/students/${email}`);
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
            <p><b>Name:</b> {s.name}</p>
            <p><b>Roll:</b> {s.roll}</p>
            <p><b>Batch:</b> {s.batch}</p>
            <p><b>Email:</b> {s.email}</p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => approveStudent(s.email)}
                className="bg-sky-500 hover:bg-black text-white px-6 py-2 rounded-xl"
              >
                Approve
              </button>

              <button
                onClick={() => deleteStudent(s.email)}
                className="bg-red-500 hover:bg-black text-white px-6 py-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SRequest;
