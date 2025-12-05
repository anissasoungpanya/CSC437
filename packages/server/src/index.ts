import express, { Request, Response } from "express";
import path from "path";
import fs from "node:fs/promises";
import { connect } from "./services/mongo";
import parks from "./routes/parks";
import auth, { authenticateUser } from "./routes/auth";

const app = express();

app.use(express.json());

// Resolve static directory (hardcode to app/dist to avoid stale bundles)
function resolveStaticPath() {
  const resolved = path.resolve(__dirname, "../../app/dist");
  if (!require("fs").existsSync(resolved)) {
    throw new Error(`Static path not found: ${resolved}`);
  }
  return resolved;
}

const staticPath = resolveStaticPath();
console.log(`Serving static files from: ${staticPath}`);

// Explicit asset handler (before static) to guarantee /assets resolution
app.get(/^\/assets\/(.+)/, async (req: Request, res: Response) => {
  const relative = (req.params as any)[0];
  const filePath = path.join(staticPath, "assets", relative);
  console.log("ASSET req:", req.path, "->", filePath);
  if (filePath.endsWith(".js")) res.type("application/javascript");
  else if (filePath.endsWith(".css")) res.type("text/css");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(
        "Asset sendFile error:",
        filePath,
        (err as NodeJS.ErrnoException)?.code || err.message
      );
      if (!res.headersSent) res.status(404).send("Asset not found");
    }
  });
});

// Explicit images handler to avoid any static resolution issues
app.get(/^\/images\/(.+)/, async (req: Request, res: Response) => {
  const relative = (req.params as any)[0];
  const roots = [
    staticPath,
    path.resolve(__dirname, "../../app/dist"),
    path.resolve(__dirname, "../../app/public"),
    path.resolve(__dirname, "../../proto/dist"),
  ];

  let served = false;
  for (const root of roots) {
    const candidate = path.join(root, "images", relative);
    if (require("fs").existsSync(candidate)) {
      console.log("IMAGE req:", req.path, "->", candidate);
      res.sendFile(candidate, (err) => {
        if (err) {
          console.error(
            "Image sendFile error:",
            candidate,
            (err as NodeJS.ErrnoException)?.code || err.message
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

// Explicit favicon handler with multiple fallbacks
app.get("/favicon.ico", (req: Request, res: Response) => {
  const roots = [
    staticPath,
    path.resolve(__dirname, "../../app/dist"),
    path.resolve(__dirname, "../../app/public"),
    path.resolve(__dirname, "../../proto/dist"),
  ];
  let served = false;
  for (const root of roots) {
    const candidate = path.join(root, "favicon.ico");
    if (require("fs").existsSync(candidate)) {
      console.log("FAVICON req:", req.path, "->", candidate);
      res.sendFile(candidate, (err) => {
        if (err) {
          console.error(
            "Favicon sendFile error:",
            candidate,
            (err as NodeJS.ErrnoException)?.code || err.message
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

// Serve static files FIRST - handles /styles, /images, etc.
// This MUST be before any other routes
app.use(
  express.static(staticPath, {
    index: false, // Don't serve index.html for directory requests
    dotfiles: "ignore",
  })
);

// Serve registration page
app.get("/register", (req: Request, res: Response) => {
  // Use the staticPath that was set at server startup (it's correct)
  // But resolve it fresh to avoid any closure issues
  const filePath = path.resolve(staticPath, "newuser.html");
  fs.readFile(filePath, { encoding: "utf8" })
    .then((html) => {
      res.set("Content-Type", "text/html");
      res.send(html);
    })
    .catch((error: any) => {
      // If that fails, try resolving from __dirname
      const fallbackPath = path.resolve(
        __dirname,
        "../../app/dist/newuser.html"
      );
      return fs
        .readFile(fallbackPath, { encoding: "utf8" })
        .then((html) => {
          res.set("Content-Type", "text/html");
          res.send(html);
        })
        .catch(() => {
          console.error("Failed to serve registration page from both paths");
          res.status(404).send("Registration page not found");
        });
    });
});

// Also serve /newuser.html for backwards compatibility
app.get("/newuser.html", (req: Request, res: Response) => {
  const filePath = path.resolve(staticPath, "newuser.html");
  fs.readFile(filePath, { encoding: "utf8" })
    .then((html) => {
      res.set("Content-Type", "text/html");
      res.send(html);
    })
    .catch((error: any) => {
      // Fallback to app/dist
      const fallbackPath = path.resolve(
        __dirname,
        "../../app/dist/newuser.html"
      );
      return fs
        .readFile(fallbackPath, { encoding: "utf8" })
        .then((html) => {
          res.set("Content-Type", "text/html");
          res.send(html);
        })
        .catch(() => {
          res.status(404).send("Registration page not found");
        });
    });
});

// Redirect root to SPA home
app.get("/", (_req: Request, res: Response) => res.redirect("/app"));

app.get("/hello", (_req, res) => res.send("Hello from server!"));

app.use("/auth", auth);

app.use("/api/parks", authenticateUser, parks);

// SPA Routes: /app/... (must be after static middleware)
app.use("/app", async (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticPath, "index.html");
  try {
    const html = await fs.readFile(indexHtml, { encoding: "utf8" });
    res.send(html);
  } catch (error) {
    console.error("Error serving SPA:", error);
    res.status(500).send("Error loading application");
  }
});

async function startServer() {
  try {
    await connect("webDB");

    const PORT = Number(process.env.PORT) || 3000;
    const HOST = process.env.HOST || "0.0.0.0";
    app.listen(PORT, HOST, () =>
      console.log(`Server running at http://${HOST}:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
