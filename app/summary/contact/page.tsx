"use client";
import Heading from "@/components/shared/heading";
import { CreateContactSchema } from "@/components/summary/contact-schema";
import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { selectQuoteItems } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { ContactI } from "@/models/Contact/Contact.type";
import { yupResolver } from "@hookform/resolvers/yup";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface CreateContactI extends ContactI {
  terms: boolean;
}

export default function ContactPage() {
  const quote = useAppSelector(selectQuoteItems);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateContactI>({
    resolver: yupResolver(CreateContactSchema),
    defaultValues: { windowsQuote: quote },
  });
  const onSubmit: SubmitHandler<CreateContactI> = async ({
    fullName,
    cellphone,
    email,
    address,
    windowsQuote,
  }) => {
    const data = {
      contact: { fullName, cellphone, email, address, windowsQuote },
    };
    toast.promise(
      fetch("/api/contact/create-contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => console.log(res)),
      {
        loading: "Creando...",
        success: <b>¡Cotización creada!</b>,
        error: <b>No se pudo crear la cotización</b>,
      },
    );
  };

  return (
    <div className="max-w-sm mx-auto text-center">
      <Heading as="h2">Información de contacto</Heading>
      {/* <span>{JSON.stringify(quote)}</span> */}
      <p
        className="text-center text-gray-500 opacity-0 animate-fade-up md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Complete sus datos y se le enviará una cotización por correo
        electrónico.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="py-4 form-control">
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
            <span className="label-text">Tu numero de celular</span>
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
            <span className="label-text">Tu dirección</span>
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
            <span className="label-text">Tu email</span>
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

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              Estoy de acuerdo con los Términos y condiciones de Arqustik SAS
            </span>
            <input
              type="checkbox"
              className="checkbox"
              {...register("terms")}
            />
          </label>
          <label className="label">
            <span className="pt-1 text-xs label-text-alt text-error">
              {errors.terms?.message}
            </span>
          </label>
        </div>

        <button type="submit" className="btn">
          enviar
        </button>
      </form>
    </div>
  );
}
