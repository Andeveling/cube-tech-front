import { IItem } from '../Item.types';

export interface IMisc extends IItem {}
export interface IMiscModel extends Omit<IMisc, 'id'> {}
