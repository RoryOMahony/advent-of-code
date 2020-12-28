export class SeatingInfo {
  who: string;
  seatedBy: string;
  happiness: number;

  constructor(who: string, seatedBy: string, happiness: number) {
    this.who = who;
    this.seatedBy = seatedBy;
    this.happiness = happiness;
  }

  getWho() {
    return this.who;
  }

  getSeatedBy() {
    return this.seatedBy;
  }

  getHappiness() {
    return this.happiness;
  }
}
