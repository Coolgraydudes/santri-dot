import { create } from "zustand"
import { persist } from "zustand/middleware"

const MOCK_USERS = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123456",
    name: "budi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "123456",
    name: "siti",
    role: "user",
  },
]

export const UseAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      error: null,

      // akun hasil Sign Up (ikut tersimpan di localStorage)
      registeredUsers: [],

      login: (email, password) => {
        // cari di akun bawaan DAN akun hasil sign up
        const allUsers = [...MOCK_USERS, ...get().registeredUsers]

        const foundUser = allUsers.find(
          (u) => u.email === email && u.password === password
        )

        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
              className: foundUser.className ?? "-",
              nis: foundUser.nis ?? "-",
            },
            error: null,
          })

          return true
        } else {
          set({
            error: "Email atau password salah",
          })

          return false
        }
      },

      // dipanggil dari halaman Sign Up
      // return true kalau berhasil, false kalau email sudah dipakai
      signUp: ({ name, email, password, className, nis }) => {
        const allUsers = [...MOCK_USERS, ...get().registeredUsers]

        const emailSudahAda = allUsers.some((u) => u.email === email)

        if (emailSudahAda) {
          return false
        }

        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password,
          role: "user",
          className: className || "-",
          nis: nis || "-",
        }

        set({
          registeredUsers: [...get().registeredUsers, newUser],
          error: null,
        })

        return true
      },

      // dipanggil dari halaman Profile saat Save Changes
      updateUser: (data) => {
        const currentUser = get().user

        if (!currentUser) return

        set({
          // update user yang sedang login
          user: { ...currentUser, ...data },

          // update juga datanya di daftar akun hasil sign up
          registeredUsers: get().registeredUsers.map((u) =>
            u.id === currentUser.id ? { ...u, ...data } : u
          ),
        })
      },

      logout: () => {
        set({
          user: null,
          error: null,
        })
      },
    }),
    {
      name: "auth-Store",
    }
  )
)