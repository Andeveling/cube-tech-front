import { GlazingBeadGlassCaliber } from '../../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { WindowCost } from '../../WindowCost/WindowCost.model';
import { WindowModel } from '../../WindowModel/WindowModel.model';
import { WindowModule, WindowPVC } from '../../WindowPVC/WindowPVC.model';
import type { IModelZW } from '../IModelZW.interface';

export class EverestModelZW implements IModelZW {
  window: WindowPVC;
  windowModel: WindowModel;
  windowCost: WindowCost = new WindowCost();

  constructor(window: WindowPVC, windowModel: WindowModel, glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    this.window = window;
    this.windowModel = windowModel;

    // Set Frame
    this.setFrameCost(this.window, this.windowModel);
    this.window.setAllProfiles(windowModel.profile_frame);

    // Set Sash
    this.setSash(this.window, windowModel);

    // Set glazing bead
    this.window.setGlazingBeadAndGlass(glazingBeadAndGlass);
    // Set Glass cost and glazing bead cost
    this.setGlassCost(this.window);
    this.setGlazingBeadCost(this.window);
    // Set Accessories
    this.windowCost.accessoriesCost  = windowModel.hardware_kit?.total ?? 0
      this.setCalculateCostWindow();
  }

  setCalculateCostWindow() {
    this.window.setPrice(this.windowCost.getTotalCost());
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
  public setSash(windowModule: WindowModule, windowModel: WindowModel) {
    const widthSash = windowModule.width - windowModel.profile_frame.cuttingSashSize;
    const heightSash = windowModule.height - windowModel.profile_frame.cuttingSashSize;
    const sashModule = new WindowModule(widthSash, heightSash);
    if (windowModel.profile_sash) {
      sashModule.setAllProfiles(windowModel.profile_sash);
      sashModule.setGlazingBeadLength()
    }
    this.setSashCost(sashModule, windowModel);
    this.window.addSashModule(sashModule);
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

  public setGlassCost(window: WindowPVC): void {
    const modules = window.sashModules;

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
    if (this.window.glazingBeadAndGlass && this.window.glazingBeadAndGlass.glazingBead && this.window.glazingBeadProfile) {
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
