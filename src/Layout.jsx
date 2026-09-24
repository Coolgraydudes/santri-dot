import React from "react"
import { Navigate, Outlet } from "react-router"

import AppSidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Footer from "./Footer"

import {
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar"

import { TooltipProvider } from "./components/ui/tooltip"
import { UseAuthStore } from "./Auth/store.jsx/UseAuthStore"

function Layout() {
  const user = UseAuthStore((state) => state.user)

  if (!user) {
      return <Navigate to='/sign-in' replace />
  }

  if (user.role !== 'admin') {
      return <Navigate to='/user' replace />
  }

  return (
    <TooltipProvider>
      <SidebarProvider>

        <div className="flex min-h-screen w-full">

          {/* Sidebar */}
          <AppSidebar />

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col">

            {/* Navbar */}
            <div className="flex items-center border-b">
              <SidebarTrigger />
              <Navbar />
            </div>

            {/* Halaman */}
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

export default Layout