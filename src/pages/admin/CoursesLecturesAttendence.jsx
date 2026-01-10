import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CoursesLecturesAttendence = () => {
  const axiosSecure = useAxiosSecure();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/courses").then(res => setCourses(res.data));
  }, [axiosSecure]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Courses Overview
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(c => (
          <div key={c._id} className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="font-bold text-lg">{c.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesLecturesAttendence;
