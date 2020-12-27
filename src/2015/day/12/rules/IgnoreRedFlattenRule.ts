import { FlattenRule } from "./FlattenRule";

//Ignore any object (and all of its children) which has any property with the value "red". Do this only for objects ({...}), not arrays ([...])

const RED = "red";

export class IgnoreRedFlattenRule implements FlattenRule {
  test(input: any): boolean {
    if (this.isObjectLiteral(input)) {
      for (const [key, value] of Object.entries(input)) {
        if (RED === value) {
          return false;
        }
      }
    }

    return true;
  }

  isObjectLiteral(input: any): boolean {
    return typeof input == "object" && !Array.isArray(input);
  }
}
