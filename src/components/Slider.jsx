// src/components/Slider.jsx
import { useState } from "react";

const teachers = [
  {
    name: "Dr. A. Rahman",
    designation: "Professor, ICE",
    email: "arahman@nstu.edu.bd",
    image: "https://i.postimg.cc/TEACHER1.png", // <-- POSTIMAGE LINK
  },
  {
    name: "Md. Hasan",
    designation: "Assistant Professor",
    email: "hasan@nstu.edu.bd",
    image: "https://i.postimg.cc/TEACHER2.png",
  },
  {
    name: "Dr. S. Karim",
    designation: "Associate Professor",
    email: "karim@nstu.edu.bd",
    image: "https://i.postimg.cc/TEACHER3.png",
  },
  {
    name: "Nusrat Jahan",
    designation: "Lecturer",
    email: "nusrat@nstu.edu.bd",
    image: "https://i.postimg.cc/TEACHER4.png",
  },
  {
    name: "T. Mahmud",
    designation: "Senior Lecturer",
    email: "mahmud@nstu.edu.bd",
    image: "https://i.postimg.cc/TEACHER5.png",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + teachers.length) % teachers.length);
  const next = () => setIndex((index + 1) % teachers.length);

  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={prev}
        className="bg-white text-sky-500 text-3xl px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        ‹
      </button>

      {[0, 1].map((offset) => {
        const t = teachers[(index + offset) % teachers.length];
        return (
          <div
            key={offset}
            className="bg-white p-6 rounded-xl shadow-lg w-64 h-96 flex flex-col items-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-sky-500 font-bold text-lg">{t.name}</h3>
            <p className="text-black">{t.designation}</p>
            <p className="text-black text-sm mt-2">{t.email}</p>
          </div>
        );
      })}

      <button
        onClick={next}
        className="bg-white text-sky-500 text-3xl px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
