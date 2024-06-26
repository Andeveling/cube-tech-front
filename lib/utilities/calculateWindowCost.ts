import { AdminRules } from "@/models/AdminRules/AdminRules.class";
import { BellaSlidingFactory } from "@/models/factories/BellaSliding/BellaSlidingFactory";
import { EverestMaxFactory } from "@/models/factories/EverestMax/EverestMaxFactory";
import { SystemsAvailableEnum } from "@/models/System-PVC/SystemPVC.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { WindowPVC } from "@/models/WindowPVC/WindowPVC.model";
import { getGlassGlazingCaliber } from "@/services/systems-pvc.service";
import { getModelWindowPVCAdapted } from "@/services/windowModel.service";
import { QuoteItemI } from "../redux/features/quoteDocument/quoteSlice";

export const calculateWindowCost = async (
  quoteItem: QuoteItemI,
  adminRules: AdminRules,
) => {
  // console.log(quoteItem)
  try {
    const {
      id,
      item: {
        modelId,
        system,
        width,
        height,
        model,
        reference,
        location,
        quantity,
        glassData,
      },
    } = quoteItem;

    if (!glassData) throw new Error("Codigo de Cristal invalido");
    const glassAndGlazingBeadId =
      glassData.attributes.glass_glazing_bead_system.data.id;
    const glazingBeadAndGlass = await getGlassGlazingCaliber(
      glassAndGlazingBeadId,
    );
    const windowModel = await getModelWindowPVCAdapted(modelId);

    const glassName = glazingBeadAndGlass.glass?.name;
    const usdCop = adminRules.TRM;
    const utility = adminRules.utility;
    const baseWindow = new WindowPVC(
      id,
      reference,
      location,
      model,
      system,
      width,
      height,
      quantity,
      glassName || "",
      usdCop,
      utility,
    );

    switch (system) {
      case SystemsAvailableEnum.BellaSliding:
        const bellaSlidingFactory = new BellaSlidingFactory();
        switch (model) {
          case WindowModelsEnum.XOW:
            const windowXOW = bellaSlidingFactory.createModelXO(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowXOW.window.getQuoteWindowInfo();

          case WindowModelsEnum.OXXOW:
            const windowOXXOW = bellaSlidingFactory.createModelOXXO(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowOXXOW.window.getQuoteWindowInfo();

          default:
            break;
        }
        break;
      case SystemsAvailableEnum.EverestMax:
        const everestMaxFactory = new EverestMaxFactory();
        switch (model) {
          case WindowModelsEnum.O:
            const windowO = everestMaxFactory.createModelO(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowO.window.getQuoteWindowInfo();

          case WindowModelsEnum.ZW:
            const windowZW = everestMaxFactory.createModelZW(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowZW.window.getQuoteWindowInfo();
          case WindowModelsEnum.ZOW:
            const windowZOW = everestMaxFactory.createModelZOW(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowZOW.window.getQuoteWindowInfo();

          case WindowModelsEnum.ZZW:
            const windowZZW = everestMaxFactory.createModelZZW(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowZZW.window.getQuoteWindowInfo();

          case WindowModelsEnum.ZD:
          case WindowModelsEnum.TD:
            const windowZTD = everestMaxFactory.createModelZTD(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowZTD.window.getQuoteWindowInfo();

          case WindowModelsEnum.ZOD:
            const windowZTOD = everestMaxFactory.createModelZTOD(
              baseWindow,
              windowModel,
              glazingBeadAndGlass,
            );
            return windowZTOD.window.getQuoteWindowInfo();

          default:
            break;
        }
        break;

      default:
        break;
    }
  } catch (error) {
    throw new Error("Error al calcular....");
  }
};
