import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🎥 Background Video (from /public) */}
      <video
        className="fixed inset-0 -z-20 w-full h-full object-cover"
        src="/backgroundvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* 🌫 Overlay for contrast & readability */}
      <div className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-[1px]" />

      {/* 🌐 Navbar */}
      <Navbar />

      {/* 📄 Public Page Content */}
      <main className="relative z-10 min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
