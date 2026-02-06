import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const semesters = ["1st Semester", "2nd Semester"];
const sessions = [1, 2, 3, 4];

const MarkAttendance = () => {
  const axiosSecure = useAxiosSecure();

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [sessionCount, setSessionCount] = useState(1);
  const [date, setDate] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loadingFinish, setLoadingFinish] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    if (year && semester) {
      axiosSecure
        .get(`/attendance/students?year=${year}&semester=${semester}`)
        .then(res => {
          setStudents(res.data);
          setAttendance({});
          setSubmitted(false);
        });
    }
  }, [year, semester]);

  const toggleAttendance = email => {
    setAttendance(prev => ({ ...prev, [email]: !prev[email] }));
  };

  const submitAttendance = async () => {
    const confirm = await Swal.fire({
      title: "Submit Attendance?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Edit Attendance",
    });

    if (!confirm.isConfirmed) return;

    const records = students.map(s => ({
      email: s.email,
      name: s.name,
      roll: s.roll,
      present: attendance[s.email] || false,
    }));

    await axiosSecure.post("/attendance/mark", {
      year,
      semester,
      sessionCount,
      date,
      records,
    });

    setSubmitted(true);
    Swal.fire("Success", "Attendance Submitted", "success");
  };

  const finishCourse = async () => {
    if (!courseCode) {
      return Swal.fire("Error", "Course Code Required", "error");
    }

    setLoadingFinish(true);

    const res = await axiosSecure.post("/attendance/finish-course", {
      year,
      semester,
      courseCode,
    });

    setDownloadLink(res.data.downloadUrl);
    setLoadingFinish(false);
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <input type="date" className="input input-bordered" value={date} onChange={e => setDate(e.target.value)} />
        <select className="select select-bordered" onChange={e => setYear(e.target.value)}>
          <option value="">Year</option>
          {years.map(y => <option key={y}>{y}</option>)}
        </select>
        <select className="select select-bordered" onChange={e => setSemester(e.target.value)}>
          <option value="">Semester</option>
          {semesters.map(s => <option key={s}>{s}</option>)}
        </select>
        <select className="select select-bordered" onChange={e => setSessionCount(+e.target.value)}>
          {sessions.map(n => <option key={n}>{n} Class(es)</option>)}
        </select>
      </div>

      {students.length > 0 && (
        <>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Last Classes</th>
                <th>Present</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.email}>
                  <td>{s.roll}</td>
                  <td>{s.name}</td>
                  <td>
                    {s.lastAttendance?.map((a, i) => (
                      <span key={i}>{a ? "✅" : "❌"} </span>
                    ))}
                  </td>
                  <td>
                    <input type="checkbox" checked={attendance[s.email] || false} onChange={() => toggleAttendance(s.email)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            disabled={submitted}
            onClick={submitAttendance}
            className="btn bg-sky-500 text-white hover:bg-black mt-6"
          >
            {submitted ? "Submitted" : "Submit Attendance"}
          </button>

          {/* GAP */}
          <div className="my-12 text-center font-bold italic">
            ⚠ Click Below Button Only When the Course is Finished
          </div>

          <input
            type="text"
            placeholder="Course Code"
            className="input input-bordered mb-4"
            value={courseCode}
            onChange={e => setCourseCode(e.target.value)}
          />

          <button
            onClick={finishCourse}
            className="btn bg-red-500 text-white hover:bg-black"
          >
            {loadingFinish ? "Processing..." : "Finish Course"}
          </button>

          {downloadLink && (
            <div className="mt-4">
              <a href={downloadLink} className="text-sky-600 underline">
                Click here to download attendance sheet
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MarkAttendance;
