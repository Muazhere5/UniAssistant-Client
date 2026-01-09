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
    <section className="bg-white/95 max-w-5xl mx-auto p-10 rounded-2xl shadow-xl mt-24">
      <h2 className="text-sky-500 text-3xl font-bold text-center mb-8">
        Bus Schedules
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Time</th>
            <th>Route</th>
            <th>Bus Name</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((b, i) => (
            <tr key={i} className="border-b">
              <td className="py-3">{b.time}</td>
              <td>{b.route}</td>
              <td className="font-bold">{b.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BusSchedules;
