import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { FileText } from "lucide-react";
import { selectCountQuoteItems } from "./quoteSlice";

export const QuoteDocument = () => {
  const count = useAppSelector(selectCountQuoteItems);
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-info">{count}</span>
      <div className="grid w-full h-full place-items-center">
        <FileText size={40} />
      </div>
    </div>
  );
};
