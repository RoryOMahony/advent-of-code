import { PresentDeliverySystem } from "../../../../src/2015/day/3/PresentDeliverySystem";

test("delivers presents to expected number of houses", () => {
  let presentDeliverySystem = new PresentDeliverySystem();
  presentDeliverySystem.deliverPresents("^v");
  expect(presentDeliverySystem.getNumOfUniqueHousesVisited()).toBe(3);

  presentDeliverySystem = new PresentDeliverySystem();
  presentDeliverySystem.deliverPresents("^>v<");
  expect(presentDeliverySystem.getNumOfUniqueHousesVisited()).toBe(3);

  presentDeliverySystem = new PresentDeliverySystem();
  presentDeliverySystem.deliverPresents("^v^v^v^v^v");
  expect(presentDeliverySystem.getNumOfUniqueHousesVisited()).toBe(11);
});
