import { config } from 'dotenv'
config()

import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors, { CorsOptions } from 'cors'

import Deck from './models/Deck';

const PORT = 5000

const app = express()

const options: CorsOptions = {
    origin: '*'
}

app.use(cors(options))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('gg')
})

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({ 
        title: req.body.title
     })
    const createdDeck = await newDeck.save()
    res.json(createdDeck)
})

app.get('/decks', async (req: Request, res: Response) => {
    const decks = await Deck.find()
    console.log(decks)
    res.json(decks)
})

app.delete('/decks/:deckId', async (req: Request, res: Response) =>{
    const deckId = req.params.deckId
    const deck = await Deck.findByIdAndDelete(deckId)
    res.json(deck)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port: localhost:${PORT}`)
    app.listen(PORT)
})

