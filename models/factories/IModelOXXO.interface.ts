import { WindowModel } from "../WindowModel/WindowModel.model";
import { WindowModule } from "../WindowPVC/WindowPVC.model";
import { IModel } from "./IModel.interface";

export interface IModelOXXO extends IModel {
  setSash(windowModule: WindowModule, windowModel: WindowModel): void;
  setSashCost(windowModule: WindowModule, windowModel: WindowModel): void;
}
