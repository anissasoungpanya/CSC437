import "dotenv/config";
import mongoose from "mongoose";

const user = process.env.MONGO_USER;
const pwd  = encodeURIComponent(process.env.MONGO_PWD ?? "");
const host = process.env.MONGO_CLUSTER; 
const db   = process.env.MONGO_DB ?? "webDB";

const uri = `mongodb+srv://${user}:${pwd}@${host}/${db}?retryWrites=true&w=majority`;

export async function connectDB() {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
  console.log("✅ MongoDB connected");
}
