const lectures = [
  {
    course: "Microprocessors",
    pdf: "Microprocessors_Lecture_Notes.pdf",
    semester: "3rd Year – 1st Semester",
  },
];

const Lectures = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">📚 Lecture Materials</h1>

      {lectures.map((l, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <p className="font-semibold">{l.course}</p>
          <p className="text-sm text-gray-500">{l.semester}</p>
          <p className="text-sky-500 mt-2 underline cursor-pointer">
            {l.pdf}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Lectures;
