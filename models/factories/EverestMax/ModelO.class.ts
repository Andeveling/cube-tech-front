import { GlazingBeadGlassCaliber } from '../../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowCost } from '../../WindowCost/WindowCost.model';
import { WindowModel } from '../../WindowModel/WindowModel.model';
import { WindowModule, WindowPVC } from '../../WindowPVC/WindowPVC.model';
import type { IModelO } from '../IModelO.interface';

export class EverestModelO implements IModelO {
  // Contain Data of window parts and measurements
  window: WindowPVC;
  // Contain Data of model configure in API
  windowModel: WindowModel;
  // Object with cost of window
  windowCost: WindowCost = new WindowCost();

  constructor(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    this.window = window;
    this.windowModel = windowModel;
    // Set Frame
    this.setFrameCost(this.window, this.windowModel);
    // Set all perimeter profiles
    this.window.setAllProfiles(windowModel.profile_frame);
    this.window.setGlazingBeadAndGlass(glazingBeadAndGlass);
    this.window.setGlazingBeadLength();
    this.window.setGlassArea();
    this.setGlassCost(this.window);
    this.setGlazingBeadCost(this.window);

    // this.setGlazingCost(this.window);
  }

  // Set Main frame Cost
  public setFrameCost(window: WindowPVC, model: WindowModel) {
    // Widths PVC + Reinforcement
    this.windowCost.frameCost += window.widthMeters*2 * model.profile_frame.price;
    this.windowCost.frameCost += window.widthMeters*2 * model.profile_frame.reinforcement_profile.price;
    // Heights PVC + Reinforcement
    this.windowCost.frameCost += window.heightMeters * model.profile_frame.price;
    this.windowCost.frameCost += window.heightMeters * model.profile_frame.reinforcement_profile.price;

    // Screws
    const cantScrewReinforcement = ((window.width - 200) / 300) * 2 + ((window.height - 200) / 300) * 2;
    this.windowCost.miscCost +=
      Math.ceil(cantScrewReinforcement) * model.profile_frame.reinforcement_profile.reinforcement_screw.price;
  }

  // set Glass Cost TODO: We need change the formula to calculate this, in modules
  public setGlassCost(window: WindowModule) {
    // console.log('Vidrios',window.glazingBeadAndGlass)
    if (window.glazingBeadAndGlass && window.glazingBeadAndGlass.glass) {
      this.windowCost.glassCost = window.glassArea * window.glazingBeadAndGlass.glass.price;
    } else this.windowCost.glassCost = 0;
  }

  public setGlazingBeadCost(window: WindowPVC) {
    if (window.glazingBeadAndGlass && window.glazingBeadAndGlass.glazingBead && window.glazingBeadProfile) {
      this.windowCost.glazingBeadCost = window.glazingBeadLength * window.glazingBeadProfile.price;
    }
  }
  // Set Accessories
  public setAccessoriesCost() {}
}
