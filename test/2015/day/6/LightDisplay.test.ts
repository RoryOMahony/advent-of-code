import { LightDisplay } from "../../../../src/2015/day/6/LightDisplay";
import { TurnOnInstruction } from "../../../../src/2015/day/6/instructions/TurnOnInstruction";
import { TurnOffInstruction } from "../../../../src/2015/day/6/instructions/TurnOffInstruction";
import { ToggleInstruction } from "../../../../src/2015/day/6/instructions/ToggleInstruction";
import { IncreaseBrightnessInstruction } from "../../../../src/2015/day/6/instructions/IncreaseBrightnessInstruction";

test("should switch on required lights", () => {
  const lightDisplay = new LightDisplay(2, 2);
  expect(lightDisplay.getLitLights()).toBe(0);

  lightDisplay.applyInstruction(new TurnOnInstruction(0, 0, 0, 0));
  expect(lightDisplay.getLitLights()).toBe(1);

  lightDisplay.applyInstruction(new TurnOnInstruction(1, 1, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(2);

  lightDisplay.applyInstruction(new TurnOnInstruction(0, 0, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(4);
});

test("should switch off required lights", () => {
  const lightDisplay = new LightDisplay(2, 2);
  expect(lightDisplay.getLitLights()).toBe(0);

  lightDisplay.applyInstruction(new TurnOnInstruction(0, 0, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(4);

  lightDisplay.applyInstruction(new TurnOffInstruction(0, 0, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(0);
});

test("should toggle required lights", () => {
  const lightDisplay = new LightDisplay(2, 2);
  expect(lightDisplay.getLitLights()).toBe(0);

  lightDisplay.applyInstruction(new ToggleInstruction(0, 0, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(4);

  lightDisplay.applyInstruction(new ToggleInstruction(0, 0, 1, 1));
  expect(lightDisplay.getLitLights()).toBe(0);
});

test("should modify brightness of required lights", () => {
  const lightDisplay = new LightDisplay(2, 2);
  expect(lightDisplay.getTotalBrightness()).toBe(0);

  lightDisplay.applyInstruction(new IncreaseBrightnessInstruction(0, 0, 1, 1, 1));
  expect(lightDisplay.getTotalBrightness()).toBe(4);

  lightDisplay.applyInstruction(new IncreaseBrightnessInstruction(0, 0, 1, 1, 1));
  expect(lightDisplay.getTotalBrightness()).toBe(8);

  lightDisplay.applyInstruction(new IncreaseBrightnessInstruction(0, 0, 1, 1, 1));
  expect(lightDisplay.getTotalBrightness()).toBe(12);

  lightDisplay.applyInstruction(new IncreaseBrightnessInstruction(0, 0, 0, 0, 1));
  expect(lightDisplay.getTotalBrightness()).toBe(13);

  lightDisplay.applyInstruction(new IncreaseBrightnessInstruction(0, 0, 1, 1, 2));
  expect(lightDisplay.getTotalBrightness()).toBe(21);
});