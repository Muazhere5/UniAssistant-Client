// src/components/ProjectAndThesisCard.jsx
import { useState } from "react";
import { FaHeart, FaEye, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-sky-400/90 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.02] transition-all">
      {/* Project Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full object-cover"
        />

        {/* Author Image */}
        <img
          src={item.authorImage}
          alt={item.author}
          className="absolute -bottom-6 left-4 w-12 h-12 rounded-full border-4 border-white object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 pt-10 flex-1 flex flex-col">
        <h3 className="text-white text-xl font-bold mb-1">
          {item.title}
        </h3>

        <p className="text-black text-sm mb-2">
          <span className="font-semibold">Author:</span> {item.author}
        </p>

        <p className="text-black text-sm mb-3 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between text-sm mt-auto">
          <span className="flex items-center gap-1">
            <FaEye /> {item.views}
          </span>

          <span className="italic">{item.type}</span>

          <button
            onClick={() => setLiked(!liked)}
            className={`text-xl transition ${
              liked ? "text-red-600" : "text-black"
            }`}
          >
            <FaHeart />
          </button>

          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-black"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectThesisGrid = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

/* =================== DATA =================== */

export const projects = Array.from({ length: 15 }, (_, i) => ({
  id: `p${i}`,
  title: `Smart Communication System ${i + 1}`,
  author: "ICE Research Group",
  description:
    "An advanced research-based project focusing on communication systems, signal processing, and networking.",
  views: 100 + i * 12,
  type: "Project",
  image: `https://images.unsplash.com/collection/190727/${300 + i}`, // project image
  authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
  link: "https://github.com",
}));

export const thesis = Array.from({ length: 15 }, (_, i) => ({
  id: `t${i}`,
  title: `Signal Processing Thesis ${i + 1}`,
  author: "ICE Graduate Student",
  description:
    "A thesis on modern signal analysis, networking efficiency, and communication theory.",
  views: 80 + i * 9,
  type: "Thesis",
  image: `https://images.unsplash.com/collection/2203757/${300 + i}`, // thesis image
  authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
  link: "https://scholar.google.com",
}));
