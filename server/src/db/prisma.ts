import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";



const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/lean?schema=public",
});

export const prisma = new PrismaClient({ adapter });
