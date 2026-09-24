import React from "react";

import { Button } from "../components/ui/button";

function Home() {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:min-h-[calc(100vh-80px)] lg:py-24">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-400">
              SANTRI / 2026
            </p>

            <p className="text-sm text-gray-400">Student Portal</p>
          </div>

          <div className="relative z-10 mt-20 lg:mt-0">
            <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
              Ruang pribadi untuk melihat aktivitas belajar, kehadiran, jurnal,
              dan ujian dalam satu tempat.
            </p>

            <h1 className="max-w-6xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              KNOW
              <br />
              YOUR
              <br />
              <span className="text-gray-300">PROGRESS.</span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-7">
                View Activity
              </Button>

              <p className="max-w-xs text-sm leading-5 text-gray-400">
                Semua aktivitas belajar kamu tersusun dalam satu sistem.
              </p>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border-[70px] border-gray-100 lg:block" />

          <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-black lg:block" />

          <div className="mt-20 flex items-end justify-between border-t pt-6 lg:mt-0">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Your learning space
            </p>

            <p className="text-xs text-gray-400">01 — 05</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Your activity
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bukan sekadar
              <br />
              melihat data.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-lg leading-8 text-gray-500">
              Gunakan sistem ini untuk melihat kehadiran, membaca jurnal
              pembelajaran, mengerjakan ujian, dan mengetahui perkembangan
              aktivitas kamu sebagai santri.
            </p>
          </div>
        </div>
      </section>

      {/* BIG NUMBER */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-16 lg:flex-row">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Your attendance
              </p>

              <p className="mt-6 text-[clamp(6rem,15vw,13rem)] font-bold leading-none tracking-[-0.08em]">
                98%
              </p>

              <p className="mt-4 text-gray-500">attendance this month</p>
            </div>

            <div className="max-w-md self-end">
              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Present</span>

                  <span>24</span>
                </div>
              </div>

              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Permission</span>

                  <span>1</span>
                </div>
              </div>

              <div className="border-y border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>

                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                What you can do
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Your.
                <br />
                Workspace.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Tiga aktivitas utama untuk membantu kamu mengikuti proses
              pembelajaran.
            </p>
          </div>

          <div className="mt-20 grid gap-0 border-t md:grid-cols-3">
            <div className="border-b py-10 md:border-r md:px-8 md:pl-0">
              <p className="text-sm text-gray-400">01</p>

              <h3 className="mt-16 text-2xl font-semibold">Absensi</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Lihat riwayat kehadiran dan status absensi kamu.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View attendance
                </Button>
              </div>
            </div>

            <div className="border-b py-10 md:border-r md:px-8">
              <p className="text-sm text-gray-400">02</p>

              <h3 className="mt-16 text-2xl font-semibold">Jurnal</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Lihat catatan dan aktivitas pembelajaran yang telah dilakukan.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View journal
                </Button>
              </div>
            </div>

            <div className="py-10 md:px-8 md:pr-0">
              <p className="text-sm text-gray-400">03</p>

              <h3 className="mt-16 text-2xl font-semibold">Ujian</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Kerjakan ujian dan evaluasi pembelajaran yang tersedia.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View exams
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Keep learning
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Keep track of
              <br />
              your progress.
            </h2>

            <Button size="lg" className="h-14 rounded-full px-8">
              View Activity
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;