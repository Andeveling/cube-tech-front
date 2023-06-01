import { QuoteWindowCalculatedI } from "@/models/QuoteWindowCalculated/QuoteWindowCalculated.interface";

export const QuoteBody = () => {
  return (
    <div>
      <div className="divider" />

      <div className="divider" />
    </div>
  );
};

export const QuoteListItems = ({
  itemsList,
}: {
  itemsList: QuoteWindowCalculatedI[];
}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid justify-center w-full grid-cols-1">
        {itemsList.length >= 1 ? (
          itemsList.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="relative mb-4 text-3xl font-thin text-center">
                  Item {index + 1}
                </div>
                <div className="grid justify-center w-full grid-cols-2 space-x-2">
                  <div className="flex justify-center bg-black border shadow-lg place-self-center w-96 h-96"></div>
                  <div className="grid max-w-lg grid-cols-2 mx-auto text-xl">
                    <h3 className="col-span-2 mt-1 text-center">
                      {item.reference} | {item.location}
                    </h3>
                    <div className="flex items-center p-1 border-t border-r">
                      Dimesiones
                    </div>
                    <div className="flex items-center p-1 border-t">
                      {item.width}mm x {item.height}
                      mm
                    </div>
                    <div className="flex items-center p-1 border-t border-r">
                      Area
                    </div>
                    <div className="flex items-center p-1 border-t">
                      {(item.width / 1000) * (item.height / 1000)}
                      m²
                    </div>
                    <div className="flex items-center p-1 border-t border-r">
                      Vidrio
                    </div>
                    <div className="flex items-center p-1 border-t">
                      {item.glassName}
                    </div>
                    <div className="flex items-center p-1 border-t border-r">
                      Color
                    </div>
                    <div className="flex items-center p-1 border-t">Blanco</div>
                    <div className="flex items-center p-1 border-t border-b border-r">
                      Cantidad
                    </div>
                    <div className="grid items-center grid-cols-3 px-4 border-t border-b">
                      {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="divider" />
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 animate-fade-up md:text-xl">
            No hay ventanas en tu documento.
          </p>
        )}
      </div>
    </div>
  );
};
