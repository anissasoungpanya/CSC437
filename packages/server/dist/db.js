"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var db_exports = {};
__export(db_exports, {
  connectDB: () => connectDB
});
module.exports = __toCommonJS(db_exports);
var import_config = require("dotenv/config");
var import_mongoose = __toESM(require("mongoose"));
const user = process.env.MONGO_USER;
const pwd = encodeURIComponent(process.env.MONGO_PWD ?? "");
const host = process.env.MONGO_CLUSTER;
const db = process.env.MONGO_DB ?? "webDB";
const uri = `mongodb+srv://${user}:${pwd}@${host}/${db}?retryWrites=true&w=majority`;
async function connectDB() {
  await import_mongoose.default.connect(uri, { serverSelectionTimeoutMS: 8e3 });
  console.log("MongoDB connected");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connectDB
});
