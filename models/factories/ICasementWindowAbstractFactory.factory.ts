import { GlazingBeadGlassCaliber } from '../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowModel } from '../WindowModel/WindowModel.model';
import { WindowPVC } from '../WindowPVC/WindowPVC.model';
import type { IModelO } from './IModelO.interface';
import type { IModelZOW } from './IModelZOW.interface';
import type { IModelZW } from './IModelZW.interface';
import type { IModelZZW } from './IModelZZW.interface';

// Interface for the factories
export interface ICasementWindowAbstractFactory {
  createModelO(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelO;
  createModelZW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelZW;
  createModelZOW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelZOW;
  createModelZZW(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelZZW;
  //TODO
  createModelZTD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): any;
  createModelZTOD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): any;
  createModelZZTTD(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): any;
}
