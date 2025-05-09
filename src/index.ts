// index.ts
import { PrizeAllocator } from "./prize-allocator";
import { PrizeItem }      from "./prize-item";

export class Raffle {
  public main(): void {
    const participants = ["Red", "Joe", "Lisa", "Max"];
    const initialPrizes = [
      new PrizeItem("PlayStation 5 Slim", 3),
      new PrizeItem("gebrauchte Sneaker", 5),
    ];
    const winners = new PrizeAllocator(participants, initialPrizes)
      .allocate();

    for (const [player, prize] of winners.entries()) {
      console.log(`${player} gewinnt ${prize}`);
    }
  }
}

new Raffle().main();
