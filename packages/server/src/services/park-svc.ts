import { Schema, model } from "mongoose";
import type { ParkData, CardItem } from "../models/park";

const CardItemSchema = new Schema<CardItem>(
  {
    title: { type: String, required: true, trim: true },
    href: { type: String, required: true, trim: true },
    subtitle: String,
    imgSrc: String,
  },
  { _id: false }
);

const ParkSchema = new Schema<ParkData>(
  {
    parkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    hikes: [CardItemSchema],
    viewpoints: [CardItemSchema],
    lodging: [CardItemSchema],
    activities: [CardItemSchema],
    updatedAt: { type: Date, default: Date.now },
  },
  { collection: "parks" }
);

const ParkModel = model<ParkData>("Park", ParkSchema);

function index(): Promise<Pick<ParkData, "parkId" | "name">[]> {
  return ParkModel.find({}, { parkId: 1, name: 1, _id: 0 }).lean();
}

function get(parkId: string): Promise<ParkData | null> {
  return ParkModel.findOne({ parkId }).lean();
}

function upsert(doc: ParkData): Promise<ParkData> {
  return ParkModel.findOneAndUpdate(
    { parkId: doc.parkId },
    { ...doc, updatedAt: new Date() },
    { upsert: true, new: true, runValidators: true }
  ).lean() as unknown as Promise<ParkData>;
}

function remove(parkId: string): Promise<boolean> {
  return ParkModel.deleteOne({ parkId }).then((r) => r.deletedCount === 1);
}

export default { index, get, upsert, remove };
