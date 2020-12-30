import { Profile } from "./Profile";
import { Reindeer } from "./Reindeer";

export function simulateRace(profiles: Profile[], endTime: number): Reindeer[] {
  for (let i = 1; i <= endTime; i++) {
    let winningReindeer: Reindeer[] = [];
    let highestDistance = Number.NEGATIVE_INFINITY;
    for (const profile of profiles) {
      const currentDistance = profile.getDistance(i);
      if (currentDistance > highestDistance) {
        winningReindeer = [profile.getReindeer()];
        highestDistance = currentDistance;
      } else if (currentDistance === highestDistance) {
        winningReindeer.push(profile.getReindeer());
      }
    }
    winningReindeer.forEach(value => value.increasePoints());
  }

  const orderedReindeer = profiles.map(profile => profile.getReindeer());
  orderedReindeer.sort((a, b) => b.getPoints() - a.getPoints());
  return orderedReindeer;
}
