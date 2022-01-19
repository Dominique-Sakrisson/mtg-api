import { NextFunction, Response, Request } from "express";
const {Router} = require('express');
const Deck = require('../models/Deck')

module.exports = Router()
.get('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log('get deckid hit');
       
})
.post('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log('post deckid hit');
    console.log(req.body);
        try {
            const deck = await Deck.insert(req.body);
            res.send(deck)
        } catch (error) {
            console.log(error);
        }
})
