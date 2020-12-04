import { Direction, createDirection } from "./Direction";

export function calculateFloor(input: string): number {
  const directions = convertInputToDirections(input);
  return directions.reduce((result, direction) => result + direction, 0);
}

export function findBasementInstruction(input: string): number {
  const directions = convertInputToDirections(input);

  let result = 0;
  for (let i = 0; i < directions.length; i++) {
    result += directions[i];
    if (result < 0) {
      return i + 1;
    }
  }

  return 0;
}

function convertInputToDirections(input: string): Array<Direction> {
  return Array.from(input).map(value => createDirection(value));
}
