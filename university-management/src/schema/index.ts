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

// Type derived from the Zod schema
export type AddressParams = z.infer<typeof AddressSchema>;