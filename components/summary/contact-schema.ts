import { z } from "zod";

const phoneRegex = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
);

export const CreateContactSchemaZ = z.object({
  fullName: z.string().min(4).max(40),
  cellphone: z.string().regex(phoneRegex, "¡El número de móvil es invalido!"),
  address: z.string().min(4).max(40),
  email: z.string().email(),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "*Debes aceptar nuestros términos y condiciones",
    }),
  }),
});

export const UpdateContactSchemaZ = z.object({
  fullName: z.string().min(4).max(40),
  cellphone: z.string().regex(phoneRegex, "¡El número de móvil es invalido!"),
  address: z.string().min(4).max(40),
  email: z.string().email(),
});
