import express, { Request, Response } from "express";
import path from "path";
import { connect } from "./services/mongo";
import parks from "./routes/parks";
import auth, { authenticateUser } from "./routes/auth";

const app = express();

app.use(express.json());

const staticDir =
  process.env.STATIC || path.join(__dirname, "../../proto/dist");
const staticPath = path.resolve(staticDir);
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

app.get("/hello", (_req, res) => res.send("Hello from server!"));

app.use("/auth", auth);

app.use("/api/parks", authenticateUser, parks);

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
