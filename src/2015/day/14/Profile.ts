import { Reindeer } from "./Reindeer";

export class Profile {
  reindeer: Reindeer;
  distanceAtTime: Map<number, number>;

  constructor(reindeer: Reindeer) {
    this.reindeer = reindeer;
    this.distanceAtTime = new Map<number, number>();

    this.addDistance(0, 0);
  }

  addDistance(distance: number, time: number) {
    this.distanceAtTime.set(time, distance);
  }

  getDistance(time: number): number {
    return this.distanceAtTime.get(time) ?? -1;
  }

  getReindeer(): Reindeer {
    return this.reindeer;
  }
}
