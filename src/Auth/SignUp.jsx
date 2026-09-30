import React from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { UseAuthStore } from "./store.jsx/UseAuthStore"

// border merah kalau field error
const errorClass = (hasError) =>
  hasError ? "border-red-500 focus-visible:ring-red-300" : ""

function SignUp() {
  const navigate = useNavigate()
  const signUp = UseAuthStore((state) => state.signUp)

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      className: "",
      nis: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  // pantau password, dipakai untuk mengecek confirm password
  const password = watch("password")

  // data = { name, email, password, confirmPassword }
  const onSubmit = (data) => {
    const isSuccess = signUp({
      name: data.name,
      className: data.className,
      nis: data.nis,
      email: data.email,
      password: data.password,
    })

    if (!isSuccess) {
      setError("email", { message: "Email sudah terdaftar" })
      return
    }

    navigate("/sign-in")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-8">
        <div className="mb-8">
          <Link to="/" className="text-xl font-bold">
            santri.
          </Link>

          <p className="mt-8 text-sm uppercase tracking-widest text-gray-400">
            Get started
          </p>

          <h1 className="mt-2 text-3xl font-bold">Create account</h1>

          <p className="mt-2 text-sm text-gray-500">
            Buat akun untuk menggunakan management system.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className={errorClass(errors.name)}
              {...register("name", {
                required: "Nama wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama minimal 3 karakter",
                },
              })}
            />

            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="class-name">Class</Label>

            <Input
              id="class-name"
              type="text"
              placeholder="Contoh: IX A"
              className={errorClass(errors.className)}
              {...register("className", {
                required: "Kelas wajib diisi",
              })}
            />

            {errors.className && (
              <p className="text-sm text-red-500">
                {errors.className.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="nis">NIS</Label>

            <Input
              id="nis"
              type="text"
              inputMode="numeric"
              placeholder="Contoh: 20260001"
              className={errorClass(errors.nis)}
              {...register("nis", {
                required: "NIS wajib diisi",
                pattern: {
                  value: /^\d+$/,
                  message: "NIS harus berupa angka",
                },
              })}
            />

            {errors.nis && (
              <p className="text-sm text-red-500">{errors.nis.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={errorClass(errors.email)}
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
            />

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className={errorClass(errors.password)}
              {...register("password", {
                required: "Password wajib diisi",
                minLength: {
                  value: 6,
                  message: "Password minimal 6 karakter",
                },
              })}
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>

            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              className={errorClass(errors.confirmPassword)}
              {...register("confirmPassword", {
                required: "Konfirmasi password wajib diisi",
                validate: (value) =>
                  value === password || "Password tidak sama",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={!isValid} className="w-full">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/sign-in" className="font-medium text-black underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp