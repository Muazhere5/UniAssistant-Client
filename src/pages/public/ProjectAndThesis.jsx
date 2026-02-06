// src/pages/public/ProjectAndThesis.jsx
import { useState } from "react";
import {
  ProjectThesisGrid,
  projects,
  thesis,
} from "../../components/ProjectAndThesisCard";

const Section = ({ title, data }) => {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto mb-24 px-4">
      <h2 className="text-3xl font-bold text-sky-500 mb-6">{title}</h2>

      <input
        className="w-full border border-gray-400 p-3 mb-6 text-black"
        placeholder={`Search ${title}`}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ProjectThesisGrid data={filtered} />
    </section>
  );
};

const ProjectAndThesis = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Section title="Projects" data={projects} />
      <Section title="Thesis" data={thesis} />
    </div>
  );
};

export default ProjectAndThesis;
