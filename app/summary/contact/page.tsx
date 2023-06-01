"use client";
import Heading from "@/components/shared/heading";
import { CreateContactSchemaZ } from "@/components/summary/contact-schema";
import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { useCreateContactMutation } from "@/lib/redux/features/contact/contactApiSlice";
import { selectQuoteItems } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { CreateContactI } from "@/models/Contact/Contact.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { QuoteDocument } from "@/components/summary/quoteDocument/QuoteDocument";

export default function ContactPage() {
  const quote = useAppSelector(selectQuoteItems);
  const [createContact, { isLoading }] = useCreateContactMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateContactI>({
    resolver: zodResolver(CreateContactSchemaZ),
    defaultValues: { windowsQuote: quote },
  });
  const onSubmit: SubmitHandler<CreateContactI> = async ({
    fullName,
    cellphone,
    email,
    address,
  }) => {
    const data = {
      contact: { fullName, cellphone, email, address, windowsQuote: quote },
    };
    toast.promise(
      createContact(data).then(() => router.push("/")),
      {
        loading: "Creando...",
        success: <b>¡Cotización creada!</b>,
        error: <b>No se pudo crear la cotización</b>,
      },
    );
  };

  return (
    <>
      <div className="max-w-sm mx-auto text-center">
        <Heading as="h2">Información de contacto</Heading>
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
              <span className="label-text-alt">Requerido</span>
            </label>
            <input
              type="text"
              placeholder="Pepito Perez"
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
              <span className="label-text-alt">Requerido</span>
            </label>
            <input
              type="text"
              placeholder="300 123 456 789"
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
              <span className="label-text-alt">Requerido</span>
            </label>
            <input
              type="text"
              placeholder="Cra 1 # 2-3, Cali, Colombia"
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
              <span className="label-text-alt">Requerido</span>
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

          <button
            type="submit"
            className={`btn ${isLoading ? "btn-outline loading" : ``}`}
          >
            {isLoading ? "loading" : "enviar"}
          </button>
        </form>
      </div>
      {/* Cotizacion */}
      <QuoteDocument />
    </>
  );
}
