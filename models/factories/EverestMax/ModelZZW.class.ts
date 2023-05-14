import { GlazingBeadGlassCaliber } from '../../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowCost } from '../../WindowCost/WindowCost.model';
import { WindowModel } from '../../WindowModel/WindowModel.model';
import { WindowModule, WindowPVC } from '../../WindowPVC/WindowPVC.model';
import type { IModelZZW } from '../IModelZZW.interface';

export class EverestModelZZW implements IModelZZW {
  window: WindowPVC;
  windowModel: WindowModel;
  windowCost: WindowCost = new WindowCost();

  constructor(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    this.window = window;
    this.windowModel = windowModel;

    // Set Frame
    this.setFrameCost(this.window, this.windowModel);
    this.window.setAllProfiles(windowModel.profile_frame);
    this.setVerticalTransom(this.window, this.windowModel);
    // Set Sash
    this.setSash(this.window, windowModel);
    // Set glazing bead
    this.window.setGlazingBeadAndGlass(glazingBeadAndGlass);

    // Set Glass cost and glazing bead cost

    this.setGlassCost(this.window);
    this.setGlazingBeadCost(this.window);

    // Set Accessories
    this.windowCost.accessoriesCost = windowModel.hardware_kit?.total ?? 0;
  }

  // Set Main frame Cost
  public setFrameCost(window: WindowPVC, model: WindowModel) {
    const cutDiscount_mm = model.profile_frame.cuttingTransomSize * 2;
    const cutMetersDiscount = this.window.millimetersToMeters(cutDiscount_mm);
    // Widths PVC + Reinforcement
    this.windowCost.frameCost += window.widthMeters * 2 * model.profile_frame.price;
    this.windowCost.frameCost +=
      (window.widthMeters - cutMetersDiscount) * 2 * model.profile_frame.reinforcement_profile.price;
    // Heights PVC + Reinforcement
    this.windowCost.frameCost += window.heightMeters * 2 * model.profile_frame.price;
    this.windowCost.frameCost +=
      (window.heightMeters - cutMetersDiscount) * 2 * model.profile_frame.reinforcement_profile.price;

    // Screws
    const cantScrewReinforcement = ((window.width - 200) / 300) * 2 + ((window.height - 200) / 300) * 2;
    this.windowCost.miscCost +=
      Math.ceil(cantScrewReinforcement) * model.profile_frame.reinforcement_profile.reinforcement_screw.price;
  }
  // Transom
  public setVerticalTransom(baseWindow: WindowPVC, model: WindowModel) {
    if (model.profile_transom) {
      // Height PVC + Reinforcement
      this.windowCost.transomCost += baseWindow.heightMeters * model.profile_transom.price;
      this.windowCost.transomCost += baseWindow.heightMeters * model.profile_transom.reinforcement_profile.price;
      // Screws
      const cantScrewReinforcement = ((baseWindow.height - 200) / 300) * 2;
      this.windowCost.miscCost +=
        Math.ceil(cantScrewReinforcement) * model.profile_frame.reinforcement_profile.reinforcement_screw.price;
    }
  }
  // Sash
  public setSash(windowModule: WindowModule, windowModel: WindowModel): void {
    const widthSash = windowModule.width / 2 - windowModel.profile_frame.cuttingSashSize;
    const heightSash = windowModule.height - windowModel.profile_frame.cuttingSashSize;
    const sashModuleRight = new WindowModule(widthSash, heightSash);
    const sashModuleLeft = new WindowModule(widthSash, heightSash);
    this.window.addSashModule(sashModuleRight);
    this.window.addSashModule(sashModuleLeft);
    if (windowModel.profile_sash) {
      sashModuleRight.setAllProfiles(windowModel.profile_sash);
      sashModuleRight.setGlazingBeadLength();
      sashModuleLeft.setAllProfiles(windowModel.profile_sash);
      sashModuleLeft.setGlazingBeadLength();
    }
    this.setSashCost(sashModuleRight, windowModel);
    this.setSashCost(sashModuleLeft, windowModel);
  }
  public setSashCost(windowModule: WindowModule, model: WindowModel): void {
    if (model.profile_sash) {
      // PVC + Reinforcement
      const cutDiscount_mm = model.profile_sash.cuttingTransomSize * 2;
      const cutMetersDiscount = this.window.millimetersToMeters(cutDiscount_mm);
      const cutsWidthSash = windowModule.widthMeters * 2;
      const cutsHeightSash = windowModule.heightMeters * 2;
      const priceWidthSash =
        cutsWidthSash *
        (model.profile_sash.price + (model.profile_sash.reinforcement_profile.price - cutMetersDiscount));
      const priceHeightSash =
        cutsHeightSash *
        (model.profile_sash.price + (model.profile_sash.reinforcement_profile.price - cutMetersDiscount));

      this.windowCost.sashCost += priceWidthSash + priceHeightSash;
      // Screws
      const cantScrewReinforcement = ((windowModule.width - 200) / 300) * 2 + ((windowModule.height - 200) / 300) * 2;
      this.windowCost.miscCost +=
        Math.ceil(cantScrewReinforcement) * model.profile_sash.reinforcement_profile.reinforcement_screw.price;
    }
  }

  // set Glass Cost TODO: We need change the formula to calculate this, in modules
  public setGlassCost(window: WindowPVC) {
    const modules = window.sashModules.concat(window.fixedModules);
    if (window.glazingBeadAndGlass) {
      if (modules.length) {
        modules.forEach((sash) => {
          sash.setGlazingBeadLength();
          sash.setGlassArea();
          if (window.glazingBeadAndGlass && window.glazingBeadAndGlass.glass) {
            this.windowCost.glassCost += sash.glassArea * window.glazingBeadAndGlass.glass.price;
          }
        });
      }
    }
  }

  public setGlazingBeadCost(window: WindowPVC) {
    if (window.glazingBeadAndGlass && window.glazingBeadAndGlass.glazingBead && window.glazingBeadProfile) {
      const modules = window.sashModules.concat(window.fixedModules);
      if (modules.length) {
        modules.forEach((element) => {
          if (window.glazingBeadProfile)
            this.windowCost.glazingBeadCost += element.glazingBeadLength * window.glazingBeadProfile.price;
        });
      }
    }
  }
}
