import { API_URL } from "./config"

export type TDeck = {
    title: string
    cards: []
    _id: string
}

export async function getDecks(): Promise<TDeck[]> {
    const response = await fetch(`${API_URL}/decks`)
    return response.json()
}