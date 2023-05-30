import { BellaSlidingFactory } from "@/models/factories/BellaSliding/BellaSlidingFactory";
import { EverestMaxFactory } from "@/models/factories/EverestMax/EverestMaxFactory";
import { SystemsAvailableEnum } from "@/models/System-PVC/SystemPVC.interface";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { WindowPVC } from "@/models/WindowPVC/WindowPVC.model";
import { getGlassGlazingDeep } from "services/systems-pvc.service";
import { getModelWindowPVCAdapted } from "services/windowModel.service";
import { QuoteItemI } from "../redux/features/quoteDocument/quoteSlice";

export const calculateWindowCost = async (quoteItem: QuoteItemI) => {
  const {
    modelId,
    system,
    width,
    height,
    model,
    glassData: {
      attributes: { glass_glazing_bead_system },
    },
  } = quoteItem.item;
  const glassAndGlazingBeadId = glass_glazing_bead_system.data.id;
  const baseWindow = new WindowPVC(width, height);
  const glazingBeadAndGlass = await getGlassGlazingDeep(glassAndGlazingBeadId);
  const windowModel = await getModelWindowPVCAdapted(modelId);
 

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
          return windowXOW;

        case WindowModelsEnum.OXXOW:
          const windowOXXOW = bellaSlidingFactory.createModelOXXO(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowOXXOW;

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
          return windowO;

        case WindowModelsEnum.ZW:
          const windowZW = everestMaxFactory.createModelZW(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowZW;
        case WindowModelsEnum.ZOW:
          const windowZOW = everestMaxFactory.createModelZOW(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowZOW;

        case WindowModelsEnum.ZZW:
          const windowZZW = everestMaxFactory.createModelZZW(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowZZW;

        case WindowModelsEnum.ZD:
        case WindowModelsEnum.TD:
          const windowZTD = everestMaxFactory.createModelZTD(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowZTD;

        case WindowModelsEnum.ZOD:
          const windowZTOD = everestMaxFactory.createModelZTOD(
            baseWindow,
            windowModel,
            glazingBeadAndGlass,
          );
          return windowZTOD;

        default:
          break;
      }
      break;

    default:
      break;
  }
  return null;
};
