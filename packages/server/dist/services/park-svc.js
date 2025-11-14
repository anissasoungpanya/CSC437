"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var park_svc_exports = {};
__export(park_svc_exports, {
  default: () => park_svc_default
});
module.exports = __toCommonJS(park_svc_exports);
var import_mongoose = require("mongoose");
const CardItemSchema = new import_mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    href: { type: String, required: true, trim: true },
    subtitle: String,
    imgSrc: String
  },
  { _id: false }
);
const ParkSchema = new import_mongoose.Schema(
  {
    parkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true
    },
    name: { type: String, required: true, trim: true },
    hikes: [CardItemSchema],
    viewpoints: [CardItemSchema],
    lodging: [CardItemSchema],
    activities: [CardItemSchema],
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: "parks" }
);
const ParkModel = (0, import_mongoose.model)("Park", ParkSchema);
function index() {
  return ParkModel.find({}, { parkId: 1, name: 1, _id: 0 }).lean();
}
function get(parkId) {
  return ParkModel.findOne({ parkId }).lean();
}
function upsert(doc) {
  return ParkModel.findOneAndUpdate(
    { parkId: doc.parkId },
    { ...doc, updatedAt: /* @__PURE__ */ new Date() },
    { upsert: true, new: true, runValidators: true }
  ).lean();
}
function remove(parkId) {
  return ParkModel.deleteOne({ parkId }).then((r) => r.deletedCount === 1);
}
var park_svc_default = { index, get, upsert, remove };
