export class Reindeer {
  name: string;
  maxSpeed: number;
  flyingTime: number;
  restTime: number;
  points: number;

  constructor(
    name: string,
    maxSpeed: number,
    flyingTime: number,
    restTime: number
  ) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.flyingTime = flyingTime;
    this.restTime = restTime;

    this.points = 0;
  }

  public getName(): string {
    return this.name;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public getFlyingTime(): number {
    return this.flyingTime;
  }

  public getRestTime(): number {
    return this.restTime;
  }

  public getPoints(): number {
    return this.points;
  }

  public increasePoints(): void {
    this.points++;
  }
}
