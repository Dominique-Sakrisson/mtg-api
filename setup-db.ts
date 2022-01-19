// import pool from './database/pool.js'
const {pool} = require('./database/pool.ts')
// import setup from './database/setup.js'
const setup = require('./database/setup.ts')

try {
    setup(pool);
} catch (error) {
    console.log(error, ' setup db error');
}
