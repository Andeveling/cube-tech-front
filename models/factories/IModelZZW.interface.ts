import type { WindowModel } from '../WindowModel/WindowModel.model';
import type { WindowModule, WindowPVC } from '../WindowPVC/WindowPVC.model';
import type { IModel } from './IModel.interface';

export interface IModelZZW extends IModel {
  setSash(windowModule: WindowModule, windowModel: WindowModel): void;
  setSashCost(windowModule: WindowModule, windowModel: WindowModel): void;
  setVerticalTransom(baseWindow: WindowPVC, model: WindowModel): void;
}
