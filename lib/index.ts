import express from 'express'

const app: express.Application = express();

app.use('/api/v1/users', require('./controllers/users'))

export default app;
