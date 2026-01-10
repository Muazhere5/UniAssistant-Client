import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AlRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/alumni").then(res => setAlumni(res.data));
  }, [axiosSecure]);

  const approve = async (email) => {
    await axiosSecure.patch(`/admin/approve/${email}/alumni`);
    setAlumni(alumni.filter(a => a.email !== email));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Alumni Applications
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {alumni.map(a => (
          <div key={a.email} className="bg-white shadow-xl p-6 rounded-xl">
            <p><b>Email:</b> {a.email}</p>

            <button
              onClick={() => approve(a.email)}
              className="mt-4 bg-sky-500 hover:bg-black text-white px-6 py-3 rounded-xl"
            >
              Approve Alumni
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlRequest;
