import { FlattenRule } from "./rules/FlattenRule";

export class DataFlattener {
  rules: FlattenRule[];

  constructor(rules: FlattenRule[]) {
    this.rules = rules;
  }

  flattenData(input: any): any[] {
    if (!this.isValidData(input)) {
      return [];
    }

    // arrays are classed as objects in js
    if (typeof input == "object") {
      let data: any[] = [];
      Object.entries(input).forEach(([key, value]) => {
        data = [...data, ...this.flattenData(value)];
      });
      return data;
    } else {
      return [input];
    }
  }

  isValidData(input: any) {
    return this.rules.reduce(
      (acc, cur) => (acc ? cur.test(input) : false),
      true
    );
  }
}
