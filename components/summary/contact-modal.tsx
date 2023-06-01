import { useCreateContactMutation } from "@/lib/redux/features/contact/contactApiSlice";
import { ContactI } from "@/models/Contact/Contact.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, X } from "lucide-react";
import { useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CreateContactSchemaZ } from "./contact-schema";

export const InterestedModal = () => {
  const [
    createContact,
    { isLoading, isSuccess, data: contactData, isError, error },
  ] = useCreateContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactI>({
    resolver: zodResolver(CreateContactSchemaZ),
  });
  const onSubmit: SubmitHandler<ContactI> = async ({
    fullName,
    cellphone,
    email,
    address,
  }) => {
    toast.promise(
      createContact({ data: { fullName, cellphone, email, address } }).then(
        () => reset(),
      ),
      {
        loading: "Creando...",
        success: <b>¡Cotización creada!</b>,
        error: <b>No se pudo crear la cotización</b>,
      },
    );
  };
  const contactModalId = useId();
  return (
    <div>
      <label htmlFor={contactModalId} className="btn">
        <Download size={25} className="mr-2" />
        Imprimir \ Descargar
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={contactModalId} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative modal-box">
          <label
            htmlFor={contactModalId}
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            <X size={25} />
          </label>
          <h3 className="text-lg font-bold">Informacion de contacto</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Tu nombre</span>
                <span className="label-text-alt">Incluir apellidos</span>
              </label>
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full input input-bordered"
                {...register("fullName")}
              />
              <label className="label">
                <span className="pt-1 text-xs label-text-alt text-error">
                  {errors.fullName?.message}
                </span>
              </label>
            </div>

            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Celular</span>
                <span className="label-text-alt">Conctato</span>
              </label>
              <input
                type="text"
                placeholder="Celular"
                className="w-full input input-bordered"
                {...register("cellphone")}
              />
              <label className="label">
                <span className="pt-1 text-xs label-text-alt text-error">
                  {errors.cellphone?.message}
                </span>
              </label>
            </div>

            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Direccion</span>
                <span className="label-text-alt">Conctato</span>
              </label>
              <input
                type="text"
                placeholder="cra 1 # 2-3"
                className="w-full input input-bordered"
                {...register("address")}
              />
              <label className="label">
                <span className="pt-1 text-xs label-text-alt text-error">
                  {errors.address?.message}
                </span>
              </label>
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Email</span>
                <span className="label-text-alt">Conctato</span>
              </label>
              <input
                type="email"
                placeholder="arqustik@mail.com"
                className="w-full input input-bordered"
                {...register("email")}
              />
              <label className="label">
                <span className="pt-1 text-xs label-text-alt text-error">
                  {errors.email?.message}
                </span>
              </label>
            </div>

            <button type="submit" className="btn">
              enviar
            </button>
          </form>
          {/* <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};
