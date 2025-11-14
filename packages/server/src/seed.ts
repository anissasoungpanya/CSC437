import "dotenv/config";
import { readFileSync } from "fs";
import { join } from "path";
import { connect } from "./services/mongo";
import Parks from "./services/park-svc";
import type { ParkData } from "./models/park";

function loadJSON(filePath: string) {
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

// Resolve path to data directory relative to server directory
// When running from dist/, go up to packages/ then into proto/public/data
const dataDir = join(process.cwd(), "../proto/public/data");
const channelData = loadJSON(join(dataDir, "channel.json"));
const yosemiteData = loadJSON(join(dataDir, "yosemite.json"));
const zionData = loadJSON(join(dataDir, "zion.json"));

async function seed() {
  try {
    await connect("webDB");
    console.log("🌱 Starting database seeding...");

    const parks: ParkData[] = [
      {
        parkId: "channel",
        name: "Channel Islands",
        hikes: channelData.hikes,
        viewpoints: channelData.viewpoints,
        lodging: channelData.lodging,
        activities: channelData.activities,
      },
      {
        parkId: "yosemite",
        name: "Yosemite",
        hikes: yosemiteData.hikes,
        viewpoints: yosemiteData.viewpoints,
        lodging: yosemiteData.lodging,
        activities: yosemiteData.activities,
      },
      {
        parkId: "zion",
        name: "Zion",
        hikes: zionData.hikes,
        viewpoints: zionData.viewpoints,
        lodging: zionData.lodging,
        activities: zionData.activities,
      },
    ];

    for (const park of parks) {
      const saved = await Parks.upsert(park);
      console.log(`✅ Seeded park: ${saved.name} (${saved.parkId})`);
    }

    console.log("🎉 Database seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
