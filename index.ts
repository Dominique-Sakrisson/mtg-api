import express from 'express'
import dotenv from "dotenv"
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '.env')})

const app: express.Application = express();
//allows parsing of request bodies
app.use(express.json());
app.use('/api/v1/users', require('./lib/controllers/users.ts'))
app.use('/api/v1/decks', require('./lib/controllers/decks.ts'))

export default app;
