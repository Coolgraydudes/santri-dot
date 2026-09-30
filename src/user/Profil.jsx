import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../components/ui/button";
import { UseAuthStore } from "../Auth/store.jsx/UseAuthStore";

// Daftar field profil: dipakai untuk form edit maupun tampilan data
const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    rules: {
      required: "Nama wajib diisi",
      minLength: { value: 3, message: "Nama minimal 3 karakter" },
    },
  },
  {
    name: "className",
    label: "Class",
    type: "text",
    rules: { required: "Kelas wajib diisi" },
  },
  {
    name: "nis",
    label: "NIS",
    type: "text",
    rules: {
      required: "NIS wajib diisi",
      pattern: { value: /^\d+$/, message: "NIS harus berupa angka" },
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    rules: {
      required: "Email wajib diisi",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Format email tidak valid",
      },
    },
  },
];

function Profile() {
  // Data user yang sedang login (dari store yang sama dengan SignIn)
  const user = UseAuthStore((state) => state.user);
  const updateUser = UseAuthStore((state) => state.updateUser);

  const [isEditing, setIsEditing] = useState(false);

  // Data profil: awalnya diambil dari user yang login
  const [profile, setProfile] = useState({
    name: user?.name ?? "",
    className: user?.className ?? "-",
    nis: user?.nis ?? "-",
    email: user?.email ?? "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: profile,
  });

  // Klik Edit: isi form dengan data profil terbaru
  const startEdit = () => {
    reset(profile);
    setIsEditing(true);
  };

  // Klik Save: simpan data baru ke profil dan ke store
  const onSubmit = (data) => {
    setProfile(data);
    updateUser(data);
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
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="border-t border-black"
              >
                {fields.map((field) => (
                  <div key={field.name} className="border-b py-6">
                    <label
                      htmlFor={field.name}
                      className="text-sm text-gray-400"
                    >
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      type={field.type}
                      {...register(field.name, field.rules)}
                      className={`mt-2 w-full border-b pb-2 font-medium outline-none ${
                        errors[field.name]
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-black"
                      }`}
                    />

                    {errors[field.name] && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors[field.name].message}
                      </p>
                    )}
                  </div>
                ))}

                {/* ACTION */}
                <div className="mt-8 flex gap-3">
                  <Button
                    type="submit"
                    disabled={!isValid}
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
                  {fields.map((field) => (
                    <div key={field.name} className="border-b py-6">
                      <div className="flex justify-between gap-6">
                        <span className="text-gray-400">{field.label}</span>

                        <span className="text-right font-medium">
                          {profile[field.name]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* EDIT BUTTON */}
                <div className="mt-8">
                  <Button className="rounded-full px-7" onClick={startEdit}>
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

                  <span>{user?.role ?? "Santri"}</span>
                </div>
              </div>

              <div className="border-t border-gray-800 py-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Class</span>

                  <span>{profile.className}</span>
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
              onClick={startEdit}
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