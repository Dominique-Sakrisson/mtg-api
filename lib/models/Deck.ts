const { pool } = require('../../database/pool');

interface card{
    id: string,
    cardName: string,
    imageUrl: string,
}
interface row {
    id: string,
    deckId: string,
    deckName: string,
    cards: Array<card>
}

module.exports = class Deck{
    id: string;
    deckId: string;
    deckName: string;
    cards: Array<card>;

    
    constructor(row: row){
        this.id = row.id;
        this.deckId = row.deckId;
        this.deckName = row.deckName;
        this.cards = row.cards;
    }

    static async getAll(){
        try {
            const {rows} = await pool.query(`SELECT * FROM decks`);
            return rows.map((deck: Deck) => new Deck(deck))
        } catch (error) {
            console.log(error);
        }
    }

    static async insert(deck: Deck){
        try {
            const {rows} = await pool.query(`INSERT INTO decks (deck_id, deck_name, cards) VALUES ($1,$2,$3) RETURNING (id,deck_id, deck_name, cards)`, [deck.deckId, deck.deckName, deck.cards]);
            return new Deck(rows[0]);
        } catch (error) {
            console.log(error);
        }
    }
}

