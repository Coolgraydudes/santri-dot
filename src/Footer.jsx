import React from "react"

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">

        <div className="flex flex-col justify-between gap-12 md:flex-row">

          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              SANTRI.
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              A simple management system
              built for better student administration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">

            <div>
              <p className="mb-4 text-gray-500">
                Navigation
              </p>

              <div className="space-y-3">
                <a
                  href="/admin"
                  className="block transition hover:text-gray-400"
                >
                  Home
                </a>

                <a
                  href="/admin/santri"
                  className="block transition hover:text-gray-400"
                >
                  Santri
                </a>

                <a
                  href="/admin/about"
                  className="block transition hover:text-gray-400"
                >
                  About
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-gray-500">
                System
              </p>

              <div className="space-y-3 text-gray-400">
                <p>Version 1.0</p>
                <p>2026</p>
                <p>Indonesia</p>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p>
            © 2026 Santri Management System
          </p>

          <p>
            Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer