import { ParkData } from "server/models";

export type Msg =
  | ["park/request", { parkId: string }]
  | ["park/load", { park: ParkData }]
  | ["park/error", { error: string }]
  | [
      "park/save",
      { parkId: string; park: Partial<ParkData> },
      {
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ];
