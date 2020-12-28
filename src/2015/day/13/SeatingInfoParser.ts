import { SeatingInfo } from "./SeatingInfo";

export function parseSeatingInfo(input: string[]): SeatingInfo[] {
  const info: SeatingInfo[] = [];

  for (const data of input) {
    const formattedData = data.replace(".", "");
    const splitData = formattedData.split(" ");
    const who = splitData[0];
    const seatedBy = splitData[10];
    const happiness =
      splitData[2] === "gain" ? parseInt(splitData[3]) : -splitData[3];
    info.push(new SeatingInfo(who, seatedBy, happiness));
  }

  return info;
}
