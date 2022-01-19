DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    user_password TEXT NOT NULL
);

CREATE TABLE decks(
    id SERIAL PRIMARY KEY,
    deck_id TEXT UNIQUE NOT NULL,
    deck_name TEXT NOT NULL,
    cards TEXT[]
);
