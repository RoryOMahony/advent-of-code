import { DataDocument } from "../../../../src/2015/day/12/DataDocument";
import { DataFlattener } from "../../../../src/2015/day/12/DataFlattener";

test("should return sum of data values", () => {
  expect(new DataDocument(parseAndFlatten("[]")).calculateSum()).toBe(0);
  expect(new DataDocument(parseAndFlatten("{}")).calculateSum()).toBe(0);
  expect(new DataDocument(parseAndFlatten("[1,2,3]")).calculateSum()).toBe(6);
  expect(
    new DataDocument(parseAndFlatten('{"a":2,"b":4}')).calculateSum()
  ).toBe(6);
  expect(new DataDocument(parseAndFlatten("[[[3]]]")).calculateSum()).toBe(3);
  expect(
    new DataDocument(parseAndFlatten('{"a":{"b":4},"c":-1}')).calculateSum()
  ).toBe(3);
  expect(new DataDocument(parseAndFlatten('{"a":[-1,1]}')).calculateSum()).toBe(
    0
  );
  expect(new DataDocument(parseAndFlatten('[-1,{"a":1}]')).calculateSum()).toBe(
    0
  );
});

function parseAndFlatten(input: string): any[] {
  return new DataFlattener([]).flattenData(JSON.parse(input));
}
