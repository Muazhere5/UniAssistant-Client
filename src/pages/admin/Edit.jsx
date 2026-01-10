import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Edit = () => {
  const axiosSecure = useAxiosSecure();
  const [name, setName] = useState("");

  const createCourse = async () => {
    await axiosSecure.post("/admin/courses", { name });
    alert("Course Created");
    setName("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Create Course
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-xl max-w-md">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="input input-bordered w-full"
          placeholder="Course Name"
        />

        <button
          onClick={createCourse}
          className="mt-4 bg-sky-500 hover:bg-black text-white w-full py-3 rounded-xl"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Edit;
