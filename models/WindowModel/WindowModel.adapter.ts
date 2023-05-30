import { HardwareKit } from '../HardwareKit/HardwareKit.model';
import { ProfilePVC, ReinforcementProfilePVC, ReinforcementScrew, WindowModel } from './WindowModel.model';
import { WindowModelResponse } from './WindowModel.strapi';

export const WindowModelAdapter = (response: WindowModelResponse): WindowModel => {
  let sash = null;
  let transom = null;
  let hardware_kit = null;
  const frame = new ProfilePVC(
    response.data.attributes.frame_profile.data.attributes.id_provider,
    response.data.attributes.frame_profile.data.attributes.name,
    response.data.attributes.frame_profile.data.attributes.price,
    new ReinforcementProfilePVC(
      response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.id_provider,
      response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.name,
      response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.price,

      new ReinforcementScrew(
        response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.id_provider,
        response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.name,
        response.data.attributes.frame_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.price,
      ),
    ),
    response.data.attributes.frame_profile.data.attributes.cuttingGlassSize,
    response.data.attributes.frame_profile.data.attributes.cuttingTransomSize,
    response.data.attributes.frame_profile.data.attributes.cuttingSashSize,
  );

  if (response.data.attributes.sash_profile.data) {
    sash = new ProfilePVC(
      response.data.attributes.sash_profile.data.attributes.id_provider,
      response.data.attributes.sash_profile.data.attributes.name,
      response.data.attributes.sash_profile.data.attributes.price,
      new ReinforcementProfilePVC(
        response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.id_provider,
        response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.name,
        response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.price,
        new ReinforcementScrew(
          response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.id_provider,
          response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.name,
          response.data.attributes.sash_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.price,
        ),
      ),
      response.data.attributes.sash_profile.data.attributes.cuttingGlassSize,
      response.data.attributes.sash_profile.data.attributes.cuttingTransomSize,
      response.data.attributes.sash_profile.data.attributes.cuttingSashSize,
    );
  }
  if (response.data.attributes.transom_profile.data) {
    transom = new ProfilePVC(
      response.data.attributes.transom_profile.data.attributes.id_provider,
      response.data.attributes.transom_profile.data.attributes.name,
      response.data.attributes.transom_profile.data.attributes.price,
      new ReinforcementProfilePVC(
        response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.id_provider,
        response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.name,
        response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.price,
        new ReinforcementScrew(
          response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.id_provider,
          response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.name,
          response.data.attributes.transom_profile.data.attributes.reinforcement_profile.data.attributes.reinforcement_screw.data.attributes.price,
        ),
      ),
      response.data.attributes.transom_profile.data.attributes.cuttingGlassSize,
      response.data.attributes.transom_profile.data.attributes.cuttingTransomSize,
      response.data.attributes.transom_profile.data.attributes.cuttingSashSize,
    );
  }

  if (response.data.attributes.hardware_kit.data) {
    hardware_kit = new HardwareKit(response.data.attributes.hardware_kit.data.attributes.total);
  }

  return new WindowModel(
    response.data.id,
    response.data.attributes.system_pvc.data.attributes.name,
    response.data.attributes.draw_ref,
    frame,
    sash,
    transom,
    hardware_kit,
  );
};
