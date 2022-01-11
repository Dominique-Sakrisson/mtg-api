import { Router } from 'express'
import token from '../auth/check-auth'

module.exports = Router()
.get('/', async (req,res,next) =>{
    console.log('hello from "/" ' + token);

    res.send('<h1>hello there</h1>')
})
