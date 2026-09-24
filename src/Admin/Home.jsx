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

            <p className="text-sm text-gray-400">Management System</p>
          </div>

          <div className="relative z-10 mt-20 lg:mt-0">
            <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
              Sebuah ruang digital untuk mengelola, memantau, dan memahami
              perkembangan setiap santri.
            </p>

            <h1 className="max-w-6xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              KNOW
              <br />
              YOUR
              <br />
              <span className="text-gray-300">SANTRI.</span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full px-7">
                Explore System
              </Button>

              <p className="max-w-xs text-sm leading-5 text-gray-400">
                Data, nilai, dan kehadiran dalam satu sistem sederhana.
              </p>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full border-[70px] border-gray-100 lg:block" />

          <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-black lg:block" />

          <div className="mt-20 flex items-end justify-between border-t pt-6 lg:mt-0">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Scroll to explore
            </p>

            <p className="text-xs text-gray-400">01 — 04</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              The idea
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bukan sekadar
              <br />
              menyimpan data.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-lg text-lg leading-8 text-gray-500">
              Sistem ini dibuat untuk memberikan gambaran yang lebih jelas
              mengenai santri. Mulai dari informasi dasar hingga perkembangan
              akademik dan kehadiran.
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
                Currently managing
              </p>

              <p className="mt-6 text-[clamp(6rem,15vw,13rem)] font-bold leading-none tracking-[-0.08em]">
                128
              </p>

              <p className="mt-4 text-gray-500">registered students</p>
            </div>

            <div className="max-w-md self-end">
              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Students</span>

                  <span>128</span>
                </div>
              </div>

              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Attendance</span>

                  <span>94%</span>
                </div>
              </div>

              <div className="border-y border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">System</span>

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
                Everything.
                <br />
                In one place.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Tiga bagian utama yang membantu administrasi santri tetap
              sederhana dan terorganisir.
            </p>
          </div>

          <div className="mt-20 grid gap-0 border-t md:grid-cols-3">
            <div className="border-b py-10 md:border-r md:px-8 md:pl-0">
              <p className="text-sm text-gray-400">01</p>

              <h3 className="mt-16 text-2xl font-semibold">Santri</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Informasi setiap santri tersusun dengan rapi dan mudah
                ditemukan.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View students
                </Button>
              </div>
            </div>

            <div className="border-b py-10 md:border-r md:px-8">
              <p className="text-sm text-gray-400">02</p>

              <h3 className="mt-16 text-2xl font-semibold">Nilai</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Pantau perkembangan akademik tanpa harus mencari di banyak
                tempat.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View grades
                </Button>
              </div>
            </div>

            <div className="py-10 md:px-8 md:pr-0">
              <p className="text-sm text-gray-400">03</p>

              <h3 className="mt-16 text-2xl font-semibold">Absensi</h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                Lihat kehadiran dan aktivitas santri secara lebih terstruktur.
              </p>

              <div className="mt-10">
                <Button variant="outline" className="rounded-full">
                  View attendance
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
            Start here
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Ready to manage
              <br />
              your students?
            </h2>

            <Button size="lg" className="h-14 rounded-full px-8">
              Go to Santri
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;