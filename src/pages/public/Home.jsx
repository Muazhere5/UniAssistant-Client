// src/pages/public/Home.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/* ===================== SECTION 1: Swiper Slider Images ===================== */
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

/* ===================== SECTION 2: Banner Image ===================== */
import bannerImg from "../../assets/banner.png";

/* ===================== SECTION 3: Academic Journey Slider ===================== */
import journey1 from "../../assets/journey1.jpg";
import journey2 from "../../assets/journey2.jpg";
import journey3 from "../../assets/journey3.jpg";

/* ===================== SECTION 4: Teacher Join Background ===================== */
import teacherBg from "../../assets/teacher-bg.png";

/* ===================== SECTION 5: Teacher Cards Images ===================== */
import teacher1 from "../../assets/apurba_sir.jpg";
import teacher2 from "../../assets/nayem_sir.jpg";
import teacher3 from "../../assets/ashik_sir.jpg";

/* ===================== SECTION 6: Alumni Join Background ===================== */
import alumniBg from "../../assets/alumni-bg.png";

const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [teacherIndex, setTeacherIndex] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);

  const [heroSlideDir, setHeroSlideDir] = useState("left");
  const [journeySlideDir, setJourneySlideDir] = useState("right");

  const heroSlides = [slide1, slide2, slide3, slide4];
  const journeySlides = [journey1, journey2, journey3];

  /* ===================== AUTO HERO SLIDER (RIGHT → LEFT) ===================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideDir("left");
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* ===================== AUTO JOURNEY SLIDER (LEFT → RIGHT) ===================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setJourneySlideDir("right");
      setJourneyIndex((prev) => (prev + 1) % journeySlides.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const teachers = [
    {
      name: "Apurba Adhikarey",
      designation: "Associate Professor, ICE",
      image: teacher1,
    },
    {
      name: "Md. Mahbubul Alam",
      designation: "Associate Professor, ICE",
      image: teacher2,
    },
    {
      name: "Dr. Md. Ashikur Rahman Khan",
      designation: "Professor, ICE",
      image: teacher3,
    },
  ];

  return (
    <div className="space-y-32 pb-32">

      {/* ======================================================
          SECTION 1: HERO AUTO SLIDER
      ====================================================== */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          key={heroIndex}
          src={heroSlides[heroIndex]}
          alt="Innovation Slide"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
            heroSlideDir === "left"
              ? "translate-x-0 animate-[slideLeft_.7s_ease-in-out]"
              : ""
          }`}
          style={{
            transform: "translateX(0)",
          }}
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Welcome to UniAssistant AI
          </h1>

          <Link
            to="/projects"
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-400 hover:text-white transition"
          >
            Explore Innovation
          </Link>
        </div>
      </section>

      {/* ======================================================
          SECTION 2: BANNER IMAGE WITH TITLE
      ====================================================== */}
      <section className="relative max-w-7xl mx-auto px-4">
        <img
          src={bannerImg}
          alt="University Banner"
          className="w-full h-[90vh] object-cover rounded-3xl"
        />

        <h2 className="absolute -top-20 left-1/2 -translate-x-1/2 text-sky-400 text-4xl font-extrabold">
          UniAssistant AI
        </h2>
      </section>

      {/* ======================================================
          SECTION 3: ACADEMIC JOURNEY AUTO SLIDER
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-center text-sky-400 text-4xl font-bold">
          Academic Journey Of ICE
        </h2>

        <div className="relative h-[90vh] overflow-hidden rounded-3xl">
          <img
            key={journeyIndex}
            src={journeySlides[journeyIndex]}
            alt="Academic Journey"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              journeySlideDir === "right"
                ? "translate-x-0 animate-[slideRight_.6s_ease-in-out]"
                : ""
            }`}
            style={{
              transform: "translateX(0)",
            }}
          />
        </div>
      </section>

      {/* ======================================================
          SECTION 4: JOIN AS TEACHER
      ====================================================== */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${teacherBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
          <h2 className="text-sky-400 text-4xl font-bold">
            Join As A Teacher
          </h2>

          <p className="text-white max-w-2xl">
            Empower students, manage academics digitally, and contribute to the
            ICE department with transparency and impact.
          </p>

          <Link
            to="/apply/teacher"
            className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-sky-400 hover:text-white transition"
          >
            Apply As A Teacher
          </Link>
        </div>
      </section>

      {/* ======================================================
          SECTION 5: OUR TEACHERS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 space-y-10">
        <h2 className="text-center text-sky-400 text-4xl font-bold">
          Our Teachers
        </h2>

        <div className="relative flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setTeacherIndex(
                (teacherIndex - 1 + teachers.length) % teachers.length
              )
            }
            className="bg-sky-400 text-white px-4 py-3 rounded-full hover:bg-black transition"
          >
            ◀
          </button>

          <div className="bg-white shadow-xl rounded-3xl p-6 w-72 text-center">
            <img
              src={teachers[teacherIndex].image}
              alt="Teacher"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="font-bold text-lg">
              {teachers[teacherIndex].name}
            </h3>
            <p className="text-gray-600">
              {teachers[teacherIndex].designation}
            </p>
          </div>

          <button
            onClick={() => setTeacherIndex((teacherIndex + 1) % teachers.length)}
            className="bg-sky-400 text-white px-4 py-3 rounded-full hover:bg-black transition"
          >
            ▶
          </button>
        </div>
      </section>

      {/* ======================================================
          SECTION 6: JOIN AS ALUMNI
      ====================================================== */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${alumniBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6">
          <h2 className="text-sky-400 text-4xl font-bold">
            Join As Alumni
          </h2>

          <p className="text-white max-w-2xl">
            Connect with students, share your journey, and help shape future
            ICE professionals.
          </p>

          <Link
            to="/apply/alumni"
            className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-sky-400 hover:text-white transition"
          >
            Apply As An Alumni
          </Link>
        </div>
      </section>

      {/* ======================================================
          SECTION 7: FAQ
      ====================================================== */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-center text-sky-400 text-4xl font-bold">
          FAQ About UniAssistant AI
        </h2>

        {[
          {
            q: "What Are The Automated Features In This Assistant?",
            a: "UniAssistant AI provides smart classroom booking, automated attendance tracking, AI-powered CV generation, and academic assistance tools that help ICE students manage their university life efficiently.",
          },
          {
            q: "Who Can Get Access Of Contact With Alumni?",
            a: "Only registered students of the ICE department will be able to communicate and collaborate with alumni through the UniAssistant AI platform.",
          },
          {
            q: "How To Sign Up As A Student?",
            a: "Students need to complete the official student application form available on the platform to get verified access to UniAssistant AI services.",
          },
          {
            q: "AI Chatbot Speciality",
            a: "The UniAssistant AI chatbot is trained specially to answer ICE-related academic questions, departmental queries, and student guidance topics.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 cursor-pointer"
            onClick={() => setFaqOpen(faqOpen === index ? null : index)}
          >
            <h3 className="font-bold text-lg flex justify-between">
              {item.q}
              <span>{faqOpen === index ? "−" : "+"}</span>
            </h3>

            {faqOpen === index && (
              <p className="mt-4 text-gray-600">{item.a}</p>
            )}
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;