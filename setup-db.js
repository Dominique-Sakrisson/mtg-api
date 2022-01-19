const { pool } = require('./database/pool.js')
const setup = require('./database/setup.js')
console.log(pool, 'not sure why');
setup(pool);
