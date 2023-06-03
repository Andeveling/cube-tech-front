import { currencyCOPFormatter } from "@/lib/utilities/currencyFormatter";
import { ContactResponse } from "@/models/Contact/Contact.strapi";
import { QuoteWindowCalculatedI } from "@/models/QuoteWindowCalculated/QuoteWindowCalculated.interface";

export const QuoteBody = ({
  windowsQuote,
  subtotal,
}: {
  windowsQuote: ContactResponse["data"]["attributes"]["windowsQuote"];
  subtotal: number;
}) => {
  return (
    <div>
      <div className="divider" />
      <div className="flex justify-center w-full">
        <div className="grid justify-center w-full grid-cols-1">
          {windowsQuote.map((item, index) => {
            return (
              <div
                key={item.id}
                className=""
              >
                <div className="relative mb-4 text-3xl font-thin text-center">
                  Item {index + 1}
                </div>
                <div className="grid justify-center w-full grid-cols-1 space-x-2 md:grid-cols-2 print:grid-cols-2">
                  <div className="flex justify-center bg-black border shadow-lg place-self-center w-96 h-96"></div>

                  <div>
                    <div className="grid max-w-lg grid-cols-2 mx-auto mt-4 text-xl print:text-lg md:mt-0">
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
                      <div className="flex items-center p-1 border-t">
                        Blanco
                      </div>

                      <div className="flex items-center p-1 border-t border-r">
                        Precio
                      </div>
                      <div className="grid items-center grid-cols-3 px-4 border-t">
                        {currencyCOPFormatter(item.priceCOP)}
                      </div>
                      <div className="flex items-center p-1 border-t border-r">
                        Cantidad
                      </div>
                      <div className="grid items-center grid-cols-3 px-4 border-t ">
                        {item.quantity}
                      </div>

                      <div className="flex items-center p-1 border-t border-b border-r">
                        Total
                      </div>
                      <div className="grid items-center grid-cols-3 px-4 border-t border-b">
                        {currencyCOPFormatter(item.priceCOP * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider" />
              </div>
            );
          })}

          <div className="flex justify-end w-full">
            <div className="grid max-w-md grid-cols-2">
              <b>Subtotal</b>
              <div className="text-right">{currencyCOPFormatter(subtotal)}</div>
              <b>IVA 19%</b>
              <div className="text-right">
                {currencyCOPFormatter(subtotal * 0.19)}
              </div>
              <b>TOTAL</b>
              <div className="text-right">
                {currencyCOPFormatter(subtotal * 1.19)}
              </div>
            </div>
          </div>
          <div className="divider" />
          {/* Summary Table */}

          <div className="overflow-x-auto ">
            <p className="mt-6 mb-4 text-2xl text-center text-gray-500">
              Resumen
            </p>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Referencia</th>
                  <th className="text-right">Valor Unidad</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {windowsQuote.map((item, index) => (
                  <tr key={item.id}>
                    <td className="font-bold">{index + 1}</td>
                    <td>
                      {item.reference} | {item.location}
                    </td>
                    <td className="text-right">
                      {currencyCOPFormatter(item.priceCOP)}{" "}
                    </td>
                    <td className="text-center">{item.quantity}</td>

                    <td className="text-right">
                      {currencyCOPFormatter(item.priceCOP * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
