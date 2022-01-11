import express from 'express'
import dotenv from "dotenv"
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '.env')})

const app: express.Application = express();

app.use('/api/v1/users', require('./lib/controllers/users'))

export default app;
