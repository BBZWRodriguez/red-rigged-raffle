import { PrizeItem } from "./prize-item";

export class PrizeAllocator {
  constructor(
    private participants: string[],
    private prizeItems: PrizeItem[],
  ) {}

  public allocate(): Map<string, string> {
    const allocation = new Map<string, string>();
    const queue = [...this.participants];

    while (queue.length > 0 && this.prizeItems.length > 0) {
      const item = this.prizeItems[0];
      const participant = queue.shift()!;
      allocation.set(participant, item.name);

      if (item.count > 1) {
        item.count--;
      } else {
        this.prizeItems.shift();
      }
    }

    return allocation;
  }
}