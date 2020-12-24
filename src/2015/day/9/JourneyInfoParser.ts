import { JourneyInfo } from "./JourneyInfo";

export function parseJourneyInfo(input: string): JourneyInfo {
  const data = input.split(" ");
  const from = data[0];
  const to = data[2];
  const distance = parseInt(data[4]);
  return new JourneyInfo(from, to, distance);
}
