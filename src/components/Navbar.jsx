import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { role, roleLoading } = useRole();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDashboardClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (roleLoading) return;

    // ✅ TEMP FIX: "user" goes to student dashboard
    if (role === "student" || role === "user") {
      navigate("/dashboard/student");
    } else if (role === "teacher") {
      navigate("/dashboard/teacher");
    } else if (role === "alumni") {
      navigate("/dashboard/alumni");
    } else if (role === "admin") {
      navigate("/dashboard/admin");
    }
  };

  const handleLogout = async () => {
    setOpen(false);
    await logout();
    navigate("/");
  };

  const navLinkClass =
    "text-white font-semibold px-4 py-2 rounded-lg transition-all hover:bg-sky-500 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ICE Logo" className="h-9 w-9 object-contain" />
            <span className="text-white text-xl font-bold">ICE</span>
          </Link>

          {/* Center Nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects & Theses</NavLink>

            <button
              onClick={handleDashboardClick}
              disabled={roleLoading}
              className="mx-4 px-6 py-2 rounded-xl font-bold bg-white text-black hover:bg-sky-500 hover:text-white disabled:opacity-50"
            >
              Dashboard
            </button>

            <NavLink to="/apply/student" className={navLinkClass}>
              Student Registration
            </NavLink>
            <NavLink to="/notices" className={navLinkClass}>
              Notices
            </NavLink>
          </div>

          {/* Auth */}
          <div className="relative flex items-center gap-3">
            {!user ? (
              <>
                <Link to="/login" className="bg-sky-500 px-4 py-2 rounded-lg text-white">
                  Login
                </Link>
                <Link to="/register" className="border border-sky-500 px-4 py-2 rounded-lg text-sky-500">
                  Register
                </Link>
              </>
            ) : (
              <>
                <button onClick={() => setOpen(!open)}>
                  <img
                    src={user.photoURL || "https://i.ibb.co/2kRZ9J4/user.png"}
                    className="w-10 h-10 rounded-full border-2 border-sky-500"
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-64 bg-black p-4 rounded-xl">
                    <p className="text-white text-sm mb-3 break-all">
                      {user.email}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-sky-500 py-2 rounded-lg text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
