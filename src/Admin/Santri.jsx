import React from "react"
import { NavLink, Outlet } from "react-router"

import {
  Users,
  GraduationCap,
  CalendarCheck,
  Search,
  Plus,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

function SantriLayout() {
  const getTabClass = ({ isActive }) =>
    `inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm transition ${
      isActive
        ? "border-black font-medium text-black"
        : "border-transparent text-gray-400 hover:text-black"
    }`

  return (
    <div className="mx-auto w-full max-w-7xl">

      {/* HEADER */}
      <section className="border-b pb-10">

        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            SANTRI / 2026
          </p>

          <p className="text-xs text-gray-400">
            Management System
          </p>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

          <div>
            <p className="mb-5 text-sm leading-6 text-gray-500">
              Kelola data, nilai, dan kehadiran
              <br className="hidden sm:block" />
              santri dalam satu ruang.
            </p>

            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              MANAGE
              <br />
              YOUR
              <br />
              <span className="text-gray-300">
                SANTRI.
              </span>
            </h1>
          </div>

          {/* QUICK ACTION */}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Cari santri..."
                className="h-10 w-full border bg-white pl-9 pr-4 text-sm outline-none transition focus:border-black sm:w-64"
              />
            </div>

            <button className="flex h-10 items-center justify-center gap-2 border px-4 text-sm transition hover:bg-black hover:text-white">
              <Plus className="h-4 w-4" />
              Santri Baru
            </button>

          </div>

        </div>

        <div className="mt-16 flex items-center justify-between border-t pt-5">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Student management
          </p>

          <p className="text-xs text-gray-400">
            01 — 03
          </p>
        </div>

      </section>


      {/* STATS */}
      <section className="border-b">

        <div className="grid md:grid-cols-3">

          <div className="border-b py-10 md:border-b-0 md:border-r md:pr-10">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Total Santri
            </p>

            <p className="mt-5 text-6xl font-bold tracking-[-0.06em]">
              128
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              Santri aktif
            </div>
          </div>


          <div className="border-b py-10 md:border-b-0 md:border-r md:px-10">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Kehadiran
            </p>

            <p className="mt-5 text-6xl font-bold tracking-[-0.06em]">
              97.4%
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="h-4 w-4" />
              Rata-rata kehadiran
            </div>
          </div>


          <div className="py-10 md:pl-10">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Nilai Akademik
            </p>

            <p className="mt-5 text-6xl font-bold tracking-[-0.06em]">
              88.5
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <TrendingUp className="h-4 w-4" />
              Rata-rata nilai
            </div>
          </div>

        </div>

      </section>


      {/* NAVIGATION */}
      <section className="pt-12">

        <div className="flex flex-col justify-between gap-6 border-b md:flex-row md:items-end">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Student data.
            </h2>
          </div>

          <nav className="flex overflow-x-auto">

            <NavLink
              to="/admin/santri/list"
              className={getTabClass}
            >
              <Users className="h-4 w-4" />
              Daftar Santri
            </NavLink>

            <NavLink
              to="/admin/santri/nilai"
              className={getTabClass}
            >
              <GraduationCap className="h-4 w-4" />
              Nilai
            </NavLink>

            <NavLink
              to="/admin/santri/absensi"
              className={getTabClass}
            >
              <CalendarCheck className="h-4 w-4" />
              Absensi
            </NavLink>

          </nav>

        </div>


        {/* OUTLET */}
        <div className="py-10">
          <Outlet />
        </div>

      </section>


      {/* BOTTOM INFO */}
      <section className="border-t py-10">

        <div className="flex flex-col justify-between gap-4 text-xs text-gray-400 sm:flex-row">

          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              Santri Management System
            </span>
          </div>

          <span>
            T.A. 2026/2027
          </span>

        </div>

      </section>

    </div>
  )
}

export default SantriLayout