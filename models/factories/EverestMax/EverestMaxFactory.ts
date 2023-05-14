import { GlazingBeadGlassCaliber } from '../../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowModel } from '../../WindowModel/WindowModel.model';
import { WindowPVC } from '../../WindowPVC/WindowPVC.model';

import { ICasementWindowAbstractFactory } from '../ICasementWindowAbstractFactory.factory';
import { EverestModelO } from './ModelO.class';
import { EverestModelZOW } from './ModelZOW.class';
import { EverestModelZTD } from './ModelZTD.class';
import { EverestModelZTOD } from './ModelZTOD.class';
import { EverestModelZW } from './ModelZW.class';
import { EverestModelZZW } from './ModelZZW.class';

// A Factory EverestMax
export class EverestMaxFactory implements ICasementWindowAbstractFactory {
  // Windows
  createModelO(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelO(window, windowModel, glazingBeadAndGlass);
  }
  createModelZW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelZW(window, windowModel, glazingBeadAndGlass);
  }

  createModelZOW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelZOW(window, windowModel, glazingBeadAndGlass);
  }
  createModelZZW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelZZW(window, windowModel, glazingBeadAndGlass);
  }
  // Window-Door

  createModelZTD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelZTD(window, windowModel, glazingBeadAndGlass);
  }
  createModelZTOD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    return new EverestModelZTOD(window, windowModel, glazingBeadAndGlass);
  }
  createModelZZTTD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    throw new Error('Method not implemented.');
  }
}
