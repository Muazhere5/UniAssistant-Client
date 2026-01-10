const notices = [
  {
    title: "Class Cancelled",
    message: "ICE-301 class is cancelled tomorrow.",
    teacher: "Dr. Rahman",
  },
];

const TeacherNotice = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">📢 Teacher Notices</h1>

      {notices.map((n, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <p className="font-semibold">{n.title}</p>
          <p>{n.message}</p>
          <p className="text-sm text-gray-500">— {n.teacher}</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherNotice;
