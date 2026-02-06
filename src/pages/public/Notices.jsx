// src/pages/public/Notices.jsx
const NoticeBoard = ({ title, notices }) => (
  <section className="max-w-6xl mx-auto mb-20 px-4">
    <h2 className="text-2xl font-bold text-sky-500 mb-4">{title}</h2>
    <ul className="space-y-3">
      {notices.map((n, i) => (
        <li
          key={i}
          className="border border-black p-4 text-black"
        >
          {n}
        </li>
      ))}
    </ul>
  </section>
);

const Notices = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <NoticeBoard
        title="Academic Notices"
        notices={[
          "Semester Final Exam starts from March 10",
          "Project submission deadline extended",
          "New class routine published",
        ]}
      />
    </div>
  );
};

export default Notices;
