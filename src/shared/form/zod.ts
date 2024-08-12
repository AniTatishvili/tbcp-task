import { z } from "zod";

// export const FormSchema = z.object({
//   username: z.string().min(4, { message: "Username must be at least 4 characters" }).max(8, { message: "Username must be at most 8 characters" }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters" }),
//   email: z.string().email({ message: "Invalid email address" }),
// });

export const stepSchemas = [
  z.object({ username: z.string().min(4, "Username is required") }),
  z.object({ password: z.string().min(6, "Password must be at least 6 characters") }),
  z.object({ email: z.string().email("Invalid email address") }),
];

export type StepSchema = z.infer<(typeof stepSchemas)[number]>;
