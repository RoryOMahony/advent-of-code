import { PresentDelivery } from "../../../../src/2015/day/3/PresentDelivery";

test("delivers presents to expected number of houses", () => {
  let presentDelivery = new PresentDelivery();
  presentDelivery.deliverPresents(">");
  expect(presentDelivery.getNumOfHousesVisited()).toBe(2);

  presentDelivery = new PresentDelivery();
  presentDelivery.deliverPresents("^>v<");
  expect(presentDelivery.getNumOfHousesVisited()).toBe(4);

  presentDelivery = new PresentDelivery();
  presentDelivery.deliverPresents("^v^v^v^v^v");
  expect(presentDelivery.getNumOfHousesVisited()).toBe(2);
});
