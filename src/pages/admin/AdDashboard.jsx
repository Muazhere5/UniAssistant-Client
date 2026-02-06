import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/users").then(res => setUsers(res.data));
  }, [axiosSecure]);

  const handleDelete = async (email) => {
    if (!confirm("Delete this user?")) return;
    await axiosSecure.delete(`/admin/users/${email}`);
    setUsers(users.filter(u => u.email !== email));
  };

  return (
    <div>
      {/* 🏠 ADMIN HOME DASHBOARD */}
      <h1 className="text-3xl font-bold text-sky-600 mb-6">
        Admin Dashboard
      </h1>

      {/* 👇 CHILD ROUTES RENDER HERE */}
      <Outlet />

      {/* Optional: show users only on /dashboard/admin */}
      {location.pathname === "/dashboard/admin" && (
        <div className="bg-white shadow-xl rounded-xl overflow-x-auto mt-6">
          <table className="table">
            <thead className="bg-sky-100">
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td className="capitalize">{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user.email)}
                      className="bg-red-500 hover:bg-black text-white px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdDashboard;
