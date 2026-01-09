// src/pages/public/Notices.jsx
const NoticeBoard = ({ title, bg, text, notices }) => (
  <section className={`${bg} max-w-6xl mx-auto p-8 rounded-2xl mb-20`}>
    <h2 className={`text-3xl font-bold mb-6 ${text}`}>{title}</h2>
    <ul className="space-y-3">
      {notices.map((n, i) => (
        <li key={i} className="text-lg">
          • {n}
        </li>
      ))}
    </ul>
  </section>
);

const Notices = () => {
  return (
    <div className="pt-24">
      <NoticeBoard
        title="Academic Notices"
        bg="bg-white"
        text="text-sky-500"
        notices={[
          "Semester classes will resume from Monday",
          "Updated syllabus uploaded",
        ]}
      />

      <NoticeBoard
        title="Exam Notices"
        bg="bg-black"
        text="text-white"
        notices={[
          "Mid-term exam starts next week",
          "Exam hall instructions published",
        ]}
      />

      <NoticeBoard
        title="Department Programs"
        bg="bg-red-600"
        text="text-white"
        notices={[
          "Orientation Program on Friday",
          "Farewell ceremony announcement",
        ]}
      />

      <NoticeBoard
        title="Sports Notices"
        bg="bg-green-600"
        text="text-white"
        notices={[
          "Inter-department football tournament",
          "Cricket practice schedule updated",
        ]}
      />
    </div>
  );
};

export default Notices;
