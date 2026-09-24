import React from "react"
import { Link, useNavigate } from "react-router"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

function SignUp() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/admin")
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

          <h1 className="mt-2 text-3xl font-bold">
            Create account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Buat akun untuk menggunakan management system.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name
            </Label>

            <Input
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">
              Confirm Password
            </Label>

            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="font-medium text-black underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp