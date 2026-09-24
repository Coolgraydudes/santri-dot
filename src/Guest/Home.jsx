import React from "react"
import { Link } from "react-router"

import { Button } from "../components/ui/button"

function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold">
              santri.
            </h1>

            <p className="text-xs tracking-widest text-gray-400">
              MANAGEMENT SYSTEM
            </p>
          </div>

          <nav className="flex items-center gap-2">
            <Link to="/sign-in">
              <Button variant="ghost">
                Sign In
              </Button>
            </Link>

            <Link to="/sign-up">
              <Button>
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          {/* Ornament */}
          <div className="pointer-events-none absolute right-[-80px] top-1/2 hidden -translate-y-1/2 md:block">
            <div className="relative h-[600px] w-[600px]">

              {/* Outer circle */}
              <div className="absolute right-0 top-0 h-[460px] w-[460px] rounded-full border-2 border-[#4F9CF9]/30" />

              {/* Middle circle */}
              <div className="absolute right-[55px] top-[55px] h-[350px] w-[350px] rounded-full border-2 border-[#043873]/20" />

              {/* Blue circle */}
              <div className="absolute right-[120px] top-[120px] h-[220px] w-[220px] rounded-full bg-[#4F9CF9]/10" />

              {/* Dark blue circle */}
              <div className="absolute right-[165px] top-[165px] h-[130px] w-[130px] rounded-full bg-[#043873]" />

              {/* Small blue dot */}
              <div className="absolute right-[125px] top-[105px] h-5 w-5 rounded-full bg-[#4F9CF9]" />

              {/* Small dark dot */}
              <div className="absolute bottom-[95px] left-[115px] h-3 w-3 rounded-full bg-[#043873]" />

              {/* Small blue dot */}
              <div className="absolute bottom-[135px] right-[75px] h-2.5 w-2.5 rounded-full bg-[#4F9CF9]" />

              {/* Decorative line */}
              <div className="absolute bottom-[145px] right-[75px] h-px w-32 bg-[#4F9CF9]/40" />
            </div>
          </div>

          <div className="mx-auto flex min-h-[calc(100vh-89px)] max-w-7xl items-center px-6 py-20">
            <div className="relative z-10 max-w-5xl">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-gray-400">
                Santri Management System
              </p>

              <h2 className="text-6xl font-bold leading-[0.9] tracking-[-0.05em] md:text-8xl">
                Manage.
                <br />
                Understand.
                <br />
                <span className="text-gray-300">
                  Grow.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
                Sistem sederhana untuk membantu mengelola
                informasi, nilai, dan kehadiran santri dalam
                satu tempat.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/sign-up">
                  <Button size="lg">
                    Get Started
                  </Button>
                </Link>

                <Link to="/sign-in">
                  <Button
                    size="lg"
                    variant="outline"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b">
          <div className="mx-auto grid max-w-7xl md:grid-cols-4">
            <div className="border-b p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Data
              </p>

              <p className="mt-4 text-4xl font-bold">
                01
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Centralized system
              </p>
            </div>

            <div className="border-b p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Academic
              </p>

              <p className="mt-4 text-4xl font-bold">
                02
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Nilai & perkembangan
              </p>
            </div>

            <div className="border-b p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Attendance
              </p>

              <p className="mt-4 text-4xl font-bold">
                03
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Monitoring kehadiran
              </p>
            </div>

            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Access
              </p>

              <p className="mt-4 text-4xl font-bold">
                24/7
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Akses kapan saja
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Core Features
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Everything you need.
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                Semua kebutuhan dasar pengelolaan santri
                dibuat dalam satu sistem yang sederhana dan
                mudah digunakan.
              </p>
            </div>

            <div className="mt-16 grid border-l border-t md:grid-cols-3">
              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  01
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Santri
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Simpan dan kelola informasi santri secara
                  terstruktur dalam satu tempat.
                </p>
              </div>

              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  02
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Nilai
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Pantau nilai dan perkembangan akademik
                  santri dengan lebih mudah.
                </p>
              </div>

              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  03
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Absensi
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Catat kehadiran dan lihat riwayat absensi
                  dengan lebih terorganisir.
                </p>
              </div>

              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  04
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Dashboard
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Lihat informasi penting melalui dashboard
                  yang ringkas dan jelas.
                </p>
              </div>

              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  05
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Organized
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Data yang tersusun membuat proses
                  pengelolaan menjadi lebih efisien.
                </p>
              </div>

              <div className="border-b border-r p-8">
                <p className="text-sm text-gray-400">
                  06
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  Simple
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Tampilan sederhana agar pengguna dapat
                  fokus pada informasi yang penting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-t bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                How it works
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Simple by design.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Sistem dibuat dengan alur sederhana supaya
                pengelolaan data tidak terasa rumit.
              </p>
            </div>

            <div className="mt-16 grid gap-px bg-gray-800 md:grid-cols-3">
              <div className="bg-black p-8">
                <p className="text-sm text-gray-600">
                  STEP 01
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  Add data
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Masukkan informasi santri ke dalam sistem.
                </p>
              </div>

              <div className="bg-black p-8">
                <p className="text-sm text-gray-600">
                  STEP 02
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  Manage
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Kelola nilai dan absensi melalui dashboard.
                </p>
              </div>

              <div className="bg-black p-8">
                <p className="text-sm text-gray-600">
                  STEP 03
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  Understand
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Gunakan data untuk melihat perkembangan
                  santri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Get started
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                Ready to manage your data?
              </h2>

              <p className="mt-5 max-w-lg text-gray-500">
                Mulai gunakan santri. untuk mengelola
                informasi santri dengan lebih sederhana.
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <Link to="/sign-up">
                <Button size="lg">
                  Create Account
                </Button>
              </Link>

              <Link to="/sign-in">
                <Button
                  size="lg"
                  variant="outline"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold">
              santri.
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Management System
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link
              to="/"
              className="hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/sign-in"
              className="hover:text-black"
            >
              Sign In
            </Link>

            <Link
              to="/sign-up"
              className="hover:text-black"
            >
              Sign Up
            </Link>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 santri.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home