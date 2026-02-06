const Career = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Career Information</h1>

      <input className="input input-bordered w-full" placeholder="Current Company" />
      <input className="input input-bordered w-full" placeholder="Position" />
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Career summary"
      />

      <button className="bg-sky-500 text-white px-6 py-2 rounded-lg">
        Save Career Info
      </button>
    </div>
  );
};

export default Career;
