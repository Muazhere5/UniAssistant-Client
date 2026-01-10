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
      <h1 className="text-3xl font-bold text-sky-600 mb-6">All Users</h1>

      <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
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
    </div>
  );
};

export default AdDashboard;
