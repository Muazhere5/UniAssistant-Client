import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/backgroundvideo.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* White Board */}
      <div className="bg-white/95 w-[90%] max-w-md p-8 rounded-2xl shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
