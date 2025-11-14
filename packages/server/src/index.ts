import express, { Request, Response } from "express";
import path from "path";
import { connect } from "./services/mongo";
import Parks from "./services/park-svc";

const app = express();
app.use(express.json());

// Serve static files from proto/dist (as per Lab 10 instructions)
// __dirname points to server/dist, so we need to go up to packages, then into proto/dist
const staticDir =
  process.env.STATIC || path.join(__dirname, "../../proto/dist");
const staticPath = path.resolve(staticDir);
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

// Define routes
app.get("/hello", (_req, res) => res.send("Hello from server!"));

app.get("/api/parks", async (_req: Request, res: Response) => {
  try {
    const list = await Parks.index();
    console.log(`Found ${list.length} parks`);
    res.json(list);
  } catch (error) {
    console.error("Error fetching parks:", error);
    res.status(500).json({ error: "Failed to fetch parks" });
  }
});

app.get("/api/parks/:parkId", async (req: Request, res: Response) => {
  try {
    const doc = await Parks.get(req.params.parkId);
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

app.put("/api/parks/:parkId", async (req: Request, res: Response) => {
  try {
    const { parkId } = req.params;
    const body = { ...req.body, parkId };
    const saved = await Parks.upsert(body);
    res.json(saved);
  } catch (error) {
    console.error(`Error upserting park ${req.params.parkId}:`, error);
    res.status(500).json({ error: "Failed to save park" });
  }
});

app.delete("/api/parks/:parkId", async (req: Request, res: Response) => {
  try {
    const ok = await Parks.remove(req.params.parkId);
    res.status(ok ? 204 : 404).send();
  } catch (error) {
    console.error(`Error deleting park ${req.params.parkId}:`, error);
    res.status(500).json({ error: "Failed to delete park" });
  }
});

// Connect to MongoDB before starting server
async function startServer() {
  try {
    await connect("webDB");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
