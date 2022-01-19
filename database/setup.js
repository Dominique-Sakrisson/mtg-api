const fs = require('fs').promises;

module.exports = async (pool) => {
    const sqlQueries = await fs.readFile(`${__dirname}/../sql/setup.sql`, {
        encoding: 'utf-8'
    });
    console.log(pool, 'setup file');
    return pool.query(sqlQueries);
}
