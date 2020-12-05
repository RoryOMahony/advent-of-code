export class PresentDelivery {
  x: number;
  y: number;
  visited: Set<string>;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.visited = new Set<string>();

    this.deliverPresent();
  }

  deliverPresents(directions: string): void {
    for (const direction of Array.from(directions)) {
      this.move(direction);
      this.deliverPresent();
    }
  }

  move(direction: string) {
    if (direction === "<") {
      this.x -= 1;
    } else if (direction === ">") {
      this.x += 1;
    } else if (direction === "^") {
      this.y += 1;
    } else if (direction === "v") {
      this.y -= 1;
    }
  }

  deliverPresent() {
    this.visited.add(`${this.x},${this.y}`);
  }

  getNumOfHousesVisited(): number {
    return this.visited.size;
  }

  getHousesVisited(): Set<string> {
    return new Set<string>(this.visited);
  }

  getUniqueHousesVisited(otherHousesVisited: Set<string>): Set<string> {
    const uniqueHouses = this.getHousesVisited();
    otherHousesVisited.forEach(houseVisited => uniqueHouses.add(houseVisited));
    return uniqueHouses;
  }
}
