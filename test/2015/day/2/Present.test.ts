import { Present } from "../../../../src/2015/day/2/Present";

test("returns correct surface area", () => {
  expect(new Present(2, 3, 4).getSurfaceArea()).toBe(52);
  expect(new Present(1, 1, 10).getSurfaceArea()).toBe(42);
});

test("returns area of smallest side", () => {
  expect(new Present(2, 3, 4).getSmallestSideArea()).toBe(6);
  expect(new Present(1, 1, 10).getSmallestSideArea()).toBe(1);
});

test("returns correct wrapping paper amount", () => {
  expect(new Present(2, 3, 4).getRequiredWrappingPaperAmount()).toBe(58);
  expect(new Present(1, 1, 10).getRequiredWrappingPaperAmount()).toBe(43);
});

test("returns correct ribbon length to wrap present", () => {
  expect(new Present(2, 3, 4).getRibbonLengthToWrapPresent()).toBe(10);
  expect(new Present(1, 1, 10).getRibbonLengthToWrapPresent()).toBe(4);
});

test("returns correct ribbon bow length", () => {
  expect(new Present(2, 3, 4).getRibbonBowLength()).toBe(24);
  expect(new Present(1, 1, 10).getRibbonBowLength()).toBe(10);
});

test("returns correct amount of total ribbon", () => {
  expect(new Present(2, 3, 4).getTotalRequiredRibbonLength()).toBe(34);
  expect(new Present(1, 1, 10).getTotalRequiredRibbonLength()).toBe(14);
});
