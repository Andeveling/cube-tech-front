import { IItem } from '../Item.types';

export interface IProfile extends IItem {
  cuttingTransomSize: number;
}

export interface IProfilePVC extends IProfile {
  cuttingGlassSize: number;

  cuttingSashSize: number;
  reinforcement_profile: IReinforcementProfile;
}

export interface IReinforcementProfile extends IItem {}
