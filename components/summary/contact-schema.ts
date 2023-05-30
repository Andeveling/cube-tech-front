import { z } from "zod";

export const CreateContactSchemaZ = z.object({
  fullName: z.string().min(4).max(40),
  cellphone: z.string().min(4).max(20),
  address: z.string().min(4).max(40),
  email: z.string().email(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "*Debes aceptar nuestros terminos y condiciones" }),
  }),
});

export const UpdateContactSchemaZ = z.object({
  fullName: z.string().min(4).max(40),
  cellphone: z.string().min(4).max(20),
  address: z.string().min(4).max(40),
  email: z.string().email(),
});
