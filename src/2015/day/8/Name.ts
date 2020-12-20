export class Name {
  name: string;

  constructor(input: string) {
    this.name = input;
  }

  getNumOfCharOfCode(): number {
    return this.name.length;
  }

  getNumOfCharInMem(): number {
    let modifiedString = this.name.replace(/\\\\|\\"/g, "_");
    modifiedString = modifiedString.replace(/\\[x][\w]{2}/g, "_");
    return modifiedString.length - 2;
  }

  getEncodedLength(): number {
    let modifiedString = this.name.replace(/\\|\"/g, "__");
    return modifiedString.length + 2
  }
}
