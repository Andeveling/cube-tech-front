import { GlazingBeadGlassCaliber } from '../../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowModel } from '../../WindowModel/WindowModel.model';
import { WindowPVC } from '../../WindowPVC/WindowPVC.model';
import { IModelOXXO } from '../IModelOXXO.interface';
import { IModelXO } from '../IModelXO.interface';
import { ISlidingWindowAbstractFactory } from '../ISlidingWindowAbstractFactory.factory';
import { BellaSlidingModelOXXO } from './ModelOXXO.class';
import { BellaSlidingModelXO } from './ModelXO.class';


// A Factory EverestMax
export class BellaSlidingFactory implements ISlidingWindowAbstractFactory {
  createModelOXXO(
    window: WindowPVC,
    windowModel: WindowModel,
    glazingBeadAndGlass: GlazingBeadGlassCaliber,
  ): IModelOXXO {
    return new BellaSlidingModelOXXO(window, windowModel, glazingBeadAndGlass);
  }
  createModelXO(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber): IModelXO {
    return new BellaSlidingModelXO(window, windowModel, glazingBeadAndGlass);
  }
}
