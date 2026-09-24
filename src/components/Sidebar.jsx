import React from "react"
import { NavLink } from "react-router"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

import {
  Home,
  Users,
  Info,
  GraduationCap,
} from "lucide-react"

const navItems = [
  {
    to: "/admin",
    label: "Home",
    icon: Home,
    end: true,
  },
  {
    to: "/admin/santri",
    label: "Santri",
    icon: Users,
    badge: "128",
  },
  {
    to: "/admin/about",
    label: "About",
    icon: Info,
  },
]

function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-white text-black">

      {/* HEADER */}
      <SidebarHeader className="border-b border-gray-200 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-8 w-8 items-center justify-center bg-black text-white">
            <GraduationCap className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight">
              santri.
            </p>

            <p className="text-[9px] uppercase tracking-widest text-gray-400">
              Management System
            </p>
          </div>

        </div>

      </SidebarHeader>


      {/* NAVIGATION */}
      <SidebarContent className="px-3 py-5">

        <p className="mb-3 px-2 text-[10px] uppercase tracking-widest text-gray-400">
          Menu
        </p>

        <SidebarMenu className="space-y-1">

          {navItems.map((item) => (

            <SidebarMenuItem key={item.to}>

              <NavLink
                to={item.to}
                end={item.end}
                className="block"
              >

                {({ isActive }) => (

                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={item.label}
                    className={`relative flex h-9 w-full items-center justify-between px-2.5 transition-colors ${
                      isActive
                        ? "bg-gray-50 text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-1/2 after:bg-black"
                        : "text-gray-500 hover:bg-gray-50 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-1/2"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <item.icon
                        className={
                          isActive
                            ? "text-black"
                            : "text-gray-400"
                        }
                        size={15}
                        strokeWidth={1.7}
                      />

                      <span className="text-sm">
                        {item.label}
                      </span>

                    </div>


                    {item.badge && (
                      <span className="text-[10px] font-mono text-gray-400">
                        {item.badge}
                      </span>
                    )}

                  </SidebarMenuButton>

                )}

              </NavLink>

            </SidebarMenuItem>

          ))}

        </SidebarMenu>

      </SidebarContent>


      {/* FOOTER */}
      <SidebarFooter className="border-t border-gray-200 p-4">

        <div className="flex items-center justify-between text-xs">

          <span className="text-gray-400">
            T.A. 2026/2027
          </span>

          <span className="font-mono text-gray-300">
            v1.0
          </span>

        </div>

      </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar