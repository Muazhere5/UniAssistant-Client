// src/pages/public/ProjectAndThesis.jsx
import { useState } from "react";
import {
  ProjectThesisGrid,
  projects,
  thesis,
} from "../../components/ProjectAndThesisCard";

const Section = ({ title, data }) => {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="bg-white/95 max-w-7xl mx-auto p-8 rounded-2xl shadow-xl mb-24">
      <h2 className="text-sky-500 text-3xl font-bold text-center mb-6">
        {title}
      </h2>

      <input
        type="text"
        placeholder="Search..."
        className="w-full mb-6 p-3 rounded-xl border"
        onChange={(e) => setQuery(e.target.value)}
      />

      <ProjectThesisGrid data={filtered.slice(0, limit)} />

      {limit < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setLimit(limit + 3)}
            className="bg-sky-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

const ProjectAndThesis = () => {
  return (
    <div className="pt-24">
      <Section title="Projects" data={projects} />
      <Section title="Thesis" data={thesis} />
    </div>
  );
};

export default ProjectAndThesis;
