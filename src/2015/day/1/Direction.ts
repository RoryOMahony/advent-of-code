export enum Direction {
  UP = 1,
  DOWN = -1
}

export function createDirection(input: string): Direction {
  if (input === "(") {
    return Direction.UP;
  }
  if (input === ")") {
    return Direction.DOWN;
  }
  throw "'Input' is not a direction";
}
