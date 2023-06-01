import { TRM } from "./TRM.class";
import { TRMResponse } from "./TRM.strapi";

export const TRMAdapted = (trmResponse: TRMResponse) => {
    const instanceTRM = TRM.createInstance()
    instanceTRM.USDCOP = trmResponse.data.attributes.USDCOP;
    return instanceTRM;
}