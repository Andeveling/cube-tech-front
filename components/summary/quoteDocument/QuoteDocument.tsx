import { QuoteBody } from "./QuoteBody";
import { QuoteFooter } from "./QuoteFooter";
import { QuoteHead } from "./QuoteHead";

export const QuoteDocument = () => {
  return (
    <div className="container mx-auto text-xl">
          <QuoteHead />
          <QuoteBody/>
          <QuoteFooter/>
    </div>
  );
};
