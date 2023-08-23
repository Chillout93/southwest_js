import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

process.on("SIGTERM", process.exit());
process.on("SIGINT", process.exit());

const app = express();
app.use(cors());

const port = 8000;

const prisma = new PrismaClient();

app.get("/api/talks", async (req, res) => {
  const result = await prisma.talk.findMany();
  res.send(result);
});

app.options("/healthcheck", (req, res) => res.send());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
