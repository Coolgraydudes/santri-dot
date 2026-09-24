import React, { useState } from "react"
import SantriCard from "@/components/SantriCard"
import { Filter, ChevronDown, ChevronUp } from "lucide-react"

function SantriList() {
  const [showAll, setShowAll] = useState(false)

  const santries = [
    { id: 1, name: "Ahmad Fauzi", classroom: "3A", status: "Aktif" },
    { id: 2, name: "Siti Aisyah", classroom: "3B", status: "Aktif" },
    { id: 3, name: "Rizki Ramadan", classroom: "3C", status: "Izin" },
    { id: 4, name: "Muhammad Zaki", classroom: "3A", status: "Aktif" },
    { id: 5, name: "Nur Hidayah", classroom: "3B", status: "Aktif" },
    { id: 6, name: "Abdul Rahman", classroom: "3C", status: "Aktif" },
    { id: 7, name: "Fatimah Zahra", classroom: "3A", status: "Izin" },
    { id: 8, name: "Fahmi Akbar", classroom: "3B", status: "Aktif" },
    { id: 9, name: "Aulia Rahma", classroom: "3C", status: "Aktif" },
    { id: 10, name: "Ilham Maulana", classroom: "3A", status: "Aktif" },
    { id: 11, name: "Nabila Putri", classroom: "3B", status: "Izin" },
    { id: 12, name: "Yusuf Al Faruq", classroom: "3C", status: "Aktif" },
    { id: 13, name: "Hafiz Ramadhan", classroom: "3A", status: "Aktif" },
    { id: 14, name: "Aisyah Khairunnisa", classroom: "3B", status: "Aktif" },
    { id: 15, name: "Rafi Pratama", classroom: "3C", status: "Izin" },
    { id: 16, name: "Miftahul Huda", classroom: "3A", status: "Aktif" },
    { id: 17, name: "Salma Nursyifa", classroom: "3B", status: "Aktif" },
    { id: 18, name: "Daffa Al Ghifari", classroom: "3C", status: "Aktif" },
    { id: 19, name: "Maryam Hanifah", classroom: "3A", status: "Izin" },
    { id: 20, name: "Raihan Fadillah", classroom: "3B", status: "Aktif" },
    { id: 21, name: "Zahra Amelia", classroom: "3C", status: "Aktif" },
    { id: 22, name: "Fikri Ramadhan", classroom: "3A", status: "Aktif" },
    { id: 23, name: "Hana Safitri", classroom: "3B", status: "Izin" },
    { id: 24, name: "Arkan Syahputra", classroom: "3C", status: "Aktif" },
    { id: 25, name: "Khadijah Aulia", classroom: "3A", status: "Aktif" },
    { id: 26, name: "Bagas Maulana", classroom: "3B", status: "Aktif" },
    { id: 27, name: "Naufal Hakim", classroom: "3C", status: "Izin" },
    { id: 28, name: "Rania Fathimah", classroom: "3A", status: "Aktif" },
    { id: 29, name: "Faris Al Hakim", classroom: "3B", status: "Aktif" },
    { id: 30, name: "Amira Salsabila", classroom: "3C", status: "Aktif" },
  ]

  const visibleSantries = showAll
    ? santries
    : santries.slice(0, 9)

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">

        <div className="flex items-center gap-3">

          <h2 className="text-sm font-semibold tracking-tight">
            Daftar Santri
          </h2>

          <span className="text-[10px] font-mono text-gray-400">
            {santries.length}
          </span>

        </div>


        <button className="flex h-8 items-center gap-2 border border-transparent px-2.5 text-xs text-gray-400 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-black">

          <Filter className="h-3.5 w-3.5" />

          <span>
            Filter
          </span>

        </button>

      </div>


      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {visibleSantries.map((santri) => (

          <SantriCard
            key={santri.id}
            id={santri.id}
            name={santri.name}
            classroom={santri.classroom}
            status={santri.status}
          />

        ))}

      </div>


      {/* SHOW MORE / LESS */}
      {santries.length > 9 && (

        <div className="flex justify-center border-t border-gray-200 pt-6">

          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 border border-gray-200 px-5 py-2.5 text-xs font-medium text-gray-500 transition-colors hover:border-black hover:bg-black hover:text-white"
          >

            {showAll ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" />
                Show More
              </>
            )}

          </button>

        </div>

      )}

    </div>
  )
}

export default SantriList