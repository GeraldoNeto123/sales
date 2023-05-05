import { Client, QueryArrayConfig } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "mysales",
});

client.connect();

exports.query = async (query: QueryArrayConfig, values: any) => {
  const { rows } = await client.query(query, values);

  return rows;
};
