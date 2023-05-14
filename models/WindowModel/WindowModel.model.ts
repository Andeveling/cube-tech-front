import { HardwareKit } from '../HardwareKit/HardwareKit.model';

export class WindowModel {
  id: number;
  system: string;
  modelDraw: string;
  profile_frame: ProfilePVC;
  profile_sash: ProfilePVC | null = null;
  profile_transom: ProfilePVC | null = null;
  hardware_kit: HardwareKit | null = null;

  constructor(
    id: number,
    system: string,
    modelDraw: string,
    profile_frame: ProfilePVC,
    profile_sash: ProfilePVC | null,
    profile_transom: ProfilePVC | null,
    hardware_kit: HardwareKit | null,
  ) {
    this.id = id;
    this.system = system;
    this.modelDraw = modelDraw;
    this.profile_frame = profile_frame;
    if (profile_sash) this.profile_sash = profile_sash;
    if (profile_transom) this.profile_transom = profile_transom;
    if (hardware_kit) this.hardware_kit = hardware_kit;
  }
}

export class ProfilePVC {
  id: string;
  name: string;
  price: number;
  cuttingGlassSize: number;
  cuttingTransomSize: number;
  cuttingSashSize: number;
  reinforcement_profile: ReinforcementProfilePVC;
  constructor(
    id: string,
    name: string,
    price: number,
    reinforcement_profile: ReinforcementProfilePVC,
    cuttingGlassSize: number,
    cuttingTransomSize: number,
    cuttingSashSize: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cuttingGlassSize = cuttingGlassSize;
    this.cuttingTransomSize = cuttingTransomSize;
    this.cuttingSashSize = cuttingSashSize;
    this.reinforcement_profile = reinforcement_profile;
  }
}

export class ReinforcementProfilePVC {
  id: string;
  name: string;
  price: number;
  reinforcement_screw: ReinforcementScrew;
  constructor(id: string, name: string, price: number, reinforcement_screw: ReinforcementScrew) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.reinforcement_screw = reinforcement_screw;
  }
}

export class ReinforcementScrew {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
