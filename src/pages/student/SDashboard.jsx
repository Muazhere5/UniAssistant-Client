import { Outlet } from "react-router-dom";

const demoCourses = [
  {
    year: "1st Year",
    semester: "1st Semester",
    courses: [
      {
        code: "ICE-101",
        name: "Introduction to ICE",
        teacher: "Dr. A. Rahman",
        classroom: "ICE-301",
        books: ["ICE Fundamentals.pdf"],
        youtube: "https://youtube.com",
        website: "https://www.geeksforgeeks.org",
      },
    ],
  },
];

const tomorrowClasses = [
  {
    course: "Digital Logic Design",
    teacher: "Engr. S. Hossain",
    room: "ICE-204",
    time: "10:00 AM – 11:30 AM",
  },
];

const notices = [
  "Midterm Exam starts from 15th March",
  "Semester Registration Fee deadline: 10th March",
];

const SDashboard = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">
        🎓 Student Dashboard
      </h1>

      {/* Tomorrow Classes */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-sky-600 mb-4">
          Tomorrow’s Classes
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {tomorrowClasses.map((c, i) => (
            <div key={i} className="border rounded-lg p-4">
              <p className="font-bold">{c.course}</p>
              <p>Teacher: {c.teacher}</p>
              <p>Room: {c.room}</p>
              <p className="text-sky-500">{c.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notices */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-sky-600 mb-4">
          Important Notices
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {notices.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </section>

      {/* Courses */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-sky-600 mb-6">
          ICE Courses Overview
        </h2>

        {demoCourses.map((group, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-bold text-lg mb-2">
              {group.year} – {group.semester}
            </h3>

            {group.courses.map((course, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 mb-3"
              >
                <p className="font-semibold">
                  {course.code} – {course.name}
                </p>
                <p>Teacher: {course.teacher}</p>
                <p>Room: {course.classroom}</p>

                <div className="flex flex-wrap gap-3 mt-3">
                  <a className="text-sky-500 underline" href={course.youtube}>
                    YouTube
                  </a>
                  <a className="text-sky-500 underline" href={course.website}>
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <Outlet />
    </div>
  );
};

export default SDashboard;
