import { currencyCOPFormatter } from "@/lib/utilities/currencyFormatter";

export const QuoteFooter = ({ subtotal }: { subtotal: number }) => {
  return (
    <div>
      <p className="mt-6 mb-4 text-2xl text-center text-gray-500">
        Términos y Condiciones
      </p>
      <div className="my-2 ">
        <p className="font-bold">Forma de Pago: </p>

        <div className="grid max-w-md grid-cols-2">
          <p>70% Anticipo.</p>
          <b>{currencyCOPFormatter(subtotal * 0.7)}</b>
        </div>

        <div className="grid max-w-md grid-cols-2">
          <p>30% Avance de Obra.</p>
          <b>{currencyCOPFormatter(subtotal * 0.3)}</b>
        </div>

        <p className="font-bold">Tiempo de entrega: </p>
        <span>
          A partir de 45 Días hábiles después de realizado el anticipo y
          enviadas las medidas definitivas de fabricación (acta de vanos)
        </span>
        <p className="font-bold">Validez de la oferta:</p>
        <span>5 días</span>
      </div>
      <div className="mt-5 ">
        <p className="font-bold">Notas:</p>
        <ul className="col-span-2">
          <li>
            Nuestro producto tiene garantía 10 años en acabado blanco y 6 meses
            en accesorios.
          </li>
          <li>No incluye trabajos de mampostería y pintura.</li>
          <li>No incluye el transporte.</li>
          <li>No incluye instalación</li>
          <li>No lleva poliuretano</li>
          <li>No lleva Protección</li>
          <li>No lleva silicona</li>
          <li>Los vidrios no tienen garantía una vez se hayan entregado.</li>
          <li>
            Para el proceso de fabricación es necesario tener definido sillar y
            acabado de vano (sobre piso, estucos, repello, etc.) para ser
            precisos en las medidas del producto final.
          </li>
          <li>
            Se realizará acompañamiento técnico durante el suministro e
            instalación del material contratado y al final de la entrega se hará
            una revisión y corrección de aquellos detalles atribuibles a la
            fabricación e instalación del producto. Este no incluye daños por
            agentes externos como daños causados por contratistas, durante la
            limpieza o ausencia de accesorios ya entregados.
          </li>
        </ul>
      </div>
    </div>
  );
};
