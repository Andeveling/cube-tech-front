import { WindowModel } from '../WindowModel/WindowModel.model';
import { WindowModule } from '../WindowPVC/WindowPVC.model';
import type { IModel } from './IModel.interface';

export interface IModelZTD extends IModel {
  setSash(windowModule: WindowModule, windowModel: WindowModel): void;
  setSashCost(windowModule: WindowModule, windowModel: WindowModel): void;
}
