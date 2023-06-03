"use client";
import { ContactResponse } from "@/models/Contact/Contact.strapi";
import { useRef } from "react";
import toast from "react-hot-toast";
import { QuoteBody } from "./QuoteBody";
import { QuoteFooter } from "./QuoteFooter";
import { QuoteHead } from "./QuoteHead";
import { useReactToPrint } from "react-to-print";
import { Printer } from "lucide-react";

export const QuoteDocument = ({
  contactData,
}: {
  contactData: ContactResponse;
}) => {
  const subtotal = contactData.data.attributes.windowsQuote.reduce(
    (acc, item) => {
      return (acc += item.priceCOP * item.quantity);
    },
    0,
  );

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Arqustik-Quote`,
    onAfterPrint: () => {
      // toast.success("Presupuesto generado correctamente.");
    },
  });
  return (
    <div className="px-4 mx-auto text-xl max-w-7xl print:text-lg" ref={componentRef}>
      <div className="flex justify-end mb-4 print:hidden">
        <button onClick={handlePrint} className="btn btn-outline">
          <Printer /> Imprimir
        </button>
      </div>
      <QuoteHead
        fullName={contactData.data.attributes.fullName}
        cellphone={contactData.data.attributes.cellphone}
        address={contactData.data.attributes.address}
        email={contactData.data.attributes.email}
      />
      <QuoteBody
        windowsQuote={contactData.data.attributes.windowsQuote}
        subtotal={subtotal}
      />
      <QuoteFooter subtotal={subtotal} />
    </div>
  );
};
