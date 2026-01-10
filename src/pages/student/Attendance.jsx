const attendanceData = {
  totalClasses: 60,
  attended: 48,
  missed: 12,
  upcoming: 6,
};

const Attendance = () => {
  const percentage = Math.round(
    (attendanceData.attended / attendanceData.totalClasses) * 100
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">📊 Attendance Overview</h1>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          ["Total Classes", attendanceData.totalClasses],
          ["Attended", attendanceData.attended],
          ["Missed", attendanceData.missed],
          ["Upcoming", attendanceData.upcoming],
        ].map(([label, value]) => (
          <div key={label} className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-sky-600">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-lg font-semibold">
          Attendance Percentage
        </p>
        <div className="mt-3 h-3 bg-gray-200 rounded">
          <div
            className="h-3 bg-sky-500 rounded"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="mt-2 font-bold">{percentage}%</p>
      </div>
    </div>
  );
};

export default Attendance;
