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
var import_promises = __toESM(require("node:fs/promises"));
var import_mongo = require("./services/mongo");
var import_parks = __toESM(require("./routes/parks"));
var import_auth = __toESM(require("./routes/auth"));
const app = (0, import_express.default)();
app.use(import_express.default.json());
function resolveStaticPath() {
  const resolved = import_path.default.resolve(__dirname, "../../app/dist");
  if (!require("fs").existsSync(resolved)) {
    throw new Error(`Static path not found: ${resolved}`);
  }
  return resolved;
}
const staticPath = resolveStaticPath();
console.log(`Serving static files from: ${staticPath}`);
app.get(/^\/assets\/(.+)/, async (req, res) => {
  const relative = req.params[0];
  const filePath = import_path.default.join(staticPath, "assets", relative);
  console.log("ASSET req:", req.path, "->", filePath);
  if (filePath.endsWith(".js")) res.type("application/javascript");
  else if (filePath.endsWith(".css")) res.type("text/css");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(
        "Asset sendFile error:",
        filePath,
        err?.code || err.message
      );
      if (!res.headersSent) res.status(404).send("Asset not found");
    }
  });
});
app.get(/^\/images\/(.+)/, async (req, res) => {
  const relative = req.params[0];
  const roots = [
    staticPath,
    import_path.default.resolve(__dirname, "../../app/dist"),
    import_path.default.resolve(__dirname, "../../app/public"),
    import_path.default.resolve(__dirname, "../../proto/dist")
  ];
  let served = false;
  for (const root of roots) {
    const candidate = import_path.default.join(root, "images", relative);
    if (require("fs").existsSync(candidate)) {
      console.log("IMAGE req:", req.path, "->", candidate);
      res.sendFile(candidate, (err) => {
        if (err) {
          console.error(
            "Image sendFile error:",
            candidate,
            err?.code || err.message
          );
          if (!res.headersSent) res.status(404).send("Image not found");
        }
      });
      served = true;
      break;
    }
  }
  if (!served && !res.headersSent) {
    console.error("Image not found in roots for", req.path);
    res.status(404).send("Image not found");
  }
});
app.get("/favicon.ico", (req, res) => {
  const roots = [
    staticPath,
    import_path.default.resolve(__dirname, "../../app/dist"),
    import_path.default.resolve(__dirname, "../../app/public"),
    import_path.default.resolve(__dirname, "../../proto/dist")
  ];
  let served = false;
  for (const root of roots) {
    const candidate = import_path.default.join(root, "favicon.ico");
    if (require("fs").existsSync(candidate)) {
      console.log("FAVICON req:", req.path, "->", candidate);
      res.sendFile(candidate, (err) => {
        if (err) {
          console.error(
            "Favicon sendFile error:",
            candidate,
            err?.code || err.message
          );
          if (!res.headersSent) res.status(404).send("Favicon not found");
        }
      });
      served = true;
      break;
    }
  }
  if (!served && !res.headersSent) {
    console.error("Favicon not found in roots for", req.path);
    res.status(404).send("Favicon not found");
  }
});
app.use(
  import_express.default.static(staticPath, {
    index: false,
    // Don't serve index.html for directory requests
    dotfiles: "ignore"
  })
);
app.get("/register", (req, res) => {
  const filePath = import_path.default.resolve(staticPath, "newuser.html");
  import_promises.default.readFile(filePath, { encoding: "utf8" }).then((html) => {
    res.set("Content-Type", "text/html");
    res.send(html);
  }).catch((error) => {
    const fallbackPath = import_path.default.resolve(
      __dirname,
      "../../app/dist/newuser.html"
    );
    return import_promises.default.readFile(fallbackPath, { encoding: "utf8" }).then((html) => {
      res.set("Content-Type", "text/html");
      res.send(html);
    }).catch(() => {
      console.error("Failed to serve registration page from both paths");
      res.status(404).send("Registration page not found");
    });
  });
});
app.get("/newuser.html", (req, res) => {
  const filePath = import_path.default.resolve(staticPath, "newuser.html");
  import_promises.default.readFile(filePath, { encoding: "utf8" }).then((html) => {
    res.set("Content-Type", "text/html");
    res.send(html);
  }).catch((error) => {
    const fallbackPath = import_path.default.resolve(
      __dirname,
      "../../app/dist/newuser.html"
    );
    return import_promises.default.readFile(fallbackPath, { encoding: "utf8" }).then((html) => {
      res.set("Content-Type", "text/html");
      res.send(html);
    }).catch(() => {
      res.status(404).send("Registration page not found");
    });
  });
});
app.get("/", (_req, res) => res.redirect("/app"));
app.get("/hello", (_req, res) => res.send("Hello from server!"));
app.use("/auth", import_auth.default);
app.use("/api/parks", import_auth.authenticateUser, import_parks.default);
app.use("/app", async (req, res) => {
  const indexHtml = import_path.default.resolve(staticPath, "index.html");
  try {
    const html = await import_promises.default.readFile(indexHtml, { encoding: "utf8" });
    res.send(html);
  } catch (error) {
    console.error("Error serving SPA:", error);
    res.status(500).send("Error loading application");
  }
});
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
