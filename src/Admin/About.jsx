function About() {
  return (
    <div className="mx-auto max-w-6xl">

      {/* HEADER */}
      <section className="border-b pb-10">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          About the system
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Simple system.
          <br />
          Better management.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500">
          Santri Management System adalah aplikasi yang dibuat
          untuk membantu pengelolaan data santri secara lebih
          sederhana, terstruktur, dan mudah digunakan.
        </p>
      </section>

      {/* ABOUT */}
      <section className="grid gap-12 border-b py-16 md:grid-cols-2 md:py-20">

        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Our purpose
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Mengelola data tanpa ribet.
          </h2>
        </div>

        <div>
          <p className="leading-7 text-gray-500">
            Sistem ini menyediakan beberapa fitur utama untuk
            membantu administrator dalam mengelola informasi
            santri, melihat nilai akademik, serta memantau
            kehadiran santri.
          </p>

          <p className="mt-5 leading-7 text-gray-500">
            Dengan semua informasi berada dalam satu tempat,
            proses administrasi dapat dilakukan dengan lebih
            terorganisir dan efisien.
          </p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20">

        <p className="text-sm uppercase tracking-widest text-gray-400">
          What we provide
        </p>

        <div className="mt-10 grid border-t md:grid-cols-3">

          <div className="border-b py-8 md:border-r md:pr-8">
            <p className="text-sm text-gray-400">
              01
            </p>

            <h3 className="mt-12 text-xl font-semibold">
              Data Santri
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Mengelola informasi dan data setiap santri
              dengan lebih terstruktur.
            </p>
          </div>

          <div className="border-b py-8 md:border-r md:px-8">
            <p className="text-sm text-gray-400">
              02
            </p>

            <h3 className="mt-12 text-xl font-semibold">
              Nilai
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Membantu memantau perkembangan akademik
              santri dalam satu sistem.
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <p className="text-sm text-gray-400">
              03
            </p>

            <h3 className="mt-12 text-xl font-semibold">
              Absensi
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Menampilkan informasi kehadiran santri
              secara lebih mudah dan terorganisir.
            </p>
          </div>

        </div>

      </section>

      {/* BOTTOM */}
      <section className="border-t py-16">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Santri Management System
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Built for simplicity.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            Dibangun dengan React dan Tailwind CSS untuk
            menghasilkan antarmuka yang sederhana, modern,
            dan responsif.
          </p>

        </div>

      </section>

    </div>
  )
}

export default About