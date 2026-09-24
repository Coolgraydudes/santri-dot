import React from "react";

import { Button } from "../components/ui/button";

function Ujian() {
  const exams = [
    {
      id: "01",
      title: "Ujian Tauhid",
      subject: "Tauhid IX A",
      date: "Sen, 22 Sep 2026",
      questions: 20,
      status: "Available",
    },
    {
      id: "02",
      title: "Ujian Fiqih",
      subject: "Fiqih IX A",
      date: "Sel, 23 Sep 2026",
      questions: 25,
      status: "Available",
    },
    {
      id: "03",
      title: "Ujian Bahasa Arab",
      subject: "Bahasa Arab IX A",
      date: "Rab, 24 Sep 2026",
      questions: 30,
      status: "Upcoming",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-400">
              SANTRI / EVALUATION
            </p>

            <p className="text-sm text-gray-400">Examination</p>
          </div>

          <div className="relative z-10 mt-20">
            <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
              Kerjakan evaluasi pembelajaran yang telah disiapkan untuk kamu.
            </p>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              TEST
              <br />
              YOUR
              <br />
              <span className="text-gray-300">KNOWLEDGE.</span>
            </h1>
          </div>

          <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border-[60px] border-gray-100 lg:block" />
        </div>
      </section>

      {/* AVAILABLE EXAMS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Available exams
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Ready.
                <br />
                To begin?
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              Pastikan kamu sudah siap sebelum memulai ujian.
            </p>
          </div>

          <div className="mt-20 border-t">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col gap-6 border-b py-8 md:flex-row md:items-center"
              >
                <p className="text-4xl font-bold tracking-[-0.05em] text-gray-200">
                  {exam.id}
                </p>

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {exam.subject}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {exam.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {exam.date} · {exam.questions} questions
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <p className="text-sm text-gray-500">{exam.status}</p>

                  <Button className="rounded-full px-6">
                    Start
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLACK INFO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Before you start
              </p>

              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
                Focus.
                <br />
                Read.
                <br />
                Answer.
              </h2>
            </div>

            <div className="self-end">
              <div className="border-t border-gray-800 py-6">
                <p className="text-gray-500">
                  Baca setiap pertanyaan dengan teliti.
                </p>
              </div>

              <div className="border-t border-gray-800 py-6">
                <p className="text-gray-500">
                  Pastikan jawaban sudah benar sebelum dikirim.
                </p>
              </div>

              <div className="border-y border-gray-800 py-6">
                <p className="text-gray-500">
                  Jangan keluar dari halaman selama ujian berlangsung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ujian;