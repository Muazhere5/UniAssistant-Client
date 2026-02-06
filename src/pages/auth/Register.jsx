import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // ✅ Trim & validate email
      const email = data.email.trim();
      const password = data.password;

      if (!email || !email.includes("@")) {
        throw new Error("Invalid email address");
      }

      // 1️⃣ Image upload (kept as-is)
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;
      await fetch(url, { method: "POST", body: formData });

      // 2️⃣ Firebase Registration (ONLY)
      await registerUser(email, password);

      reset();
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-sky-500 text-center mb-6">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Full Name"
          className="input"
        />

        <input
          {...register("id", { required: true })}
          placeholder="University ID"
          className="input"
        />

        <input
          {...register("department", { required: true })}
          placeholder="Department"
          className="input"
        />

        <input
          type="file"
          {...register("image", { required: true })}
          className="input"
        />

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className="input"
        />

        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Password"
          className="input"
        />

        <button className="w-full bg-sky-500 text-white py-3 rounded-xl hover:bg-black transition">
          Register
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full flex items-center justify-center gap-2 border border-sky-500 text-sky-500 py-3 rounded-xl hover:bg-black hover:text-white transition"
      >
        <FaGoogle /> Continue with Google
      </button>
    </>
  );
};

export default Register;
