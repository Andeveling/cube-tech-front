import { Glass } from '../Glass/Glass.model';
import { ID } from '../Item.model';
import { Profile } from '../Profiles/Profile.model';
import { GlazingBeadGlassCaliber } from './GlazingBeadGlassCaliber.class';
import { GlazingBeadGlassResponse } from './GlazingBeadGlassCaliber.types';

export const GlazingGlassCaliberAdapter = (response: GlazingBeadGlassResponse): GlazingBeadGlassCaliber => {
  return new GlazingBeadGlassCaliber(
    new Glass(
      response.data.attributes.glass.data.id,
      response.data.attributes.glass.data.attributes.name,
      response.data.attributes.glass.data.attributes.price,
    ),
    response.data.attributes.glass_caliber.data.attributes.caliber,
    new Profile(
      response.data.attributes.glazing_bead_profile.data.id,
      response.data.attributes.glazing_bead_profile.data.attributes.name,
      response.data.attributes.glazing_bead_profile.data.attributes.price,
    ),
  );
};
