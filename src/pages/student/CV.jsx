const CV = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">📄 Build Your CV</h1>

      <input className="input input-bordered w-full mb-3" placeholder="Full Name" />
      <input className="input input-bordered w-full mb-3" placeholder="Email" />
      <textarea
        className="textarea textarea-bordered w-full mb-3"
        placeholder="Skills & Experience"
      />

      <button className="bg-sky-500 hover:bg-black text-white py-3 px-6 rounded-xl font-semibold">
        Generate CV
      </button>
    </div>
  );
};

export default CV;
