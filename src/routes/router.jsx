import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";

/* Layouts */
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AttendenceSheetLayout from "../layouts/AttendenceSheetLayout";

/* Route Guards */
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";
import AlumniRoute from "./AlumniRoute";

/* Public Pages */
import Home from "../pages/public/Home";
import ProjectAndThesis from "../pages/public/ProjectAndThesis";
import Notices from "../pages/public/Notices";
import BusSchedules from "../pages/public/BusSchedules";
import ErrorPage from "../pages/public/ErrorPage";

/* Auth */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* Applications */
import StudentApplication from "../pages/applications/Student";
import TeacherApplication from "../pages/applications/Teacher";
import AlumniApplication from "../pages/applications/Alumni";

/* Student */
import SDashboard from "../pages/student/SDashboard";
import Attendance from "../pages/student/Attendance";
import Lectures from "../pages/student/Lectures";
import Routine from "../pages/student/Routine";
import StudentAlumni from "../pages/student/Alumni";
import CV from "../pages/student/CV";
import TeacherNotice from "../pages/student/TeacherNotice";

/* Teacher */
import TDashboard from "../pages/teacher/TDashboard";
import MarkAttendance from "../pages/teacher/MarkAttendance";
import Classbook from "../pages/teacher/Classbook";
import Lecture from "../pages/teacher/Lecture";
import CRcontact from "../pages/teacher/CRcontact";
import NoticeStudent from "../pages/teacher/NoticeStudent";

/* Alumni */
import AlDashboard from "../pages/alumni/AlDashboard";
import Profile from "../pages/alumni/Profile";
import Career from "../pages/alumni/Career";

/* Admin */
import AdDashboard from "../pages/admin/AdDashboard";
import SRequest from "../pages/admin/SRequest";
import TRequest from "../pages/admin/TRequest";
import AlRequest from "../pages/admin/AlRequest";
import Edit from "../pages/admin/Edit";
import CoursesLecturesAttendence from "../pages/admin/CoursesLecturesAttendence";

const router = createBrowserRouter([
  /* 🌐 Public Layout */
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <ProjectAndThesis /> },
      { path: "notices", element: <Notices /> },
      { path: "bus-schedules", element: <BusSchedules /> },
    ],
  },

  /* 🔐 Auth Pages */
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  /* 📝 Role Applications */
  {
    path: "/apply",
    element: (
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    ),
    children: [
      { path: "student", element: <StudentApplication /> },
      { path: "teacher", element: <TeacherApplication /> },
      { path: "alumni", element: <AlumniApplication /> },
    ],
  },

  /* 📊 Dashboard */
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      /* 🎓 Student */
      {
        path: "student",
        element: (
          <StudentRoute>
            <SDashboard />
          </StudentRoute>
        ),
        children: [
          { path: "attendance", element: <Attendance /> },
          { path: "lectures", element: <Lectures /> },
          { path: "routine", element: <Routine /> },
          { path: "alumni", element: <StudentAlumni /> },
          { path: "cv", element: <CV /> },
          { path: "notices", element: <TeacherNotice /> },
        ],
      },

      /* 🧑‍🏫 Teacher */
      {
        path: "teacher",
        element: (
          <TeacherRoute>
            <TDashboard />
          </TeacherRoute>
        ),
        children: [
          {
            path: "attendance",
            element: (
              <AttendenceSheetLayout>
                <MarkAttendance />
              </AttendenceSheetLayout>
            ),
          },
          { path: "classbook", element: <Classbook /> },
          { path: "lectures", element: <Lecture /> },
          { path: "cr-contact", element: <CRcontact /> },
          { path: "notices", element: <NoticeStudent /> },
        ],
      },

      /* 🎓 Alumni */
      {
        path: "alumni",
        element: (
          <AlumniRoute>
            <AlDashboard />
          </AlumniRoute>
        ),
        children: [
          { path: "profile", element: <Profile /> },
          { path: "career", element: <Career /> },
        ],
      },

      /* 👑 Admin */
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdDashboard />
          </AdminRoute>
        ),
        children: [
          { path: "student-requests", element: <SRequest /> },
          { path: "teacher-requests", element: <TRequest /> },
          { path: "alumni-requests", element: <AlRequest /> },
          { path: "edit", element: <Edit /> },
          { path: "courses", element: <CoursesLecturesAttendence /> },
        ],
      },
    ],
  },
]);

export default router;
