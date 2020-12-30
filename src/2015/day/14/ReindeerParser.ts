import { Reindeer } from "./Reindeer";

export function parseReindeer(input: string[]) {
  return input.map(data => {
    const name: string = data.match(/\w+/)?.[0] ?? "unknown";
    const numbers = data.match(/\d+/g) ?? [];
    return new Reindeer(
      name,
      parseInt(numbers[0]),
      parseInt(numbers[1]),
      parseInt(numbers[2])
    );
  });
}
