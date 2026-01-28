import { MongoClient } from "mongodb";

// const client = new MongoClient(process.env.MONGO_URI_LOCAL);
const client = new MongoClient(process.env.MONGO_URI);

await client.connect();

console.log("MongoDB remote connected");

export const db = client.db(process.env.DB_NAME);
