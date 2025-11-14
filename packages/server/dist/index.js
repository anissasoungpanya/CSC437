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
var import_express = __toESM(require("express"));
var import_path = __toESM(require("path"));
var import_mongo = require("./services/mongo");
var import_park_svc = __toESM(require("./services/park-svc"));
const app = (0, import_express.default)();
app.use(import_express.default.json());
const staticDir = process.env.STATIC || import_path.default.join(__dirname, "../../proto/dist");
const staticPath = import_path.default.resolve(staticDir);
console.log(`Serving static files from: ${staticPath}`);
app.use(import_express.default.static(staticPath));
app.get("/hello", (_req, res) => res.send("Hello from server!"));
app.get("/api/parks", async (_req, res) => {
  try {
    const list = await import_park_svc.default.index();
    console.log(`Found ${list.length} parks`);
    res.json(list);
  } catch (error) {
    console.error("Error fetching parks:", error);
    res.status(500).json({ error: "Failed to fetch parks" });
  }
});
app.get("/api/parks/:parkId", async (req, res) => {
  try {
    const doc = await import_park_svc.default.get(req.params.parkId);
    if (!doc) {
      console.log(`Park ${req.params.parkId} not found`);
      return res.status(404).send();
    }
    res.json(doc);
  } catch (error) {
    console.error(`Error fetching park ${req.params.parkId}:`, error);
    res.status(500).json({ error: "Failed to fetch park" });
  }
});
app.put("/api/parks/:parkId", async (req, res) => {
  try {
    const { parkId } = req.params;
    const body = { ...req.body, parkId };
    const saved = await import_park_svc.default.upsert(body);
    res.json(saved);
  } catch (error) {
    console.error(`Error upserting park ${req.params.parkId}:`, error);
    res.status(500).json({ error: "Failed to save park" });
  }
});
app.delete("/api/parks/:parkId", async (req, res) => {
  try {
    const ok = await import_park_svc.default.remove(req.params.parkId);
    res.status(ok ? 204 : 404).send();
  } catch (error) {
    console.error(`Error deleting park ${req.params.parkId}:`, error);
    res.status(500).json({ error: "Failed to delete park" });
  }
});
async function startServer() {
  try {
    await (0, import_mongo.connect)("webDB");
    const PORT = process.env.PORT || 4e3;
    app.listen(
      PORT,
      () => console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}
startServer();
