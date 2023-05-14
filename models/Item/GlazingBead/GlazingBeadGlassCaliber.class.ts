import { Glass } from '../Glass/Glass.model';
import { Profile } from '../Profiles/Profile.model';

export class GlazingBeadGlassCaliber {
  glass: Glass | null = null;
  glazingBead: Profile | null = null;
  caliber: number;
  constructor(glass: Glass, caliber: number, glazingBead: Profile) {
    this.glass = glass;
    this.caliber = caliber;
    this.glazingBead = glazingBead;
  }
}
