import type { IMisc } from '../Item/Misc/Misc.types';
import type { IProfile } from '../Item/Profiles/Profile.types';
import { WindowModelsEnum } from '../windowPVC.model';

export interface IModelWindow {
  id: number;
  system: string;
  modelDraw: WindowModelsEnum;
  typeWin: TypeWindowEnum;
  profiles: IGroupProfiles;
  misc: IMisc[];
}

export interface IGroupProfiles {
  frame: PvcAndReinforcement;
  sash: PvcAndReinforcement;
  glazingBead: PvcAndReinforcement['profile'];
}

export interface PvcAndReinforcement {
  profile: IProfile;
  reinforcement: IProfile;
}

export enum TypeWindowEnum {
  window = 'window',
  door = 'door',
}


