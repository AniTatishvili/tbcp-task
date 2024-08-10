import { z } from "zod";

export const usernameSchema = z.object({
  username: z.string().min(4, { message: "Username must be at least 4 characters" }).max(8, { message: "Username must be at most 8 characters" }),
});

export const passwordSchema = z.object({
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
