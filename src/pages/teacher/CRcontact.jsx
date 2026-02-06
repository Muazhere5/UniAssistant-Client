const CRcontact = () => {
  const crs = Array.from({ length: 8 }).map((_, i) => ({
    semester: i + 1,
    name: `CR Semester ${i + 1}`,
    phone: "01XXXXXXXXX",
    email: `cr${i + 1}@ice.edu`,
  }));

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h1 className="text-2xl font-bold mb-6">Class Representatives</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {crs.map((c) => (
          <div key={c.semester} className="border p-4 rounded-lg">
            <h2 className="font-semibold text-sky-600">
              Semester {c.semester}
            </h2>
            <p>{c.name}</p>
            <p>{c.phone}</p>
            <p>{c.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRcontact;
