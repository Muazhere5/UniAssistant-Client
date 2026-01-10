const alumni = [
  {
    name: "Engr. Tanvir Ahmed",
    company: "Samsung",
    designation: "Embedded Engineer",
    contact: "+8801XXXXXXXXX",
  },
];

const Alumni = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">🎓 ICE Alumni Network</h1>

      {alumni.map((a, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          <p className="font-semibold">{a.name}</p>
          <p>{a.designation}</p>
          <p>{a.company}</p>
          <p className="text-sky-500">{a.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default Alumni;
