export class Location {
  name: string;
  destinations: Map<string, number>;

  constructor(name: string) {
    this.name = name;
    this.destinations = new Map<string, number>();
  }

  getName(): string {
    return this.name;
  }

  getDestinations(): Array<string> {
    return Array.from(this.destinations.keys());
  }

  setDistance(location: string, distance: number) {
    this.destinations.set(location, distance);
  }

  getDistance(location: string): number {
    let distance = this.destinations.get(location);
    return distance ? distance : Number.POSITIVE_INFINITY;
  }
}
