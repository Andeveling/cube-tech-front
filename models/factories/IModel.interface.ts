import { QuoteWindowCalculated } from '../QuoteWindowCalculated/QuoteWindowCalculated.interface';
import { WindowCost } from '../WindowCost/WindowCost.model';
import { WindowModel } from '../WindowModel/WindowModel.model';
import { WindowModule, WindowPVC } from '../WindowPVC/WindowPVC.model';

export interface IModel {
  window: WindowPVC;
  windowModel: WindowModel;
  windowCost: WindowCost;

  setFrameCost(window: WindowPVC, windowModel: WindowModel): void;
  setGlassCost(window: WindowModule): void;
  setGlazingBeadCost(window: WindowPVC): void;
  setCalculateCostWindow(): void;
}
