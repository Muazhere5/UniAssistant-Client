const routine = [
  {
    day: "Sunday",
    course: "Digital Signal Processing",
    code: "ICE-302",
    teacher: "Dr. M. Islam",
    time: "11:00 – 12:30",
  },
];

const Routine = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">🗓️ Class Routine</h1>

      {routine.map((r, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <p className="font-bold">{r.day}</p>
          <p>{r.course} ({r.code})</p>
          <p>Teacher: {r.teacher}</p>
          <p className="text-sky-500">{r.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Routine;
