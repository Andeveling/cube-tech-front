import { SingleStrapiResponse } from "@/models/strapi/Global.response";
import { Glass } from "./Glass.model";
import { GlassAttributes } from "./Glass.strapi";
import { IGlass } from "./Glass.types";

export const GlassAdapter = (
  response: SingleStrapiResponse<GlassAttributes>,
): IGlass => {
  return new Glass(
    response.data.id,
    response.data.attributes.name,
    response.data.attributes.price,
  );
};
