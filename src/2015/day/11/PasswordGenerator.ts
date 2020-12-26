const MIN_CHAR_CODE: number = "a".charCodeAt(0);
const MAX_CHAR_CODE: number = "z".charCodeAt(0);

export function generatePassword(oldPassword: string): string {
  let generatedPassword = oldPassword;
  let validPasswordFound = false;

  while (!validPasswordFound) {
    const newPassword = incrementPassword(
      generatedPassword,
      oldPassword.length - 1
    );
    if (newPassword === generatedPassword) {
      break;
    }
    generatedPassword = newPassword;
    validPasswordFound = validatePassword(generatedPassword);
  }

  return generatedPassword;
}

export function incrementPassword(
  password: string,
  indexToIncrement: number
): string {
  if (indexToIncrement < 0) {
    return password;
  }

  const charCodeToIncrement = password.charCodeAt(indexToIncrement);
  let newCharCode = charCodeToIncrement + 1;
  if (newCharCode > MAX_CHAR_CODE) {
    newCharCode = MIN_CHAR_CODE;
  }

  const newChar = String.fromCharCode(newCharCode);
  let newPassword =
    password.substring(0, indexToIncrement) +
    newChar +
    password.substring(indexToIncrement + 1);

  if (newCharCode === MIN_CHAR_CODE) {
    return incrementPassword(newPassword, indexToIncrement - 1);
  }
  return newPassword;
}

export function validatePassword(password: string): boolean {
  return (
    lowerCaseLetterCheck(password) &&
    invalidLettersCheck(password) &&
    nonOverlappingPairsCheck(password) &&
    runOfIncreasingLettersCheck(password)
  );
}

// must be 8 lowercase letters
function lowerCaseLetterCheck(input: string): boolean {
  return input.match(/[a-z]/g)?.length === 8;
}

// can't contain the letter i, o, l
function invalidLettersCheck(input: string): boolean {
  return input.match(/i|o|l/) === null;
}

// must contain at least 2 different, non-overlapping pairs of letters e.g. aa, bb, zz
function nonOverlappingPairsCheck(input: string): boolean {
  const pairs = input.match(/([a-z])\1/g);
  const uniquePairs: Set<string> = new Set<string>();
  pairs?.forEach(pair => uniquePairs.add(pair));
  return uniquePairs.size >= 2;
}

// must have a run of 3 increasing letters e.g. abc, cde
function runOfIncreasingLettersCheck(input: string): boolean {
  const RUN_OF_LETTERS = 3;

  for (let i = 0; i <= input.length - RUN_OF_LETTERS; i++) {
    let run = 1;
    let previousCharCode = input.charCodeAt(i);

    for (let j = i + 1; j <= i + RUN_OF_LETTERS; j++) {
      const charCode = input.charCodeAt(j);
      if (previousCharCode !== charCode - 1) {
        break;
      }
      previousCharCode = charCode;
      run++;
    }

    if (run === RUN_OF_LETTERS) {
      return true;
    }
  }

  return false;
}
