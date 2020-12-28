import { Person } from "./Person";

const percom = require("percom");

export function calculateOptimumSeatingArrangement(people: Person[]): Person[] {
  let optimumArrangement = null;
  let highestHappiness = Number.NEGATIVE_INFINITY;

  const seatingArrangements = percom.per(people, people.length);
  for (const seatingArrangement of seatingArrangements) {
    const happiness = calculateOverallHappiness(seatingArrangement);
    if (happiness > highestHappiness) {
      optimumArrangement = seatingArrangement;
      highestHappiness = happiness;
    }
  }

  return optimumArrangement;
}

export function calculateOverallHappiness(people: Person[]): number {
  let overallHappiness = 0;
  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    const leftPerson = i === 0 ? people[people.length - 1] : people[i - 1];
    overallHappiness += person.getHappinessFor(leftPerson.getName());

    const rightPerson = people[(i + 1) % people.length];
    overallHappiness += person.getHappinessFor(rightPerson.getName());
  }
  return overallHappiness;
}
