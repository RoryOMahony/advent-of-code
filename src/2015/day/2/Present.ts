export class Present {
  length: number;
  width: number;
  height: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  getSurfaceArea(): number {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }

  getVolume(): number {
    return this.length * this.width * this.height;
  }

  getSmallestSideArea(): number {
    return Math.min(
      this.length * this.width,
      this.length * this.height,
      this.width * this.height
    );
  }

  getRequiredWrappingPaperAmount(): number {
    return this.getSurfaceArea() + this.getSmallestSideArea();
  }

  getTotalRequiredRibbonLength(): number {
    return this.getRibbonLengthToWrapPresent() + this.getRibbonBowLength();
  }

  getRibbonLengthToWrapPresent(): number {
    const perimiterA = 2 * (this.length + this.height);
    const perimiterB = 2 * (this.width + this.height);
    const perimiterC = 2 * (this.width + this.length);
    return Math.min(perimiterA, perimiterB, perimiterC);
  }

  getRibbonBowLength(): number {
    return this.getVolume();
  }
}
