import { GlazingBeadGlassCaliber } from '../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowModel } from '../WindowModel/WindowModel.model';
import { WindowPVC } from '../WindowPVC/WindowPVC.model';
import { IModelXO } from './IModelXO.interface';


// Interface for the factories
export interface ISlidingWindowAbstractFactory {
  createModelXO(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelXO;
  createModelOXXO(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelXO;
}
