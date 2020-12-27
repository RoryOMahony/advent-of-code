export class DataDocument {
  flattenedData: any[];

  constructor(flattenedData: any[]) {
    this.flattenedData = flattenedData;
  }

  calculateSum(): number {
    return this.flattenedData.reduce((acc, cur) => {
      return Number.isInteger(cur) ? acc + cur : acc;
    }, 0);
  }
}
