import { useAppSelector } from "@/lib/hooks/use-store-hooks";
import { FileText } from "lucide-react";
import Link from "next/link";
import { selectCountQuoteItems } from "../../lib/redux/features/quoteDocument/quoteSlice";

export const QuoteDocument = () => {
  const count = useAppSelector(selectCountQuoteItems);
  return (
    <Link href='/summary' className="indicator">
      <span className="indicator-item badge badge-primary">{count}</span>
      <div className="grid w-full h-full place-items-center">
        <FileText size={40} />
      </div>
    </Link>
  );
};
