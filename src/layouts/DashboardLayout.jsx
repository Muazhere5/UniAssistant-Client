import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const { role } = useRole();

  /* 🔐 ROLE DECISION (IMPORTANT) */
  const effectiveRole =
    role === "admin" || role === "user" ? "admin" : role;

  /* 📌 SIDEBAR LINKS BY ROLE */
  const sidebarLinks = {
    student: [
      { name: "Dashboard", to: "/dashboard/student" },
      { name: "Attendance", to: "/dashboard/student/attendance" },
      { name: "Lectures", to: "/dashboard/student/lectures" },
      { name: "Routine", to: "/dashboard/student/routine" },
      { name: "Alumni", to: "/dashboard/student/alumni" },
      { name: "CV", to: "/dashboard/student/cv" },
      { name: "Teacher Notices", to: "/dashboard/student/notices" },
    ],
    teacher: [
      { name: "Dashboard", to: "/dashboard/teacher" },
      { name: "Mark Attendance", to: "/dashboard/teacher/attendance" },
      { name: "Class Book", to: "/dashboard/teacher/classbook" },
      { name: "Lectures", to: "/dashboard/teacher/lectures" },
      { name: "CR Contact", to: "/dashboard/teacher/cr-contact" },
      { name: "Notices", to: "/dashboard/teacher/notices" },
    ],
    alumni: [
      { name: "Dashboard", to: "/dashboard/alumni" },
      { name: "Profile", to: "/dashboard/alumni/profile" },
      { name: "Career", to: "/dashboard/alumni/career" },
    ],
    admin: [
      { name: "Dashboard", to: "/dashboard/admin" },
      { name: "Student Requests", to: "/dashboard/admin/student-requests" },
      { name: "Teacher Requests", to: "/dashboard/admin/teacher-requests" },
      { name: "Alumni Requests", to: "/dashboard/admin/alumni-requests" },
      { name: "Edit", to: "/dashboard/admin/edit" },
      { name: "Courses & Attendance", to: "/dashboard/admin/courses" },
    ],
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* 🔵 SIDEBAR */}
      <aside className="w-72 hidden md:flex flex-col bg-gradient-to-b from-sky-100 to-white shadow-xl p-6">
        <h1 className="text-2xl font-extrabold text-sky-600 mb-8">
          Dashboard
        </h1>

        <nav className="flex-1 space-y-2">
          {sidebarLinks[effectiveRole]?.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-semibold transition
                ${
                  isActive
                    ? "bg-sky-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-sky-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* ⬅ GO HOME */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mt-6 text-sky-600 font-semibold hover:underline"
        >
          <FiArrowLeft /> Go Back To Home
        </button>

        {/* 🔴 LOGOUT */}
        <button
          onClick={logOut}
          className="mt-4 bg-red-500 hover:bg-black text-white py-3 rounded-xl font-bold transition"
        >
          <FiLogOut className="inline mr-2" />
          Logout
        </button>
      </aside>

      {/* 📄 MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
