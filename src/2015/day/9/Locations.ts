import { Location } from "./Location";
import { JourneyInfo } from "./JourneyInfo";

const percom = require("percom");

export class Locations {
  locations: Map<string, Location>;

  constructor() {
    this.locations = new Map<string, Location>();
  }

  addJourneyInfo(journeyInfo: JourneyInfo): void {
    const from = this.getLocation(journeyInfo.getFrom());
    from.setDistance(journeyInfo.getTo(), journeyInfo.getDistance());

    const to = this.getLocation(journeyInfo.getTo());
    to.setDistance(journeyInfo.getFrom(), journeyInfo.getDistance());
  }

  getLocation(location: string): Location {
    let result = this.locations.get(location);
    if (result === undefined) {
      result = new Location(location);
      this.locations.set(location, result);
    }
    return result;
  }

  getLocations(): Array<string> {
    return Array.from(this.locations.keys());
  }

  getShortestRoute(): number {
    return this.getRoute(Number.POSITIVE_INFINITY, (a, b) => Math.min(a, b));
  }

  getLongestRoute(): number {
    return this.getRoute(0, (a, b) => Math.max(a, b));
  }

  getRoute(
    startDistance: number,
    processDistanceFunction: (a: number, b: number) => number
  ) {
    const permutations = percom.per(
      this.getLocations(),
      this.getLocations().length
    );

    let routeDistance = startDistance;

    for (const permutation of permutations) {
      let distance = 0;
      let prevLocation = null;
      for (const location of permutation) {
        if (prevLocation != null) {
          distance += this.getLocation(prevLocation).getDistance(location);
        }
        prevLocation = location;
      }

      routeDistance = processDistanceFunction(routeDistance, distance);
    }

    return routeDistance;
  }
}
