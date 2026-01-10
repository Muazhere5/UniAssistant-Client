import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { role } = useRole();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDashboardClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (role === "student") navigate("/dashboard/student");
    else if (role === "teacher") navigate("/dashboard/teacher");
    else if (role === "alumni") navigate("/dashboard/alumni");
    else if (role === "admin") navigate("/dashboard/admin");
  };

  const navLinkClass =
    "text-white font-semibold px-4 py-2 rounded-lg transition-all hover:bg-sky-500 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ICE Logo" className="h-9 w-9 object-contain" />
            <span className="text-white text-xl font-bold tracking-wide">
              ICE
            </span>
          </Link>

          {/* CENTER: Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/projects" className={navLinkClass}>
              Projects & Theses
            </NavLink>

            {/* CENTER DASHBOARD BUTTON */}
            <button
              onClick={handleDashboardClick}
              className="mx-4 px-6 py-2 rounded-xl font-bold text-black bg-white transition-all hover:bg-sky-500 hover:text-white"
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

          {/* RIGHT: Profile / Login */}
          <div className="relative">
            {!user ? (
              <Link
                to="/login"
                className="bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg transition-all hover:bg-black hover:text-white"
              >
                Login
              </Link>
            ) : (
              <>
                <button onClick={() => setOpen(!open)}>
                  <img
                    src={user?.photoURL || "https://i.ibb.co/2kRZ9J4/user.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-sky-500 object-cover"
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-64 bg-black rounded-xl shadow-xl p-4">
                    <p className="text-white text-sm break-all mb-3">
                      {user?.email}
                    </p>

                    <button
                      onClick={logOut}
                      className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg transition-all hover:bg-black"
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
