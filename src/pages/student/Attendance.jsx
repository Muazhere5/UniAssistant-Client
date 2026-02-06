import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Attendance = () => {
  const axiosSecure = useAxiosSecure();
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axiosSecure.get("/attendance/student-summary").then(res => {
      setSummary(res.data);
    });
  }, []);

  if (!summary) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-sky-600">
        📊 Attendance Summary
      </h2>

      <p>Total Classes: <b>{summary.totalClasses}</b></p>
      <p>Present: <b>{summary.presentClasses}</b></p>
      <p className="mt-2 text-lg">
        Attendance Percentage:{" "}
        <span className="font-bold text-green-600">
          {summary.percentage}%
        </span>
      </p>
    </div>
  );
};

export default Attendance;
