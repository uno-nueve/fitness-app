import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Deck from './models/Deck';

const PORT = 5000;
const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('welcome!');
});

app.post('/decks', async (req: Request, res: Response) => {
    console.log(req.body);
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    'mongodb+srv://unonueve95:Zu0hE8bG5QI8134c@cluster0.ystn51r.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log(`listening in port ${PORT}`);
    
    app.listen(PORT)
})

