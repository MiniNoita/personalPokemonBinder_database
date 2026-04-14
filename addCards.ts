import './src/connect.ts'; //makes sure, you connect to the database
import mongoose from 'mongoose';
import { Binder } from './models/Binder.ts'; //this is the model
import {
  cardList_Rockruff,
  cardList_Zacian,
  cardList_Lycanroc,
} from './cardData.ts'; //this has the data

//This is first version of and is pretty much hard coded meaning user can't really input anything right now, only run codes

const rockruffs = new Binder({
  pokemon_name: 'Rockruff',
  cards: cardList_Rockruff,
});
const zacians = new Binder({
  pokemon_name: 'Zacian',
  cards: cardList_Zacian,
});
const lycanrocs = new Binder({
  pokemon_name: 'Lycanroc',
  cards: cardList_Lycanroc,
});

/*
It's called addToDatabase, not Binder, because right now, cards are added to Binder AND to wishlist. Adding to Binder means you OWN the card. Those cards that are in wishlist, you don't own
*/

async function addToDatabase(pokemon: any) {
  const result = await Binder.create(pokemon).catch((err) => {
    throw err;
  });

  console.log(
    `Added new cards to database for pokemon \n ${pokemon.pokemon_name}: \n ${result}`,
  );
}

//add the rockruff cards
addToDatabase(rockruffs);

//add the zacian cards
addToDatabase(zacians);

//add the lycanroc cards
addToDatabase(lycanrocs);
