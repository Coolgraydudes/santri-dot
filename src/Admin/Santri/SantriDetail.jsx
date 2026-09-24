import { Link, useParams } from "react-router"
import { ArrowLeft, School } from "lucide-react"

function SantriDetail() {
  const { santri_id } = useParams()

  return (
    <div className="space-y-12">

      {/* BACK */}
      <Link
        to="/admin/santri/list"
        className="inline-flex items-center gap-2 border border-black px-4 py-2.5 text-xs font-medium transition-colors hover:bg-black hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Kembali ke daftar santri
      </Link>


      {/* STUDENT HEADER */}
      <header className="border-t border-black pt-8">

        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          Detail Santri
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-black md:text-7xl">
          Ahmad Fauzi
        </h1>

        <p className="mt-3 font-mono text-xs text-gray-400">
          ID-{santri_id.padStart(3, "0")}
        </p>

      </header>


      {/* MAIN INFO */}
      <section className="border-y border-gray-200">

        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* KELAS */}
          <div className="border-b border-gray-200 py-7 md:border-b-0 md:border-r md:px-6">

            <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
              Kelas
            </p>

            <div className="mt-3 flex items-center gap-2">

              <School className="h-4 w-4 text-gray-400" />

              <span className="text-lg font-medium">
                3A
              </span>

            </div>

          </div>


          {/* STATUS */}
          <div className="border-b border-gray-200 py-7 md:border-b-0 md:border-r md:px-6">

            <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
              Status
            </p>

            <div className="mt-3 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="text-lg font-medium">
                Aktif
              </span>

            </div>

          </div>


          {/* TAHUN */}
          <div className="py-7 md:px-6">

            <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
              Tahun Ajaran
            </p>

            <p className="mt-3 text-lg font-medium">
              2026 / 2027
            </p>

          </div>

        </div>

      </section>


      {/* INFORMATION */}
      <section>

        <div className="border-t border-black pt-5">

          <h2 className="text-sm font-semibold">
            Informasi Santri
          </h2>

        </div>


        <div className="mt-6 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">

          <div className="flex items-center justify-between py-5">
            <span className="text-sm text-gray-500">
              Nama Lengkap
            </span>

            <span className="text-sm font-medium">
              Ahmad Fauzi
            </span>
          </div>


          <div className="flex items-center justify-between py-5">
            <span className="text-sm text-gray-500">
              Student ID
            </span>

            <span className="font-mono text-sm">
              ID-{santri_id.padStart(3, "0")}
            </span>
          </div>


          <div className="flex items-center justify-between py-5">
            <span className="text-sm text-gray-500">
              Kelas
            </span>

            <span className="text-sm font-medium">
              3A
            </span>
          </div>

        </div>

      </section>

    </div>
  )
}

export default SantriDetail