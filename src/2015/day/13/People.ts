import { Person } from "./Person";

export class People {
  people: Map<string, Person> = new Map<string, Person>();

  constructor() {
    this.people = new Map<string, Person>();
  }

  addPerson(name: string) {
    this.people.set(name, new Person(name));
  }

  getOrCreatePerson(name: string): Person {
    let person = this.people.get(name);
    if (person === undefined) {
      person = new Person(name);
      this.people.set(name, person);
    }
    return person;
  }

  getPeople(): Person[] {
    return Array.from(this.people.values());
  }
}
