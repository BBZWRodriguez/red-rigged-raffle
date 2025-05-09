// testender-hase.test.ts
import { PrizeAllocator } from "./prize-allocator";
import { PrizeItem } from "./prize-item";

describe("PrizeAllocator", () => {
  test("allocates exactly as many prizes as available", () => {
    const participants = ["A", "B", "C", "D", "E"];
    const prizes = [
      new PrizeItem("Prize1", 2),
      new PrizeItem("Prize2", 1),
      new PrizeItem("Prize3", 1),
    ];
    // Summe der Preise = 2 + 1 + 1 = 4
    const result = new PrizeAllocator(participants, prizes).allocate();
    expect(result.size).toBe(4);
  });

  test("every allocated prize is a string", () => {
    const participants = ["X", "Y", "Z"];
    const prizes = [ new PrizeItem("GoldMedal", 3) ];
    const result = new PrizeAllocator(participants, prizes).allocate();
    for (const prize of result.values()) {
      expect(typeof prize).toBe("string");
    }
  });
});
