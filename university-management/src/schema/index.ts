import { z } from "zod";

// Zod schema for Address parameters
export const AddressSchema = z.object({
  id: z.union([z.string(), z.number()]),
  region: z.string().optional().default(""),
  city: z.string().optional().default(""),
  country: z.string().optional().default(""),
  roadNo: z.string().optional().default(""),
  postalCode: z.string().optional().default(""),
});

export const ContactSchema = z.object({
  id: z.union([z.string(), z.number()]),
  email: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  alternativePhone: z.string().optional().default(""),
  address: z.string().optional().default(""),
})

export const PersonSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  blood: z.string().optional().default(""),
  contact: z.string().optional().default(""),
})

export const UniPersonSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  department: z.string().optional().default(""),
  account: z.string().optional().default(""),
})

export const EmployeeSchema = PersonSchema.extend({
  id: z.string(),
  name: z.string(),
  employeeID: z.string(),
  salary: z.number(),
})

export const GuardianSchema = PersonSchema.extend({
  id: z.string(),
  name: z.string(),
  profession: z.string(),
  income: z.number(),
})

// Type derived from the Zod schema
export type AddressParams = z.infer<typeof AddressSchema>;
export type ContactParams = z.infer<typeof ContactSchema>;
export type PersonParams = z.infer<typeof PersonSchema>;
export type UniPersonParams = z.infer<typeof UniPersonSchema>;
export type EmployeeParams = z.infer<typeof EmployeeSchema>;
export type GuardianParams = z.infer<typeof GuardianSchema>;