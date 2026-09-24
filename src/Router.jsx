import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router"

import Layout from "./Layout"

import GuestHome from "./Guest/Home"

import SignIn from "./Auth/SignIn"
import SignUp from "./Auth/SignUp"

import Home from "./Admin/Home"
import About from "./Admin/About"
import Santri from "./Admin/Santri"

import Nilai from "./Admin/Santri/Nilai"
import Absensi from "./Admin/Santri/Absensi"
import SantriList from "./Admin/Santri/SantriList"
import SantriDetail from "./Admin/Santri/SantriDetail"

// USER
import UserLayout from "./user/UserLayout"
import UserHome from "./user/Home"
import UserAbsensi from "./user/Absensi"
import UserUjian from "./user/Ujian"
import UserProfil from "./user/Profil"

const router = createBrowserRouter([
  // GUEST
  {
    path: "/",
    element: <GuestHome />,
  },

  // AUTH
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

  // ADMIN
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "santri",
        element: <Santri />,
        children: [
          {
            index: true,
            element: <SantriList />,
          },
          {
            path: "list",
            children: [
              {
                index: true,
                element: <SantriList />,
              },
              {
                path: ":santri_id",
                element: <SantriDetail />,
              },
            ],
          },
          {
            path: "nilai",
            element: <Nilai />,
          },
          {
            path: "absensi",
            element: <Absensi />,
          },
        ],
      },
    ],
  },

  // USER
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "absensi",
        element: <UserAbsensi />,
      },
      {
        path: "ujian",
        element: <UserUjian />,
      },
      {
        path: "profil",
        element: <UserProfil />,
      },
    ],
  },

  // NOT FOUND
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router