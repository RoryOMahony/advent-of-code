import { PresentDelivery } from "./PresentDelivery";

export class PresentDeliverySystem {
  availableDeliveries: Array<PresentDelivery>;

  constructor() {
    this.availableDeliveries = new Array<PresentDelivery>();

    this.availableDeliveries.push(new PresentDelivery());
    this.availableDeliveries.push(new PresentDelivery());
  }

  deliverPresents(input: string) {
    const directions = Array.from(input);

    for (let i = 0; i < directions.length; i++) {
      const deliveryIndex = i % this.availableDeliveries.length;
      this.availableDeliveries[deliveryIndex].deliverPresents(directions[i]);
    }
  }

  getNumOfUniqueHousesVisited() {
    if (this.availableDeliveries.length === 0) {
      return 0;
    }

    let uniqueHouses = this.availableDeliveries[0].getHousesVisited();
    for (let i = 1; i < this.availableDeliveries.length; i++) {
      uniqueHouses = this.availableDeliveries[i].getUniqueHousesVisited(
        uniqueHouses
      );
    }
    return uniqueHouses.size;
  }
}
