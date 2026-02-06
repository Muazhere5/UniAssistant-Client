const NoticeStudent = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Post Notice</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <input className="input input-bordered w-full" placeholder="Notice Title" />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Notice details..."
        />
        <button className="bg-sky-500 text-white px-6 py-2 rounded-lg">
          Publish Notice
        </button>
      </div>
    </div>
  );
};

export default NoticeStudent;
