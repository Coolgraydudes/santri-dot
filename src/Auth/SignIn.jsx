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

function SignIn() {
  const navigate = useNavigate()

  const login = UseAuthStore((state) => state.login)
  const error = UseAuthStore((state) => state.error)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // data = { email, password } dari react-hook-form
  const onSubmit = (data) => {
    const isSuccess = login(data.email, data.password)

    if (isSuccess) {
      const currentUser = UseAuthStore.getState().user

      if (currentUser.role === "admin") {
        navigate("/admin")
      } else if (currentUser.role === "user") {
        navigate("/user")
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-8">
        <div className="mb-8">
          <Link to="/" className="text-xl font-bold">
            santri.
          </Link>

          <p className="mt-8 text-sm uppercase tracking-widest text-gray-400">
            Welcome back
          </p>

          <h1 className="mt-2 text-3xl font-bold">Sign in</h1>

          <p className="mt-2 text-sm text-gray-500">
            Masuk untuk melanjutkan ke management system.
          </p>
        </div>

        {/* error dari store (email/password salah) */}
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
              })}
            />

            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/sign-up" className="font-medium text-black underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn