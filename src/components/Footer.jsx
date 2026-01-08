import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* LEFT: Professional Links */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <Link to="/about" className="hover:text-sky-400 transition">
            About Us
          </Link>
          <Link to="/terms" className="hover:text-sky-400 transition">
            Terms & Policy
          </Link>
          <Link to="/privacy" className="hover:text-sky-400 transition">
            Privacy Policy
          </Link>
          <Link to="/support" className="hover:text-sky-400 transition">
            Help & Support
          </Link>
        </div>

        {/* CENTER: Logo & Name */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="ICE Logo"
            className="w-28 h-28 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold tracking-wide">
            Information and Communication Engineering
          </h2>
        </div>

        {/* RIGHT: Social & Contact Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="mailto:ice@university.edu"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-sky-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} ICE Department. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
