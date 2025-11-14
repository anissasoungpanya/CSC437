"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_config = require("dotenv/config");
var import_fs = require("fs");
var import_path = require("path");
var import_mongo = require("./services/mongo");
var import_park_svc = __toESM(require("./services/park-svc"));
function loadJSON(filePath) {
  return JSON.parse((0, import_fs.readFileSync)(filePath, "utf-8"));
}
const dataDir = (0, import_path.join)(process.cwd(), "../proto/public/data");
const channelData = loadJSON((0, import_path.join)(dataDir, "channel.json"));
const yosemiteData = loadJSON((0, import_path.join)(dataDir, "yosemite.json"));
const zionData = loadJSON((0, import_path.join)(dataDir, "zion.json"));
async function seed() {
  try {
    await (0, import_mongo.connect)("webDB");
    console.log("\u{1F331} Starting database seeding...");
    const parks = [
      {
        parkId: "channel",
        name: "Channel Islands",
        hikes: channelData.hikes,
        viewpoints: channelData.viewpoints,
        lodging: channelData.lodging,
        activities: channelData.activities
      },
      {
        parkId: "yosemite",
        name: "Yosemite",
        hikes: yosemiteData.hikes,
        viewpoints: yosemiteData.viewpoints,
        lodging: yosemiteData.lodging,
        activities: yosemiteData.activities
      },
      {
        parkId: "zion",
        name: "Zion",
        hikes: zionData.hikes,
        viewpoints: zionData.viewpoints,
        lodging: zionData.lodging,
        activities: zionData.activities
      }
    ];
    for (const park of parks) {
      const saved = await import_park_svc.default.upsert(park);
      console.log(`\u2705 Seeded park: ${saved.name} (${saved.parkId})`);
    }
    console.log("\u{1F389} Database seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("\u274C Error seeding database:", error);
    process.exit(1);
  }
}
seed();
