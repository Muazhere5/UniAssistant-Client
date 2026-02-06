// src/pages/public/BusSchedules.jsx
const buses = [
  { time: "08:00 AM", route: "Campus → মাইজদী", name: "শাপলা" },
  { time: "09:00 AM", route: "Campus → মাইজদী", name: "গোলাপ" },
  { time: "12:00 PM", route: "Campus → চৌমুহনী", name: "বেলী" },
  { time: "03:00 PM", route: "মাইজদী → Campus", name: "জুঁই" },
  { time: "05:00 PM", route: "মাইজদী → Campus", name: "রজনীগন্ধা" },
  { time: "07:00 PM", route: "Campus → মাইজদী", name: "কদম" },
];

const BusSchedules = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500 mb-6">
          ICE Bus Schedules
        </h2>

        <table className="w-full border border-black">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 border">Bus</th>
              <th className="p-3 border">Route</th>
              <th className="p-3 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((b, i) => (
              <tr key={i} className="text-black text-center">
                <td className="p-3 border">{b.name}</td>
                <td className="p-3 border">{b.route}</td>
                <td className="p-3 border">{b.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BusSchedules;
