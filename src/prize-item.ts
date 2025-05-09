//   ____               _             _                         _   _
//  / ___| _____      _(_)_ __  _ __ | |__   __ _ _ __ ___ _ __| | | | __ _ ___  ___
// | |  _ / _ \ \ /\ / / | '_ \| '_ \| '_ \ / _` | '__/ _ \ '__| |_| |/ _` / __|/ _ \
// | |_| |  __/\ V  V /| | | | | | | | |_) | (_| | | |  __/ |  |  _  | (_| \__ \  __/
//  \____|\___| \_/\_/ |_|_| |_|_| |_|_.__/ \__,_|_|  \___|_|  |_| |_|\__,_|___/\___|
export class PrizeItem {
  constructor(
    private prizeName: string,
    private prizeCount: number,
  ) {}

  public get name(): string {
    return this.prizeName;
  }

  public get count(): number {
    return this.prizeCount;
  }

  public set count(value: number) {
    this.prizeCount = value;
  }
}
