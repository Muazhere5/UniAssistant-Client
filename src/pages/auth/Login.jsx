import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  // 🔐 Email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await loginUser(email, password);

      // ✅ Save user to DB if not exists
      await axios.post("/users", {
        email: result.user.email,
        name: result.user.displayName || "User",
      });

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // 🔐 Google login (FIXED)
  const handleGoogleLogin = async () => {
    setError("");
    try {
      const result = await googleLogin();

      // ✅ VERY IMPORTANT: Save Google user to DB
      await axios.post("/users", {
        email: result.user.email,
        name: result.user.displayName,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <button className="w-full bg-sky-500 text-white py-2 rounded">
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 border py-2 rounded"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          New here?{" "}
          <Link to="/register" className="text-sky-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
