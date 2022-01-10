import {Router} from 'express'

module.exports = Router()
.get('/', async (req,res,next) =>{
    console.log('hello from "/" ');
    res.send('<h1>hello there</h1>')
})
