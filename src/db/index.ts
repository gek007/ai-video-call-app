import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const db = neon(process.env.DATABASE_URL!);

