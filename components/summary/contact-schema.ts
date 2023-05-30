import * as yup from "yup";

export const CreateContactSchema = yup.object().shape({
  fullName: yup.string().required("Este campo es requerido."),
  cellphone: yup.string().required("Este campo es requerido."),
  address: yup.string().required("Este campo es requerido."),
  email: yup
    .string()
    .email("No es un email valido")
    .required("Este campo es requerido."),
  terms: yup.boolean().oneOf([true], "Debe aceptar los terminos").required(),
});

export const UpdateContactSchema = yup.object().shape({
  fullName: yup.string(),
  cellphone: yup.string(),
  email: yup.string().email(),
});
