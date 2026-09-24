import React from "react"
import { Link } from "react-router"
import { Button } from "../components/ui/button"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2.5"
        >
          <div className="flex h-7 w-7 items-center justify-center bg-black text-[10px] font-bold text-white">
            S
          </div>

          <div>
            <span className="text-sm font-semibold tracking-tight">
              santri.
            </span>
          </div>
        </Link>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm text-gray-500 transition-colors hover:text-black"
          >
            Contact
          </Link>
        </nav>


        {/* AUTH */}
        <div className="flex items-center gap-2">
          <Link to="/sign-in">
            <Button
              variant="ghost"
              size="sm"
            >
              Sign In
            </Button>
          </Link>

          <Link to="/sign-up">
            <Button
              size="sm"
            >
              Sign Up
            </Button>
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Navbar