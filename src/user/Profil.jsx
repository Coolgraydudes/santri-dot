import React, { useState } from "react";

import { Button } from "../components/ui/button";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "Izzam",
    className: "IX A",
    nis: "20260001",
    email: "santri@example.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEditing(false);
  };

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-400">
              SANTRI / ACCOUNT
            </p>

            <p className="text-sm text-gray-400">Profile</p>
          </div>

          <div className="mt-20">
            <p className="mb-6 text-sm leading-6 text-gray-500">
              Informasi pribadi dan data akun santri.
            </p>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
              KNOW
              <br />
              YOUR
              <br />
              <span className="text-gray-300">IDENTITY.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Personal information
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Your
              <br />
              information.
            </h2>
          </div>

          <div>
            {isEditing ? (
              /* EDIT FORM */
              <form onSubmit={handleSubmit} className="border-t border-black">
                {/* NAME */}
                <div className="border-b py-6">
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-gray-300 pb-2 font-medium outline-none focus:border-black"
                  />
                </div>

                {/* CLASS */}
                <div className="border-b py-6">
                  <label
                    htmlFor="className"
                    className="text-sm text-gray-400"
                  >
                    Class
                  </label>

                  <input
                    id="className"
                    type="text"
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-gray-300 pb-2 font-medium outline-none focus:border-black"
                  />
                </div>

                {/* NIS */}
                <div className="border-b py-6">
                  <label
                    htmlFor="nis"
                    className="text-sm text-gray-400"
                  >
                    NIS
                  </label>

                  <input
                    id="nis"
                    type="text"
                    name="nis"
                    value={form.nis}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-gray-300 pb-2 font-medium outline-none focus:border-black"
                  />
                </div>

                {/* EMAIL */}
                <div className="border-b py-6">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-gray-300 pb-2 font-medium outline-none focus:border-black"
                  />
                </div>

                {/* ACTION */}
                <div className="mt-8 flex gap-3">
                  <Button
                    type="submit"
                    className="rounded-full px-7"
                  >
                    Save Changes
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full px-7"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              /* PROFILE DATA */
              <>
                <div className="border-t border-black">
                  {/* NAME */}
                  <div className="border-b py-6">
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Name</span>

                      <span className="text-right font-medium">
                        {form.name}
                      </span>
                    </div>
                  </div>

                  {/* CLASS */}
                  <div className="border-b py-6">
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Class</span>

                      <span className="text-right font-medium">
                        {form.className}
                      </span>
                    </div>
                  </div>

                  {/* NIS */}
                  <div className="border-b py-6">
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">NIS</span>

                      <span className="text-right font-medium">
                        {form.nis}
                      </span>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="border-b py-6">
                    <div className="flex justify-between gap-6">
                      <span className="text-gray-400">Email</span>

                      <span className="text-right font-medium">
                        {form.email}
                      </span>
                    </div>
                  </div>
                </div>

                {/* EDIT BUTTON */}
                <div className="mt-8">
                  <Button
                    className="rounded-full px-7"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-16 lg:flex-row">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Account status
              </p>

              <p className="mt-6 text-[clamp(5rem,12vw,10rem)] font-bold leading-none tracking-[-0.08em]">
                ACTIVE
              </p>
            </div>

            <div className="max-w-md self-end">
              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Role</span>

                  <span>Santri</span>
                </div>
              </div>

              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Class</span>

                  <span>{form.className}</span>
                </div>
              </div>

              <div className="border-y border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Account</span>

                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Your account
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Keep your
              <br />
              information updated.
            </h2>

            <Button
              size="lg"
              className="h-14 rounded-full px-8"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;