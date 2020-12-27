import { DataFlattener } from "../../../../src/2015/day/12/DataFlattener";
import { IgnoreRedFlattenRule } from "../../../../src/2015/day/12/rules/IgnoreRedFlattenRule";

test("should flatten data", () => {
  expect(new DataFlattener([]).flattenData(JSON.parse("[]"))).toEqual([]);
  expect(new DataFlattener([]).flattenData(JSON.parse("[[[3]]]"))).toEqual([3]);
  expect(
    new DataFlattener([]).flattenData(JSON.parse('{"a":[-1,1]}'))
  ).toEqual([-1, 1]);
  expect(
    new DataFlattener([]).flattenData(JSON.parse('[-1,{"a":1}]'))
  ).toEqual([-1, 1]);
});

test("should apply rules when flattening data", () => {
  const ignoreRedRule = new IgnoreRedFlattenRule();
  expect(
    new DataFlattener([ignoreRedRule]).flattenData(JSON.parse("[1,2,3]"))
  ).toEqual([1, 2, 3]);
  expect(
    new DataFlattener([ignoreRedRule]).flattenData(
      JSON.parse('[1,{"c":"red","b":2},3]')
    )
  ).toEqual([1, 3]);
  expect(
    new DataFlattener([ignoreRedRule]).flattenData(
      JSON.parse('{"d":"red","e":[1,2,3,4],"f":5}')
    )
  ).toEqual([]);
  expect(
    new DataFlattener([ignoreRedRule]).flattenData(JSON.parse('[1,"red",5]'))
  ).toEqual([1, "red", 5]);
});
