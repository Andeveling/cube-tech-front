"use client";
import { useAppDispatch } from "@/lib/hooks/use-store-hooks";
import { clearContactInfo } from "@/lib/redux/features/contact/contactSlice";
import { resetQuote } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { ContactAttributes } from "@/models/Contact/Contact.strapi";
import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { Printer, Trash } from "lucide-react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { QuoteBody } from "./QuoteBody";
import { QuoteFooter } from "./QuoteFooter";
import { QuoteHead } from "./QuoteHead";

export const QuoteDocument = ({
  contactData,
}: {
  contactData: SingleStrapiResponse<ContactAttributes>;
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
  });
  const dispatch = useAppDispatch();

  return (
    <div
      className="px-4 mx-auto text-xl max-w-7xl print:text-lg"
      ref={componentRef}
    >
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
      <QuoteBody contactIfo={contactData} subtotal={subtotal} />
      <QuoteFooter subtotal={subtotal} />
    </div>
  );
};
