const { Pool } = require('pg');

const pool = new Pool({
  connectionString:  process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});
console.log(pool, ' line 7');
pool.on('connect', () => console.log('Postgres connected'));

module.exports = {pool};

