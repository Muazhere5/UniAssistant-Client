import { Outlet } from "react-router-dom";

const TDashboard = () => {
  const stats = {
    totalClasses: 120,
    completed: 78,
    remaining: 42,
  };

  const courses = [
    { course: "Digital Signal Processing", batch: "ICE-20", semester: 6 },
    { course: "Data Communication", batch: "ICE-21", semester: 5 },
    { course: "Microprocessors", batch: "ICE-19", semester: 7 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Teacher Overview (ICE Dept.)
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Classes", value: stats.totalClasses },
          { label: "Completed", value: stats.completed },
          { label: "Remaining", value: stats.remaining },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white border-l-4 border-sky-400 shadow rounded-xl p-6"
          >
            <p className="text-gray-500">{item.label}</p>
            <p className="text-3xl font-bold text-sky-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Assigned Courses
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Course</th>
              <th>Batch</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-3 font-medium">{c.course}</td>
                <td>{c.batch}</td>
                <td>{c.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔽 NESTED ROUTES RENDER HERE */}
      <Outlet />
    </div>
  );
};

export default TDashboard;
