import { Glass } from '../Item/Glass/Glass.model';
import { GlazingBeadGlassCaliber } from '../Item/GlazingBead/GlazingBeadGlassCaliber.class';
import { Profile } from '../Item/Profiles/Profile.model';
import { IProfilePVC } from '../Item/Profiles/Profile.types';
import { WindowModel } from '../WindowModel/WindowModel.model';

export class Surface {
  width: number;
  widthMeters: number;
  height: number;
  heightMeters: number;
  area: number;
  perimeter: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.widthMeters = this.millimetersToMeters(this.width);
    this.heightMeters = this.millimetersToMeters(this.height);
    this.area = this.getArea();
    this.perimeter = this.getPerimeter();
  }

  private getArea(): number {
    return this.widthMeters * this.heightMeters;
  }

  private getPerimeter(): number {
    return 2 * (this.widthMeters + this.heightMeters);
  }

  public metersToMillimeters(value: number) {
    return value * 1000;
  }
  public millimetersToMeters(value: number) {
    return value / 1000;
  }
}

export class WindowModule extends Surface {
  // Glass Data
  glazingBeadAndGlass: GlazingBeadGlassCaliber | null = null;
  glass: Glass | null = null;
  glassArea: number = 0;
  glassCaliber: number = 0;
  // Glazing and Data profile
  glazingBeadProfile: Profile | null = null;
  glazingBeadLength: number = 0;
  // Cutting Profiles
  leftProfile: CutProfile | null = null;
  upProfile: CutProfile | null = null;
  rightProfile: CutProfile | null = null;
  downProfile: CutProfile | null = null;
  verticalTransom: CutProfile | null = null;
  horizontalTransom: CutProfile | null = null;

  setGlass() {
    if (this.glazingBeadAndGlass) {
      this.glass = this.glazingBeadAndGlass.glass;
      this.glassCaliber = this.glazingBeadAndGlass.caliber;
    }
  }
  setGlassArea() {
    if (this.leftProfile && this.rightProfile && this.upProfile && this.downProfile) {
      const widthMillimetersGlass: number =
        this.width - (this.leftProfile.cuttingGlassSize + this.rightProfile.cuttingGlassSize);
      const heighMillimetersGlass: number =
        this.height - (this.upProfile.cuttingGlassSize + this.downProfile.cuttingGlassSize);
      this.glassArea =
        this.millimetersToMeters(widthMillimetersGlass) * this.millimetersToMeters(heighMillimetersGlass);
    }
  }

  setLeftProfile(profile: IProfilePVC) {
    this.leftProfile = new CutProfile(profile, this.height);
  }
  setRightProfile(profile: IProfilePVC) {
    this.rightProfile = new CutProfile(profile, this.height);
  }
  setUpProfile(profile: IProfilePVC) {
    this.upProfile = new CutProfile(profile, this.width);
  }
  setDownProfile(profile: IProfilePVC) {
    this.downProfile = new CutProfile(profile, this.width);
  }

  setAllProfiles(profile: IProfilePVC) {
    this.leftProfile = new CutProfile(profile, this.height);
    this.rightProfile = new CutProfile(profile, this.height);
    this.upProfile = new CutProfile(profile, this.width);
    this.downProfile = new CutProfile(profile, this.width);
  }

  setHorizontalTransom(transomProfile: IProfilePVC) {
    this.horizontalTransom = new CutProfile(transomProfile, this.width - transomProfile.cuttingTransomSize);
  }
  setVerticalTransom(transomProfile: IProfilePVC) {
    this.horizontalTransom = new CutProfile(transomProfile, this.height - transomProfile.cuttingTransomSize);
  }

  // this function set Object with glass, and glazing bead
  setGlazingBeadAndGlass(glazingBeadAndGlass: GlazingBeadGlassCaliber) {
    this.glazingBeadAndGlass = glazingBeadAndGlass;
    this.glazingBeadProfile = glazingBeadAndGlass.glazingBead;
  }
  setGlazingBeadLength() {
    if (this.leftProfile && this.rightProfile && this.upProfile && this.downProfile) {
      const widthMillimeters =
        this.width - (this.leftProfile.cuttingTransomSize + this.rightProfile.cuttingTransomSize);
      const heighMillimeters = this.height - (this.upProfile.cuttingTransomSize + this.downProfile.cuttingTransomSize);
      this.glazingBeadLength = this.millimetersToMeters((widthMillimeters + heighMillimeters) * 2);
    }
  }
}

export class WindowPVC extends WindowModule {
  sashModules: WindowModule[] = [];
  fixedModules: WindowModule[] = [];

  constructor(width: number, height: number) {
    super(width, height);
  }

  public addSashModule(windowModule: WindowModule) {
    this.sashModules.push(windowModule);
  }

  public addFixedModule(windowModule: WindowModule) {
    this.fixedModules.push(windowModule);
  }
  private setKitAccessories(windowModel:WindowModel){}
}

type TAngles = 90 | 45;

export class CutProfile {
  length: number = 0;
  cuttingGlassSize: number = 0;
  cuttingTransomSize: number = 0;
  rightCuttingAngle: TAngles = 45;
  leftCuttingAngle: TAngles = 45;
  constructor(profile: IProfilePVC, length: number) {
    this.length = length;
    this.cuttingGlassSize = profile.cuttingGlassSize;
    this.cuttingTransomSize = profile.cuttingTransomSize;
  }
}
