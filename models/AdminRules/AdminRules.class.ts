import { AdminRulesI } from "./AdminRules.strapi";

export class AdminRules implements AdminRulesI {
  private static instance: AdminRules;
  private _TRM: number = 3000;
  private _utility: number = 35;

  private constructor() {}

  public static createInstance(): AdminRules {
    if (!AdminRules.instance) {
      AdminRules.instance = new AdminRules();
    }

    return AdminRules.instance;
  }

  set TRM(value: number) {
    this._TRM = value;
  }
  set utility(value: number) {
    this._utility = value;
  }

  get TRM(): number {
    return this._TRM;
  }
  get utility(): number {
    return this._utility;
  }
}
