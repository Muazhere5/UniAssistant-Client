import { Outlet } from "react-router-dom";

const AlDashboard = () => {
  const alumni = [
    { name: "Engr. Hasan", company: "Huawei", phone: "017xxxxxxx" },
    { name: "Engr. Sumi", company: "Grameenphone", phone: "018xxxxxxx" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ICE Alumni Network</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {alumni.map((a, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-5">
            <h2 className="font-semibold text-sky-600">{a.name}</h2>
            <p>{a.company}</p>
            <p>{a.phone}</p>
          </div>
        ))}
      </div>

      {/* 🔽 NESTED ROUTES RENDER HERE */}
      <Outlet />
    </div>
  );
};

export default AlDashboard;
