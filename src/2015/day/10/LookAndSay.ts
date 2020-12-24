export function calculateFinalSequence(
  inputSequence: string,
  iterations: number
): string {
  let finalSequence = inputSequence;
  for (let i = 0; i < iterations; i++) {
    finalSequence = calculateSequence(finalSequence);
  }
  return finalSequence;
}

export function calculateSequence(inputSequence: string): string {
  // Capture a digit and then match the captured digit between zero and unlimited times. Return all matches
  const charGroups: RegExpMatchArray | null = inputSequence.match(/(\d)\1*/g);
  if (charGroups === null) {
    return "";
  }

  let resultSequence: string[] = [];
  for (const charGroup of charGroups) {
    resultSequence.push(charGroup.length.toString());
    resultSequence.push(charGroup.charAt(0));
  }
  return resultSequence.join("");
}
