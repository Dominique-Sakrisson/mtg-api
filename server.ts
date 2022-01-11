import app from './src/index'
import http from 'http'
const server: http.Server = http.createServer(app);
const port: number = 3000 || process.env.PORT;

server.listen(port, () => {
    console.log(`Started on port ${port}`);
})
