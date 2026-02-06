const Classbook = () => {
  const rooms = [
    { room: "ICE Lab 1", capacity: 40, status: "Available" },
    { room: "ICE Smart Room", capacity: 60, status: "Booked" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Smart Classroom Booking
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((r, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-6 border-l-4 border-sky-400"
          >
            <h2 className="text-xl font-semibold">{r.room}</h2>
            <p className="text-gray-500">Capacity: {r.capacity}</p>
            <p
              className={`mt-2 font-semibold ${
                r.status === "Available"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {r.status}
            </p>

            <button className="mt-4 px-5 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
              Request Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classbook;
