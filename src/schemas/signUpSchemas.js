import { z } from "zod"

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Nama wajib diisi" }).min(3, { message: "Nama minimal 3 karakter" }),
  className: z.string().min(1, { message: "Kelas wajib diisi" }),
  nis: z.string().min(1, { message: "NIS wajib diisi" }).regex(/^\d+$/, { message: "NIS harus berupa angka" }),
  email: z.string().min(1, { message: "Email wajib diisi" }).email({ message: "Format email tidak valid" }),
  password: z.string().min(1, { message: "Password wajib diisi" }).min(6, { message: "Password minimal 6 karakter" }),
  confirmPassword: z.string().min(1, { message: "Konfirmasi password wajib diisi" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"],
})