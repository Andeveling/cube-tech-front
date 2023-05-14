import { Endpoint } from '../models/Endpoint/Endpoint.class';

export const windowModelEndpoint = new Endpoint('/api/window-models', ['?populate=deep'
  
]);


/* 
`?populate=frame_profile.reinforcement_profile.reinforcement_screw`,
  `&populate=sash_profile.reinforcement_profile.reinforcement_screw`,
  `&populate=transom_profile.reinforcement_profile.reinforcement_screw`,
  `&populate=hardware_kit.cremona_quantities.cremona&populate=hardware_kit.mullion_quantities.mullion&populate=hardware_kit.striker_quantities.striker`,
*/