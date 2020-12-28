import { parseSeatingInfo } from "../../../../src/2015/day/13/SeatingInfoParser";
import { SeatingInfo } from "../../../../src/2015/day/13/SeatingInfo";

test("should parse seating info", () => {
  const data: string[] = [
    "Mary would gain 5 happiness units by sitting next to John.",
    "John would lose 10 happiness units by sitting next to Mary."
  ];
  expect(parseSeatingInfo(data)).toEqual([
    new SeatingInfo("Mary", "John", 5),
    new SeatingInfo("John", "Mary", -10)
  ]);
});
