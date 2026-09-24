import React from "react"
import { Link } from "react-router"
import { ChevronRight, School } from "lucide-react"

function SantriCard({
  id,
  name,
  classroom,
  status = "Aktif",
}) {
  const isAktif = status === "Aktif"

  return (
    <Link
      to={`/admin/santri/list/${id}`}
      className="block"
    >
      <div className="group relative border-t border-black bg-white px-1 py-6 transition-colors hover:bg-gray-50">

        {/* TOP */}
        <div className="flex items-start justify-between gap-6">

          <div className="flex min-w-0 items-start gap-5">

            {/* BIG NUMBER */}
            <span className="pt-1 text-xs font-medium tracking-[0.15em] text-gray-300">
              {id.toString().padStart(2, "0")}
            </span>

            {/* STUDENT */}
            <div className="min-w-0">

              <h3 className="truncate text-xl font-semibold tracking-tight text-black md:text-2xl">
                {name}
              </h3>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Student ID — {id.toString().padStart(3, "0")}
              </p>

            </div>

          </div>

          {/* ARROW */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-gray-300 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">

            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex items-end justify-between">

          <div className="flex items-center gap-2 text-xs text-gray-400">

            <School className="h-3.5 w-3.5" />

            <span>
              Kelas {classroom}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAktif
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            />

            <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
              {status}
            </span>

          </div>

        </div>

        {/* HOVER LINE */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />

      </div>
    </Link>
  )
}

export default SantriCard