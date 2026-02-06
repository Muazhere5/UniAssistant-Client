import { Outlet } from "react-router-dom";

const AttendenceSheetLayout = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-sky-600 mb-6">
        📋 Attendance Sheet
      </h2>
      {children || <Outlet />}
    </div>
  );
};

export default AttendenceSheetLayout;
