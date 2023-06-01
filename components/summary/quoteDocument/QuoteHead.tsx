import Image from "next/image";

export const QuoteHead = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Image
          src="/assets/images/logo-arqustik-300x206.png"
          width={150}
          height={103}
          alt="Arqustik Logo"
        />
        <div>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="my-4 divider" />
      <div>
        <div className="grid max-w-xs grid-cols-2 my-4">
          <div className="">Nombre:</div>
          <div>Andres Parra</div>
          <div>Email:</div>
          <div>andeveling@gmail.com</div>
          <div>Celular:</div>
          <div>300 774 3602</div>
        </div>
        <div className="py-2">
          <p className="text-justify">
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
