import { Instruction } from "./instructions/Instruction";

export class LightDisplay {
  lights: Map<number, Array<number>>;

  constructor(rows: number, columns: number) {
    this.lights = new Map();

    for (let i = 0; i < rows; i++) {
      const rowLights = new Array<number>();
      this.lights.set(i, rowLights);
      for (let j = 0; j < columns; j++) {
        rowLights.push(0);
      }
    }
  }

  setLight(x: number, y: number, value: number): void {
    const row = this.lights.get(x);
    if (row) {
      row[y] = value;
    }
  }

  getLight(x: number, y: number): number {
    const row = this.lights.get(x);
    return row ? row[y] : 0;
  }

  getLitLights(): number {
    let lightsLit = 0;
    this.lights.forEach((value, key) => {
      for (let i = 0; i < value.length; i++) {
        if (value[i] > 0) {
          lightsLit++;
        }
      }
    });

    return lightsLit;
  }

  getTotalBrightness(): number {
    let totalBrightness = 0;
    this.lights.forEach((value, key) => {
      for (let i = 0; i < value.length; i++) {
        totalBrightness += value[i];
      }
    });

    return totalBrightness;
  }

  applyInstruction(instruction: Instruction): void {
    for (let i = instruction.getFromX(); i <= instruction.getToX(); i++) {
      for (let j = instruction.getFromY(); j <= instruction.getToY(); j++) {
        const newLightValue = instruction.apply(this.getLight(i, j));
        this.setLight(i, j, newLightValue);
      }
    }
  }
}
