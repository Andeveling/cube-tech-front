import { TRMI } from "./TRM.strapi";

export class TRM implements TRMI {
  private static instance: TRM;
  private _USDCOP: number = 0;

  private constructor() {}

  public static createInstance(): TRM {
    if (!TRM.instance) {
      TRM.instance = new TRM();
    }

    return TRM.instance;
  }

  set USDCOP(value: number) {
    this._USDCOP = value;
  }

  get USDCOP(): number {
    return this._USDCOP;
  }
}
