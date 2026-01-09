import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;
    const res = await fetch(url, { method: "POST", body: formData });
    const imgData = await res.json();

    await registerUser(data.email, data.password);
    reset();
    navigate("/");
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-sky-500 text-center mb-6">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Full Name" className="input" />
        <input {...register("id")} placeholder="University ID" className="input" />
        <input {...register("department")} placeholder="Department" className="input" />
        <input type="file" {...register("image")} className="input" />
        <input {...register("email")} placeholder="Email" className="input" />
        <input type="password" {...register("password")} placeholder="Password" className="input" />

        <button className="w-full bg-sky-500 text-white py-3 rounded-xl hover:bg-black transition">
          Register
        </button>
      </form>

      <button
        onClick={googleLogin}
        className="mt-4 w-full flex items-center justify-center gap-2 border border-sky-500 text-sky-500 py-3 rounded-xl hover:bg-black hover:text-white transition"
      >
        <FaGoogle /> Continue with Google
      </button>
    </>
  );
};

export default Register;
