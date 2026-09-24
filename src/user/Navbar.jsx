import React from "react"
import { Link, useLocation } from "react-router"
import { Search, Bell } from "lucide-react"

function Navbar() {
  const location = useLocation()

  const getPageName = () => {
    if (location.pathname === "/user") return "Home"
    if (location.pathname.includes("/absensi")) return "Absensi"
    if (location.pathname.includes("/jurnal")) return "Jurnal"
    if (location.pathname.includes("/ujian")) return "Ujian"
    if (location.pathname.includes("/profile")) return "Profile"

    return "User"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

      <div className="flex h-14 items-center justify-between px-4 md:px-6">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="flex items-center gap-2.5"
          >

            <div className="flex h-7 w-7 items-center justify-center bg-black text-[10px] font-bold text-white">
              S
            </div>

            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              santri.
            </span>

          </Link>

          <span className="text-gray-200">
            /
          </span>

          <span className="text-xs text-gray-400">
            {getPageName()}
          </span>

        </div>


        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <button className="group flex h-8 items-center gap-2 border border-transparent px-2.5 text-gray-400 transition-all hover:border-gray-200 hover:bg-gray-50 hover:text-black">

            <Search className="h-3.5 w-3.5" />

            <span className="hidden text-[11px] md:block">
              Search
            </span>

            <span className="hidden border-l border-gray-200 pl-2 font-mono text-[9px] text-gray-300 lg:block">
              /
            </span>

          </button>


          {/* DIVIDER */}
          <div className="mx-1 hidden h-5 w-px bg-gray-200 sm:block" />


          {/* NOTIFICATION */}
          <button className="relative flex h-8 w-8 items-center justify-center border border-transparent text-gray-400 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-black">

            <Bell className="h-3.5 w-3.5" />

            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 bg-black" />

          </button>


          {/* PROFILE */}
          <button className="flex h-8 w-8 items-center justify-center bg-black text-[10px] font-medium text-white transition-opacity hover:opacity-75">
            S
          </button>

        </div>

      </div>

    </header>
  )
}

export default Navbar