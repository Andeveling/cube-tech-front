export class WindowCost {
  public frameCost: number = 0;
  public sashCost: number = 0;
  public transomCost: number = 0;
  public glassCost: number = 0;
  public glazingBeadCost: number = 0;
  public miscCost: number = 0;
  public accessoriesCost: number = 0;

  public getTotalCost(): number {
    return (
      this.frameCost +
      this.sashCost +
      this.glassCost +
      this.transomCost +
      this.glassCost +
      this.glazingBeadCost +
      this.miscCost +
      this.accessoriesCost
    );
  }
}
