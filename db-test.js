require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

async function main() {
  await client.connect();
  const result = await client.query("SELECT * FROM recipes;");
  console.log(result.rows);
  await client.end();
}

main();
