import { ParkData } from "server/models";

export interface Model {
  park?: ParkData;
  error?: string;
}

export const init: Model = {};
