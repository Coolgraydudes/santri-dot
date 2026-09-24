import { create } from "zustand"
import { persist } from "zustand/middleware"

const MOCK_UESRS = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123",
    name: "budi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "123",
    name: "siti",
    role: "user",
  },
]

export const UseAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,

      login: (email, password) => {
        const FoundUser = MOCK_UESRS.find(
          (u) => u.email == email && u.password == password
        )

        if (FoundUser) {
          set({
            user: {
              id: FoundUser.id,
              email: FoundUser.email,
              name: FoundUser.name,
              role: FoundUser.role,
            },
            error: null,
          })

          return true
        } else {
          set({
            error: "Email Atau pass salah",
          })

          return false
        }
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