import { ContactI } from "@/models/Contact/Contact.type";
import Image from "next/image";

export const QuoteHead = ({
  fullName,
  address,
  cellphone,
  email,
}: Omit<ContactI, "windowsQuote">) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Image
          src="/assets/images/logo-arqustik-300x206.png"
          width={150}
          height={103}
          alt="Arqustik Logo"
        />
        <p className="text-2xl text-gray-500">Cotización</p>

        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <div className="my-4 divider" />
      <div>
        <div className="grid max-w-xs grid-cols-2 my-4">
          <div className="">Nombre:</div>
          <div>{fullName}</div>
          <div>Dirección:</div>
          <div>{address}</div>
          <div>Correo:</div>
          <div>{email}</div>
          <div>Celular:</div>
          <div>{cellphone}</div>
        </div>
        <div className="py-2">
          <p className="text-left">
            De acuerdo a sus indicaciones, le presentamos la oferta de productos
            que solicitó. Agradecemos la confianza depositada en nuestra
            compañía y le invitamos a leer el contenido de esta propuesta.
            Quedamos a su disposición para aclarar cualquier inquietud y a la
            espera de una respuesta positiva que nos convierta en su aliado en
            el proceso.
          </p>
        </div>
      </div>
    </div>
  );
};
