// db.js
import pg from "pg";
import env from "dotenv";
import "dotenv/config";


const { Pool } = pg;
env.config();

// const requiredEnvVars = ["PG_USER", "PG_HOST", "PG_DATABASE", "PG_PASSWORD", "PG_PORT"];

// requiredEnvVars.forEach((varName) => {
//   if (!process.env[varName]) {
//     console.error(`Error: Missing required environment variable ${varName}`);
//     process.exit(1);
//   }
// });


const pool = new Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT || 5432),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});


export const db = new pg.Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
 port: process.env.PG_PORT,
  password: process.env.PG_PASSWORD,
  user: process.env.PG_USER,
});

// db.connect().
// then(() => console.log("Connected to the database!")
// )
// .catch((err) => {
//   console.log("Database connection error", err);
//   process.exit(1);
// });

db.on("error", (err) => {
  console.log("database error", err);
  process.exit(1);
});

export const query = (text, params) => db.query(text, params);