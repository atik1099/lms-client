import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import ErrorElement from "../ErrorElement/ErrorElement";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import TeachOnLearnEase from "../Pages/TeachOnLearnEase/TeachOnLearnEase";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import PrivateRoutes from "./PrivateRoutes";
import AdminHome from "../Pages/AdminDash/AdminHome";
import TeacherRequ from "../Pages/AdminDash/TeacherRequ";
import Users from "../Pages/AdminDash/Users";
import AllClasses from "../Pages/AdminDash/AllClasses";
import UserProfile from "../Pages/UserProfile";
import AdminRoutes from "./AdminRoutes";
import UserHome from "../Pages/UserDash/UserHome";
import EnrollClasses from "../Pages/UserDash/EnrollClasses";
import TeacherHome from "../Pages/TeacherDash/TeacherHome";
import AddClass from "../Pages/TeacherDash/AddClass";
import MyClass from "../Pages/TeacherDash/MyClass";
import UpdateClass from "../Pages/TeacherDash/UpdateClass";
import PublicClass from "../Pages/PublicClass/PublicClass";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import Payment from "../Pages/Payment/Payment";
import TeaClassDetails from "../Pages/TeacherDash/TeaClassDetails";
import MyEnrollClassDetails from "../Pages/MyEnrollClassDetails/MyEnrollClassDetails";
import SeeProgress from "../Pages/AdminDash/SeeProgress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/public-classes",
        element: <PublicClass></PublicClass>
      },
      {
        path: "/public-class-details/:id",
        element: <PrivateRoutes><ClassDetails></ClassDetails></PrivateRoutes>
      },
      {
        path : "/payment/:id",
        element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
      },
      {
        path: "/teach-on-lear-ease",
        element: <PrivateRoutes><TeachOnLearnEase></TeachOnLearnEase></PrivateRoutes>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayouts></DashboardLayouts></PrivateRoutes>,
    children: [
      // admin routes
      {
        path: "admin-home",
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: "teacher-request",
        element: <AdminRoutes><TeacherRequ></TeacherRequ></AdminRoutes>
      },
      {
        path: "users",
        element: <AdminRoutes><Users></Users></AdminRoutes>
      },
      {
        path: "all-classes",
        element: <AdminRoutes><AllClasses></AllClasses></AdminRoutes>
      },
      {
        path: "see-progress/:id",
        element: <AdminRoutes><SeeProgress></SeeProgress></AdminRoutes>
      },
      // admin routes

      // teacher routes
      {
        path: "teacher-home",
        element: <PrivateRoutes><TeacherHome></TeacherHome></PrivateRoutes>
      },
      {
        path: "add-class",
        element: <PrivateRoutes><AddClass></AddClass></PrivateRoutes>
      },
      {
        path: "my-class",
        element: <PrivateRoutes><MyClass></MyClass></PrivateRoutes>
      },
      {
        path: "update-class/:id",
        element: <PrivateRoutes><UpdateClass></UpdateClass></PrivateRoutes>
      },
      {
        path: "teacher-class/:id",
        element: <TeaClassDetails></TeaClassDetails>
      },
      // teacher routes

      // user routes
      {
        path: "user-home",
        element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>
      },
      {
        path: "enroll-classes",
        element: <PrivateRoutes><EnrollClasses></EnrollClasses></PrivateRoutes>
      },
      {
        path: "my-enroll-class-details/:id",
        element: <MyEnrollClassDetails></MyEnrollClassDetails>
      },
      // user routes

      // shared routes
      {
        path: "profile",
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      }
      // shared routes
    ]
  }
]);

export default router;
