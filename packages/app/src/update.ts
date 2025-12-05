import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { ParkData } from "server/models";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  switch (message[0]) {
    case "park/request": {
      const { parkId } = message[1];
      return [
        { ...model, park: undefined, error: undefined },
        requestPark(parkId, user)
          .then<Msg>((park) => ["park/load", { park }])
          .catch<Msg>((err: Error) => ["park/error", { error: err.message }]),
      ];
    }
    case "park/load": {
      const { park } = message[1];
      return { ...model, park, error: undefined };
    }
    case "park/error": {
      return { ...model, error: message[1].error };
    }
    case "park/save": {
      const [, payload, callbacks] = message;
      const { parkId, park } = payload;
      const current = model.park || {};
      return [
        model,
        savePark(parkId, { ...current, ...park } as ParkData, user, callbacks)
          .then<Msg>((saved) => ["park/load", { park: saved }])
          .catch<Msg>((err: Error) => ["park/error", { error: err.message }]),
      ];
    }
    default:
      return model;
  }
}

function requestPark(parkId: string, user: Auth.User): Promise<ParkData> {
  const headers = Auth.headers(user);
  return fetch(`/api/parks/${parkId}`, { headers }).then((res) => {
    if (res.status === 200) return res.json();
    throw new Error(`Failed to load park (${res.status})`);
  });
}

function savePark(
  parkId: string,
  park: ParkData,
  user: Auth.User,
  callbacks?: { onSuccess?: () => void; onFailure?: (err: Error) => void }
): Promise<ParkData> {
  return fetch(`/api/parks/${parkId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user),
    },
    body: JSON.stringify(park),
  })
    .then((res) => {
      if (res.status === 200) return res.json();
      throw new Error(`Failed to save park (${res.status})`);
    })
    .then((json) => {
      callbacks?.onSuccess?.();
      return json as ParkData;
    })
    .catch((err) => {
      callbacks?.onFailure?.(err);
      throw err;
    });
}
