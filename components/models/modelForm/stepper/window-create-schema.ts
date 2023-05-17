import * as yup from "yup";

export const CreateModelWindowSchema = yup.object().shape({
  location: yup.string().required("Este campo es requerido"),
  width: yup
    .number()
    .min(300)
    .max(2000)
    .required("Este campo es requerido")
    .typeError("El valor debe ser un numero"),
  height: yup
    .number()
    .min(300)
    .max(2000)
    .required("Este campo es requerido")
    .typeError("El valor debe ser un numero"),
  cant: yup
    .number()
    .min(1, "La cantidad minima debe ser 1")
    .positive("Este valor debe ser positivo")
    .required("Este campo es requerido")
    .typeError("El valor debe ser un numero"),
});
