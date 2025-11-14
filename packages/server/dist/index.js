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
var import_parks = __toESM(require("./routes/parks"));
const app = (0, import_express.default)();
app.use(import_express.default.json());
const staticDir = process.env.STATIC || import_path.default.join(__dirname, "../../proto/dist");
const staticPath = import_path.default.resolve(staticDir);
console.log(`Serving static files from: ${staticPath}`);
app.use(import_express.default.static(staticPath));
app.get("/hello", (_req, res) => res.send("Hello from server!"));
app.use("/api/parks", import_parks.default);
async function startServer() {
  try {
    await (0, import_mongo.connect)("webDB");
    const PORT = Number(process.env.PORT) || 3e3;
    const HOST = process.env.HOST || "0.0.0.0";
    app.listen(
      PORT,
      HOST,
      () => console.log(`Server running at http://${HOST}:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}
startServer();
