export class JourneyInfo {
  from: string;
  to: string;
  distance: number;

  constructor(from: string, to: string, distance: number) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  getFrom(): string {
    return this.from;
  }

  getTo(): string {
    return this.to;
  }

  getDistance(): number {
    return this.distance;
  }
}
