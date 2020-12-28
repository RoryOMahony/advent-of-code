export class Person {
  name: string;
  happinessInfo: Map<string, number>;

  constructor(name: string) {
    this.name = name;
    this.happinessInfo = new Map<string, number>();
  }

  getName(): string {
    return this.name;
  }

  addHappinessInfo(name: string, happiness: number): void {
    this.happinessInfo.set(name, happiness);
  }

  getHappinessFor(name: string): number {
    const happiness = this.happinessInfo.get(name);
    return happiness === undefined ? 0 : happiness;
  }
}
