import {
  calculateOptimumSeatingArrangement,
  calculateOverallHappiness
} from "../../../../src/2015/day/13/SeatingArrangement";
import { parseSeatingInfo } from "../../../../src/2015/day/13/SeatingInfoParser";
import { People } from "../../../../src/2015/day/13/People";

let people: People;

beforeEach(() => {
  const data: string[] = [
    "Alice would gain 54 happiness units by sitting next to Bob.",
    "Alice would lose 79 happiness units by sitting next to Carol.",
    "Alice would lose 2 happiness units by sitting next to David.",
    "Bob would gain 83 happiness units by sitting next to Alice.",
    "Bob would lose 7 happiness units by sitting next to Carol.",
    "Bob would lose 63 happiness units by sitting next to David.",
    "Carol would lose 62 happiness units by sitting next to Alice.",
    "Carol would gain 60 happiness units by sitting next to Bob.",
    "Carol would gain 55 happiness units by sitting next to David.",
    "David would gain 46 happiness units by sitting next to Alice.",
    "David would lose 7 happiness units by sitting next to Bob.",
    "David would gain 41 happiness units by sitting next to Carol."
  ];

  const seatingInfo = parseSeatingInfo(data);
  people = new People();
  for (const info of seatingInfo) {
    let person = people.getOrCreatePerson(info.getWho());
    person.addHappinessInfo(info.getSeatedBy(), info.getHappiness());
  }
});

test("should calculate optimum seating arrangement", () => {
  expect(
    calculateOptimumSeatingArrangement(people.getPeople()).map(person =>
      person.getName()
    )
  ).toEqual(["Alice", "Bob", "Carol", "David"]);
});

test("should calculate total change in happiness", () => {
  const optimalArrangement = calculateOptimumSeatingArrangement(
    people.getPeople()
  );

  expect(calculateOverallHappiness(optimalArrangement)).toBe(330);
});
