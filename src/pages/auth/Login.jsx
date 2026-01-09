import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await loginUser(data.email, data.password);
    navigate(from, { replace: true });
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-sky-500 text-center mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("email")} placeholder="Email" className="input" />
        <input type="password" {...register("password")} placeholder="Password" className="input" />

        <button className="w-full bg-sky-500 text-white py-3 rounded-xl hover:bg-black transition">
          Login
        </button>
      </form>

      <button
        onClick={googleLogin}
        className="mt-4 w-full flex items-center justify-center gap-2 border border-sky-500 text-sky-500 py-3 rounded-xl hover:bg-black hover:text-white transition"
      >
        <FaGoogle /> Login with Google
      </button>
    </>
  );
};

export default Login;
