import { QuoteItemI } from "@/lib/redux/features/quoteDocument/quoteSlice";
import { BellaSlidingFactory } from "@/models/factories/BellaSliding/BellaSlidingFactory";
import { EverestMaxFactory } from "@/models/factories/EverestMax/EverestMaxFactory";
import { WindowModelsEnum } from "@/models/windowPVC.model";
import { WindowPVC } from "@/models/WindowPVC/WindowPVC.model";
import { NextResponse } from "next/server";
import { getGlassGlazingDeep } from "services/systems-pvc.service";
import {
  getModelWindowPVCAdapted
} from "services/windowModel.service";

export async function POST(request: Request) {
  const { body } = request;
  const res = await request.json();
  let quote: QuoteItemI[] = [];
  const modelsIds = quote.map((quoteItem) => quoteItem.item.modelId);

  // Iterar sobre cada QuoteItem para calcular su valor y retornar una ventana

  return NextResponse.json({ newBody: res });
}



/* 


import { WindowsModelsEnum } from './models/WindowModel/WindowModel.types';
import { WindowPVC } from './models/WindowPVC/WindowPVC.model';
import { BellaSlidingFactory } from './models/factories/BellaSliding/BellaSlidingFactory';
import { EverestMaxFactory } from './models/factories/EverestMax/EverestMaxFactory';
import { getGlassGlazingDeep } from './services/systems-pvc.service';
import { getModelById } from './services/windowModel.service';

const initMaterial = async () => {
try {
  // 1. Entry data with info to window
  const dataForm = {
    modelOW: { id: 1, width: 1200, heigh: 1000, model: 'O', glassID: 1 },
    modelZW: { id: 2, width: 1200, heigh: 1000, model: 'ZW', glassID: 1 },
    modelZOW: { id: 3, width: 2000, heigh: 1000, model: 'ZOW', glassID: 1 },
    modelZZW: { id: 4, width: 2000, heigh: 1000, model: 'ZZW', glassID: 1 },
    modelZD: { id: 5, width: 1000, heigh: 2000, model: 'ZD', glassID: 1 },
    modelTD: { id: 6, width: 1000, heigh: 2000, model: 'TD', glassID: 1 },
    modelZOD: { id: 7, width: 2000, heigh: 2000, model: 'TD', glassID: 1 },
    modelXOW: { id: 8, width: 1000, heigh: 1000, model: 'XO', glassID: 1 },
    modelOXXOW: { id: 9, width: 3000, heigh: 1000, model: 'OXXO', glassID: 1 },
  };
  // 2. Model window what contain all elements necessaries to create the model window
  // Windows
  const windowModelXOW = await getModelById(dataForm.modelXOW.id);
  const windowModelOXXOW = await getModelById(dataForm.modelOXXOW.id);
  // Doors
  // 3. Glazing and Glass selected to Form
  const glazingBeadAndGlass = await getGlassGlazingDeep(4);
  // 5. Chose the system factory to create the window, continue steps in the constructor of the
  const bellaSlidingFactory = new BellaSlidingFactory();
  // Windows
  const baseWindowXOW = new WindowPVC(dataForm.modelXOW.width, dataForm.modelXOW.heigh);
  const baseWindowOXXO = new WindowPVC(dataForm.modelOXXOW.width, dataForm.modelOXXOW.heigh);

  // Doors

  // Windows
  const windowXOW = bellaSlidingFactory.createModelXO(baseWindowXOW, windowModelXOW, glazingBeadAndGlass);
  const windowOXXO = bellaSlidingFactory.createModelOXXO(baseWindowOXXO, windowModelOXXOW, glazingBeadAndGlass);
  // Doors

  // console.log('Model XOW', windowXOW);
  console.log('Model OXXOW', windowOXXO);
} catch (error) {
  console.error(error)
}
};
*/
