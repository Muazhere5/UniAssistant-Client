// src/pages/public/Home.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";

/* Assets for Academic Journey */
import dpt1 from "../../assets/dptpic1.png"; // Academic image
import dpt2 from "../../assets/dptpic2.png";
import dpt3 from "../../assets/dptpic3.png";
import dpt4 from "../../assets/dptpic4.png";
import dpt5 from "../../assets/dptpic5.png";

const researchSlides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1581091012184-5c1fef4c8b23",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1509228627159-6452c8a4d08b",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1526378722484-cc5c8106d9cf",
  },
];

const quotes = [
  "Innovation begins with curiosity.",
  "Technology shapes the future.",
  "Education is the most powerful weapon.",
  "Research creates real impact.",
];

const newsTicker = [
  "Apply as a Student from Apply Section",
  "Teachers can manage attendance digitally",
  "View ICE Notices and Bus Schedules",
  "Alumni can guide student careers",
];

const academicImages = [dpt1, dpt2, dpt3, dpt4, dpt5];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const q = setInterval(
      () => setQuoteIndex((prev) => (prev + 1) % quotes.length),
      3000
    );
    const i = setInterval(
      () => setImageIndex((prev) => (prev + 1) % academicImages.length),
      3500
    );
    return () => {
      clearInterval(q);
      clearInterval(i);
    };
  }, []);

  return (
    <div className="space-y-24 pb-24">

      {/* ===================== 1. Research Slider ===================== */}
      <section className="bg-white/95 max-w-6xl mx-auto p-6 rounded-2xl shadow-lg">
        <h2 className="text-sky-500 text-3xl font-bold text-center">
          Research & Projects
        </h2>
        <p className="text-black font-semibold text-center mb-6">
          Discover innovation shaping tomorrow
        </p>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          {researchSlides.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.img}
              alt="Research"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <Link
            to="/projects"
            className="absolute inset-0 flex items-center justify-center"
          >
            <button className="bg-sky-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-black transition">
              Watch Innovations
            </button>
          </Link>
        </div>
      </section>

      {/* ===================== 2. Hero Section ===================== */}
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Banner Image */}
        <img
          src="https://i.postimg.cc/YOUR-BANNER.png" // <-- PUT POSTIMAGES LINK HERE
          alt="Banner"
          className="w-[70%] mx-auto z-10"
        />

        {/* Floating Quote */}
        <div className="absolute top-10 text-2xl font-bold text-yellow-400 animate-fade">
          {quotes[quoteIndex]}
        </div>

        {/* Title + News */}
        <div className="absolute bottom-10 bg-white/95 px-6 py-4 rounded-xl shadow-md w-[80%]">
          <h2 className="text-sky-500 text-2xl font-bold text-center">
            Uni Assistant AI
          </h2>
          <marquee className="italic text-black mt-2">
            {newsTicker.join(" • ")}
          </marquee>
        </div>
      </section>

      {/* ===================== 3. Apply as Teacher ===================== */}
      <section className="bg-white/95 max-w-6xl mx-auto p-8 rounded-2xl shadow-lg">
        <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
          Join as a Teacher
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://i.postimg.cc/YOUR-TEACHER.png" // <-- Teacher Image
            alt="Teacher"
            className="rounded-xl"
          />
          <div>
            <p className="text-black mb-6">
              Empower students, manage courses, and lead academic innovation.
            </p>
            <Link to="/apply/teacher">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition">
                Register As A Teacher
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== 4. Our Teachers ===================== */}
      <section className="space-y-8">
        <div className="bg-white/95 max-w-xl mx-auto p-4 rounded-xl shadow">
          <h2 className="text-sky-500 text-3xl font-bold text-center">
            Our Teachers
          </h2>
        </div>
        <Slider />
      </section>

      {/* ===================== 5. Academic Journey ===================== */}
      <section className="bg-white/95 max-w-6xl mx-auto p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-sky-500 text-3xl font-bold mb-6">
          Academic Journey of ICE
        </h2>
        <img
          src={academicImages[imageIndex]}
          alt="ICE Journey"
          className="mx-auto rounded-xl transition-all duration-1000 w-[70%]"
        />
      </section>

      {/* ===================== 6. Apply as Alumni ===================== */}
      <section className="bg-white/95 max-w-6xl mx-auto p-8 rounded-2xl shadow-lg">
        <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
          Join as an Alumni
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-black mb-6">
              Share experience, mentor students, and strengthen ICE community.
            </p>
            <Link to="/apply/alumni">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition">
                Register As An Alumni
              </button>
            </Link>
          </div>
          <img
            src="https://i.postimg.cc/YOUR-ALUMNI.png" // <-- Alumni Image
            alt="Alumni"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* ===================== 7. Creative Academic Section ===================== */}
      <section className="bg-white/95 max-w-6xl mx-auto p-8 rounded-2xl shadow-lg">
        <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
          Academic Support & FAQ
        </h2>
        <ul className="space-y-4 text-black">
          <li>📘 How attendance is calculated transparently</li>
          <li>📊 How teachers manage class schedules</li>
          <li>🎓 How alumni help student careers</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
