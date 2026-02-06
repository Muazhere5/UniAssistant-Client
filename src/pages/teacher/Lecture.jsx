const Lecture = () => {
  const lectures = [
    { title: "DSP – FFT Basics", course: "DSP", date: "2025-01-10" },
    { title: "Data Comm – OSI Model", course: "DC", date: "2025-01-14" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Lecture Upload</h1>

      <div className="bg-white p-6 shadow rounded-xl space-y-4">
        <input className="input input-bordered w-full" placeholder="Lecture Title" />
        <input type="file" className="file-input w-full" />
        <button className="bg-sky-500 text-white px-6 py-2 rounded-lg">
          Upload Lecture
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="font-semibold mb-4">Uploaded Lectures</h2>
        <ul className="space-y-2">
          {lectures.map((l, i) => (
            <li key={i} className="border p-3 rounded">
              <strong>{l.title}</strong> — {l.course} ({l.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lecture;
