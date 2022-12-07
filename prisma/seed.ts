import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const craig = await db.user.create({
    data: {
      name: "Craig the Cockroach",
      email: "devrel@cockroachlabs.com",
      passwordHash: await bcrypt.hash("resilient", 10)
    }
  });
}

seed();
