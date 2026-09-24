import React from "react"
import { Navigate, Outlet } from "react-router"

import UserSidebar from "./Sidebar"
import UserNavbar from "./Navbar"
import Footer from "../Footer"

import {
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar"

import { TooltipProvider } from "../components/ui/tooltip"
import { UseAuthStore } from "@/Auth/store.jsx/UseAuthStore"

function UserLayout() {
    const user = UseAuthStore((state) => state.user)

    if (!user) {
        return <Navigate to='/sign-in' replace />
    }

    if (user.role !== 'user') {
        return <Navigate to='/admin' replace />
    }

  return (
    <TooltipProvider>
      <SidebarProvider>

        <div className="flex min-h-screen w-full">

          {/* Sidebar */}
          <UserSidebar />

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col">

            {/* Navbar */}
            <div className="flex items-center border-b">
              <SidebarTrigger />
              <UserNavbar />
            </div>

            {/* Halaman User */}
            <main className="flex-1 p-6">
              <Outlet />
            </main>

            {/* Footer */}
            <Footer />

          </div>

        </div>

      </SidebarProvider>
    </TooltipProvider>
  )
}

export default UserLayout