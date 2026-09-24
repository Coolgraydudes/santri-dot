import React from "react";

import { Button } from "../components/ui/button";

function Absensi() {
  const attendance = [
    {
      id: "01",
      subject: "Tauhid IX A",
      date: "Sen, 22 Sep 2026",
      status: "Hadir",
    },
    {
      id: "02",
      subject: "Fiqih IX A",
      date: "Sen, 22 Sep 2026",
      status: "Hadir",
    },
    {
      id: "03",
      subject: "Bahasa Arab IX A",
      date: "Sab, 20 Sep 2026",
      status: "Hadir",
    },
    {
      id: "04",
      subject: "Aqidah IX A",
      date: "Jum, 19 Sep 2026",
      status: "Hadir",
    },
    {
      id: "05",
      subject: "Matematika IX A",
      date: "Kam, 18 Sep 2026",
      status: "Izin",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-400">
              SANTRI / ACTIVITY
            </p>

            <p className="text-sm text-gray-400">Attendance</p>
          </div>

          <div className="mt-20">
            <p className="mb-6 text-sm leading-6 text-gray-500">
              Riwayat kehadiran kamu selama mengikuti kegiatan pembelajaran.
            </p>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              YOUR
              <br />
              <span className="text-gray-300">ATTENDANCE.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="grid gap-16 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Attendance
              </p>

              <p className="mt-5 text-7xl font-bold tracking-[-0.07em]">
                98%
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Present
              </p>

              <p className="mt-5 text-7xl font-bold tracking-[-0.07em]">
                24
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Permission
              </p>

              <p className="mt-5 text-7xl font-bold tracking-[-0.07em]">
                01
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Attendance history
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Recent.
                <br />
                Attendance.
              </h2>
            </div>

            <Button variant="outline" className="rounded-full">
              View all
            </Button>
          </div>

          <div className="mt-20 border-t">
            {attendance.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b py-7"
              >
                <p className="text-3xl font-bold tracking-[-0.05em] text-gray-200">
                  {item.id}
                </p>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.subject}</h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.date}
                  </p>
                </div>

                <p className="text-sm text-gray-500">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Absensi;